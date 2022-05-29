export const ROUTER_PATHS = {
  HomePage: {
    getUrl: () => `/`,
  },
  ProductCreatePage: {
    getUrl: () => `/product/create`,
  },
  ProductDetailPage: {
    getUrl: (productId: string) => `/product/${productId}`,
  },
  ProductUpdatePage: {
    getUrl: (productId: string) => `/product/${productId}/edit`,
  },
};
