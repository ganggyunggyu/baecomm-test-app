import styled from 'styled-components';
import { FONT_SIZE } from '../shared/style';

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  @media (min-width: 768px) {
    width: 60%;
    font-size: ${FONT_SIZE.LG};
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  /* max-width: 400px; */
  height: auto;
  margin-bottom: 20px;
`;

export const ProductTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  letter-spacing: 1px;
`;

export const ProductCategory = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 10px;
  letter-spacing: 0.5px;
`;

export const ProductDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
  letter-spacing: 2px;
`;

export const ProductPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 10px;
  letter-spacing: 1px;
`;

export const ProductDiscount = styled.p`
  font-size: 1rem;
  color: #ff6347;
  margin-bottom: 10px;
  letter-spacing: 1px;
`;

export const ProductRating = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 10px;
  letter-spacing: 1px;
`;

export const ProductStock = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 10px;
  letter-spacing: 1px;
`;
