/* API PARA RECONHECIMENTO DE VOZ */
const button = document.getElementById("btn");

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

    this.speechApi.endstart = () => {
      button.textContent = "Responder";
      button.style.backgroundColor = "transparent";
      button.style.color = "#fff";
    };

    this.speechApi.onresult = e => {
      // console.log(e);
      // console.log(text_color.innerText);
      let resultIndex = e.resultIndex;
      let transcript = e.results[resultIndex][0].transcript;
      console.log(transcript);

      if (text_color.innerText === transcript) {
        updatePoints(1);
      } else {
        updatePoints(-1)
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


