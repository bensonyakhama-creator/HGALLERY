@echo off
npm run build
npx wrangler deploy --config .output\server\wrangler.json
pause