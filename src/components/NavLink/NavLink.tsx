import { useScrollEasing } from "@/lib/useScrollEasing";
import { StyledNavLink } from "./NavLink.style";
import { FunctionComponent } from "react";

// Need to implement actual linking to website sections

export type NavLinkProps = {
  text: string;
};

export const NavLink: FunctionComponent<NavLinkProps> = (
  props: NavLinkProps
) => {
  const { text } = props;

  const handleScroll = useScrollEasing();

  return (
    <StyledNavLink href={`#${text}`} onClick={handleScroll}>
      {text.toUpperCase()}
    </StyledNavLink>
  );
};
