
    const express = require('express')
    const router =  express.Router()
    // const os = require('os')
    // os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "C:\Users\goutham\Downloads\bisoft-ff959541919e.json"
    const speech = require('@google-cloud/speech');
    const url = require('url');
    const { createWriteStream } = require("fs");
    const fs = require('fs')
    const {Storage} =require('@google-cloud/storage');
    const path = require('path');
    let id ='0'
    let transcription

    

    // Creates a client
    const client = new speech.SpeechClient();
    const gc = new Storage({
      keyFilename:path.join(__dirname,'../key/bisoft-bucket.json'),
      projectID: 'bisoft'
    })


    gc.getBuckets().then(e =>console.log(e))

  
    
      
     const filesBucket = gc.bucket('bisoft')
     //upload method 1
    async function uploadBucket(data){
      await new Promise(res =>
        
        fs.createReadStream('./public/sample5.mp3')
          .pipe(
            filesBucket.file('sample5.mp3').createWriteStream({
              resumable: false,
              gzip: true,
              
            })
          )
          .on("finish", res)
      )
    }
    //upload method 2
    const bucketname = 'bisoft';
    const filename = 'audio';
    async function upbuck(){
      const data ='https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/06/13/909277-ima-pop.jpg'
      const audio = {
        uri: data,
      };
      const res = await gc.bucket(bucketname).upload(data,{
        destination: filename
      })
    // `mediaLink` is the URL for the raw contents of the file.
    // const url = res[0].metadata.mediaLink;

    // // Need to make the file public before you can access it.
    // await gc.bucket(bucketname).file(filename).makePublic();

    // // Make a request to the uploaded URL.
    // const axios = require('axios');
    // const pkg = await axios.get(url).then(res => res.data);
    // pkg.name;
    }

    //uploadBucket()
    
      //upbuck();  





    // let localReadStream = fs.createReadStream('./public/sample2.mp3');
    // let remoteWriteStream = filesBucket.file('sample2.mp3').createWriteStream({
    //   resumable: false,
    //   gzip:true
    // });
    // localReadStream.pipe(remoteWriteStream)
    // .on('error', function(err) {console.log(err)})
    // .on('finish', res);
   //speech rec function 
    async function quickstart(data) {
      // The path to the remote LINEAR16 file
      const gcsUri = 'gs://bisoft/sample1.mp3';

      //const gcsUri = './public/sample1.mp3';
      //const file = fs.readFileSync(gcsUri)
      //sconst audioBytes = file.toString('base64')
    
      // The audio file's encoding, sample rate in hertz, and BCP-47 language code
      const audio = {
        uri: gcsUri,
      };
      const config = {
        encoding: 'MP3',
        sampleRateHertz: 16000,
        languageCode: 'en-US',
      };
      const request = {
        audio: audio,
        config: config,
      };
    
      // Detects speech in the audio file
      const [response] = await client.recognize(request);
      transcription = response.results
        .map(result => result.alternatives[0].transcript)
        .join('\n');
       console.log(`Transcription: ${transcription}`);
       
    
    }
   // quickstart();
    
    

router.get('/', function (req, res, next){
  console.log(req.params)
    if(transcription.search("Hardware")!=-1)
        id='2'
    if(transcription.search("wait")!=-1||transcription.search("delay")!=-1)
        id='1'
    if(transcription.search("speak_componet3")!=-1)
        id='0'
    if(transcription.search("speak_componet4")!=-1)
        id='0'
    if(transcription.search("speak_componet4")!=-1)
        id='1'
    res.send(id)
   
})

router.post("/", function(req, res){
  
   
   console.log("this url is "+req.body.url)
   console.log(typeof req.body.blob)
   //let data = new File(req.body.blob,'audio',{type:'webm'})
   
   //uploadBucket(req.body.url);
  
   
})
//upbuck();
   
module.exports = router

