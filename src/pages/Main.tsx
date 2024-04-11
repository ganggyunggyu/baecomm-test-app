import SearchForm from '../components/Main/SearchForm';
import Products from '../components/Main/Products';
import { MainWrapper } from './Main.style';

export default function Main() {
  return (
    <MainWrapper>
      <SearchForm />
      <Products />
    </MainWrapper>
  );
}
export {};
