import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const brandPrimary = defineStyle({
  borderRadius: "0",
  color: "brand.trim",
  border: "1px solid",
  borderColor: "brand.trim",
  fontWeight: "normal",
  fontSize: "0.75rem",
  letterSpacing: "2px",
  px: "2rem",
  transitionDuration: "0.3s",
  _hover:{
    color: "brand.primary",
    bgColor: "brand.trim"
  }
})

export const buttonTheme = defineStyleConfig({
  variants: { brandPrimary },
  defaultProps: {
    variant: "brandPrimary"
  }
})