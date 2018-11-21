import React, { Component } from 'react';
import './AboutUsPage.css';

class AboutUsPage extends Component {

render() {
  return (
    <div className="about-us-container">
      <div id="doing-it-right-image">
        <img className="about-us-image" alt="man in suit" src="https://s3-us-west-2.amazonaws.com/testbucketforcb/hunters-race-408744-unsplash.jpg"/>
      </div>
      <div id="doing-it-right">
        <div id="doing-it-right-text">
          <p id="doing-title">DOING IT RIGHT</p>
          <p id="doing-text">We never compromise on our professionalism and excellence -they drive our growth.</p>
        </div>
      </div>
      <div className="about-text-container">
        <h1>Meet Colorado Byte</h1>
        <p class="empower">We empower enterprises to future-proof their business and disrupt their industry.</p>
      </div>
      <div id="entrepeneurship-container">
        <div id="entrepeneurship-text">
          <p className="section-titles" id="entrepeneurship-title">Entrepreneurship is in our DNA</p>
          <p> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </p>
          <span class="left">We help our customers to accelerate their business.
          <br/>
          Our team consists of members born and bred
          <br/>
          in the startup community with capabilities to
          <br/>
          scale large without scaling staff.</span>
          <span class="right"> Although we have extensive experience in <br/>
          large corporate IT and IT infrastructure, the<br/>
          paradigm of slow and expensive technological
          <br/>
          change runs counter to our core philosophies.</span>
        </div>
      </div>

      <div id="above-and-beyond-container">
        <div id="above-and-beyond-image-container">
          <img id="above-and-beyond-image" alt="camera parts" src="https://s3-us-west-2.amazonaws.com/testbucketforcb/vadim-sherbakov-36-unsplash.jpg"/>
        </div>
        <div className="above-and-beyond-text">
          <p id="above-title">We Go Above & Beyond</p>
          <p id="above-text">Colorado Byte was born in the cloud and has deep roots in public cloud infrastructure solutions and cloud native application services.</p>
          <p id="above-text">We go above and beyond for our customers on their cloud journey, providing a future-proof cloud solution every step of the way.</p>
        </div>
      </div>

      <div id="our-providers">
        <h2>Our Providers</h2>
        <div id="provider-image-row">
          <img className="provider-image" alt="azure logo" src="https://i1.wp.com/buildazure.com/wp-content/uploads/2017/09/Azure.png?resize=519%2C387&ssl=1"/>
          <img className="provider-image" alt="aws logo" src="https://forum.equinix.com/assets/images/logos/AWS_2x.png"/>
          <img className="provider-image" alt="google cloud logo" src="https://cloud.google.com/_static/images/cloud/icons/favicons/onecloud/apple-icon.png"/>
        </div>
        <p>In Colorado Byte, our experience in migration and implementation of infrastructures to main public cloud platforms drive our success.</p>
        <p>We are cloud-agnostic and partners Azure, AWS, and Google Cloud.</p>
      </div>
    </div>
  );
}
}

export default AboutUsPage;
