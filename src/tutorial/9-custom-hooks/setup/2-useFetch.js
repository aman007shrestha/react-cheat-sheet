import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  // const [Error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, [url]);
  return { products, loading };
};
