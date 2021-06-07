const express = require('express')
const app = express()



app.get('/',function(req,res){
  res.send({data:'ok'})
//   
})

app.listen(3333, () => {
  console.log('http://localhost:3333')
})