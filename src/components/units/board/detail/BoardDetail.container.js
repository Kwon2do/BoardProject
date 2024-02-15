import {FETCH_BOARD, DELETE_BOARD } from './BoardDetail.queries'
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from './BoardDetail.presenter'
export default function BoardDetailContainer() {
    const router = useRouter()

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  const [deleteBoard] = useMutation(DELETE_BOARD);
    return(
        <BoardDetailUI writer={data?.fetchBoard?.writer} createdAt={data?.fetchBoard?.createdAt}
        title={data?.fetchBoard?.title} contents={data?.fetchBoard?.contents} deleteBoard={deleteBoard}/>
    )
}