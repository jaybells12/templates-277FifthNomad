import { radioAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys);

// const baseStyle = definePartsStyle({
//   control: {
//     borderWidth: "2px",
//     borderColor: "brand.trim",
//     _checked: {
//       borderWidth: "2px",
//       borderColor: "brand.trim",
//       background: "brand.trim",
//       color: "brand.trim",
//       _hover: {
//         borderColor: "brand.trim",
//         background: "brand.trim",
//       },
//     },
//     _hover: {
//       borderWidth: "2px",
//       borderColor: "brand.trim",
//     },
//   },
// });
// const sizes = {
//   md: definePartsStyle({
//     control: { w:"3.5", h:"3.5"},
//     label:{ fontSize: "0.875rem", letterSpacing: "2px"}
//   })
// }
// Is there an easier way to unset base styling?
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

export const radioTheme = defineMultiStyleConfig({ variants, defaultProps: {
  variant: "mobile"
} });