import { useRecoilValue } from 'recoil';
import { searchProductsState, searchValueState } from '../../shared/atom';
import styled from 'styled-components';
import Product from '../Atom/ProductCard';
import React from 'react';
import { COLOR } from '../../shared/style';

export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;
export const AddButton = styled.button`
  padding: 10px 15px;
  background-color: ${COLOR.MAIN_COLOR};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
  &:hover {
    background-color: ${COLOR.HOVER_COLOR};
  }
`;

export default function SearchProducts() {
  const searchProducts = useRecoilValue(searchProductsState);
  const searchValue = useRecoilValue(searchValueState);
  const [addCount, setAddCount] = React.useState(10);

  const total = searchProducts.length;
  const products = searchProducts.slice(0, addCount);

  const isAddAble = total !== products.length;

  const handleAddProducts = () => {
    setAddCount((prev) => prev + 10);
  };

  if (searchProducts.length === 0) return <p>{searchValue}에 대한 검색 결과가 없습니다</p>;
  return (
    <React.Fragment>
      <p>
        {searchValue}에 대한 검색결과는 {total}개 입니다.
      </p>
      <ProductsWrapper>
        {products.map((pr, index) => {
          return <Product product={pr} key={index} />;
        })}
      </ProductsWrapper>
      {isAddAble && <AddButton onClick={handleAddProducts}>더 보기</AddButton>}
      {!isAddAble && <p>모든 상품을 불러왔습니다.</p>}
    </React.Fragment>
  );
}

export {};
