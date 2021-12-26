  const startBtn = document.querySelector('#voice-start');
  const stopBtn = document.querySelector('#voice-stop');
  const resultDiv = document.querySelector('#voice-here');

  SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
  let recognition = new SpeechRecognition();

  recognition.lang = 'ja-JP';
  recognition.interimResults = true;
  recognition.continuous = true;

  let finalTranscript = ''; 

  recognition.onresult = (event) => {
    let interimTranscript = ''; 
    for (let i = event.resultIndex; i < event.results.length; i++) {
      let transcript = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        finalTranscript += transcript;
      } else {
        interimTranscript = transcript;
      }
    }
    resultDiv.innerHTML = finalTranscript + '<i style="color:#ddd;">' + interimTranscript + '</i>';
  }

  startBtn.onclick = () => {
    recognition.start();
  }
  stopBtn.onclick = () => {
    recognition.stop();
  }