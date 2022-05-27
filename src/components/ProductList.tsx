import "./ProductList.scss";
import { ProductItem } from ".";

const product = {
  _id: "6247013f8f219f0021553816",
  tags: [],
  name: "X-Hot Burger !",
  description:
    "Restaurant très intimiste et agréable ! Restaurant parfait pour les amateurs de poulet, malgré tout un grand choix de plat, avec des produits de qualité ! Personnel très amical et agréable, je recommande vivement cet endroit.",
  image: "https://media-cdn.tripadvisor.com/media/photo-s/14/56/13/8a/big-mike-burger-loaded.jpg",
  price: 17.43,
  createdAt: "2022-04-01T13:42:23.457Z",
  updatedAt: "2022-05-24T18:40:56.129Z",
  __v: 0,
};

const ProductList = () => {
  return (
    <div className="product-list">
      <ProductItem product={product} />
      <ProductItem product={product} />
      <ProductItem product={product} />
      <ProductItem product={product} />
      <ProductItem product={product} />
      <ProductItem product={product} />
      <ProductItem product={product} />
      <ProductItem product={product} />
      <ProductItem product={product} />
      <ProductItem product={product} />
      <ProductItem product={product} />
      <ProductItem product={product} />
      <ProductItem product={product} />
      <ProductItem product={product} />
    </div>
  );
};

export default ProductList;
