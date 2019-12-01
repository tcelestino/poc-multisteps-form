require('dotenv').config();

module.exports = {
  serverRuntimeConfig: {
    API_HOST: process.env.API_HOST
  },
  publicRuntimeConfig: {
    STATES: process.env.STATES,
    CITIES: process.env.CITIES
  }
}
