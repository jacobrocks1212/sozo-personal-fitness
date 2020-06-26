import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Col, Row, Container, Button } from "reactstrap"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Profile from "../components/profile"
import ProfileMirrored from "../components/profileMirrored"
import "../styles/trainers.css"

import kara_img from "../images/harry.jpg"
import stacey_img from "../images/stacey.jpeg"

const TrainersPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          trainer_bio_kara
          trainer_bio_stacey
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Trainers" />
      <div className="trainers">
        <Container className="trainers-profile-1-container">
          <Row>
            <Profile
              className="trainers-profile-1"
              img_src={kara_img}
              bio={data.site.siteMetadata.trainer_bio_kara}
            />
          </Row>
        </Container>
        <Container className="trainers-profile-2-container">
          <Row>
            <ProfileMirrored
              className="trainers-profile-2"
              img_src={stacey_img}
              bio={data.site.siteMetadata.trainer_bio_stacey}
            />
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default TrainersPage
