import { Link } from 'react-router-dom'

export const Landing = () => {
  return (
    <section id='landing-container'>
      <img id='profile-pic' src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/127243135_4062004807146240_8777334306148782068_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=EOCBYV7RaeMAX8AvcoQ&_nc_ht=scontent-dfw5-2.xx&oh=00_AfDmtugZ2n0b_4fh2L0TmpdIcAKMMshzLizA4E-FmNB_zw&oe=63C5BE3E' alt='creator-pic'></img>
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