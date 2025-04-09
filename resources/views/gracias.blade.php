<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transacción en Proceso</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            text-align: center;
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 500px;
        }
        .icon {
            font-size: 50px;
            color: #007bff;
        }
        h2 {
            color: #333;
        }
        p {
            color: #555;
            font-size: 16px;
            margin: 10px 0;
        }
        .loading {
            width: 40px;
            height: 40px;
            border: 5px solid #ccc;
            border-top: 5px solid #007bff;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 20px auto;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body>

    <div class="container">
        <div class="icon">🔄</div>
        <h2>Transacción en Proceso</h2>
        <p>Tu transacción está siendo validada. En breves momentos recibirás una notificación al correo registrado con el estado de la transacción.</p>
        <p>Si la validación es exitosa, recibirás el SOAT adjunto.</p>
        <div class="loading"></div>
    </div>
    <script>
        setTimeout(function() {
            window.location.href = "https://www.sura.co/seguros/personas/movilidad/soat"; // Cambia esto por la URL de destino
        }, 10000); // 10 segundos (10000 milisegundos)
    </script>
</body>
</html>