/* eslint-disable */
// for a full working demo of Netlify Identity + Functions, see https://netlify-gotrue-in-react.netlify.com/
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async function(event, context, callback) {

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      name: 'T-shirt',
      description: 'Developer Office Hours t-shirt',
      images: ['https://cdn.shopify.com/s/files/1/0051/4802/products/I__octocat__Code_2.0_Mock_GithubShop-M1_1024x1024.jpg?v=1563297789'],
      amount: 2500,
      currency: 'usd',
      quantity: 1,
    }],
    success_url: 'https://office-hours-checkout.netlify.app/success?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'https://office-hours-checkout.netlify.app/cancel',
  });

  // callback({sessionId: session.id});
  return {
    statusCode: 200,
    body: JSON.stringify({
      sessionId: session.id
    })
  }
}
