import React, { Component } from 'react';
import './ServicesPage.css';

class ServicesPage extends Component {

  render() {
    return (
      <div className="services-page-container">
        <h1 id="services-title">Expertise & Services</h1>
        <div className="service-cards-container">
          <div className="service-card-row">
            <div className="service-card">
              <h2 className="service-card-title">Application Hosting</h2>
              <img className="service-card-img" alt="" src="https://s3-us-west-2.amazonaws.com/testbucketforcb/ilya-pavlov-87438-unsplash.jpg"/>
              <p className="card-text">Patching software, performing countless upgrades and backing up data is time-consuming and takes you away from other important tasks, but you can’t afford to put managing your applications on the back burner. We make application hosting services easier than ever, emphasizing high-availability and large-scale distribution.
  We’ll make sure your applications are properly installed, configured, secured and integrated to help you reduce, even eliminate, downtime. Colorado Byte gives you back the valuable time you need to stay focused on accelerating growth. You can relax, we’ve got everything under control.</p>
            </div>
            <div className="service-card">
              <h2 className="service-card-title">Office 365 Sales & Support</h2>
              <img className="service-card-img" alt="" src="https://s3-us-west-2.amazonaws.com/testbucketforcb/alexandru-bogdan-ghita-481900-unsplash.jpg"/>
              <p className="card-text">Office 365 from Colorado Byte transforms the way you work by increasing productivity outside of the office and freeing up valuable IT resources. We provide Office 365 support, migration, consulting and management for the Microsoft all-in-one suite of applications your team already depends on—now based in the cloud.
  Look to Colorado Byte for robust security, 24/7 reliability and maximized user productivity, all in a convenient, affordable subscription. We’ll make sure your employees have access to their documents whenever they need them—in the office, at home or on the go. Inspire productivity and collaboration by leveraging the power of Office 365. </p>
            </div>
            <div className="service-card">
              <h2 className="service-card-title">Cloud Migrations</h2>
              <img className="service-card-img" alt="" src="https://s3-us-west-2.amazonaws.com/testbucketforcb/benjamin-child-17946-unsplash.jpg"/>
              <p className="card-text">Reduce the costs & risks of migration with proven processes, specialized tools, and many years of migration experience.
  Cloud Migration at Colorado Byte is a multi-step process that lays the foundations required to progress a large-scale migration. Your priority is for the transition to not to disrupt your day-to-day operations. Colorado Byte makes sure continuity of your business is preserved during the migration.</p>
            </div>
          </div>
          <div className="service-card-row">
            <div className="service-card">
              <h2 className="service-card-title">Core Infrastructure & Security</h2>
              <img className="service-card-img" alt="" src="https://s3-us-west-2.amazonaws.com/testbucketforcb/imgix-391813-unsplash.jpg"/>
              <p className="card-text">Optimize and future-proof your business by moving your IT infrastructure and applications to the cloud. Agile cloud technology improves processes and IT operations and enables your organization to accelerate innovation and quickly get solutions to market. Let your business leverage cloud technology with our cloud-forward approach and the applicable knowledge of our experienced engineers.</p>
            </div>
            <div className="service-card">
              <h2 className="service-card-title">DevOps & Site Reliability Engineering</h2>
              <img className="service-card-img" alt="" src="https://s3-us-west-2.amazonaws.com/testbucketforcb/kevin-364843-unsplash.jpg"/>
              <p className="card-text">Colorado Byte has solid experience in DevOps and automating cloud infrastructure for our clients, leveraging cloud platform services to maximize the benefits provided by the public cloud.</p>
            </div>
            <div className="service-card">
              <h2 className="service-card-title">Unique Services</h2>
              <img className="service-card-img" alt="" src="https://s3-us-west-2.amazonaws.com/testbucketforcb/norbert-levajsics-186874-unsplash.jpg"/>
              <p className="card-text">We understand there are no one size fits all solutions; we have got your back. Our value proposition to you is that we emphasize smart, cost saving cloud infrastructure; automation to ensure the right things are done at the exact time they are needed; and highly-available, highly-distributed infrastructure and applications scale as needed, without the requirement to scale staff or significantly increase costs.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServicesPage;
