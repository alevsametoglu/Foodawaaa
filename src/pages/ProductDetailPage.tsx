import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { API } from "../api";
import { EditButton, ProductList, ProductNotFound, TagList } from "../components";
import { Product } from "../models";
import { appActions } from "../Redux/appSlice";
import { ROUTER_PATHS } from "../routing/paths";
import "./ProductDetailPage.scss";

const ProductDetailPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState<Product | null>();

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (params.productId) {
      dispatch(appActions.showLoading());
      API.getProduct(params.productId)
        .then(setProduct)
        .catch(setErrorMessage)
        .finally(() => dispatch(appActions.hideLoading()));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [params?.productId]);

  return !!errorMessage ? (
    <ProductNotFound />
  ) : product ? (
    <main style={{ maxWidth: 1200 }}>
      <section className="detail-section">
        <div className="product-detail">
          <img className="product-img" src={product?.image} alt="" />
          <div className="product-infos">
            <div className="product-title">
              <h3 className="product-name">{product?.name}</h3>
              <div className="product-price"> {product?.price.toFixed(2).replace(".", ",")} &euro;</div>
            </div>
            <TagList value={product?.tags || []} />
            <div className="product-description">
              <span>Description :</span>
              {product?.description}
            </div>
            <div>{product && <EditButton to={ROUTER_PATHS.ProductUpdatePage.getUrl(product._id)} />}</div>
          </div>
        </div>
      </section>
      {product?.tags && (
        <section className="list-section">
          <h3>Articles similaires</h3>
          <ProductList relatedTags={product?.tags} />
        </section>
      )}
    </main>
  ) : (
    <></>
  );
};

export default ProductDetailPage;
