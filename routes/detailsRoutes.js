const express = require('express');
const detailsController = require('./../controllers/detailsController');

const router = express.Router();

router.route('/').get(detailsController.getMe);
router.route('/').post(detailsController.operation);

module.exports = router;