const express = require('express');
const { getAllJobs, searchJobs } = require('../controllers/jobController');

const router = express.Router();

router.get('/', getAllJobs);
router.get('/search', searchJobs);

module.exports = router;
