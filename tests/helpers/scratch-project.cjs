const fs = require('node:fs');
const { inflateRawSync } = require('node:zlib');

function readScratchProject(file) {
  const bytes = fs.readFileSync(file);
  const entries = new Map();
  let offset = 0;
  while (bytes.readUInt32LE(offset) === 0x04034b50) {
    const method = bytes.readUInt16LE(offset + 8);
    const size = bytes.readUInt32LE(offset + 18);
    const nameLength = bytes.readUInt16LE(offset + 26);
    const extraLength = bytes.readUInt16LE(offset + 28);
    const name = bytes.subarray(offset + 30, offset + 30 + nameLength).toString();
    const start = offset + 30 + nameLength + extraLength;
    const data = bytes.subarray(start, start + size);
    if (![0, 8].includes(method)) throw new Error('Unsupported Scratch archive compression');
    entries.set(name, method === 8 ? inflateRawSync(data) : data);
    offset = start + size;
  }
  return { project: JSON.parse(entries.get('project.json').toString()), entries };
}

module.exports = { readScratchProject };
