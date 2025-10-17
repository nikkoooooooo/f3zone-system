import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/image/logo.jpeg";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const home = () => {
    navigate('/');
  }



  const links = [
    { name: 'Home', to: '/' },
    { name: 'Service', to: '/#service' },
    { name: 'Treats', to: '/treats' },
    { name: 'Rates', to: '/#pricing' },
    { name: 'Blog', to: '/blog' },
    { name: 'Contact', to: '/#contact' },
    { name: 'About', to: '/#about' },
  ];

  return (
    <div className='flex items-center justify-between px-10 py-5 md:bg-black/50 fixed top-0 left-0 w-full z-50'>
      
      {/* Logo */}
      <div className='flex items-center gap-5 w-96 cursor-pointer' onClick={home}>
        <img src={logo} alt="Logo" className='w-16 h-16'/>
        <h1 className='hidden sm:flex text-yellow-400 text-3xl font-semibold'>F3 Sports Center</h1>
      </div>

      {/* Desktop menu */}
      <ul className='hidden lg:flex items-center gap-5'>
        {links.map((link, i) => (
          <li key={i} className='hover:bg-yellow-500 font-semibold px-3 rounded-md'>
            <HashLink smooth to={link.to}>{link.name}</HashLink>
          </li>
        ))}
      </ul>

      {/* Mobile burger */}
      <div className="lg:hidden relative bg-black/70">
        <button
        // so in initial icon first the icon is close so we set the icon to false in useState and then
        // the ternary operation will show the hamburger icon since the open usesatte is in false
        // but in button if we click it, the initial value will be flipped so the open will be true 
        // and the close icon and menu will show
          onClick={() => setOpen(!open)}
          className="btn btn-ghost btn-circle"
        >
          {open ? (
            // Close icon
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512" className="fill-current">
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>

            
          ) : (
            // Hamburger icon
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512" className="fill-current">
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          )}
        </button>

        {/* Mobile menu */}
        {open && (
          <ul className="absolute right-0 mt-2 w-48 bg-black/90 text-white rounded-lg shadow-lg flex flex-col">
            {links.map((link, i) => (
              <li key={i} className="px-4 py-2 hover:bg-yellow-500 rounded-md" onClick={() => setOpen(false)}>
                <HashLink smooth to={link.to}>{link.name}</HashLink>
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  )
}

export default Navbar;
