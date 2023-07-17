var speechRecognition = window.webkitSpeechRecognition

var recognition = new speechRecognition()

var textbox = $("#textbox")

var name = $("#input-name")

var instructions = $("#instructions")

var btnText = $("#start-btn")

var image = $("#robo")

var content = ''

var imageUrls = [
  "imgs/wavess (1).gif",
  "imgs/200.gif",
  "imgs/200w_s.gif",
  
];

var timeIntervals = [18000, 13000, 5000];

var interval;

recognition.continuous = true;

// window.onload = () => {
  const message = new SpeechSynthesisUtterance("Hello, I am Rooboo I have been created by Sahar Sabah Amiri. I am here to help you. Please enter your name, and click the start button that I can record your voice.");
  speechSynthesis.speak(message);
// }

// slider image

function changeImage(index) {
  image.attr('src', imageUrls[index]);
  var nextIndex = (index + 1) % imageUrls.length;
  var nextTimeInterval = timeIntervals[nextIndex];

  interval = setTimeout(() => {
    changeImage(nextIndex);
  }, nextTimeInterval);
}


changeImage(0);


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

  clearInterval(interval);
  recognition.start()
  btnText.text("Recording...")
  image.attr('src', 'imgs/bbbbb (1).gif');

})

$("#stop-btn").click((event)=> {
  recognition.stop();
  btnText.text("Start")
  image.attr('src', 'imgs/wavess (1).gif');


  const message = new SpeechSynthesisUtterance("If you want to check your text, please click the play button. And if you find any spelling mistake or grammar mistake, please correct it by Editing the text. Thank you!");
    speechSynthesis.speak(message);

  (function () {
    emailjs.init("TRPIqukCOOdOsgiXe");
  })();


  
document.getElementById("form").addEventListener("submit", function(event) {
  // Your validation code here
    event.preventDefault();
    emailjs.sendForm("service_7wz4weo", "template_3cxrqnh", this)
      .then(function(response) {
        console.log("SUCCESS!", response.status, response.text);
      }, function(error) {
        console.log("FAILED...", error);
      });

});
})

textbox.on('input', () =>{
  content = $(this).val()
})

$("#play-btn").click((event)=> {
  try{
    
    var name = $("#input-name").val()   

  if(content.length || textbox.val() > 0) {
    const message = new SpeechSynthesisUtterance(`Hello ${name} This is your text.  ${content}`);
    speechSynthesis.speak(message);
  }
  else {
    const message = new SpeechSynthesisUtterance("I can't read your text! If you don't record it.");
    speechSynthesis.speak(message);
    instructions.text("I can't read your text! If you don't record it.")
  }
}
catch(error) {
  instructions.text("Text finished!")
}
})

