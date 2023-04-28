import { FunctionComponent } from "react";
import { Image, ImageProps } from "@chakra-ui/next-js";
import { PositionProps } from "@chakra-ui/react";

export type LogoProps = {
  src: string;
} & PositionProps &
  ImageProps;

export const Logo: FunctionComponent<LogoProps> = (props: LogoProps) => {
  const { src, alt, ...rest } = props;
  return <Image src={src} alt={alt} {...rest} />;
};
