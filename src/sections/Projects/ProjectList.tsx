import { projects } from '../../data/projects'
import { ProjectCard } from './ProjectCard'

export function ProjectList() {
  return (
    <ul className="projects__list">
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectCard {...project} />
        </li>
      ))}
    </ul>
  )
}
