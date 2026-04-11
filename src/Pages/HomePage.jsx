import { Hero } from "../Sections/Home/Hero/Hero";
import { Today } from "../Sections/Home/Today's products/Today";
import { Categories } from "../Sections/Home/Categories Section/Categories";
import { Arrival } from "../Sections/Home/Arrival Last Section/Arrival";
import { BestProducts } from "../Sections/Home/BestProducts/BestProducts";
import { Explore } from "../Sections/Home/ExploreProducts/Explore";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Today />
      <Categories />
      <BestProducts />
      <Explore />
      <Arrival />
    </>
  );
};
