import { cardAnatomy } from "@chakra-ui/anatomy"
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    display: "flex",
    flexShrink: "0",
    width: "100%",
    maxWidth: "600px",
    minWidth: "300px",
    margin: "0",
    bgColor: "inherit",
    textAlign: "left",
    paddingInline: ["1.5rem", null, "0"]
  },
  header: {
    margin: "0",
    padding: "0",
  },
  body: {
    margin: "0",
    padding: "0",
  },
  footer: {
    margin: "0",
    padding: "0",
  }
})

const variants = {
  singleColumn: definePartsStyle({
    header:{
      marginBottom: "1rem"
    },
    body: {},
    footer: {
      marginTop:"1.5rem"
    },
  }),
  multiColumn: definePartsStyle({
    container: {},
    body: {},
    footer: {}
  })
}

// const defaultProps = {
//   variant: "singleColumn"
// }

export default defineMultiStyleConfig({
  baseStyle,
  variants
})
