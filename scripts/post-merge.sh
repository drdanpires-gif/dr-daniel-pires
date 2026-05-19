#!/bin/bash
set -e

pnpm install --frozen-lockfile

# Push to GitHub via SSH deploy key (.local/github_deploy_key, gitignored)
WORKSPACE_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
KEY_FILE="$WORKSPACE_ROOT/.local/github_deploy_key"

if [ -f "$KEY_FILE" ]; then
  chmod 600 "$KEY_FILE"

  # Ensure SSH host alias exists (idempotent)
  mkdir -p ~/.ssh
  if ! grep -q "Host github-replit-deploy" ~/.ssh/config 2>/dev/null; then
    cat >> ~/.ssh/config << 'SSHEOF'

Host github-replit-deploy
  HostName github.com
  User git
  IdentityFile /home/runner/workspace/.local/github_deploy_key
  StrictHostKeyChecking no
SSHEOF
  fi

  node "$WORKSPACE_ROOT/scripts/src/push-to-github.mjs"
else
  echo "[post-merge] Deploy key not found at $KEY_FILE — skipping GitHub push."
fi
