import { Product } from "../models";
import "./ProductItem.scss";

type Props = { product: Product };
const ProductItem = ({ product }: Props) => {
  return (
    <div className="product-card">
      <img className="img" src={product.image} alt="" />
      <div className="infos">
        <span className="name">{product.name}</span>
        <span className="price">{product.price} &euro;</span>
      </div>
      <div className="description">{product.description}</div>
    </div>
  );
};

export default ProductItem;
