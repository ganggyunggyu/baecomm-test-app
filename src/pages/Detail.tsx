import React from 'react';
import { useParams } from 'react-router-dom';
import { productsState, searchProductsState, searchValueState } from '../shared/atom';
import { useRecoilValue } from 'recoil';
import { scrollToTop } from '../util/scrollToTop';
import * as S from './Detail.style';
import SearchProducts from '../components/Search/SearchProducts';
import Products from '../components/Main/Products';
import useGetProduct from '../hooks/useGetProduct';

const Detail = () => {
  const { productId } = useParams();

  const products = useRecoilValue(productsState);
  const searchProducts = useRecoilValue(searchProductsState);
  const searchValue = useRecoilValue(searchValueState);
  const totalProducts = [...products, ...searchProducts];
  const { getProductFetch, fetchProduct } = useGetProduct();
  const getProduct = () => {
    scrollToTop();
    if (productId) {
      const product = totalProducts.find((product) => {
        return product.id === +productId;
      });
      if (product) return product;
      getProductFetch(productId);
      return null;
    }
  };

  React.useEffect(() => {
    scrollToTop();
  }, [productId]);

  const product = getProduct();

  if (product) {
    return (
      <S.DetailWrapper>
        <S.ProductImage src={product.thumbnail} alt='productimage' />
        <S.ProductTitle>{product.title}</S.ProductTitle>
        <S.ProductCategory>{product.category}</S.ProductCategory>
        <S.ProductDescription>{product.description}</S.ProductDescription>
        <S.ProductPrice>🤑 ${product.price}</S.ProductPrice>
        <S.ProductDiscount>Discount: {product.discountPercentage}%</S.ProductDiscount>
        <S.ProductRating>Rating: {product.rating}</S.ProductRating>
        <S.ProductStock>Stock: {product.stock}</S.ProductStock>
        {product.images.map((img, index) => {
          return <S.ProductImage src={img} key={index} />;
        })}

        {searchValue && <SearchProducts />}
        {!searchValue && <Products />}
      </S.DetailWrapper>
    );
  }
  if (fetchProduct) {
    return (
      <S.DetailWrapper>
        <S.ProductImage src={fetchProduct.thumbnail} alt='productimage' />
        <S.ProductTitle>{fetchProduct.title}</S.ProductTitle>
        <S.ProductCategory>{fetchProduct.category}</S.ProductCategory>
        <S.ProductDescription>{fetchProduct.description}</S.ProductDescription>
        <S.ProductPrice>🤑 ${fetchProduct.price}</S.ProductPrice>
        <S.ProductDiscount>Discount: {fetchProduct.discountPercentage}%</S.ProductDiscount>
        <S.ProductRating>Rating: {fetchProduct.rating}</S.ProductRating>
        <S.ProductStock>Stock: {fetchProduct.stock}</S.ProductStock>
        {fetchProduct.images.map((img, index) => {
          return <S.ProductImage src={img} key={index} />;
        })}

        {searchValue && <SearchProducts />}
        {!searchValue && <Products />}
      </S.DetailWrapper>
    );
  }

  return <p>ERROR : 상품을 불러오는 데 실패했습니다.</p>;
};

export default Detail;
