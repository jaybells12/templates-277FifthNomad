import { useScrollEasing } from '@/lib/useScrollEasing'
import { Link, LinkProps } from '@chakra-ui/next-js'
import { FunctionComponent, useRef } from 'react'

export type NavLinkProps = {
  text: string
} & Partial<LinkProps>

export const NavLink: FunctionComponent<NavLinkProps> = (
  props: NavLinkProps
) => {
  const { text, ...rest } = props
  const ref = useRef<HTMLAnchorElement>(null)
  const handleScroll = useScrollEasing(ref)

  return (
    <Link
      ref={ref}
      href={`#${text}`}
      onClick={handleScroll}
      variant={'nav'}
      {...rest}
    >
      {text.toUpperCase()}
    </Link>
  )
}
