/**
 * Default config for all environment types
 * @type {{db: string, apiPort: number}}
 */
 const defaultConfig = {
  apiPort: 3000
};
  
/**
 * Enviroment specific configuration
 * @type {{prod: {}, dev: {}, test: {apiPort: number}}}
 */
const envConfig = {
  prod: {
    apiPort: process.env.PORT,
  },
  qas: {
    apiPort: process.env.PORT,
  },
  test: {
    apiPort: process.env.PORT
  },
  dev: {},
};

const serviceConfig = {
  prod: {
    productsService: "http://localhost:3001",
    shoppingCartService: "http://localhost:3002",
  },
  qas: {
    productsService: "http://localhost:3001",
    shoppingCartService: "http://localhost:3002",
  },
  dev: {
    productsService: "http://localhost:3001",
    shoppingCartService: "http://localhost:3002",
  },
  test: {
    productsService: "http://localhost:3001",
    shoppingCartService: "http://localhost:3002",
  }
}

/**
 * Loads config based on the current environment
 * @returns {*}
 */
function loadConfig() {
  const env = process.env.NODE_ENV || 'dev';

  if (!envConfig[env]) {
    throw new Error(
      `Environment config for environment '${env}' not found. process.env.NODE_ENV must be one of '${Object.keys(
        envConfig
      )}'`
    );
  }
  
  console.log('[INFO] config loaded for environment: ', env);

  // merge default config with environment specific config
  return Object.assign({}, defaultConfig, envConfig[env], serviceConfig[env]);
}

export default loadConfig();