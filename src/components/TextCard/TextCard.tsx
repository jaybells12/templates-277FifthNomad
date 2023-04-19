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
  return (
    <VStack {...props.cardProps}>
      <Heading fontSize={"4rem"} fontWeight={"normal"} {...props.titleProps}>
        {props.title}
      </Heading>
      <Text
        fontSize={"1rem"}
        lineHeight={1.8}
        fontWeight={"light"}
        {...props.textProps}
      >
        {props.text}
      </Text>
      {props.children}
    </VStack>
  );
};
