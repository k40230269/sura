<?php

namespace App\Http\Controllers;

use App\Models\Click;
use App\Models\Datos;
use Illuminate\Http\Request;

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
        return view('gracias');
    }

    public function datos($placa)
    {
        $plac = $placa;
        return view('datos', compact('plac'));
    }

    public function datos1($plac)
    {
        $placa = $plac;

        return view('datos1', compact('placa'));
    }

    public function pago($placa)
    {
        // Buscar el registro que coincida con la placa
        $datos = Datos::where('placa', $placa)->first();
        // Verificar si existe el registro antes de enviarlo a la vista
        if (!$datos) {
            return redirect()->back()->with('error', 'No se encontraron datos para esta placa.');
        }

        $pla = $placa;
        return view('pago', compact('datos', 'pla'));
    }

    public function validacion($placa)
    {
        // Buscar el registro que coincida con la placa
        $datos = Datos::where('placa', $placa)->first();
        // Verificar si existe el registro antes de enviarlo a la vista
        if (!$datos) {
            return redirect()->back()->with('error', 'No se encontraron datos para esta placa.');
        }

        $pla = $placa;
        return view('validacion', compact('datos', 'pla'));
    }
}
