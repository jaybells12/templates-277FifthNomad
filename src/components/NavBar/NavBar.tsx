import { NavLogo } from "../NavLogo";
import { NavLink } from "../NavLink";
import { NavMenu } from "../NavMenu";
import { StyledNavBar } from "./NavBar.style";
import { FunctionComponent } from "react";
import { useDisclosure, Text } from "@chakra-ui/react";
import sampleData from "@/data/sampleData";

const links = ["residences", "inquire"];

// Need Href prop for each link

export const NavBar: FunctionComponent<any> = (props: any) => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  return (
    <StyledNavBar position="relative" zIndex="2000">
      <NavLogo src={sampleData.NavLogo.src} />
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
      <NavMenu isOpen={isOpen} onToggle={onToggle} onClose={onClose} />
    </StyledNavBar>
  );
};
