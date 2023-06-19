const express = require('express');
const mongoose = require('mongoose');
const schraubenModel = express.Router();
//Importiere das Schrauben Model

const app = express();

// Connect to MongoDB
mongoose.connect('//MONGODB ATLAS STRING', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('MongoDB connected...');
})
.catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Route eine Schraube
schraubenModel.get("/sales/:id");
// Route alle Schrauben
schraubenModel.get("/sales");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
