import React from 'react'
import Layout from '../components/Layout'
import * as page from "../css/contact.module.css"
import * as layout from "../components/layout.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" 



const Contact = () => {

    return (
        <Layout>
        <div  className={layout.container}>
            <div className={`${layout.card} ${layout.sizeX1} ${layout.columnCenter}`}>
                <h3>Follow Me</h3>
                <div className={`${layout.rowCenter}`}>
                    <div className={`${layout.columnCenter} ${page.socialColumn}`}>
                        <a href="https://www.aedin.com/in/rich-kevan/" target="new" aria-label="linkedin"><div className={`${page.linkedin} ${page.social}`}><FontAwesomeIcon icon={['fab','linkedin']} className="fa-4x"/><h5>richkevan</h5></div></a>
                        <a href="https://github.com/richkevan" target="new" aria-label="github"><div className={`${page.github} ${page.social}`}><FontAwesomeIcon icon={['fab','github-square']} className="fa-4x"/><h5>richkevan</h5></div></a>
                        <a href="https://github.com/richkevan" target="new" aria-label="stack-overflow"><div className={`${page.stackOverflow} ${page.social}`}><FontAwesomeIcon icon={['fab', 'stack-overflow']} className="fa-4x"/><h5>@richkevan</h5></div></a>                        
                        <a href="https://github.com/richkevan" target="new" aria-label="twitter"><div className={`${page.twitter} ${page.social}`}><FontAwesomeIcon icon={['fab', 'twitter-square']} className="fa-4x"/><h5>@richkevan</h5></div></a>
                    </div>
                    <div className={`${layout.columnCenter}  ${page.socialColumn}`}>
                        <a href="https://github.com/richkevan" target="new" aria-label="instagram"><div className={`${page.instagram} ${page.social}`}><FontAwesomeIcon icon={['fab', 'instagram-square']} className="fa-4x"/><h5>@richkevan</h5></div></a>
                        <a href="https://github.com/richkevan" target="new" aria-label="facebook"><div className={`${page.facebook} ${page.social}`}><FontAwesomeIcon icon={['fab', 'facebook-square']} className="fa-4x"/><h5>richkevan</h5></div></a>
                        <a href="https://github.com/richkevan" target="new" aria-label="facebook-messenger"><div className={`${page.fbmessenger} ${page.social}`}><FontAwesomeIcon icon={['fab','facebook-messenger']} className="fa-4x"/><h5>richkevan</h5></div></a>
                        <a href="https://github.com/richkevan" target="new" aria-label="twitch"><div className={`${page.twitch} ${page.social}`}><FontAwesomeIcon icon={['fab','twitch']} className="fa-4x"/><h5>richkevan</h5></div></a>
                    </div>
                </div>
            </div>
            <div className={`${layout.sizeX3} ${layout.card}`}>
                <h3>Contact Me</h3>
               <form>
                    <label htmlFor='name'>
                        Name
                        <input type='text' name='name'/>
                    </label>
                    <label htmlFor='number' >
                        Number
                        <input type='text' name='number'/>
                    </label>
                    <label htmlFor='email'>
                       Email
                        <input type='email' name='email'/>
                    </label>
                    <label htmlFor='description'>
                       Message
                       <textarea name='description' rows='10' aria-label="Message"/>
                    </label>
                </form>
            </div>
        </div>  
        </Layout>
    )
}

export default Contact
