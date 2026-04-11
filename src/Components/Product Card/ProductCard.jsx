// png's and svg's
import Joystick from "./joystick.png";
import Rating from "./FourStar.svg";
import Eye from "./Eye.svg";
import Trash from "./trash.svg";

// other
import styles from "./ProductCard.module.css";
import useAddWishlist from "../../Hooks/WishlistHooks/useAddWishlist";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartProvider";
import { Link } from "react-router-dom";
import useDeleteWishlist from "../../Hooks/WishlistHooks/useDeleteWishlist";

export const ProductCard = ({ product, variant }) => {
  const { addToWishList, liked } = useAddWishlist();
  const {removeFromWish} = useDeleteWishlist();
  const { addToCart } = useContext(CartContext);

  const oldPrice = product?.price;
  const discountedPrice = product
    ? (
        product.price -
        (product.price * product.discountPercentage) / 100
      ).toFixed(2)
    : 0;

  return (
    <>
      <div className={styles.product}>
        <div className={styles.productImage}>
          <Link to={`/product/${product.id}`} key={product.id}>
            <img
              src={product?.images?.[0]}
              alt={product?.title}
              className={styles.productImageImg}
            />
          </Link>

          <div className={styles.imageInfo}>
            {product?.discountPercentage && product.discountPercentage >= 1 && (
              <button className={styles.discount}>
                -{Math.round(product?.discountPercentage)}%
              </button>
            )}
            <div className={styles.imageButtons}>
              {variant === "wishlist" ? (
                <button onClick={() => removeFromWish(product.docId,product.title)}>
                  <img src={Trash} alt="Remove from wishlist" />
                </button>
              ) : (
                <button onClick={() => addToWishList(product)}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{ cursor: "pointer" }}
                  >
                    <path
                      d="M8 5C5.7912 5 4 6.73964 4 8.88594C4 10.6185 4.7 14.7305 11.5904 18.8873C11.7138 18.961 11.8555 19 12 19C12.1445 19 12.2862 18.961 12.4096 18.8873C19.3 14.7305 20 10.6185 20 8.88594C20 6.73964 18.2088 5 16 5C13.7912 5 12 7.35511 12 7.35511C12 7.35511 10.2088 5 8 5Z"
                      stroke="black"
                      strokeWidth="1.5"
                      fill={liked ? "black" : "none"}
                    />
                  </svg>
                </button>
              )}
              <button>
                <img src={Eye} alt="Eye" />
              </button>
            </div>
          </div>
          <button
            className={styles.addCartBtn}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>

        <div className={styles.productInfo}>
          <h3>{product?.title}</h3>
          <div className={styles.productPrice}>
            <span className={styles.discountedPrice}>${discountedPrice}</span>
            {Number(oldPrice) !== Number(discountedPrice) && (
              <span className={styles.oldPrice}>${oldPrice}</span>
            )}
          </div>
          <span className={styles.ratingSpan}>
            <img src={Rating} alt="Rating" />
          </span>
        </div>
      </div>
    </>
  );
};
