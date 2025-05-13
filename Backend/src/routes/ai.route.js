const { Router } = require("express");
const { geminiResult } = require("../controllers/geminiController.js");
const router = Router();

router.get("/airesult", geminiResult);

module.exports = router;