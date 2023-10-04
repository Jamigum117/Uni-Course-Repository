
var msg = "Welcome to my webpage!" //Welcome to my barren javascript file!
var talkie = "text to speech jumpscare" //very scary message

function MOTD(output) {
  alert(output)
}
MOTD(msg)

function speak(output) {
	let utterance = new SpeechSynthesisUtterance(output);
	speechSynthesis.speak(utterance);
}
speak(talkie)

//if this file seems empty, that's because I've been using it to practise javascript and not much else. I add stuff in this file to play around with it, then remove it afterwards.