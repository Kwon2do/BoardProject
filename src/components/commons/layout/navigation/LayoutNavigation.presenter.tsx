import { Fragment } from "react";
import * as S from "./LayoutNavigation.styles";
import { ILayoutNavigationProps } from "./LayoutNavigation.types";
export default function LayoutNavigationUI(
  props: ILayoutNavigationProps
): JSX.Element {
  const NAVIGATION_ITEM = [
    { name: "자유게시판", page: "/boards" },
    { name: "중고마켓", page: "/markets" },
    { name: "마이페이지", page: "/mypage" },
  ];
  return (
    <S.Wrapper>
      {NAVIGATION_ITEM.map((el) => (
        <Fragment key={el.page}>
          <S.MenuItem id={el.page} onClick={props.onClickMenu}>
            {el.name}
          </S.MenuItem>
          <S.Line></S.Line>
        </Fragment>
      ))}
    </S.Wrapper>
  );
}
