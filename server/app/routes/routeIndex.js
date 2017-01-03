'use strict';

const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'));
router.use('/lists', require('./lists'));
router.use('/photos', require('./photos'));
router.use('/posts', require('./posts'));
router.use('/search', require('./search'));
router.use('/sessions', require('./sessions'));
router.use('/home', require('./home'));

// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
  res.status(404).end();
});