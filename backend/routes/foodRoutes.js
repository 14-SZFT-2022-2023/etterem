const express = require('express');
const { getFoods, postFood } = require('../controllers/foodControllers');
const router = express.Router();

router.get('/', getFoods);
router.post('/', postFood);

module.exports = router;
