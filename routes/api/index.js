const route = require('express').Router();

route.use('/rides', require('./rides').route);

exports = module.exports = {
    route,
}