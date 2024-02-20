import { FETCH_BOARD } from "./BoardDetail.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {IQuery, IQueryFetchBoardArgs} from "../../../../commons/types/generated/types";
import BoardDetailUI from "./BoardDetail.presenter";
export default function BoardDetailContainer() {
  const router = useRouter();
  if(!router || typeof(router.query.boardId) !== "string") return <></>
  const { data } = useQuery<Pick<IQuery, "fetchBoard">,IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  const onClickMoveToBoardEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };
  return (
    <BoardDetailUI
      data={data}
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
    /> 
  );
}
