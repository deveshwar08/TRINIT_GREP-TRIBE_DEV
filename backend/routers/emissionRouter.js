const { Router } = require('express');
const { postEmissions, getCurrentSessionEmissions, getSessionWiseEmissions, totalEmissions, rankWebsites } = require('../controllers/emissionController');
const checkAuth = require('../middleware/authMiddleware');
const router = Router();

router.post('/emit', checkAuth, postEmissions);
router.get('/current', checkAuth, getCurrentSessionEmissions);
router.get('/emissions', checkAuth, getSessionWiseEmissions);
router.get('/footprint', checkAuth, totalEmissions);
router.get('/ranks', rankWebsites);

module.exports = router;
