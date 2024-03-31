/* API PARA RECONHECIMENTO DE VOZ */
const button = document.getElementById("btn");
const speaks = document.getElementById("speaks");
const speaks_text = document.getElementById("speaks-text");

class SpeechApi {
  constructor() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    this.speechApi = new SpeechRecognition();
    this.speechApi.continuous = false;
    this.speechApi.lang = "en-US";
    
    this.speechApi.onstart = () => {
      button.textContent = "Estou Ouvindo";
      button.style.backgroundColor = "#fff";
      button.style.color = "#000000";
    };

    this.speechApi.onend = () => {
      button.textContent = "Responder";
      button.style.backgroundColor = "transparent";
      button.style.color = "#fff";
      createElementeColor();
    };

    this.speechApi.onresult = e => {
      console.log(e);
      // console.log(text_color.innerText);
      let resultIndex = e.resultIndex;
      let transcript = e.results[resultIndex][0].transcript;
      
      console.log(transcript);
      console.log(text_color.innerText);

      speaks.innerText = transcript;
      speaks_text.textContent = transcript;

      if (text_color.innerText.toLowerCase() === transcript.toLowerCase()) {
        speaks_text.display = "block";
        speaks.style.display = "block";
        updatePoints(1);
      } else {
        speaks_text.display = "block";
        speaks.style.display = "block";
        updatePoints(-1);
      }
    };
  };
  
  start() {
    this.speechApi.start();
  };

  stop() {
    this.speechApi.stop();
  };
};

const speech = new SpeechApi();

button.addEventListener("click", () => {
  speech.start();
});


