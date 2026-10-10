// Rasterisation de nos sources vectorielles originales ; aucune image distante.
// Usage : node scripts/build-gdevelop-kit.cjs <chemin-vers-le-module-sharp>
const fs = require('node:fs');
const path = require('node:path');
const zlib = require('node:zlib');
const sharp = require(process.argv[2] || 'sharp');
const root = path.resolve(__dirname, '../resources/gdevelop');
const crcTable = Array.from({ length: 256 }, (_, n) => {
  for (let bit = 0; bit < 8; bit++) n = n & 1 ? 0xedb88320 ^ (n >>> 1) : n >>> 1;
  return n >>> 0;
});
function crc32(buffer) {
  let value = 0xffffffff;
  for (const byte of buffer) value = crcTable[(value ^ byte) & 255] ^ (value >>> 8);
  return (value ^ 0xffffffff) >>> 0;
}
// ZIP déterministe, noms ASCII, compression Deflate, aucun chemin absolu.
function zip(files) {
  const local = [], central = []; let offset = 0;
  for (const [filename, content] of files) {
    const name = Buffer.from(filename), compressed = zlib.deflateRawSync(content), crc = crc32(content);
    const header = Buffer.alloc(30);
    header.writeUInt32LE(0x04034b50); header.writeUInt16LE(20, 4);
    header.writeUInt16LE(8, 8); header.writeUInt16LE(33, 12);
    header.writeUInt32LE(crc, 14); header.writeUInt32LE(compressed.length, 18);
    header.writeUInt32LE(content.length, 22); header.writeUInt16LE(name.length, 26);
    const entry = Buffer.alloc(46);
    entry.writeUInt32LE(0x02014b50); entry.writeUInt16LE(20, 4); entry.writeUInt16LE(20, 6);
    entry.writeUInt16LE(8, 10); entry.writeUInt16LE(33, 14);
    entry.writeUInt32LE(crc, 16); entry.writeUInt32LE(compressed.length, 20);
    entry.writeUInt32LE(content.length, 24); entry.writeUInt16LE(name.length, 28);
    entry.writeUInt32LE(offset, 42);
    local.push(header, name, compressed); central.push(entry, name);
    offset += header.length + name.length + compressed.length;
  }
  const directory = Buffer.concat(central), end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50); end.writeUInt16LE(files.length, 8); end.writeUInt16LE(files.length, 10);
  end.writeUInt32LE(directory.length, 12); end.writeUInt32LE(offset, 16);
  return Buffer.concat([...local, directory, end]);
}
(async () => {
  const images = path.join(root, 'kit/images'); fs.mkdirSync(images, { recursive: true });
  const names = ['personnage', 'jeton', 'jeton-alternatif'];
  for (const name of names) await sharp(path.join(root, 'sources', name + '.svg')).png().toFile(path.join(images, name + '.png'));
  const files = ['NOTICE.txt', 'LICENCE.txt', ...names.map(name => 'images/' + name + '.png')];
  fs.writeFileSync(path.join(root, 'kit-depart.zip'), zip(files.map(name => ['kit-codecraft-gdevelop/' + name, fs.readFileSync(path.join(root, 'kit', name))])));
  console.log('Kit reconstruit : trois PNG transparents, notice, licence et archive ZIP.');
})().catch(error => { console.error(error); process.exitCode = 1; });
