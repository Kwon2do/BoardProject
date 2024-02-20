import * as S from "./BoardCommentList.styles"
export default function BoardCommentListUIPage() {
    return(
        <S.Wrapper>
            <S.Title>
                <S.Icon src="/../../../../../public/images/comment/icon.png"/>
                <S.Label>댓글</S.Label>
            </S.Title>
            <S.NewComment>
                <S.Contents placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."></S.Contents>
            </S.NewComment>
        </S.Wrapper>
    )
}