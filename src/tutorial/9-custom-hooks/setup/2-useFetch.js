import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  // const [Error, setError] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(url);
      const products = await response.json();
      setProducts(products);
      setLoading(false);
    };
    getProducts();
  }, [url]);
  return { products, loading };
};
