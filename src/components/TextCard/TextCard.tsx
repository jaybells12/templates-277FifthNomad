import {
  Text,
  Heading,
  VStack,
  TextProps,
  HeadingProps,
  FlexboxProps,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";

export type TextCardProps = {
  title: string;
  text: string;
  cardProps?: FlexboxProps;
  titleProps?: HeadingProps;
  textProps?: TextProps;
};

export const TextCard: FunctionComponent<TextCardProps> = (
  props: TextCardProps
) => {
  return (
    <VStack {...props.cardProps}>
      <Heading {...props.titleProps}>{props.title}</Heading>
      <Text {...props.textProps}>{props.text}</Text>
    </VStack>
  );
};
