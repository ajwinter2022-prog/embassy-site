// app/api/auth/route.ts
export const runtime = 'nodejs';

import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const url = new URL(req.url);

  const provider = url.searchParams.get('provider') ?? 'github';
  if (provider !== 'github') {
    return NextResponse.json({ error: 'unsupported provider' }, { status: 400 });
  }

  const h = headers();
  const proto = h.get('x-forwarded-proto') ?? 'https';
  const host  = h.get('x-forwarded-host') ?? h.get('host') ?? 'embassytalent.io';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? `${proto}://${host}`;
  const redirectUri = `${siteUrl}/api/auth/callback`;

  // TEMP: paste your real Client ID here until env var is confirmed working
  const clientId = process.env.GITHUB_CLIENT_ID || 'Ov23ct6GYUVmZN06WV2R';

  const scope = url.searchParams.get('scope') ?? 'repo';

  const gh =
    'https://github.com/login/oauth/authorize' +
    `?client_id=${encodeURIComponent(clientId)}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&scope=${encodeURIComponent(scope)}`;

  return NextResponse.redirect(gh);
}

