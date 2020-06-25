import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Col, Row, Container } from "reactstrap"
import Layout from "../components/layout"
import Profile from "../components/profile"
import Testimonial from "../components/testimonial"
import "../styles/mission.css"

import kara_img from "../images/harry.jpg"

const MissionPage = () => {
  const testimonials = [
    ["Stacey", "The best gym in Chapin. I love Sozo!"],
    ["Bruce", "I love this place! Great trainers!"],
    ["Wendy", "Can't recommend Sozo enough. Amazing people all around."],
  ]

  const ranIndex1 = Math.floor(Math.random() * testimonials.length)
  let ranIndex2 = ranIndex1
  while (ranIndex2 === ranIndex1) {
    ranIndex2 = Math.floor(Math.random() * testimonials.length)
  }
  let ranIndex3 = ranIndex1
  while (ranIndex3 === ranIndex1 || ranIndex3 === ranIndex2) {
    ranIndex3 = Math.floor(Math.random() * testimonials.length)
  }

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
      <div className="mission">
        <Profile
          className="mission-profile"
          img_src={kara_img}
          bio={data.site.siteMetadata.mission_statement}
        />
        <div className="mission-testimonials">
          <Container>
            <Row>
              <Col>
                <Testimonial
                  name={testimonials[ranIndex1][0]}
                  message={testimonials[ranIndex1][1]}
                />
              </Col>
              <Col>
                <Testimonial
                  name={testimonials[ranIndex2][0]}
                  message={testimonials[ranIndex2][1]}
                />
              </Col>
              <Col>
                <Testimonial
                  name={testimonials[ranIndex3][0]}
                  message={testimonials[ranIndex3][1]}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Layout>
  )
}

export default MissionPage
