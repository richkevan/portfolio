import React from "react"
import Layout from "../components/Layout"
import * as layout from "../components/layout.module.css"


// markup
const IndexPage = () => {
  return (
    <Layout>
      <title>Rich Kevan</title>
      <div className={`${layout.container}`}>
        <div className={`${layout.card} ${layout.sizeX1}`}>
          <h3>About Me</h3>
          <p>
            Hi I'm Rich,<br/>
          I'm a full stack engineer from the Bay Area.
          </p>
          <p>
          I love living in California because of the
          diverse outdoor offerings available. My
          family and I love to camp, hike, paddleboard,
          and explore everything California has to offer.
          </p>
          <p>
            I was raised just north of the Oregon California
            border. Childhood memories of evergreen forests
            and mountains planted the seeds for my outdoor 
            passion. 
          </p>
          </div>
        <div className={`${layout.card} ${layout.sizeX2}`}>
          <h3>Current Projects</h3>
          <h5>Wodabunga</h5>
          <p>A fitness tracking app and dashboard in the process of being built. It uses a rest API to provide exercises and MongoDB to save metrics for body and fitness</p>
          <h5>ZoomtoVideo</h5>
          <p>A microservice to send zoom recordings from zoom cloud to long term video storage</p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
