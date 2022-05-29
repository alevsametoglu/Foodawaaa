import { useState } from "react";
import { EditButton, ProductList, TagList } from "../components";
import { Product } from "../models";
import { ROUTER_PATHS } from "../routing/paths";
import "./ProductDetailPage.scss";

const sampleProduct = {
  _id: "6248263c315cbb0021cef887",
  tags: ["burger", "vegan", "sans gluten"],
  name: "Maous burgerttt",
  description: "Gros burger ! Truc de fou ! Il est maous !!",
  image:
    "https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2F03ab5e89-bad7-4a44-b952-b30c68934215.2Ejpeg/850x478/quality/80/crop-from/center/burger-maison.jpeg",
  price: 20,
  createdAt: "2022-04-02T10:32:28.334Z",
  updatedAt: "2022-05-07T14:20:11.227Z",
  __v: 0,
};

const ProductDetailPage = () => {
  const [product, setProduct] = useState<Product>(sampleProduct);

  return (
    <main style={{ maxWidth: 1200 }}>
      <section className="detail-section">
        <div className="product-detail">
          <img className="product-img" src={product.image} alt="" />
          <div className="product-infos">
            <div className="product-title">
              <h3 className="product-name">{product.name}</h3>
              <div className="product-price"> {product.price.toFixed(2).replace(".", ",")} &euro;</div>
            </div>
            <TagList value={product.tags} />
            <div className="product-description">
              <span>Description :</span>
              {product.description}
            </div>
            <div>
              <EditButton to={ROUTER_PATHS.ProductUpdatePage.getUrl(product._id)} />
            </div>
          </div>
        </div>
      </section>
      <section className="list-section">
        <h3>Articles similaires</h3>
        <ProductList />
      </section>
    </main>
  );
};

export default ProductDetailPage;
