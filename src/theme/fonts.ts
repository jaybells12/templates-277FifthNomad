import { PortraitCondensed, PortraitText } from "src/fonts";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default {
  PortraitCond: PortraitCondensed.style.fontFamily,
  PortraitText: PortraitText.style.fontFamily,
  body: `${PortraitText.style.fontFamily}, ${publicSans.style.fontFamily}, sans-serif`,
  heading: `${PortraitCondensed.style.fontFamily}, ${publicSans.style.fontFamily}, sans-serif`,
}