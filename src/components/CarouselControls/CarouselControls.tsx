import {
  HStack,
  FlexboxProps,
  Circle,
  PositionProps,
  Box,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/next-js";
import { FunctionComponent } from "react";
import leftArrow from "../../../public/Arrow-Left.svg";
import rightArrow from "../../../public/Arrow-Right.svg";
import { PRIMARY_COLOR, TRIM_COLOR } from "@/styles/GlobalStyles";

// Color here is an approximation of an overlay which achieves similar results to the template
// This should allow for different background colors
const OVERLAY_COLOR = "#3063";
const STATIC_COLOR = "#DBCED5";

// Controls need to accept props to change positioning, coloring, and hover effects

const layout = {
  split: {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "95%",
    display: "flex",
    justifyContent: "space-between",
  },
  box: {
    position: "absolute",
    right: "200px",
    top: "-100px",
  },
};

export type CarouselControlProps = {
  nextFn: (args) => void;
  prevFn: (args) => void;
  split?: boolean;
} & FlexboxProps &
  PositionProps;

export const CarouselControls: FunctionComponent<CarouselControlProps> = (
  props: CarouselControlProps
) => {
  const { nextFn, prevFn, split, ...rest } = props;

  return (
    <HStack bgColor={"unset"} sx={split ? layout.split : layout.box} {...rest}>
      <Circle
        size="50px"
        position="relative"
        onClick={nextFn}
        border={"2px"}
        style={{ transition: "background-color 0.3s ease" }}
        _hover={{ bgColor: split ? STATIC_COLOR : OVERLAY_COLOR }}
        borderColor={split ? "white" : TRIM_COLOR}
      >
        <Image
          fill
          src={leftArrow}
          alt="left arrow"
          sx={
            split && {
              filter:
                "invert(100%) sepia(5%) saturate(22%) hue-rotate(215deg) brightness(107%) contrast(104%)",
            }
          }
        />
      </Circle>
      <Circle
        size="50px"
        position="relative"
        onClick={prevFn}
        border={"2px"}
        style={{ transition: "background-color 0.3s ease" }}
        _hover={{ bgColor: split ? STATIC_COLOR : OVERLAY_COLOR }}
        borderColor={split ? "white" : TRIM_COLOR}
      >
        <Image
          fill
          src={rightArrow}
          alt="right arrow"
          filter={"auto"}
          sx={
            split && {
              filter:
                "invert(100%) sepia(5%) saturate(22%) hue-rotate(215deg) brightness(107%) contrast(104%)",
            }
          }
        />
      </Circle>
    </HStack>
  );
};
