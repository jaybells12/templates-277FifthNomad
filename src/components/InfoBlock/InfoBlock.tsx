import { FunctionComponent } from "react";
import { TextCard } from "../TextCard";
import { Image } from "@chakra-ui/next-js";
import { Container, Box, Flex } from "@chakra-ui/react";

export type InfoBlockProps = {
  companyName: string;
  title: string;
  text: string;
  topImg: string;
  botImg: string;
};

export const InfoBlock: FunctionComponent<InfoBlockProps> = (
  props: InfoBlockProps
) => {
  const { title, text, topImg, botImg, companyName } = props;
  return (
    <Container as={"section"} id={`${companyName}`} variant={"section"}>
      <Flex
        direction={["column", null, "row"]}
        justify={"center"}
        align={"center"}
        gap={"6rem"}
        // marginLeft={"4rem"}
      >
        {/* Margin here to center*/}
        <TextCard
          title={title}
          text={text}
          titleProps={{
            as: "h2",
            variant: "title",
          }}
          textProps={{
            fontSize: "1.0625rem",
            fontWeight: "light",
            lineHeight: "1.7",
            textAlign: "center",
          }}
          cardProps={{
            maxWidth: "381px",
          }}
        />
        {/* width: 381px */}
        {/* height={"566px"} */}
        <Box whiteSpace={"nowrap"}>
          <Image
            src={topImg}
            width={319}
            height={424}
            alt={"Top of overlapped images"}
            sx={{
              display: "inline-block",
              objectFit: "cover",
              width: "clamp(150px, 25vw, 330px)",
              height: "auto",
              marginBottom: "20%",
              position: "relative",
              right: "-5%",
              zIndex: "2",
            }}
          />
          <Image
            src={botImg}
            width={319}
            height={424}
            alt={"Bottom of overlapped images"}
            sx={{
              display: "inline-block",
              objectFit: "cover",
              width: "clamp(150px, 25vw, 330px)",
              height: "auto",
              marginTop: "20%",
              position: "relative",
              left: "-5%",
              zIndex: "1",
            }}
          />
        </Box>
      </Flex>
    </Container>
  );
};
