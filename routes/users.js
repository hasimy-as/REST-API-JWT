import express from 'express';

const router = express.Router();
const user = require('../controllers/users');

router.post('/register', user.create);
router.post('/authenticate', user.authenticate);

export default router;