import axios from 'axios';
import config from '../config/config';
import { API_V1 } from '../utils/constants';

const authentication = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (!token) return res.status(401).send({ message: 'No token provided.' });

    const auth = {status:200} //await axios.post(config.auth_service + API_V1 + '/auth/validate', { token: token });

    if (!auth.status) {
      res.status(400).send({ message: 'Failed to authenticate token.' });
    } else {
      next();
    }

  } catch (error) {
    console.log(error);
    res.status(400).send({ message: 'Failed to authenticate token.' });
  }
};

export default authentication;