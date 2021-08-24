import React from 'react'
import Layout from '../components/Layout'
import * as layout from "../components/layout.module.css"
import * as page from "../css/index.module.css"

const projects = () => {
    return (
        <Layout>
            <div className={`${layout.container}`}>
                <div className={`${layout.card}`}>
                    <h3>Basic Projects</h3>
                    <a href="https://richkevan.github.io/front-end-libraries-calculator/">Calulator</a>
                    <a href="https://richkevan.github.io/Pixel-Art/">Pixel Art</a>
                    <a href="https://richkevan.github.io/markdown_previewer/">Markdown Previewer</a>
                    <a href="https://richkevan.github.io/memory-game/">Memory Game</a>
                    <a href="https://richkevan.github.io/camping-css-art/">CSS Art & Animation</a>
                </div>
            </div>
        </Layout>
    )}
export default projects