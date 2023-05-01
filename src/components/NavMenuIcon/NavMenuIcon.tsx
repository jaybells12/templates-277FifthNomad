import { StyledNavMenuIcon } from "./NavMenuIcon.style";
import { FunctionComponent } from "react";
import { forwardRef, IconProps } from "@chakra-ui/react";

//In order to use component as Chakra Menu button, need to implement and accept ref
export const NavMenuIcon: FunctionComponent<any> = forwardRef<IconProps, "svg">(
  (props: any, ref: any) => {
    return (
      <StyledNavMenuIcon
        ref={ref}
        viewBox="0 0 35 10"
        width="35px"
        height="10px"
        fill="rgb(59, 61, 71)"
        {...props}
      >
        <line
          x1="0"
          y1="1"
          x2="35"
          y2="1"
          stroke="rgb(59, 61, 71)"
          strokeWidth="1px"
          shapeRendering="crispEdges"
        />
        <line
          x1="0"
          y1="9"
          x2="35"
          y2="9"
          stroke="rgb(59, 61, 71)"
          strokeWidth="1px"
          shapeRendering="crispEdges"
        />
      </StyledNavMenuIcon>
    );
  }
);
