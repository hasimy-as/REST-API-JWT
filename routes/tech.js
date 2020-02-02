const express = require('express');
const tech = require('../controllers/tech')

const router = express.Router();

router.get('/', tech.getAll);
router.post('/', tech.create);
router.get('/:techId', tech.getById);
router.put('/:techId', tech.updateById);
router.delete('/:techId', tech.deleteById);

module.exports = router;