/*
Text Card
  Header
  Paragraph
Button
Carousel
  controls
  cards (how many displayed? at least 2)
    Image
    Title
    Para
    F&F
*/
import { TextCard, TextCardProps } from "../TextCard";
import { Button, Container } from "@chakra-ui/react";
import { Carousel } from "../Carousel";
import { FunctionComponent } from "react";
import { TRIM_COLOR, PRIMARY_COLOR } from "@/styles/GlobalStyles";
import { CarouselCardProps } from "../CarouselCard";

export type ResidencesBlockProps = {
  factSheet: string;
  cards: CarouselCardProps[];
  textCard: TextCardProps;
};

export const ResidencesBlock: FunctionComponent<ResidencesBlockProps> = (
  props: ResidencesBlockProps
) => {
  const { cards, factSheet, textCard } = props;
  return (
    <Container as="section" maxW={"full"} p={0}>
      <TextCard
        title={textCard.title}
        text={textCard.text}
        cardProps={{
          width: "460px",
          alignItems: "flex-start",
          ml: "12.5rem",
          mb: "3rem",
          gap: "1rem",
        }}
      >
        <Button
          as={"a"}
          href={factSheet}
          target={"_blank"}
          variant="outline"
          borderRadius={0}
          color={TRIM_COLOR}
          borderColor={TRIM_COLOR}
          fontWeight={"normal"}
          fontSize={"0.75rem"}
          letterSpacing={"2px"}
          px={"2rem"}
          transitionDuration={"0.3s"}
          _hover={{
            color: PRIMARY_COLOR,
            bgColor: TRIM_COLOR,
          }}
        >
          Fact Sheet
        </Button>
      </TextCard>
      <Carousel cards={cards} />
    </Container>
  );
};
