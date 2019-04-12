const router = require('express').Router();
const stripe = require("stripe")("sk_test_DzL6Vvpyp04bTZoNjgwmeRM100Te8k6DIM");

// Stripe
// -- /secure/charge
router.post("/charge", async (req, res) => {
    try {
      let {status} = await stripe.charges.create({
        amount: 200,
        currency: "usd",
        description: "An example charge",
        source: req.body
      });
      res.json({status});
    } catch (err) {
      res.status(500).end();
    }
  });


// const stripe = require("stripe")(process.env.STRIPE_SK);
// const router = require('express').Router();

// const stripeChargeCallback = res => (stripeErr, stripeRes) => {
//   if (stripeErr) {
//     res.status(500).send({ error: stripeErr });
//   } else {
//     res.status(200).send({ success: stripeRes });
//   }
// };

// router.get("/", (req, res) => {
//   res.send({
//     message: "Hello Stripe checkout server!",
//     timestamp: new Date().toISOString()
//   });
// });

// router.post("/", (req, res) => {
//   const body = {
//     source: req.body.token.id,
//     amount: req.body.amount,
//     currency: "usd"
//   };
//   stripe.charges.create(body, stripeChargeCallback(res));
// });



module.exports = router;