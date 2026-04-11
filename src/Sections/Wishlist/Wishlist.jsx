import React, { useContext, useState } from "react";
import styles from "./Wishlist.module.css";
import { ProductCard } from "../../Components/Product Card/ProductCard";
import useGetWishlist from "../../Hooks/WishlistHooks/useGetWishlist";
const Wishlist = () => {
  const { products } = useGetWishlist();

  console.log(products);
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.flexBox}>
            <span>{`Wishlist (${products.length})`}</span>
            <button>Move All To Bag</button>
          </div>
          <div className={styles.grid}>
            {products.map((p) => (
              <ProductCard product={p} key={p.id} variant="wishlist" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Wishlist;
