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

const card = defineStyle({
  fontFamily: "PortraitText",
  fontSize: "clamp(0.75rem, 2.5vw, 0.875rem)",
  lineHeight: "1.5",
  letterSpacing: "2px",
  fontWeight: "normal",
})

const title = defineStyle({
  fontSize: "clamp(5.3125rem, 3vw, 7.25rem)",
  fontWeight: "normal",
  lineHeight: "0.9",
  textAlign: "left",
})

export const headingTheme = defineStyleConfig({
  variants: { contact, title, card },

})