/*
  This factory function is used to combine Chakra-UI functionality with NextJS image optimization. 
  Need to verify if its actually working as intended
*/
import NextImage from "next/image";
import { chakra } from "@chakra-ui/react";

export const Image = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      "width",
      "height",
      "src",
      "alt",
      "quality",
      "placeholder",
      "blurDataURL",
      "loader ",
    ].includes(prop),
});
