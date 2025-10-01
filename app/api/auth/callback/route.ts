// app/api/auth/callback/route.ts
export const runtime = 'nodejs';

import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get('code') || '';

  const client_id     = process.env.GITHUB_CLIENT_ID     || '';
  const client_secret = process.env.GITHUB_CLIENT_SECRET || '';

  const res = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ client_id, client_secret, code }),
  });

  const data  = await res.json();
  const token = data?.access_token || '';

  const success = Boolean(token);
  const message = success
    ? `authorization:github:success:${token}`
    : 'authorization:github:error:missing_token';

  const html = `<!doctype html>
<html>
  <body style="font:16px system-ui;padding:20px">
    <div id="msg">${success ? 'Login complete. You can close this window.' : 'Login failed. You can close this window.'}</div>
    <script>
      (function () {
        var msg = ${JSON.stringify(message)};
        try {
          if (window.opener && typeof window.opener.postMessage === 'function') {
            window.opener.postMessage(msg, '*');
          }
        } catch (e) {}
        // Always try to close; if blocked, the message above is visible.
        setTimeout(function(){ window.close(); }, 600);
      })();
    </script>
  </body>
</html>`;

  return new NextResponse(html, { headers: { 'Content-Type': 'text/html' } });
}
