import { useNavigate } from "react-router";
import { API } from "../api";
import { Center, ProductForm, ProductFormType } from "../components";
import { ROUTER_PATHS } from "../routing/paths";

const ProductCreatePage = () => {
  const navigate = useNavigate();
  const createProduct = (data: ProductFormType) => {
    API.createProduct(data)
      .then((res) => {
        navigate(ROUTER_PATHS.ProductDetailPage.getUrl(res._id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <Center>
      <ProductForm onSubmit={createProduct} />;
    </Center>
  );
};

export default ProductCreatePage;
