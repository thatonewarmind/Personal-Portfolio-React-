import { NavBrand } from './NavBrand'
import { NavLinks } from './NavLinks'

export function Navbar() {
  return (
    <header className="navbar">
      <NavBrand />
      <NavLinks />
    </header>
  )
}
