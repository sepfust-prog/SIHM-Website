import { courses as fallbackCourses } from '../data/siteData';
import { fetchCollection, imageUrl } from './cms';

function stripHtml(value) {
  if (typeof value !== 'string') return '';
  return value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

export function normalizeCourse(course = {}) {
  return {
    id: course.id,
    slug: course.slug || course.title?.toLowerCase().replace(/\s+/g, '-'),
    title: course.title || 'Course',
    type: course.type || 'Course',
    duration: course.duration || '',
    eligibility: course.eligibility || '',
    affiliation: course.affiliation || '',
    award: course.award || '',
    fee: course.fee || '',
    benefits: Array.isArray(course.benefits) ? course.benefits : course.benefits ? [course.benefits] : [],
    careers: Array.isArray(course.careers) ? course.careers : course.careers ? [course.careers] : [],
    curriculum: stripHtml(course.curriculum || ''),
    image: imageUrl(course.featuredImage || course.image, '/campus/restaurant-training.png'),
    brochure: course.brochure?.data?.attributes?.url || course.brochure?.url || '',
    seo: course.seo || {}
  };
}

export function normalizeCourseList(list = []) {
  return list.map((course) => normalizeCourse(course));
}

export async function loadCourses() {
  const collection = await fetchCollection('courses', 'populate=*&sort=type:asc,title:asc');
  const list = collection.length ? normalizeCourseList(collection) : normalizeCourseList(fallbackCourses);
  return list;
}

export async function loadCourseBySlug(slug) {
  const courses = await loadCourses();
  return courses.find((course) => course.slug === slug) || null;
}
