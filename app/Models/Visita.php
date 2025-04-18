<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Visita extends Model
{
    use HasFactory;

    // Definir el nombre de la tabla en la base de datos
    protected $table = 'visitas';  // Aquí defines el nombre de la tabla que quieres usar

    // Definir los campos que se pueden llenar de manera masiva
    protected $fillable = [
        'ip',
        'user_agent',
        'fecha',
    ];

    // Si quieres especificar que el campo 'fecha' debe ser gestionado como timestamp
    // protected $dates = ['fecha'];
}
