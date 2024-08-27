const express = require('express');
const resourceController = require('../controllers/resourceController');
const { authenticate, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authenticate, resourceController.getAllResources);
router.post('/', authenticate, resourceController.createResource);
router.put('/:id', authenticate, authorize(['admin']), resourceController.updateResource);
router.delete('/:id', authenticate, authorize(['admin']), resourceController.deleteResource);

module.exports = router;
