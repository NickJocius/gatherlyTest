const express = require("express");

const router = express.Router();

// controllers
const { create } = require('../controllers/url');

// routes
router.post("/url", create);
router.get("/url");

module.exports = router;