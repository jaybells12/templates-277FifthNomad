import { inputAnatomy } from "@chakra-ui/anatomy"
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const variants = {
  mobile: definePartsStyle({
    field: {
      backgroundColor: "inherit",
      borderRadius: "0",
      borderBottom: "1px solid",
      borderBottomColor: "brand.inputBorder",
      letterSpacing: "1px",
      fontSize: "0.75rem",
      lineHeight: "1",
      height: "auto",
      minHeight: "1.125rem",
      padding: "0",
      paddingBlock: "0.5rem"
    }
  }),
  md: definePartsStyle({
    field: {
      width: "100%",
      bgColor: "inherit",
      
      
      borderColor: "brand.inputBorder",
      padding: "11px 0 11px 0",
      fontFamily: "PortraitText",
      letterSpacing: "2px",
      fontSize: "0.875rem"
    },
  }),
}


export default defineMultiStyleConfig({
  variants,
  defaultProps: {
    variant: "mobile"
  }
})