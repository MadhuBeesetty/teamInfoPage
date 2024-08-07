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

// const newLearning = new learningModel({
//   name: 'Node.js Basics22244',
//   description: 'A beginner-friendly guide to Node.js22244'
// });

// const newTeamInfoData = new teamInfoModel({
//     firstName: "employee4",
//     lastName: "lemployee4",
//     phoneNumber: "12444443344",
//     email: "employee4@email.com",
//     employeeStatus: "regular"
// });

app.get('/mongocall', async (req,res) => {
  // newLearningg();
  const learning = await learningModel.find();
  return res.json({learning11: learning});
})
// app.get('/saveTeamInfoData', async (req,res) => {
//   newTeamInfoInput();
//   const teamInfoData = await teamInfoModel.find();
//   return res.json({teamInfo: teamInfoData});
// })

// POST request to save team info data
app.post('/saveTeamInfoData', async (req, res) => {
  const newTeamInfoData = new teamInfoModel(req.body);
  try {
    await newTeamInfoData.save();
    const teamInfoData = await teamInfoModel.find();
    console.log(res.json({teamInfoData}), 'teamInfoData saved!');
    res.status(201).send({ message: 'Team info data saved successfully' });
  } catch (err) {
    console.error('Error saving team info data:', err);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

app.get('/fetchTeamInfoData', async (req,res) => {
  const teamInfoData = await teamInfoModel.find();
  return res.json({teamInfo: teamInfoData});
})

// Endpoint to update a document
app.put('/updateTeamInfo/:id', async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const updatedDocument = await teamInfoModel.findByIdAndUpdate(id, updateData, { new: true });
    res.json(updatedDocument);
  } catch (error) {
    res.status(500).json({ message: 'Error updating data', error });
  }
});

// Endpoint to delete a document
app.delete('/deleteTeamInfo/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await teamInfoModel.findByIdAndDelete(id);
    res.json({ message: 'Document deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting data', error });
  }
});

app.listen(3000, () => {
  console.log("app is running");
})
