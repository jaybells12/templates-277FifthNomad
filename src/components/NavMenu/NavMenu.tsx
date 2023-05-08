import { NavMenuIcon } from "../NavMenuIcon";
import { NavMenuItem } from "../NavMenuItem";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";

export type NavMenuProps = {
  items: string[];
  isOpen: boolean;
  onClose: () => void;
  onToggle: () => void;
};

export const NavMenu: FunctionComponent<NavMenuProps> = (
  props: NavMenuProps
) => {
  const { items, onToggle, onClose, isOpen } = props;

  return (
    <>
      <NavMenuIcon
        onClick={() => {
          onToggle();
        }}
      />
      <Drawer isOpen={isOpen} placement={"top"} onClose={onClose} size={"full"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody
            display={"flex"}
            gap={"3rem"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
            bgColor={"brand.primary"}
          >
            {items.map((item, idx) => (
              <NavMenuItem key={idx} text={item} onClose={onClose} />
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
