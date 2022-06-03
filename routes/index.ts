import basicInfoRoutes from './basic-info';

export default [
  { path: '/', redirect: '/basic-info/dictionary' },
  {
    name: '基础信息',
    path: '/basic-info',
    icon: 'database',
    routes: basicInfoRoutes,
  },
];
