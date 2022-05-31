import axios from "axios";
import { Product } from "./models";

axios.defaults.baseURL = "https://technical-test-frontend.herokuapp.com/api";

type ProductListQueryParams = {
  start: number;
  count: number;
  search?: string;
  tags?: string[];
};

export const API = {
  getProduct(id: string): Promise<Product> {
    return axios
      .get<{ product: Product }>(`/products/${id}`)
      .then((res) => res.data.product)
      .catch((err) => {
        throw err.response.statusText;
      });
  },
  getProducts(params: ProductListQueryParams): Promise<Product[]> {
    return axios
      .get<{ products: Product[] }>("/products", { params })
      .then((res) => res.data.products)
      .catch((err) => {
        throw err.response.statusText;
      });
  },
  createProduct(product: Partial<Product>) {
    return axios
      .post<{ product: Product }>("/products", product)
      .then((res) => res.data.product)
      .catch((err) => {
        throw err.response.statusText;
      });
  },
  updateProduct(productId: string, product: Partial<Product>) {
    return axios
      .put<{ product: Product }>(`/products/${productId}`, product)
      .then((res) => res.data.product)
      .catch((err) => {
        throw err.response.statusText;
      });
  },
};
