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
  fontSize: "clamp(0.75rem, 2.5vw, 0.875rem)",
  letterSpacing: "2px",
})

const card = defineStyle({
  fontSize: "clamp(0.875rem, 3vw, 1.0625rem)",
  lineHeight: "1.5",
  fontWeight: "normal",
})

const banner = defineStyle({
  color: "white",
  fontSize: "1.125rem",
  padding: ["2rem 0", null, "3rem 11rem"],
  maxWidth: ["88%", null, "72%"],
  margin: "0 auto",
  lineHeight: "1.4",
  letterSpacing: "2.7px",
  opacity: "0.6",
  textAlign: ["center", null, "left"]
})

export const textTheme = defineStyleConfig({
  variants: { contact, footer, features, banner, card },

})