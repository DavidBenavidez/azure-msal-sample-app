export const ROUTER_CONFIG = [
  {
    name: 'home',
    pattern: '',
    data: { import: (): Promise<unknown> => import('./pages/home-page') },
  },
  {
    name: 'about',
    pattern: 'about',
    data: { import: (): Promise<unknown> => import('./pages/about-page') },
  },
];
