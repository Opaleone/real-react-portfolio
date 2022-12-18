import { useState } from "react";
import redwoodPic from '../assets/images/redwood-ss.png'
import dndComp from '../assets/images/dnd-companion.png'

export const Projects = () => {

  const projectData = [
    {
      name: 'Redwood',
      link: '',
      description: '',
      id: 'redwood'
    },
    {
      name: 'Siege Bot',
      link: '',
      description: '',
      id: 'siege-bot'
    },
    {
      name: 'J.A.T.E',
      link: '',
      description: '',
      id: 'jate'
    },
    {
      name: 'Eventify',
      link: '',
      description: 'eventify',
      id: 'eventify'
    },
    {
      name: 'DND Companion App',
      link: '',
      description: '',
      id: 'dnd-app'
    },
    {
      name: 'Something here',
      link: '',
      description: '',
      id: 'something'
    },
  ]

  return (
    <div id='project-page'>
      <h1 id='project-page-title'>My Favorite Projects</h1>
      <div id='project-container'>
        {projectData.map((project, index) => (
          <div id={project.id} className='project-card'>
            <p><span className='card-title'>{project.name}</span></p>
            <div className='overlay'></div>
          </div>
        ))}
      </div>
    </div>
  )
}