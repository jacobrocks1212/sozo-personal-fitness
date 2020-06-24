import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import "../styles/layout.css"

const Layout = props => {
  return (
    <div className="layout">
      <div className="layout-content">
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
