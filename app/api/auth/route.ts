// app/api/auth/route.ts
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const provider = url.searchParams.get('provider') ?? 'github';
  if (provider !== 'github') {
    return NextResponse.json({ error: 'unsupported provider' }, { status: 400 });
  }

  const clientId = process.env.GITHUB_CLIENT_ID!;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;
  const redirectUri = `${siteUrl}/api/auth/callback`;
  const scope = url.searchParams.get('scope') ?? 'repo';

  const ghAuthorize = `https://github.com/login/oauth/authorize` +
    `?client_id=${encodeURIComponent(clientId)}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&scope=${encodeURIComponent(scope)}`;

  return NextResponse.redirect(ghAuthorize);
}
