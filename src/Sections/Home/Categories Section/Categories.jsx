import styles from "./Categories.module.css";
// arrows svg
import Left from "../Today's products/left.svg";
import Right from "../Today's products/right.svg";
// categories svg
import Camera from "./camera.svg?react";
import Gamepad from "./gamepad.svg?react";
import Headphones from "./headphones.svg?react";
import Phone from "./phone.svg?react";
import Smartwatch from "./smartwatch.svg?react";
import Computer from "./computer.svg?react";
import { Link } from "react-router-dom";

export const Categories = () => {
  return (
    <>
      <section className={styles.categoriesSection}>
        <div className={styles.categoriesContainer}>
          <h4>Categories</h4>
          <div className={styles.flexBox}>
            <h2>Browse By Category</h2>
          </div>

          {/* CATEGORIES LIST */}
          <div className={styles.categoriesWrapper}>
            <Link to="/category/laptops" className={styles.categoryDiv}>
              <Computer className={styles.icon} />
              <span>Computer</span>
            </Link>
            <Link
              to="/category/mobile-accessories"
              className={styles.categoryDiv}
            >
              <Camera className={styles.icon} />
              <span>Camera</span>
            </Link>
            <Link to="/category/tablets" className={styles.categoryDiv}>
              <Gamepad className={styles.icon} />
              <span>Gamepad</span>
            </Link>
            <Link to="/category/mens-watches" className={styles.categoryDiv}>
              <Smartwatch className={styles.icon} />
              <span>Watch</span>
            </Link>
            <Link
              to="/category/mobile-accessories"
              className={styles.categoryDiv}
            >
              <Headphones className={styles.icon} />
              <span>Headphones</span>
            </Link>
            <Link to="/category/smartphones" className={styles.categoryDiv}>
              <Phone className={styles.icon} />
              <span>Phone</span>
            </Link>
          </div>
          <div className={styles.borderBottom}></div>
        </div>
      </section>
    </>
  );
};
