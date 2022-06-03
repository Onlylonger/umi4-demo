const routes = [
  { path: '.', redirect: '/basic-info/dictionary' },
  {
    path: 'dictionary',
    name: '数据字典',
    routes: [
      {
        index: true,
        component: './demo',
      },
    ],
  },
];

export default routes;
