import React from 'react'
import { Link } from "react-router-dom"
import logo from "../assets/image/logo.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <>
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
            <aside className="grid-flow-col items-center">
                <img src={logo} alt="" className='w-16 h-16'/>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <div className='flex gap-20'>
                <div>
                    <Link to="/privacy">Privacy Policy</Link>
                </div>

                 <div>
                    <Link to="/terms">Terms & Conditions</Link>
                </div>

                 <div>
                    <Link to="/developers">View Developers</Link>
                </div>
            </div>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a>
                    <FontAwesomeIcon 
                        icon={faFacebook}
                        className='h-12 w-12 text-yellow-500'
                    />
                </a>
                <a>
                    <FontAwesomeIcon 
                        icon={faInstagram}
                        className='h-12 w-12 text-yellow-500'
                    />
                </a>
            </nav>
        </footer>
    </>
  )
}

export default Footer