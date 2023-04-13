import { StyledNavMenuItem } from "./NavMenuItem.style";
import { FunctionComponent } from "react";

export type NavMenuItemProps = {
  text: string;
};

export const NavMenuItem: FunctionComponent<NavMenuItemProps> = (
  props: NavMenuItemProps
) => {
  return (
    <StyledNavMenuItem href="/">{props.text.toUpperCase()}</StyledNavMenuItem>
  );
};
