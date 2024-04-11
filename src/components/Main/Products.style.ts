import styled from 'styled-components';
import { COLOR } from '../../shared/style';

export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 한 행에 두 개의 열을 설정 */
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
export const NoProductMessage = styled.div`
  font-size: 1.2rem;
  color: #555;
  text-align: center;
`;
