const express = require('express');
const router = express.Router();
const Chef = require("../models/chefModel"); 

// Import the Controller
const {
  getAllChefs,
  createChef,
  getChefById,
  updateChef,
  deleteChef,
} = require('../controllers/chefController');


router.get('/chefs', getAllChefs);
router.post('/chefs', createChef);
router.get('/dishes/:id', getChefById);
router.put('/dishes/:id', updateChef);
router.delete('/dishes/:id', deleteChef);

module.exports = router;