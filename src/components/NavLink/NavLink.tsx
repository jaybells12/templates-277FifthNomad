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

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    window.scrollTo();
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <StyledNavLink href={`#${text}`} onClick={handleScroll}>
      {text.toUpperCase()}
    </StyledNavLink>
  );
};
