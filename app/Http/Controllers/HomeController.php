<?php

namespace App\Http\Controllers;

use App\Models\Click;
use App\Models\Datos;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class HomeController extends Controller
{
    public function index()
    {
        $click = Click::first();

        if ($click) {
            $click->increment('click'); // suma 1 al campo
        } else {
            // Si no existe, lo crea con 1 clic inicial
            $click = Click::create(['click' => 1]);
        }

        return view('cotiza');
    }

    public function gracias()
    {
         // Supongamos que quieres modificar el registro con ID = 1
        $click = Click::find(1); // Cambia el ID según sea necesario

        if ($click) {
            $click->click3 += 1;
            $click->save();
        }
        return view('gracias');
    }

    public function datos(Request $request)
    {
        $plac = strtoupper($request->input('placa'));
        $cilindraje = $request->input('cilindraje');
    
        $tipo = 'desconocido';
        $precio = 0; // Inicializamos el precio

        if (preg_match('/^[A-Z]{3}[0-9]{3}$/', $plac)) {
            $tipo = 'carro';
        } elseif (
            preg_match('/^[A-Z]{3}[0-9]{2}[A-Z]$/', $plac) || // AAA12A
            preg_match('/^[A-Z]{3}[0-9]{2}$/', $plac)         // AAA12
        ) {
            $tipo = 'moto';
        }

            // Validación del rango de cilindraje y asignación del precio
        if ($cilindraje) {
            if ($cilindraje == 1) {
                $precio = 243400; // Precio para 0 a 99 cc
            } elseif ($cilindraje == 2) {
                $precio = 326300; // Precio para 100 a 200 cc
            } elseif ($cilindraje == 3) {
                $precio = 758300; // Precio para 201 cc o más
            } elseif ($cilindraje == 4) {
                $precio = 789600; // Precio para 201 cc o más
            } elseif ($cilindraje == 5) {
                $precio = 942800; // Precio para 201 cc o más
            } elseif ($cilindraje == 6) {
                $precio = 1105900; // Precio para 201 cc o más
            }
        }
    
        return view('datos', compact('plac', 'tipo', 'cilindraje','precio'));
    }

    public function datos1($plac)
    {
        $placa = $plac;

            // Buscar en la base de datos el vehículo con esa placa
    $vehiculo = Datos::where('placa', $placa)->first();

    $cilindraje = $vehiculo ? $vehiculo->cilindraje : null;

    $precio = null;

    if (!is_null($cilindraje)) {
        if ($cilindraje == 1) {
            $precio = 243400; // Precio para 0 a 99 cc
        } elseif ($cilindraje == 2) {
            $precio = 326300; // Precio para 100 a 200 cc
        } elseif ($cilindraje == 3) {
            $precio = 758300; // Precio para 201 cc o más
        } elseif ($cilindraje == 4) {
            $precio = 789600; // Precio para 201 cc o más
        } elseif ($cilindraje == 5) {
            $precio = 942800; // Precio para 201 cc o más
        } elseif ($cilindraje == 6) {
            $precio = 1105900; // Precio para 201 cc o más
        }
    }

        return view('datos1', compact('placa','precio'));
    }

    

    public function pago($placa)
    {
        // Buscar el registro que coincida con la placa
        $datos = Datos::where('placa', $placa)->first();
        // Verificar si existe el registro antes de enviarlo a la vista
        if (!$datos) {
            return redirect()->back()->with('error', 'No se encontraron datos para esta placa.');
        }

        $cilindraje = $datos ? $datos->cilindraje : null;

        $email = $datos->correo;

        $precio = null;
    
        if (!is_null($cilindraje)) {
            if ($cilindraje == 1) {
                $precio = 243400; // Precio para 0 a 99 cc
            } elseif ($cilindraje == 2) {
                $precio = 326300; // Precio para 100 a 200 cc
            } elseif ($cilindraje == 3) {
                $precio = 758300; // Precio para 201 cc o más
            } elseif ($cilindraje == 4) {
                $precio = 789600; // Precio para 201 cc o más
            } elseif ($cilindraje == 5) {
                $precio = 942800; // Precio para 201 cc o más
            } elseif ($cilindraje == 6) {
                $precio = 1105900; // Precio para 201 cc o más
            }
        }

        $pla = $placa;    

           // Generar la firma de PayU con el precio y el referenceCode
        $firmaData = $this->generateFirmaPayU($precio);


        return view('pago', [
            'datos' => $datos,
            'pla' => $pla,
            'precio' => $precio,
            'email' => $email,
            'firmaData' => $firmaData // Aquí pasamos correctamente la variable
        ]);
    }

    public function generateFirmaPayU($precio){
    
    $referenceCode = Str::random(20);

      // Generar la firma para validación
      $signature = md5(config('services.payu.api_key') . '~' . config('services.payu.merchant_id') . '~' . $referenceCode . '~' . $precio . '~' . config('services.payu.currency'));
    
        return [
            'referenceCode' => $referenceCode,
            'signature' => $signature
        ];
    }

    public function validacion($placa)
    {

        $click = Click::first();

        if ($click) {
            $click->increment('click2'); // suma 1 al campo
        } else {
            // Si no existe, lo crea con 1 clic inicial
            $click = Click::create(['click2' => 1]);
        }

        // Buscar el registro que coincida con la placa
        $datos = Datos::where('placa', $placa)->first();
        // Verificar si existe el registro antes de enviarlo a la vista
        if (!$datos) {
            return redirect()->back()->with('error', 'No se encontraron datos para esta placa.');
        }

    $cilindraje = $datos ? $datos->cilindraje : null;

    $precio = null;

    if (!is_null($cilindraje)) {
        if ($cilindraje == 1) {
            $precio = 243400; // Precio para 0 a 99 cc
        } elseif ($cilindraje == 2) {
            $precio = 326300; // Precio para 100 a 200 cc
        } elseif ($cilindraje == 3) {
            $precio = 758300; // Precio para 201 cc o más
        } elseif ($cilindraje == 4) {
            $precio = 789600; // Precio para 201 cc o más
        } elseif ($cilindraje == 5) {
            $precio = 942800; // Precio para 201 cc o más
        } elseif ($cilindraje == 6) {
            $precio = 1105900; // Precio para 201 cc o más
        }
    }

        $pla = $placa;
        return view('validacion', compact('datos', 'pla','precio'));
    }
}
