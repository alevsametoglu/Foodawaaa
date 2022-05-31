import { useState } from "react";
import { ProductList, SearchInput } from "../components";
import "./HomePage.scss";

const HomePage = () => {
  const [searchKey, setSearchKey] = useState<string | undefined>();
  console.log({ searchKey });

  return (
    <div>
      <div className="search-bar">
        <div className="welcome">Welcome!</div>
        <SearchInput onChange={(value) => setSearchKey(value || undefined)} debounce={700} />
      </div>
      <ProductList searchKey={searchKey} />
    </div>
  );
};

export default HomePage;
