import { Card } from '../../components/ui/Card'
import type { Project } from '../../types'
import { ProjectTagList } from './ProjectTagList'

export function ProjectCard({ title, description, tags, repoUrl, liveUrl }: Project) {
  return (
    <Card className="projects__item">
      <h3>{title}</h3>
      <p>{description}</p>
      <ProjectTagList tags={tags} />
      {(repoUrl || liveUrl) && (
        <p className="projects__links">
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noreferrer">
              Repo
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noreferrer">
              Live
            </a>
          )}
        </p>
      )}
    </Card>
  )
}
