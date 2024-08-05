const mongoose = require('mongoose')

const learningSchema = new mongoose.Schema({
  name: String,
  description: String
})

const learningModel = mongoose.model("Item", learningSchema)
module.exports = learningModel
