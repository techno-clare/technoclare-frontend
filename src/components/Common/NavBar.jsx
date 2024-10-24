import React from 'react'
import { Navbarlinks } from '../../data/Navbar-Links'
import logo from '../../assets/Logo.svg'
import HighlightedText from '../HomePage.jsx/HighlightedText'
import { Link, matchPath, useLocation } from 'react-router-dom'
const NavBar = () => {

  const location = useLocation();
  const matchRoute = (Route) => {
    return matchPath({path:Route}, location.pathname);
  }

  return (
    <div className="w-full h-20">
        <div className="w-10/12 h-full mx-auto flex justify-between items-center">
          <Link to="/">
            <div className="flex items-center">
              <img src={logo} alt='TechnoClare' width={50}/>
              <div className='ml-3'>
                <HighlightedText text={"TECHNO"} color={"text-palewhite-5"} />
                <HighlightedText text={"CLARE"} color={"text-cyan-5"} />
              </div>
            </div>
          </Link> 
          <nav>
            <ul className="flex gap-4">
              {
                Navbarlinks.map((link,index) => (
                    <li key={index}>
                      <Link to={link.path}>
                        <p className={`${ matchRoute(link?.path) ? "text-palewhite-5" : "text-white"} font-bold text-sm`}>{link.navlinks}</p>
                      </Link>
                    </li>
                ))
              }
            </ul>
          </nav>
        </div>
    </div>
  )
}

export default NavBar