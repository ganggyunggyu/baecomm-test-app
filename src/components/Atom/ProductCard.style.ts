import styled from 'styled-components';
import { COLOR, FONT_SIZE } from '../../shared/style';

export const ProductCard = styled.div`
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.5s;
  cursor: pointer;
  padding: 10px;
  letter-spacing: 1px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  &:hover {
    color: ${COLOR.HOVER_COLOR};
    background-color: #eee;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ProductContent = styled.div`
  padding: 5px 10px;
`;

export const ProductTitle = styled.div`
  display: flex;
  font-weight: bold;
  gap: 10px;
  margin-bottom: 3px;
  overflow-x: scroll;
  font-size: ${FONT_SIZE.MD};
`;

export const ProductCategory = styled.p`
  color: #555;
`;

export const ProductPrice = styled.p`
  color: #333;
  font-size: 1.2rem;
  margin-top: 10px;
`;

