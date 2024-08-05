// mongodb+srv://madhusudhanbeesetty:<password>@cluster0.egl2cbh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const express = require('express')
const connectDB = require('./db.js')
const learningModel = require('./models/learning.js')
const teamInfoModel = require('./models/teamInfo.js')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
connectDB();

const newLearning = new learningModel({
  name: 'Node.js Basics22244',
  description: 'A beginner-friendly guide to Node.js22244'
});

const newTeamInfoData = new teamInfoModel({
    firstName: "employee4",
    lastName: "lemployee4",
    phoneNumber: "12444443344",
    email: "employee4@email.com",
    employeeStatus: "regular"
});

const newLearningg = () => {
  newLearning.save()
  .then(() => console.log('Learning saved!'))
  .catch(err => console.error('Error saving learning:', err));
}

const newTeamInfoInput = () => {
  newTeamInfoData.save()
  .then(() => console.log('teamInfoData saved!'))
  .catch(err => console.error('Error saving learning:', err));
}

app.get('/mongocall', async (req,res) => {
  // newLearningg();
  const learning = await learningModel.find();
  return res.json({learning11: learning});
})

app.get('/saveTeamInfoData', async (req,res) => {
  newTeamInfoInput();
  const teamInfoData = await teamInfoModel.find();
  return res.json({teamInfo: teamInfoData});
})

app.listen(3000, () => {
  console.log("app is running");
})
