import BoardCommentListUIPage from "./BoardCommentList.presenter";
import { MouseEvent } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD_COMMENTS, DELETE_BOARD_COMMENT} from "./BoardCommentList.queries";
import {
    IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
export default function BoardCommentListContainerPage() {
  const router = useRouter();
  if (!router || typeof router.query.boardId !== "string") {
    return <></>;
  }
  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  const [deleteBoardComment] = useMutation<Pick<IMutation,"deleteBoardComment">,IMutationDeleteBoardCommentArgs>(DELETE_BOARD_COMMENT);
  const onClickDelete = async (event: MouseEvent<HTMLImageElement>) => {
    //prompt를 사용해 사용자에게 입력받음
    const password = prompt("비밀번호를 입력하세요.");
    try {
      if (!(event.target instanceof HTMLImageElement)) {
        alert("시스템 오류 발생");
        return;
      }
      await deleteBoardComment({
        variables: {
          password: password,
          boardCommentId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
            //댓글 조회 API에서는 게시물 ID를 요구
              boardId: router.query.boardId,     
            },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };
  return (
  <BoardCommentListUIPage data={data} onClickDelete={onClickDelete} />
  );
}
