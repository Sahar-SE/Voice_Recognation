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

  if(content.length) {
    content += ''
  }

  recognition.start()
  btnText.text("Stop")

})

$("#stop-btn").click((event)=> {
  recognition.stop();
  // send email by using emailjs

  (function () {
    emailjs.init("TRPIqukCOOdOsgiXe");
  })();


  
document.getElementById("form").addEventListener("submit", function(event) {
  // Your validation code here
    event.preventDefault();
    emailjs.sendForm("service_7wz4weo", "template_3cxrqnh", this)
      .then(function(response) {
        console.log("SUCCESS!", response.status, response.text);
        // Show success message to the user
      }, function(error) {
        console.log("FAILED...", error);
        // Show error message to the user
      });

});
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

