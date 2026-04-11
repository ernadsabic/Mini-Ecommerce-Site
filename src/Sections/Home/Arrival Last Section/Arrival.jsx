import styles from "./Arrival.module.css";
import Woman from "./woman.png";
import Ps5 from "./ps5.png";
import Speakers from "./speakers.png";
import Perfume from "./perfume.png";
import Delivery from "./delivery.png";
import Call from "./call.png";
import MoneyBack from "./moneyback.png";

export const Arrival = () => {
  return (
    <>
      <section className={styles.lastSection}>
        <div className={styles.lastContainer}>
          
          <h4>Featured</h4>
          <h2>New Arrival</h2>

          <div className={styles.mainGrid}>
            {/* LEFT PHOTO */}
            <div className={styles.leftPhoto}>
              <img src={Ps5} alt="Play Station 5" />
              <div className={styles.textOnImage}>
                <h3>PlayStation 5</h3>
                <p>Black and White version of the PS5 coming out on sale.</p>
                <a href="/">Shop now</a>
              </div>
            </div>
            {/* RIGHT PHOTO */}
            <div className={styles.rightPhoto}>
              {/* WOMAN IMAGE */}

              <div className={styles.woman}>
                <img src={Woman} alt="" />
                <div className={styles.textOnImage}>
                  <h3>Women’s Collections</h3>
                  <p>Featured woman collections that give you another vibe.</p>
                  <a href="/">Shop now</a>
                </div>

              </div>
              {/* BOTTOM ROW */}
              <div className={styles.bottomRow}>
                {/* SPEAKERS */}
                <div className={styles.speakers}>
                  <img src={Speakers} alt="" />
                  <div className={styles.textOnImage}>
                    <h3>Speakers</h3>
                    <p>
                      Amazon wireless speakers
                    </p>
                    <a href="/">Shop now</a>
                  </div>
                </div>
                {/* PERFUME */}
                <div className={styles.perfume}>
                  <img src={Perfume} alt="" />
                  <div className={styles.textOnImage}>
                    <h3>Perfume</h3>
                    <p>
                      GUCCI INTENSE OUD EDP
                    </p>
                    <a href="/">Shop now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* OUR SERVICES */}
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
        </div>
      </section>
    </>
  );
};
