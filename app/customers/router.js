/**
 * Standard router in a REST application.
 * This file declares asynchronous behaviors,
 * that will be triggered when a user access the URL corresponding to this
 * very file in the index.js file.
 * This file uses a model file in order to dissociate the server behavior
 * with users, and the server logic.
 *
 * DON'T FORGET THE ASYNC KEYWORD WHEN DECLARING ROUTE HANDLING
 * FUNCTIONS OR PEOPLE TRYING TO ACCESS THE CORRESPONDING ROUTE WILL MAKE
 * THE SERVER CRASH/NOT GET A RESPONSE FROM THE SERVER
 *
 * @author Maxime Flament
 */

let customer = require('./customer-model');
let log = require('bole')('customers/router');
let router = require('express').Router();

/**
 * This function retrive the list of user from the model and send it in JSON to the user
 *
 * @param {express.Request}   req   Express HTTP request
 * @param {express.Response}  res   Express HTTP response
 */
const getCustomers = async (req, res) => {
  let customers = await customer.findAll();
  res.json(customers)
};

/**
 * This function create a customer on what the user send in the body of the request
 *
 * @param {express.Request}   req   Express HTTP request
 * @param {express.Response}  res   Express HTTP response
 */
const createCustomer = (req, res) => {
  customer.addCustomer(req.body);
  res.status(201).send()
};

/**
 * Routes handle in the file
 */
router.post('/customers', createCustomer);
router.get('/customers', getCustomers);

module.exports = router;
