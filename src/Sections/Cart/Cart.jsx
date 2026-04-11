import React, { useContext, useState } from "react";
import styles from "./Cart.module.css";
import { CartContext } from "../../Context/CartProvider";
import { Button } from "../../Components/Button/Button";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Configs/firebaseCfg";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartProducts, plusQty, minusQty } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cartProducts.reduce((acc, cp) => acc + Number(cp.price*cp.qty), 0);
  const subtotal  = cartProducts.reduce((acc, cp) => acc + Number(cp.price), 0);

  async function deleteProduct(product_id,title) {
    const docRef = doc(db, "cart", product_id);
    await deleteDoc(docRef);
    toast.success(`${title} removed from cart`);
  }

  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.pagePath}>
            <span>Home / </span>Cart
          </p>
          <div className={styles.table}>
            <div className={styles.tableHeader}>
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Subtotal</span>
            </div>
            {cartProducts.map((p) => (
              <div className={styles.singleCartProduct} key={p.id}>
                <div className={styles.imageWrapper}>
                  <button onClick={() => deleteProduct(p.id,p.title)}>&times;</button>
                  <img src={p?.images?.[0]} alt={p?.title} />
                  <span>{p?.title}</span>
                </div>
                <span>${p?.price}</span>
                <div className={styles.qty}>
                  <button onClick={() => minusQty(p.id,p.qty)}>-</button>
                  <input type="number" min="1" value={p.qty} readOnly />
                  <button onClick={() => plusQty(p.id)}>+</button>
                </div>
                <span>${(p?.price * p?.qty).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <Link to="/products" className={styles.returnBtn}>Return To Shop</Link>

          <div className={styles.couponWrapper}>
            <div className={styles.couponInput}>
              <input type="text" placeholder="Coupon Code" />
              <Button text="Apply Coupon" />
            </div>
            <div className={styles.cartTotal}>
              <h4 style={{ fontSize: "20px" }}>Cart Total</h4>
              <div className={styles.columns}>
                <div className={styles.column}>
                  <p>Subtotal:</p>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className={styles.column}>
                  <p>Shipping:</p>
                  <span>Free</span>
                </div>
                <div className={styles.column}>
                  <p>Total:</p>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button text="Procees to checkout" onClick={()=>navigate('/checkout')} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
