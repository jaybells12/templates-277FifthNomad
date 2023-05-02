import { FunctionComponent } from "react";
import { Box, Text, TextProps } from "@chakra-ui/react";

export type TextBarProps = {
  text: string;
} & TextProps;

export const TextBar: FunctionComponent<TextBarProps> = (
  props: TextBarProps
) => {
  const { text, ...rest } = props;
  return (
    <Box width={"100%"} bgColor={"brand.accent"}>
      <Text variant={"banner"} {...rest}>
        {text.toUpperCase()}
      </Text>
    </Box>
  );
};
