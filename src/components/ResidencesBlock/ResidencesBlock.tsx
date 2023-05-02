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
        }}
        textProps={{
          fontSize: "1.0625rem",
          fontWeight: "light",
          lineHeight: "1.7",
          textAlign: "left",
        }}
        cardProps={{
          width: "572px",
          alignItems: "flex-start",
          ml: "22%",
          mb: "3rem",
          gap: "1rem",
        }}
      >
        <Button
          as={"a"}
          href={factSheet}
          target={"_blank"}
          lineHeight={"2.5"}
          height={"34px"}
          paddingInline={"1.4rem"}
        >
          FACT SHEET
        </Button>
      </TextCard>
      <Carousel
        cards={cards}
        split={splitVariant}
        //These values are to match template as is, could be rearranged to be dynamically input
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
