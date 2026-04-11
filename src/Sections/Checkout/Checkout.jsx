import React from "react";
import styles from "./checkout.module.css";
import { CartContext } from "../../Context/CartProvider";
import { useContext } from "react";
import { Button } from "../../Components/Button/Button";
const Checkout = () => {
  const { cartProducts } = useContext(CartContext);

  const total = cartProducts.reduce(
    (acc, cp) => acc + Number(cp.price * cp.qty),
    0
  );
  const subtotal = cartProducts.reduce((acc, cp) => acc + Number(cp.price), 0);

  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <p>
            <span style={{ color: "rgba(0, 0, 0, 0.5)" }}>View Cart / </span>
            Checkout
          </p>
          <h1 style={{ marginTop: "80px" }}>Billing Details</h1>
          <div className={styles.flexbox}>
            <form action="">
              <div className={styles.inputLabel}>
                <label htmlFor="">
                  Full Name <span style={{ color: "red" }}>*</span>
                </label>
                <input type="text" />
              </div>

              <div className={styles.inputLabel}>
                <label htmlFor="">
                  Street Address <span style={{ color: "red" }}>*</span>
                </label>
                <input type="text" />
              </div>
              <div className={styles.inputLabel}>
                <label htmlFor="">Apartment,floor,etc. (optional)</label>
                <input type="text" />
              </div>
              <div className={styles.inputLabel}>
                <label htmlFor="">
                  Town/City <span style={{ color: "red" }}>*</span>
                </label>
                <input type="text" />
              </div>
              <div className={styles.inputLabel}>
                <label htmlFor="">
                  Phone Number <span style={{ color: "red" }}>*</span>
                </label>
                <input type="tel" />
              </div>
              <div className={styles.inputLabel}>
                <label htmlFor="">
                  Email Address <span style={{ color: "red" }}>*</span>
                </label>
                <input type="email" />
              </div>
              <div className={styles.checkBox}>
                <input type="checkbox" />
                <label htmlFor="">Save this information for faster check-out next time</label>
              </div>
            </form>
            <div className={styles.rightSide}>
              <div className={styles.total}>
                <div className={styles.payInfo}>
                  <p>Subtotal:</p>
                  <p>${subtotal.toFixed(2)}</p>
                </div>
                <div className={styles.payInfo}>
                  <p>Shipping:</p>
                  <p>Free</p>
                </div>
                <div className={styles.payInfo}>
                  <p>Total:</p>
                  <p>${total.toFixed(2)}</p>
                </div>
              </div>
              <div className={styles.radioInput}>
                <div>
                  <input type="radio" />
                  <label htmlFor="">Bank</label>
                </div>

                <div>
                  <input type="radio" checked />
                  <label htmlFor="">Cash on delivery</label> <br />
                </div>
              </div>
              <div className={styles.couponInput}>
                <input type="number" placeholder="Coupon Code" />
                <Button text="Apply Coupon" />
              </div>
              <Button text="Place order"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
