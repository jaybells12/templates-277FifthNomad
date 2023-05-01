import { useCarousel } from "@/lib/useCarousel";
import { TextBar } from "../TextBar";
import {
  motion,
  AnimatePresence,
  useAnimation,
  PanInfo,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { FunctionComponent } from "react";
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
  const controls = useAnimation();
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-1000, 0, 1000], [0, 1, 0]);
  const zIndex = useTransform(x, (val) => (val > 0 ? 1 : 3));

  const handlePan = (event: any, info: PanInfo) => {
    console.log("Panning");
    x.set(info.offset.x);
    console.log(`X Offset: ${x.get()}`);
    console.log(`Opacity: ${opacity.get()}`);
    console.log(`zIndex: ${zIndex.get()}`);
  };

  const handlePanStart = (event: any, info: PanInfo) => {};

  const handlePanEnd = (event: any, info: PanInfo) => {
    // controls.start({ opacity: 0, transition: { duration: 1 } }).then(() => {
    //   console.log("Animation finished");
    //   console.log(`X value: ${x.get()}`);
    //   if (x.get() > 0) minusOne();
    //   if (x.get() < 0) plusOne();
    //   x.set(0);
    // });
    if (x.get() > 0) {
      minusOne();
      x.set(0);
    }
    if (x.get() < 0) {
      plusOne();
      x.set(0);
    }
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
