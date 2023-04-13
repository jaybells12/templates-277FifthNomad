import { StyledLogo } from "./Logo.style";
import { FunctionComponent } from "react";

export type LogoProps = {
  src: string;
};

export const Logo: FunctionComponent<LogoProps> = (props: LogoProps) => {
  return <StyledLogo src={props.src} />;
};
