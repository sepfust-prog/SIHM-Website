const siteUrl = import.meta.env.VITE_SITE_URL || 'https://www.sihmdimapur.com';

export function pageSeo(title, description, path = '/') {
  const fullTitle = title.includes('SIHM') ? title : `${title} | SIHM Dimapur`;
  return {
    title: fullTitle,
    description,
    canonical: `${siteUrl}${path}`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollegeOrUniversity',
      name: 'State Institute of Hotel Management, Dimapur',
      url: siteUrl,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dimapur',
        addressRegion: 'Nagaland',
        postalCode: '797116',
        addressCountry: 'IN'
      }
    },
    image: `${siteUrl}/campus/optimized/campus-building-wide-lg.jpg`
  };
}
