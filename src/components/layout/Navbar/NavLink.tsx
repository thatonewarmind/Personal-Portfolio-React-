import type { NavLink as NavLinkType } from '../../../types'

export function NavLink({ href, label }: NavLinkType) {
  return (
    <li>
      <a href={href}>{label}</a>
    </li>
  )
}
