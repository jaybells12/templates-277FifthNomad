import { AspectRatio } from "@chakra-ui/react";
import { FunctionComponent } from "react";

export type VideoBlockProps = {
  src: string;
};

export const VideoBlock: FunctionComponent<VideoBlockProps> = (
  props: VideoBlockProps
) => {
  return (
    <AspectRatio ratio={16 / 9} minH="100vh" bgColor="black">
      <video
        src={props.src}
        muted={true}
        autoPlay={true}
        loop={true}
        style={{ opacity: 0.6 }}
      />
    </AspectRatio>
  );
};
