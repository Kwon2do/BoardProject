import {IQuery} from "../../../../commons/types/generated/types"
import { MouseEvent } from "react"
export interface BoardCommentListUIProps {
    data?:Pick<IQuery, "fetchBoardComments">
    onClickDelete:(event:MouseEvent<HTMLImageElement>)=>void
}