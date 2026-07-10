import { socials } from '../../data/socials'
import { ContactLink } from './ContactLink'

export function ContactLinks() {
  return (
    <div className="contact__links">
      {socials.map((social) => (
        <ContactLink key={social.label} label={social.label} url={social.url} />
      ))}
    </div>
  )
}
