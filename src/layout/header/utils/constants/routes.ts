import seo from '@data/seo.json';
export const routes = (() => Object.entries(seo).map(([key, value]) => ({ id: key, path: key, name: value.title }) ))();