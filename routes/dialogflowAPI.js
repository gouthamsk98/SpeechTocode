const express = require('express')
const router =  express.Router()

let send
router.post('/', function (req, res, next){

   // PythonShell.run("app.py")
   message = req.body;
   send=message.a
   
   send = message.a
   res.send("got it")
   setTimeout(() => {
    send=""
  }, 1500);
  })

router.get('/', function (req, res, next){
    res.send(send)  
})

module.exports = router