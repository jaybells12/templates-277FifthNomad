import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const section = defineStyle({
  maxW: "1440px",
  minW: "full",
  padding: "0",
  textAlign: "center",
  _notLast: {
    marginBottom: ["5rem", "9rem", "14.375rem"]
  }
})

export const containerTheme = defineStyleConfig({
  variants: { section },
})