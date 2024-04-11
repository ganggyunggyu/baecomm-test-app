import styled from 'styled-components';
import { COLOR, FONT_SIZE } from '../../shared/style';

export const Logo = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  color: #333;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  font-weight: 600;
  transition: background-color 0.3s, color 0.3s;
  color: ${COLOR.MAIN_COLOR};
  cursor: pointer;
  &:hover {
    background-color: ${COLOR.MAIN_COLOR};
    color: #fff;
  }
`;
export const HeaderWrapper = styled.header`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 90%;
  @media (min-width: 768px) {
    width: 60%;
    font-size: ${FONT_SIZE.LG};
  }
`;
export const PrevButton = styled.button`
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  border: none;
  position: absolute;
  left: 0;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.5s;
  &:hover {
    background-color: ${COLOR.MAIN_COLOR};
    color: #fff;
  }
`;
