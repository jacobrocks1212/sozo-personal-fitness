import React from "react"
import { Link } from "gatsby"
import "../styles/linkWidget.css"

const LinkWidget = props => {
  return (
    <div className="linkWidget">
      <Link to={props.link}>
        <img className="linkWidget-img" src={props.img_src} />
      </Link>
      <Link to={props.link} className="linkWidget-link">
        <p className="linkWidget-caption">{props.caption}</p>
      </Link>
    </div>
  )
}

export default LinkWidget
