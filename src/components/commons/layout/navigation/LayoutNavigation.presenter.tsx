import * as S from "./LayoutNavigation.styles";
export default function LayoutNavigationUI(): JSX.Element {
  return (
    <S.Wrapper>
      <S.Group>
        <S.Board>자유게시판</S.Board>
        <S.Line>|</S.Line>
        <S.Market>중고마켓</S.Market>
        <S.Line>|</S.Line>
        <S.Mypage>마이페이지</S.Mypage>
      </S.Group>
    </S.Wrapper>
  );
}
