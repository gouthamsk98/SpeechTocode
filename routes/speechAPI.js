
    const express = require('express')
    const router =  express.Router()
    const speech = require('@google-cloud/speech');
    const fs = require('fs')
    let id ='0'
    let transcription

    // Creates a client
    const client = new speech.SpeechClient();
    
    async function quickstart() {
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
    quickstart();
    
    

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
   console.log(typeof req.body.url)
   
  
   
})

module.exports = router

