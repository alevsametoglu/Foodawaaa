import { ProductForm, ProductFormType } from "../components";

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

const ProductUpdatePage = () => {
  const updateProduct = (data: ProductFormType) => {
    console.log("update product", data);
    //TODO: update product on server
  };

  return (
    <div>
      <ProductForm product={sampleProduct} onSubmit={updateProduct} />
    </div>
  );
};

export default ProductUpdatePage;
