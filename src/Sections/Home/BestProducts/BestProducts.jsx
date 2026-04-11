import styles from "./BestProducts.module.css";
import { Button } from "../../../Components/Button/Button";
import { ProductCard } from "../../../Components/Product Card/ProductCard";
import { useCountdown } from "../../../Hooks/useCountdown";
import { Link } from "react-router-dom";
import JBL from "./jbl.png";
import { useEffect, useState } from "react";

export const BestProducts = () => {
  const { time } = useCountdown();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products?limit=4&skip=78`
        );
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        console.error(err);
      }
    };
    getProducts();
  }, []);

  return (
    <>
      <section className={styles.bestSection}>
        <div className={styles.bestContainer}>
          <h4>This Month</h4>
          <div className={styles.flexbox}>
            <h2>Best Selling Products</h2>
            <Link to="/products">
              <Button text="View All" />
            </Link>
          </div>
          <div className={styles.grid}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className={styles.jblDiv}>
            <div className={styles.leftSide}>
              <span className={styles.categoriesSpan}>Categories</span>
              <h1>Enhance Your Music Experience</h1>

              <div className={styles.timerDivs}>
                <div className={styles.timerDiv}>
                  <span className={styles.time}>{time?.days}</span>
                  <span className={styles.timeLabel}>Days</span>
                </div>

                <div className={styles.timerDiv}>
                  <span className={styles.time}>{time?.hours}</span>
                  <span className={styles.timeLabel}>Hours</span>
                </div>

                <div className={styles.timerDiv}>
                  <span className={styles.time}>{time?.minutes}</span>
                  <span className={styles.timeLabel}>Minutes</span>
                </div>

                <div className={styles.timerDiv}>
                  <span className={styles.time}>{time?.seconds}</span>
                  <span className={styles.timeLabel}>Seconds</span>
                </div>
              </div>
              <Button text="Buy Now!" />
            </div>
            <div className={styles.rightSide}>
              <img src={JBL} alt="JBL Speaker Image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
