<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Saray</title>
    <style>
        body {
            background-color: #000;
            margin: 0;
            padding: 0;
            overflow: hidden;
        }
        .nombre {
            position: absolute;
            font-size: 50px;
            color: #FF69B4;
            font-weight: bold;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        .frase {
            position: absolute;
            font-size: 30px;
            color: #FF69B4;
            font-weight: bold;
            animation: aparecer 2s;
        }
        @keyframes aparecer {
            0% {
                opacity: 0;
                transform: scale(0.5);
            }
            100% {
                opacity: 1;
                transform: scale(1);
            }
        }
    </style>
</head>
<body>
    <div class="nombre">Saray</div>
    <script>
        document.addEventListener('click', (e) => {
            const frase = document.createElement('div');
            frase.classList.add('frase');
            frase.textContent = 'La mejor futbolista';
            frase.style.top = `${e.clientY}px`;
            frase.style.left = `${e.clientX - frase.offsetWidth / 2}px`;
            document.body.appendChild(frase);

            setTimeout(() => {
                frase.remove();
            }, 2000);
        });
    </script>
</body>
</html>
