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
  const message = new SpeechSynthesisUtterance("Hi, My author is Sahar Saba Amiri a passionate Software Engineer from Afghanistan. She has graduated from Kabul University. Actually, she is a hardworking girl and worked in different small and large software projects. She is familiar with different software development methodologies such as Agile, Scrum, and Waterfall. She is also familiar with different programming languages such as Java, Ruby, My SQL, Mongo DB, JavaScript and PHP. Also different frameworks such as Bootstrap, Tailwind CSS, React, Redux, Node JS and Express. She Loves helping people, working in teams and learning about new technologies.");
  speechSynthesis.speak(message);

})

// handling Joke Button

$("#joke-btn").click((event)=> {
  const message = new SpeechSynthesisUtterance("Ha ha ha ha, My favorite joke is that, 'A pair of cows were talking in the field. One says, 'Have you heard about the mad cow disease that is going around?' the other one said, Yeah, makes me glad I'm a penguin. Ha haa ha ha haa haa!,  loool!' ");
  speechSynthesis.speak(message);
})

// handling qoute Button

$("#qoute-btn").click((event)=> {
  const message = new SpeechSynthesisUtterance("Actually, I have a lot of favorite qoutes, but one of them is that, 'Build a beautiful life, make a beautiful world. Sahar Saba Amiri' ");
  speechSynthesis.speak(message);
})