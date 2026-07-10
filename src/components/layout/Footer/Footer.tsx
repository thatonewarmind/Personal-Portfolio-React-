import { SocialLinks } from './SocialLinks'

export function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Aadit Bhatia. All rights reserved.</p>
      <SocialLinks />
    </footer>
  )
}
