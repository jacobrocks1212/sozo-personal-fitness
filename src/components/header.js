import React, { useState } from "react"
import { Link } from "gatsby"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"
import "../styles/header.css"

const Header = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>
          <Link to="/" className="header-link">
            Jacob's Portfolio
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/" className="header-link">
                  Home
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/mission" className="header-link">
                  Mission
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/trainers" className="header-link">
                  Trainers
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/contact" className="header-link">
                  Contact
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header
