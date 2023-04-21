import { useCarousel } from "@/lib/useCarousel";
import { TextBar } from "../TextBar";
import { motion, AnimatePresence } from "framer-motion";
import { FunctionComponent } from "react";
import { HStack, VStack, Circle } from "@chakra-ui/react";

export type SlideshowProps = {
  images: string[];
  text: string;
};

export const SlideshowBlock: FunctionComponent<SlideshowProps> = (
  props: SlideshowProps
) => {
  // Using a delay interval just slightly longer than animation duration
  // Because it seems to prevent a reverse animation anomaly
  // which appears to happen when rapidly advancing through the slides
  const { images, text } = props;
  const [index, , plusOne] = useCarousel(images.length, 800);
  return (
    <VStack overflowX="hidden">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.img
          key={images[index.current]}
          src={images[index.current]}
          style={{ height: "718px", width: "100%", margin: 0 }}
          onClick={plusOne}
          transition={{ duration: 0.75 }}
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100vw", opacity: 0 }}
        />
      </AnimatePresence>
      <VStack width={"100%"} transform={"translateY(-20%)"} zIndex={2}>
        <HStack>
          {images.map((image, idx) => (
            <Circle
              size="15px"
              bg={index.current === idx ? "white" : "gray"}
              key={idx}
            />
          ))}
        </HStack>
        <TextBar text={text} />
      </VStack>
    </VStack>
  );
};
