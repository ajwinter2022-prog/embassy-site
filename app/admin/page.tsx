'use client';

import Script from 'next/script';

export default function Admin() {
  // Decap config you'll edit in the CMS
  const cfg = {
    backend: {
      name: 'github',
      repo: 'ajwinter2022-prog/embassy-site',
      branch: 'main',
      base_url: 'https://embassytalent.io',
      auth_endpoint: '/api/auth',
    },
    media_folder: 'public/uploads',
    public_folder: '/uploads',
    publish_mode: 'editorial_workflow',
    collections: [
      {
        name: 'site',
        label: 'Site Content',
        files: [
          {
            file: 'content/home.json',
            name: 'home',
            label: 'Homepage',
            fields: [
              {
                label: 'Hero',
                name: 'hero',
                widget: 'object',
                fields: [
                  { label: 'Eyebrow', name: 'eyebrow', widget: 'string' },
                  { label: 'Headline', name: 'headline', widget: 'text' },
                  { label: 'CTA Label', name: 'ctaLabel', widget: 'string' },
                  { label: 'CTA Link', name: 'ctaHref', widget: 'string', default: '#contact' },
                ],
              },
              {
                label: 'Services',
                name: 'services',
                widget: 'list',
                summary: '{{fields.title}}',
                fields: [
                  { label: 'Title', name: 'title', widget: 'string' },
                  { label: 'Description', name: 'desc', widget: 'text' },
                  {
                    label: 'Bullets',
                    name: 'bullets',
                    widget: 'list',
                    field: { label: 'Bullet', name: 'bullet', widget: 'string' },
                  },
                ],
              },
              {
                label: 'Contact',
                name: 'contact',
                widget: 'object',
                fields: [
                  { label: 'Email', name: 'email', widget: 'string' },
                  { label: 'Phone', name: 'phone', widget: 'string' },
                  { label: 'Locations', name: 'locations', widget: 'string' },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* 1) Stop Decap’s auto-init */}
      <Script id="cms-manual" strategy="beforeInteractive">
        {`window.CMS_MANUAL_INIT = true;`}
      </Script>

      {/* 2) Load Decap CMS */}
      <Script
        src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"
        strategy="afterInteractive"
      />

      {/* 3) Init once when CMS is ready */}
      <Script id="cms-init" strategy="afterInteractive">
        {`
          (function start(){
            if (window.CMS && window.CMS.init) {
              window.CMS.init({ config: ${JSON.stringify(cfg)} });
            } else {
              setTimeout(start, 50);
            }
          })();
        `}
      </Script>

      <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
        <p>Loading Embassy Admin…</p>
      </main>
    </>
  );
}
