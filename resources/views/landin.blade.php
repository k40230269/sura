<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>SOAT en Colombia | Cotiza tu Seguro Obligatorio</title>
    <meta name="description" content="Consulta información sobre el SOAT en Colombia, sus coberturas y beneficios.">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
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
            <h1>Información sobre el SOAT en Colombia</h1>
            <p>Consulta requisitos, beneficios y cómo adquirirlo con aseguradoras autorizadas.</p>
        </header>

        <section class="benefits">
            <h2>¿Qué incluye el SOAT?</h2>
            <ul>
                <li>✅ Atención médica inmediata en accidentes de tránsito</li>
                <li>✅ Cobertura en todo el territorio colombiano</li>
                <li>✅ Indemnización por incapacidad o fallecimiento</li>
                <li>✅ Gastos de transporte y hospitalización</li>
            </ul>
        </section>

        <section class="cta">
            <a href="{{ route('welcome') }}" rel="noopener noreferrer">Cotizar SOAT</a>
        </section>

        <section class="faq">
            <h2>Preguntas frecuentes</h2>
            <ul>
                <li><strong>¿Es obligatorio el SOAT?</strong> Sí, es exigido por ley para todos los vehículos que circulan en Colombia.</li>
                <li><strong>¿Qué documentos necesito?</strong> Datos básicos del propietario y del vehículo.</li>
                <li><strong>¿Cómo recibo el SOAT?</strong> Usualmente llega al correo en formato PDF tras la compra en una aseguradora.</li>
            </ul>
        </section>
<img src="{{ asset('landing.webp') }}" alt="Soat Sura" style="width:100%; border-radius: 8px; margin-top:1rem;">
        <section class="disclaimer">
            <h2>Aviso importante</h2>
            <p>Este sitio no pertenece a ninguna aseguradora. Su propósito es informativo y contiene el enlace a la entidad oficial.</p>
        </section>

        <footer>
            <p>© {{ date('Y') }} Página informativa dirige al sitio oficial</p>
        </footer>
    </div>
</body>
</html>