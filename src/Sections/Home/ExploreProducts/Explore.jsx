import styles from "./Explore.module.css";
import Left from "./left.svg";
import Right from "./right.svg";
import { ProductCard } from "../../../Components/Product Card/ProductCard";
import { Button } from "../../../Components/Button/Button";
import { Link } from "react-router-dom";
import useGetProducts from "../../../Hooks/useGetProducts";

export const Explore = () => {
  const { products } = useGetProducts();

  return (
    <>
      <section className={styles.exploreSection}>
        <div className={styles.exploreContainer}>
          <h4>Our Products</h4>

          <div className={styles.flexbox}>
            <h2>Explore Our Products</h2>
          </div>
          <div className={styles.grid}>
            {products.slice(4, 12).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className={styles.btnDiv}>
            <Link to="/products">
              <Button text="View All Products" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
