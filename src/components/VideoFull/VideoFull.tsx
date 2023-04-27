import { AspectRatio } from "@chakra-ui/react";
import { FunctionComponent } from "react";

export type VideoFullProps = {
  src: string;
};
// Rename - *Block convention reserved for full page sections
export const VideoFull: FunctionComponent<VideoFullProps> = (
  props: VideoFullProps
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
