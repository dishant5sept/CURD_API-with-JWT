const express = require('express');
const userController = require('../controllers/userController');
const { authenticate, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authenticate, authorize(['admin']), userController.getAllUsers);
router.delete('/:id', authenticate, authorize(['admin']), userController.deleteUser);

module.exports = router;
