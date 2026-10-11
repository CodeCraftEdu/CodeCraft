export function createTextTools() {
  const studentTitle = (text) =>
    text
      .replace(/^\s*\d+\s*(?:--+|[.:-]|[\u2013\u2014])\s*/, '')
      .replace(/\s+(?:--+|[\u2013\u2014]|-)\s+/g, ' : ');
  function appendInlineText(node, text) {
    // Construire des nœuds texte : les exemples HTML ne sont jamais exécutés.
    const tags =
      'html|head|body|title|meta|link|h[1-6]|p|a|img|ul|ol|li|div|span|header|main|footer|nav|section|article|strong|em|br|button|input|label|form|table|thead|tbody|tr|th|td|figure|figcaption|select|option|textarea|video|audio|source|script|style';
    // Les noms nus sont reconnus uniquement en Web. « a » et « article » restent
    // des mots ordinaires sauf après une mention explicite de balise/élément.
    const web = document.body?.dataset?.domain === 'web';
    const attributes =
      'lang|charset|href|src|alt|srcset|sizes|rel|class|id|target|loading|colspan|rowspan';
    const pair = '(?:html|head|body|title|h[1-6]|ul|ol|li|div|span|' + attributes + ')';
    const boundary = '(?![\\w-]|\\.[\\w])';
    const bare = web
      ? '|(?<![\\w./-])(?:' +
        attributes +
        ')\\s*=\\s*(?:"[^"\\n]*"|\'[^\'\\n]*\')' +
        '|(?<![\\w./-])' +
        pair +
        '(?:/' +
        pair +
        ')+' +
        boundary +
        '|(?<![\\w./-])/?(?:html|head|body|title|meta|link|h[1-6]|p|img|ul|ol|li|div|span|header|main|footer|nav|strong|em|br|input|textarea|' +
        attributes +
        ')' +
        boundary +
        '|(?<=balise |élément )a\\b|(?<=balise |élément )article\\b|(?<=attribut )(?:style|name|type|content|value|width|height)\\b'
      : '';
    const pattern = new RegExp(
      '`([^`\\n]+)`|<!doctype\\s+html>|<\\/?(?:' + tags + ')(?:\\s+[^<>\\n]*)?\\s*\\/?>' + bare,
      'g',
    );
    let position = 0;
    for (const match of text.matchAll(pattern)) {
      if (match.index > position)
        node.append(document.createTextNode(text.slice(position, match.index)));
      const code = document.createElement('code');
      code.className = 'inline-code';
      code.textContent = match[1] || match[0];
      node.append(code);
      position = match.index + match[0].length;
    }
    if (position < text.length) node.append(document.createTextNode(text.slice(position)));
  }
  function setInlineText(node, text) {
    node.replaceChildren();
    appendInlineText(node, text);
  }
  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) {
      if (tag === 'p' || tag === 'li' || (tag === 'span' && className === 'task-text'))
        appendInlineText(node, text);
      else
        node.textContent =
          /(?:^|\s)(?:section-title|subheading|lesson-title|route-card-title)(?:\s|$)/.test(
            className || '',
          )
            ? studentTitle(text)
            : text;
    }
    return node;
  };

  return { studentTitle, appendInlineText, setInlineText, element };
}
