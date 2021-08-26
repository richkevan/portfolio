import React, {useState} from 'react'
import * as layout from './layout.module.css'
import * as page from '../css/navigation.module.css'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCampground, faCopyright, faBars } from "@fortawesome/free-solid-svg-icons"
import { faShovel, faFireSmoke } from "@fortawesome/pro-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


library.add(fab, faBars, faCopyright, faCampground, faShovel, faFireSmoke)

const Navbar = () => {

  const data = useStaticQuery(graphql`
      {
        site {
          siteMetadata {
            menuLinks {
              name
              link
              icon
            }
          }
        }
      }
    `)

  const navLinks = data.site.siteMetadata.menuLinks
  
  const [visibility,setVisibiility] = useState(true)
  const toggleMenu = () => {
    let menuItems = document.getElementsByClassName(page.navLink)
    for (let x=0;x<menuItems.length;x++) {
      if (visibility == true) {
        menuItems[x].style.display = "block"
        setVisibiility(!visibility)
      }
      else
        menuItems[x].style.display = "none"
        setVisibiility(!visibility)
    }
  }

  return (
        <nav className={`${page.navigation}`}>
          <div id={page.menuToggle} onClick={toggleMenu}><FontAwesomeIcon icon={"bars"} className={"fa-2x"}/></div>
            <ul className={page.navList}>
              {navLinks.map(items => {
                return(
                  <Link className={page.navLink} to={items.link} key={items.name}>
                    <li key={items.icon}>
                      <FontAwesomeIcon icon={items.icon}/> {items.name}
                    </li>
                  </Link> 
                )
              })}
            </ul>
        </nav>
    )
}

export default Navbar
