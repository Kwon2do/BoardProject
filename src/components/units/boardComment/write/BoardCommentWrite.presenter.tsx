import * as S from "./BoardCommentWrite.styles";
import { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";
import { Flex, Rate } from "antd";
export default function BoardCommentWrtieUIPage(
  props: IBoardCommentWriteUIProps
) {
  return (
    <S.Wrapper>
      <>
        <S.Icon src="/images/boardComment/write/icon.png" />
        <span>댓글</span>
      </>
      <S.InputWrapper>
        <S.Input placeholder="작성자" onChange={props.onChangeWriter} />
        <S.Input
          placeholder="비밀번호"
          type="password"
          onChange={props.onChangePassword}
        />
        <Rate onChange={props.setRating} value={props.rating} />
      </S.InputWrapper>
      <S.ContentsWrapper>
        <S.Contents
          maxLength={100}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다. "
          onChange={props.onChangeContents}
        ></S.Contents>
        <S.BottomWrapper>
          <S.ContentsLength>0/100</S.ContentsLength>
          <S.Button onClick={props.onClickButton}>등록하기</S.Button>
        </S.BottomWrapper>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}
