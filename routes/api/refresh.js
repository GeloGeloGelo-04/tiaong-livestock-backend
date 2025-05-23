const express = require("express");
const {
  handleRefreshToken,
} = require("../../controllers/refreshTokenController");
const router = express.Router();

router.get("/", handleRefreshToken);

module.exports = router;
