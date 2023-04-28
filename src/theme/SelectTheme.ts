import { selectAnatomy } from "@chakra-ui/anatomy"
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys)

const underlined = definePartsStyle({
  field: {
    width: "100%",
    bgColor: "inherit",
    borderRadius: "0",
    border: "0",
    borderBottom: "1px solid",
    borderColor: "brand.inputBorder",
    padding: "11px 0 11px 0",
    fontFamily: "PortraitText",
    letterSpacing: "2px",
    fontSize: "0.875rem"
  },
})

export const selectTheme = defineMultiStyleConfig({
  variants: { underlined },
  defaultProps: {
    variant: "underlined"
  }
})