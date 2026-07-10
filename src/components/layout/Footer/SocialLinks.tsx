import { socials } from '../../../data/socials'
import { SocialLink } from './SocialLink'

export function SocialLinks() {
  return (
    <ul className="footer__socials">
      {socials.map((social) => (
        <SocialLink key={social.label} label={social.label} url={social.url} />
      ))}
    </ul>
  )
}
