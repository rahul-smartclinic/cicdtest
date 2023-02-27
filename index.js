const express = require('express');
const app = express();
const PORT = 5001

app.get("/",(req, res)=>{
  res.json({
    message: "OK",
    success: true,
    users : [],
    ALL_SECRET_KEY: process.env
  })
})

app.listen(PORT,()=>{
  console.log(`App is running on ${PORT} port`)
})