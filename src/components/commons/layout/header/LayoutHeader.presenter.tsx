import * as S from "./LayoutHeader.styles";
export default function LayoutHeaderUI() {
  return (
    <S.Wrapper>
      <S.Group>
        <S.Logo>💻Kwon</S.Logo>
        <S.SignGroup>
          <S.Login>로그인</S.Login>
          <S.Join>회원가입</S.Join>
        </S.SignGroup>
      </S.Group>
    </S.Wrapper>
  );
}
