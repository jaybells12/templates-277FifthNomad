import { Link } from "@chakra-ui/next-js";
import { FunctionComponent } from "react";

export type NavMenuItemProps = {
  text: string;
  onClose: () => void;
};

export const NavMenuItem: FunctionComponent<NavMenuItemProps> = (
  props: NavMenuItemProps
) => {
  const { text, onClose } = props;

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    onClose();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Link
      href={`#${text}`}
      fontSize={"1.75rem"}
      lineHeight={"1.4"}
      letterSpacing={"2px"}
      fontWeight={"light"}
      _hover={{ textDecoration: "underline" }}
      _first={{ marginTop: "7rem" }}
      onClick={handleScroll}
    >
      {text.toUpperCase()}
    </Link>
  );
};

/*
font-size: 1.5rem;
  letter-spacing: 2px;
  &:hover {
    text-decoration: underline;
  }
  &:first-child {
    margin-top: 7rem;
  }
*/
