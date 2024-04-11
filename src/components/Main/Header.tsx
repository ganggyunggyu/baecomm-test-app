import { useNavigate } from 'react-router-dom';
import * as S from './Header.style';

export default function Header() {
  const navigator = useNavigate();

  const handlePrev = () => {
    window.history.back();
  };
  return (
    <S.HeaderWrapper>
      <S.PrevButton onClick={handlePrev}>PREV</S.PrevButton>
      <S.Logo
        onClick={() => {
          navigator('/');
        }}
      >
        BAECOMM
      </S.Logo>
    </S.HeaderWrapper>
  );
}
