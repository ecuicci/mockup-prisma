exports.comenzarFlujo = async(req,res,next) => {
    try {
        let tipo, documento, genero;
    
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
        if(ultimosCuatroDigitosTar == "3333"){
            response={ 
                data: {
                    "data": "Perdon, no pude validar los datos de la tarjeta que ingresaste😔  Escribí los últimos 4 dígitos de la tarjeta por la que querés consultar."   
                }
                };
        }else{
            //cambiar a nro de tajeta
             if(ultimosCuatroDigitosTar == "4444"){
                response={ 
                    "data": [
                        {
                            "text_clean": "¡Perfecto! Te puedo ayudar con estos temas: 👇",
                        },
                        {
                            "label": "Saldo a pagar, cierre y vencimiento 💲",
                        },
                        {
                            "label": "Disponibles 💳",
                        },
                        {
                            "label": "Informar una compra 🛒",

                        },
                        {
                            "label": "Últimos movimientos 📄",
                        },
                        {
                            "label": "Registrar tus tarjetas para viaje ✈️",
                        },
                        {
                            "label": "Habilitar una tarjeta 🔓",
                        },
                        {
                            "label": "Ninguna de las anteriores",
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
            if(ultimosCuatroDigitosTar=="5678"){//respuesta Si al endpoit
                response={  
                    data: {
                        "data": "A partir de este momento su tarjeta se encuentra habilitada para consumos. ¿Te puedo ayudar con algo más? 👇"
                        }
                    }
            }if(ultimosCuatroDigitosTar=="9876"){
                response={  
                    data: {
                        "data": "La habilitación de tu tarjeta se procesó hoy pero podrás utilizarla desde las 00 hs. Además, podrás realizar consultas aquí a partir de mañana"
                        }
                    }
            }if(ultimosCuatroDigitosTar=="2345"){//
                response={  
                    data: {
                        "data": "A partir de este momento su tarjeta y la de sus adicionales se encuentra habilitada para consumos."
                        }
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
                    "data": "¡Hasta pronto! Estoy acá por cualquier consulta 👋"
                }
            };
        res.json(response);
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

exports.menuInicial = async(req,res,next) => {
    try {
     

        var response = "";
        // Enviar una respuesta JSON

        response={ 
            "data": [
                {
                    "label": "Saldo a pagar, cierre y vencimiento 💲",
                },
                {
                    "label": "Disponibles 💳",
                },
                {
                    "label": "Informar una compra 🛒",

                },
                {
                    "label": "Últimos movimientos 📄",
                },
                {
                    "label": "Registrar tus tarjetas para viaje ✈️",
                },
                {
                    "label": "Habilitar una tarjeta 🔓",
                },
                {
                    "label": "Ninguna de las anteriores",
                }
            ],
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
