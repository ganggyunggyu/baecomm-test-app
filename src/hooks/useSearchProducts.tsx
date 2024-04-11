import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { searchProductsState, searchValueState } from '../shared/atom';

const useSearchProducts = () => {
  const navigator = useNavigate();
  const [searchValue, setSearchValue] = useRecoilState(searchValueState);
  const setSearchProducts = useSetRecoilState(searchProductsState);
  const getSearchProducts = async () => {
    const API_URL = `https://dummyjson.com/products/search?q=${searchValue}`;
    try {
      const response = await fetch(`${API_URL}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const products = data.products;
      setSearchProducts(products);
      navigator(`/search/${searchValue}`);
    } catch (error) {
      console.error(error);
    }
  };

  return { getSearchProducts, setSearchProducts, searchValue, setSearchValue };
};

export default useSearchProducts;
