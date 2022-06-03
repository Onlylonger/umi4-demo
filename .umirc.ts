import routes from "./routes";

export default {
  npmClient: 'yarn',
  layout: {
    siderWidth: 208,
    logo: null,
    locale: false,
  },
  antd: {
    configProvider: {
      componentSize: 'small',
    },
  },
  routes,
  // mfsu:false
};
