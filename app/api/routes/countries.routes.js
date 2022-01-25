const express = require("express");

const router = express.Router();

const {
  getAllCountries,
  getCountrieById,
} = require("../controllers/countries.controller");

router.get("/", getAllCountries);
router.get("/:countrieId", getCountrieById);

module.exports = router;
