import { FunctionComponent } from "react";
import { CallToAction } from "../CallToAction";
import { Logo } from "../Logo";
import { VideoBlock } from "../VideoBlock";
import { Container } from "@chakra-ui/react";
export type HeroProps = {
  logoSrc: string;
  videoSrc: string;
  tagline: string;
};

export const Hero: FunctionComponent<HeroProps> = (props: HeroProps) => {
  return (
    <Container
      as={"section"}
      maxWidth={"unset"}
      position={"relative"}
      padding={"0"}
    >
      <Logo
        src={props.logoSrc}
        alt={"Logo"}
        position={"absolute"}
        left={"0"}
        right={"0"}
        margin={"0 auto"}
        top={"10%"}
        zIndex={"2"}
        width={90}
        height={144}
      />
      <VideoBlock src={props.videoSrc} />
      <CallToAction
        tagline={props.tagline}
        position="absolute"
        bottom="10%"
        zIndex="2"
      />
    </Container>
  );
};
