import { radioAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys);

const variants = {
  mobile: definePartsStyle({
    label: {
      cursor: "auto",
      fontSize: "0.6875rem",
      letterSpacing: "1px",
      lineHeight: "1.6",
      fontWeight: "normal",
    },
    control: {
      height: "13px",
      width: "13px",
      cursor: "auto",
      borderWidth: "2px",
      borderColor: "brand.trim",
      _checked:{
        color: "brand.trim",
        borderColor: "brand.trim",
        backgroundColor: "brand.trim",
        _hover: {
          color: "brand.trim",
          backgroundColor: "brand.trim",
          borderColor: "brand.trim"
        }
      }
    },
  }),
  md: definePartsStyle({})
}

export default defineMultiStyleConfig({ variants, defaultProps: {
  variant: "mobile"
} });