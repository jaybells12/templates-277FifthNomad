import { tableAnatomy } from "@chakra-ui/anatomy"
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tableAnatomy.keys);
  
  const variants = {
    base: definePartsStyle({
      tbody: {
        display: "block",
        paddingInline: "clamp(1rem, 3.3vw, 1.75rem)",
      },

      tr: {
        display: "block",
        paddingBlock: "clamp(0.75rem, 3.3vw, 1.5rem)",
        columnCount: "2",
        columnGap: "10%",
        borderBottom: "1px solid #cecece",
      },
      td: {
        display: "block",
        padding: "0",
        width: "fit-content",
        textAlign: "left",
        fontSize: "clamp(0.75rem, 3.3vw, 0.875rem)",
        _before: {
          content: "attr(data-label)",
          fontSize: "clamp(0.5625rem, 2.5vw, 0.6875rem)",
          letterSpacing: "1px",
          textTransform: "uppercase",
          marginRight: "0.7em"
        }
      },
    }),
    md: definePartsStyle({
      tr: {
        display: "table-row",
        columnCount: "auto",
        transition: "background-color 0.4s ease-in-out",
        _hover: { 
          bgColor: "brand.tableHover" 
        },
      },
      td: {
        display: "table-cell"
      },
      tbody: {
        _before: {
          content: `""`,
          display: "block",
          height: "2rem",
        },
        _after: {
          content: `""`,
          display: "block",
          height: "2rem",
        }
      }
    })
  }

  const sizes = {
  }

  const defaultProps = {
  }

  export const tableTheme = defineMultiStyleConfig({
    variants
  })
