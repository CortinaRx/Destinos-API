const Scenery = require("../models/scenerys.model");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");

const getAllScenerys = async (req, res, next) => {
  try {
    if (req.query.page) {
      const page = parseInt(req.query.page);
      const skip = (page - 1) * 20;
      const scenerys = await Scenery.find().skip(skip).limit(20);
      return res.json({
      scenerys
      });
    } else {
      const scenerys = await Scenery.find();
      return res.json({
        data: { scenerys: scenerys },
      });
    }
  } catch (err) {
    return next(err);
  }
};

const getSceneryById = async (req, res, next) => {
    try {
      const { sceneryId } = req.params;
      const sceneryById = await Scenery.findById(sceneryId);
      return res.json({
      sceneryById 
      });
    } catch (err) {
      return next(err);
    }
  };
  //Exportamos las funciones
  module.exports = {
    getAllScenerys,
    getSceneryById,
  }