import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const contact = defineStyle({
  fontFamily: "PortraitText",
  fontWeight: "light",
  fontSize: "1rem",
  lineHeight: "1.7",
  whiteSpace: "pre",
  textAlign: "left",
  letterSpacing: "0.2px"
})

export const textTheme = defineStyleConfig({
  variants: { contact },

})