import { radioAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys);

const baseStyle = definePartsStyle({
  control: {
    borderWidth: "2px",
    borderColor: "brand.trim",
    _checked: {
      borderWidth: "2px",
      borderColor: "brand.trim",
      background: "brand.trim",
      color: "brand.trim",
      _hover: {
        borderColor: "brand.trim",
        background: "brand.trim",
      },
    },
    _hover: {
      borderWidth: "2px",
      borderColor: "brand.trim",
    },
  },
});

export const radioTheme = defineMultiStyleConfig({ baseStyle });