import React, { useState } from "react";
import { Button } from "../../../Components/Button/Button";
import styles from "./SignIn.module.css";
import { Link } from "react-router-dom";
import { auth } from "../../../Configs/firebaseCfg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignIn = ({ setIsSignUp }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");


  const login = async (e) => {
    try {
      e.preventDefault();
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.error(error);
      setLoginError(
        "Unesena adresa e-pošte ili sifra nisu povezani s korisničkim računom."
      );
    }
  };
  return (
    <>
      <form className={styles.form} onSubmit={login}>
        <div className={styles.formHeader}>
          <h2>Log in to Exclusive</h2>
          <p>Enter your details below</p>
        </div>

        <div className={styles.inputs}>
          <div>
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {loginError && <p className={styles.logErr}>{loginError}</p>}
          </div>

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.already}>
          <Button text="Log in" type="submit" />
          <div className={styles.createAcc}>
            <p>Don't have an account?</p>
            <button onClick={()=>setIsSignUp(true)} className={styles.linkBtn}>
              Create an account
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignIn;
