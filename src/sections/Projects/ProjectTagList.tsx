import { Tag } from '../../components/ui/Tag'

interface ProjectTagListProps {
  tags: string[]
}

export function ProjectTagList({ tags }: ProjectTagListProps) {
  return (
    <ul className="projects__tags">
      {tags.map((tag) => (
        <li key={tag}>
          <Tag>{tag}</Tag>
        </li>
      ))}
    </ul>
  )
}
