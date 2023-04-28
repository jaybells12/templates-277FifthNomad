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

const footer = defineStyle({
  fontFamily: "PortraitText",
  fontSize: "0.625rem",
  fontWeight: "light",
  lineHeight: "1.5",
  textAlign: "left",
})

export const textTheme = defineStyleConfig({
  variants: { contact, footer },

})