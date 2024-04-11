import styled from 'styled-components';
import { FONT_SIZE } from '../shared/style';

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 30px;
  gap: 20px;
  transition: width 1s;
  font-size: ${FONT_SIZE.SM};
  @media (min-width: 768px) {
    width: 60%;
    font-size: ${FONT_SIZE.LG};
  }
`;
