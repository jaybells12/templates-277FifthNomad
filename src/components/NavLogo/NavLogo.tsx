import { Image, ImageProps } from "@chakra-ui/next-js";
import { resolveTxt } from "dns";
import { FunctionComponent } from "react";

export type NavLogoProps = {
  src: string;
  alt?: string;
  width: number;
  height: number;
} & ImageProps;

export const NavLogo: FunctionComponent<NavLogoProps> = (
  props: NavLogoProps
) => {
  const { src, alt, width, height, ...rest } = props;
  return <Image src={src} alt={alt} width={width} height={height} {...rest} />;
};
