const express = require("express");

const router = express.Router();

// controllers
const { create, read } = require('../controllers/url');

// routes
router.post("/url", create);
router.get('/url/:shortUrl', read);

module.exports = router;