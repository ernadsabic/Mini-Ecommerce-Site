import { useEffect, useState } from "react";

const useGetProducts = () => {
  const [pageLimit] = useState(12);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const getProducts = async () => {
    try {
      const offset = (page - 1) * pageLimit;
      const response = await fetch(
        `https://dummyjson.com/products?limit=${pageLimit}&skip=${offset}`
      );
      const data = await response.json();
      setProducts(data.products);
      setTotal(data.total);
    } catch (err) {
      console.error(err);
    }
  };

  const totalPages = Math.ceil(total / pageLimit);

  useEffect(() => {
    getProducts();
  }, [page]);

  return { products, setPage, page, totalPages };
};

export default useGetProducts;
