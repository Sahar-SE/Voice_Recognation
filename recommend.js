// handling Back Button

$("#back-btn").click((event)=> {
    window.location.href ='index.html'
  })

// handling Introduction Button

$("#intro-btn").click((event)=> {
  const message = new SpeechSynthesisUtterance("Hello, I am Rooboo I have been created by Sahar Sabah Amiri at 2023. I am a voice recognation bot. I can record your voice and read it for you again. You can use me for writing a book, or an essay. I can tell you a joke, or a qoute. I can also tell you the time and so many incredible things. I am still under development and this is just a basic version of me. Sahar will develop a new version of me very soon!");
  speechSynthesis.speak(message);
})

// handling Author Button

$("#author-btn").click((event)=> {
})

// handling Joke Button

$("#joke-btn").click((event)=> {
})

// handling qoute Button

$("#qoute-btn").click((event)=> {
})