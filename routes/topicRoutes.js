const express = require('express');
const router = express.Router();
const topicController = require('../controllers/topicControllers');

router.post('/subscribe', topicController.subscribe);
router.post('/notify', topicController.notify);
router.post('/unsubscribe', topicController.unsubscribe);

module.exports = router;
