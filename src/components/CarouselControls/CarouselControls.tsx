import {
  Flex,
  FlexboxProps,
  Circle,
  PositionProps,
  useStyleConfig,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/next-js";
import { FunctionComponent } from "react";

// Custom Chakra Component, allows for variant theming
const Controls = (props: any) => {
  const { variant, ...rest } = props;
  const styles = useStyleConfig("Controls", { variant });
  return <Flex __css={styles} {...rest} />;
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
    <Controls
      variant={[null, null, split ? "split" : "whole"]}
      pointerEvents={"none"}
      {...rest}
    >
      <Circle
        size="50px"
        position="relative"
        onClick={prevFn}
        border={"2px"}
        style={{ transition: "background-color 0.3s ease" }}
        _hover={{ bgColor: split ? "carousel.static" : "carousel.overlay" }}
        borderColor={split ? "white" : "brand.trim"}
        cursor={"pointer"}
        pointerEvents={"auto"}
      >
        <Image
          fill
          src={"./Arrow-Left.svg"}
          alt="left arrow"
          sx={
            split && {
              filter:
                "brightness(0) saturate(100%) invert(100%) sepia(5%) saturate(22%) hue-rotate(215deg) brightness(107%) contrast(104%)",
            }
          }
        />
      </Circle>
      <Circle
        size="50px"
        position="relative"
        onClick={nextFn}
        border={"2px"}
        style={{ transition: "background-color 0.3s ease" }}
        _hover={{ bgColor: split ? "carousel.static" : "carousel.overlay" }}
        borderColor={split ? "white" : "brand.trim"}
        cursor={"pointer"}
        pointerEvents={"auto"}
      >
        <Image
          fill
          src={"./Arrow-Right.svg"}
          alt="right arrow"
          filter={"auto"}
          sx={
            split && {
              filter:
                "brightness(0) saturate(100%) invert(100%) sepia(5%) saturate(22%) hue-rotate(215deg) brightness(107%) contrast(104%)",
            }
          }
        />
      </Circle>
    </Controls>
  );
};
