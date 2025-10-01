export const runtime = 'nodejs';

import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const h = headers();
  const proto = h.get('x-forwarded-proto') ?? 'https';
  const host  = h.get('x-forwarded-host') ?? h.get('host') ?? 'embassytalent.io';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? `${proto}://${host}`;
  const redirectUri = `${siteUrl}/api/auth/callback`;

  const state = url.searchParams.get('state') || 'debug'; // default debug to get details once
  const scope = url.searchParams.get('scope') ?? 'repo';

  // TEMP: paste your real Client ID here until env var is confirmed
  const clientId = process.env.GITHUB_CLIENT_ID || 'Ov23ct6GYUVmZN06WV2R';

  const gh =
    'https://github.com/login/oauth/authorize' +
    `?client_id=${encodeURIComponent(clientId)}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&scope=${encodeURIComponent(scope)}` +
    `&state=${encodeURIComponent(state)}`;

  return NextResponse.redirect(gh);
}

