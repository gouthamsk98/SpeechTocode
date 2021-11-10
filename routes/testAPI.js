const express = require('express')
const router =  express.Router()
//const p5 = require('p5')

router.get('/', function (req, res, next){
    res.send("1")
	const Speakable = require('speakable');
 console.log('hi')
var speakable = new Speakable({key: 'ff959541919e769abfafd87ab3df648a01af215d'});
speakable.on('speechStart', function() {
	console.log('onSpeechStart');
  });
   
  speakable.on('speechStop', function() {
	console.log('onSpeechStop');
  });
   
  speakable.on('speechReady', function() {
	console.log('onSpeechReady');
  });
   
  speakable.on('error', function(err) {
	console.log('onError:');
	console.log(err);
	speakable.recordVoice();
  });
   
  speakable.on('speechResult', function(recognizedWords) {
	console.log('onSpeechResult:')
	console.log(recognizedWords);
	speakable.recordVoice();
  });
   
  speakable.recordVoice();
   
})

module.exports = router


