import { CarouselCard, CarouselCardProps } from "../CarouselCard";
import { FunctionComponent } from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
import { useCarousel } from "@/lib/useCarousel";
import { CarouselControls } from "../CarouselControls";
import { motion, AnimatePresence } from "framer-motion";

const carouselVariants = {
  active: {
    x: 200,
    opacity: 1,
    display: "inline-block",
    transition: {
      x: { duration: 1 },
      opacity: { duration: 1 },
    },
  },
  inactive: {
    opacity: 0,
    x: 1680,
    transition: {
      x: { duration: 1 },
      opacity: { delay: 0.5 },
    },
  },
  next: {
    x: 965,
    opacity: 1,
    display: "inline-block",
    transition: {
      x: { duration: 1 },
      opacity: { duration: 1 },
    },
  },
  prev: {
    x: -615,
    opacity: 0,
    display: "inline-block",
    transition: {
      x: { duration: 1 },
      opacity: { duration: 1 },
    },
  },
};

export type CarouselProps = {
  cards: CarouselCardProps[];
};

export const Carousel: FunctionComponent<CarouselProps> = (
  props: CarouselProps
) => {
  const [index, carouselLength, next, prev] = useCarousel(
    props.cards.length,
    1050
  );
  return (
    <Box position="relative" overflowY="visible" overflowX="clip">
      <CarouselControls
        nextFn={next}
        prevFn={prev}
        position="absolute"
        right={0}
        top={-10}
        zIndex={2}
      />
      <HStack position="relative" minW="100vw" maxWidth="1200px">
        <AnimatePresence initial={false} mode="sync">
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
                  ? "next"
                  : idx === index.next
                  ? "inactive"
                  : idx === index.prev
                  ? "active"
                  : "prev"
              }
            >
              <CarouselCard
                position="absolute"
                top={0}
                src={card.src}
                title={card.title}
                description={card.description}
                features={card.features}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </HStack>
    </Box>
  );
};
