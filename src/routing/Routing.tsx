import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorPage, HomePage, ProductCreatePage, ProductDetailPage, ProductUpdatePage } from "../pages";
import MainLayout from "./MainLayout";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/product/create" element={<ProductCreatePage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/product/:productId/edit" element={<ProductUpdatePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
