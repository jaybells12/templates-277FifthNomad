import { StyledLogo } from "./Logo.style";
import { FunctionComponent } from "react";
import { Flex } from "@chakra-ui/react";

export type LogoProps = {
  src: string;
  [x: string]: any;
};

export const Logo: FunctionComponent<LogoProps> = (props: LogoProps) => {
  return (
    <Flex direction="column" width="100%" align="center">
      <StyledLogo src={props.src} {...props} />
    </Flex>
  );
};
