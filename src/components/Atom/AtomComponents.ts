import styled from 'styled-components';
import { COLOR } from '../../shared/style';

export const RoundedButton = styled.button`
  padding: 20px 10px;
  border-radius: 50%;
  background-color: ${COLOR.LIGHT_GREY};
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 10px;
  right: 10px;
  transition: all 0.5s;
  &:hover {
    background-color: #ddd;
  }
`;
