import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div id='navbar'>
      <Link className='nav-link' to='/'>Home</Link>
      <Link className='nav-link' to='/about-me'>About Me</Link>
      <Link className='nav-link' to='/projects'>Projects</Link>
      <a className='nav-link' href='https://drive.google.com/file/d/1QSy_CjrOSt14cVAAS68nZGwp-ZXCVBLX/view?usp=share_link' target='_blank' rel='noreferrer'>Resume</a>
    </div>
  )
}