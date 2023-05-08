import { useScrollEasing } from "@/lib/useScrollEasing";
import { Link, LinkProps } from "@chakra-ui/next-js";
import { FunctionComponent } from "react";

// Need to implement actual linking to website sections

export type NavLinkProps = {
  text: string;
} & Partial<LinkProps>;

export const NavLink: FunctionComponent<NavLinkProps> = (
  props: NavLinkProps
) => {
  const { text, ...rest } = props;

  const handleScroll = useScrollEasing();

  return (
    <Link href={`#${text}`} onClick={handleScroll} variant={"nav"} {...rest}>
      {text.toUpperCase()}
    </Link>
  );
};
