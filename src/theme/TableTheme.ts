import { tableAnatomy } from "@chakra-ui/anatomy"
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tableAnatomy.keys);
  
  const baseStyle = definePartsStyle({
    table:{
      fontFamily: "PortraitText"
    },
    th:{
      cursor: "pointer",
      lineHeight: "1.6",
      letterSpacing: "2px",
      textAlign: "center",
      fontWeight: "600",
    }
  })

  const variants = {
    mobile: definePartsStyle({
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
    responsive: definePartsStyle({
      table:{
        tableLayout: "fixed",
        width: "100%",
      },
      th: {
        fontSize: "clamp(0.625rem, 1.5vw, 0.875rem)",
        width: "10%",
        padding: "0",
        paddingTop: "8px",
        whiteSpace: "normal",
        textAlign: "center",
        paddingBottom: "clamp(0.5em, 1.2vw, 1.75em)"
      },
      tr: {
        display: "table-row",
        columnCount: "auto",
        transition: "background-color 0.4s ease-in-out", 
      },
      td: {
        display: "table-cell",
        fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
        width: "10%",
        padding: "0",
        paddingBlock: "8px",
        textAlign: "center",
      },
      tbody: {
        borderBottom: "1px solid #cecece",
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
    }),
    /**
     * 
    fontSize={"0.75rem"} x
    cursor={"pointer"} x
                    
                    paddingBottom={"21px"}
     */
    // test: definePartsStyle({
      
    //   tr: {
    //     display: "table-row",
    //     columnCount: "auto",
    //     transition: "background-color 0.4s ease-in-out",
    //     _hover: { 
    //       bgColor: "brand.tableHover" 
    //     },
    //   },
      
    //   td: {
        
    //   },
    //   tbody: {
    //     _before: {
    //       content: `""`,
    //       display: "block",
    //       height: "2rem",
    //     },
    //     _after: {
    //       content: `""`,
    //       display: "block",
    //       height: "2rem",
    //     }
    //   }
    // })
  }

  export const tableTheme = defineMultiStyleConfig({
    baseStyle,
    variants
  })
