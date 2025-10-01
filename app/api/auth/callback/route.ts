// app/api/auth/callback/route.ts
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get('code') || '';

  const client_id = process.env.GITHUB_CLIENT_ID!;
  const client_secret = process.env.GITHUB_CLIENT_SECRET!;

  // Exchange code -> access token
  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ client_id, client_secret, code }),
  });

  const data = await tokenRes.json();
  const token = data.access_token || '';

  // Decap listens for a postMessage in this exact format
  const html = `<!doctype html><html><body><script>
    (function () {
      var token = ${JSON.stringify(token)};
      if (!token) {
        window.opener && window.opener.postMessage('authorization:github:error:missing_token', '*');
      } else {
        window.opener && window.opener.postMessage('authorization:github:success:' + token, '*');
      }
      window.close();
    })();
  </script></body></html>`;

  return new NextResponse(html, { headers: { 'Content-Type': 'text/html' } });
}
