import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const variants = {
  brandPrimary: defineStyle({
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
}
// variant: string typing didnt work, had to be explicit
const defaultProps: { variant: "brandPrimary"} = {
  variant: "brandPrimary"
}

export default defineStyleConfig({
  variants,
  defaultProps,
})