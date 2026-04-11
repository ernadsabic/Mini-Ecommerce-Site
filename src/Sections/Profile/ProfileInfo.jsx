import React, { useEffect, useState } from "react";
import styles from "./ProfileInfo.module.css";
import { Button } from "../../Components/Button/Button";
import { db, auth } from "../../Configs/firebaseCfg";
import { getDoc, collection, doc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const ProfileInfo = () => {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    const getUser = async () => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        try {
          if (!user) return;
          const snap = doc(db, "users", user.uid);
          const data = await getDoc(snap);
          setUserInfo(data.data());
        } catch (error) {
          console.error(error);
        }
      });
      return () => unsubscribe();
    };
    getUser();
  }, []);

  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.flexBox}>
            <p>
              <span style={{ color: "rgba(0, 0, 0, 0.5)" }}>Home / </span>My
              account
            </p>
            <p>
              Welcome! <span style={{ color: "red" }}>{userInfo?.username}</span>
            </p>
          </div>
          <div className={styles.flexBox2}>
            <div className={styles.columns}>
              <div className={styles.column}>
                <h3>Manage My Account</h3>
                <ul>
                  <li>
                    <a href="">My Profile</a>
                  </li>
                  <li>
                    <a href="">Address Book</a>
                  </li>
                  <li>
                    <a href="">My Payment Options</a>
                  </li>
                </ul>
              </div>

              <div className={styles.column}>
                <h3>My Orders</h3>
                <ul>
                  <li>
                    <a href="">My Returns</a>
                  </li>
                  <li>
                    <a href="">My Cancellations</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.modal}>
              <p style={{ color: "red", marginBottom: "16px" }}>
                Edit Your Profile
              </p>
              <form action="">
                <div className={styles.formFlex}>
                  <div className={styles.inputDiv}>
                    <label style={{ display: "block", marginBottom: "8px" }}>
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      placeholder={userInfo?.username?.split(" ")[0]}
                    />
                  </div>
                  <div className={styles.inputDiv}>
                    <label style={{ display: "block", marginBottom: "8px" }}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      placeholder={userInfo?.username?.split(" ")[1]}
                    />
                  </div>
                </div>
                <div className={styles.formFlex}>
                  <div className={styles.inputDiv}>
                    <label style={{ display: "block", marginBottom: "8px" }}>
                      Email
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      placeholder={userInfo?.email}
                    />
                  </div>
                  <div className={styles.inputDiv}>
                    <label style={{ display: "block", marginBottom: "8px" }}>
                      Address
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      placeholder="Kingston, 5236, United State"
                    />
                  </div>
                </div>
                <div className={styles.passwordInputs}>
                  <label htmlFor="" style={{ display: "block" }}>
                    Password Changes
                  </label>
                  <input type="password" placeholder="Current Password" />
                  <input type="password" placeholder="New Password" />
                  <input type="password" placeholder="Confirm New Password" />
                </div>
                <div className={styles.submitBtns}>
                  <Button text="Save Changes" type="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileInfo;
