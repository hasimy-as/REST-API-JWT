const express = require('express');
const router = express.Router();
const tech = require('../controllers/tech');

router.get('/', tech.getAll);
router.post('/', tech.create);
router.get('/:techId', tech.getById);
router.put('/:techId', tech.updateById);
router.delete('/:techId', tech.deleteById);

module.exports = router;