import { TextCard, TextCardProps } from "../TextCard";
import { Button, Container } from "@chakra-ui/react";
import { Carousel } from "../Carousel";
import { FunctionComponent } from "react";

export type ResidencesBlockProps = {
  factSheet: string;
  textCard: TextCardProps;
  splitVariant: boolean;
  cards: {
    imgSrc: string;
    title: string;
    text: string;
    features?: string[];
  }[];
};

export const ResidencesBlock: FunctionComponent<ResidencesBlockProps> = (
  props: ResidencesBlockProps
) => {
  const { cards, factSheet, textCard, splitVariant } = props;
  return (
    <Container
      as={"section"}
      id={"residences"}
      variant={"section"}
      overflowY={"visible"}
      overflowX={"clip"}
    >
      <TextCard
        title={textCard.title}
        text={textCard.text}
        titleProps={{
          as: "h2",
          variant: "title",
          lineHeight: "0.5",
        }}
        textProps={{
          fontSize: "clamp(0.875rem, 3vw, 1.0625rem)",
          fontWeight: "light",
          lineHeight: "1.7",
          textAlign: ["center", "left"],
        }}
        cardProps={{
          alignItems: ["center", "flex-start"],
          paddingInline: ["1.55rem", "1.55rem", "0"],
          // ml: "22%",
          mb: "3rem",
          gap: "1rem",
        }}
      >
        <Button
          as={"a"}
          href={factSheet}
          target={"_blank"}
          lineHeight={"2.5"}
          height={"40px"}
          paddingInline={"2.5rem"}
        >
          FACT SHEET
        </Button>
      </TextCard>
      <Carousel
        cards={cards}
        split={splitVariant}
        cardProps={{
          cardWth: 600,
          imgWth: 600,
          imgHgt: 346,
          gap: 9,
        }}
      />
    </Container>
  );
};
