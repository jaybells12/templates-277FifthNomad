import {
  Text,
  Heading,
  VStack,
  TextProps,
  HeadingProps,
  FlexboxProps,
  BoxProps,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";

export type TextCardProps = {
  title: string;
  text: string;
  cardProps?: FlexboxProps & BoxProps;
  titleProps?: HeadingProps;
  textProps?: TextProps;
  children?: JSX.Element;
};

export const TextCard: FunctionComponent<TextCardProps> = (
  props: TextCardProps
) => {
  const { title, text, cardProps, titleProps, textProps, children } = props;
  return (
    <VStack {...cardProps}>
      <Heading {...titleProps}>{title}</Heading>
      <Text {...textProps}>{text}</Text>
      {children}
    </VStack>
  );
};
