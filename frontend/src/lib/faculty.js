import { faculty as fallbackFaculty } from '../data/siteData';
import { fetchCollection, imageUrl } from './cms';

function stripHtml(value) {
  if (typeof value !== 'string') return '';
  return value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function normalizeDesignation(person = {}) {
  return person.designation || person.title || 'Faculty';
}

function resolveImage(person = {}) {
  if (typeof person.image === 'string' && person.image) return person.image;
  if (typeof person.photo === 'string' && person.photo) return person.photo;
  return imageUrl(person.photo || person.image, '/campus/optimized/classroom-md.jpg');
}

export function normalizeFacultyPerson(person = {}) {
  const designation = normalizeDesignation(person);
  const about = stripHtml(person.about || person.bio || person.achievements || person.subject || '');
  const image = resolveImage(person);

  return {
    id: person.id,
    name: person.name || 'Faculty Member',
    designation,
    title: designation,
    subject: person.department || person.subject || designation,
    about,
    image,
    email: person.email || '',
    linkedin: person.linkedin || '',
    isPrincipal: Boolean(person.isPrincipal || /principal/i.test(designation) || /principal/i.test(person.name || ''))
  };
}

export function normalizeFacultyList(list = []) {
  return list.map((person) => normalizeFacultyPerson(person));
}

export async function loadFacultyList() {
  const collection = await fetchCollection('faculties', 'populate=photo&sort=name:asc');
  const list = collection.length ? normalizeFacultyList(collection) : normalizeFacultyList(fallbackFaculty);
  return list.sort((a, b) => Number(b.isPrincipal) - Number(a.isPrincipal) || a.name.localeCompare(b.name));
}

export function getPrincipalFromFaculty(list = []) {
  return list.find((person) => person.isPrincipal || /principal/i.test(person.designation || person.title || '')) || list[0] || null;
}
