import { StyledNavLogo } from "./NavLogo.style";
import { FunctionComponent } from "react";

export type NavLogoProps = {
  src: string;
};

export const NavLogo: FunctionComponent<NavLogoProps> = (
  props: NavLogoProps
) => {
  return <StyledNavLogo src={props.src} />;
};
