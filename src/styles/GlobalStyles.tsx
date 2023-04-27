import { createGlobalStyle } from "styled-components";
import { publicSans } from "@/theme/Theme";
import { PortraitText, PortraitCondensed } from "src/fonts/fonts";

// Added these to the theme for Chakra, need to modify components to pull color from the theme
export const PRIMARY_COLOR = "#fff8f2"; // brand.primary
export const ACCENT_COLOR = "#86878d"; // brand.accent
export const TRIM_COLOR = "#3B3D47"; // brand.trim

export const GlobalStyles: any = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
body {
  font-family: "${PortraitText.style.fontFamily}, ${publicSans.style.fontFamily}, sans-serif"
}
h1,h2,h3,h4,h5,h6 {
  font-family: "${PortraitCondensed.style.fontFamily}, ${publicSans.style.fontFamily}, sans-serif"
}
`;
