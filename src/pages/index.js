import React from "react"
import { Link } from "gatsby"
import { loadStripe } from '@stripe/stripe-js';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const stripePromise = loadStripe('pk_test_VTKHXHQEArySUurohsJFLHLQ00RQTCJv5N');

const fetchCheckoutSession = async () => {
  const response = await fetch('/.netlify/functions/create-checkout');
  const json = await response.json();
  return json;
}

const IndexPage = () => {
  const handleClick = async (event) => {
    // Call your backend to create the Checkout session.
    const { sessionId } = await fetchCheckoutSession();
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  };
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi Developers</h1>
      <p>Welcome to your template Office Hours site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <div>
        <input type="button" value="Checkout Now" onClick={handleClick}>
        </input>
      </div>
      <Link to="/page-2/">Go to page 2</Link>
      <Link to="/success/">Go to success page</Link>
      <Link to="/cancel/">Go to cancel page</Link>
    </Layout>
  )
}

export default IndexPage
