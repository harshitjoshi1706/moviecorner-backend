// import express from "express";
// import cookieParser from "cookie-parser";
// import http from "http";
// import "dotenv/config";
require('dotenv').config();
const express = require('express');
const http = require('http');
const app = express()
const mongoose = require("mongoose");

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

app.use('/api/auth', require('./routes/auth'));

const port = process.env.PORT || 5000;

const server = http.createServer(app);

mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("Mongodb connected");
  server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}).catch((err) => {
  console.log({ err });
  process.exit(1);
});


// const connectToMongo = require('./db');
// connectToMongo();

// const express = require('express')
// const cors = require('cors');
// const app = express()
// const port = process.env.PORT || 5000

// app.use(cors());

// app.use(express.json())

// // // Available routes
// app.use('/api/auth',require('./routes/auth'))
// // app.use('/api/notes',require('./routes/notes'))

// // app.get('/',(req,res)=>{
// //     res.send('hello world')
// // })

// // app.get('/api/v1/signup',(req,res)=>{
// //     res.send('hello login')
// // })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })