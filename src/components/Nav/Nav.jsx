import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './nav.css'

function Nav() {
  const [theme,setTheme] = useState('light');
  const handleTheme = ()=>{
    const changeTheme = (theme==="light")?"dark":"light";
    setTheme(changeTheme)
    localStorage.setItem('theme',changeTheme)
  }

  useEffect(()=>{
    const currentTheme = localStorage.getItem('theme')
    setTheme(currentTheme)
  },[])

  useEffect(()=>{
    document.body.setAttribute("data-theme",theme)
  },[theme])
  return (
    <nav className='navbar'>
        <h1 className='logo'>Portfolio</h1>
        <ul className='menu'>
            <Link to="/"><li>Home</li></Link>
            <Link to="/projects"><li>Projects</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/settings"><li>Settings</li></Link>
        </ul>
        <section className='menu-2'>
            <button className='theme' onClick={handleTheme}>{theme}</button>
        </section>
    </nav>
  )
}

export default Nav