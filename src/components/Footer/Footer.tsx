import { FunctionComponent } from 'react'
import { Link } from '@chakra-ui/next-js'
import {
  Container,
  HStack,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react'
import { HouseIcon } from '../HouseIcon'
import { Logo } from '../Logo'

export type FooterProps = {
  text: string
  logos: any[] // Array of SVGs
  pdf?: string // Optional Fair Housing Info
}

export const Footer: FunctionComponent<FooterProps> = (props: FooterProps) => {
  const { text, logos, pdf } = props
  const mobile = useBreakpointValue({ base: true, md: false })

  return (
    <Container
      as={'footer'}
      variant={'section'}
      marginBottom={['2rem', null, '12rem']}
    >
      <VStack
        width={['80%', null, '70%']}
        margin={'0 auto'}
        gap={'2rem'}
      >
        <HStack
          width={'100%'}
          align={mobile && 'flex-start'}
        >
          <HouseIcon />
          <Text variant={'footer'}>
            {text}
            {pdf && (
              <Link
                href={pdf}
                target={'_blank'}
                textDecoration={'underline'}
                paddingLeft={'3gipx'}
                aria-label={'Open a pdf regarding Fair Housing Notice'}
              >
                Fair Housing Notice
              </Link>
            )}
          </Text>
        </HStack>
        <HStack
          width={'100%'}
          maxWidth={[null, null, '537px', null]}
          justifyContent={['space-between', null, 'space-around']}
          flexWrap={['wrap', null, null, 'nowrap']}
          gap={['1.75rem', null, '1rem']}
          spacing={'0'}
        >
          {logos.map((logo, idx) => (
            <Logo
              key={idx}
              src={logo.src}
              alt={'footer logo'}
              width={logo.width}
              height={logo.height}
              sx={
                mobile && {
                  width: 'calc(50% - 15px)',
                }
              }
            />
          ))}
        </HStack>
      </VStack>
    </Container>
  )
}
