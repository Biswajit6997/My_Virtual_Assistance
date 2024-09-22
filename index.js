// let btn=document.querySelector("#btn")
// let content=document.querySelector("#content")
// let voice=document.querySelector("#voice")


// function speak(text){
//     let text_speak=new SpeechSynthesisUtterance(text)
//     text_speak.rate=1
//     text_speak.pitch=1
//     text_speak.volume=1;
//     text_speak.lang="hi-GB"
//     window.speechSynthesis.speak(text_speak)

// }
// function wishMe(){
//     let day=new Date()
//     let hours=day.getHours();
//     if(hours>=0 && hours<12){
//         speak("Good Moring Sir")
//     }
//     else if(hours>=12 && hours<16){
//         speak("Good Afternoo Sir")
//     }
//     else{
//         speak("Good evening sir")

//     }
    
// }
// window.addEventListener('load',()=>{
//     wishMe()
// })

// let speechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition
// let recognition=new speechRecognition();



// recognition.onresult=(event)=>{
//     let currentIndex=event.resultIndex
//     let transcript=event.results[currentIndex][0].transcript
//     content.innerText=transcript
//     // console.log(event)
//     takeCommand(transcript.toLowerCase())

    
// }
// btn.addEventListener("click",()=>{

//     recognition.start()
//     btn.style.display="none"
//     voice.style.display="block"
// })
// function takeCommand(message){
//      btn.style.display="flex"
//       voice.style.display="none"

//     if(message.includes("hello")||message.includes("hey")){
//         speak("Hello sir,what can i help you")
//     }
//     else if(message.includes("who are you")){
//         speak("I am Virtual assistance ,created By Biswajit Sir")
//     }
//     else if(message.includes("how are you")){
//         speak("I am fine..what about You?")
//     }
//     else if(message.includes("open youtube")||message.includes("opening youtube")){
//         speak("opening youtube..")
//         window.open("https://www.youtube.com/","_blank")
//     }
//     else if(message.includes("open google")||message.includes("opening google")){
//         speak("opening google.")
//         window.open("https://www.google.com/","_blank")
//     }
//     else if(message.includes("open facebook")||message.includes("opening facebook")){
//         speak("opening  facebook.")
//         window.open("https://www.facebook.com/","_blank")
//     }
//     else if(message.includes("open calculator")||message.includes("opening calculator")){
//         speak("opening calculator..")
//         window.open("calculator://")
//     }
//     else if(message.includes("open whatsapp")||message.includes("opening whatsapp")){
//         speak("opening whatsapp..")
//         window.open("whatsapp://")
//     }
//     else if(message.includes("time")){
//         let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
//         speak(time)
//     }
//     else if(message.includes("date")){
//         let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short",year:"numeric"})
//         speak(date)
//     }
//     else{
//         let finaltext="this is what i found on internet regurding "+message.replace("shipra","")||message.replace("shifra","")
//         speak(finaltext)
//         window.open(`https://www.google.com/search?q=${message.replace("shipra","")}`,"_blank")
//     }
// }
let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

let greeted = false;  // This flag ensures greeting only happens once.

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-GB";
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    if (greeted) return;  // Don't greet more than once.
    
    let day = new Date();
    let hours = day.getHours();
    
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir");
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon Sir");
    } else {
        speak("Good Evening Sir");
    }

    greeted = true;  // Set flag to true to avoid repeating greeting.
}

window.addEventListener('load', () => {
    wishMe();  // Greet the user once on page load.
});

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript.toLowerCase();
    content.innerText = transcript;

    takeCommand(transcript);
};

btn.addEventListener("click", () => {
    recognition.start();
    btn.style.display = "none";
    voice.style.display = "block";
});

function takeCommand(message) {
    btn.style.display = "flex";
    voice.style.display = "none";

    // Greet the user when they start interacting with the assistant.
    if (!greeted) {
        wishMe();
    }

    if (message.includes("hello") || message.includes("hey")) {
        speak("Hello sir, what can I help you with?");
    } else if (message.includes("who are you")) {
        speak("I am a Virtual Assistant, created by Biswajit Sir");
    } else if (message.includes("how are you")) {
        speak("I am fine.. what about you?");
    } else if (message.includes("open youtube") || message.includes("opening youtube")) {
        speak("Opening YouTube...");
        window.open("https://www.youtube.com/", "_blank");
    } else if (message.includes("open google") || message.includes("opening google")) {
        speak("Opening Google.");
        window.open("https://www.google.com/", "_blank");
    } else if (message.includes("open facebook") || message.includes("opening facebook")) {
        speak("Opening Facebook.");
        window.open("https://www.facebook.com/", "_blank");
    } else if (message.includes("open calculator") || message.includes("opening calculator")) {
        speak("Opening calculator...");
        // Local app launch not possible from browser; remove this line or keep for future desktop use
    } else if (message.includes("open whatsapp") || message.includes("opening whatsapp")) {
        speak("Opening WhatsApp...");
        window.open("https://web.whatsapp.com/", "_blank");
    } else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak(`The time is ${time}`);
    } else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short", year: "numeric" });
        speak(`Today's date is ${date}`);
    } else {
        let finaltext = "This is what I found on the internet regarding " + message;
        speak(finaltext);
        window.open(`https://www.google.com/search?q=${message}`, "_blank");
    }
}
