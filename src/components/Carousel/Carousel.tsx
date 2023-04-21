import { CarouselCard } from "../CarouselCard";
import { FunctionComponent } from "react";
import { Box, HStack, FlexboxProps, TextProps } from "@chakra-ui/react";
import { useCarousel } from "@/lib/useCarousel";
import { CarouselControls } from "../CarouselControls";
import { motion, AnimatePresence } from "framer-motion";

const carouselVariants = {
  enter: ({
    direction,
    width,
    gap,
  }: {
    direction: number;
    width: number;
    gap: number;
  }) =>
    direction > 0
      ? {
          x: "0px",
          transition: {
            type: "tween",
            duration: 1,
            ease: "easeOut",
            from: `${width + gap * 16}px`,
          },
        }
      : {
          x: "0px",
          transition: {
            type: "tween",
            duration: 1,
            ease: "easeOut",
            from: `-${width + gap * 16}px`,
          },
        },
  exitRight: ({
    direction,
    width,
    gap,
  }: {
    direction: number;
    width: number;
    gap: number;
  }) =>
    direction < 0
      ? {
          x: `${width + gap * 16}px`,
          opacity: 0,
          transition: {
            x: { from: 0, duration: 1, type: "tween", ease: "easeOut" },
            opacity: { from: 1, duration: 1, type: "tween", ease: "easeOut" },
          },
        }
      : {},
  exitLeft: ({
    direction,
    width,
    gap,
  }: {
    direction: number;
    width: number;
    gap: number;
  }) =>
    direction > 0
      ? {
          x: `-${width + gap * 16}px`,
          opacity: 0,
          transition: {
            x: { from: 0, duration: 1, type: "tween", ease: "easeOut" },
            opacity: { from: 1, duration: 1, type: "tween", ease: "easeOut" },
          },
        }
      : {},
};

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

export const Carousel: FunctionComponent<CarouselProps> = (
  props: CarouselProps
) => {
  const { split, cards, cardProps, flexProps } = props;
  const [index, direction, next, prev] = useCarousel(cards.length, 1050);

  return (
    <Box position="relative" overflowY="visible" overflowX="clip">
      <CarouselControls nextFn={next} prevFn={prev} zIndex={2} split={split} />
      <HStack
        position="relative"
        minW="100%"
        maxWidth="1200px"
        sx={split && { transform: "translateX(-20%)" }}
        gap={`${cardProps.gap}rem`}
      >
        {/*
         * Had to use an AnimatePresence component to wrap each motion.div
         * Was not able to figure out how to get the animations to work properly
         * with only one AnimatePresence. I think it has something to do with setting
         * the right "initial" options. Will come back later to play around with it.
         * Also, initial=false on AnimatePresence does not seem to be suppressing page
         * load animation, going to try setting initial values for motion.div elements ;
         */}
        <AnimatePresence
          custom={{ direction, width: cardProps.cardWth, gap: cardProps.gap }}
          mode={"popLayout"}
          initial={false}
        >
          <motion.div
            style={{ margin: 0 }}
            variants={carouselVariants}
            key={cards[index.prev].imgSrc}
            custom={{ direction, width: cardProps.cardWth, gap: cardProps.gap }}
            initial={"enter"}
            animate={"enter"}
            exit={"exitLeft"}
          >
            <CarouselCard
              cardWth={cardProps.cardWth}
              imgWth={cardProps.imgWth}
              imgHgt={cardProps.imgHgt}
              imgSrc={cards[index.prev].imgSrc}
              text={cards[index.prev].text}
              title={cards[index.prev].title}
              split={split}
              features={cards[index.prev].features}
              {...flexProps}
            />
          </motion.div>
        </AnimatePresence>
        <AnimatePresence
          custom={{ direction, width: cardProps.cardWth, gap: cardProps.gap }}
          mode={"popLayout"}
          initial={false}
        >
          <motion.div
            style={{ margin: 0 }}
            variants={carouselVariants}
            key={cards[index.current].imgSrc}
            custom={{ direction, width: cardProps.cardWth, gap: cardProps.gap }}
            initial={"enter"}
            animate={"enter"}
          >
            <CarouselCard
              cardWth={cardProps.cardWth}
              imgWth={cardProps.imgWth}
              imgHgt={cardProps.imgHgt}
              imgSrc={cards[index.current].imgSrc}
              text={cards[index.current].text}
              title={cards[index.current].title}
              split={split}
              features={cards[index.current].features}
              {...flexProps}
            />
          </motion.div>
        </AnimatePresence>
        <AnimatePresence
          custom={{ direction, width: cardProps.cardWth, gap: cardProps.gap }}
          mode={"popLayout"}
          initial={false}
        >
          <motion.div
            style={{ margin: 0 }}
            variants={carouselVariants}
            key={cards[index.next].imgSrc}
            custom={{ direction, width: cardProps.cardWth, gap: cardProps.gap }}
            initial={"enter"}
            animate={"enter"}
            exit={"exitRight"}
          >
            <CarouselCard
              cardWth={cardProps.cardWth}
              imgWth={cardProps.imgWth}
              imgHgt={cardProps.imgHgt}
              imgSrc={cards[index.next].imgSrc}
              text={cards[index.next].text}
              title={cards[index.next].title}
              split={split}
              features={cards[index.next].features}
              {...flexProps}
            />
          </motion.div>
        </AnimatePresence>
      </HStack>
    </Box>
  );
};
