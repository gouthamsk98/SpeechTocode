const express = require('express')
const router =  express.Router()
//const p5 = require('p5')
const fs = require('fs')
var delayInMilliseconds = 1000; //1 second

setTimeout(function() {
  //your code to be executed after 1 second
}, delayInMilliseconds);

let readMe = fs.readFileSync('./public/testAPI.txt','utf8')

console.log(readMe)



router.get('/', function (req, res, next){
   // res.send("1")
    if( readMe.search("hardware")!=-1)
        id='2'
    if( readMe.search("wait")!=-1||readMe.search("delay")!=-1)
        id='1'
    if( readMe.search("speak_componet3")!=-1)
        id='0'
    if( readMe.search("speak_componet4")!=-1)
        id='0'
    if( readMe.search("speak_componet4")!=-1)
        id='1'
    res.send(id)
   
})

module.exports = router


