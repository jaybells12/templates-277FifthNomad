import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const contact = defineStyle({
  fontFamily: "PortraitText",
  fontWeight: "light",
  fontSize: "0.875rem",
  letterSpacing: "2px",
  lineHeight: "1.8",
  textAlign: "left",
  marginBottom: "0.5rem"
})

export const headingTheme = defineStyleConfig({
  variants: { contact },

})