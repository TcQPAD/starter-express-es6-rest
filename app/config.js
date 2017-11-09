/**
 * This is the configuration file of the project.
 * This is the file where you can set up environment variable,
 * in order to hide them elsewhere in the application,
 * for example: secrets for JWT authentication, your database
 * ports and IP, etc....
 *
 * @author Maxime Flament
 */

let config = module.exports;
let PRODUCTION = process.env.NODE_ENV === 'production';

config.express = {
  port: process.env.EXPRESS_PORT || 3000,
  ip: '127.0.0.1'
};

config.mongodb = {
  port: process.env.MONGODB_PORT || 27017,
  host: process.env.MONGODB_HOST || 'localhost'
};
if (PRODUCTION) {
  // for example
  config.express.ip = '0.0.0.0'
}
// config.db same deal
// config.email etc
// config.log
