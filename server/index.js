// mongodb+srv://madhusudhanbeesetty:<password>@cluster0.egl2cbh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const express = require('express')
const connectDB = require('./db.js')
const learningModel = require('./models/learning.js')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
connectDB();

app.get('/', async (req,res) => {
  const learning = await learningModel.find()
  res.json(learning)
})

app.listen(3000, () => {
  console.log("app is running");
})
