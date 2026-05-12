import { Helmet } from 'react-helmet-async';

export default function SEO({ seo }) {
  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.canonical} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">{JSON.stringify(seo.schema)}</script>
    </Helmet>
  );
}
