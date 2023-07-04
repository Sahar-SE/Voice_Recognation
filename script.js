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
}



$("#start-btn").click((event)=> {
  if(content.length) {
    content += ''
  }

  recognition.start()
})
