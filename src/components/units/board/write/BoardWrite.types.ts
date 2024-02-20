import { IQuery } from "../../../../commons/types/generated/types";
import { ChangeEvent } from "react";
export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoard">
  isEdit: boolean
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
  writerError : string
  onChangePassword :(event: ChangeEvent<HTMLInputElement>) => void
  passwordError : string
  onChangeTitle : (event: ChangeEvent<HTMLInputElement>) => void
  titleError : string
  onChangeContents : (event: ChangeEvent<HTMLTextAreaElement>) => void
  contentsError : string
  onClickUpdate : () => void
  onClickSubmit : () => void
  isActive : boolean
}
