import { TRIM_COLOR } from "@/styles/GlobalStyles";
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
  splitControls: boolean;
};

export const AmenitiesBlock: FunctionComponent<AmenitiesBlockProps> = (
  props: AmenitiesBlockProps
) => {
  const { cards, text, splitControls } = props;
  return (
    <Container
      as={"section"}
      minW={"full"}
      maxW={"unset"}
      bgColor={TRIM_COLOR}
      p={0}
    >
      <Heading
        as={"h2"}
        fontWeight={"normal"}
        fontSize={"7rem"}
        color={"white"}
        margin={"0 auto"}
        width={"max-content"}
        position="relative"
        transform={"translateY(25%)"}
        zIndex={1}
      >
        Amenities
      </Heading>
      <Carousel
        split={splitControls}
        cards={cards}
        cardProps={{ cardWth: 940, imgHgt: 484, imgWth: 794, gap: 0 }}
        flexProps={{
          alignItems: "center",
          textAlign: "center",
        }}
      />
      <TextBar text={text} />
    </Container>
  );
};
