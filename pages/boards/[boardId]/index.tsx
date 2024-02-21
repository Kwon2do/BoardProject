import DetailPage from '../../../src/components/units/board/detail/BoardDetail.container'
import BoardCommentList from "../../../src/components/units/boardComment/list/BoardCommentList.container";
import BoardCommentWrite from "../../../src/components/units/boardComment/write/BoardCommentWrite.container";
export default function BoardDetailPage() {

  return (
  <>
      <DetailPage />
      <BoardCommentWrite />
      <BoardCommentList />
  </>
  );
}