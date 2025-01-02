"use client"
import React, { useState } from 'react';

const FooterNewsLater = () => {
  // State for loading, error, and success messages
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handler function for form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the email value from the form
    const email = event.target.email.value;

    if (!email) {
      setError('Please enter a valid email address.');
      return;
    }

    // Reset error and success messages
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      // API request to subscribe to the newsletter
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Subscription successful! Thank you for subscribing.');
        event.target.reset(); // Reset the form input
      } else {
        setError(data.message || 'Subscription failed. Please try again later.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    }

    setLoading(false);
  };

  return (
    <div className="footer-newsletter">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <h4>Our Newsletter</h4>
            <p>
              Stay informed with Levizr's newsletter service. Get the latest updates, news, and offers
              delivered straight to your inbox!
            </p>
          </div>
          <div className="col-lg-6">
            <form onSubmit={handleSubmit} method="post">
              <input
                type="email"
                placeholder="Enter your Email here...."
                name="email"
                className="form-control"
              />
              <input type="submit" value="Subscribe" disabled={loading} className="btn btn-primary" />
            </form>
            {/* Display loading, error, or success messages */}
            {loading && <p className="text-info">Subscribing...</p>}
            {error && <p className="text-danger">{error}</p>}
            {success && <p className="text-success">{success}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterNewsLater;
