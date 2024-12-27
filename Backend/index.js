const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const candidateRouter = require("./router/candidateManagement");
const employeeRouter = require("./router/employeeManagement");
const attendanceRouter = require("./router/attendanceManagement");
const leavesRouter = require("./router/leavesManagement");
const userAuthRouter = require("./router/authentication");

require("dotenv").config();

const app = express();
const port = process.env.PORT;
const url = process.env.MongoDB_URL;


const corsOptions = {
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  credentials: true,  
  allowedHeaders: ['Content-Type', 'Authorization'],  
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(url)
  .then(() => {
    console.log("mongodb connection established...");
  })
  .catch((error) => {
    console.error("error in connection...", error);
  });

app.options('*', cors());

app.use(candidateRouter);
app.use(employeeRouter);
app.use(attendanceRouter);
app.use(leavesRouter);
app.use(userAuthRouter);

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});
