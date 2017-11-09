/**
 * This file is used if you wish to use this starter as a standard
 * server like Apache or Nginx.
 * The example of code below can be used to serve templates when user accesses
 * the URL of your domain that are listed before the 'module.exports' assignment.
 *
 * @author Maxime Flament
 */

let express = require('express');
let join = require('path').join;

let router = new express.Router();

function home (req, res) {
  res.send('Home')
}

function team (req, res) {
  res.send('Team')
}

router.get('/', home);
router.get('/team', team);

module.exports = router;
