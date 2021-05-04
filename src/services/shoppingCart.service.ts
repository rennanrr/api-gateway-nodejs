import express from 'express';
import httpProxy from 'express-http-proxy';
import auth from '../middlewares/auth';
require('dotenv').config();


const serviceProxy = httpProxy(process.env.CART_SERVICE_URL);
const router = express.Router();

router
  .route('/cart')

  // GET on route /v1/cart - Get list of all products on the cart
  .get(serviceProxy)

  // POST on route /v1/alert - Insert a product on cart
  .post(serviceProxy)

  // DELETE on route /v1/alert - Remove a product of a cart
  .delete(serviceProxy);
  
export default router;