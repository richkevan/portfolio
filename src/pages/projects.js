import React from 'react'
import Layout from '../components/Layout'
import * as layout from "../components/layout.module.css"
import * as page from "../css/project.module.css"

const projects = () => {
    return (
        <Layout>
            <div className={`${layout.container}`}>
                <div className={`${layout.card}`}>
                    <h3>Portfolio Projects</h3>
                    <ul className={`${page.projectList}`}>
                        <li>
                            <a href="https://richkevan.github.io/front-end-libraries-calculator/">Calulator</a>
                            <p className={`${page.projectDescription}`}>
                                A simple calculator built using html and vanilla JS.
                            </p>
                        </li>
                        <li>
                            <a href="https://richkevan.github.io/Pixel-Art/">Pixel Art</a>
                            <p className={`${page.projectDescription}`}>
                                An 8-bit art program with canvas size and color options. Built with html, css, and vanilla JS.
                            </p>
                        </li>
                        <li>
                            <a href="https://richkevan.github.io/markdown_previewer/">Markdown Previewer</a>
                            <p className={`${page.projectDescription}`}>
                                Online tool to preview what a markdown document will look like. Built with html, css, and vanilla JS.
                            </p>
                        </li>
                        <li>
                            <a href="https://richkevan.github.io/memory-game/">Memory Game</a>
                            <p className={`${page.projectDescription}`}>
                                Fun little memory game where you match colors of cards. Features a time to track progress. Built with html, css, and vanilla JS.
                            </p>
                        </li>
                        <li>
                            <a href="https://richkevan.github.io/camping-css-art/">CSS Art & Animation</a>
                            <p className={`${page.projectDescription}`}>A little CSS art I built just for fun to explore how far I can take CSS. Built with html and css.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    )}
export default projects