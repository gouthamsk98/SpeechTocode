
//const p5 = require('p5')
// const fs = require('fs')
// var delayInMilliseconds = 0; //1 second

// setTimeout(function() {
//   //your code to be executed after 1 second
//   let readMe
//   fs.watch('./geek.txt',(eventType,filename)=>{
//     //console.log('File was updated!!');
//     readMe = fs.readFileSync('./geek.txt','utf8')
//     readMe=readMe.toLocaleLowerCase();
//     console.log(readMe) 
//   })

  // let readMe = fs.readFileSync('./geek.txt','utf8')
  // console.log(readMe) 
 
  
 // console.log(`write me= ${writeMe}`) 
 //console.log(readMe)
// router.get('/', function (req, res, next){
//   res.send('1')
//    if(readMe.search("hardware")!=-1)
//        id='2'
//    if( readMe.search("wait")!=-1||readMe.search("delay")!=-1){
//        let matches = readMe.match(/(\d+)/);
//        let  matchmin =''
//        var r = /\d+/g;
//         //var s = "you can enter 333 maximum 500 choices";
//         var m;
//         while ((m = r.exec(readMe)) != null) {
//         matchmin+=m[0]+" ";
//         }
        
//        let matchtime
   
//        if(readMe.search("millisecond")!==-1)
//          matchtime = readMe.match(/millisecond/);
//        else if(readMe.search("second")!==-1)
//          matchtime = readMe.match(/second/);
//        else if(readMe.search("minute")!==-1)
//          matchtime = readMe.match(/minute/);
//        console.log("time delay= "+matchtime[0])
//        id ='wait '+matchmin+matchtime[0]
//        if(~readMe.indexOf("second")&&~readMe.indexOf("millisecond"))
//         id ='wait '+ matchmin+"millisecond"+" seconds"
//        if(~readMe.indexOf("minute")&&~readMe.indexOf("second"))
//         id ='wait '+ matchmin+"seconds"+" minute"
       
       
//        if(~readMe.indexOf("minute")&&~readMe.indexOf("millisecond"))
//         id ='wait '+ matchmin+"milliseconds"+" minute"
      
      
//         //console.log("match min= "+matchmin);
       
//        console.log("time delay id = "+id)
//    }
      
//    if( readMe.search("component")!=-1)
//        id='3'
//    if( readMe.search("stop")!=-1)
//        id='4'
//    if( readMe.search("speak_componet4")!=-1)
//        id='1'
//    if( readMe.search("delete")!=-1)
//        id='5'
//     if(readMe.search("start")!=-1||readMe.search("Start")!=-1)
//        id='6'
//    if(readMe==='')
//        id=-1
//    res.send(id)
//    readMe=''
//    fs.writeFileSync('./geek.txt',readMe)
  
// })
// }, delayInMilliseconds);

//import { pipeline, Transform } from "stream";
const {Transform, pipeline} = require('stream');
//import busboy from "connect-busboy";
const busboy =require("connect-busboy");
//import util from "promisfy"
//import Dialogflow from "@google-cloud/dialogflow"
const Dialogflow = require("@google-cloud/dialogflow")
const fs = require('fs');
const { v4: uuid } = require('uuid');
let message
const express = require('express')
const router =  express.Router()
let send
let {PythonShell} = require('python-shell') 
// PythonShell.run("app.py",null,(err,result)=>{
//   console.log(result,"result=======================> ")
// })

// router.post('/', function (req, res, next){
//   message = req.body;
//   send=message.a
//   console.log(message.a)
//   console.log("speak again....")
//   send = message.a
// })

// console.log(send,"message =======>")

  
//PythonShell.run("app.py")

router.post('/', function (req, res, next){
  message = req.body;
  send=message.a
  console.log(message.a)
  console.log("speak again....")
  send = message.a
  //PythonShell.run("app.py")
  res.send("hello")
})
 // send='1'
router.get('/', function (req, res, next){
  // setTimeout( ()=>{
  // PythonShell.run("app.py",null,(err,result)=>{
  //   console.log(result[1],"result=======================> ")
  //   console.log(typeof result[1],"result=======================> ")
  // })
  // },5000)
  console.log(send,"u fool =__>>>>>>____>>>>>")
  res.send(send)
  send=''

  
})

// Data which will write in a file.

  
// Write data in 'Output.txt' .


// router.use(
//   busboy({
//     immediate: true,
//   })
// );

// router.post("/", (req, res) => {
//   const sessionClient = new Dialogflow.SessionsClient({
//     keyFilename: Path.join(__dirname, "./key.json"),
//   });
//   const sessionPath = sessionClient.projectAgentSessionPath(
//     process.env.PROJECT_ID,
//     uuid()
//   );

//   // transform into a promise
//   const pump = util.promisify(pipeline);

//   const audioRequest = {
//     session: sessionPath,
//     queryInput: {
//       audioConfig: {
//         audioEncoding: "MP3",
//         sampleRateHertz: "16000",
//         languageCode: "en-US",
//       },
//       singleUtterance: true,
//     },
//   };
  
//   const streamData = null;
//   const detectStream = sessionClient
//     .streamingDetectIntent()
//     .on("error", (error) => console.log(error,"hi------->") )
//     .on("data", (data) => {
//       streamData = data.queryResult    
//     })
//     .on("end", (data) => {
//       //console.log(data)
//       res.status(200).send({data : streamData.fulfillmentText })
//       }
//       ) 
  
//   detectStream.write(audioRequest);

//   try {
//     req.busboy.on("file", (_, file, filename) => {
//       pump(
//         file,
//         new Transform({
//           objectMode: true,
//           transform: (obj, _, next) => {
//             next(null, { inputAudio: obj });
//           },
//         }),
//         detectStream
//       );
//     });
//   } catch (e) {
//     console.log(`error  : ${e}`);
//   }
// });
// const bodyParser = require("body-parser");
// const talkToChatbot = require("./chatbot");
// var jsonParser = bodyParser.json();
// var urlEncoded = bodyParser.urlencoded({ extended: true });
// router.post("/", jsonParser, urlEncoded, function (req, res, next) {
//   const message = req.body.message;
//   console.log("message" + message);

//   talkToChatbot(message)
//     .then((response) => {
//       res.send({ message: response });
//     })
//     .catch((error) => {
//       console.log("Something went wrong: " + error);
//       res.send({
//         error: "Error occured here"
//       });
//     });
// });

module.exports = router



