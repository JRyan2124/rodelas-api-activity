const express = require('express');
const router = express.Router();

// Import the Controller
const {
  getAllDishes,
  createDish,
  getDishById,
  updateDish,
  deleteDish,
} = require('../controllers/dishController');

const { protect, authorize } = require('../middleware/authMiddleware');

// 1. If user goes to GET / (Show menu) → Ask Chef to getAllDishes
router.get('/dishes', getAllDishes);

// 2. If user sends POST / (New Order) → Ask Chef to createDish
router.post('/dishes', protect, authorize('admin', 'manager'), createDish);

// 3. If user goes to GET /:id (Ask for specific meal) → Ask Chef to getDishById
router.get('/dishes/:id',  getDishById);

// 4. If user sends PUT /:id (Change meal) → Ask Chef to updateDish
router.put('/dishes/:id', protect, authorize('admin', 'manager'), updateDish);

// 5. If user sends DELETE /:id (Cancel meal) → Ask Chef to deleteDish
router.delete('/dishes/:id' , protect, authorize('admin', 'manager'), deleteDish);

module.exports = router;