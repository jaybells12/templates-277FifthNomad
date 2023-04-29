import { FunctionComponent } from "react";
import { TextCard } from "../TextCard";
import Image from "next/image";
import { Container, Box } from "@chakra-ui/react";

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
      <TextCard
        title={title}
        text={text}
        cardProps={{
          display: "inline-flex",
          verticalAlign: "text-bottom",
          minW: "350px",
          maxW: "min-content",
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
    </Container>
  );
};
