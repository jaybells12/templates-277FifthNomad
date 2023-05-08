import { FunctionComponent, LegacyRef, MutableRefObject } from "react";
import { forwardRef, Icon, IconProps } from "@chakra-ui/react";

//In order to use component as Chakra Menu button, need to implement and accept ref
export const NavMenuIcon: FunctionComponent<IconProps> = forwardRef<
  IconProps,
  "svg"
>((props: IconProps, ref: LegacyRef<SVGSVGElement>) => {
  return (
    <Icon ref={ref} viewBox="0 0 35 10" width="35px" height="10px" {...props}>
      <line
        x1="0"
        y1="1"
        x2="35"
        y2="1"
        strokeWidth="1px"
        shapeRendering="crispEdges"
      />
      <line
        x1="0"
        y1="9"
        x2="35"
        y2="9"
        strokeWidth="1px"
        shapeRendering="crispEdges"
      />
    </Icon>
  );
});

/*
margin-right: 3rem;
  &:hover {
    cursor: pointer;
  }
*/
