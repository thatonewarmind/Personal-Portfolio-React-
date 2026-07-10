export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  repoUrl?: string
  liveUrl?: string
  imageUrl?: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface NavLink {
  href: string
  label: string
}

export interface SocialLink {
  label: string
  url: string
}
