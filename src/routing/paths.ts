import { HomePage, ProductCreatePage, ProductDetailPage, ProductUpdatePage } from "../pages";

export const ROUTER_PATHS = {
  HomePage: {
    getUrl: () => `/`,
  },
  ProductCreatePage: {
    getUrl: () => `/products/create`,
  },
  ProductDetailPage: {
    getUrl: (productId: string) => `/products/${productId}`,
  },
  ProductUpdatePage: {
    getUrl: (productId: string) => `/products/${productId}/edit`,
  },
};
