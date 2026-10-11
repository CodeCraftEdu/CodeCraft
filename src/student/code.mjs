export function createCodeTools({ element }) {
  function codeTokens(source) {
    const tokens = [];
    const add = (text, kind = '') => { if (text) tokens.push({ text, kind }); };
    if (/<\/?[a-z][\w:-]*(?:\s|>|\/)|<!doctype|<!--/i.test(source)) {
      const tags = /<!--[\s\S]*?(?:-->|$)|<!doctype[^>]*>|<\/?[a-z][\w:-]*(?:[^"'<>]|"[^"]*"|'[^']*')*>/gi;
      let position = 0;
      for (const match of source.matchAll(tags)) {
        add(source.slice(position, match.index));
        const tag = match[0];
        if (tag.startsWith('<!--')) add(tag, 'comment');
        else if (/^<!doctype/i.test(tag)) add(tag, 'tag');
        else {
          const opening = tag.match(/^(<\/?)([\w:-]+)/);
          add(opening[1]); add(opening[2], 'tag');
          const rest = tag.slice(opening[0].length);
          let offset = 0;
          for (const attribute of rest.matchAll(/"[^"]*"|'[^']*'|[\w:-]+(?=\s*=)/g)) {
            add(rest.slice(offset, attribute.index));
            add(attribute[0], /^["']/.test(attribute[0]) ? 'string' : 'attribute');
            offset = attribute.index + attribute[0].length;
          }
          add(rest.slice(offset));
        }
        position = match.index + tag.length;
      }
      add(source.slice(position));
    } else {
      const css = /\{[\s\S]*?[\w-]+\s*:/.test(source) && !/^\s*\{/.test(source);
      const python = /(^|\n)\s*(?:def |from |import |print\(|if .*:|for .*:|while .*:)/.test(source);
      const pattern = python
        ? /#[^\n]*|"""[\s\S]*?(?:"""|$)|'''[\s\S]*?(?:'''|$)|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b(?:def|return|if|elif|else|for|while|in|import|from|as|and|or|not|True|False|None|break|continue|class|try|except|with)\b|\b(?:print|input|int|float|str|len|range|list|sum|min|max)(?=\s*\()|\b\d+(?:\.\d+)?\b/g
        : /\/\*[\s\S]*?(?:\*\/|$)|\/\/[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b(?:const|let|var|function|return|if|else|for|while|new|true|false|null|undefined|async|await|class|import|export)\b|[\w-]+(?=\s*:)|#[\da-fA-F]{3,8}\b|\b\d+(?:\.\d+)?(?:px|rem|em|%|s)?/g;
      let position = 0;
      for (const match of source.matchAll(pattern)) {
        add(source.slice(position, match.index));
        const value = match[0];
        const kind = /^(?:\/\*|\/\/)/.test(value) || (python && value.startsWith('#')) ? 'comment'
          : /^["']/.test(value) ? 'string'
          : /^\d|^#/.test(value) ? 'number'
          : css ? 'attribute'
          : /^(?:print|input|int|float|str|len|range|list|sum|min|max)$/.test(value) ? 'function' : 'keyword';
        add(value, kind);
        position = match.index + value.length;
      }
      add(source.slice(position));
    }
    return tokens;
  }
  function highlightCode(node, source, activeProperty) {
    node.replaceChildren();
    node.className = 'editor-code';
    const lines = source.split('\n');
    const content = lines.map((text, index) => {
      const active = activeProperty && text.trimStart().startsWith(activeProperty + ':');
      const line = element('span', 'editor-line' + (active ? ' editor-line--active' : ''));
      const number = element('span', 'editor-line__number');
      number.setAttribute('aria-hidden', 'true');
      number.setAttribute('data-line', String(index + 1));
      const value = element('span', 'editor-line__text');
      const indent = text.match(/^[ \t]*/)[0].replace(/\t/g, '    ').length;
      value.setAttribute('style', '--indent: ' + indent + 'ch');
      line.append(number, value);
      if (index) node.append('\n');
      node.append(line);
      return value;
    });
    let index = 0;
    codeTokens(source).forEach(token => {
      token.text.split('\n').forEach((part, offset) => {
        if (offset) index++;
        if (part) content[index].append(token.kind ? element('span', 'syntax-token--' + token.kind, part) : part);
      });
    });
  }
  function codeFileLabel(code, label) {
    if (label && !['HTML', 'CSS'].includes(label)) return label;
    if (/<\/?[a-z][\w:-]*(?:\s|>|\/)|<!doctype/i.test(code)) return 'index.html';
    if (/\{[\s\S]*?[\w-]+\s*:/.test(code) && !/^\s*\{/.test(code)) return 'style.css';
    if (/\b(?:const|let|var|function|console\.log)\b/.test(code)) return 'script.js';
    if (/\b(?:print|input|range)\s*\(|(^|\n)\s*(?:def |import |from |if .*:|for .*:)/.test(code)) return 'main.py';
    return label || 'Code';
  }
  function createCode(code, filename) {
    const editor = element('div', 'code-editor');
    editor.append(element('p', 'code-editor__header', codeFileLabel(code, filename)));
    const pre = element("pre", "code-block");
    const codeNode = element("code");
    highlightCode(codeNode, code);
    pre.append(codeNode);
    editor.append(pre);
    return editor;
  }


  return { codeTokens, highlightCode, codeFileLabel, createCode };
}
