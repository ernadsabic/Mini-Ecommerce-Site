import { useEffect } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "../../Configs/firebaseCfg";
import { useState } from "react";

const useGetWishlist = () => {
  const [products, setProducts] = useState([]);
  const collectionRef = collection(db, "wishlist");

  useEffect(() => {
    if (!auth?.currentUser?.uid) return;
    let unsubscribe;
    try {
      const queryRef = query(
        collectionRef,
        where("user_id", "==", auth?.currentUser?.uid),
        orderBy("createdAt")
      );
      unsubscribe = onSnapshot(queryRef, (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          ...doc.data(),
          docId: doc.id,
        }));
        setProducts(data);
      });
    } catch (err) {
      console.error(err);
    }
    return () => unsubscribe();
  }, [auth?.currentUser?.uid]);
  
  return { products };
};



export default useGetWishlist;
