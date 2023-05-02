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

const features = defineStyle({
  fontFamily: "PortraitText",
  fontSize: "0.875rem",
  letterSpacing: "2px",
})

const banner = defineStyle({
  color: "white",
  fontSize: "1.125rem",
  padding: "3rem 11rem",
  maxWidth: "72%",
  margin: "0 auto",
  lineHeight: "1.4",
  letterSpacing: "2.7px",
  opacity: "0.6",
  textAlign: "left"
})

export const textTheme = defineStyleConfig({
  variants: { contact, footer, features, banner },

})