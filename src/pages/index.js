import React from "react"
import { Row, Col, Container } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LinkWidget from "../components/linkWidget"
import "../styles/index.css"

import gym_img from "../images/gym.jpg"
import img1 from "../images/mission-pic-2.jpg"
import img2 from "../images/trainers-pic.jpg"
import img3 from "../images/contact-pic.jpg"

const IndexPage = () => (
  <Layout>
    <div className="index">
      <SEO title="Home" />
      <img className="index-img" src={gym_img} alt="gym" />
      <div className="index-caption-container">
        <p className="index-caption">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non ante
          ornare, interdum orci sit amet, euismod nunc. Mauris maximus purus eu
          semper porta.
        </p>
      </div>
      <Container className="index-widgets-container">
        <Row>
          <Col>
            <LinkWidget
              img_src={img1}
              caption="What We're All About"
              link="/mission"
            />
          </Col>
          <Col>
            <LinkWidget
              img_src={img2}
              caption="Meet The Trainers"
              link="/trainers"
            />
          </Col>
          <Col>
            <LinkWidget img_src={img3} caption="Get In Touch" link="/contact" />
          </Col>
        </Row>
      </Container>
    </div>
  </Layout>
)

export default IndexPage
