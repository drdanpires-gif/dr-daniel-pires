#!/usr/bin/env node
/**
 * Pushes the current main branch to the GitHub remote using the SSH deploy key.
 * The deploy key lives at .local/github_deploy_key (gitignored, persists in workspace).
 * SSH host alias "github-replit-deploy" is configured in ~/.ssh/config by post-merge.sh.
 */
import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(fileURLToPath(import.meta.url), "../../../");
const KEY_FILE = resolve(ROOT, ".local/github_deploy_key");
const GITHUB_REMOTE = "github";
const SSH_REMOTE_URL = "git@github-replit-deploy:drdanpires-gif/dr-daniel-pires.git";
const BRANCH = "main";

function run(cmd, opts = {}) {
  return execSync(cmd, { encoding: "utf-8", stdio: ["pipe", "pipe", "pipe"], ...opts });
}

if (!existsSync(KEY_FILE)) {
  console.error(`[push-to-github] Deploy key not found at ${KEY_FILE}. Skipping push.`);
  process.exit(0);
}

console.log("[push-to-github] Ensuring github remote is set to SSH URL...");
try {
  run(`git -C "${ROOT}" remote remove ${GITHUB_REMOTE}`);
} catch {}
run(`git -C "${ROOT}" remote add ${GITHUB_REMOTE} ${SSH_REMOTE_URL}`);

console.log(`[push-to-github] Pushing ${BRANCH} to GitHub...`);
try {
  const out = run(`git -C "${ROOT}" push ${GITHUB_REMOTE} ${BRANCH} 2>&1`);
  console.log(out.trim() || "Already up to date.");
} catch (err) {
  console.error("[push-to-github] Push failed:", err.stderr || err.message);
  process.exit(1);
}

console.log("[push-to-github] Done.");
