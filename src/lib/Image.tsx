/*
  This factory function is used to combine Chakra-UI functionality with NextJS image optimization. 
  Need to verify if its actually working as intended
*/
import NextImage from "next/image";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { isValidMotionProp } from "framer-motion";

export const MotionImage = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      "width",
      "height",
      "fill",
      "src",
      "alt",
      "quality",
      "placeholder",
      "blurDataURL",
      "loader ",
    ].includes(prop),
});
