import React from 'react';
import Product from '../Atom/ProductCard';
import { useRecoilValue } from 'recoil';
import { productsState, totalState } from '../../shared/atom';
import useGetProducts from '../../hooks/useGetProducts';
import * as S from './Products.style';

export default function Products() {
  const products = useRecoilValue(productsState);
  const total = useRecoilValue(totalState);
  const { getProducts } = useGetProducts();

  if (products.length === 0) getProducts();

  return (
    <React.Fragment>
      상품 목록
      <S.ProductsWrapper>
        {products.map((product, index) => {
          return <Product product={product} key={index} />;
        })}
      </S.ProductsWrapper>
      {products.length !== total && <S.AddButton onClick={getProducts}>더 보기</S.AddButton>}
      {products.length === total && (
        <S.NoProductMessage>더 이상 보여줄 상품이 없습니다 ! 😔</S.NoProductMessage>
      )}
    </React.Fragment>
  );
}
