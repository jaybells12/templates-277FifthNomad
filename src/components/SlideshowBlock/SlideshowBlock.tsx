import { useCarousel } from "@/lib/useCarousel";
import { TextBar } from "../TextBar";
import {
  motion,
  useAnimation,
  PanInfo,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { FunctionComponent, useRef } from "react";
import { HStack, VStack, Circle, Container } from "@chakra-ui/react";
import { StaticImageData } from "next/image";

// How expensive is this component? Three images are layered over eachother to create the dragging opacity effect.

export type SlideshowProps = {
  images: StaticImageData[];
  text: string;
};

export const SlideshowBlock: FunctionComponent<SlideshowProps> = (
  props: SlideshowProps
) => {
  const { images, text } = props;
  const [index, , plusOne, minusOne] = useCarousel(images.length, 800);
  const disablePan = useRef(false);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-500, 0, 500], [0.5, 1, 0.5]);
  const zIndex = useTransform(x, (val) => (val > 0 ? 1 : 3));

  const handlePan = (event: any, info: PanInfo) => {
    if (!disablePan.current) {
      x.set(info.offset.x);
    }
  };

  const handlePanStart = (event: any, info: PanInfo) => {};

  const handlePanEnd = (event: any, info: PanInfo) => {
    disablePan.current = true;
    controls.start({ opacity: 0, transition: { duration: 0.5 } }).then(() => {
      if (x.get() > 0) {
        minusOne();
        x.set(0);
      } else if (x.get() < 0) {
        plusOne();
        x.set(0);
      }
      disablePan.current = false;
    });
  };
  return (
    <Container as={"section"} variant={"section"}>
      <VStack overflowX="hidden" position={"relative"}>
        {/* <AnimatePresence > */}
        <motion.img
          draggable={"false"}
          custom={-1}
          key={"left"}
          src={images[index.prev].src}
          style={{
            objectFit: "cover",
            position: "absolute",
            width: "100%",
            height: "718px",
            margin: 0,
            zIndex: 2,
          }}
        />
        <motion.img
          draggable={"false"}
          onPan={handlePan}
          onPanStart={handlePanStart}
          onPanEnd={handlePanEnd}
          key={"center"}
          src={images[index.current].src}
          animate={controls}
          style={{
            zIndex: 4,
            opacity,
            cursor: "grab",
            objectFit: "cover",
            height: "718px",
            width: "100%",
            margin: 0,
            touchAction: "none",
          }}
        />
        <motion.img
          draggable={"false"}
          custom={1}
          key={"right"}
          src={images[index.next].src}
          style={{
            objectFit: "cover",
            position: "absolute",
            width: "100%",
            height: "718px",
            margin: 0,
            zIndex,
          }}
        />
        {/* </AnimatePresence> */}
        <HStack
          gap={"0.75rem"}
          zIndex={"5"}
          style={{ marginTop: "-35px", marginBottom: "21px" }}
        >
          {images.map((image, idx) => (
            <Circle
              size="6px"
              bg={index.current === idx ? "white" : "brand.accent"}
              key={idx}
            />
          ))}
        </HStack>
        <TextBar text={text} />
      </VStack>
    </Container>
  );
};
