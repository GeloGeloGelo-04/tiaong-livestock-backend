const express = require("express");
const {
  sendMail,
  updatePwd,
} = require("../../controllers/resetPassController");

const router = express.Router();

// Route para mag-send ng email code
router.post("/send-code", sendMail);

// Route para mag-update ng password
router.put("/", updatePwd);

module.exports = router;
