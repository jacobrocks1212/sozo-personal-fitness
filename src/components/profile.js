import React from "react"
import { Col, Row, Container } from "reactstrap"
import "../styles/profile.css"

const Profile = props => {
  return (
    <div className="profile">
      <Container>
        <Row>
          <Col className="profile-bio-container">
            <p className="profile-bio">{props.bio}</p>
          </Col>
          <Col className="profile-img-container">
            <img src={props.img_src} className="profile-img" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Profile
