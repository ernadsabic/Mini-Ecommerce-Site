import "./navbar.css";
import SearchIcon from "./Images/Vector.svg";
import WishListIcon from "./Images/wishlist.svg";
import Cart from "./Images/Cart1.svg";
import Account from "./Images/account.svg";
import Cart2 from "./Images/cart.svg";
import Logout from "./Images/logout.svg";
import User from "./Images/user.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../Configs/firebaseCfg";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Navbar = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  function searchProduct() {
    if (searchValue.trim() === "") return;
    navigate(`/search/${encodeURIComponent(searchValue)}`);
    setSearchValue("");
  }

  async function handleSignOut() {
    try {
      await signOut(auth);
      setIsOpen(false);
      <Navigate to="/sign" replace />;
    } catch (error) {
      console.error(error);
    }
  }
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <nav className="navbar-main">
      <div className="container">
        <div className="navWrapper">
          <Link to="/" className="logo" onClick={scrollToTop}>
            Exclusive
          </Link>
          <ul className="navbarUl">
            <li>
              <Link to="/" className="navLink">
                Home
              </Link>
            </li>
            <li>Contact</li>
            <li>
              <Link to="/about" className="navLink">
                About
              </Link>
            </li>
            {currentUser ? (
              <li>
                <Link to="/products" className="navLink">
                  All Products
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/sign" className="navLink">
                  SignUp
                </Link>
              </li>
            )}
          </ul>
          <div className="searchSide">
            <div className="searchBox">
              <input
                type="text"
                name="searchBar"
                placeholder="What are you looking for?"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && searchProduct()}
              />
              <button onClick={searchProduct} type="button">
                <img src={SearchIcon} alt="" />
              </button>
            </div>
            <Link to="/wishlist">
              <img src={WishListIcon} alt="" />
            </Link>
            <Link to="/cart">
              <img src={Cart} alt="" />
            </Link>
            {currentUser && (
              <button className="accountBtn" onClick={() => setIsOpen(!isOpen)}>
                <img src={User} alt="" />
              </button>
            )}
          </div>
          <div className={`dropdown ${isOpen ? "open" : ""}`}>
            <Link to="/profile">
              <img src={Account} alt="" />
              <span style={{ fontSize: "13.5px" }}>Manage My Account</span>
            </Link>

            <Link>
              <img src={Cart2} alt="" />
              <span>My Cart</span>
            </Link>

            <Link onClick={handleSignOut}>
              <img src={Logout} alt="" />
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
