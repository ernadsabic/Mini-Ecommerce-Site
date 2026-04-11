import React, { createContext, useEffect, useState } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
  updateDoc,
  doc,
  increment,
} from "firebase/firestore";
import { db, auth } from "../Configs/firebaseCfg";
import { onAuthStateChanged } from "firebase/auth";
import toast from "react-hot-toast";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const collectionRef = collection(db, "cart");
  const [cartProducts, setCartProducts] = useState([]);

// 

  useEffect(() => {
    let unsubscribe;
    const unsubAuth = onAuthStateChanged(auth, (user) => {
      if (!user) return;

      const queryRef = query(
        collectionRef,
        where("user_id", "==", user.uid),
        orderBy("localCreatedAt")
      );
      unsubscribe = onSnapshot(queryRef, (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setCartProducts(data);
      });
    });
    return () => {
      unsubAuth();
      if (unsubscribe) unsubscribe();
    };
  }, []);

  // 

  async function plusQty(doc_id, amount=1) {
    await updateDoc(doc(db, "cart", doc_id), {
      qty: increment(amount),
    });
  }

  // 
  async function minusQty(doc_id, qty) {
    if (qty === 1) {
      return;
    }
    await updateDoc(doc(db, "cart", doc_id), {
      qty: increment(-1),
    });
  }

  
// jedino sam dodao qty u arg list i dole maknuo qty:1//
  async function addToCart(product,qty) {
    if (!auth?.currentUser?.uid) return;

    const existingProduct = cartProducts.find((p) => {
      return p.product_id === product.id;
    });

    if (existingProduct) {
      await plusQty(existingProduct.id, qty ?? 1);
      return;
    }
    await addDoc(collectionRef, {
      user_id: auth.currentUser.uid,
      product_id: product.id,
      title: product.title,
      price: product.price,
      images: product.images,
      qty: qty ?? 1,
      localCreatedAt: Date.now(),
    });
    toast.success(`${product.title} added to cart`);
  }

  // 

  return (
    <CartContext.Provider
      value={{ addToCart, cartProducts, plusQty, minusQty }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
