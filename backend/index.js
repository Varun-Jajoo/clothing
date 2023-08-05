const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json())
mongoose.connect("mongodb://0.0.0.0:27017/Zephyr");
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use("/api/auth", require("./routes/auth"));
// app.use("/api/clothes", require("./routes/clothes"));
app.listen(3003, () => {
  console.log("Server is running on port 3001");
});
