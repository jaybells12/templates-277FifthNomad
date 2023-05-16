import { Container, Flex, Box, useBreakpointValue } from "@chakra-ui/react";
import { TextCard } from "../TextCard";
import { Image } from "@chakra-ui/next-js";
import { LinksStack } from "../LinksStack";
import { FunctionComponent, useEffect, useRef } from "react";
import { StaticImageData } from "next/image";
import { useInView, animate } from "framer-motion";

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
  const mobile = useBreakpointValue({ base: true, md: false });
  const containerRef = useRef();
  const isInView = useInView(containerRef, {
    once: true,
  });

  useEffect(() => {
    if (isInView) {
      animate(
        containerRef.current,
        { y: [400, 0] },
        { duration: 0.7, ease: "easeOut" }
      );
    }
  }, [isInView]);

  return (
    <Container
      ref={containerRef}
      as={"section"}
      variant={"section"}
      padding={"1.5rem"}
      transform={"translateY(400px)"}
    >
      <Flex
        align={"center"}
        justify={"center"}
        direction={["column", null, "row"]}
        gap={["3rem", null, "1rem", "3rem", "8rem"]}
      >
        <Box order={!mobile && "1"} flexShrink={1}>
          <TextCard
            title={title}
            text={text}
            cardProps={{
              maxWidth: "385px",
              gap: ["1rem", null, "0"],
            }}
            titleProps={{
              as: "h2",
              variant: "title",
              textAlign: ["center", null, "left"],
            }}
            textProps={{
              fontSize: "clamp(0.875rem, 3vw, 1.0625rem)",
              fontWeight: "light",
              lineHeight: "1.7",
              whiteSpace: "break-spaces",
              textAlign: ["center", null, "left"],
            }}
          />
          {!mobile && <LinksStack links={links} marginTop={"4rem"} />}
        </Box>
        {mobile && <LinksStack links={links} />}
        <Image
          src={img.src}
          alt={img.src}
          width={520}
          height={782}
          flexShrink={10}
          paddingInline={["2rem", null, 0]}
          sx={{
            objectFit: "contain",
            width: "100%",
            height: "100%",
            maxWidth: "520px",
          }}
        />
      </Flex>
    </Container>
  );
};
