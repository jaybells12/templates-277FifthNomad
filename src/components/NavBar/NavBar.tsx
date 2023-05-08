import { NavLogo } from "../NavLogo";
import { NavLink } from "../NavLink";
import { NavMenu } from "../NavMenu";
import { FunctionComponent } from "react";
import {
  useDisclosure,
  Text,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { StaticImageData } from "next/image";

// Need Href prop for each link
export type NavBarProps = {
  links: string[];
  menuLinks: string[];
  logo: StaticImageData;
  scrolled: boolean;
};

export const NavBar: FunctionComponent<NavBarProps> = (props: NavBarProps) => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const mobile = useBreakpointValue({ base: true, md: false });
  const { links, menuLinks, logo, scrolled } = props;

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
      <NavLogo
        src={logo.src}
        alt={"Navigation bar logo"}
        width={logo.width}
        height={logo.height}
        marginLeft={"1rem"}
        marginRight={"auto"}
        sx={
          mobile && {
            width: "126px",
            height: "30px",
          }
        }
      />
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
      ) : mobile ? (
        <NavLink text={links[links.length - 1]} marginRight={"1rem"} />
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
