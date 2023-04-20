import { CarouselCard, CarouselCardProps } from "../CarouselCard";
import { FunctionComponent } from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
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
  cards: CarouselCardProps[];
  cardProps: {
    cardWth: number;
    imgHgt: number;
    imgWth: number;
    gap: number | string;
  };
};

export const Carousel: FunctionComponent<CarouselProps> = (
  props: CarouselProps
) => {
  const { cards, cardProps } = props;
  const [index, direction, next, prev] = useCarousel(cards.length, 1050);

  return (
    <Box position="relative" overflowY="visible" overflowX="clip">
      <CarouselControls
        nextFn={next}
        prevFn={prev}
        position="absolute"
        right={200}
        top={-100}
        zIndex={2}
      />
      <HStack
        position="relative"
        minW="100vw"
        maxWidth="1200px"
        gap={`${cardProps.gap}rem`}
      >
        <AnimatePresence
          custom={{ direction, width: cardProps.cardWth, gap: cardProps.gap }}
          mode={"popLayout"}
        >
          <motion.div
            style={{ margin: 0 }}
            variants={carouselVariants}
            key={cards[index.prev].imgSrc}
            custom={{ direction, width: cardProps.cardWth, gap: cardProps.gap }}
            animate={"enter"}
            exit={"exitLeft"}
          >
            <CarouselCard
              cardWth={cardProps.cardWth}
              imgSrc={cards[index.prev].imgSrc}
              imgHgt={cardProps.imgHgt}
              imgWth={cardProps.imgWth}
              text={cards[index.prev].text}
              title={cards[index.prev].title}
              features={cards[index.prev].features}
            />
          </motion.div>
        </AnimatePresence>
        <AnimatePresence
          custom={{ direction, width: cardProps.cardWth, gap: cardProps.gap }}
          mode={"popLayout"}
        >
          <motion.div
            style={{ margin: 0 }}
            variants={carouselVariants}
            key={cards[index.current].imgSrc}
            custom={{ direction, width: cardProps.cardWth, gap: cardProps.gap }}
            animate={"enter"}
          >
            <CarouselCard
              cardWth={cardProps.cardWth}
              imgSrc={cards[index.current].imgSrc}
              imgHgt={cardProps.imgHgt}
              imgWth={cardProps.imgWth}
              text={cards[index.current].text}
              title={cards[index.current].title}
              features={cards[index.current].features}
            />
          </motion.div>
        </AnimatePresence>
        <AnimatePresence
          custom={{ direction, width: cardProps.cardWth, gap: cardProps.gap }}
          mode={"popLayout"}
        >
          <motion.div
            style={{ margin: 0 }}
            variants={carouselVariants}
            key={cards[index.next].imgSrc}
            custom={{ direction, width: cardProps.cardWth, gap: cardProps.gap }}
            animate={"enter"}
            exit={"exitRight"}
          >
            <CarouselCard
              cardWth={cardProps.cardWth}
              imgSrc={cards[index.next].imgSrc}
              imgHgt={cardProps.imgHgt}
              imgWth={cardProps.imgWth}
              text={cards[index.next].text}
              title={cards[index.next].title}
              features={cards[index.next].features}
            />
          </motion.div>
        </AnimatePresence>
      </HStack>
    </Box>
  );
};
/*
{props.cards.map((card, idx) => (
          <motion.div
            key={idx}
            variants={carouselVariants}
            initial={
              idx === index.current
                ? "active"
                : idx === index.next
                ? "next"
                : idx === index.prev
                ? "prev"
                : "inactive"
            }
            animate={
              idx === index.current
                ? "active"
                : idx === index.next
                ? "next"
                : idx === index.prev
                ? "prev"
                : "inactive"
            }
          >
            <CarouselCard
              position="absolute"
              top={0}
              //There is a slight offset along the horizontal axis, this fixes it, but I do not know whats causing it
              left={idx * -2}
              cardWth={600}
              imgSrc={card.imgSrc}
              imgWth={600}
              imgHgt={346}
              title={card.title}
              text={card.text}
              features={card.features}
            />
          </motion.div>
        ))}
*/
