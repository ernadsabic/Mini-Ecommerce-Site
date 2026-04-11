import styles from "./SignUp.module.css";
import { Button } from "../../../Components/Button/Button";
import { auth, db, provider } from "../../../Configs/firebaseCfg";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import useFormValidator from "../../../Hooks/useFormValidator";
import { useNavigate } from "react-router-dom";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";

export const SignUp = ({ setIsSignUp }) => {
  const navigate = useNavigate();
  const initializeValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initializeValues);
  const [errors, setErrors] = useState({});
  const { validate } = useFormValidator();

  function handleForm(e) {
    setErrors({});
    const { name, value } = e.target;
    setFormValues((f) => ({ ...f, [name]: value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const err = validate(formValues);
    setErrors(err);
    if (Object.keys(err).length === 0) {
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        formValues.email,
        formValues.password
      );
      const userId = userCredential.user.uid;
      const snap = await getDoc(doc(db, "users", userId));

      if (!snap.exists()) {
        await setDoc(doc(db, "users", userId), {
          username: formValues.username,
          email: formValues.email,
          user_id: userId,
          createdAt: serverTimestamp(),
        });
        return;
      }

      navigate("/");
    }
  }

  async function signVGoogle() {
    try {
      let userCredential = await signInWithPopup(auth, provider);
      const userId = userCredential.user.uid;
      let user = userCredential.user;
      const snap = await getDoc(doc(db, "users", userId));

      if (!snap.exists()) {
        await setDoc(doc(db, "users", userId), {
          username: user.displayName,
          email: user.email,
          user_id: userId,
          createdAt: serverTimestamp(),
        });
      }

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formHeader}>
          <h2>Create an account</h2>
          <p>Enter your details below</p>
        </div>

        <div className={styles.inputs}>
          <div>
            <input
              type="text"
              placeholder="Name"
              name="username"
              onChange={handleForm}
            />
            {errors.username && (
              <span className={styles.errorMsg}>{errors.username}</span>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={handleForm}
            />
            {errors.email && (
              <span className={styles.errorMsg}>{errors.email}</span>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleForm}
            />
            {errors.password && (
              <span className={styles.errorMsg}>{errors.password}</span>
            )}
          </div>
        </div>
        <div className={styles.formButtons}>
          <Button text="Create account" type="submit" />
        </div>
      </form>
      <button onClick={signVGoogle} className={styles.googleBtn}>
        Sign Up With Google
      </button>
      <div className={styles.already}>
        <p>Already have account?</p>
        <button onClick={() => setIsSignUp(false)} className={styles.linkBtn}>
          Login now
        </button>
      </div>
    </>
  );
};
