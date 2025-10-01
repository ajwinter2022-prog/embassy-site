// app/api/auth/route.ts
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const url = new URL(req.url);

  // Only github is supported here
  const provider = url.searchParams.get('provider') ?? 'github';
  if (provider !== 'github') {
    return NextResponse.json({ error: 'unsupported provider' }, { status: 400 });
  }

  const clientId = process.env.GITHUB_CLIENT_ID || '';
  // Build a safe site URL even if the env var is missing
  const h = headers();
  const proto = h.get('x-forwarded-proto') ?? 'https';
  const host = h.get('x-forwarded-host') ?? h.get('host') ?? 'embassytalent.io';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? `${proto}://${host}`;
  const redirectUri = `${siteUrl}/api/auth/callback`;

  const scope = url.searchParams.get('scope') ?? 'repo';

  if (!clientId) {
    // Helpful error page instead of a blank 404 on GitHub
    const html = `<!doctype html><html><body style="font:16px system-ui;padding:20px">
      <h2>Missing env var: GITHUB_CLIENT_ID</h2>
      <p>Set it in Vercel → Project → Settings → Environment Variables, then redeploy.</p>
      <pre>Computed redirect_uri: ${redirectUri}</pre>
    </body></html>`;
    return new NextResponse(html, { headers: { 'Content-Type': 'text/html' } });
  }

  const ghAuthorize =
    'https://github.com/login/oauth/authorize' +
    `?client_id=${encodeURIComponent(clientId)}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&scope=${encodeURIComponent(scope)}`;

  return NextResponse.redirect(ghAuthorize);
}

