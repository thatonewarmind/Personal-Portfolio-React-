import type { SocialLink as SocialLinkType } from '../../../types'

export function SocialLink({ label, url }: SocialLinkType) {
  return (
    <li>
      <a href={url} target="_blank" rel="noreferrer">
        {label}
      </a>
    </li>
  )
}
