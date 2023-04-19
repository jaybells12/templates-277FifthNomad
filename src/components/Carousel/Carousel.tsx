import { CarouselCard, CarouselCardProps } from "../CarouselCard";
import { FunctionComponent } from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
import { useCarousel } from "@/lib/useCarousel";
import { CarouselControls } from "../CarouselControls";
import { motion, AnimatePresence } from "framer-motion";

const carouselVariants = {
  prev: {
    x: -550,
    opacity: 0,
    transition: {
      x: { duration: 1 },
      opacity: { duration: 1 },
    },
  },
  active: {
    x: 200,
    opacity: 1,
    transition: {
      x: { duration: 1 },
      opacity: { duration: 1 },
    },
  },
  next: {
    x: 950,
    opacity: 1,
    transition: {
      x: { duration: 1 },
      opacity: { duration: 1 },
    },
  },
  inactive: {
    x: 1700,
    opacity: 0,
    transition: {
      x: { duration: 1 },
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
        right={200}
        top={-100}
        zIndex={2}
      />
      <HStack position="relative" minW="100vw" maxWidth="1200px">
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
              src={card.src}
              title={card.title}
              description={card.description}
              features={card.features}
            />
          </motion.div>
        ))}
      </HStack>
    </Box>
  );
};
