import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './LandingPage.css';

class LandingPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      logoIsSticky: true
    }
    // this.vidRef = React.createRef();
    // this.getScroll = this.getScroll.bind(this);
    // window.addEventListener('scroll', this.getScroll);
  }

  handleClick = () => {
    this.props.history.push('/services');
  };

  //this is bugged right now!!! we need to make sure/wait the ref/div is ready before trying
  // getScroll() {
  //   let ycord = window.scrollY;
  //   let ypos = ReactDOM.findDOMNode(this.vidRef.current).scrollHeight;
  //   if (ycord - ypos > 0) {
  //     // console.log('reached bottom of div')
  //     this.setState({
  //       logoIsSticky: false
  //     })
  //   } else if (ycord - ypos <= 0) {
  //     this.setState({
  //       logoIsSticky: true
  //     })
  //     // console.log(ycord - ypos)
  //   }
  // }
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.getScroll();
  //   }, 1000)
  // }

  render() {
    return (
      <div className="landing-container">
        <div className="logo-video-container" ref={this.vidRef}>
          <div className="company-name">
            <img className="company-logo" alt="Colorado Byte" src="/color_logo_with_background.svg"/>
          </div>
          <div className="video-container">
            <video autoPlay muted loop id="bgvid">
                <source src="https://s3-us-west-2.amazonaws.com/testbucketforcb/video.mp4" type="video/mp4"/>
            </video>
          </div>
        </div>
        <div className="landing-info-container">
            <div className="landing-info-text">
              <p>Colorado Byte is a Cloud Managed Service Providers (MSP) that assist companies in solving their challenges with finding talent and operating their cloud environment.</p>
              <p>We convert an organization’s capital expenditure (CAPEX) into operational expenditure (OPEX) through a rich set of expertise, tools, processes, and practices.</p>
              <p>Colorado Byte handles end-to-end operations including security, backup and recovery, monitoring, updates and cost control, allowing companies to stay focused on their business goals while optimizing cloud’s performance.
              </p>
            </div>
            <div className="landing-info-image-container">
              <img className="landing-info-image" alt="people talking" src="https://s3-us-west-2.amazonaws.com/testbucketforcb/rawpixel-com-252127-unsplash.jpg"/>
            </div>
        </div>
        <div id="services-title">
          <h2>Expertise & Services</h2>
        </div>
        <div id="services">
          <div className="button-row">
            <button className="service-button" onClick={this.handleClick}>
              Application Hosting
            </button>
            <button className="service-button" onClick={this.handleClick}>
              Office 365 Sales & Support
            </button>
            <button className="service-button" onClick={this.handleClick}>
              Cloud Migrations
            </button>
          </div>
          <div className="button-row">
            <button className="service-button" onClick={this.handleClick}>
              Core Infrastructure & Security
            </button>
            <button className="service-button" onClick={this.handleClick}>
              DevOps & Site Reliability Engineering
            </button>
            <button className="service-button" onClick={this.handleClick}>
              Unique Services
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
