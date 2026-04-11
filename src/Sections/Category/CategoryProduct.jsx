import React, { useEffect, useState } from "react";
import styles from "./category.module.css";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../Components/Product Card/ProductCard";

const CategoryProduct = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getCategoryProduct();
  }, [category]);

  async function getCategoryProduct() {
    let response = await fetch(
      `https://dummyjson.com/products/category/${category}`
    );
    let data = await response.json();
    setProducts(data.products);
    console.log(data);
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryProduct;
