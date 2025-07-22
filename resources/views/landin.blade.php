<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>SOAT Sura | Cotiza tu Seguro Obligatorio</title>
    <meta name="description" content="Compra tu SOAT con Sura. Rápido, seguro y fácil. Cobertura nacional con respaldo confiable.">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">

    <!-- Estilos -->
    <style>
        * {
            box-sizing: border-box;
        }
        body {
            font-family: 'Inter', sans-serif;
            margin: 0;
            padding: 0;
            color: #222;
            background-color: #f9f9f9;
        }
        .container {
            max-width: 720px;
            margin: 0 auto;
            padding: 2rem;
            text-align: center;
        }
        header {
            background-color: #0057A4;
            color: white;
            padding: 2rem 1rem;
            border-radius: 0 0 12px 12px;
        }
        header h1 {
            margin: 0;
            font-size: 2rem;
        }
        .benefits {
            margin: 2rem 0;
        }
        .benefits h2 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
        .benefits ul {
            list-style: none;
            padding: 0;
        }
        .benefits li {
            margin-bottom: 0.8rem;
            font-size: 1.1rem;
        }
        .cta {
            margin-top: 2rem;
        }
        .cta a {
            background-color: #FBC02D;
            color: #000;
            text-decoration: none;
            padding: 1rem 2rem;
            border-radius: 8px;
            font-weight: 600;
            font-size: 1.1rem;
            display: inline-block;
        }
        .cta a:hover {
            background-color: #f9a825;
        }
        footer {
            margin-top: 3rem;
            font-size: 0.9rem;
            color: #666;
        }

        @media (max-width: 600px) {
            header h1 {
                font-size: 1.6rem;
            }
            .cta a {
                width: 100%;
                box-sizing: border-box;
            }
        }

        section h2 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    color: #0057A4;
}
section ul, section ol {
    text-align: left;
    margin: 0 auto;
    max-width: 600px;
    padding-left: 1.2rem;
}
blockquote {
    background: #fff3cd;
    padding: 1rem;
    border-left: 4px solid #ffc107;
    margin: 1rem 0;
    font-style: italic;
    border-radius: 6px;
}
    </style>
</head>
<body>

    <div class="container">
        <header>
            <h1>Adquiere tu SOAT con Sura</h1>
            <p>Rápido, seguro y con cobertura nacional</p>
        </header>

        <section class="benefits">
            <h2>¿Qué incluye tu SOAT?</h2>
            <ul>
                <li>✅ Atención médica inmediata en accidentes de tránsito</li>
                <li>✅ Cobertura en todo el territorio colombiano</li>
                <li>✅ Indemnización por incapacidad o muerte</li>
                <li>✅ Gastos de transporte y hospitalización</li>
                <li>✅ Respaldo de una aseguradora confiable como SURA</li>
            </ul>
        </section>

        <section class="cta">
            <a href="{{ route('welcome') }}" rel="noopener noreferrer">
                Cotizar ahora
            </a>
        </section>

        <section class="faq">
            <h2>Preguntas frecuentes</h2>
            <ul>
                <li><strong>¿Es obligatorio el SOAT?</strong><br> Sí, es un seguro obligatorio exigido por la ley para todos los vehículos que circulan en Colombia.</li>
                <li><strong>¿Qué documentos necesito?</strong><br> Solo necesitas los datos del vehículo y del propietario.</li>
                <li><strong>¿Cuánto tiempo tarda la activación?</strong><br> La activación es inmediata una vez realizado el pago.</li>
                <li><strong>¿Cómo recibo mi SOAT?</strong><br> Te llegará al correo electrónico registrado en formato PDF.</li>
            </ul>
        </section>

        <section class="testimonials">
            <h2>Lo que dicen nuestros clientes</h2>
            <blockquote>“Rápido y sencillo. En menos de 10 minutos ya tenía el SOAT en mi correo.”<br>– Laura G.</blockquote>
            <blockquote>“Excelente atención y respaldo. SURA siempre responde.”<br>– Andrés P.</blockquote>
        </section>

        <section class="steps">
            <h2>¿Cómo obtener tu SOAT?</h2>
            <ol>
                <li>Ingresa tus datos del vehículo</li>
                <li>Selecciona el método de pago</li>
                <li>Recibe el SOAT en tu correo electrónico</li>
            </ol>
        </section>
<img src="https://www.sura.co/documents/1771353/1908200/Asistencia+en+caso+de+varada_1080x1080_1-1.webp" alt="Soat Sura" style="width:100%; border-radius: 8px; margin-top:1rem;">

        <footer>
            <p>© {{ date('Y') }} Seguros SURA. Esta página es informativa y dirige al sitio oficial de SURA.</p>
        </footer>
    </div>

</body>
</html>