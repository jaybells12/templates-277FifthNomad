import { Container, Flex, VStack, Box } from "@chakra-ui/react";
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
      <Flex
        align={"center"}
        justify={"center"}
        direction={["column", , "row"]}
        gap={["3rem"]}
      >
        <TextCard
          title={title}
          text={text}
          cardProps={{
            maxWidth: "385px",
            gap: ["1rem", "0"],
          }}
          titleProps={{
            as: "h2",
            variant: "title",
            textAlign: ["center", "center", "left"],
          }}
          textProps={{
            fontSize: "clamp(0.875rem, 3vw, 1.0625rem)",
            fontWeight: "light",
            lineHeight: "1.7",
            whiteSpace: "break-spaces",
            textAlign: ["center", "left"],
          }}
        />
        <LinksStack links={links} />
        <Image
          src={img.src}
          alt={img.src}
          width={520}
          height={782}
          paddingInline={["4rem", "4rem", 0]}
          sx={{
            objectFit: "contain",
            width: "100%",
            height: "100%",
          }}
        />
      </Flex>
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
