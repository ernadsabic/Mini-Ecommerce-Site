import styles from "./Products.module.css";
import React from "react";
import Left from "./left.svg";
import Right from "./right.svg";
import useGetProducts from "../../Hooks/useGetProducts";
import { ProductCard } from "../../Components/Product Card/ProductCard";

const Products = () => {
  const { products, setPage, page, totalPages } = useGetProducts();

  function nextPage() {
    if (page < totalPages) {
      setPage((p) => p + 1);
    }
  }
  function prevPage() {
    if (page > 1) {
      setPage((p) => p - 1);
    }
  }

  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.flexbox}>
            <h2>All Our Products</h2>
            <div className={styles.buttons}>
              <button onClick={prevPage}>
                <img src={Right} alt="Right Slide" />
              </button>
              <button onClick={nextPage}>
                <img src={Left} alt="Left Slide" />
              </button>
            </div>
          </div>
          <div className={styles.grid}>
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
