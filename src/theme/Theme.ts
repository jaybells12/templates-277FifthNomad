import { Public_Sans } from "next/font/google";
import { PortraitCondensed, PortraitText } from "src/fonts/fonts";
import { radioTheme } from "@/theme/RadioTheme";
import { inputTheme } from "@/theme/InputTheme";
import { selectTheme } from "@/theme/SelectTheme";
import { buttonTheme } from "./ButtonTheme";
import { containerTheme } from "./ContainerTheme";
import { extendTheme } from "@chakra-ui/react";

export const publicSans = Public_Sans({ subsets: ["latin"] });

export const Theme = extendTheme({
  styles:{
    global:{
      body:{
        bg:"brand.primary",
        color:"brand.trim"
      }
    }
  },
  fonts: {
    PortraitCond: PortraitCondensed.style.fontFamily,
    PortraitText: PortraitText.style.fontFamily,
    body: `${PortraitText.style.fontFamily}, ${publicSans.style.fontFamily}, sans-serif`,
    heading: `${PortraitCondensed.style.fontFamily}, ${publicSans.style.fontFamily}, sans-serif`,
  },
  colors: {
    brand: {
      primary: "#FFF8F2",
      accent: "#86878D",
      trim: "#3B3D47",
      placeholder: "#535353",
    },
  },
  components: { Radio: radioTheme, Input: inputTheme, Select: selectTheme, Button: buttonTheme, Container: containerTheme },
});
