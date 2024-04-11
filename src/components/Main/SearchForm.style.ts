import styled from 'styled-components';
import { COLOR } from '../../shared/style';

export const SearchFormWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-items: center;
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  text-align: center;
  border: 1px solid ${COLOR.LIGHT_GREY};
  border-radius: 5px;
  transition: all 0.3s;
  &:focus {
    outline: none;
    border-color: ${COLOR.HOVER_COLOR};
    background-color: ${COLOR.LIGHT_GREY};
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 0px;
  padding: 10px 15px;
  background-color: ${COLOR.MAIN_COLOR};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${COLOR.HOVER_COLOR};
  }
`;

export const SearchInputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  position: relative;
`;
