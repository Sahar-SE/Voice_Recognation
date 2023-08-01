// Calling speech recognition from window and store it in a variable.
var speechRecognition = window.webkitSpeechRecognition
// Creating an instance of speech recognition object.
var recognition = new speechRecognition()

var message = $("#message")

var name = $("#name")

var instructions = $("#instructions")

var btnText = $("#start-btn")

var image = $("#robo")

var content = ''
// An array for setting images anterval
var imageUrls = [
  './imgs/giphy4.gif',
  './imgs/giphy1.gif',
  './imgs/giphy3.gif',  
];

// Creating an array for duration of each image
var timeIntervals = [18000, 13000, 5000];

var interval;
// Recognition continous will continue changing voice to text till the stop button clicked
recognition.continuous = true;

// This text will be read by Robo at each refresh of the page
window.onload = () => {
  const message = new SpeechSynthesisUtterance("Hello, I am Rooboo I have been created by Sahar Sabah Amiri. I am here to help you. Please enter your name, and click the start button that I can record your voice.");
  speechSynthesis.speak(message);
}

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

// When the the recognition is ended this will happened

recognition.onspeechend = () => {
  instructions.text("Recognition stopped")
  btnText.text("Start")
  changeImage(0);
}

// When an error occured this will happened

recognition.onerror = () => {
  instructions.text("There is an internet connection error!")
  btnText.text("Start")
}

// During the recording

recognition.onresult = (event) => {
  var current = event.resultIndex;
  var transcript = event.results[current][0].transcript
  content += transcript
  message.val(content)
}

// handling start button
$("#start-btn").click((event)=> {

  if(content.length) {
    content += ''
  }

  recognition.start()
  btnText.text("Recording...")
  image.attr('src', './imgs/giphy5.gif');
  clearInterval(interval);
})

$("#stop-btn").click((event)=> {
  recognition.stop();
  btnText.text("Start")
  image.attr('src', './imgs/giphy4.gif');
  changeImage(0);

  const message = new SpeechSynthesisUtterance("If you want to check your text, please click the play button. And if you find any spelling mistake or grammar mistake, please correct it by Editing the text. Thank you!");
    speechSynthesis.speak(message);

  (function () {
    emailjs.init("TRPIqukCOOdOsgiXe");
  })();
 
 document.getElementById("form").addEventListener("click", function(event) {
    event.preventDefault();
    emailjs.sendForm("service_7wz4weo", "template_3cxrqnh", this)
      .then(function(response) {
        console.log("SUCCESS!", response.status, response.text);
      }, function(error) {
        console.log("FAILED...", error);
      });

});
})

message.on('input', () =>{
  content = $(this).val()
})

$("#play-btn").click((event)=> {
  try{
    
  var name = $("#name").val()   

  if(content.length || message.val() > 0) {
    const message = new SpeechSynthesisUtterance(`Hey ${name} This is your text.  ${content}`);
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

// handling Recommendation Button

$("#rec-btn").click((event)=> {
  clearInterval(interval);
  window.location.href = 'recommendations.html'
})

// handling Publish Button
$("#pub-btn").click(()=> {
  window.location.href = 'publications.php'
})

