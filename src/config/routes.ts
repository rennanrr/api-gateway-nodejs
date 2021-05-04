import productsService from '../services/products.service';
import shoppingCartService from '../services/shoppingCart.service';

import { API_V1 } from '../utils/constants';

export default app => {
  app.get(API_V1, (req, res) => {
    res.json({ version:  process.env.npm_package_version});
  });

  app.use(API_V1, productsService);
  app.use(API_V1, shoppingCartService);
}