import {
  Avatar,
  AvatarWrapper,
  Body,
  BottomWrapper,
  Button,
  CardWrapper,
  Contents,
  CreatedAt,
  Header,
  Info,
  Title,
  Wrapper,
  Writer,
} from "./BoardDetail.styles";
import { getDate } from "../../../../../src/commons/libraries/utils";
export default function BoardDetailUI(props) {
  return (
    <Wrapper>
      <CardWrapper>
        <Header>
          <AvatarWrapper>
            <Avatar src="/images/avatar.png" />
            <Info>
              <Writer>{props.data?.fetchBoard?.writer}</Writer>
              <CreatedAt>
                {getDate(props.data?.fetchBoard?.createdAt)}
              </CreatedAt>
            </Info>
          </AvatarWrapper>
        </Header>
        <Body>
          <Title>{props.data?.fetchBoard?.title}</Title>
          <Contents>{props.data?.fetchBoard?.contents}</Contents>
        </Body>
      </CardWrapper>
      <BottomWrapper>
        <Button>목록으로</Button>
        <Button onClick={props.onClickMoveToBoardEdit}>수정하기</Button>
        <Button>삭제하기</Button>
      </BottomWrapper>
    </Wrapper>
  );
}
