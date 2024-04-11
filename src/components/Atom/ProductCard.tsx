import { T } from '../../shared';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import * as S from './ProductCard.style';

export default function Product({ product }: { product: T.Product }) {
  const navigator = useNavigate();

  const navigateToDetailPage = () => {
    sessionStorage.setItem('y', window.scrollY.toString());
    navigator(`/detail/${product.id}`);
  };

  React.useLayoutEffect(() => {
    window.scroll(0, sessionStorage.y);
  }, []);

  return (
    <S.ProductCard onClick={navigateToDetailPage}>
      <S.ProductImage src={product.thumbnail} alt='' />
      <S.ProductContent>
        <S.ProductTitle>
          <p>{product.brand}</p>
          <p>{product.title}</p>
        </S.ProductTitle>
        <S.ProductCategory>{product.category}</S.ProductCategory>
        <S.ProductPrice>{product.price}$</S.ProductPrice>
      </S.ProductContent>
    </S.ProductCard>
  );
}
