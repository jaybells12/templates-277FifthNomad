import { HStack, FlexboxProps, Circle, PositionProps } from "@chakra-ui/react";
import { Image } from "@chakra-ui/next-js";
import { FunctionComponent } from "react";
import leftArrow from "../../../public/Arrow-Left.svg";
import rightArrow from "../../../public/Arrow-Right.svg";
import { PRIMARY_COLOR, TRIM_COLOR } from "@/styles/GlobalStyles";

// Color here is an approximation of an overlay which achieves similar result
// This should allow for different background colors
const OVERLAY_COLOR = "#3063";

export type CarouselControlProps = {
  nextFn: (args) => void;
  prevFn: (args) => void;
} & FlexboxProps &
  PositionProps;

export const CarouselControls: FunctionComponent<CarouselControlProps> = (
  props: CarouselControlProps
) => {
  const { nextFn, prevFn, ...rest } = props;

  return (
    <HStack bgColor={PRIMARY_COLOR} {...rest}>
      <Circle
        size="50px"
        position="relative"
        _hover={{ bgColor: OVERLAY_COLOR }}
        border={"2px"}
        borderColor={TRIM_COLOR}
        onClick={nextFn}
        style={{ transition: "background-color 0.3s ease" }}
      >
        <Image fill src={leftArrow} alt="carousel left" />
      </Circle>
      <Circle
        size="50px"
        position="relative"
        _hover={{ bgColor: OVERLAY_COLOR }}
        border={"2px"}
        borderColor={TRIM_COLOR}
        onClick={prevFn}
        style={{ transition: "background-color 0.3s ease" }}
      >
        <Image fill src={rightArrow} alt="carousel right" />
      </Circle>
    </HStack>
  );
};
