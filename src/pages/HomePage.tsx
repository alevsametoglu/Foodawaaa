import { ProductList, SearchInput } from "../components";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div>
      <div className="search-bar">
        <div className="welcome">Welcome!</div>
        <SearchInput onSearch={console.log} onChange={console.log} debounce={700} />
      </div>
      <ProductList />
    </div>
  );
};

export default HomePage;
