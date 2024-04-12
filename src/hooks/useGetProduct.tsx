import React from 'react';
import { T } from '../shared';

const useGetProduct = () => {
  const [fetchProduct, setFetchProduct] = React.useState<T.Product>();

  const getProductFetch = async (productId: string) => {
    console.log('FETCH!');
    const API_URL = `https://dummyjson.com/products/${productId}`;
    try {
      const response = await fetch(`${API_URL}`);
      if (!response.ok) {
        throw new Error('response Error');
      }
      const data = await response.json();
      const product: T.Product = data;
      setFetchProduct(product);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    fetchProduct,
    getProductFetch,
  };
};

export default useGetProduct;
