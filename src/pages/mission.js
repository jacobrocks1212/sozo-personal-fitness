import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import "../styles/mission.css"

const MissionPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          mission_statement
        }
      }
    }
  `)
  return (
    <Layout>
      <div className="mission"></div>
    </Layout>
  )
}

export default MissionPage
