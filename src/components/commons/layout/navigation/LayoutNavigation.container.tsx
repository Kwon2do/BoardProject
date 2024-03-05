import LayoutNavigationUI from "./LayoutNavigation.presenter";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
export default function LayoutNavigation(): JSX.Element {
  const router = useRouter();
  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    router.push(event.currentTarget.id);
  };
  return <LayoutNavigationUI onClickMenu={onClickMenu} />;
}
