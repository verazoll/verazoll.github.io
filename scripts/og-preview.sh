#!/usr/bin/env bash
# Takes a fresh 1200x630 screenshot of the hero as the link preview image (og:image)
# and adds a content hash to the og:image URL so WhatsApp/LinkedIn fetch the new one.
# Runs after `npm run build`, on the built site in dist/.
set -euo pipefail

PORT=4399
OUT=dist/images/og-preview.jpg
CHROME=${CHROME:-$(command -v google-chrome || command -v chromium || echo "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome")}

npx astro preview --port "$PORT" > /dev/null 2>&1 &
SERVER=$!
trap 'kill $SERVER 2>/dev/null || true' EXIT
for _ in $(seq 1 30); do curl -sf "http://localhost:$PORT/" > /dev/null && break; sleep 1; done

"$CHROME" --headless=new --disable-gpu --no-sandbox --hide-scrollbars \
  --force-prefers-reduced-motion --virtual-time-budget=5000 \
  --window-size=1200,630 --screenshot="$PWD/$OUT" "http://localhost:$PORT/?og-shot" 2> /dev/null

test -s "$OUT"
HASH=$( (sha1sum "$OUT" 2>/dev/null || shasum "$OUT") | cut -c1-10)
for f in $(grep -rl 'images/og-preview.jpg' dist --include='*.html'); do
  sed -i.bak "s#images/og-preview.jpg\"#images/og-preview.jpg?v=$HASH\"#g" "$f" && rm -f "$f.bak"
done
echo "og-preview.jpg updated (v=$HASH)"
