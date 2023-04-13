import { NavMenuIcon } from "../NavMenuIcon";
import { NavMenuItem } from "../NavMenuItem";
import { StyledNavMenu } from "./NavMenu.style";
import {
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { PRIMARY_COLOR } from "@/styles/GlobalStyles";

const items = [
  "residences",
  "amenities",
  "nomad", // Company name here?
  "availability",
  "inquire",
];

export type NavMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  onToggle: () => void;
};

export const NavMenu: FunctionComponent<NavMenuProps> = (
  props: NavMenuProps
) => {
  return (
    <>
      <NavMenuIcon
        onClick={() => {
          console.log(props.isOpen);
          props.onToggle();
        }}
      />
      <StyledNavMenu
        isOpen={props.isOpen}
        placement="top"
        onClose={props.onClose}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody
            display="flex"
            gap="3rem"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            bgColor={PRIMARY_COLOR}
          >
            {items.map((item, idx) => (
              <NavMenuItem key={idx} text={item} />
            ))}
          </DrawerBody>
        </DrawerContent>
      </StyledNavMenu>
    </>
  );
};

// <StyledNavMenu>
//   <MenuButton as={NavMenuIcon} />
//   {/*(Try Drawer) Need to figure out how to get this to take up entire window, and disable scrolling (overflow)*/}
//   <MenuList minH="full" minW="full">
//     {items.map((item, idx) => (
//       <NavMenuItem key={idx} text={item} />
//     ))}
//   </MenuList>
// </StyledNavMenu>
// @ts-ignore
