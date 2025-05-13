const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.route.js");
const aiRoutes = require("./routes/ai.route.js");
// import advisoryUpload from './routes/advisoryRoutes.js'

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use('/uploads', express.static('uploads'));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.json({ limit: "16kb" }));
app.use(cookieParser());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use('/api/v1/user', userRoutes)
app.use('/api/v1/ai', aiRoutes)

module.exports= app;
