import { FunctionComponent } from "react";
import { Icon } from "@chakra-ui/react";
export const DownArrowIcon: FunctionComponent<any> = (props: any) => {
  return (
    <Icon viewBox="0 0 24 14" width={"12px"} height={"7px"} fill={"none"}>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M1 1L12 12L23 1"
        stroke="#535353"
        strokeWidth="1"
      />
    </Icon>
  );
};
