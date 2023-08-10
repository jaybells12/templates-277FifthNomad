import { FunctionComponent } from 'react'
import { CallToAction } from '../CallToAction'
import { Logo } from '../Logo'
import { VideoFull } from '../VideoFull'
import { Container } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const logoVariants = {
  enter: {
    scale: 1,
    transition: {
      scale: {
        duration: 0.2,
      },
    },
  },
  exit: {
    scale: 0,
    transition: {
      scale: {
        duration: 0.2,
      },
    },
  },
}

export type HeroProps = {
  logo: {
    src: string
    alt: string
    width: number
    height: number
  }
  videoSrc: string
  tagline: string
  scrolled: boolean
}

export const HeroBlock: FunctionComponent<HeroProps> = (props: HeroProps) => {
  const { logo, videoSrc, tagline, scrolled } = props

  return (
    <Container
      as={'section'}
      variant={'section'}
      position={'relative'}
      overflow={'hidden'}
    >
      <motion.div
        variants={logoVariants}
        animate={scrolled ? 'exit' : 'enter'}
        style={{
          position: 'fixed',
          left: '0',
          right: '0',
          margin: '0 auto',
          top: '55px',
          width: logo.width,
          height: logo.height,
          zIndex: '2',
        }}
      >
        <Logo
          fill
          src={logo.src}
          alt={logo.alt}
        />
      </motion.div>
      <VideoFull src={videoSrc} />
      <CallToAction
        tagline={tagline}
        href={'#about'}
        position={'absolute'}
        bottom={'5%'}
        zIndex={'2'}
      />
    </Container>
  )
}
