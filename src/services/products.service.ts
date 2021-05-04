import express from 'express';
import httpProxy from 'express-http-proxy';
import auth from '../middlewares/auth';
require('dotenv').config();


const serviceProxy = httpProxy(process.env.PRODUCT_SERVICE_URL);
const router = express.Router();

router
  .route('/products')

  // GET on route /v1/products - Get list of all products
  .get(serviceProxy);

  // POST on route /v1/products - Create new Product in mongoDB
  //.post(auth,  serviceProxy);
export default router;