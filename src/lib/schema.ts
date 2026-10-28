import { site, topics } from '../data/site';
import { education } from '../data/profile';

/** The Person node every page points to. Google uses sameAs to tie the site to your profiles. */
export function personNode() {
  const sameAs = Object.values(site.links).filter(Boolean);
  return {
    '@type': 'Person',
    '@id': `${site.url}/#person`,
    name: site.name,
    givenName: site.givenName,
    familyName: site.familyName,
    url: `${site.url}/`,
    ...(site.photo ? { image: new URL(site.photoPath, site.url).href } : {}),
    email: `mailto:${site.emailPrimary}`,
    jobTitle: site.role,
    description: site.description,
    worksFor: {
      '@type': 'CollegeOrUniversity',
      name: site.institution,
      department: { '@type': 'Organization', name: `${site.department}, ${site.school}` },
      url: site.institutionUrl,
    },
    affiliation: [
      { '@type': 'Organization', name: site.company, description: 'Software company in Kathmandu, Nepal (co-founder)' },
    ],
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Pokhara University' },
      { '@type': 'CollegeOrUniversity', name: 'Tribhuvan University' },
    ],
    hasCredential: education.slice(0, 2).map((e) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      name: e.degree,
    })),
    knowsAbout: topics,
    address: { '@type': 'PostalAddress', addressLocality: 'Kathmandu', addressCountry: 'NP' },
    sameAs,
  };
}

export function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: `${site.url}/`,
    name: site.name,
    inLanguage: 'en',
    publisher: { '@id': `${site.url}/#person` },
  };
}

export function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
