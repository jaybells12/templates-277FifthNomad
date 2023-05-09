import { CarouselCard } from "../CarouselCard";
import { FunctionComponent, useEffect } from "react";
import { Box, Flex, FlexboxProps, TextProps } from "@chakra-ui/react";
import { useCarousel } from "@/lib/useCarousel";
import { CarouselControls } from "../CarouselControls";

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

  return (
    <Box
      position="relative"
      marginLeft={!split && ["0", null, "11%", "15%"]}
      marginBottom={split && "2.5rem"}
    >
      <CarouselControls nextFn={next} prevFn={prev} zIndex={2} split={split} />
      <Flex
        position="relative"
        justifyContent={["center", null, (split && "center") || "flex-start"]}
        alignItems={"flex-start"}
        gap={`${cardProps.gap}rem`}
      >
        <CarouselCard
          cardWth={cardProps.cardWth}
          cardGap={cardProps.gap}
          imgWth={cardProps.imgWth}
          imgHgt={cardProps.imgHgt}
          imgSrc={cards[index.prev].imgSrc}
          text={cards[index.prev].text}
          title={cards[index.prev].title}
          features={cards[index.prev].features}
          cardPosition={-1}
          cardDirection={direction}
          circLength={cards.length}
          circIdx={index}
          split={split}
          padding={["1.5rem", null, "1px"]}
          {...flexProps}
        />
        <CarouselCard
          cardWth={cardProps.cardWth}
          cardGap={cardProps.gap}
          imgWth={cardProps.imgWth}
          imgHgt={cardProps.imgHgt}
          imgSrc={cards[index.current].imgSrc}
          text={cards[index.current].text}
          title={cards[index.current].title}
          features={cards[index.current].features}
          cardPosition={0}
          cardDirection={direction}
          circLength={cards.length}
          circIdx={index}
          split={split}
          {...flexProps}
        />
        <CarouselCard
          cardWth={cardProps.cardWth}
          cardGap={cardProps.gap}
          imgWth={cardProps.imgWth}
          imgHgt={cardProps.imgHgt}
          imgSrc={cards[index.next].imgSrc}
          text={cards[index.next].text}
          title={cards[index.next].title}
          features={cards[index.next].features}
          cardPosition={1}
          cardDirection={direction}
          circLength={cards.length}
          circIdx={index}
          split={split}
          {...flexProps}
        />
      </Flex>
    </Box>
  );
};
