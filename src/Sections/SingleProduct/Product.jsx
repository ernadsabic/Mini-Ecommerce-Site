import React, { useContext, useEffect, useState, useRef } from "react";
import styles from "./Product.module.css";
import { useNavigate, useParams } from "react-router-dom";
import Rating from "./Images/FourStar.svg";
import Heart from "./Images/Heart.svg";
import Delivery from "./Images/icon-delivery.svg";
import Return from "./Images/icon-return.svg";
import { CartContext } from "../../Context/CartProvider";
import { useAddWishlist } from "../../Hooks/WishlistHooks/useAddWishlist";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState(0);
  const { addToCart } = useContext(CartContext);
  const { addToWishList } = useAddWishlist();
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    getProduct();
    const randomReviews = Math.floor(Math.random() * (200 - 50 + 1)) + 50;
    setReviews(randomReviews);
  }, []);

  async function getProduct() {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      console.log(data);
      setProduct(data);
    } catch (err) {
      console.error(err);
    }
  }

  // dodao ove 2* funkcije//

  function plusQty() {
    setQty((q) => q + 1);
  }

  function minusQty() {
    qty > 1 && setQty((q) => q - 1);
  }
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.pagePath}>
            <span>Product / </span>
            {product?.title}
          </p>
          <div className={styles.flexbox}>
            {/* <div className={styles.thumbnail}>
              <img src={product?.thumbnail} alt="" />
            </div> */}

            {/* LEFT SIDE / IMAGE SIDE */}
            <div className={styles.productImg}>
              <img src={product?.images?.[0]} alt={product?.title} />
            </div>
            {/* RIGHT SIDE/ PRODUCT INFO SIDE  */}
            <div className={styles.productInfo}>
              <div className={styles.productTitle}>
                <h3>{product?.title}</h3>
                <div className={styles.rating}>
                  <img src={Rating} alt="Rating" />
                  <p style={{ color: "rgba(0, 0, 0, 0.5)" }}>
                    ({reviews} Reviews)
                  </p>
                  <p>
                    |&nbsp;&nbsp;
                    <span style={{ color: "#00FF66" }}>
                      {product?.availabilityStatus}
                    </span>
                  </p>
                </div>

                <span style={{ fontSize: "24px" }}>${product?.price}</span>
              </div>
              <p className={styles.description}>{product?.description}</p>
              <p style={{ fontSize: "20px" }}>
                Brand:&nbsp;&nbsp;{product?.brand}
              </p>

              <div className={styles.sizeBtns}>
                <p style={{ fontSize: "20px" }}>Size:</p>
                <button>XS</button>
                <button>S</button>
                <button>M</button>
                <button>L</button>
                <button>XL</button>
              </div>
              <div className={styles.buyCTA}>
                <div className={styles.qtyInput}>
                  <button className={styles.minusQty} onClick={minusQty}>
                    -
                  </button>
                  <input type="number" min="1" readOnly value={qty} />
                  <button className={styles.plusQty} onClick={plusQty}>
                    +
                  </button>
                </div>
                <button
                  onClick={() => {
                    addToCart(product, qty);
                    navigate("/cart");
                  }}
                  className={styles.buttonBuy}
                >
                  Buy now
                </button>
                <button
                  className={styles.wishlistBtn}
                  onClick={() => addToWishList(product)}
                >
                  <img src={Heart} alt="Wishlist" />
                </button>
              </div>
              <div className={styles.delivery}>
                <div className={styles.freeDelivery}>
                  <img src={Delivery} alt="" />
                  <div>
                    <p>Free Delivery</p>
                    <p>Enter your postal code for Delivery Availability</p>
                  </div>
                </div>
                <div className={styles.returnDelivery}>
                  <img src={Return} alt="" />
                  <div>
                    <p>Return Delivery</p>
                    <p>Free 30 Days Delivery Returns. Details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
