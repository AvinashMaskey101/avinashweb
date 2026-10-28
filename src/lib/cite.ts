import type { Paper } from '../data/research';
import { site } from '../data/site';

/** "A, B and C" style author list for display. */
export function authorList(authors: string[]): string {
  if (authors.length <= 1) return authors.join('');
  if (authors.length === 2) return `${authors[0]} and ${authors[1]}`;
  return `${authors.slice(0, -1).join(', ')} and ${authors[authors.length - 1]}`;
}

/** Plain-text APA-like citation, used for copy and for meta tags. */
export function plainCitation(p: Paper): string {
  const parts = [`${authorList(p.authors)} (${p.year}). ${p.title}.`];
  if (p.venue) {
    let v = ` ${p.venue}`;
    if (p.volume) v += `, ${p.volume}`;
    if (p.issue) v += `(${p.issue})`;
    if (p.pages) v += `, ${p.pages}`;
    parts.push(v + '.');
  } else if (p.status) {
    parts.push(` ${p.status}.`);
  }
  if (p.doi) parts.push(` https://doi.org/${p.doi}`);
  return parts.join('');
}

/** BibTeX entry generated from the data file. */
export function bibtex(p: Paper): string {
  const kind =
    p.type === 'article' ? 'article'
    : p.type === 'conference' ? 'inproceedings'
    : p.type === 'thesis' ? 'mastersthesis'
    : 'unpublished';
  const fields: [string, string | undefined][] = [
    ['author', p.authors.map((a) => (a === 'Maskey, A.' ? 'Maskey, Avinash' : a)).join(' and ')],
    ['title', `{${p.title}}`],
    [p.type === 'article' ? 'journal' : p.type === 'conference' ? 'booktitle' : 'school', p.type === 'working' ? undefined : p.venue],
    ['year', String(p.year)],
    ['volume', p.volume],
    ['number', p.issue],
    ['pages', p.pages?.replace('–', '--')],
    ['doi', p.doi],
    ['note', p.type === 'working' ? p.status : undefined],
    ['url', p.url ?? (p.page ? new URL(p.page, site.url).href : undefined)],
  ];
  const body = fields
    .filter(([, v]) => v)
    .map(([k, v]) => `  ${k.padEnd(7)} = {${v}}`)
    .join(',\n');
  return `@${kind}{${p.id},\n${body}\n}`;
}

/** schema.org ScholarlyArticle for JSON-LD. */
export function scholarlyArticle(p: Paper) {
  return {
    '@type': 'ScholarlyArticle',
    headline: p.title,
    name: p.title,
    datePublished: String(p.year),
    author: p.authors.map((a) =>
      a === 'Maskey, A.' ? { '@id': `${site.url}/#person` } : { '@type': 'Person', name: a },
    ),
    ...(p.venue ? { isPartOf: { '@type': 'Periodical', name: p.venue } } : {}),
    ...(p.doi ? { sameAs: `https://doi.org/${p.doi}`, identifier: `doi:${p.doi}` } : {}),
    ...(p.url ? { url: p.url } : p.page ? { url: new URL(p.page, site.url).href } : {}),
  };
}
