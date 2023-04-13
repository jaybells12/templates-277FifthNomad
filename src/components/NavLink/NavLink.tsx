import { StyledNavLink } from "./NavLink.style";
import { FunctionComponent } from "react";

// Need to implement actual linking to website sections

export type NavLinkProps = {
  text: string;
};

export const NavLink: FunctionComponent<NavLinkProps> = (
  props: NavLinkProps
) => {
  return <StyledNavLink href="/#">{props.text.toUpperCase()}</StyledNavLink>;
};
