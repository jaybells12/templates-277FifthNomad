import { FunctionComponent } from "react";
import { CallToAction } from "../CallToAction";
import { Logo } from "../Logo";
import { VideoBlock } from "../VideoBlock";
import { Box } from "@chakra-ui/react";
export type HeroProps = {
  logoSrc: string;
  videoSrc: string;
  tagline: string;
};

export const Hero: FunctionComponent<HeroProps> = (props: HeroProps) => {
  return (
    <Box position="relative">
      <Logo src={props.logoSrc} position="absolute" top="10%" zIndex="2" />
      <VideoBlock src={props.videoSrc} />
      <CallToAction
        tagline={props.tagline}
        position="absolute"
        bottom="10%"
        zIndex="2"
      />
    </Box>
  );
};
