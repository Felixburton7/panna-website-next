import React from 'react';
import './PlaceholderPage.css';

function ContactUs() {
  return (
    <div className="placeholder-page">
      <div className="placeholder-content">
        <h1>Contact Us</h1>
        
        <section>
          <p>
            We'd love to hear from you! Whether you have questions about Panna, need support, or want to share feedback, our team is here to help.
          </p>
          
          <div className="contact-methods">
            <div className="contact-item">
              <h3>General Inquiries</h3>
              <p>For general questions about Panna, partnerships, or media inquiries:</p>
              <p><strong>Email:</strong> <a href="mailto:info@panna-app.uk" className="contact-link">info@panna-app.uk</a></p>
            </div>
            
            <div className="contact-item">
              <h3>Customer Support</h3>
              <p>Need help with your account, games, or technical issues?</p>
              <p><strong>Email:</strong> <a href="mailto:support@panna-app.uk" className="contact-link">support@panna-app.uk</a></p>
            </div>
          </div>
          
          <div className="response-time">
            <p>
              <strong>Response Time:</strong> We aim to respond to all inquiries within 24 hours during business days.
            </p>
          </div>
          
          <p className="closing-statement">
            Thank you for choosing Panna. We're excited to build the future of social sports betting together!
          </p>
        </section>
      </div>
    </div>
  );
}

export default ContactUs;
