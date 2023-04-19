const mongoose = require("mongoose")
require("dotenv").config()
const URI_DB = process.env.URI_DB
const USER_DB = process.env.USER_DB
const PASS_DB = process.env.PASS_DB

mongoose.connect(URI_DB)
  .then(db => console.log("DB Conectaba "))
  .catch(err => console.log(err))



module.exports = mongoose