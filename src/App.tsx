import React from 'react';
import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import styled from 'styled-components';
import Detail from './pages/Detail';
import Header from './components/Main/Header';
import Search from './pages/Search';
import { RoundedButton } from './components/Atom/AtomComponents';
import { scrollToTop } from './util/scrollToTop';

export const AppWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
function App() {
  return (
    <AppWrapper>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/search/:searchValue' element={<Search />} />
        <Route path='/detail/:productId' element={<Detail />} />
      </Routes>
      <RoundedButton onClick={scrollToTop}>TOP</RoundedButton>
    </AppWrapper>
  );
}

export default App;
