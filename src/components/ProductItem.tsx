import { Link } from "react-router-dom";
import { Product } from "../models";
import { ROUTER_PATHS } from "../routing/paths";
import "./ProductItem.scss";

type Props = { product: Product };
const ProductItem = ({ product }: Props) => {
  return (
    <Link to={ROUTER_PATHS.ProductDetailPage.getUrl(product._id)} className="product-card">
      <img className="img" src={product.image} alt="" />
      <div className="infos">
        <span className="name">{product.name}</span>
        <span className="price">{product.price.toFixed(2).replace(".", ",")} &euro;</span>
      </div>
      <div className="description">{product.description}</div>
    </Link>
  );
};

export default ProductItem;
