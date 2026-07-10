import { Tag } from '../../components/ui/Tag'
import type { SkillGroup as SkillGroupType } from '../../types'

export function SkillGroup({ category, items }: SkillGroupType) {
  return (
    <div className="skills__group">
      <h3>{category}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <Tag>{item}</Tag>
          </li>
        ))}
      </ul>
    </div>
  )
}
