// IMAGES
import AppleLogo from "./Images/applelogo.png";
import SamsungLogo from "./Images/samsunglogo.png";
import HuaweiLogo from "./Images/huaweilogo.png";
import XiaomiLogo from "./Images/xiaomilogo.png";
import Iphone from "./Images/iphoneImage.png";
import Samsung from "./Images/samsung.png";
import Xiaomi from "./Images/xiaomi.png";
import Huawei from "./Images/huawei.png";
import Arrow from "./Images/arrow.svg";

// HOOKS,FILES
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Hero = () => {
  const slides = [
    {
      logo: AppleLogo,
      title: "iPhone 14 Series",
      text: "Up to 10% off Voucher",
      image: Iphone,
    },
    {
      logo: SamsungLogo,
      title: "Samsung Galaxy",
      text: "Up to 20% off Price",
      image: Samsung,
    },
    {
      logo: XiaomiLogo,
      title: "Xiaomi Pro",
      text: "Special Offer 15%",
      image: Xiaomi,
    },
    {
      logo: HuaweiLogo,
      title: "Huawei P Series",
      text: "Limited Deal 12%",
      image: Huawei,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(3);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch(
        "https://dummyjson.com/products/category-list"
      );
      const data = await response.json();
      setCategories(data);
    };
    getCategories();
  }, []);

  function changeSlide(index) {
    setCurrentSlide(index);
  }

  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.heroWrapper}>
          <aside className={styles.heroAside}>
            <ul className={styles.heroUl}>
              {categories.slice(0, 11).map((category, index) => (
                <li key={index}>
                  <Link to={`/category/${category}`} className={styles.sidebarLink}>
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
          <main>
            <div className={styles.heroImage}>
              <div className={styles.flexbox}>
                {/* leftside */}
                <div className={styles.leftSide}>
                  <div className={styles.appleLogo}>
                    <img
                      src={slides[currentSlide].logo}
                      alt={slides[currentSlide].title}
                    />
                    <p>{slides[currentSlide].title}</p>
                  </div>
                  <p className={styles.bigText}>{slides[currentSlide].text}</p>
                  <Link to="/" className={styles.ctaDiv}>
                    <span className={styles.ctaHero}>Shop now</span>
                    <img src={Arrow} alt="Arrow" />
                  </Link>
                </div>

                {/* right side */}
                <div className={styles.rightSide}>
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                  />
                </div>
              </div>

              <div className={styles.dots}>
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`${styles.dot} ${
                      currentSlide === index ? styles.active : ""
                    }`}
                    onClick={() => changeSlide(index)}
                  ></div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
