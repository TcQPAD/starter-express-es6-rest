/**
 * You should put the common errors behaviors (404, 403, 402, 401, 400, 500, etc...)
 * in here, in order to import this file through the application, and make
 * the server have the same behavior when an error occurs.
 *
 * @author Maxime Flament
 */

const notFound = (req, res) => {
  res.status(404)
    .send('Not found')
};

module.exports = notFound;
