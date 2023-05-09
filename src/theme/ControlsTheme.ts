import { defineStyleConfig } from "@chakra-ui/react"

export const Controls = defineStyleConfig({
  baseStyle: {
    display: "none",
    bgColor: "unset"
  },
  variants: {
    whole: {
      display: "flex",
      position: "absolute",
      right: "clamp(100px,10vw,200px)",
      top: "-100px",
      gap: "1.5rem",
    },
    split: {
      display: "flex",
      position: "absolute",
      top: "37%",
      left: "50%",
      transform: "translateX(-50%)",
      width: "88%",
      justifyContent: "space-between",
    },
  },
  // The default variant value
  defaultProps: {}
})