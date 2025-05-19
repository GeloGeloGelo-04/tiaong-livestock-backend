const express = require("express");
const {
  sendMail,
  updatePwd,
} = require("../../controllers/resetPassController");
const router = express.Router();

// Ito ang endpoint na tinatawag sa mobile: /reset/send-code
router.post("/send-code", sendMail);

// Ito para sa pag-update ng password (e.g. PUT /reset)
router.put("/", updatePwd);

module.exports = router;
