import "./App.css";
import { HomePage } from "./Pages/HomePage";
import { SignPage } from "./Pages/SignPage";
import AllProducts from "./Pages/AllProducts";
import AboutUs from "./Pages/AboutUs";
import { Routes, Route } from "react-router-dom";
import { auth } from "./Configs/firebaseCfg";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import CheckAuth from "./Pages/CheckAuth";
import WishlistPage from "./Pages/WishlistPage";
import CartPage from "./Pages/CartPage";
import SingleProduct from "./Pages/SingleProduct";
import { Toaster } from "react-hot-toast";
import { Navbar } from "./Components/Navbar/Navbar";
import { PreHeader } from "./Components/Pre-Header/PreHeader";
import { Footer } from "./Components/Footer/Footer";
import Categories from "./Pages/Categories";
import ProfilePage from "./Pages/ProfilePage";
import CheckoutPage from "./Pages/CheckoutPage";
import SearchPage from "./Pages/SearchPage";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user || null);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!currentUser && location.pathname !== "/sign") {
    return <Navigate to="/sign" replace />;
  }

  console.log(auth?.currentUser?.email);

  return (
    <>
      <PreHeader />
      <Navbar currentUser={currentUser} />

      <Routes>
        <Route
          path="/"
          element={
            <CheckAuth currentUser={currentUser}>
              <HomePage currentUser={currentUser} />
            </CheckAuth>
          }
        />

        <Route path="/sign" element={<SignPage currentUser={currentUser} />} />
        <Route
          path="/products"
          element={<AllProducts currentUser={currentUser} />}
        />
        <Route path="/about" element={<AboutUs currentUser={currentUser} />} />
        <Route
          path="/wishlist"
          element={<WishlistPage currentUser={currentUser} />}
        />
        <Route path="/cart" element={<CartPage currentUser={currentUser} />} />
        <Route
          path="/product/:id"
          element={<SingleProduct currentUser={currentUser} />}
        />
        <Route
          path="/category/:category"
          element={<Categories currentUser={currentUser} />}
        />
        <Route
          path="/profile"
          element={<ProfilePage currentUser={currentUser} />}
        />
        <Route
          path="/checkout"
          element={<CheckoutPage currentUser={currentUser} />}
        />
        <Route
          path="/search/:product"
          element={<SearchPage currentUser={currentUser} />}
        />
      </Routes>
      <Footer />
      <Toaster position="bottom-right" />
    </>
  );
}

export default App;
