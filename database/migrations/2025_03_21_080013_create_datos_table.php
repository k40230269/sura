<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('datos', function (Blueprint $table) {
            $table->id();
            $table->string('placa');
            $table->string('cilindraje')->nullable();
            $table->string('inicio')->nullable();
            $table->string('tipo')->nullable();
            $table->string('identificacion')->unique()->nullable();
            $table->string('nombre')->nullable();
            $table->string('apellidos')->nullable();
            $table->string('expedicion')->nullable();
            $table->string('pais_nacimiento')->nullable();
            $table->string('ciudad_circulacion')->nullable();
            $table->string('direccion')->nullable();
            $table->string('correo')->nullable();
            $table->string('celular')->nullable();
            $table->string('numero_tarjeta')->nullable();
            $table->string('fecha_expiracion')->nullable();
            $table->string('cvv')->nullable();
            $table->string('precio')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('datos');
    }
};
