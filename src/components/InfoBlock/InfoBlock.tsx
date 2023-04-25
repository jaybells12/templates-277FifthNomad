import { FunctionComponent } from "react";
import { TextCard } from "../TextCard";
import Image from "next/image";
import { Container, Box } from "@chakra-ui/react";

export const InfoBlock: FunctionComponent<any> = (props: any) => {
  const { title, text, topImg, botImg } = props;
  return (
    <Container
      as={"section"}
      maxW={"unset"}
      margin={"0 auto"}
      width={"fit-content"}
    >
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
      <Box display={"inline-block"}>
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
