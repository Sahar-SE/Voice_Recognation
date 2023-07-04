var speechRecognition = window.webkitSpeechRecognition

var recognition = new speechRecognition()

var textbox = $("#textbox")

var instructions = $("#instructions")

var content = ''

recognition.continuous = true

$("#start-btn").click((event)=> {
  if(content.length) {
    content += ''
  }
})
