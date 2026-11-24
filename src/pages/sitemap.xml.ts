import type { APIRoute } from 'astro';
import { projects } from '../data/projects';
import { tori24Links } from '../data/tori24';

export const GET: APIRoute = ({ site }) => {
  const paths = [
    '/',
    '/szolgaltatasok/',
    '/projektek/',
    ...projects.filter((project) => !project.pagePath).map(({ slug }) => `/projektek/${slug}/`),
    '/rolam/',
    '/kapcsolat/',
    '/impresszum/',
    '/adatkezeles/',
    '/aszf/',
    ...tori24Links.map(({ href }) => `${href}/`),
  ];
  const urls = paths.map((path) => `  <url><loc>${new URL(path, site).href}</loc></url>`);

  return new Response(
    ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">', ...urls, '</urlset>', ''].join('\n'),
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
