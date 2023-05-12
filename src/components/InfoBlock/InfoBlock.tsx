import { FunctionComponent, useRef, useEffect } from "react";
import { TextCard } from "../TextCard";
import { Image } from "@chakra-ui/next-js";
import { Container, Box, Flex } from "@chakra-ui/react";
import { useInView, animate } from "framer-motion";

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
  const containerRef = useRef();
  const isInView = useInView(containerRef, {
    once: true,
  });

  useEffect(() => {
    if (isInView) {
      animate(
        containerRef.current,
        { y: [400, 0] },
        { duration: 0.4, ease: "easeOut" }
      );
    }
  }, [isInView]);

  return (
    <Container
      ref={containerRef}
      transform={"translateY(400px)"}
      as={"section"}
      id={`${companyName}`}
      variant={"section"}
    >
      <Flex
        direction={["column", null, "row"]}
        justify={"center"}
        align={"center"}
        // Margin splits offset of images flex child, brings elements back to center
        // ^^ this might be a "spacing" prop issue with chakra Flex component
        marginLeft={[null, null, "1.25%"]}
        padding={[null, null, "2rem"]}
        gap={["2rem", null, "0.5rem"]}
      >
        <TextCard
          title={title}
          text={text}
          titleProps={{
            as: "h2",
            variant: "title",
          }}
          textProps={{
            fontSize: "clamp(0.875rem, 3vw, 1.0625rem)",
            fontWeight: "light",
            lineHeight: "1.7",
            textAlign: "center",
          }}
          cardProps={{
            minWidth: "312px",
            width: "40%",
            maxWidth: "381px",
          }}
        />
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
