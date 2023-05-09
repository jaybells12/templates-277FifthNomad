import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const baseStyle = defineStyle({
  width: "6px",
  height: "6px",
  backgroundColor: "brand.accent"
})
const variants = {
  mobileLight: defineStyle({
    backgroundColor: "white",
    opacity: 0.5,
  }),
  mobileDark: defineStyle({
    backgroundColor: "brand.trim",
    opacity: 1,
  })
}

export const circleTheme = defineStyleConfig({
  baseStyle,
  variants
})