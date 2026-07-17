const git = require('/Users/fabianperez/.gemini/antigravity/scratch/digitalmads/node_modules/isomorphic-git');
const fs = require('fs');
const http = require('/Users/fabianperez/.gemini/antigravity/scratch/digitalmads/node_modules/isomorphic-git/http/node');
const path = require('path');

const dir = '/Users/fabianperez/.gemini/antigravity/scratch/digitalmads';

function walk(currentDir, relativePath = '') {
  let results = [];
  const list = fs.readdirSync(currentDir);
  for (const file of list) {
    if (
      file === '.git' || 
      file === 'node_modules' || 
      file === '.next' || 
      file === '.DS_Store' ||
      file === '.env.local' ||
      file === '.env.development.local' ||
      file === '.env.test.local' ||
      file === '.env.production.local'
    ) {
      continue;
    }
    const fullPath = path.join(currentDir, file);
    const rel = relativePath ? path.join(relativePath, file) : file;
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath, rel));
    } else {
      results.push(rel);
    }
  }
  return results;
}

async function run() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.error('Error: GITHUB_TOKEN is not set in environment.');
    process.exit(1);
  }

  console.log('Staging blog files...');
  const files = walk(dir);
  console.log(`Found ${files.length} files to check.`);
  for (const file of files) {
    await git.add({ fs, dir, filepath: file });
  }

  console.log('Committing changes...');
  await git.commit({
    fs,
    dir,
    author: {
      name: 'Fabian Perez',
      email: 'fabianperez@users.noreply.github.com'
    },
    message: 'feat: implement blog engine with static markdown-like rendering of high-density posts'
  });

  console.log('Pushing updates to main branch...');
  await git.push({
    fs,
    http,
    dir,
    remote: 'origin',
    ref: 'master',
    remoteRef: 'main',
    force: false,
    onAuth: () => ({ username: 'Fabipers', password: token })
  });

  console.log('Successfully pushed updates to main branch!');
}

run().catch(err => {
  console.error('Git operation failed:', err);
  process.exit(1);
});
