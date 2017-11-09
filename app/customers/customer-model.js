/**
 * A simple model file that represents a part of the server
 * logic.
 * You should only put the logic of the application in here,
 * like data manipulation, Database transactions, etc....
 *
 * @author Maxime Flament
 */


"use strict"; // DON'T FORGET THIS IN THE MODEL FILES,
              // OR YOU WON'T BE ABLE TO DECLARE CONST FUNCTIONS

/**
 * Hard coded list of user to mock a DB
 */
let customers = [
  { "id": 1, "name": "Jane Doe" },
  { "id": 2, "name": "John Doe" }
];

/**
 * This function simulate the fact we use a DB by being asynchronous. Should be replace by a real call to a DB.
 */
const findAll = () =>  {
  return new Promise(resolve => {
    setImmediate(() => {
      resolve(customers)
    })
  })
};

/**
 * This function add the customer to the hard coded list of customers
 *
 * @param {json} customer JSON sent to add to the list of user
 */
const addCustomer = customer => {
  customers.push(customer)
};

exports.findAll = findAll;
exports.addCustomer = addCustomer;
