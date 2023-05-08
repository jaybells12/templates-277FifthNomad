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
  // margin: "0 1.5rem",
  // _last: {
  //   marginRight: "3rem",
  // }
  
})

export const linkTheme = defineStyleConfig({
  variants: { contact, nav }
})