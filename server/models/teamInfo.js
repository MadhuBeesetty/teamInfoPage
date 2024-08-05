const mongoose = require('mongoose')

const teamInfoSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  email: String,
  employeeStatus: String
})

const teamInfoModel = mongoose.model("teamInfo", teamInfoSchema)
module.exports = teamInfoModel
