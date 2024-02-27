import * as S from "./BoardCommentList.styles";
import { BoardCommentListUIProps } from "../list/BoardCommentList.types";
export default function BoardCommentListUIPage(props: BoardCommentListUIProps) {
  return (
    <div>
      {props.data?.fetchBoardComments.map((el) => (
        <S.Wrapper>
          <S.MainWrapper>
            <S.Group>
              <S.ProfileIcon src="/images/boardComment/list/profile_icon.png" />
              <S.Group2>
                <S.ContentsGroup>
                  <S.Group3>
                    <S.Writer>
                      {el.writer}
                      <S.Rating value={el.rating} disabled />
                    </S.Writer>
                    <S.Group4>
                      <S.UpdateIcon
                        id={el._id}
                        src="/images/boardComment/list/update_icon.png"
                      />
                      <S.DeleteIcon
                        onClick={props.onClickDelete}
                        id={el._id}
                        src="/images/boardComment/list/delete_icon.png"
                      />
                    </S.Group4>
                  </S.Group3>
                  <S.Contents>{el.contents}</S.Contents>
                </S.ContentsGroup>
                <S.CreateDate>{el.createdAt}</S.CreateDate>
              </S.Group2>
            </S.Group>
          </S.MainWrapper>
          <S.SubLine />
        </S.Wrapper>
      ))}
    </div>
  );
}
