const express = require('express');
const app = express();
const PORT = 5001

app.get("/",(req, res)=>{
  res.json({
    message: "OK",
    success: true,
    users : [],
    SECRET_KEY: process.env.SECRET_KEY
  })
})

app.listen(PORT,()=>{
  console.log(`App is running on ${PORT} port`)
})