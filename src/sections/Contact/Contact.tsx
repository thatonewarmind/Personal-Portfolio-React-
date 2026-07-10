import { Container } from '../../components/ui/Container'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { ContactLinks } from './ContactLinks'

export function Contact() {
  return (
    <section id="contact" className="contact">
      <Container>
        <SectionHeading title="Contact" subtitle="Feel free to reach out through any of these." />
        <ContactLinks />
      </Container>
    </section>
  )
}
