import React from "react"
import "../styles/testimonial.css"

import bubble from "../images/text-bubble.png"

const Testimonial = props => {
  return (
    <div className="testimonial">
      <img className="testimonial-img" src={bubble} />
      <div className="testimonial-text-container">
        <p className="testimonial-message">{props.message}</p>
        <p className="testimonial-name">-{props.name}</p>
      </div>
    </div>
  )
}

export default Testimonial
