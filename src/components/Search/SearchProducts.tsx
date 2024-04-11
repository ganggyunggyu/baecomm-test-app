import { useRecoilValue } from 'recoil';
import { searchProductsState, searchValueState } from '../../shared/atom';
import styled from 'styled-components';
import Product from '../Atom/ProductCard';
import React from 'react';

export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export default function SearchProducts() {
  const searchProducts = useRecoilValue(searchProductsState);
  const searchValue = useRecoilValue(searchValueState);

  if (searchProducts.length === 0) return <p>{searchValue}에 대한 검색 결과가 없습니다</p>;
  return (
    <React.Fragment>
      {searchValue}에 대한 검색결과 입니다.
      <ProductsWrapper>
        {searchProducts.map((pr) => {
          return <Product product={pr} key={pr.id + pr.title} />;
        })}
      </ProductsWrapper>
    </React.Fragment>
  );
}

export {};
