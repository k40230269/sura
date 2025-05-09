<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Datos extends Model
{
    use HasFactory;

    protected $table = 'datos';

    protected $fillable = [
        'inicio',              // Fecha inicio de vigencia
        'tipo',                // Tipo de identificación (CC, CE, NIT)
        'identificacion',      // Número de identificación (único)
        'nombre',              // Nombre del tomador
        'apellidos',           // Apellidos del tomador
        'expedicion',          // Fecha de expedición del documento
        'pais_nacimiento',     // País de nacimiento
        'ciudad_circulacion',  // Ciudad de circulación
        'direccion',           // Dirección de residencia
        'correo',              // Correo electrónico
        'celular',             // Número de celular
        'precio'
    ];
}
