import { useCarouselIndex } from "@/lib/useCarouselIndex";
import { TextBar } from "../TextBar";
import { motion, AnimatePresence } from "framer-motion";
import { FunctionComponent } from "react";
import { Box, HStack, VStack, Circle } from "@chakra-ui/react";
import { MotionImage } from "@/lib/Image";

export type SlideshowProps = {
  images: string[];
  tagline: string;
};

// Need little index indicator
// Images are not being normalized in their sizing

export const Slideshow: FunctionComponent<SlideshowProps> = (
  props: SlideshowProps
) => {
  // Using a delay interval just slightly longer than animation duration
  // Because it seems to prevent a reverse animation anomaly
  // which appears to happen when rapidly advancing through the slides
  const [index, , plusOne] = useCarouselIndex(props.images.length, 800);
  return (
    <VStack overflow="hidden">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.img
          key={props.images[index.current]}
          src={props.images[index.current]}
          style={{ height: "718px", width: "100%", margin: 0 }}
          onClick={plusOne}
          transition={{ duration: 0.75 }}
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100vw", opacity: 0 }}
        />
      </AnimatePresence>
      <VStack style={{ marginTop: "-23px", zIndex: 2 }}>
        <HStack>
          {props.images.map((image, idx) => (
            <Circle
              size="15px"
              bg={index.current === idx ? "white" : "gray"}
              key={idx}
            />
          ))}
        </HStack>
        <TextBar text={props.tagline} />
      </VStack>
    </VStack>
  );
};

/*
<motion.div
          key={props.images[index.current]}
          transition={{ duration: 1 }}
          initial={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100vw" }}
        >
          <StyledImage
            width={800}
            height={600}
            src={props.images[index.current]}
          />
        </motion.div>
        <motion.div
          key={props.images[index.next]}
          transition={{ duration: 1 }}
          initial={{ opacity: 0, x: "100vw" }}
          animate={{ opacity: 1, x: 0 }}
        >
          <StyledImage
            width={800}
            height={600}
            src={props.images[index.next]}
          />
*/
