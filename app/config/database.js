const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

const mongoDB = process.env.MONGO_DB;

const connect = async () => {
  try {
    const DB = await mongoose.connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const { name, host } = DB.connection;
    console.log(`The Force is strong with ${name}, in host ${host}`);
  } catch (error) {
    console.log("Error to connect with BD", error);
  }
};

module.exports = { connect };
