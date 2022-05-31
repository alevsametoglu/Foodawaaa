import "./ProductList.scss";
import { ActionButton, ProductItem, ProductNotFound } from ".";
import { useEffect, useState } from "react";
import { API } from "../api";
import { Product } from "../models";

type Props = {
  searchKey?: string;
  relatedTags?: string[];
};
const ProductList = ({ relatedTags, searchKey }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  const loadList = (currentList = products) => {
    setLoading(true);
    API.getProducts({ start: currentList.length, count: 20, search: searchKey, tags: relatedTags })
      .then((res) => {
        setProducts([...currentList, ...res]);
        setHasMore(res.length === 20);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadList([]);
  }, [searchKey, relatedTags]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {!loading && products.length === 0 ? (
        <ProductNotFound />
      ) : (
        <>
          <div className="product-list">
            {products.map((product, i) => (
              <ProductItem key={i} product={product} />
            ))}
          </div>
          {hasMore && (
            <div style={{ textAlign: "center", marginBottom: 100 }}>
              <ActionButton text="load more" horizontalPadding={40} loading={loading} onClick={() => loadList()} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductList;
