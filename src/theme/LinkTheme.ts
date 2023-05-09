import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const contact = defineStyle({
  fontFamily: "PortraitText",
  fontWeight: "light",
  fontSize: "1rem",
  lineHeight: "1.7",
  whiteSpace: "pre",
  textAlign: ["center", null, "left"],
  letterSpacing: "0.2px",
  display: "block",
  _hover:{
    textDecoration: "none",
  }
})

const nav = defineStyle({
  fontSize: "0.7rem",
  letterSpacing: "2px",
  marginRight: [null, null, "2rem", "3rem"]
})

export const linkTheme = defineStyleConfig({
  variants: { contact, nav }
})