import React from 'react'
import * as layout from './layout.module.css'
import * as page from '../css/footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
    return (
        <footer>
            <h5 className={`${page.copyright}`}><FontAwesomeIcon icon={"copyright"}/>2021 Rich Kevan</h5>
        </footer>
    )
}

export default Footer