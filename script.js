var speechRecognition = window.webkitSpeechRecognition

var recognition = new speechRecognition()

var textbox = $("#textbox")

var instructions = $("#instructions")

var content = ''

recognition.continuous = true

// What will happen when start button clicked

recognition.onstart =  () => {
  instructions.text("Voice Recognition is on!")
}


$("#start-btn").click((event)=> {
  if(content.length) {
    content += ''
  }

  recognition.start()
})
