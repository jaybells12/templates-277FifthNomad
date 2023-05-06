import { selectAnatomy } from "@chakra-ui/anatomy"
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys)

const variants = {
  mobile: definePartsStyle({
    field:{
    bgColor: "inherit",
    borderRadius: "0",
    border: "0",
    borderBottom: "1px solid",
    borderColor: "brand.inputBorder",
    fontSize: "0.75rem",
    letterSpacing: "1px",
    lineHeight: "1",
    height: "auto",
    minHeight: "1.125rem",
    padding: "0",
    paddingBlock: "0.5rem",
    },
  }),
  md: definePartsStyle({})
}

export const selectTheme = defineMultiStyleConfig({
  variants,
  defaultProps: {
    variant: "mobile"
  }
})