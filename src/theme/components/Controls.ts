import { defineStyle, defineStyleConfig } from "@chakra-ui/react"

const baseStyle = {
  display: "none",
  bgColor: "unset"
}

const variants = {
  whole: defineStyle({
    display: "flex",
    position: "absolute",
    right: "clamp(100px,10vw,200px)",
    top: "-100px",
    gap: "1.5rem",
  }),
  split: defineStyle({
    display: "flex",
    position: "absolute",
    top: "37%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "88%",
    justifyContent: "space-between",
  }),
}


export default defineStyleConfig({
  baseStyle,
  variants,
})