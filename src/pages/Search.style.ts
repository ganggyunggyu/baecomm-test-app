import styled from 'styled-components';

export const SearchPageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 30px;
  gap: 20px;
  transition: width 1s;
  /* PC 사이즈일 때 */
  @media (min-width: 768px) {
    width: 60%;
  }
`;
