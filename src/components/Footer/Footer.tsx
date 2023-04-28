import { FunctionComponent } from "react";
import { Link } from "@chakra-ui/next-js";
import { Container, HStack, Text, VStack } from "@chakra-ui/react";
import { HouseIcon } from "../HouseIcon";
import { Logo } from "../Logo";
export type FooterProps = {
  text: string;
  logos: any[]; // Array of SVGs
  pdf?: string; // Optional Fair Housing Info
};

export const Footer: FunctionComponent<FooterProps> = (props: FooterProps) => {
  const { text, logos, pdf } = props;
  return (
    <Container as={"footer"} variant={"section"} marginBottom={"12rem"}>
      <VStack width={"70%"} margin={"0 auto"} gap={"2rem"}>
        <HStack width={"100%"}>
          <HouseIcon />
          <Text variant={"footer"}>
            {text}
            {pdf && (
              <Link
                href={pdf}
                target={"_blank"}
                textDecoration={"underline"}
                paddingLeft={"3gipx"}
              >
                Fair Housing Notice
              </Link>
            )}
          </Text>
        </HStack>
        <HStack width={"100%"} justifyContent={"space-between"}>
          {logos.map((logo, idx) => (
            <Logo
              src={logo.src}
              alt={"footer logo"}
              width={logo.width}
              height={logo.height}
            />
          ))}
        </HStack>
      </VStack>
    </Container>
  );
};
