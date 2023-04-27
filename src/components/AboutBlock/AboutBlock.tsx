import { Container, Grid, GridItem } from "@chakra-ui/react";
import { TextCard } from "../TextCard";
import { Image } from "@chakra-ui/next-js";
import { LinksStack } from "../LinksStack";
import { FunctionComponent } from "react";

export type AboutBlockProps = {
  imgSrc: string;
  title: string;
  text: string;
  links: string[];
};

/*
 * Need to rebuild this component as a flex component. Pic | text (links on bottom)
 */

export const AboutBlock: FunctionComponent<AboutBlockProps> = (
  props: AboutBlockProps
) => {
  const { imgSrc, title, text, links } = props;
  return (
    <Container as={"section"} variant={"section"}>
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
          <Image fill src={imgSrc} alt={imgSrc} sx={{ objectFit: "contain" }} />
        </GridItem>
        <GridItem w="70%" area={"text"} placeSelf="end center">
          <TextCard
            title={title}
            text={text}
            titleProps={{
              as: "h3",
              fontSize: "7.25rem",
              fontWeight: "normal",
              lineHeight: "0.9",
              textAlign: "left",
            }}
            textProps={{
              fontWeight: "light",
              lineHeight: "1.8",
              whiteSpace: "pre-line",
              textAlign: "left",
            }}
          />
        </GridItem>
        <GridItem w="70%" area={"links"} marginTop={"3rem"}>
          <LinksStack links={links} />
        </GridItem>
      </Grid>
    </Container>
  );
};
