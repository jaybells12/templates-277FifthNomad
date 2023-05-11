import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const variants = {
  contact: defineStyle({
    fontFamily: "PortraitText",
    fontWeight: "light",
    fontSize: "0.875rem",
    letterSpacing: "2px",
    lineHeight: "1.8",
    textAlign: ["center", null, "left"],
    marginBottom: "0.5rem"
  }),
  card: defineStyle({
    fontFamily: "PortraitText",
    fontSize: "clamp(0.75rem, 2.5vw, 0.875rem)",
    lineHeight: "1.5",
    letterSpacing: "2px",
    fontWeight: "normal",
    marginTop: [null, null, "1.5rem"],
    marginBottom: ["0.75rem", null, "1.5rem"]
  }),
  title: defineStyle({
    fontSize: "clamp(5.3125rem, 7.25vw, 7.25rem)",
    fontWeight: "normal",
    lineHeight: "0.9",
    textAlign: "left",
  })
}

export default defineStyleConfig({
  variants
})