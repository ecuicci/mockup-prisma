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

        if(documento == "33333333"){
            response={ 
                data: {
                    "data": "Perdón, no pude encontrar tarjetas con los datos que proporcionaste. Por favor, comunicate al  para más información."   
                }
                };
        }else{
             if(documento == "44444444"){
                response={ 
                    data: {
                            "0": "Ingrese la opcion que desea realizar:", 
                            "1": "Habilitar tarjetas.",
                            "2": "Consultar disponibles.",
                            "3": "Saldo a pagar, cierre y vencimientos.",
                            "4": "Informar una compra.",
                            "5": "Ultimos movimientos.",
                            "6": "Registrar tus tarjetas para viaje."
                        }
                    }
                }else{
               response={ 
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

exports.respuestaSi = async(req,res,next) => {
    try {
     

        var response = "";
        // Enviar una respuesta JSON

        response={ 
            data: {
                    "data": "Tu tarjeta ha sido habilitada exitosamente, puedes comenzar a utilizarla desde este momento."
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
