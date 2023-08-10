import { FunctionComponent } from "react";
import { Icon, IconProps } from "@chakra-ui/react";

export const DownArrowIcon: FunctionComponent<IconProps> = (
  props: IconProps
) => {
  return (
    <Icon viewBox="0 0 24 14" width={"12px"} height={"7px"} fill={"none"}>
      <path d="M1 1L12 12L23 1" stroke="#535353" strokeWidth="1" />
    </Icon>
  );
};
