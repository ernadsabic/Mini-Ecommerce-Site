import React, { useEffect, useState } from "react";
import styles from "./search.module.css";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../Components/Product Card/ProductCard";

const Search = () => {
  const { product } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProduct() {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${product}`
      );
      const data = await response.json();
      setProducts(data.products);
    }
    getProduct();
  }, [product]);
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p style={{ marginBottom: "40px" }}>
          <span style={{ color: "rgba(0, 0, 0, 0.5)" }}>Search / </span>
          {product}
        </p>
        <h2>Results({products.length})</h2>
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Search;
