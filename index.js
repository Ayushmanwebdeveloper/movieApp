const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require('path');
const cookieParser = require("cookie-parser");
const config = require("./config/key");
app.use(cookieParser());
const cors = require('cors')
app.use(express.static('build')) 
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
app.use("/api/users", require("./routes/users"));
app.use("/api/favorite", require("./routes/favorite"));

app.use(express.static(path.join(__dirname, './client', 'build')));
app.use(express.static('./client/public'));
const dbUrl = process.env.MONGODB_URI || `mongodb+srv://Ayushman:Ayushmantr7724%40@cluster0.hg72m.mongodb.net/movieApp?retryWrites=true&w=majority`
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!")
  })
  .catch(err => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!")
    console.log(err)
  })


const port = process.env.PORT || 7724
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./build", "index.html"));
});
app.use(express.static('public'));
app.listen(port, () => {
  console.log(`Server Connected On ${port}`)
})

