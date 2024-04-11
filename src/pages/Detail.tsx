import React from 'react';
import { useParams } from 'react-router-dom';
import { productsState, searchProductsState, searchValueState } from '../shared/atom';
import { useRecoilValue } from 'recoil';
import { scrollToTop } from '../util/scrollToTop';
import { T } from '../shared';
import * as S from './Detail.style';
import SearchProducts from '../components/Search/SearchProducts';
import Products from '../components/Main/Products';

const Detail = () => {
  const { productId } = useParams();

  const products = useRecoilValue(productsState);
  const searchProducts = useRecoilValue(searchProductsState);
  const searchValue = useRecoilValue(searchValueState);
  const totalProducts = [...products, ...searchProducts];

  const getProductFetch = async () => {
    const API_URL = `https://dummyjson.com/products/${productId}`;
    try {
      const response = await fetch(`${API_URL}`);
      if (!response.ok) {
        throw new Error('response Error');
      }
      const data = await response.json();
      const product: T.Product = data;
      console.log(product);
      return product;
    } catch (error) {
      console.error(error);
    }
  };
  const getProduct = () => {
    scrollToTop();
    if (productId) {
      const product = totalProducts.find((product) => {
        return product.id === +productId;
      });
      if (product) return product;
      // const fetchProduct = await getProductFetch();
      // console.log(fetchProduct);
      // if (fetchProduct) return fetchProduct;
    }
  };

  React.useEffect(() => {
    scrollToTop();
  }, []);

  const product = getProduct();

  if (product) {
    return (
      <S.DetailWrapper>
        <S.ProductImage src={product.thumbnail} alt='productimage' />
        <S.ProductTitle>{product.title}</S.ProductTitle>
        <S.ProductCategory>{product.category}</S.ProductCategory>
        <S.ProductDescription>{product.description}</S.ProductDescription>
        <S.ProductPrice>${product.price}</S.ProductPrice>
        <S.ProductDiscount>Discount: {product.discountPercentage}%</S.ProductDiscount>
        <S.ProductRating>Rating: {product.rating}</S.ProductRating>
        <S.ProductStock>Stock: {product.stock}</S.ProductStock>
        {product.images.map((img) => {
          return <S.ProductImage src={img} key={img} />;
        })}
        {searchValue && <SearchProducts />}
        {!searchValue && <Products />}
      </S.DetailWrapper>
    );
  }

  return <p>ERROR : 상품을 불러오는 데 실패했습니다.</p>;
};

export default Detail;
