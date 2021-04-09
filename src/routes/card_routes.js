const express = require("express");
const router = express.Router();
const cardController = require("../controller/card_controller");

router.get("/", cardController.getCards);

router.get("/:id", cardController.getCard);

router.post("/", cardController.createCard);

module.exports = router;
