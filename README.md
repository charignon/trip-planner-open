# BagBuddy - Smart Packing Lists

AI-powered packing list generator with smart bag organization. Everything stored locally in your browser.

## Features

- **AI-powered lists** - GPT-4 generates personalized packing suggestions
- **Smart bag organization** - Nested bags (Backpack > Fanny Pack, Suitcase > Toiletry)
- **Drag & drop** - Organize items into bags
- **Weight tracking** - See total weight per bag
- **100% local storage** - All data in your browser
- **Works offline** - Once loaded, works without internet (except AI generation)

## Quick Start

1. Get an OpenAI API key at [platform.openai.com](https://platform.openai.com/api-keys)
2. Visit the app and enter your key
3. Fill in trip details and generate your list
4. Drag items into bags and check them off as you pack

## Security

- API key stored only in your browser's localStorage
- Sent directly to OpenAI via CORS proxy (no logging)
- All trip data stays in your browser

## Deploy Your Own

```bash
# Static hosting (Cloudflare Pages, Vercel, Netlify)
# Just deploy the public/ folder
```

## License

MIT

---

Built by [Laurent Charignon](https://blog.laurentcharignon.com)
