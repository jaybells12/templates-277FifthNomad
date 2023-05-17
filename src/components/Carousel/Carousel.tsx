import { CarouselCard } from "../CarouselCard";
import { FunctionComponent, useRef } from "react";
import {
  Box,
  Flex,
  FlexboxProps,
  TextProps,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useCarousel } from "@/lib/useCarousel";
import { CarouselControls } from "../CarouselControls";
import { CirclesIndicator } from "../CirclesIndicator";
import { motion, PanInfo } from "framer-motion";

export type CarouselProps = {
  split: boolean;
  cards: {
    imgSrc: string;
    title: string;
    text: string;
    features?: string[];
  }[];
  cardProps: {
    cardWth: number;
    imgHgt: number;
    imgWth: number;
    gap: number;
  };
  flexProps?: FlexboxProps & TextProps;
};

/* Carousel Component comes in two variants via the "split" prop <boolean>:
 * False: Card components are animated as one unit; controls located in upper right corner as whole
 * True: Card components are animated as two units, Image and Text; controls split to the left and right edges respectively
 */

export const Carousel: FunctionComponent<CarouselProps> = (
  props: CarouselProps
) => {
  const { split, cards, cardProps, flexProps } = props;
  const mobile = useBreakpointValue({ base: true, md: false });
  const large = useBreakpointValue({ base: false, lg: true });
  const [index, direction, next, prev] = useCarousel(cards.length, 1050);
  const isAnimating = useRef(false);

  const handleDragEnd = (
    e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (!isAnimating.current) {
      isAnimating.current = true;
      info.offset.x > 0 ? prev() : next();
    }
  };

  return (
    <Box position="relative" marginLeft={!split && ["0", null, "11%", "15%"]}>
      {mobile && (
        <CirclesIndicator
          length={cards.length}
          index={index}
          variant={split ? "mobileLight" : "mobileDark"}
          position={"absolute"}
          insetInline={0}
          margin={"0 auto"}
          width={"fit-content"}
          height={"fit-content"}
          top={"250px"}
        />
      )}
      <CarouselControls nextFn={next} prevFn={prev} zIndex={2} split={split} />
      <Flex
        as={motion.div}
        drag={split ? (large ? "x" : null) : "x"}
        dragConstraints={{ left: -100, right: 100 }}
        //@ts-ignore -- onDragEnd is defaulting to React type instead of Framer Motion type
        onDragEnd={handleDragEnd}
        dragElastic={0.2}
        dragSnapToOrigin={true}
        position="relative"
        justifyContent={["center", null, (split && "center") || "flex-start"]}
        alignItems={"flex-start"}
        gap={`${cardProps.gap}rem`}
      >
        <CarouselCard
          img={{
            width: cardProps.imgWth,
            height: cardProps.imgHgt,
            src: cards[index.prev].imgSrc,
          }}
          card={{
            width: cardProps.cardWth,
            gap: cardProps.gap,
            position: -1,
            direction: direction,
          }}
          text={cards[index.prev].text}
          title={cards[index.prev].title}
          aniRef={isAnimating}
          features={cards[index.prev].features}
          dragFn={split ? handleDragEnd : null}
          split={split}
          padding={["1.5rem", null, "0"]}
          {...flexProps}
        />
        <CarouselCard
          img={{
            width: cardProps.imgWth,
            height: cardProps.imgHgt,
            src: cards[index.current].imgSrc,
          }}
          card={{
            width: cardProps.cardWth,
            gap: cardProps.gap,
            position: 0,
            direction: direction,
          }}
          text={cards[index.current].text}
          title={cards[index.current].title}
          aniRef={isAnimating}
          features={cards[index.current].features}
          dragFn={split ? handleDragEnd : null}
          split={split}
          padding={["1.5rem", null, "0"]}
          {...flexProps}
        />
        <CarouselCard
          img={{
            width: cardProps.imgWth,
            height: cardProps.imgHgt,
            src: cards[index.next].imgSrc,
          }}
          card={{
            width: cardProps.cardWth,
            gap: cardProps.gap,
            position: 1,
            direction: direction,
          }}
          text={cards[index.next].text}
          title={cards[index.next].title}
          aniRef={isAnimating}
          features={cards[index.next].features}
          dragFn={split ? handleDragEnd : null}
          split={split}
          padding={["1.5rem", null, "0"]}
          {...flexProps}
        />
      </Flex>
    </Box>
  );
};
