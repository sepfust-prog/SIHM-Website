const configuredSiteUrl = import.meta.env.VITE_SITE_URL || 'https://www.sihmdimapur.com';
const siteUrl = configuredSiteUrl.replace(/\/+$/, '');
const siteName = 'State Institute of Hotel Management, Dimapur';
const defaultImage = `${siteUrl}/campus/optimized/campus-building-wide-lg.jpg`;

function absoluteUrl(path) {
  if (/^https?:\/\//i.test(path || '')) return path;
  if (!path || path === '/') return `${siteUrl}/`;
  return `${siteUrl}/${path.replace(/^\/+/, '')}`;
}

function breadcrumbs(path, pageTitle) {
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${siteUrl}/`
    }
  ];

  if (path !== '/') {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: pageTitle,
      item: absoluteUrl(path)
    });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items
  };
}

export function pageSeo(title, description, path = '/', options = {}) {
  const fullTitle = title.includes('SIHM') ? title : `${title} | SIHM Dimapur`;
  const canonical = absoluteUrl(path);
  const image = options.image ? absoluteUrl(options.image) : defaultImage;
  const instituteId = `${siteUrl}/#institute`;
  const websiteId = `${siteUrl}/#website`;

  return {
    title: fullTitle,
    description,
    canonical,
    image,
    imageAlt: options.imageAlt || `${siteName} campus and hospitality training facilities`,
    type: options.type || 'website',
    robots: options.noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollegeOrUniversity',
        '@id': instituteId,
        name: siteName,
        alternateName: 'SIHM Dimapur',
        url: `${siteUrl}/`,
        logo: `${siteUrl}/sihm-logo.png`,
        image: defaultImage,
        email: 'contact@sihmdimapur.com',
        telephone: '+91-9233895656',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Purana Bazar B Village Block 5, New Naga Cemetery Road',
          addressLocality: 'Dimapur',
          addressRegion: 'Nagaland',
          postalCode: '797116',
          addressCountry: 'IN'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'admissions',
          telephone: '+91-9233895656',
          email: 'contact@sihmdimapur.com',
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi']
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': websiteId,
        url: `${siteUrl}/`,
        name: siteName,
        publisher: { '@id': instituteId },
        inLanguage: 'en-IN'
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: fullTitle,
        description,
        isPartOf: { '@id': websiteId },
        about: { '@id': instituteId },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: image
        },
        inLanguage: 'en-IN'
      },
      breadcrumbs(path, title),
      ...(options.schema ? [options.schema] : [])
    ]
  };
}
