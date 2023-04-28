import { FunctionComponent } from "react";
import { Box, Text } from "@chakra-ui/react";

export type TextBarProps = {
  text: string;
};

export const TextBar: FunctionComponent<TextBarProps> = (
  props: TextBarProps
) => {
  const { text } = props;
  return (
    <Box width={"100%"} bgColor={"brand.accent"}>
      <Text
        color={"white"}
        fontSize={"1.125rem"}
        padding={"3rem 11rem"}
        maxWidth={"72%"}
        margin={"0 auto"}
        lineHeight={"1.4"}
        letterSpacing={"2.7px"}
        opacity={"0.6"}
      >
        {text.toUpperCase()}
      </Text>
    </Box>
  );
};
