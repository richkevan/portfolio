import * as React from "react";
import * as layout from "../components/layout.module.css"
import * as page from "../css/error404.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCampground } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";


// markup
const NotFoundPage = () => {
  return (
    <div className={`${page.error}`}>
      <div className={`${page.modal}`}>
        <title>Not found</title>
      <h1>You appear to be lost,<br /> 
      click here to find your way home.</h1><br />
      <Link to="/"><FontAwesomeIcon icon={faCampground} className="fa-9x"/></Link>
      </div>
    </div>
  )
}

export default NotFoundPage
