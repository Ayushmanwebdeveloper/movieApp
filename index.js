const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require('path');
const cookieParser = require("cookie-parser");
const config = require("./config/key");
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
app.use(express.static(path.join(__dirname, "client", "build")))
app.use("/api/users", require("./routes/users"));
app.use("/api/favorite", require("./routes/favorite"));

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
  res.sendFile(path.join(__dirname, "./client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server Connected On ${port}`)
})

