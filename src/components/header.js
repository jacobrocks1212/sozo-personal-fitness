import React, { useState } from "react"
import { Link } from "gatsby"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  // NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row,
  Container,
} from "reactstrap"
import logo from "../images/sozo-logo.png"
import "../styles/header.css"

const Header = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className="header">
      <div className="header-top">
        <Container className="header-container">
          <Row className="header-row">
            <Link to="/">
              <img className="header-img" src={logo} alt="logo" />
            </Link>
            <h1 className="header-title">Personal Fitness</h1>
          </Row>
        </Container>
      </div>
      <div className="header-navbar-container">
        <Navbar light expand="md" className="header-navbar">
          <NavbarToggler onClick={toggle} />
          <Collapse className="header-navbar-collapse" isOpen={isOpen} navbar>
            {/* ml-auto */}
            <Nav navbar>
              <NavItem>
                <NavLink>
                  <Link
                    to="/"
                    className="header-link"
                    activeClassName="header-link-active"
                  >
                    Home
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link
                    to="/mission"
                    className="header-link"
                    activeClassName="header-link-active"
                  >
                    Mission
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link
                    to="/trainers"
                    className="header-link"
                    activeClassName="header-link-active"
                  >
                    Trainers
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link
                    to="/contact"
                    className="header-link"
                    activeClassName="header-link-active"
                  >
                    Contact
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  )
}

export default Header
