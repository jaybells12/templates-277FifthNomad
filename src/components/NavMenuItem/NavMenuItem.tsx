import { useScrollEasing } from '@/lib/useScrollEasing'
import { Link } from '@chakra-ui/next-js'
import { FunctionComponent, useRef } from 'react'

export type NavMenuItemProps = {
  text: string
  onClose: () => void
}

export const NavMenuItem: FunctionComponent<NavMenuItemProps> = (
  props: NavMenuItemProps
) => {
  const { text, onClose } = props
  const ref = useRef<HTMLAnchorElement>(null)
  const handleScroll = useScrollEasing(ref)

  return (
    <Link
      href={`#${text}`}
      ref={ref}
      fontSize={'1.75rem'}
      lineHeight={'1.4'}
      letterSpacing={'2px'}
      fontWeight={'light'}
      _hover={{ textDecoration: 'underline' }}
      _first={{ marginTop: '7rem' }}
      aria-label={`${text} section`}
      onClick={(e) => {
        onClose()
        handleScroll(e)
      }}
    >
      {text.toUpperCase()}
    </Link>
  )
}
