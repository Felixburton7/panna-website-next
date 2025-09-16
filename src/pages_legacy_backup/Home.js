import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import './Home.css';

// Initialize Supabase client
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Key exists:', !!supabaseAnonKey);

const supabase = createClient(supabaseUrl, supabaseAnonKey);

function Home() {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleJoinWaitlist = () => {
    setShowForm(true);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      console.log('Attempting to insert email:', email);
      
      const { data, error } = await supabase
        .from('signups')
        .insert([{ email_address: email }])
        .select();

      console.log('Supabase response:', { data, error });

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      console.log('Success! Data:', data);
      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Error submitting email:', error);
      
      // More specific error messages
      if (error.code === '42P01') {
        setErrorMessage('Database table not found. Please contact support.');
      } else if (error.code === '23505') {
        setErrorMessage('This email is already registered.');
      } else if (error.message.includes('network')) {
        setErrorMessage('Network error. Please check your connection.');
      } else {
        setErrorMessage(`Something went wrong: ${error.message}`);
      }
      
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          {!showForm ? (
            // Landing View
            <div className="landing-view">
              <div className="pill-button">
                Introducing Panna &gt;
              </div>
              <h1 className="hero-title">
                The newest social sports betting app
              </h1>
              <p className="hero-description">
                Panna provides a platform to connect and play your favourite fantasy sports games
              </p>
              <button 
                className="hero-button"
                onClick={handleJoinWaitlist}
              >
                Join Waitlist
              </button>
            </div>
          ) : (
            // Form View
            <div className="form-view">
              <h1 className="hero-title">
                Thank you for your amazing response to Panna!
              </h1>
              <p className="hero-description">
                Our app is launching soon. Join our waitlist and we'll notify you as soon as access is available.
              </p>
              
              {submitStatus === 'success' ? (
                <div className="success-message">
                  <h2>You're on the list!</h2>
                  <p>We'll notify you as soon as Panna is available.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="email-form">
                  <div className="input-group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className={`email-input ${submitStatus === 'error' ? 'error' : ''}`}
                      disabled={isSubmitting}
                    />
                    <button 
                      type="submit" 
                      className="submit-button"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                    </button>
                  </div>
                  {submitStatus === 'error' && (
                    <p className="error-message">{errorMessage}</p>
                  )}
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
