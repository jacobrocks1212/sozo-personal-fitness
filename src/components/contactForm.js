import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"
import "../styles/contactForm.css"

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      message: "",
    }
    this.submitEmail = this.submitEmail.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.reset = this.reset.bind(this)
  }

  submitEmail() {
    var mailtoLink = require("mailto-link")
    const name = this.state.name
    const message = this.state.message
    const email_link = mailtoLink({
      to: this.props.email,
      subject: `Sozo Personal Website Message: ${name}`,
      body: message,
    })
    this.reset()
    window.open(email_link, "_blank")
  }

  reset() {
    document.getElementById("contactForm-name").value = ""
    document.getElementById("contactForm-message").value = ""
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value })
  }

  handleMessageChange(e) {
    this.setState({ message: e.target.value })
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="contactForm-name" className="contactForm-info">
            Name
          </Label>
          <Input
            type="name"
            name="name"
            id="contactForm-name"
            onChange={this.handleNameChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="contactForm-message" className="contactForm-info">
            Message
          </Label>
          <Input
            type="textarea"
            name="text"
            id="contactForm-message"
            onChange={this.handleMessageChange}
          />
        </FormGroup>
        <Button onClick={this.submitEmail} className="contactForm-button">
          Send
        </Button>
      </Form>
    )
  }
}

export default ContactForm
