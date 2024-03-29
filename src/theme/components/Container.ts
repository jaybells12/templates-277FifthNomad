import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const variants = {
  section: defineStyle({
    maxW: "1440px",
    minW: "full",
    padding: "0",
    textAlign: "center",
    overflowX: "hidden",
    marginBottom: ["4rem", null, "8rem", "12rem"]
  })
}


export default defineStyleConfig({
  variants
})