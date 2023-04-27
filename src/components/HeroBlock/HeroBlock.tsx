import { FunctionComponent } from "react";
import { CallToAction } from "../CallToAction";
import { Logo } from "../Logo";
import { VideoFull } from "../VideoFull";
import { Container } from "@chakra-ui/react";

export type HeroProps = {
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  videoSrc: string;
  tagline: string;
};

export const HeroBlock: FunctionComponent<HeroProps> = (props: HeroProps) => {
  const { logo, videoSrc, tagline } = props;
  return (
    <Container as={"section"} variant={"section"} position={"relative"}>
      <Logo
        src={logo.src}
        alt={logo.alt}
        position={"absolute"}
        left={"0"}
        right={"0"}
        margin={"0 auto"}
        top={"10%"}
        zIndex={"2"}
        width={logo.width}
        height={logo.height}
      />
      <VideoFull src={videoSrc} />
      <CallToAction
        tagline={tagline}
        position={"absolute"}
        bottom={"10%"}
        zIndex={"2"}
      />
    </Container>
  );
};
