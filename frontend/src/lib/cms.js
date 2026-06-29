import { courses, faculty, faqs, gallery, heroBanners, news, notes, recruiters, testimonials } from '../data/siteData';

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

const fallback = {
  courses,
  faculty,
  faqs,
  gallery,
  'hero-banners': heroBanners,
  'news-events': news,
  notes,
  recruiters,
  testimonials
};

export async function fetchCollection(collection, params = 'populate=*') {
  try {
    const response = await fetch(`${STRAPI_URL}/api/${collection}?${params}`);
    if (!response.ok) throw new Error(`CMS responded ${response.status}`);
    const json = await response.json();
    return json.data?.map((item) => ({ id: item.id, ...(item.attributes || item) })) || fallback[collection] || [];
  } catch {
    return fallback[collection] || [];
  }
}

export async function submitLead(lead) {
  const response = await fetch(`${STRAPI_URL}/api/leads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data: lead })
  });

  if (!response.ok) {
    throw new Error(`CMS responded ${response.status}`);
  }

  return response.json();
}

export function imageUrl(media, fallbackUrl) {
  const file = Array.isArray(media?.data) ? media.data[0] : media?.data;
  const url = file?.attributes?.url || file?.url || media?.url;
  if (!url) return fallbackUrl;
  return url.startsWith('http') ? url : `${STRAPI_URL}${url}`;
}

export function fileUrl(media) {
  return imageUrl(media, '');
}
