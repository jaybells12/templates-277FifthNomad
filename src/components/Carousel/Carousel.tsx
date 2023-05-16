import { CarouselCard } from "../CarouselCard";
import { FunctionComponent, useEffect } from "react";
import { Box, Flex, FlexboxProps, TextProps } from "@chakra-ui/react";
import { useCarousel } from "@/lib/useCarousel";
import { CarouselControls } from "../CarouselControls";
import { motion, PanInfo, DragHandlers } from "framer-motion";

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
  const [index, direction, next, prev] = useCarousel(cards.length, 1050);

  const handleDragEnd = (
    e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    info.offset.x > 0 ? prev() : next();
    console.log(info.offset.x);
  };

  return (
    <Box
      position="relative"
      marginLeft={!split && ["0", null, "11%", "15%"]}
      marginBottom={split && "2.5rem"}
    >
      <CarouselControls nextFn={next} prevFn={prev} zIndex={2} split={split} />
      <Flex
        as={motion.div}
        drag={"x"}
        dragConstraints={{ left: -100, right: 100 }}
        //@ts-ignore -- using "as" prop isn't properly forwarding the "onDragEnd" prop
        onDragEnd={handleDragEnd}
        dragSnapToOrigin={true}
        dragElastic={0.2}
        dragMomentum={false}
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
          features={cards[index.prev].features}
          circLength={cards.length}
          circIdx={index}
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
          features={cards[index.current].features}
          circLength={cards.length}
          circIdx={index}
          split={split}
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
          features={cards[index.next].features}
          circLength={cards.length}
          circIdx={index}
          split={split}
          {...flexProps}
        />
      </Flex>
    </Box>
  );
};
