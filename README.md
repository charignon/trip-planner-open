# Trip Packing Wizard

AI-powered packing list generator. Runs entirely in your browser - your API key never leaves your device.

**[Try it live](https://trip-planner-open.pages.dev)** | **[View source](https://github.com/charignon/trip-planner-open)**

## Features

- **AI-powered lists** - GPT-4o generates smart packing suggestions based on your trip
- **100% client-side** - All data stored in localStorage, nothing on servers
- **Your API key, your control** - Bring your own OpenAI key, verify the code yourself
- **Track progress** - Check off items as you pack
- **Multiple trips** - Save and manage different trips

## Security

Your OpenAI API key is:
- Stored only in your browser's localStorage
- Sent directly to OpenAI (via a minimal CORS proxy)
- Never logged, never stored on any server

The CORS proxy (`worker/`) is required because browsers can't call OpenAI directly. It's ~50 lines of code that just forwards requests - no logging, no storage. You can [deploy your own](#deploy-your-own-proxy) if you prefer.

## How it works

1. Enter your OpenAI API key (get one at [platform.openai.com](https://platform.openai.com))
2. Fill in your trip details (destination, days, options)
3. Click "Generate Packing List"
4. Check off items as you pack

## Run locally

```bash
# Just open the HTML file
open public/index.html

# Or use a local server
cd public && python -m http.server 8000
```

## Deploy your own

### Static site (Cloudflare Pages, Vercel, Netlify)

1. Fork this repo
2. Connect to your hosting platform
3. Set build directory to `public/`

### CORS Proxy (optional)

If you want your own proxy instead of using the default:

```bash
cd worker
npm install -g wrangler
wrangler login
wrangler deploy
```

Then update `PROXY_URL` in `public/index.html` to your worker URL.

## Tech Stack

- **Frontend**: Vanilla HTML/CSS/JS (no build step, no dependencies)
- **AI**: OpenAI GPT-4o via API
- **Storage**: Browser localStorage
- **Proxy**: Cloudflare Workers (50 lines)

## License

MIT - use it however you want.

---

Built by [Laurent Charignon](https://blog.laurentcharignon.com)
