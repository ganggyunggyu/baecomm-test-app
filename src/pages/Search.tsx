import SearchForm from '../components/Main/SearchForm';
import SearchProducts from '../components/Search/SearchProducts';
import { SearchPageWrapper } from './Search.style';

export default function Search() {
  return (
    <SearchPageWrapper>
      <SearchForm />
      <SearchProducts />
    </SearchPageWrapper>
  );
}
