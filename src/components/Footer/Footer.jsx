import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='footer'>
        <ul className="sub-footer about-footer">
          <li>Portfolio</li>
          <span>I am a website Developer!</span>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, ipsum excepturi! Quo facere, officiis natus quia officia excepturi quas quidem accusamus numquam adipisci ipsa perspiciatis eligendi dolorem eaque iste itaque.</p>
        </ul>
        <ul className="sub-footer category-footer">
          <li className='heading-list'>category</li>
          <li>
          <ion-icon style={{color:"#77b272"}} name="logo-nodejs"></ion-icon>
            Node
          </li>
          <li>
          <ion-icon style={{color:"#0bccff"}} name="logo-react"></ion-icon>
            React
          </li>
          <li>
          <ion-icon style={{color:"#efda4d"}} name="logo-javascript"></ion-icon>
            Javascript
          </li>
          <li>
          <ion-icon style={{color:"#2762ee"}} name="logo-css3"></ion-icon>
            Pure CSS
          </li>
          <Link to="/projects" style={{color:"white"}}>
          <li>
          <ion-icon name="send-outline" style={{color:"mediumslateblue"}}></ion-icon>
            More
            </li>
          </Link>
        </ul>
        <ul className="sub-footer contact-footer">
          <span>Email Us:</span>
          <section className="mail-box">
            <input type="email" name="" id="" />
            <button>Email</button>
          </section>
          <section className='social-media-icons'>
          <ion-icon name="logo-linkedin"></ion-icon>
          <ion-icon name="logo-instagram"></ion-icon>
          <ion-icon name="logo-github"></ion-icon>
          <ion-icon name="logo-facebook"></ion-icon>
          </section>
        </ul>
    </footer>
  )
}

export default Footer