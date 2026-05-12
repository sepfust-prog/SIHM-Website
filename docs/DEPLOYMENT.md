# Deployment Instructions

## Frontend

```bash
npm install
npm run build
```

Deploy `frontend/dist` to a static host. Set:

```env
VITE_STRAPI_URL=https://cms.your-domain.com
VITE_SITE_URL=https://www.sihmdimapur.com
```

## Strapi CMS

Use Node 18-22. For production, use PostgreSQL where possible.

```bash
cd cms
npm install
npm run build
npm run start
```

Create a Strapi API token and expose only public read permissions for frontend collections.

## Recommended Production Checklist

- Replace placeholder imagery with real SIHM campus and hospitality assets.
- Configure email provider for enquiry notifications.
- Add CAPTCHA or server-side spam protection to forms.
- Connect Strapi media storage to S3, Cloudinary, or equivalent.
- Run Lighthouse and compress oversized uploaded media.
- Confirm all canonical URLs before launch.
