import { useState } from "react";

export const Projects = () => {

  const projectData = [
    {
      name: 'Redwood',
      link: '',
      image: '',
      description: '',
    },
    {
      name: 'Siege Bot',
      link: '',
      image: '',
      description: '',
    },
    {
      name: 'Weather Forecast',
      link: '',
      image: '',
      description: '',
    },
    {
      name: 'Eventify',
      link: '',
      image: '',
      description: '',
    },
    {
      name: 'DND Companion App',
      link: '',
      image: '',
      description: '',
    },
    {
      name: 'Something here',
      link: '',
      image: '',
      description: '',
    },
  ]

  return (
    <div id='project-page'>
      <h1>My Favorite Projects</h1>
      <div id='project-container'>
        {projectData.map((project, index) => (
          <div className='project-card' key={index}>
            <p>{project.name}</p>

          </div>
        ))}
      </div>
    </div>
  )
}