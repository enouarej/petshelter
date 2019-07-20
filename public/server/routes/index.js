const router = require('express').Router();
const petRouter = require('./pet.route');

module.exports = router.use('/pets', petRouter);
