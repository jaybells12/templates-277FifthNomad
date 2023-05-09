import { useCarousel } from "@/lib/useCarousel";
import { TextBar } from "../TextBar";
import { CirclesIndicator } from "../CirclesIndicator";
import {
  motion,
  useAnimation,
  PanInfo,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { FunctionComponent, useRef } from "react";
import { VStack, Container, Box, useBreakpointValue } from "@chakra-ui/react";
import { StaticImageData } from "next/image";

// How expensive is this component? Three images are layered over eachother to create the dragging opacity effect.
// Throttling needs to be tweaked. Not working as expected. Image flashing on rapid fire pan operation. May need to rethink
// implementation entirely.

export type SlideshowProps = {
  images: StaticImageData[];
  text: string;
};

export const SlideshowBlock: FunctionComponent<SlideshowProps> = (
  props: SlideshowProps
) => {
  const { images, text } = props;
  const [index, , plusOne, minusOne] = useCarousel(images.length, 500);
  const mobile = useBreakpointValue({ base: true, md: false });
  const disablePan = useRef(false);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-500, 0, 500], [0.5, 1, 0.5]);
  const zIndex = useTransform(x, (val) => (val > 0 ? 1 : 3));

  const handlePan = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (!disablePan.current) {
      x.set(info.offset.x);
    }
  };

  const handlePanEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (!disablePan.current) {
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
    }
  };

  return (
    <Container as={"section"} variant={"section"}>
      <VStack position={"relative"}>
        <Box
          overflow="clip"
          position={"relative"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"flex-end"}
          style={{
            aspectRatio: "3/2",
            width: "100%",
            height: "auto",
            overflow: "hidden",
          }}
        >
          <motion.img
            draggable={"false"}
            key={"left"}
            src={images[index.prev].src}
            style={{
              position: "absolute",
              objectFit: "cover",
              width: "100%",
              height: "100%",
              margin: 0,
              zIndex: 2,
            }}
          />
          <motion.img
            draggable={"false"}
            onPan={handlePan}
            onPanEnd={handlePanEnd}
            key={"center"}
            src={images[index.current].src}
            animate={controls}
            style={{
              opacity,
              objectFit: "cover",
              width: "100%",
              height: "100%",
              margin: 0,
              cursor: "grab",
              touchAction: "none",
              zIndex: 4,
            }}
          />
          <motion.img
            draggable={"false"}
            key={"right"}
            src={images[index.next].src}
            style={{
              position: "absolute",
              objectFit: "cover",
              width: "100%",
              height: "100%",
              margin: 0,
              zIndex,
            }}
          />
        </Box>
        <CirclesIndicator
          length={images.length}
          index={index}
          variant={mobile ? "mobileLight" : null}
          style={
            mobile
              ? { marginTop: "33px", marginBottom: "-47px" }
              : { marginTop: "-35px", marginBottom: "21px" }
          }
        />
        <TextBar text={text} paddingTop={mobile && "4rem"} />
      </VStack>
    </Container>
  );
};
