import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Col, Row, Container, Button } from "reactstrap"
import SEO from "../components/seo"
import Layout from "../components/layout"
import ContactForm from "../components/contactForm"
import "../styles/contact.css"

import fb_img from "../images/fb.png"

const ContactPage = () => {
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
    <Layout>
      <SEO title="Contact" />
      <div className="contact">
        <div className="contact-information-container">
          <h1 className="contact-information-title">Contact</h1>
          <p className="contact-information">
            {data.site.siteMetadata.phone_number}
          </p>
          <p className="contact-information">{data.site.siteMetadata.email}</p>
          <a href="https://www.facebook.com/sozofitnessgym/" target="_blank">
            <img className="contact-facebook-img" src={fb_img} />
          </a>
          <p className="contact-information">Or send us a message below!</p>
        </div>
        <div className="contact-form">
          <Container>
            <Row>
              <Col>
                <ContactForm email={data.site.siteMetadata.email} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
