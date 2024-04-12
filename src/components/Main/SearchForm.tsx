import React from 'react';
import useSearchProducts from '../../hooks/useSearchProducts';
import * as S from './SearchForm.style';

export default function SearchForm() {
  const { getSearchProducts, searchValue, setSearchValue } = useSearchProducts();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  const clearInput = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSearchValue('');
  };

  return (
    <S.SearchFormWrapper onSubmit={handleSubmit}>
      <S.SearchInputWrapper>
        <S.SearchInput
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') getSearchProducts();
          }}
          type='text'
          placeholder='검색어를 입력하세요'
        />
        <S.SearchButton type='button' onClick={getSearchProducts}>
          검색
        </S.SearchButton>
        <S.InputClearButton onClick={clearInput}>❌</S.InputClearButton>
      </S.SearchInputWrapper>
    </S.SearchFormWrapper>
  );
}
