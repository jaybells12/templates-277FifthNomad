import { AspectRatio } from '@chakra-ui/react'
import { FunctionComponent } from 'react'

export type VideoFullProps = {
  src: string
}

export const VideoFull: FunctionComponent<VideoFullProps> = (
  props: VideoFullProps
) => {
  return (
    <AspectRatio
      ratio={16 / 9}
      bgColor={'black'}
    >
      {/* <video
        src={props.src}
        muted={true}
        autoPlay={true}
        loop={true}
        style={{ opacity: 0.6 }}
      /> */}
      <iframe
        src='https://www.youtube.com/embed/z-Y0JPz9PpQ?autohide=1&playlist=z-Y0JPz9PpQ&autoplay=1&loop=1&controls=0&disablekb=1&fs=0&mute=1&playsinline=1&modestbranding=1&iv_load_policy=3&showinfo=0'
        title='YouTube video player'
        height={'100%'}
        width={'100%'}
        frameBorder='0'
        allowFullScreen
        allow={'fullscreen'}
        style={{
          pointerEvents: 'none',
          opacity: 0.75,
        }}
      />
    </AspectRatio>
  )
}
