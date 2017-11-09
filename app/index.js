/**
 * This is the "main file" of the project.
 * This is the file where you will declare the routes of
 * your REST application, protect routes with middleware,
 * etc...
 *
 * @author Maxime Flament
 */

let express = require('express');
let bodyParser = require('body-parser');

let app = express();

// Body parser to be able to read the json in th request
app.use(bodyParser.json());

// Load the routes
app.use(require('./site/router'));
app.use('/api', require('./customers/router'));
// Repeat the above line for additional model areas

// FINALLY, use any error handlers
app.use(require('./errors/not-found'));

// Export the app instance for unit testing via supertest
module.exports = app;
