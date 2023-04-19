import { Grid, GridItem, Heading, VStack, Text } from "@chakra-ui/react";
import { TextCard } from "../TextCard";
import { Image } from "@chakra-ui/next-js";
import { LinksBlock } from "../LinksBlock";
import { FunctionComponent } from "react";

export type AboutBlockProps = {
  imageSrc: string;
  header: string;
  description: string;
  links: string[];
};

export const AboutBlock: FunctionComponent<AboutBlockProps> = (
  props: AboutBlockProps
) => {
  return (
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
        <Image
          fill
          src={props.imageSrc}
          alt={props.imageSrc}
          sx={{ objectFit: "contain" }}
        />
      </GridItem>
      <GridItem w="70%" area={"text"} placeSelf="end center">
        <TextCard
          title={props.header}
          text={props.description}
          titleProps={{
            as: "h3",
            size: "3xl",
            fontWeight: "normal",
            lineHeight: "85px",
          }}
          textProps={{
            fontWeight: "light",
            lineHeight: "1.8",
            whiteSpace: "pre-line",
          }}
        />
      </GridItem>
      <GridItem w="70%" area={"links"} marginTop={"3rem"}>
        <LinksBlock links={props.links} />
      </GridItem>
    </Grid>
  );
};
