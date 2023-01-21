const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const { updateToken, checkToken } = require('./controllers/auth');
const app = express();
const cors = require('cors');
const fs = require('fs');
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);
//routers
const userRouter = require('./Routes/user');
const productRouter = require('./Routes/product');
const { router } = require('./Routes/chat');
const chatRouter = router;
//admin page
const adminPage = fs.readFileSync(__dirname + '/interface/index.html', 'utf-8');

/**
 * App
 */
app.use(cors());
app.options('*', cors());

app.use(express.text({ limit: '26mb' }));

app.post('/create-checkout-session', async (req, res) => {
  try {
    const { name, priceInCents, quantity, description, images } = JSON.parse(
      req.body
    ).item;
    console.log(images);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      success_url: 'http://localhost:3000/thanks',
      cancel_url: 'http://localhost:3000/products',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name,
              description,
              images,
            },
            unit_amount: priceInCents,
          },
          quantity,
        },
      ],
    });
    res.status(200).json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/token', async (req, res) => {
  const userToken = req.get('token');
  if (userToken == undefined) {
    return res.status(202).send({ success: false, msg: 'invalid' });
  }
  var updatedToken = await updateToken(userToken);
  res.status(200).send({ success: true, token: updatedToken });
});

app.use('/user', userRouter);
//these require authentication at the given time
app.use('/', async (req, res, next) => {
  if (
    false &&
    (!(await checkToken(req.get('token'))) || req.get('token') == undefined)
  ) {
    return res.send({ success: false, msg: 'invalid/no token' });
  }

  next();
});
app.use('/product', productRouter);
app.use('/chat', chatRouter);

/*app.get('/', (req, res) => {
  if (req.hostname != 'localhost')
    return res.status(404).send({ success: false, msg: 'Access denied' });
  res.send(adminPage);
});*/
// console.log(process.env.PORT);
const server = app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
require('./middleware/chat')(server);
