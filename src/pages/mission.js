import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Col, Row, Container, Button } from "reactstrap"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Profile from "../components/profile"
import Testimonial from "../components/testimonial"
import "../styles/mission.css"

import mission_img from "../images/mission-pic.jpg"
import alt_gym_img from "../images/alt-gym.jpg"

const MissionPage = () => {
  const testimonials = [
    [
      "B. Westmorland",
      "I can't say enough great things about Sozo! They are truly a Godsend!",
    ],
    [
      "J. Bryant",
      "Love working out with Stacey. She’s very positive and I look forward to my sessions.",
    ],
    [
      "D. Smola",
      "The trainers are there to make a difference in your life. They really care. Highly recommend Sozo Personal Fitness!",
    ],
    [
      "C. Niehe",
      "One on one fitness training at it's best! Great trainers! Personalized service! Amazing results! What are you waiting for?",
    ],
    [
      "M. Morris",
      "Kara and the team are amazing! They worked hard to help my daughter get back to her favorite sports after an accident.",
    ],
    [
      "A. Dupont",
      "No quick gimmicks here. You learn how to exercise in a way that is sustainable for you in the long term.",
    ],
    [
      "C. Hanna",
      "Kara and her team are absolutely amazing! I look forward to my workouts and arrange my schedule not to miss any!",
    ],
    [
      "D. Hipp",
      "I would highly recommend for anyone that lives in the area. Very upbeat and pleasant environment!",
    ],
    [
      "A. Ward",
      "I can honestly say I’ve never been in a better gym facility with a more friendly, caring and knowledgeable staff.",
    ],
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
          alt_gym_caption
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Mission" />
      <div className="mission">
        <Profile
          className="mission-profile"
          img_src={mission_img}
          bio={data.site.siteMetadata.mission_statement}
        />
        <div className="mission-testimonials">
          <div className="mission-testimonials-title-container">
            <p className="mission-testimonials-title">
              Reviews From Our Clients
            </p>
          </div>
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
        <div className="mission-alt">
          <p className="mission-alt-title">Looking For Something Bigger?</p>
          <img className="mission-alt-img" src={alt_gym_img} />
          <Container>
            <Row>
              <Col>
                <p className="mission-alt-caption">
                  {data.site.siteMetadata.alt_gym_caption}
                </p>
              </Col>
            </Row>
          </Container>
          <Button
            href="https://www.sozofitnessgym.com/"
            target="_blank"
            className="mission-alt-subtitle-container"
          >
            <p className="mission-alt-subtitle">Visit our other location</p>
          </Button>
        </div>
      </div>
    </Layout>
  )
}

export default MissionPage
