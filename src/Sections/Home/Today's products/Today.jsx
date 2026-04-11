// png's & svg's
import Left from "./left.svg";
import Right from "./right.svg";

// components and other
import styles from "./Today.module.css";
import { Button } from "../../../Components/Button/Button";
import { Timer } from "../../../Components/Timer/Timer";
import { ProductCard } from "../../../Components/Product Card/ProductCard";
import { useState } from "react";
import { Link } from "react-router-dom";
import useGetProducts from "../../../Hooks/useGetProducts";

export const Today = () => {
  const {products} = useGetProducts() 
  const [index,setIndex] = useState(0);
  const itemsPerPage = 5;

 const nextSlide = () => {
      if(index + itemsPerPage < products.length){
        setIndex(index + itemsPerPage);
      }
      
  }
  
  const prevSlide = () => {
    if(index - itemsPerPage >= 0){
      setIndex(index - itemsPerPage);
    }
    
  }
return (
    <>
      <section className={styles.today_section}>

        <div className={styles.today_container}>

          <h4>Today's</h4>

          <div className={styles.flexbox}>
            <div className={styles.timer}>
              <h2>Flash Sales</h2>
              <Timer />
            </div>

            <div className={styles.buttons}>
              <button onClick={nextSlide}>
                <img src={Right} alt="Right Slide" />
              </button>
              <button onClick={prevSlide}>
                <img src={Left} alt="Left Slide" />
              </button>
            </div>
          </div>

          <div className={styles.grid}>
            {products.slice(index,index+itemsPerPage)
            .map((product)=>(
              <ProductCard key={product.id} product={product}/>
            ))
            }
          </div>

          <div className={styles.viewProductsBtn}>
            <Link to="/products">
              <Button text="View All Products" />
            </Link>
          </div>
          <div className={styles.borderBottom}></div>
        </div>
      </section>
    </>
  );
};
