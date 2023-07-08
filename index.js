var speechRecognition = window.webkitSpeechRecognition

var recognition = new speechRecognition()

var textbox = $("#textbox")

var names = $("#names")

var instructions = $("#instructions")

var content = ''

recognition.continuous = true

// What will happen when start button clicked

recognition.onstart =  () => {
  instructions.text("Voice Recognition is on!")
}

// when the the recognition is ended

recognition.onspeechend = () => {
  instructions.text("Recognition stopped")
}

// When an error occured

recognition.onerror = () => {
  instructions.text("There is an error!")
}

// During the recording

recognition.onresult = (event) => {
  var current = event.resultIndex;
  var transcript = event.results[current][0].transcript
  content += transcript
  textbox.val(content)
}



$("#start-btn").click((event)=> {
  try{
  if(content.length) {
    content += ''
  }

  recognition.start()


}
catch(error) {
  recognition.stop();
}
})

textbox.on('input', () =>{
  content = $(this).val()
})

$("#play-btn").click((event)=> {
  try{
    const synth = window.speechSynthesis;
    const voices = synth.getVoices(); 
  if(content.length > 0) {
    const message = new SpeechSynthesisUtterance(content);
    speechSynthesis.speak(message);
    
// Set the voice to the second voice in the list

   message.voice = voices[48];
   console.log(voices[48].name);

  }
  
}
catch(error) {
  instructions.text("Empty text!")
}
})
  

