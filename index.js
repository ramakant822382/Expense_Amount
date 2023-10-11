const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/connectDB");
const path = require("node:path");
//config dot env

dotenv.config();
//db
connectDb();

//rest object

const app = express();

//middleware

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1/users", require("./routes/userRoute"));
app.use("/api/v1/transitions", require("./routes/transition"));
// static file
// app.use(express.static(path.join(__dirname, "./client/build")));
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

const PORT = 8000 || process.env.PORT;

//listen server

app.listen(PORT, () => {
  console.log(`server running ${PORT}`);
});
