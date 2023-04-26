import localFont from "next/font/local";

export const PortraitCondensed = localFont({
  src: [
    {
      path: "./PortraitCondWeb-Light.ttf",
      weight: "300",
      style: "normal"
    },
    {
      path: "./PortraitCondWeb-Regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "./PortraitCondWeb-Medium.ttf",
      weight: "500",
      style: "normal"
    },
    {
      path: "./PortraitCondWeb-Bold.ttf",
      weight: "700",
      style: "normal"
    },
    {
      path: "./PortraitCondWeb-Heavy.ttf",
      weight: "900",
      style: "normal"
    },
  ]
})

export const PortraitText = localFont({
  src: [
    {
      path: "./PortraitText-Regular.otf",
      weight: "400",
      style: "normal"
    },
    {
      path: "./PortraitText-RegularItalic.otf",
      weight: "400",
      style: "italic"
    },
    {
      path: "./PortraitText-Medium.otf",
      weight: "500",
      style: "normal"
    },
    {
      path: "./PortraitText-MediumItalic.otf",
      weight: "500",
      style: "italic"
    },
    {
      path: "./PortraitText-Bold.otf",
      weight: "700",
      style: "normal"
    },
    {
      path: "./PortraitText-BoldItalic.otf",
      weight: "700",
      style: "italic"
    },
  ]
})