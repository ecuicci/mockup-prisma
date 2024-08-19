exports.comenzarFlujo = async(req,res,next) => {
    try {
        let tipo, documento, genero;
    
        console.log("body");
        console.log(req.query.documento);
     // Verificar si los parámetros están en el cuerpo de la solicitud (POST)
     if (req.method === 'POST' && req.body) {
        tipo = req.body.tipo;
        documento = req.body.documento;
        genero = req.body.genero;
        ultimosCuatroDigitosTar = req.body.ultimosCuatroDigitosTar;
     }
    
     // Verificar si los parámetros están en la cadena de consulta (GET)
     if (req.method === 'GET' && req.query) {
        tipo = req.query.tipo;
        documento = req.query.documento;
        genero = req.query.genero;
        ultimosCuatroDigitosTar = req.query.ultimosCuatroDigitosTar;
     }
     console.log("documento");
     console.log(documento);
        var response = "";
        // Enviar una respuesta JSON

        //si falta algun dato
        if (tipo=="" || documento =="" || genero == "" ){
            response={ 
                data: {
                    "data": " Los campos tipo, documento y genero son requeridos",
                    "status": "failed",
                    "code": 500
                }
            };
        }
        //cambiar a nro de tajeta
        if(documento == "33333333"){
            response={ 
                data: {
                    "data": "Perdon, no pude validar los datos de la tarjeta que ingresaste😔  Escribí los últimos 4 dígitos de la tarjeta por la que querés consultar."   
                }
                };
        }else{
            //cambiar a nro de tajeta
             if(documento == "44444444"){
                response={ 
                    "data": [
                        {
                            "label": "Saldo a pagar, cierre y vencimiento 💲",
                            "type": "message",
                            "value": "Saldo a pagar, cierre y vencimiento 💲"
                        },
                        {
                            "label": "Disponibles 💳",
                            "type": "message",
                            "value": "Disponibles 💳"
                        },
                        {
                            "label": "Informar una compra 🛒",
                            "type": "message",
                            "value": "Informar una compra 🛒"
                        },
                        {
                            "label": "Últimos movimientos 📄",
                            "type": "message",
                            "value": "Últimos movimientos 📄"
                        },
                        {
                            "label": "Registrar tus tarjetas para viaje ✈️",
                            "type": "message",
                            "value": "Registrar tus tarjetas para viaje ✈️"
                        },
                        {
                            "label": "Habilitar una tarjeta 🔓",
                            "type": "message",
                            "value": "Habilitar una tarjeta 🔓"
                        },
                        {
                            "label": "Ninguna de las anteriores",
                            "type": "message",
                            "value": "Ninguna de las anteriores"
                        }
                    ],
                    }
                }else{
               response={ 
                //cambiar a texto actual de prisma
                    data: {
                     "data": "👉 Para comenzar a utilizar esta tarjeta primero debes habilitarla. ¿Querés habilitarla ahora? 👇"
                    }
                }; 
            }

       

        }
        res.json(response);
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}


exports.enviarCuatroDigitos = async(req,res,next) => {
    try {
        let ultimosCuatroDigitosTar;
    
     
     // Verificar si los parámetros están en el cuerpo de la solicitud (POST)
     if (req.method === 'POST' && req.body) {
        ultimosCuatroDigitosTar = req.body.ultimosCuatroDigitosTar;
     }
    
     // Verificar si los parámetros están en la cadena de consulta (GET)
     if (req.method === 'GET' && req.query) {
        ultimosCuatroDigitosTar = req.body.ultimosCuatroDigitosTar;
     }

        //si no envia datos
        if (ultimosCuatroDigitosTar==""){
            response={ 
                data: {
                    "data": " El campo ultimosCuatroDigitosTar es requerido",
                    "status": "failed",
                    "code": 500
                }
            };
        }
        var response = "";
        // Enviar una respuesta JSON

        if(ultimosCuatroDigitosTar=="1234"){
            response={  
                data: {
                        "data": "No pude habilitar tu tarjeta. No te preocupes te voy a derivar con un agente para asesorarte."
                    }
                }
        }else{
            response={  
                    data: {
                        "data": "Tu tarjeta ha sido habilitada exitosamente, puedes comenzar a utilizarla desde este momento."
                        }
                    }
        }

        res.json(response);
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

exports.respuestaNoHabilitar = async(req,res,next) => {
    try {
     

        var response = "";
        // Enviar una respuesta JSON

        response={ 
            data: {
                    "data": "¿Puedo ayudarte con algo mas?"
                }
            };
        res.json(response);
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

exports.salir = async(req,res,next) => {
    try {
     

        var response = "";
        // Enviar una respuesta JSON

        response={ 
            data: {
                    "data": "Hasta pronto! Estoy aca por cualquier consulta"
                }
            };
        res.json(response);
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

exports.respuestaSiOK = async(req,res,next) => {
    try {
     

        var response = "";
        // Enviar una respuesta JSON

        response={ 
            data: {
                    "data": "A partir de este momento su tarjeta se encuentra habilitada para consumos. Te puedo ayudar con algo mas?"
                }
            };
        res.json(response);
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

exports.respuestaSiNoKEnHorario = async(req,res,next) => {
    try {
     

        var response = "";
        // Enviar una respuesta JSON

        response={ 
            data: {
                    "data": "No pude habilitar tu tarjeta. No te preocupes te voy a derivar con un agente para asesorarte."
                }
            };
        res.json(response);
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

exports.respuestaSiNoKFueraHorario = async(req,res,next) => {
    try {
     

        var response = "";
        // Enviar una respuesta JSON

        response={ 
            data: {
                    "data": "No pude habilitar tu tarjeta, por favor comunicate al 4347-0000 para que podamos ayudarte. Gracias por contactarte."
                }
            };
        res.json(response);
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}


exports.respuestaOpc1 = async(req,res,next) => {
    try {
     

        var response = "";
        // Enviar una respuesta JSON

        response={ 
            data: {
                    "data": "Por favor ingrese los ultimos 4 digitos de la tarjeta que desea habilitar."
                }
            };
        res.json(response);
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}
