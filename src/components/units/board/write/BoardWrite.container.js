import {useState} from 'react'
import { useRouter } from "next/router";
import { useMutation } from '@apollo/client'
import BoardWriteUI from './BoardWrite.presenter'
import {CREATE_BOARD} from './BoardWrite.queries'
import { useAmp } from 'next/amp';
export default function BoardWriteContainer() {
    const router = useRouter()

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [isActive, setIsActive] = useState(false);
  const [createBoard] = useMutation(CREATE_BOARD)

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if(event.target.value !== ""){
      setWriterError("")
    }
    if(event.target.value && password && title && contents){
      setIsActive(true);
    }
    else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if(event.target.value !== ""){
      setPasswordError("")
    }
    if(event.target.value && writer && title && contents){
      setIsActive(true);
    }
    else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if(event.target.value !== ""){
      setTitleError("")
    }
    if(writer && contents && password && event.target.value){
      setIsActive(true);
    }
    else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if(event.target.value !== ""){
      setContentsError("")
    }
    if(writer && event.target.value && password && title){
      setIsActive(true);
    }
    else {
      setIsActive(false);
    }
  };

  const onClickSubmit = async () => {
    if (!writer) {
      setWriterError("작성자를 입력해주세요.");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (!title) {
      setTitleError("제목을 입력해주세요.");
    }
    if (!contents) {
      setContentsError("내용을 입력해주세요.");
    }
    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents
            }
          }
        })
        console.log(result.data.createBoard._id)
        router.push(`/boards/${result.data.createBoard._id}`)
      } catch(error) {
        alert(error.message)
      }
    }
  };
    return(
        <BoardWriteUI writer={onChangeWriter} writerError={writerError}
        password={onChangePassword} passwordError={passwordError}
        title={onChangeTitle} titleError={titleError}
        contents={onChangeContents} contentsError={contentsError}
        submit={onClickSubmit} isActive={isActive}
        />
    )

};