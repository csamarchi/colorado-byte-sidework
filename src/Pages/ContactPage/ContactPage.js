import React, { Component } from 'react';
import './ContactPage.css';

export default class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userEmail: '',
      message: '',
      formSubmitted: false
    };
  }

  handleUserChange = this.handleUserChange.bind(this);
  handleEmailChange = this.handleEmailChange.bind(this);
  handleMessageChange = this.handleMessageChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  handleUserChange(event) {
    this.setState({
      userName: event.target.value
    });
  }

  handleEmailChange(event) {
    this.setState({
      userEmail: event.target.value
    });
  }

  handleMessageChange(event) {
    this.setState({
      message: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.sendMessage(
      'contact_form',
      this.state.userEmail,
      'zte.zachary@gmail.com',
      this.state.message,
      this.state.userName
    );

    this.setState({
      userName: '',
      userEmail: '',
      message: '',
      formSubmitted: true
    })
  }

  sendMessage(templateId, userEmail, receiverEmail, message, userName) {
    window.emailjs
      .send('mailgun', templateId, {
        userEmail,
        receiverEmail,
        message,
        userName
      })
      .then(res => {
        this.setState({
          formEmailSent: true
        });
      })
      .catch(err => console.error('Failed to send message. Error: ', err))
  }

  render() {
    return (
      <div className="contact-page-container">
        <div>
          <div className="contact-page-image-text">
            <div id="image-text">
              <p>Ready to get to Work?</p>
            </div>
          </div>
          <div className="contact-page-image-container">
            <img className="contact-page-image" alt="Hands typing" src="https://s3-us-west-2.amazonaws.com/testbucketforcb/cropped-glenn-carstens-peters-203007-unsplash.jpg" />
          </div>
          <div className="test">
            <br/>
            <h2> Get in touch! </h2>
          </div>
        </div>
        <div className="contact-page-body">
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={this.handleSubmit}>
              <p>Name*</p>
              <input
                type="text"
                name="name"
                onChange={this.handleUserChange}
                required
                value={this.state.userName}>
              </input>
              <p>Email*</p>
              <input
                type="email"
                name="email"
                onChange={this.handleEmailChange}
                required
                value={this.state.userEmail}>
              </input>
              <p>Message</p>
              <textarea
                rows="5"
                cols="50"
                onChange={this.handleMessageChange}
                value={this.state.message}>
              </textarea>
              <button className="send-button">Send</button>
            </form>
            <br />
            {this.state.formSubmitted ? 'Message sent!' : null}
          </div>
          <div className="contact-info-container">

            <div className="contact-row">
              <div className="contact-info">
                <p className="department-title">General Inquiry</p>
                <a href="tel:+13037475474">(303) 747-5474</a>
                <br/>
                <a href="mailto:info@coloradobyte.com">info@coloradobyte.com</a>
              </div>
              <div className="contact-info">
                <p className="department-title">Sales</p>
                <a href="tel:+13037475474">(303) 747-5474</a>
                <br/>
                <a href="mailto:sales@coloradobyte.com">sales@coloradobyte.com</a>
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-info">
                <p className="department-title">Administrative</p>
                <a href="tel:+13037475474">(303) 747-5474</a>
                <br/>
                <a href="mailto:contact@coloradobyte.com">contact@coloradobyte.com</a>
              </div>
              <div className="contact-info">
                <p className="department-title">Support Services</p>
                <a href="tel:+13037475474">(303) 747-5474</a>
                <br/>
                <a href="mailto:support@coloradobyte.com">support@coloradobyte.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
