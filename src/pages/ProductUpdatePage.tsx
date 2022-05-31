import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { API } from "../api";
import { Center, ProductForm, ProductFormType, ProductNotFound } from "../components";
import { Product } from "../models";
import { appActions } from "../Redux/appSlice";
import { ROUTER_PATHS } from "../routing/paths";

const ProductUpdatePage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState<Product | null>();

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    console.log(params);

    if (params.productId) {
      dispatch(appActions.showLoading());
      API.getProduct(params.productId)
        .then(setProduct)
        .catch(setErrorMessage)
        .finally(() => dispatch(appActions.hideLoading()));
    }
  }, []);

  const updateProduct = (data: ProductFormType) => {
    console.log("update product", data);
    dispatch(appActions.showLoading());
    if (!!product) API.updateProduct(product._id, data).then(() => navigate(ROUTER_PATHS.ProductDetailPage.getUrl(product._id)));
  };

  return <Center>{errorMessage ? <ProductNotFound /> : product && <ProductForm product={product} onSubmit={updateProduct} />}</Center>;
};

export default ProductUpdatePage;
