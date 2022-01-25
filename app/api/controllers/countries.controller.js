const Countrie = require("../models/countries.model");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");

const getAllCountries = async (req, res, next) => {
  try {
    if (req.query.page) {
      const page = parseInt(req.query.page);
      const skip = (page - 1) * 20;
      const countries = await Countrie.find().skip(skip).limit(20);
      return res.json({
       countries
      });
    } else {
      const countries = await Countrie.find();
      return res.json({
       countries
      });
    }
  } catch (err) {
    return next(err);
  }
};

const getCountrieById = async (req, res, next) => {
    try {
      const { countrieId } = req.params;
      const countrieById = await Countrie.findById(countrieId);
      return res.json({
        data: { countrie: countrieById }
      });
    } catch (err) {
      return next(err);
    }
  };
  //Exportamos las funciones
  module.exports = {
    getAllCountries,
    getCountrieById,
  }