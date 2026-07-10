import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'project-one',
    title: 'Project One: ResQNet',
    description: 'RESQNET is a disaster-response system that uses smartphone AI to detect victims, send distress signals, and guide rescuers using real-time maps. By leveraging everyday mobile devices and Bluetooth-connected hardware alerts, it creates a scalable, volunteer-driven rescue network without requiring expensive equipment. Built in 24 hours in collaboration with 4 people.',
    tags: ['ES6', 'Arduino', 'ESP32', 'Google Maps API', 'Bluetooth Low Energy', 'Node.js'],
    repoUrl: 'https://github.com/Preetham-p06/RESQNET',
  },
  {
    id: 'project-two',
    title: 'Project Two: Personal Portfolio Website',
    description: 'A personal portfolio website built with React and TypeScript, showcasing my projects and skills.',
    tags: ['React', 'TypeScript', 'Node.js', 'CSS', 'HTML'],
    repoUrl: 'https://github.com/your-username/project-two',
  },
]
