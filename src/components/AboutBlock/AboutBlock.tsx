import { Container, HStack, VStack } from "@chakra-ui/react";
import { TextCard } from "../TextCard";
import { Image } from "@chakra-ui/next-js";
import { LinksStack } from "../LinksStack";
import { FunctionComponent } from "react";
import { StaticImageData } from "next/image";

export type AboutBlockProps = {
  img: StaticImageData;
  title: string;
  text: string;
  links: string[];
};

export const AboutBlock: FunctionComponent<AboutBlockProps> = (
  props: AboutBlockProps
) => {
  const { img, title, text, links } = props;
  return (
    <Container as={"section"} variant={"section"}>
      <HStack align={"center"} justify={"center"} gap={"8rem"}>
        <Image src={img.src} alt={img.src} width={520} height={782} />
        <VStack gap={"4rem"}>
          <TextCard
            title={title}
            text={text}
            cardProps={{
              maxWidth: "374px",
            }}
            titleProps={{
              as: "h2",
              fontSize: "7.25rem",
              fontWeight: "normal",
              lineHeight: "0.9",
              textAlign: "left",
            }}
            textProps={{
              fontSize: "1.0625rem",
              fontWeight: "light",
              lineHeight: "1.7",
              whiteSpace: "pre-line",
              textAlign: "left",
            }}
          />
          <LinksStack links={links} />
        </VStack>
      </HStack>
    </Container>
  );
};

/*
<Grid
        templateAreas={`"image text"
                      "image text"
                      "image links"`}
        templateColumns={"1fr 1fr"}
        templateRows={"auto"}
        placeItems="center"
        maxW={868}
        marginInline={"auto"}
      >
        <GridItem w="100%" h="100%" area={"image"} position="relative"> 
              {/* </GridItem>
        <GridItem w="70%" area={"text"} placeSelf="end center"> 
*/
