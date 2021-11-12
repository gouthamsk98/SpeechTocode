const express = require('express')
const router =  express.Router()
//const p5 = require('p5')
const fs = require('fs')
var delayInMilliseconds = 1000; //1 second

setTimeout(function() {
  //your code to be executed after 1 second
  let readMe
  fs.watch('./geek.txt',(eventType,filename)=>{
    //console.log('File was updated!!');
    readMe = fs.readFileSync('./geek.txt','utf8')
    console.log(readMe) 
  })

  // let readMe = fs.readFileSync('./geek.txt','utf8')
  // console.log(readMe) 
 
  
 // console.log(`write me= ${writeMe}`) 
 console.log(readMe)
router.get('/', function (req, res, next){
  
   if( readMe.search("Hardware")!=-1)
       id='2'
   if( readMe.search("wait")!=-1||readMe.search("delay")!=-1)
       id='1'
   if( readMe.search("component")!=-1)
       id='3'
   if( readMe.search("speak_componet4")!=-1)
       id='0'
   if( readMe.search("speak_componet4")!=-1)
       id='1'
    if(readMe==='')
        id=-1
   res.send(id)
   readMe=''
   fs.writeFileSync('./geek.txt',readMe)
  
})
}, delayInMilliseconds);








module.exports = router



