import { AspectRatio } from "@chakra-ui/react";
import { FunctionComponent } from "react";

export type VideoFullProps = {
  src: string;
};

export const VideoFull: FunctionComponent<VideoFullProps> = (
  props: VideoFullProps
) => {
  return (
    <AspectRatio ratio={16 / 9} bgColor={"black"} height={"100vh"}>
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
