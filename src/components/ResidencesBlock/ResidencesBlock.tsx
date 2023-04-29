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
        cardProps={{
          width: "460px",
          alignItems: "flex-start",
          ml: "25%",
          mb: "3rem",
          gap: "1rem",
        }}
      >
        <Button as={"a"} href={factSheet} target={"_blank"}>
          FACT SHEET
        </Button>
      </TextCard>
      <Carousel
        cards={cards}
        split={splitVariant}
        //These values are to match template as is, could be rearranged to be dynamically input
        cardProps={{ cardWth: 600, imgWth: 600, imgHgt: 346, gap: 6 }}
      />
    </Container>
  );
};
