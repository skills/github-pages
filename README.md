<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Minha Rainha</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background: linear-gradient(to right, #ffdde1, #ee9ca7);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      padding: 20px;
      text-align: center;
    }
    h1 {
      font-size: 2.5em;
      margin-bottom: 10px;
      color: #fff;
    }
    p {
      font-size: 1.2em;
      color: #fff;
      margin-bottom: 30px;
    }
    .controls {
      background: #fff;
      padding: 20px;
      border-radius: 20px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }
    input[type="range"] {
      width: 100%;
    }
    button {
      margin-top: 10px;
      padding: 10px 20px;
      font-size: 1em;
      border: none;
      border-radius: 10px;
      background-color: #ee9ca7;
      color: white;
      cursor: pointer;
    }
    button:hover {
      background-color: #d86c84;
    }
  </style>
</head>
<body>
  <h1>Minha Rainha 👑</h1>
  <p>Este site é dedicado à pessoa mais especial do mundo: você.</p>

  <div class="controls">
    <label for="audioInput">Escolha sua música:</label><br/>
    <input type="file" id="audioInput" accept="audio/*" /><br/><br/>

    <audio id="audio" controls></audio><br/><br/>

    <label for="startTime">Início (segundos):</label>
    <input type="number" id="startTime" min="0" value="0" /><br/><br/>

    <label for="endTime">Fim (segundos):</label>
    <input type="number" id="endTime" min="0" value="30" /><br/><br/>

    <button onclick="playSegment()">Tocar trecho</button>
    <button onclick="stopAudio()">Parar</button>
  </div>

  <script>
    const audioInput = document.getElementById("audioInput");
    const audio = document.getElementById("audio");

    audioInput.addEventListener("change", function () {
      const file = this.files[0];
      if (file) {
        const objectURL = URL.createObjectURL(file);
        audio.src = objectURL;
      }
    });

    function playSegment() {
      const start = parseFloat(document.getElementById("startTime").value);
      const end = parseFloat(document.getElementById("endTime").value);
      
      audio.currentTime = start;
      audio.play();

      const checkTime = () => {
        if (audio.currentTime >= end) {
          audio.pause();
        } else {
          requestAnimationFrame(checkTime);
        }
      };
      requestAnimationFrame(checkTime);
    }

    function stopAudio() {
      audio.pause();
      audio.currentTime = 0;
    }
  </script>
</body>
</html>
