import image from "./notfound.jpeg";
import "./ProductNotFound.scss";

const ProductNotFound = () => {
  return (
    <div className="error-container">
      <div className="error-title">
        <div>Oops! Product not found</div>
      </div>
      <img src={image} alt=""></img>
    </div>
  );
};

export default ProductNotFound;
