#!/usr/bin/env bash

set -euo pipefail

# Load env vars from .env and .env.local if present
if [ -f ./.env ] || [ -f ./.env.local ]; then
  set -a
  [ -f ./.env ] && . ./.env
  [ -f ./.env.local ] && . ./.env.local
  set +a
fi

# Resolve bucket name: prefer AWS_S3_BUCKET, fallback to S3_BUCKET
S3_BUCKET_RESOLVED="${AWS_S3_BUCKET:-${S3_BUCKET:-}}"

# Ensure aws cli is installed; try Homebrew on macOS if missing
if ! command -v aws >/dev/null 2>&1; then
  echo "AWS CLI not found. Attempting installation..."
  if [[ "$(uname -s)" == "Darwin" ]] && command -v brew >/dev/null 2>&1; then
    brew install awscli
  else
    echo "Cannot auto-install AWS CLI. Please install it manually:" >&2
    echo "- macOS with Homebrew: brew install awscli" >&2
    echo "- Docs: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html" >&2
    exit 1
  fi
fi

if [ -z "${S3_BUCKET_RESOLVED}" ]; then
  echo "AWS_S3_BUCKET or S3_BUCKET env var is required." >&2
  echo "Set it in your .env or export it in the shell." >&2
  exit 1
fi

echo "Building project..."
npm run build

echo "Syncing assets to s3://${S3_BUCKET_RESOLVED} ..."
aws s3 sync dist/spa "s3://${S3_BUCKET_RESOLVED}" \
  --delete \
  --exclude "index.html" \
  --cache-control "max-age=31536000,public"

echo "Uploading index.html with no-cache headers..."
aws s3 cp dist/spa/index.html "s3://${S3_BUCKET_RESOLVED}/index.html" \
  --cache-control "no-cache, no-store, must-revalidate" \
  --content-type "text/html"

echo "Deploy complete."


