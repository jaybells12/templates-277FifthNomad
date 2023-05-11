import { formAnatomy } from "@chakra-ui/anatomy"
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(formAnatomy.keys)

const baseStyle = definePartsStyle({
  container:{
    display: "flex",
    flexDir: "column",
    gap: "1.5rem",
    flexGrow: "0",
    paddingInline: "1.5rem",
  },
})

export default defineMultiStyleConfig({
  baseStyle
})