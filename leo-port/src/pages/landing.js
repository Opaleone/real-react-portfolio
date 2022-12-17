import { Link } from 'react-router-dom'

export const Landing = () => {
  return (
    <section id='landing-container'>
      <div id='creator-container'>
        <p id='creator-name'>Leone Varando</p>
        <p id='creator-greet'>Welcome to my portfolio!</p>
      </div>
      <div id='btn-container'>
        <Link className='landing-link' to='/about-me'>About me</Link>
        <Link className='landing-link' to='/projects'>Projects</Link>
        <Link className='landing-link' to='/contact-me'>Contact me</Link>
      </div>
    </section>
  )
}