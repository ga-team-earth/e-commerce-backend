const express = require("express");
const router = express.Router();

const {
  getArtItems,
  getArtItemsById,
} = require("../controllers/ArtItemController");

router.get("/", getArtItems);
router.get("/:id", getArtItemsById);

module.exports = router;