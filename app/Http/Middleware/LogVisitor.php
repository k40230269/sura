<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\Visita;

class LogVisitor
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Registrar la visita
        Visita::create([
            'ip' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ]);

        // Continuar con la solicitud
        return $next($request);
    }
}

