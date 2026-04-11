import { db } from "../../Configs/firebaseCfg";
import { doc, deleteDoc } from "firebase/firestore";
import toast from "react-hot-toast";

export const useDeleteWishlist = () => {
  const removeFromWish = async (id,title) => {
    if(confirm("Are you sure you want to remove this item?")){
        await deleteDoc(doc(db,"wishlist",id));
        toast.success(`${title} removed from wishlist`);
    }
  };
  return{removeFromWish}
};

export default useDeleteWishlist;
