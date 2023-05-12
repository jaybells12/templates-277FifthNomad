import { Carousel } from "../Carousel";
import { TextBar } from "../TextBar";
import { Container, Heading } from "@chakra-ui/react";
import { FunctionComponent, useRef, useEffect } from "react";
import { useInView, animate } from "framer-motion";

export type AmenitiesBlockProps = {
  cards: {
    imgSrc: string;
    title: string;
    text: string;
  }[];
  text: string;
  split: boolean;
};

export const AmenitiesBlock: FunctionComponent<AmenitiesBlockProps> = (
  props: AmenitiesBlockProps
) => {
  const { cards, text, split } = props;
  const containerRef = useRef();
  const isInView = useInView(containerRef, {
    once: true,
  });

  useEffect(() => {
    if (isInView) {
      animate(
        containerRef.current,
        { y: [400, 0] },
        { duration: 0.4, ease: "easeOut" }
      );
    }
  }, [isInView]);
  return (
    <Container
      ref={containerRef}
      transform={"translateY(400px)"}
      as={"section"}
      id={"amenities"}
      variant={"section"}
      bgColor={"brand.trim"}
      overflowY={"visible"}
      overflowX={"clip"}
      paddingTop={"3rem"}
    >
      <Heading
        as={"h2"}
        variant={"title"}
        color={"white"}
        margin={"0 auto"}
        width={"max-content"}
        position="relative"
        transform={"translateY(36%)"}
        zIndex={1}
      >
        Amenities
      </Heading>
      <Carousel
        split={split}
        cards={cards}
        cardProps={{ cardWth: 940, imgHgt: 484, imgWth: 794, gap: 8 }}
        flexProps={{
          justifyContent: "flex-start",
          alignItems: "center",
          textAlign: "center",
        }}
      />
      <TextBar text={text} variant={"banner"} />
    </Container>
  );
};
