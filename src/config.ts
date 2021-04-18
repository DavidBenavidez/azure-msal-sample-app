export const ROUTER_CONFIG = [
  {
    name: 'home',
    pattern: '',
    data: { import: () => import('./pages/home-page') },
  },
  {
    name: 'about',
    pattern: 'about',
    data: { import: () => import('./pages/about-page') },
  },
];
