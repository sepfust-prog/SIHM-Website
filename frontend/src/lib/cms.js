import { courses, faculty, faqs, gallery, heroBanners, news, recruiters, testimonials } from '../data/siteData';

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

const fallback = {
  courses,
  faculty,
  faqs,
  gallery,
  'hero-banners': heroBanners,
  'news-events': news,
  recruiters,
  testimonials
};

export async function fetchCollection(collection, params = 'populate=*') {
  try {
    const response = await fetch(`${STRAPI_URL}/api/${collection}?${params}`);
    if (!response.ok) throw new Error(`CMS responded ${response.status}`);
    const json = await response.json();
    return json.data?.map((item) => ({ id: item.id, ...item.attributes })) || fallback[collection] || [];
  } catch {
    return fallback[collection] || [];
  }
}

export function imageUrl(media, fallbackUrl) {
  const url = media?.data?.attributes?.url || media?.url;
  if (!url) return fallbackUrl;
  return url.startsWith('http') ? url : `${STRAPI_URL}${url}`;
}
