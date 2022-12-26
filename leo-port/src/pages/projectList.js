import { Navbar } from "../components/navbar"

export const Projects = () => {

  const projectData = [
    {
      name: 'Redwood',
      link: "https://red-wood.herokuapp.com/",
      description: '',
      id: 'redwood'
    },
    {
      name: 'Siege Bot',
      link: 'https://github.com/Opaleone/discord-siege-bot',
      description: '',
      id: 'siege-bot'
    },
    {
      name: 'J.A.T.E',
      link: 'https://jate-pwa-lv.herokuapp.com/',
      description: '',
      id: 'jate'
    },
    {
      name: 'Eventify',
      link: 'https://tisforthomas.github.io/team-project-one/',
      description: '',
      id: 'eventify'
    },
    {
      name: 'DND Companion App',
      link: 'https://dnd-companion-app.herokuapp.com/',
      description: '',
      id: 'dnd-app'
    },
    {
      name: 'Note Taker',
      link: 'https://note-taker-lv.herokuapp.com/',
      description: '',
      id: 'note-taker'
    },
  ]

  return (
    <div id='project-page'>
      <Navbar />
      <h1 id='project-page-title'>My Favorite Projects</h1>
      <div id='project-container'>
        {projectData.map((project, index) => (
          <div id={project.id} className='project-card' key={index}>
            <p className='card-title-parent'><span className='card-title'>{project.name}</span></p>
            <a className='overlay' href={project.link} target='_blank' rel='noreferrer'>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}