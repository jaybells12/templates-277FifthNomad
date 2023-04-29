import { NavLogo } from "../NavLogo";
import { NavLink } from "../NavLink";
import { NavMenu } from "../NavMenu";
import { FunctionComponent } from "react";
import { useDisclosure, Text, Flex } from "@chakra-ui/react";

// Need Href prop for each link
export type NavBarProps = {
  links: string[];
  menuLinks: string[];
  logoSrc: string;
  scrolled: boolean;
};

export const NavBar: FunctionComponent<NavBarProps> = (props: NavBarProps) => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const { links, menuLinks, logoSrc, scrolled } = props;

  return (
    <Flex
      as={"nav"}
      height={"64px"}
      width={"100%"}
      bgColor={"brand.primary"}
      alignItems={"center"}
      position={"fixed"}
      top={"0"}
      zIndex={"2000"}
      display={scrolled ? "flex" : "none"}
    >
      <NavLogo src={logoSrc} />
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
        links.map((link, idx) => <NavLink key={idx} text={link} />)
      )}
      <NavMenu
        items={menuLinks}
        isOpen={isOpen}
        onToggle={onToggle}
        onClose={onClose}
      />
    </Flex>
  );
};
