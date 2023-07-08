var speechRecognition = window.webkitSpeechRecognition

var recognition = new speechRecognition()

var textbox = $("#textbox")

var instructions = $("#instructions")

var btnText = $("#start-btn")

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
  btnText.text("Stop")

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
    
  if(content.length > 0) {
    const message = new SpeechSynthesisUtterance(content);
    speechSynthesis.speak(message);
  }
  else {
    instructions.text("Please enter some text")
  }
}
catch(error) {
  instructions.text("Text finished!")
}
})
  
