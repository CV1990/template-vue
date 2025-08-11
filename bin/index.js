#!/usr/bin/env node
import degit from 'degit';
import { cyan, green, red, yellow } from 'kolorist';
import { execSync } from 'node:child_process';
import { existsSync, writeFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const repo = 'CV1990/template-vue';

const run = (cmd, cwd) =>
  execSync(cmd, { stdio: 'inherit', cwd, env: process.env });

async function main() {
  const [, , rawName] = process.argv;
  const projectName = rawName || 'my-app-vue';
  const target = resolve(process.cwd(), projectName);
  if (existsSync(target)) {
    console.log(red(`The folder ${projectName} already exists.`));
    process.exit(1);
  }

  console.log(cyan(`➜ Creating ${projectName} from ${repo}…`));
  await degit(repo, { cache: false, force: true }).clone(target);

  const pkgPath = resolve(target, 'package.json');
  try {
    const pkg = JSON.parse(await readFile(pkgPath, 'utf8'));
    pkg.name = projectName;
    writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
  } catch {}

  const ua = process.env.npm_config_user_agent || '';
  const pm = ua.includes('pnpm') ? 'pnpm' : ua.includes('yarn') ? 'yarn' : 'npm';
  console.log(yellow(`➜ Installing dependencies with ${pm}…`));
  run(pm === 'npm' ? 'npm i' : `${pm} i`, target);

  // Git + husky (si tu template lo trae)
  try {
    run('git init', target);
    run('npm run prepare || true', target);
  } catch {}

  console.log(green(`\nReady. Excecuting:\n  cd ${projectName}\n  ${pm} run dev\n`));
}

main().catch((e) => {
  console.error(red(e?.message || e));
  process.exit(1);
});
