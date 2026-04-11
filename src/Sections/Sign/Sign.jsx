import styles from "./Sign.module.css";
import Image from "./image1.png";
import { SignUp } from "./SignUp-HTML/SignUp";
import SignIn from "./SignIn-HTML/SignIn";
import { useState } from "react";
import useGetProducts from "../../Hooks/useGetProducts";

export const Sign = () => {
  const {data} = useGetProducts();
  const[isSignUp,setIsSignUp] = useState(true)
  return (
    <>
      {console.log(data)}
      <section className={styles.signSection}>
        <div className={styles.container}>
          <div className={styles.flexBox}>
            <div className={styles.imageWrapper}>
              <img src={Image} />
            </div>
            <div className={styles.formWrapper}>
              {isSignUp ? (
                <SignUp setIsSignUp={setIsSignUp}/>
              ):(
                <SignIn setIsSignUp={setIsSignUp}/>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
