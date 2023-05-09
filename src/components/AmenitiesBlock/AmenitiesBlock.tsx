import { Carousel } from "../Carousel";
import { TextBar } from "../TextBar";
import { Container, Heading } from "@chakra-ui/react";
import { FunctionComponent } from "react";

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
  return (
    <Container
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
