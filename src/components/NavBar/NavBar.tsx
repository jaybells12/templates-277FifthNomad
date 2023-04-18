import { NavLogo } from "../NavLogo";
import { NavLink } from "../NavLink";
import { NavMenu } from "../NavMenu";
import { StyledNavBar } from "./NavBar.style";
import { FunctionComponent } from "react";
import { useDisclosure, Text } from "@chakra-ui/react";

// Need Href prop for each link
export type NavBarProps = {
  links: string[];
  logoSrc: string;
};

export const NavBar: FunctionComponent<NavBarProps> = (props: NavBarProps) => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  return (
    <StyledNavBar position="relative" zIndex="2000">
      <NavLogo src={props.logoSrc} />
      {isOpen ? (
        <Text
          onClick={onClose}
          cursor="pointer"
          fontSize="0.7rem"
          letterSpacing="2px"
          mr="1rem"
        >
          CLOSE
        </Text>
      ) : (
        props.links.map((link, idx) => <NavLink key={idx} text={link} />)
      )}
      <NavMenu isOpen={isOpen} onToggle={onToggle} onClose={onClose} />
    </StyledNavBar>
  );
};
