const express = require('express')
const router =  express.Router()
//const p5 = require('p5')
const fs = require('fs')
var delayInMilliseconds = 0; //1 second

setTimeout(function() {
  //your code to be executed after 1 second
  let readMe
  fs.watch('./geek.txt',(eventType,filename)=>{
    //console.log('File was updated!!');
    readMe = fs.readFileSync('./geek.txt','utf8')
    readMe=readMe.toLocaleLowerCase();
    console.log(readMe) 
  })

  // let readMe = fs.readFileSync('./geek.txt','utf8')
  // console.log(readMe) 
 
  
 // console.log(`write me= ${writeMe}`) 
 console.log(readMe)
router.get('/', function (req, res, next){
    
   if(readMe.search("hardware")!=-1)
       id='2'
   if( readMe.search("wait")!=-1||readMe.search("delay")!=-1){
       let matches = readMe.match(/(\d+)/);
       let matchtime
       if(readMe.search("millisecond")!==-1)
         matchtime = readMe.match(/millisecond/);
       else if(readMe.search("second")!==-1)
         matchtime = readMe.match(/second/);
       console.log("time delay= "+matchtime[0])
       id ='wait '+matches[0]+' '+matchtime[0]
       console.log("time delay id = "+id)
   }
      
   if( readMe.search("component")!=-1)
       id='3'
   if( readMe.search("stop")!=-1)
       id='4'
   if( readMe.search("speak_componet4")!=-1)
       id='1'
   if( readMe.search("delete")!=-1)
       id='5'
    if(readMe.search("start")!=-1||readMe.search("Start")!=-1)
       id='6'
   if(readMe==='')
       id=-1
   res.send(id)
   readMe=''
   fs.writeFileSync('./geek.txt',readMe)
  
})
}, delayInMilliseconds);








module.exports = router



