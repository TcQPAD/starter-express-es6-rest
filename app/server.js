#!/usr/bin/env node

/**
 * This is the entry file of the project.
 * Here, we instantiate an express object,
 * that will set-up a basic server for us.
 *
 * YOU SHOULD NEVER EDIT THIS FILE, UNLESS YOU'RE 100% SURE
 * WHAT YOU'RE DOING
 *
 * @author Maxime Flament
 */

let app = require('./index');
let config = require('./config');

// logger
let bole = require('bole');

bole.output({level: 'debug', stream: process.stdout});
let log = bole('server');

log.info('server process starting');

app.listen(config.express.port, config.express.ip, (error) => {
  if (error) {
    log.error('Unable to listen for connections', error);
    process.exit(10)
  }
  log.info('express is listening on http://' +
    config.express.ip + ':' + config.express.port)
});
