import { ProductForm, ProductFormType } from "../components";

const ProductCreatePage = () => {
  const createProduct = (data: ProductFormType) => {
    console.log("create product", data);
    //TODO: create product on server
  };

  return (
    <div>
      <ProductForm onSubmit={createProduct} />
    </div>
  );
};

export default ProductCreatePage;
