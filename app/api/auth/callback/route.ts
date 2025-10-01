export const runtime = 'nodejs';

import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code  = url.searchParams.get('code') || '';
  const state = url.searchParams.get('state') || '';
  const debug = state === 'debug' || url.searchParams.has('debug');

  const client_id     = process.env.GITHUB_CLIENT_ID     || '';
  const client_secret = process.env.GITHUB_CLIENT_SECRET || '';

  const resp = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ client_id, client_secret, code }),
  });

  const data  = await resp.json();
  const token = data?.access_token || '';

  if (debug || !token) {
    // Show exactly what came back (but never show secrets)
    const html = `<!doctype html><html><body style="font:16px system-ui;padding:20px">
      <h3>${token ? 'Login complete' : 'Login failed'}</h3>
      <p>You can close this window.</p>
      <pre style="white-space:pre-wrap;background:#f6f6f6;padding:12px;border-radius:8px;">
${JSON.stringify({
  status: resp.status,
  client_id_present: !!client_id,
  client_secret_present: !!client_secret,
  data,
}, null, 2)}
      </pre>
      <script>
        try {
          var msg = ${JSON.stringify(token ? 'authorization:github:success:' : 'authorization:github:error:')} + ${JSON.stringify(token || (data?.error || 'unknown'))};
          if (window.opener && window.opener.postMessage) window.opener.postMessage(msg, '*');
        } catch (e) {}
        setTimeout(function(){ window.close(); }, 800);
      </script>
    </body></html>`;
    return new NextResponse(html, { headers: { 'Content-Type': 'text/html' } });
  }

  // Normal success path
  const html = `<!doctype html><html><body><script>
    (function () {
      var t = ${JSON.stringify(token)};
      if (window.opener && window.opener.postMessage) window.opener.postMessage('authorization:github:success:' + t, '*');
      window.close();
    })();
  </script></body></html>`;
  return new NextResponse(html, { headers: { 'Content-Type': 'text/html' } });
}
