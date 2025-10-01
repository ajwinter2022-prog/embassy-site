export const runtime = 'nodejs';

import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get('code') || '';

  const client_id = process.env.GITHUB_CLIENT_ID || '';
  const client_secret = process.env.GITHUB_CLIENT_SECRET || '';

  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ client_id, client_secret, code }),
  });

  const data = await tokenRes.json();
  const token = data.access_token || '';

  const html = `<!doctype html><html><body><script>
    (function () {
      var t = ${JSON.stringify(token)};
      if (!t) window.opener && window.opener.postMessage('authorization:github:error:missing_token','*');
      else    window.opener && window.opener.postMessage('authorization:github:success:' + t,'*');
      window.close();
    })();
  </script></body></html>`;

  return new NextResponse(html, { headers: { 'Content-Type': 'text/html' } });
}
