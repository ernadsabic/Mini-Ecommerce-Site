import { db, auth } from "../../Configs/firebaseCfg";
import {
  addDoc,
  collection,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useState } from "react";
import useGetWishlist from "../../Hooks/WishlistHooks/useGetWishlist";
import toast from "react-hot-toast";



export const useAddWishlist = () => {
  
  const collectionRef = collection(db, "wishlist");
  const [liked, setLiked] = useState(false);
  const { products } = useGetWishlist();

  async function addToWishList(product) {
    if (!auth.currentUser) return;

    setLiked(!liked);

    const alreadyExist = products.find((p) => product.id === p.id);

    if (alreadyExist) return;

    await addDoc(collectionRef, {
      user_id: auth.currentUser.uid,
      id: product.id,
      title: product.title,
      price: product.price,
      images: product.images,
      discountPercentage: product.discountPercentage,
      createdAt: serverTimestamp(),
    });
    toast("Added to wishlist ❤️");
  }
  return { addToWishList, liked };
};

export default useAddWishlist;
