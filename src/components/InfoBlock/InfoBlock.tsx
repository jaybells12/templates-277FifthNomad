import { FunctionComponent } from "react";
import { TextCard } from "../TextCard";
import Image from "next/image";
import { Container, Box, HStack } from "@chakra-ui/react";

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
      <HStack
        justify={"center"}
        align={"center"}
        gap={"6rem"}
        marginLeft={"4rem"}
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
            width: "381px",
          }}
        />
        <Box display={"inline-block"} height={"566px"}>
          <Image
            src={topImg}
            width={319}
            height={424}
            alt={"Top of overlapped images"}
            style={{
              display: "inline-block",
              position: "relative",
              zIndex: 2,
            }}
          />
          <Image
            src={botImg}
            width={319}
            height={424}
            alt={"Bottom of overlapped images"}
            style={{
              display: "inline-block",
              position: "relative",
              top: "142px",
              left: "-70px",
              zIndex: 1,
            }}
          />
        </Box>
      </HStack>
    </Container>
  );
};
