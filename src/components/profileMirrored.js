import React from "react"
import { Col, Row, Container } from "reactstrap"
import "../styles/profileMirrored.css"

const ProfileMirrored = props => {
  return (
    <div className="profileMirrored">
      <Container>
        <Row>
          <Col className="profileMirrored-img-container">
            <img src={props.img_src} className="profileMirrored-img" />
          </Col>
          <Col className="profileMirrored-bio-container">
            <p className="profileMirrored-bio">{props.bio}</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProfileMirrored
