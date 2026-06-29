import { Helmet } from 'react-helmet-async';

export default function SEO({ seo }) {
  return (
    <Helmet htmlAttributes={{ lang: 'en-IN' }}>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="robots" content={seo.robots} />
      <meta name="googlebot" content={seo.robots} />
      <meta name="author" content="State Institute of Hotel Management, Dimapur" />
      <meta name="application-name" content="SIHM Dimapur" />
      <link rel="canonical" href={seo.canonical} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content={seo.type} />
      <meta property="og:url" content={seo.canonical} />
      <meta property="og:site_name" content="SIHM Dimapur" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:alt" content={seo.imageAlt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={seo.imageAlt} />
      <script type="application/ld+json">{JSON.stringify(seo.schema)}</script>
    </Helmet>
  );
}
