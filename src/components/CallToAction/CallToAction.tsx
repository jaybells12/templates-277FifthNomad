import { useScrollEasing } from '@/lib/useScrollEasing'
import { Link } from '@chakra-ui/next-js'
import { VStack, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FunctionComponent, useRef } from 'react'

export type CallToActionProps = {
  tagline: string
  href: string
  [x: string]: any
}

export const CallToAction: FunctionComponent<CallToActionProps> = ({
  tagline,
  href,
  ...rest
}: CallToActionProps) => {
  const ref = useRef<HTMLAnchorElement>(null)
  const handleScroll = useScrollEasing(ref)
  return (
    <VStack
      width='100%'
      align='center'
      {...rest}
    >
      <Text
        color='white'
        whiteSpace='break-spaces'
        textAlign='center'
        lineHeight='1.4'
        fontWeight={'medium'}
        paddingInline={['55px', '0']}
        sx={{
          fontSize: 'clamp(1.125rem,2vw,1.75rem)',
        }}
      >
        {tagline}
      </Text>
      <Link
        href={href}
        ref={ref}
        onClick={handleScroll}
        padding='2rem'
        aria-label={'call to action to scroll to next section'}
      >
        <motion.img
          src={'./Down-Arrow.svg'}
          style={{ marginInline: 'auto' }}
          animate={{ y: [0, 0, -7, 0, -5, 0, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'loop',
            times: [0, 0.2, 0.4, 0.5, 0.6, 0.8, 1],
            type: 'keyframes',
          }}
        ></motion.img>
      </Link>
    </VStack>
  )
}
