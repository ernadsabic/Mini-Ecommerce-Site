import React, { useEffect, useState } from "react";
import styles from "./ProfileInfo.module.css";
import { Button } from "../../Components/Button/Button";
import { db, auth } from "../../Configs/firebaseCfg";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const ProfileInfo = () => {
  const [userInfo, setUserInfo] = useState({});
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({ name: "", email: "" });

  const regexName =
    /^[A-Za-zČĆŽŠĐčćžšđ]+ [A-Za-zČĆŽŠĐčćžšđ]+(?: [A-Za-zČĆŽŠĐčćžšđ]+)*$/;
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        if (!user) return;
        const data = await getDoc(doc(db, "users", user.uid));
        setUserInfo(data.data());
      } catch (error) {
        console.error(error);
      }
    });
    return () => unsubscribe();
  }, []);

  function handleForm(e) {
    const { name, value } = e.target;
    setErrors((p) => ({ ...p, [name]: "" }));
    setFormValues((f) => ({ ...f, [name]: value }));
  }

  async function updateName() {
    if (formValues.name.trim() === "") {
      return;
    } else if (formValues.name === userInfo.username) {
      setErrors((p) => ({
        ...p,
        name: "Novo korisnicko ime ne moze biti kao staro!",
      }));
      return;
    } else if (!regexName.test(formValues.name)) {
      setErrors((p) => ({
        ...p,
        name: "Neispravan format (ex. Marko Markovic)",
      }));
      return;
    } else {
      await updateDoc(doc(db, "users", auth?.currentUser?.uid), {
        username: formValues.name,
      });
      setUserInfo((p) => ({ ...p, username: formValues.name }));
      setFormValues((p) => ({ ...p, name: "" }));
      return;
    }
  }

  async function updateEmail() {
    if (formValues.email.trim() === "") {
      return;
    } else if (formValues.email === userInfo.email) {
      setErrors((p) => ({
        ...p,
        email: "Novi email ne moze biti kao stari!",
      }));
      return;
    } else if (!regexEmail.test(formValues.email)) {
      setErrors((p) => ({
        ...p,
        email: "Neispravan format (ex. marko@gmail.com)",
      }));
      return;
    } else {
      await updateDoc(doc(db, "users", auth?.currentUser?.uid), {
        email: formValues.email,
      });
      setUserInfo((p) => ({ ...p, email: formValues.email }));
      setFormValues((p) => ({ ...p, email: "" }));
      return;
    }
  }

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
              Welcome!{" "}
              <span style={{ color: "red" }}>{userInfo?.username}</span>
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
              <p style={{ color: "red", marginBottom: "50px" }}>
                Edit Your Profile
              </p>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className={styles.formFlex}>
                  <div className={styles.inputDiv}>
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formValues.name}
                      placeholder={userInfo?.username}
                      onChange={handleForm}
                    />
                    {errors?.name && (
                      <p style={{ color: "red" }}>{errors.name}</p>
                    )}
                    <Button
                      text="Update Name"
                      onClick={updateName}
                      type="button"
                    />
                  </div>
                  <div className={styles.inputDiv}>
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formValues.email}
                      placeholder={userInfo?.email}
                      onChange={handleForm}
                    />
                    {errors?.email && (
                      <p style={{ color: "red" }}>{errors.email}</p>
                    )}
                    <Button
                      text="Update Email"
                      onClick={updateEmail}
                      type="button"
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
                  <Button text="Update Password" type="submit" />
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
