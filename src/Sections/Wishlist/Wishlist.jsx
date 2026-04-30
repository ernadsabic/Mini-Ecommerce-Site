import React, { useContext, useState } from "react";
import styles from "./Wishlist.module.css";
import { ProductCard } from "../../Components/Product Card/ProductCard";
import useGetWishlist from "../../Hooks/WishlistHooks/useGetWishlist";
import { Button } from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";
const Wishlist = () => {
  const { products } = useGetWishlist();
  const navigate = useNavigate();
  
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.flexBox}>
            <span>{`Wishlist (${products.length})`}</span>
            <button>Move All To Bag</button>
          </div>

          {products.length === 0 ? (
            <div className={styles.empty_wishlist}>
              <h2>Your wishlist is empty</h2>
              <p>Looks like you haven't added anything yet.</p>
              <Button
                text="Go shopping"
                onClick={() => navigate("/products")}
              />
            </div>
          ) : (
            <div className={styles.grid}>
              {products.map((p) => (
                <ProductCard product={p} key={p.id} variant="wishlist" />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Wishlist;
