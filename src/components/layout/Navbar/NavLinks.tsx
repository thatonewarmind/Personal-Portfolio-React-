import { navLinks } from '../../../data/navLinks'
import { NavLink } from './NavLink'

export function NavLinks() {
  return (
    <nav>
      <ul className="navbar__links">
        {navLinks.map((link) => (
          <NavLink key={link.href} href={link.href} label={link.label} />
        ))}
      </ul>
    </nav>
  )
}
