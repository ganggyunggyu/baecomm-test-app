import React from 'react';
import { useSetRecoilState } from 'recoil';
import { productsState, totalState } from '../shared/atom';
import { scrollToBottom } from '../util/scrollToBottom';

const useGetProducts = () => {
  const setProducts = useSetRecoilState(productsState);
  const setTotal = useSetRecoilState(totalState);

  const [skip, setSkip] = React.useState(0);

  const getProducts = async () => {
    const API_URL = `https://dummyjson.com/products?limit=${10}&skip=${skip}`;
    try {
      const response = await fetch(`${API_URL}`);
      if (!response.ok) {
        throw new Error('response Error');
      }
      const data = await response.json();
      const products = data.products;
      const total = data.total;
      setProducts((prev) => [...prev, ...products]);
      setTotal(total);
      setSkip((prev) => prev + 10);
      sessionStorage.setItem('y', window.scrollY.toString());
      scrollToBottom();
    } catch (error) {
      console.error(error);
    }
  };

  return { getProducts };
};

export default useGetProducts;
