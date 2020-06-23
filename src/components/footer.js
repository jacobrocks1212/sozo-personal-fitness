import React from "react"
import { graphql, useStaticQuery } from "gatsby"
// import "../styles/footer.css"

const Footer = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         author
  //       }
  //     }
  //   }
  // `)

  return (
    <footer className="footer">
      {/* <p>Created by {data.site.siteMetadata.author}, Copyright 2020</p> */}
      <p>Created by Jacob Madsen, 2020</p>
    </footer>
  )
}

export default Footer
