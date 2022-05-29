import { ReactComponent as Logo } from "./Logo.svg";
import { Outlet } from "react-router";
import { HeaderAddButton } from "../components";
import { Home } from "../icon";
import { Link } from "react-router-dom";
import { ROUTER_PATHS } from "./paths";

const MainLayout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <header
        style={{
          background: "white",
          boxShadow: "0px 5px 24px 0px #41434E1A",
          height: 96,
          width: "100%",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", height: "100%" }}>
          <Link to={ROUTER_PATHS.HomePage.getUrl()} style={{ display: "flex", alignItems: "center", gap: 80 }}>
            <Logo />
            <div>
              <Home /> Catalogue Produits
            </div>
          </Link>
          <HeaderAddButton to={ROUTER_PATHS.ProductCreatePage.getUrl()} />
        </div>
      </header>
      <main style={{ maxWidth: 1440, marginTop: 40 }}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
