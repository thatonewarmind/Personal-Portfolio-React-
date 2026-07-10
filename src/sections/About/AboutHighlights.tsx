import { Tag } from '../../components/ui/Tag'

const highlights = ['Ohio State University', 'Computer Engineering', 'Math Minor']

export function AboutHighlights() {
  return (
    <ul className="about__highlights">
      {highlights.map((highlight) => (
        <li key={highlight}>
          <Tag>{highlight}</Tag>
        </li>
      ))}
    </ul>
  )
}
