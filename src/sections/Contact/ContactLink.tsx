import { Button } from '../../components/ui/Button'
import type { SocialLink } from '../../types'

export function ContactLink({ label, url }: SocialLink) {
  return (
    <Button href={url} variant="secondary" target="_blank" rel="noreferrer">
      {label}
    </Button>
  )
}
