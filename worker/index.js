/**
 * OpenAI CORS Proxy for Trip Planner
 *
 * This is a minimal Cloudflare Worker that forwards requests to OpenAI's API.
 * It exists solely to add CORS headers since browsers can't call OpenAI directly.
 *
 * SECURITY:
 * - No logging of API keys or request content
 * - No storage of any data
 * - Open source so you can verify or deploy your own
 *
 * Deploy your own: npx wrangler deploy
 */

export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    // Only allow POST to /v1/chat/completions
    const url = new URL(request.url);
    if (request.method !== 'POST' || url.pathname !== '/v1/chat/completions') {
      return new Response(JSON.stringify({ error: 'Only POST /v1/chat/completions is supported' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }

    // Forward to OpenAI
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': request.headers.get('Authorization'),
      },
      body: request.body,
    });

    // Return response with CORS headers
    const responseBody = await openaiResponse.text();
    return new Response(responseBody, {
      status: openaiResponse.status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  },
};
