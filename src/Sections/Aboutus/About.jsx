import React from "react";
import styles from "./About.module.css";
import HeroImage from "./Images/heroImage.jpg";

import Services1 from "./Images/services1.svg?react";
import Services2 from "./Images/services2.svg?react";
import Services3 from "./Images/services3.svg?react";
import Services from "./Images/services.svg?react";

import Tom from "./Images/tom.png";
import Emma from "./Images/emma.png";
import Will from "./Images/will.png";

import Instagram from "./Images/instagram.svg"
import Linkedin from "./Images/linkedin.svg"
import Twitter from "./Images/twitter.svg"

import Call from "./Images/call.png"
import MoneyBack from "./Images/moneyback.png"
import Delivery from "./Images/delivery.png"

const About = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>

            {/* HERO SECTION */}

          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1>Our Story</h1>
              <p>
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.{" "}
              </p>
              <p>
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>
            {/* HERO IMAGE */}
            <div className={styles.heroImage}>
              <img src={HeroImage} alt="Hero Image" />
            </div>
          </div>
        </div>

        {/* CATEGORIES/BENEFITS */}

        <div className={styles.categoriesWrapper}>
          <div className={styles.categoryDiv}>
            <Services className={styles.icon} />
            <h2>45.5k</h2>
            <span>Customer active in our site</span>
          </div>
          <div className={styles.categoryDiv}>
            <Services1 className={styles.icon} />
            <h2>33k</h2>
            <span>Mopnthly Produduct Sale</span>
          </div>
          <div className={styles.categoryDiv}>
            <Services2 className={styles.icon} />
            <h2>10.5k </h2>
            <span>Sallers active our site</span>
          </div>
          <div className={styles.categoryDiv}>
            <Services3 className={styles.icon} />
            <h2>25k</h2>
            <span>Anual gross sale in our site</span>
          </div>
        </div>

        {/* EMPLOYEES SECTION */}
        <div className={styles.employees}>

          {/* EMPLOYEE 1 */}

          <div className={styles.employee}>
            <div className={styles.imageWrapper}>
              <img src={Tom} alt="" />
            </div>
            <div className={styles.textWrapper}>
              <h2>Tom Cruise</h2>
              <span>Founder & Chairman</span>
              <div className={styles.icons}>
                <img src={Twitter} alt="" />
                <img src={Instagram} alt="" />
                <img src={Linkedin} alt="" />
              </div>
            </div>
          </div>

        {/* EMPLOYEE 2 */}

          <div className={styles.employee}>
            <div className={styles.imageWrapper}>
              <img src={Emma} alt="" />
            </div>
            <div className={styles.textWrapper}>
              <h2>Emma Stone</h2>
              <span>Managing Director</span>
              <div className={styles.icons}>
                <img src={Twitter} alt="" />
                <img src={Instagram} alt="" />
                <img src={Linkedin} alt="" />
              </div>
            </div>
          </div>

          {/* EMPLOYEE 3 */}

          <div className={styles.employee}>
            <div className={styles.imageWrapper}>
              <img src={Will} alt="" />
            </div>
            <div className={styles.textWrapper}>
              <h2>Will Smith</h2>
              <span>Product Designer</span>
              <div className={styles.icons}>
                <img src={Twitter} alt="" />
                <img src={Instagram} alt="" />
                <img src={Linkedin} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* OUR SERVICE SECTION */}
        <div className={styles.ourService}>
            <div className={styles.service}>
              <img src={Delivery} />
              <p>FREE AND FAST DELIVERY</p>
              <span>Free delivery for all orders over $140</span>
            </div>

            <div className={styles.service}>
              <img src={Call} />
              <p>24/7 CUSTOMER SERVICE</p>
              <span>Friendly 24/7 customer support</span>
            </div>

            <div className={styles.service}>
              <img src={MoneyBack} />
              <p>MONEY BACK GUARANTEE</p>
              <span>We reurn money within 30 days</span>
            </div>
          </div>
      </section>
    </>
  );
};

export default About;
