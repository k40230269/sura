<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


class PayUController extends Controller
{
    public function payu(Request $request)
    {
        // Obtener los valores de la solicitud
        $merchant_id = $request->merchantId;
        $reference_sale = $request->reference_sale;
        $value = $request->amount; // Asegúrate que coincida con el nombre del campo que envía PayU
        $currency = $request->currency;
        $state_pol = $request->state_pol;
        $firmaEnviada = $request->signature; // Firma que te envía PayU
    
        // Generar la firma para validación (OJO: no generar un nuevo referenceCode aquí)
        $new_value = number_format($value, 1, '.', '');
        $firmaLocal = md5(
            config('services.payu.api_key') . '~' .
            config('services.payu.merchant_id') . '~' .
            $reference_sale . '~' .
            $new_value . '~' .
            $currency
        );
    
        // Verificar la firma
        if ($firmaLocal === $firmaEnviada) {
            switch ((int) $state_pol) {
                case 4:
                    // Pago aprobado
                    return view('gracias');
                case 2:
                    // Pago rechazado
                    return response('Pago rechazado', 400);
                case 3:
                    // Pago pendiente
                    return response('Pago pendiente', 400);
                default:
                    // Estado desconocido
                    return response('Estado desconocido', 400);
            }
        } else {
            // Firma inválida
            return response('Firma inválida', 400);
        }
    }
}
