const fs = require('fs-extra');
const path = require('path');
const dirList = ['teaching', 'research', 'cv'];
const distPath = path.join(__dirname, '../dist');

for (let p of dirList) {
  fs.mkdirpSync(path.resolve(distPath, p));
  fs.copySync(
    path.resolve(distPath, 'index.html'),
    path.resolve(distPath, p, 'index.html')
  );
}
