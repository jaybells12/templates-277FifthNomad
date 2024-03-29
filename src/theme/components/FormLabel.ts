import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const variants = {
  mobile: defineStyle({
    fontSize: "0.75rem",
    letterSpacing: "1px",
    marginBlock: "0.75rem",
  }),
}

export default defineStyleConfig({
  variants,
  defaultProps: {
    variant: "mobile"
  }
})