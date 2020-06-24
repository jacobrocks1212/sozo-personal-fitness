import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../styles/footer.css"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          phone_number
          email
          address
        }
      }
    }
  `)

  return (
    <footer className="footer">
      <p className="footer-text">{data.site.siteMetadata.phone_number}</p>
      <p className="footer-text">{data.site.siteMetadata.email}</p>
      <p className="footer-text">{data.site.siteMetadata.address}</p>
    </footer>
  )
}

export default Footer
