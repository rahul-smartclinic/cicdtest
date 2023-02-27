const express = require('express');
const path = require('path'); 
require('dotenv').config();
const app = express();
const PORT = 5001


app.get("/",(req, res)=>{
  res.json({
    message: "OK",
    success: true,
    users : [{
      id:1,
      name: "Rahul Kumar v2"
    }],
    // ALL_SECRET_KEY: process.env
  })
})

app.listen(PORT,()=>{
  console.log(`App is running on ${PORT} port`)
})