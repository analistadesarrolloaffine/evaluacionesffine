/**
 * Datos de evaluación UNIGAS — generado desde unigasproyecto.xlsx
 * Escala de calificación 1 a 4 (en % = nota / 4 × 100).
 * PUNTAJE_DESEMPENO (eje X) = competencias. Promedio por rol ponderado:
 *     Auto 20% · Jefe 50% · Colaborador o Par 30%
 *     sin colaborador ni par → Auto 40% · Jefe 60%
 * PUNTAJE_POTENCIAL (eje Y) = Instrumento de Potencial, calificado solo por el jefe.
 * NOTA_FINAL = 80% competencias + 20% potencial.
 * COMPLETO = false → falta competencias o potencial del jefe; no se ubica en el 9box.
 */
window.EVAL_UNIGAS = {
 "empresa": "UNIGAS",
 "medicion": "Evaluación de Competencias UNIGAS 2026",
 "fuente": "unigasproyecto.xlsx · Matriz_de_Evaluacion_UNIGAS (áreas) · unigasfeecbak / unigass_feedbac_actions",
 "reglas": {
  "comp_escala_max": 4,
  "eje_x": {
   "nombre": "Competencias",
   "corto": "Comp.",
   "campo_escala": "COMP_ESCALA",
   "escala": 4,
   "falta": "sin calificación de competencias"
  },
  "eje_y": {
   "nombre": "Potencial",
   "corto": "Pot.",
   "campo_escala": "POT_ESCALA",
   "escala": 4,
   "falta": "sin calificación de potencial del jefe"
  },
  "nota_texto": "80% comp. + 20% pot.",
  "nota_campo_escala": "NOTA_ESCALA",
  "grupos_competencias": [
   {
    "nombre": "Competencias organizacionales",
    "items": [
     "Comunicación Efectiva",
     "Innovación y Mejora continua",
     "Orientación al logro"
    ]
   },
   {
    "nombre": "Competencias administrativas",
    "items": [
     "Proactividad",
     "Sentido de Urgencia"
    ]
   },
   {
    "nombre": "Competencias soporte",
    "items": [
     "Orientación a los procesos",
     "Resilencia"
    ]
   },
   {
    "nombre": "Otras competencias",
    "resto": true
   }
  ]
 },
 "empleados": [
  {
   "CC": "1000128302",
   "NOMBRE": "Diego Alexander Ocaña Vargas",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Jairo Gilberto Fino",
   "COMP_AUTO": 3.27,
   "COMP_JEFE": 3.0,
   "COMP_COLAB": 3.87,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.31,
   "POT_ESCALA": 2.8,
   "PUNTAJE_DESEMPENO": 82.8,
   "PUNTAJE_POTENCIAL": 70.0,
   "NOTA_FINAL": 80.2,
   "NOTA_ESCALA": 3.21,
   "COMPETENCIAS": [
    {
     "nombre": "Resilencia",
     "puntaje": 3.43
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.33
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.3
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.3
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.2
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Jairo Gilberto Fino",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Jairo Gilberto Fino",
     "cc_evaluador": "7317617",
     "rol": "Jefe",
     "aspectos": "Colaborador amable y responsable, se destaca por su trabajo en equipo",
     "recomendaciones": "Perfeccionar protocolo de servicio y Presentación del uniforme de trabajo",
     "fecha": "2026-09-10",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1000223882",
   "NOMBRE": "Edson David Renteria Caro",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Manuel Crisanto Aguilera Hernandez",
   "COMP_AUTO": null,
   "COMP_JEFE": 3.93,
   "COMP_COLAB": null,
   "ROL3": "Par",
   "PESOS_ROL": {
    "jefe": 100.0
   },
   "COMP_ESCALA": 3.93,
   "POT_ESCALA": 3.6,
   "PUNTAJE_DESEMPENO": 98.3,
   "PUNTAJE_POTENCIAL": 90.0,
   "NOTA_FINAL": 96.6,
   "NOTA_ESCALA": 3.87,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 4.0
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 4.0
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 4.0
    },
    {
     "nombre": "Resilencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.67
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 4.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Manuel Crisanto Aguilera Hernandez",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Manuel Crisanto Aguilera Hernandez",
     "cc_evaluador": "79767944",
     "rol": "Jefe",
     "aspectos": "es muy buen vendedor y colaborador",
     "recomendaciones": "ninguna",
     "fecha": "2026-09-04",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1000459130",
   "NOMBRE": "Natalia Ruiz Hernandez",
   "CARGO": "ASISTENTE ADMINISTRATIVO",
   "AREA": "Gerencia General",
   "JEFE": "Lucero Andrea Bernal Chacon",
   "COMP_AUTO": 3.8,
   "COMP_JEFE": 3.2,
   "COMP_COLAB": 3.8,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.5,
   "POT_ESCALA": 2.6,
   "PUNTAJE_DESEMPENO": 87.5,
   "PUNTAJE_POTENCIAL": 65.0,
   "NOTA_FINAL": 83.0,
   "NOTA_ESCALA": 3.32,
   "COMPETENCIAS": [
    {
     "nombre": "Proactividad",
     "puntaje": 3.77
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.6
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.5
    },
    {
     "nombre": "Sentido de Urgencia",
     "puntaje": 3.5
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.13
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 2.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Lucero Andrea Bernal Chacon",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Lucero Andrea Bernal Chacon",
     "cc_evaluador": "52662402",
     "rol": "Jefe",
     "aspectos": "Frente a nuevas oportunidades de desarrollo, responde de manera positiva",
     "recomendaciones": "Debe seguir trabajando en su carácter y el control de sus emociones.",
     "fecha": "2026-09-17",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1002480075",
   "NOMBRE": "Julian Santiago Sarmiento Torres",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Cesar Fernando Lopez Lopez",
   "COMP_AUTO": null,
   "COMP_JEFE": 2.0,
   "COMP_COLAB": null,
   "ROL3": "Par",
   "PESOS_ROL": {
    "jefe": 100.0
   },
   "COMP_ESCALA": 2.0,
   "POT_ESCALA": 2.0,
   "PUNTAJE_DESEMPENO": 50.0,
   "PUNTAJE_POTENCIAL": 50.0,
   "NOTA_FINAL": 50.0,
   "NOTA_ESCALA": 2.0,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.33
    },
    {
     "nombre": "Resilencia",
     "puntaje": 2.33
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.0
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 1.33
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 2.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 1.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 1.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Cesar Fernando Lopez Lopez",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "1002522786",
   "NOMBRE": "Jesus Alirio Rojas Cortes",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Luz Amanda Cruz Varela",
   "COMP_AUTO": 3.07,
   "COMP_JEFE": 3.0,
   "COMP_COLAB": 3.0,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.01,
   "POT_ESCALA": 2.6,
   "PUNTAJE_DESEMPENO": 75.3,
   "PUNTAJE_POTENCIAL": 65.0,
   "NOTA_FINAL": 73.2,
   "NOTA_ESCALA": 2.93,
   "COMPETENCIAS": [
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.07
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.0
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Luz Amanda Cruz Varela",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "1003565255",
   "NOMBRE": "Sara Valentina Caicedo Barazeta",
   "CARGO": "ASISTENTE ADMINISTRATIVO EDS",
   "AREA": "Estaciones",
   "JEFE": "Manuel Crisanto Aguilera Hernandez",
   "COMP_AUTO": 3.73,
   "COMP_JEFE": 3.93,
   "COMP_COLAB": 4.0,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.91,
   "POT_ESCALA": 3.8,
   "PUNTAJE_DESEMPENO": 97.8,
   "PUNTAJE_POTENCIAL": 95.0,
   "NOTA_FINAL": 97.2,
   "NOTA_ESCALA": 3.89,
   "COMPETENCIAS": [
    {
     "nombre": "Resilencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.93
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.93
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.93
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.77
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 4.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 4.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 4.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Manuel Crisanto Aguilera Hernandez",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Manuel Crisanto Aguilera Hernandez",
     "cc_evaluador": "79767944",
     "rol": "Jefe",
     "aspectos": "excelente colaboradora y en lo aspecto de trato con los compañeros es muy excelente",
     "recomendaciones": "ninguna",
     "fecha": "2026-09-04",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1003913421",
   "NOMBRE": "Cristian Camilo Chavez Garcia",
   "CARGO": "DESARROLLADOR JUNIOR",
   "AREA": "TIC",
   "JEFE": "Juan Pablo Cabezas Galindo",
   "COMP_AUTO": 3.33,
   "COMP_JEFE": 2.87,
   "COMP_COLAB": 3.07,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.02,
   "POT_ESCALA": 2.6,
   "PUNTAJE_DESEMPENO": 75.5,
   "PUNTAJE_POTENCIAL": 65.0,
   "NOTA_FINAL": 73.4,
   "NOTA_ESCALA": 2.94,
   "COMPETENCIAS": [
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.3
    },
    {
     "nombre": "Sentido de Urgencia",
     "puntaje": 3.23
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.17
    },
    {
     "nombre": "Proactividad",
     "puntaje": 2.87
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.53
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 1.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Juan Pablo Cabezas Galindo",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "1005485203",
   "NOMBRE": "Hector Julio Forero Medina",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Martha Vianet Avila León",
   "COMP_AUTO": 2.4,
   "COMP_JEFE": 3.07,
   "COMP_COLAB": 3.47,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.05,
   "POT_ESCALA": 3.0,
   "PUNTAJE_DESEMPENO": 76.3,
   "PUNTAJE_POTENCIAL": 75.0,
   "NOTA_FINAL": 76.0,
   "NOTA_ESCALA": 3.04,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.47
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.07
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.07
    },
    {
     "nombre": "Resilencia",
     "puntaje": 2.87
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.8
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Martha Vianet Avila León",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "1007477411",
   "NOMBRE": "Oscar Andres Delgadillo Medina",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Martha Vianet Avila León",
   "COMP_AUTO": 3.27,
   "COMP_JEFE": 2.93,
   "COMP_COLAB": 2.67,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.92,
   "POT_ESCALA": 2.4,
   "PUNTAJE_DESEMPENO": 73.0,
   "PUNTAJE_POTENCIAL": 60.0,
   "NOTA_FINAL": 70.4,
   "NOTA_ESCALA": 2.82,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.0
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.97
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.93
    },
    {
     "nombre": "Resilencia",
     "puntaje": 2.87
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.83
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Martha Vianet Avila León",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "1010004247",
   "NOMBRE": "Mónica Juliana Martínez Lopez",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Aneider Tovar Quimbaya",
   "COMP_AUTO": 3.67,
   "COMP_JEFE": 2.73,
   "COMP_COLAB": null,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA": 3.11,
   "POT_ESCALA": 1.6,
   "PUNTAJE_DESEMPENO": 77.7,
   "PUNTAJE_POTENCIAL": 40.0,
   "NOTA_FINAL": 70.2,
   "NOTA_ESCALA": 2.81,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.2
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.2
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.2
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.2
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.73
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 2.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 1.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 1.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 1.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Aneider Tovar Quimbaya",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "1010076255",
   "NOMBRE": "Juliana Katherine Galindo Donoso",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Manuel Crisanto Aguilera Hernandez",
   "COMP_AUTO": null,
   "COMP_JEFE": 3.47,
   "COMP_COLAB": null,
   "ROL3": "Par",
   "PESOS_ROL": {
    "jefe": 100.0
   },
   "COMP_ESCALA": 3.47,
   "POT_ESCALA": 3.2,
   "PUNTAJE_DESEMPENO": 86.7,
   "PUNTAJE_POTENCIAL": 80.0,
   "NOTA_FINAL": 85.4,
   "NOTA_ESCALA": 3.41,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.67
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.67
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.33
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.33
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.33
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Manuel Crisanto Aguilera Hernandez",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Manuel Crisanto Aguilera Hernandez",
     "cc_evaluador": "79767944",
     "rol": "Jefe",
     "aspectos": "es muy buena trabajadora y colaboradora",
     "recomendaciones": "ninguna",
     "fecha": "2026-08-27",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1012331310",
   "NOMBRE": "Pena Jomara Alejandra Caviedes",
   "CARGO": "ASISTENTE ADMINISTRATIVO EDS",
   "AREA": "Estaciones",
   "JEFE": "Jairo Gilberto Fino",
   "COMP_AUTO": 4.0,
   "COMP_JEFE": 3.07,
   "COMP_COLAB": 3.4,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.35,
   "POT_ESCALA": 2.6,
   "PUNTAJE_DESEMPENO": 83.8,
   "PUNTAJE_POTENCIAL": 65.0,
   "NOTA_FINAL": 80.0,
   "NOTA_ESCALA": 3.2,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.5
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.47
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.3
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.3
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.2
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Jairo Gilberto Fino",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Jairo Gilberto Fino",
     "cc_evaluador": "7317617",
     "rol": "Jefe",
     "aspectos": "Colaboradora ágil y dinámica que se esfuerza por cumplir las funciones asignadas",
     "recomendaciones": "Realizar Formación Académica para perfeccionar sus habilidades y destrezas adquiridas con la experiencia en el cargo.",
     "fecha": "2026-09-10",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1012393867",
   "NOMBRE": "Eddie Francisco Zuleta Moreno",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Jairo Gilberto Fino",
   "COMP_AUTO": 3.27,
   "COMP_JEFE": 3.0,
   "COMP_COLAB": 2.8,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.99,
   "POT_ESCALA": 3.0,
   "PUNTAJE_DESEMPENO": 74.8,
   "PUNTAJE_POTENCIAL": 75.0,
   "NOTA_FINAL": 74.8,
   "NOTA_ESCALA": 2.99,
   "COMPETENCIAS": [
    {
     "nombre": "Resilencia",
     "puntaje": 3.3
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.9
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.9
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.87
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Jairo Gilberto Fino",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Jairo Gilberto Fino",
     "cc_evaluador": "7317617",
     "rol": "Jefe",
     "aspectos": "Puntual, excelente trabajo en equipo y Mantiene excelentes relaciones interpersonales con sus compañeros",
     "recomendaciones": "Perfeccionar protocolo de servicio",
     "fecha": "2026-09-10",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1012438888",
   "NOMBRE": "Aylin Geraldine Cruz Morales",
   "CARGO": "JEFE CONTABLE",
   "AREA": "Contabilidad",
   "JEFE": "Yuly Castaneda Prada",
   "COMP_AUTO": 2.87,
   "COMP_JEFE": 3.07,
   "COMP_COLAB": 2.4,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.83,
   "POT_ESCALA": 2.8,
   "PUNTAJE_DESEMPENO": 70.7,
   "PUNTAJE_POTENCIAL": 70.0,
   "NOTA_FINAL": 70.6,
   "NOTA_ESCALA": 2.82,
   "COMPETENCIAS": [
    {
     "nombre": "Sentido de Urgencia",
     "puntaje": 3.02
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.95
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.87
    },
    {
     "nombre": "Proactividad",
     "puntaje": 2.8
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.5
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Yuly Castaneda Prada",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Yuly Castaneda Prada",
     "cc_evaluador": "1070326426",
     "rol": "Jefe",
     "aspectos": "responsable, ordenada, generosa, trabajas bien en equipo, exiges de una manera adecuada",
     "recomendaciones": "seguimiento de controles no solo generarlos, realizar acompañamiento sobre todo en vencimientos de impuestos e información exógena",
     "fecha": "2026-08-28",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1013618430",
   "NOMBRE": "Brian Gustavo Orjuela Ibarra",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Jairo Gilberto Fino",
   "COMP_AUTO": 3.73,
   "COMP_JEFE": 2.73,
   "COMP_COLAB": 3.13,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.05,
   "POT_ESCALA": 2.8,
   "PUNTAJE_DESEMPENO": 76.3,
   "PUNTAJE_POTENCIAL": 70.0,
   "NOTA_FINAL": 75.0,
   "NOTA_ESCALA": 3.0,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.3
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.13
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.13
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.9
    },
    {
     "nombre": "Resilencia",
     "puntaje": 2.8
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Jairo Gilberto Fino",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Jairo Gilberto Fino",
     "cc_evaluador": "7317617",
     "rol": "Jefe",
     "aspectos": "Puntual, Buena atención al cliente, Se esfuerza por alcanzar algunos objetivos",
     "recomendaciones": "Disminuir la ocurrencia de faltantes, perfeccionar protocolo de servicio y esforzarse por cumplir meta de venta de lubricantes",
     "fecha": "2026-09-10",
     "acciones": [
      {
       "competencia": "Innovación y Mejora continua",
       "objetivo": "Minimizar faltantes",
       "accion": "Desarrollar Funciones con mayor concentración y exactitud para disminuir faltantes en la planilla de venta",
       "fecha": "2026-10-09"
      }
     ]
    }
   ]
  },
  {
   "CC": "1013645898",
   "NOMBRE": "Cristian Andres Alarcon Sogamoso",
   "CARGO": "ARCHIVISTA",
   "AREA": "Gerencia General",
   "JEFE": "Lucero Andrea Bernal Chacon",
   "COMP_AUTO": 3.73,
   "COMP_JEFE": 3.53,
   "COMP_COLAB": 3.2,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.47,
   "POT_ESCALA": 3.2,
   "PUNTAJE_DESEMPENO": 86.8,
   "PUNTAJE_POTENCIAL": 80.0,
   "NOTA_FINAL": 85.4,
   "NOTA_ESCALA": 3.42,
   "COMPETENCIAS": [
    {
     "nombre": "Sentido de Urgencia",
     "puntaje": 3.9
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.53
    },
    {
     "nombre": "Proactividad",
     "puntaje": 3.5
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.47
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.97
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 4.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Lucero Andrea Bernal Chacon",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Lucero Andrea Bernal Chacon",
     "cc_evaluador": "52662402",
     "rol": "Jefe",
     "aspectos": "Las actividades que tiene a su cargo se llevan de buena forma, le interesa adquirir nuevos conocimientos y aportar en otros procesos.",
     "recomendaciones": "Antes de proponer nuevos procesos debe estudiarlos con mayor claridad y ver la posibilidad de lograrlos, debe planificar de manera adecuada nuevas actividades.",
     "fecha": "2026-09-17",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1015459929",
   "NOMBRE": "Edwin Alejandro Guzman Aguirre",
   "CARGO": "CONDUCTOR",
   "AREA": "Unitrans",
   "JEFE": "German Hernando Aldana Leon",
   "COMP_AUTO": null,
   "COMP_JEFE": 3.07,
   "COMP_COLAB": 3.47,
   "ROL3": "Par",
   "PESOS_ROL": {
    "jefe": 62.5,
    "colab": 37.5
   },
   "COMP_ESCALA": 3.22,
   "POT_ESCALA": 3.8,
   "PUNTAJE_DESEMPENO": 80.4,
   "PUNTAJE_POTENCIAL": 95.0,
   "NOTA_FINAL": 83.3,
   "NOTA_ESCALA": 3.33,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.62
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.25
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.25
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.17
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.79
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 4.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 4.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "German Hernando Aldana Leon",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "German Hernando Aldana Leon",
     "cc_evaluador": "11233615",
     "rol": "Jefe",
     "aspectos": "alta capacidad de cumplimiento",
     "recomendaciones": "mejorar habilidad de seguridad operacional",
     "fecha": "2026-10-22",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1015464525",
   "NOMBRE": "Angela Yulieth Bautista Espinosa",
   "CARGO": "ANALISTA DE TESORERIA",
   "AREA": "Unitrans",
   "JEFE": "Luz Stella Oviedo Mendoza",
   "COMP_AUTO": 3.2,
   "COMP_JEFE": 4.0,
   "COMP_COLAB": 3.13,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.58,
   "POT_ESCALA": 3.4,
   "PUNTAJE_DESEMPENO": 89.5,
   "PUNTAJE_POTENCIAL": 85.0,
   "NOTA_FINAL": 88.6,
   "NOTA_ESCALA": 3.54,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.73
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.63
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.6
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.5
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.43
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Luz Stella Oviedo Mendoza",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Luz Stella Oviedo Mendoza",
     "cc_evaluador": "51605731",
     "rol": "Jefe",
     "aspectos": "Buena comunicación, aprender a escuchar",
     "recomendaciones": "aprendizaje continuo en nuevas tecnologías y mas importante aún aprender a relacionarnos.",
     "fecha": "2026-11-04",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1018451475",
   "NOMBRE": "Brandon David Pulido Rios",
   "CARGO": "JEFE DE GESTION HUMANA Y SST",
   "AREA": "Gestión Humana",
   "JEFE": "Lucero Andrea Bernal Chacon",
   "COMP_AUTO": 2.93,
   "COMP_JEFE": 3.2,
   "COMP_COLAB": 3.5,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.24,
   "POT_ESCALA": 3.2,
   "PUNTAJE_DESEMPENO": 80.9,
   "PUNTAJE_POTENCIAL": 80.0,
   "NOTA_FINAL": 80.7,
   "NOTA_ESCALA": 3.23,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.43
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.38
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.2
    },
    {
     "nombre": "Proactividad",
     "puntaje": 3.15
    },
    {
     "nombre": "Sentido de Urgencia",
     "puntaje": 3.02
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Lucero Andrea Bernal Chacon",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Lucero Andrea Bernal Chacon",
     "cc_evaluador": "52662402",
     "rol": "Jefe",
     "aspectos": "El área ha tenido un cambio positivo con el liderazgo de Brandon. cumpliendo con las actividades propias del área.",
     "recomendaciones": "se requiere mayor liderazgo que irradie en las demás áreas, temas como SST, capacitación y bienestar deben tener un mayor impacto en toda la organización.",
     "fecha": "2026-09-17",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1019019737",
   "NOMBRE": "Dary Luz Pestana Castano",
   "CARGO": "VENDEDOR DE SERVICIOS II",
   "AREA": "Pista",
   "JEFE": "Yeidy Lisseth Vasquez Morales",
   "COMP_AUTO": 3.4,
   "COMP_JEFE": 2.93,
   "COMP_COLAB": 3.07,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.07,
   "POT_ESCALA": 2.4,
   "PUNTAJE_DESEMPENO": 76.7,
   "PUNTAJE_POTENCIAL": 60.0,
   "NOTA_FINAL": 73.4,
   "NOTA_ESCALA": 2.93,
   "COMPETENCIAS": [
    {
     "nombre": "Resilencia",
     "puntaje": 3.23
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.13
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.13
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.0
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.83
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Yeidy Lisseth Vasquez Morales",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "1019059624",
   "NOMBRE": "Manuel Alejandro Perez Torres",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Cesar Fernando Lopez Lopez",
   "COMP_AUTO": null,
   "COMP_JEFE": 3.0,
   "COMP_COLAB": null,
   "ROL3": "Par",
   "PESOS_ROL": {
    "jefe": 100.0
   },
   "COMP_ESCALA": 3.0,
   "POT_ESCALA": 3.0,
   "PUNTAJE_DESEMPENO": 75.0,
   "PUNTAJE_POTENCIAL": 75.0,
   "NOTA_FINAL": 75.0,
   "NOTA_ESCALA": 3.0,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.0
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.0
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Cesar Fernando Lopez Lopez",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "1019116009",
   "NOMBRE": "Jenny Paola Lozada Triana",
   "CARGO": "ANALISTA DE GESTION HUMANA",
   "AREA": "Gestión Humana",
   "JEFE": "Brandon David Pulido Rios",
   "COMP_AUTO": 2.87,
   "COMP_JEFE": 2.93,
   "COMP_COLAB": 3.2,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.0,
   "POT_ESCALA": 2.8,
   "PUNTAJE_DESEMPENO": 75.0,
   "PUNTAJE_POTENCIAL": 70.0,
   "NOTA_FINAL": 74.0,
   "NOTA_ESCALA": 2.96,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.57
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.13
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.93
    },
    {
     "nombre": "Sentido de Urgencia",
     "puntaje": 2.87
    },
    {
     "nombre": "Proactividad",
     "puntaje": 2.5
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Brandon David Pulido Rios",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Brandon David Pulido Rios",
     "cc_evaluador": "1018451475",
     "rol": "Jefe",
     "aspectos": "Mantiene una actitud colaborativa, brinda apoyo cuando es requerido y demuestra responsabilidad en el cumplimiento de sus tareas. Asimismo, se destaca por su organización, disposición para aprender y capacidad para adaptarse a los cambios, contribuyendo al logro de los objetivos del equipo y al mantenimiento de un ambiente de trabajo respetuoso y de cooperación.",
     "recomendaciones": "Jenny demuestra disposición para actuar ante las necesidades de su proceso y contribuir al logro de los resultados. Se recomienda continuar fortaleciendo la anticipación, la planeación y la toma de iniciativas que le permitan asumir retos de mayor complejidad y generar un impacto aún mayor en el cumplimiento de los objetivos del área.",
     "fecha": "2026-09-25",
     "acciones": [
      {
       "competencia": "Innovación y Mejora continua",
       "objetivo": null,
       "accion": "Fortalecer la anticipación de necesidades y el seguimiento oportuno de los requerimientos, promoviendo una gestión más proactiva orientada a la satisfacción del cliente interno y externo",
       "fecha": "2026-12-31"
      },
      {
       "competencia": "Innovación y Mejora continua",
       "objetivo": null,
       "accion": "Asumir progresivamente actividades de mayor complejidad que permitan ampliar sus conocimientos y generar un mayor impacto en los resultados del área.",
       "fecha": "2026-12-31"
      }
     ]
    }
   ]
  },
  {
   "CC": "1019143161",
   "NOMBRE": "Juan Felipe Arboleda Garzon",
   "CARGO": "ANALISTA CONTABLE",
   "AREA": "Unitrans",
   "JEFE": "Aylin Geraldine Cruz Morales",
   "COMP_AUTO": 2.8,
   "COMP_JEFE": 2.73,
   "COMP_COLAB": 2.73,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.75,
   "POT_ESCALA": 2.8,
   "PUNTAJE_DESEMPENO": 68.7,
   "PUNTAJE_POTENCIAL": 70.0,
   "NOTA_FINAL": 69.0,
   "NOTA_ESCALA": 2.76,
   "COMPETENCIAS": [
    {
     "nombre": "Resilencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.83
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.67
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.67
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.57
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Aylin Geraldine Cruz Morales",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Aylin Geraldine Cruz Morales",
     "cc_evaluador": "1012438888",
     "rol": "Jefe",
     "aspectos": "Resalto la capacidad que tienes de aceptar las críticas constructivas referentes a tus funciones, adaptándote a los procesos que se te encargan, la excelente actitud y compañerismo que se evidencia con el equipo.",
     "recomendaciones": "Como oportunidad de mejora te recomiendo solicitar apoyo cuando identifiques que no logras cumplir un vencimiento. Comunicar estas situaciones con anticipación permitirá que te podamos brindar apoyo y podamos cumplir los objetivos del área",
     "fecha": "2026-09-30",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1020776792",
   "NOMBRE": "Luis Javier Garcia Pardo",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Yeidy Lisseth Vasquez Morales",
   "COMP_AUTO": null,
   "COMP_JEFE": null,
   "COMP_COLAB": null,
   "ROL3": "Par",
   "PESOS_ROL": {},
   "COMP_ESCALA": null,
   "POT_ESCALA": null,
   "PUNTAJE_DESEMPENO": null,
   "PUNTAJE_POTENCIAL": null,
   "NOTA_FINAL": null,
   "NOTA_ESCALA": null,
   "COMPETENCIAS": [],
   "POTENCIAL_DETALLE": [],
   "FOTO": "",
   "REPORTA_A": "Yeidy Lisseth Vasquez Morales",
   "COMPLETO": false,
   "FEEDBACK": []
  },
  {
   "CC": "1022330829",
   "NOMBRE": "Franklin Contreras Garzon",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Yeidy Lisseth Vasquez Morales",
   "COMP_AUTO": 3.53,
   "COMP_JEFE": 2.47,
   "COMP_COLAB": 4.0,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.14,
   "POT_ESCALA": 2.2,
   "PUNTAJE_DESEMPENO": 78.5,
   "PUNTAJE_POTENCIAL": 55.0,
   "NOTA_FINAL": 73.8,
   "NOTA_ESCALA": 2.95,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.27
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.27
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.2
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.1
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.87
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 2.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Yeidy Lisseth Vasquez Morales",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "1022411647",
   "NOMBRE": "Eliana Rocio Pineda Cuervo",
   "CARGO": "ASISTENTE CONTABLE JUNIOR",
   "AREA": "Contabilidad",
   "JEFE": "Aylin Geraldine Cruz Morales",
   "COMP_AUTO": 3.13,
   "COMP_JEFE": 3.2,
   "COMP_COLAB": 4.0,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.43,
   "POT_ESCALA": 3.0,
   "PUNTAJE_DESEMPENO": 85.7,
   "PUNTAJE_POTENCIAL": 75.0,
   "NOTA_FINAL": 83.6,
   "NOTA_ESCALA": 3.34,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.67
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.47
    },
    {
     "nombre": "Proactividad",
     "puntaje": 3.47
    },
    {
     "nombre": "Sentido de Urgencia",
     "puntaje": 3.3
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.23
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Aylin Geraldine Cruz Morales",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Aylin Geraldine Cruz Morales",
     "cc_evaluador": "1012438888",
     "rol": "Jefe",
     "aspectos": "Resalto tu capacidad analítica, compromiso y disposición para mejorar tus procesos y los del área",
     "recomendaciones": "Fortalecer tu manejo de las emociones ante situaciones desacuerdo procurando mantener una comunicación asertiva",
     "fecha": "2026-09-30",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1022971117",
   "NOMBRE": "Perez Alvaro Javier Castellanos",
   "CARGO": "CONDUCTOR",
   "AREA": "Unitrans",
   "JEFE": "German Hernando Aldana Leon",
   "COMP_AUTO": null,
   "COMP_JEFE": 3.0,
   "COMP_COLAB": 2.93,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "jefe": 62.5,
    "colab": 37.5
   },
   "COMP_ESCALA": 2.97,
   "POT_ESCALA": 3.2,
   "PUNTAJE_DESEMPENO": 74.4,
   "PUNTAJE_POTENCIAL": 80.0,
   "NOTA_FINAL": 75.5,
   "NOTA_ESCALA": 3.02,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.08
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.0
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.0
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.79
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 2.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 4.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "German Hernando Aldana Leon",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "German Hernando Aldana Leon",
     "cc_evaluador": "11233615",
     "rol": "Jefe",
     "aspectos": "profesionalismo en conduccion",
     "recomendaciones": "aportar y participar en actividades de la organizacion",
     "fecha": "2026-10-22",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1023364086",
   "NOMBRE": "Maria Jimena Estupiñan Vargas",
   "CARGO": "ASISTENTE CONTABLE SEMISENIOR",
   "AREA": "Contabilidad",
   "JEFE": "Aylin Geraldine Cruz Morales",
   "COMP_AUTO": 2.8,
   "COMP_JEFE": 2.93,
   "COMP_COLAB": 2.87,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.89,
   "POT_ESCALA": 2.8,
   "PUNTAJE_DESEMPENO": 72.2,
   "PUNTAJE_POTENCIAL": 70.0,
   "NOTA_FINAL": 71.8,
   "NOTA_ESCALA": 2.87,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.0
    },
    {
     "nombre": "Sentido de Urgencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Proactividad",
     "puntaje": 2.93
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.83
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.67
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Aylin Geraldine Cruz Morales",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Aylin Geraldine Cruz Morales",
     "cc_evaluador": "1012438888",
     "rol": "Jefe",
     "aspectos": "Resalto tu capacidad de análisis y búsqueda de disminuir los reprocesos",
     "recomendaciones": "Cuando se te presenten dudas, no te quedes con inquietudes solicita orientación a las personas que manejan esos procesos ya que te permite tener mayor claridad, evitar errores y desarrollar las actividades de manera adecuada.",
     "fecha": "2026-09-30",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1023924545",
   "NOMBRE": "Yeimy Paola Camargo Diaz",
   "CARGO": "ASISTENTE GESTION DE CALIDAD",
   "AREA": "Calidad",
   "JEFE": "Ligia Ines Urbina",
   "COMP_AUTO": 2.87,
   "COMP_JEFE": 2.6,
   "COMP_COLAB": null,
   "ROL3": "Colab./Par",
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA": 2.71,
   "POT_ESCALA": 2.6,
   "PUNTAJE_DESEMPENO": 67.7,
   "PUNTAJE_POTENCIAL": 65.0,
   "NOTA_FINAL": 67.2,
   "NOTA_ESCALA": 2.69,
   "COMPETENCIAS": [
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.8
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.8
    },
    {
     "nombre": "Proactividad",
     "puntaje": 2.67
    },
    {
     "nombre": "Sentido de Urgencia",
     "puntaje": 2.67
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.6
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Ligia Ines Urbina",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Ligia Ines Urbina",
     "cc_evaluador": "51674142",
     "rol": "Jefe",
     "aspectos": "Frente a tareas asignadas que no domina busca la información y las herramientas que permitan conseguir el resultado, consultando y procurando construir acuerdos.\nCuando una situación lo requiere está dispuesta a brindar tiempo adicional para alcanzar el objetivo.",
     "recomendaciones": "Planificar las tareas.  \nFortalecer la comunicación directa y asertiva, canalizando sus inconformidades o desacuerdos oportunamente con su jefe, en lugar de comunicarlos a terceras personas.\nAunque ha mostrado avances, tiene como oportunidad de mejora fortalecer su disposición frente a situaciones que considera reprocesos y la forma en que gestiona los errores",
     "fecha": "2026-08-27",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1023948329",
   "NOMBRE": "Erika Tatiana Guerrero Castillo",
   "CARGO": "COORDINADOR DE COMPRAS",
   "AREA": "Compras",
   "JEFE": "Adriana Castro",
   "COMP_AUTO": 3.53,
   "COMP_JEFE": 3.27,
   "COMP_COLAB": 2.73,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.16,
   "POT_ESCALA": 3.2,
   "PUNTAJE_DESEMPENO": 79.0,
   "PUNTAJE_POTENCIAL": 80.0,
   "NOTA_FINAL": 79.2,
   "NOTA_ESCALA": 3.17,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.37
    },
    {
     "nombre": "Sentido de Urgencia",
     "puntaje": 3.3
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.25
    },
    {
     "nombre": "Proactividad",
     "puntaje": 3.08
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.8
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 4.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Adriana Castro",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Adriana Castro",
     "cc_evaluador": "39694966",
     "rol": "Jefe",
     "aspectos": "Es una persona muy comprometida con la empresa, pues no solamente ejecuta sus labores, sino que también ayuda a otras actividades de las compañías.",
     "recomendaciones": "Como recomendación ya que su cargo es nuevo, es que tenga conocimiento de todas las cosas que puedan surgir dentro del área.",
     "fecha": "2026-09-03",
     "acciones": [
      {
       "competencia": "Comunicación Efectiva",
       "objetivo": "Comunicar a las demás áreas correspondientes las nuevas funciones y cargos del departamento",
       "accion": "Reuniones con los lideres o personal correspondiente para su conocimiento de los cambios .",
       "fecha": "2026-09-10"
      },
      {
       "competencia": "Innovación y Mejora continua",
       "objetivo": "Como se trata de un cargo nuevo donde tiene que liderar tanto personal como funciones nuevas, esta en desarrollo el acoplamiento del área.",
       "accion": "Conocimiento y aprendizaje de los nuevos temas.",
       "fecha": "2026-11-30"
      },
      {
       "competencia": "Orientación al logro",
       "objetivo": "Al tener un mayor conocimiento de los diferentes aspectos a desarrollar por el área, puede ejercer un mejor liderazgo.",
       "accion": "Tomar diferentes capacitaciones",
       "fecha": "2026-12-31"
      }
     ]
    }
   ]
  },
  {
   "CC": "1024470922",
   "NOMBRE": "Caroll Dayana Gutierrez Plazas",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Jairo Gilberto Fino",
   "COMP_AUTO": null,
   "COMP_JEFE": 2.53,
   "COMP_COLAB": 1.13,
   "ROL3": "Par",
   "PESOS_ROL": {
    "jefe": 62.5,
    "colab": 37.5
   },
   "COMP_ESCALA": 2.01,
   "POT_ESCALA": 2.4,
   "PUNTAJE_DESEMPENO": 50.2,
   "PUNTAJE_POTENCIAL": 60.0,
   "NOTA_FINAL": 52.2,
   "NOTA_ESCALA": 2.09,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.17
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.04
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.04
    },
    {
     "nombre": "Resilencia",
     "puntaje": 1.96
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 1.83
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 2.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Jairo Gilberto Fino",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Jairo Gilberto Fino",
     "cc_evaluador": "7317617",
     "rol": "Jefe",
     "aspectos": "Buena presentación personal",
     "recomendaciones": "Mejorar protocolo de servicio y compromiso con las funciones asignadas y el equipo de trabajo, su actitud y sentido de pertenencia con la organización a desmejorado.",
     "fecha": "2026-09-10",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1024596521",
   "NOMBRE": "Laura Milena Ramirez Melo",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Jairo Gilberto Fino",
   "COMP_AUTO": 2.67,
   "COMP_JEFE": 2.53,
   "COMP_COLAB": 1.4,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.22,
   "POT_ESCALA": 2.6,
   "PUNTAJE_DESEMPENO": 55.5,
   "PUNTAJE_POTENCIAL": 65.0,
   "NOTA_FINAL": 57.4,
   "NOTA_ESCALA": 2.3,
   "COMPETENCIAS": [
    {
     "nombre": "Resilencia",
     "puntaje": 2.77
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.23
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.17
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.0
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 1.93
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Jairo Gilberto Fino",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Jairo Gilberto Fino",
     "cc_evaluador": "7317617",
     "rol": "Jefe",
     "aspectos": "Se destaca por la venta de productos adicionales",
     "recomendaciones": "Mejorar puntualidad en los turnos asignados, Limitar el uso de equipos electrónicos durante el turno de trabajo y esforzarse por aportar al trabajo en equipo",
     "fecha": "2026-09-10",
     "acciones": [
      {
       "competencia": "Orientación al logro",
       "objetivo": "MEJORAR TRABAJO EN EQUIPO Y PUNTUALIDAD",
       "accion": "LLEGAR A TIEMPO A LOS TURNOS ASIGNADOS Y APORTAR AL TRABAJO EN EQUIPO",
       "fecha": "2026-10-09"
      },
      {
       "competencia": "Innovación y Mejora continua",
       "objetivo": "Cumplir políticas de seguridad",
       "accion": "Limitar el uso de equipos electrónicos",
       "fecha": "2027-09-09"
      }
     ]
    }
   ]
  },
  {
   "CC": "1030541542",
   "NOMBRE": "Luz Angela Vera Diaz",
   "CARGO": "ASISTENTE CONTABLE SEMISENIOR",
   "AREA": "Contabilidad",
   "JEFE": "Aylin Geraldine Cruz Morales",
   "COMP_AUTO": 2.6,
   "COMP_JEFE": 3.13,
   "COMP_COLAB": 3.2,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.05,
   "POT_ESCALA": 2.4,
   "PUNTAJE_DESEMPENO": 76.2,
   "PUNTAJE_POTENCIAL": 60.0,
   "NOTA_FINAL": 73.0,
   "NOTA_ESCALA": 2.92,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.47
    },
    {
     "nombre": "Sentido de Urgencia",
     "puntaje": 3.13
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.93
    },
    {
     "nombre": "Proactividad",
     "puntaje": 2.87
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.83
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 1.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Aylin Geraldine Cruz Morales",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Aylin Geraldine Cruz Morales",
     "cc_evaluador": "1012438888",
     "rol": "Jefe",
     "aspectos": "Resalto que eres muy comprometida, respetuosa y cordial con todas la áreas que estas involucrada",
     "recomendaciones": "Fortalecer el seguimiento a ciertas actividades que son esporádicas, procurando llevar un control sobre tareas específicas.",
     "fecha": "2026-09-30",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1030554681",
   "NOMBRE": "Yuly Paola Moreno Guiza",
   "CARGO": "ASISTENTE CONTABLE SEMISENIOR",
   "AREA": "Contabilidad",
   "JEFE": "Aylin Geraldine Cruz Morales",
   "COMP_AUTO": 3.6,
   "COMP_JEFE": 3.27,
   "COMP_COLAB": 3.47,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.39,
   "POT_ESCALA": 2.8,
   "PUNTAJE_DESEMPENO": 84.8,
   "PUNTAJE_POTENCIAL": 70.0,
   "NOTA_FINAL": 81.8,
   "NOTA_ESCALA": 3.27,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.83
    },
    {
     "nombre": "Sentido de Urgencia",
     "puntaje": 3.57
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.3
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.13
    },
    {
     "nombre": "Proactividad",
     "puntaje": 3.13
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Aylin Geraldine Cruz Morales",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Aylin Geraldine Cruz Morales",
     "cc_evaluador": "1012438888",
     "rol": "Jefe",
     "aspectos": "Quiero resaltar tu compromiso en cada una de tus funciones, siempre buscando la mejora de los procesos",
     "recomendaciones": "Seguir fortaleciendo tu comunicación con las personas del equipo que interactúas más frecuentemente",
     "fecha": "2026-09-30",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1030606489",
   "NOMBRE": "Jheimer Andrey Herrera Herrera",
   "CARGO": "GESTOR DE COMPRAS Y ALMACEN",
   "AREA": "Compras",
   "JEFE": "Erika Tatiana Guerrero Castillo",
   "COMP_AUTO": 2.87,
   "COMP_JEFE": 3.33,
   "COMP_COLAB": 2.93,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.12,
   "POT_ESCALA": 3.2,
   "PUNTAJE_DESEMPENO": 78.0,
   "PUNTAJE_POTENCIAL": 80.0,
   "NOTA_FINAL": 78.4,
   "NOTA_ESCALA": 3.14,
   "COMPETENCIAS": [
    {
     "nombre": "Proactividad",
     "puntaje": 3.4
    },
    {
     "nombre": "Sentido de Urgencia",
     "puntaje": 3.23
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.2
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.77
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Erika Tatiana Guerrero Castillo",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Erika Tatiana Guerrero Castillo",
     "cc_evaluador": "1023948329",
     "rol": "Jefe",
     "aspectos": "su actitud calmada y positivamente para dar manejo a las circunstancias que esta presentando. Trae ideas para implementar y mejorar procesos internos teniendo en cuenta su conocimiento",
     "recomendaciones": "tener una mejor comunicacion acertiva",
     "fecha": "2026-08-27",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1030659081",
   "NOMBRE": "Ramirez Jordan Rene Castillo",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Jairo Gilberto Fino",
   "COMP_AUTO": 4.0,
   "COMP_JEFE": 2.73,
   "COMP_COLAB": 2.53,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.93,
   "POT_ESCALA": 2.8,
   "PUNTAJE_DESEMPENO": 73.2,
   "PUNTAJE_POTENCIAL": 70.0,
   "NOTA_FINAL": 72.6,
   "NOTA_ESCALA": 2.9,
   "COMPETENCIAS": [
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.93
    },
    {
     "nombre": "Resilencia",
     "puntaje": 2.93
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.77
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Jairo Gilberto Fino",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Jairo Gilberto Fino",
     "cc_evaluador": "7317617",
     "rol": "Jefe",
     "aspectos": "SE DESTACA POR EL OFRECIMIENTO DE ADITIVOS Y ATENCION AL CLIENTE CON PROTOCOLO DE SERVICIO",
     "recomendaciones": "MEJORAR AGILIDAD EN ATENCIÓN DE LOS CLIENTES, VENTA DE LUBRICANTES Y CUMPLIMIENTO DE LOS TURNOS ASIGNADOS",
     "fecha": "2026-09-10",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1031801956",
   "NOMBRE": "Dilan Smith Choconta Rojas",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Yeidy Lisseth Vasquez Morales",
   "COMP_AUTO": 4.0,
   "COMP_JEFE": 2.93,
   "COMP_COLAB": null,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA": 3.36,
   "POT_ESCALA": 2.6,
   "PUNTAJE_DESEMPENO": 84.0,
   "PUNTAJE_POTENCIAL": 65.0,
   "NOTA_FINAL": 80.2,
   "NOTA_ESCALA": 3.21,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.4
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.4
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.4
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.4
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.2
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Yeidy Lisseth Vasquez Morales",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "1031806114",
   "NOMBRE": "Jaime Manuel Santiago Lozada",
   "CARGO": "AUXILIAR ADMINISTRATIVO Y OPERATIVO",
   "AREA": "Unitrans",
   "JEFE": "German Hernando Aldana Leon",
   "COMP_AUTO": 3.47,
   "COMP_JEFE": 3.27,
   "COMP_COLAB": 3.47,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.37,
   "POT_ESCALA": 4.0,
   "PUNTAJE_DESEMPENO": 84.2,
   "PUNTAJE_POTENCIAL": 100.0,
   "NOTA_FINAL": 87.4,
   "NOTA_ESCALA": 3.49,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.67
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.53
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.47
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.1
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.07
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 4.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 4.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 4.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "German Hernando Aldana Leon",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "German Hernando Aldana Leon",
     "cc_evaluador": "11233615",
     "rol": "Jefe",
     "aspectos": "Alto sentido de adaptacion y desempeño de tareas asignadas facil aprendizaje",
     "recomendaciones": "mejorar habilidad de expresion",
     "fecha": "2026-10-22",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1032176684",
   "NOMBRE": "Valentina Cabarcas Murillo",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Manuel Crisanto Aguilera Hernandez",
   "COMP_AUTO": 3.53,
   "COMP_JEFE": 3.4,
   "COMP_COLAB": null,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA": 3.45,
   "POT_ESCALA": 3.6,
   "PUNTAJE_DESEMPENO": 86.3,
   "PUNTAJE_POTENCIAL": 90.0,
   "NOTA_FINAL": 87.0,
   "NOTA_ESCALA": 3.48,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.87
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.67
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.67
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.47
    },
    {
     "nombre": "Resilencia",
     "puntaje": 2.6
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 4.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 4.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Manuel Crisanto Aguilera Hernandez",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Manuel Crisanto Aguilera Hernandez",
     "cc_evaluador": "79767944",
     "rol": "Jefe",
     "aspectos": "buen desempeño en sus funciones y buena colaboración tanto con la estación como con los compañeros",
     "recomendaciones": "ninguna",
     "fecha": "2026-08-27",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1032436351",
   "NOMBRE": "Yuri Alexandra Forero Aguirre",
   "CARGO": "INTERVENTOR OBRA CIVIL",
   "AREA": "Obra Civil",
   "JEFE": "Adriana Castro",
   "COMP_AUTO": 3.47,
   "COMP_JEFE": 3.93,
   "COMP_COLAB": null,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA": 3.75,
   "POT_ESCALA": 3.2,
   "PUNTAJE_DESEMPENO": 93.7,
   "PUNTAJE_POTENCIAL": 80.0,
   "NOTA_FINAL": 91.0,
   "NOTA_ESCALA": 3.64,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación al logro",
     "puntaje": 4.0
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.73
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.73
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.67
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.6
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 4.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Adriana Castro",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Adriana Castro",
     "cc_evaluador": "39694966",
     "rol": "Jefe",
     "aspectos": "Su actitud positiva, buen desempeño y relacionamiento con su grupo de trabajo, además de sus aportes técnicos",
     "recomendaciones": "Concluir su capacitación en la parte de combustibles",
     "fecha": "2026-09-14",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1033676248",
   "NOMBRE": "Julian David Paz Pineda",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Cesar Fernando Lopez Lopez",
   "COMP_AUTO": null,
   "COMP_JEFE": 3.0,
   "COMP_COLAB": null,
   "ROL3": "Par",
   "PESOS_ROL": {
    "jefe": 100.0
   },
   "COMP_ESCALA": 3.0,
   "POT_ESCALA": 2.8,
   "PUNTAJE_DESEMPENO": 75.0,
   "PUNTAJE_POTENCIAL": 70.0,
   "NOTA_FINAL": 74.0,
   "NOTA_ESCALA": 2.96,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.0
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.0
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Cesar Fernando Lopez Lopez",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "1046702373",
   "NOMBRE": "David Jose Sierra Ariza",
   "CARGO": "AUXILIAR ADMINISTRATIVO Y OPERATIVO",
   "AREA": "Gestión Humana",
   "JEFE": "Brandon David Pulido Rios",
   "COMP_AUTO": 2.8,
   "COMP_JEFE": 2.87,
   "COMP_COLAB": null,
   "ROL3": "Colab./Par",
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA": 2.84,
   "POT_ESCALA": 2.8,
   "PUNTAJE_DESEMPENO": 71.0,
   "PUNTAJE_POTENCIAL": 70.0,
   "NOTA_FINAL": 70.8,
   "NOTA_ESCALA": 2.83,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.0
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.87
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.67
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.67
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Brandon David Pulido Rios",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "1047220733",
   "NOMBRE": "Yaquelines Palencia Carvajal",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Aneider Tovar Quimbaya",
   "COMP_AUTO": null,
   "COMP_JEFE": 2.2,
   "COMP_COLAB": null,
   "ROL3": "Par",
   "PESOS_ROL": {
    "jefe": 100.0
   },
   "COMP_ESCALA": 2.2,
   "POT_ESCALA": 1.8,
   "PUNTAJE_DESEMPENO": 55.0,
   "PUNTAJE_POTENCIAL": 45.0,
   "NOTA_FINAL": 53.0,
   "NOTA_ESCALA": 2.12,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.0
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.33
    },
    {
     "nombre": "Resilencia",
     "puntaje": 2.33
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 1.67
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 1.67
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 2.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 2.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 1.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 1.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Aneider Tovar Quimbaya",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "1047493527",
   "NOMBRE": "Walter Amin Acevedo",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Yeidy Lisseth Vasquez Morales",
   "COMP_AUTO": null,
   "COMP_JEFE": null,
   "COMP_COLAB": 3.93,
   "ROL3": "Par",
   "PESOS_ROL": {
    "colab": 100.0
   },
   "COMP_ESCALA": 3.93,
   "POT_ESCALA": null,
   "PUNTAJE_DESEMPENO": 98.3,
   "PUNTAJE_POTENCIAL": null,
   "NOTA_FINAL": null,
   "NOTA_ESCALA": null,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 4.0
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 4.0
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 4.0
    },
    {
     "nombre": "Resilencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.67
    }
   ],
   "POTENCIAL_DETALLE": [],
   "FOTO": "",
   "REPORTA_A": "Yeidy Lisseth Vasquez Morales",
   "COMPLETO": false,
   "FEEDBACK": []
  },
  {
   "CC": "1049643838",
   "NOMBRE": "Wilder Danilo Numpaque Castillo",
   "CARGO": "JEFE DE PATIOS",
   "AREA": "Pista",
   "JEFE": "Cesar Fernando Lopez Lopez",
   "COMP_AUTO": null,
   "COMP_JEFE": 3.07,
   "COMP_COLAB": null,
   "ROL3": "Par",
   "PESOS_ROL": {
    "jefe": 100.0
   },
   "COMP_ESCALA": 3.07,
   "POT_ESCALA": 3.4,
   "PUNTAJE_DESEMPENO": 76.7,
   "PUNTAJE_POTENCIAL": 85.0,
   "NOTA_FINAL": 78.4,
   "NOTA_ESCALA": 3.13,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.33
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.0
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.0
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 4.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 4.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Cesar Fernando Lopez Lopez",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "1053334623",
   "NOMBRE": "Diana Julieth Pena Torres",
   "CARGO": "ADMINISTRADOR EDS III",
   "AREA": "Estaciones",
   "JEFE": "Pena Hernan Dario Camargo",
   "COMP_AUTO": 3.67,
   "COMP_JEFE": 3.6,
   "COMP_COLAB": 3.2,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.49,
   "POT_ESCALA": 3.4,
   "PUNTAJE_DESEMPENO": 87.3,
   "PUNTAJE_POTENCIAL": 85.0,
   "NOTA_FINAL": 86.8,
   "NOTA_ESCALA": 3.47,
   "COMPETENCIAS": [
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.73
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.63
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.57
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.47
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.07
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 4.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Pena Hernan Dario Camargo",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Jairo Gilberto Fino",
     "cc_evaluador": "7317617",
     "rol": "Par",
     "aspectos": "SE DESTACA POR BUSCAR SOLUCIONES Y APORTAR AL EQUIPO DE TRABAJO",
     "recomendaciones": "MANEJAR EL ESTRES LABORAL",
     "fecha": "2026-09-10",
     "acciones": []
    },
    {
     "evaluador": "Pena Hernan Dario Camargo",
     "cc_evaluador": "80198812",
     "rol": "Jefe",
     "aspectos": "Compromiso, escucha activa, da soluciones",
     "recomendaciones": "Contabilidad, ofimática avanzada",
     "fecha": "2026-09-28",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1053337369",
   "NOMBRE": "Nancy Yubely Lopez Forero",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Luz Amanda Cruz Varela",
   "COMP_AUTO": 3.0,
   "COMP_JEFE": 2.07,
   "COMP_COLAB": 3.0,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.53,
   "POT_ESCALA": 2.2,
   "PUNTAJE_DESEMPENO": 63.3,
   "PUNTAJE_POTENCIAL": 55.0,
   "NOTA_FINAL": 61.6,
   "NOTA_ESCALA": 2.47,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.83
    },
    {
     "nombre": "Resilencia",
     "puntaje": 2.83
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.5
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.33
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.17
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 2.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Luz Amanda Cruz Varela",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "1053340791",
   "NOMBRE": "Gina Liceth Roncancio Mahecha",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Luz Amanda Cruz Varela",
   "COMP_AUTO": 3.0,
   "COMP_JEFE": 2.73,
   "COMP_COLAB": 3.0,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.87,
   "POT_ESCALA": 2.4,
   "PUNTAJE_DESEMPENO": 71.7,
   "PUNTAJE_POTENCIAL": 60.0,
   "NOTA_FINAL": 69.4,
   "NOTA_ESCALA": 2.77,
   "COMPETENCIAS": [
    {
     "nombre": "Resilencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.83
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.83
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.83
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.83
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Luz Amanda Cruz Varela",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "1053349060",
   "NOMBRE": "Ramirez Juan Diego Alfonso",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Luz Amanda Cruz Varela",
   "COMP_AUTO": null,
   "COMP_JEFE": null,
   "COMP_COLAB": null,
   "ROL3": "Par",
   "PESOS_ROL": {},
   "COMP_ESCALA": null,
   "POT_ESCALA": null,
   "PUNTAJE_DESEMPENO": null,
   "PUNTAJE_POTENCIAL": null,
   "NOTA_FINAL": null,
   "NOTA_ESCALA": null,
   "COMPETENCIAS": [],
   "POTENCIAL_DETALLE": [],
   "FOTO": "",
   "REPORTA_A": "Luz Amanda Cruz Varela",
   "COMPLETO": false,
   "FEEDBACK": []
  },
  {
   "CC": "1053349321",
   "NOMBRE": "Jeisson Andres Buitrago Ramos",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Luz Amanda Cruz Varela",
   "COMP_AUTO": 3.0,
   "COMP_JEFE": 2.33,
   "COMP_COLAB": null,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA": 2.6,
   "POT_ESCALA": 2.6,
   "PUNTAJE_DESEMPENO": 65.0,
   "PUNTAJE_POTENCIAL": 65.0,
   "NOTA_FINAL": 65.0,
   "NOTA_ESCALA": 2.6,
   "COMPETENCIAS": [
    {
     "nombre": "Resilencia",
     "puntaje": 2.8
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.6
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.6
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.6
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.4
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Luz Amanda Cruz Varela",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "1053350301",
   "NOMBRE": "Ramirez Santiago Alfonso",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Luz Amanda Cruz Varela",
   "COMP_AUTO": 2.93,
   "COMP_JEFE": 2.87,
   "COMP_COLAB": 3.0,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.92,
   "POT_ESCALA": 2.8,
   "PUNTAJE_DESEMPENO": 73.0,
   "PUNTAJE_POTENCIAL": 70.0,
   "NOTA_FINAL": 72.4,
   "NOTA_ESCALA": 2.9,
   "COMPETENCIAS": [
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.0
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.93
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.83
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.83
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Luz Amanda Cruz Varela",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "1053350584",
   "NOMBRE": "Jennifer Alexandra Nunez Farfan",
   "CARGO": "ASISTENTE ADMINISTRATIVO EDS",
   "AREA": "Estaciones",
   "JEFE": "Luz Amanda Cruz Varela",
   "COMP_AUTO": 3.93,
   "COMP_JEFE": 2.07,
   "COMP_COLAB": 1.2,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.18,
   "POT_ESCALA": 2.0,
   "PUNTAJE_DESEMPENO": 54.5,
   "PUNTAJE_POTENCIAL": 50.0,
   "NOTA_FINAL": 53.6,
   "NOTA_ESCALA": 2.14,
   "COMPETENCIAS": [
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.53
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.37
    },
    {
     "nombre": "Resilencia",
     "puntaje": 2.1
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 1.97
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 1.93
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 2.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 1.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Luz Amanda Cruz Varela",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "1056709180",
   "NOMBRE": "Cesar Fernando Lopez Lopez",
   "CARGO": "ADMINISTRADOR EDS III",
   "AREA": "Estaciones",
   "JEFE": "Pena Hernan Dario Camargo",
   "COMP_AUTO": 3.0,
   "COMP_JEFE": 2.07,
   "COMP_COLAB": 4.0,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.83,
   "POT_ESCALA": 2.8,
   "PUNTAJE_DESEMPENO": 70.8,
   "PUNTAJE_POTENCIAL": 70.0,
   "NOTA_FINAL": 70.6,
   "NOTA_ESCALA": 2.83,
   "COMPETENCIAS": [
    {
     "nombre": "Resilencia",
     "puntaje": 3.3
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.8
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.8
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.63
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.63
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 2.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Pena Hernan Dario Camargo",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Pena Hernan Dario Camargo",
     "cc_evaluador": "80198812",
     "rol": "Jefe",
     "aspectos": "Compromiso, responsabilidad y ética",
     "recomendaciones": "Liderazgo, ofimática y contabilidad",
     "fecha": "2026-09-28",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1057579085",
   "NOMBRE": "Ferney Alexander Castelblanco Cuevas",
   "CARGO": "CONDUCTOR",
   "AREA": "Unitrans",
   "JEFE": "German Hernando Aldana Leon",
   "COMP_AUTO": null,
   "COMP_JEFE": null,
   "COMP_COLAB": null,
   "ROL3": "Par",
   "PESOS_ROL": {},
   "COMP_ESCALA": null,
   "POT_ESCALA": null,
   "PUNTAJE_DESEMPENO": null,
   "PUNTAJE_POTENCIAL": null,
   "NOTA_FINAL": null,
   "NOTA_ESCALA": null,
   "COMPETENCIAS": [],
   "POTENCIAL_DETALLE": [],
   "FOTO": "",
   "REPORTA_A": "German Hernando Aldana Leon",
   "COMPLETO": false,
   "FEEDBACK": []
  },
  {
   "CC": "1057588001",
   "NOMBRE": "Sebastian Molina Salazar",
   "CARGO": "CONDUCTOR",
   "AREA": "Unitrans",
   "JEFE": "German Hernando Aldana Leon",
   "COMP_AUTO": null,
   "COMP_JEFE": 3.2,
   "COMP_COLAB": 3.0,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "jefe": 62.5,
    "colab": 37.5
   },
   "COMP_ESCALA": 3.12,
   "POT_ESCALA": 3.2,
   "PUNTAJE_DESEMPENO": 78.1,
   "PUNTAJE_POTENCIAL": 80.0,
   "NOTA_FINAL": 78.5,
   "NOTA_ESCALA": 3.14,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.62
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.62
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.0
    },
    {
     "nombre": "Resilencia",
     "puntaje": 2.79
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.58
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "German Hernando Aldana Leon",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "1062403576",
   "NOMBRE": "Nilva Mildreth Blanquiseth Marrugo",
   "CARGO": "CAJERO",
   "AREA": "Tienda",
   "JEFE": "Fredy Albey Hernandez Amaya",
   "COMP_AUTO": 3.0,
   "COMP_JEFE": 2.53,
   "COMP_COLAB": 1.6,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.35,
   "POT_ESCALA": 3.0,
   "PUNTAJE_DESEMPENO": 58.7,
   "PUNTAJE_POTENCIAL": 75.0,
   "NOTA_FINAL": 62.0,
   "NOTA_ESCALA": 2.48,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.7
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.53
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.37
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.23
    },
    {
     "nombre": "Resilencia",
     "puntaje": 1.9
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Fredy Albey Hernandez Amaya",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Fredy Albey Hernandez Amaya",
     "cc_evaluador": "80139376",
     "rol": "Jefe",
     "aspectos": "ES UNA SRA MUY DINAMICA , HABIL",
     "recomendaciones": "LIDERAZGO",
     "fecha": "2026-09-30",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1063482116",
   "NOMBRE": "Maria de los Reyes Caro Conde",
   "CARGO": "PREPARADOR DE ALIMENTOS",
   "AREA": "Tienda",
   "JEFE": "Fredy Albey Hernandez Amaya",
   "COMP_AUTO": 3.0,
   "COMP_JEFE": 2.8,
   "COMP_COLAB": 3.0,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.9,
   "POT_ESCALA": 2.8,
   "PUNTAJE_DESEMPENO": 72.5,
   "PUNTAJE_POTENCIAL": 70.0,
   "NOTA_FINAL": 72.0,
   "NOTA_ESCALA": 2.88,
   "COMPETENCIAS": [
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.83
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.83
    },
    {
     "nombre": "Resilencia",
     "puntaje": 2.83
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 2.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Fredy Albey Hernandez Amaya",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Fredy Albey Hernandez Amaya",
     "cc_evaluador": "80139376",
     "rol": "Jefe",
     "aspectos": "ES UNA SRA MUY COLABORADORA , MUY ATENTA Y DINAMICA",
     "recomendaciones": "LE FALTA UN POCO DE SERVICIO AL CLIENTE",
     "fecha": "2026-09-30",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1070326426",
   "NOMBRE": "Yuly Castaneda Prada",
   "CARGO": "DIRECTOR CONTABLE",
   "AREA": "Contabilidad",
   "JEFE": "Lucero Andrea Bernal Chacon",
   "COMP_AUTO": 3.6,
   "COMP_JEFE": 3.33,
   "COMP_COLAB": 3.13,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.33,
   "POT_ESCALA": 3.0,
   "PUNTAJE_DESEMPENO": 83.2,
   "PUNTAJE_POTENCIAL": 75.0,
   "NOTA_FINAL": 81.6,
   "NOTA_ESCALA": 3.26,
   "COMPETENCIAS": [
    {
     "nombre": "Sentido de Urgencia",
     "puntaje": 3.63
    },
    {
     "nombre": "Proactividad",
     "puntaje": 3.4
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.33
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.23
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.03
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 2.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 4.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Lucero Andrea Bernal Chacon",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Lucero Andrea Bernal Chacon",
     "cc_evaluador": "52662402",
     "rol": "Jefe",
     "aspectos": "El desarrollo del liderazgo de Yuly la ha llevado a formar un buen equipo de trabajo que actualmente responde a los diferentes requerimientos, se nota un mayor cumplimiento, con el personal debidamente entrenado.",
     "recomendaciones": "Debe trabajar en mejorar su liderazgo frente a otras áreas de la organización y sus respectivos lideres, por el rol que desempeña es importante que toda la organización la vea como líder, para que sea involucrada en otras actividades que, aunque no son de su área si tendrán impacto en la contabilidad. Es importante la administración del tiempo que le permita participar de manera activa en reuniones y prestar la debida atención que le permite tener un conocimiento general de la empresa.",
     "fecha": "2026-09-17",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1072198263",
   "NOMBRE": "Diana Katherin Parra Cubillos",
   "CARGO": "ASISTENTE CONTABLE SENIOR",
   "AREA": "Contabilidad",
   "JEFE": "Aylin Geraldine Cruz Morales",
   "COMP_AUTO": 2.73,
   "COMP_JEFE": 2.93,
   "COMP_COLAB": 3.4,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.03,
   "POT_ESCALA": 2.8,
   "PUNTAJE_DESEMPENO": 75.8,
   "PUNTAJE_POTENCIAL": 70.0,
   "NOTA_FINAL": 74.6,
   "NOTA_ESCALA": 2.99,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.27
    },
    {
     "nombre": "Proactividad",
     "puntaje": 3.2
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.93
    },
    {
     "nombre": "Sentido de Urgencia",
     "puntaje": 2.9
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.87
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Aylin Geraldine Cruz Morales",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Aylin Geraldine Cruz Morales",
     "cc_evaluador": "1012438888",
     "rol": "Jefe",
     "aspectos": "Resalto tu compromiso, disposición para apoyar al equipo y tus ganas de aprendizaje. Tu actitud genera un impacto positivo en el equipo, generando armonía en el área y facilita que los procesos sean cada vez más eficientes y efectivos.",
     "recomendaciones": "No dejes de querer aprender cosas nuevas y buscar esas oportunidades de crecer profesionalmente",
     "fecha": "2026-09-30",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1072703711",
   "NOMBRE": "Erika Yolanda Castellanos Paez",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Manuel Crisanto Aguilera Hernandez",
   "COMP_AUTO": null,
   "COMP_JEFE": 3.93,
   "COMP_COLAB": null,
   "ROL3": "Par",
   "PESOS_ROL": {
    "jefe": 100.0
   },
   "COMP_ESCALA": 3.93,
   "POT_ESCALA": 3.4,
   "PUNTAJE_DESEMPENO": 98.3,
   "PUNTAJE_POTENCIAL": 85.0,
   "NOTA_FINAL": 95.6,
   "NOTA_ESCALA": 3.83,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 4.0
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 4.0
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 4.0
    },
    {
     "nombre": "Resilencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.67
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Manuel Crisanto Aguilera Hernandez",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "1073714955",
   "NOMBRE": "Jenny Fernanda Linares Morera",
   "CARGO": "ASISTENTE ADMINISTRATIVO",
   "AREA": "Gerencia General",
   "JEFE": "Lucero Andrea Bernal Chacon",
   "COMP_AUTO": 2.53,
   "COMP_JEFE": 2.67,
   "COMP_COLAB": 3.07,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.76,
   "POT_ESCALA": 2.2,
   "PUNTAJE_DESEMPENO": 69.0,
   "PUNTAJE_POTENCIAL": 55.0,
   "NOTA_FINAL": 66.2,
   "NOTA_ESCALA": 2.65,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.2
    },
    {
     "nombre": "Proactividad",
     "puntaje": 2.87
    },
    {
     "nombre": "Sentido de Urgencia",
     "puntaje": 2.87
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.77
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.1
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 2.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Lucero Andrea Bernal Chacon",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "1074128948",
   "NOMBRE": "Omar Wilfredo Celis Baquero",
   "CARGO": "CONDUCTOR",
   "AREA": "Unitrans",
   "JEFE": "German Hernando Aldana Leon",
   "COMP_AUTO": 3.07,
   "COMP_JEFE": 2.87,
   "COMP_COLAB": 3.0,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.95,
   "POT_ESCALA": 3.0,
   "PUNTAJE_DESEMPENO": 73.7,
   "PUNTAJE_POTENCIAL": 75.0,
   "NOTA_FINAL": 74.0,
   "NOTA_ESCALA": 2.96,
   "COMPETENCIAS": [
    {
     "nombre": "Resilencia",
     "puntaje": 3.23
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.5
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "German Hernando Aldana Leon",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "1074190108",
   "NOMBRE": "Luz Diana Chavez Sanchez",
   "CARGO": "ASISTENTE DE COMPRAS Y ALMACEN",
   "AREA": "Compras",
   "JEFE": "Erika Tatiana Guerrero Castillo",
   "COMP_AUTO": 2.8,
   "COMP_JEFE": 3.2,
   "COMP_COLAB": 2.53,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.92,
   "POT_ESCALA": 2.0,
   "PUNTAJE_DESEMPENO": 73.0,
   "PUNTAJE_POTENCIAL": 50.0,
   "NOTA_FINAL": 68.4,
   "NOTA_ESCALA": 2.74,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.4
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.07
    },
    {
     "nombre": "Proactividad",
     "puntaje": 2.9
    },
    {
     "nombre": "Sentido de Urgencia",
     "puntaje": 2.8
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.43
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 2.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 1.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Erika Tatiana Guerrero Castillo",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Erika Tatiana Guerrero Castillo",
     "cc_evaluador": "1023948329",
     "rol": "Jefe",
     "aspectos": "Atiende con buena actitud las recomendaciones  momento de validar los errores y poder realizar cambios a nivel personal y de querer mejorar",
     "recomendaciones": "ser mas receptiva y manejar comunicación asertiva, poder desenvolverse mejor en la area teniendo en cuenta de poder resolver los problemas sin miedo",
     "fecha": "2026-08-27",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1075875287",
   "NOMBRE": "Rodriguez Edison Fabian Macias",
   "CARGO": "JEFE DE PATIOS",
   "AREA": "Pista",
   "JEFE": "Aneider Tovar Quimbaya",
   "COMP_AUTO": null,
   "COMP_JEFE": 3.53,
   "COMP_COLAB": null,
   "ROL3": "Par",
   "PESOS_ROL": {
    "jefe": 100.0
   },
   "COMP_ESCALA": 3.53,
   "POT_ESCALA": 3.4,
   "PUNTAJE_DESEMPENO": 88.3,
   "PUNTAJE_POTENCIAL": 85.0,
   "NOTA_FINAL": 87.6,
   "NOTA_ESCALA": 3.51,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.67
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.67
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.67
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.67
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.0
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 4.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Aneider Tovar Quimbaya",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "10768979",
   "NOMBRE": "Oscar Enrique Otero Garcia",
   "CARGO": "MAESTRO DE OBRA",
   "AREA": "Obra Civil",
   "JEFE": "Yuri Alexandra Forero Aguirre",
   "COMP_AUTO": null,
   "COMP_JEFE": 4.0,
   "COMP_COLAB": null,
   "ROL3": "Colab./Par",
   "PESOS_ROL": {
    "jefe": 100.0
   },
   "COMP_ESCALA": 4.0,
   "POT_ESCALA": 4.0,
   "PUNTAJE_DESEMPENO": 100.0,
   "PUNTAJE_POTENCIAL": 100.0,
   "NOTA_FINAL": 100.0,
   "NOTA_ESCALA": 4.0,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 4.0
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 4.0
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 4.0
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 4.0
    },
    {
     "nombre": "Resilencia",
     "puntaje": 4.0
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 4.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 4.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 4.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Yuri Alexandra Forero Aguirre",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Yuri Alexandra Forero Aguirre",
     "cc_evaluador": "1032436351",
     "rol": "Jefe",
     "aspectos": "Oscar, es un persona muy colaboradora, servicial, trabajadora. Además, busca solución a las cosas que se requiere en el día a día, tiene buena actitud, es amable y agradable con sus compañeros de trabajo. No tengo ningún aspecto negativo que mencionar.",
     "recomendaciones": null,
     "fecha": "2026-08-27",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1077085366",
   "NOMBRE": "Yessika Dayane Varon Velandia",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Aneider Tovar Quimbaya",
   "COMP_AUTO": 2.67,
   "COMP_JEFE": 2.07,
   "COMP_COLAB": 2.73,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.39,
   "POT_ESCALA": 2.0,
   "PUNTAJE_DESEMPENO": 59.7,
   "PUNTAJE_POTENCIAL": 50.0,
   "NOTA_FINAL": 57.8,
   "NOTA_ESCALA": 2.31,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.7
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.57
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.43
    },
    {
     "nombre": "Resilencia",
     "puntaje": 2.27
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 1.97
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 2.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 2.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Aneider Tovar Quimbaya",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "1078350177",
   "NOMBRE": "Lina Marcela Benavides Santos",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Aneider Tovar Quimbaya",
   "COMP_AUTO": null,
   "COMP_JEFE": 3.07,
   "COMP_COLAB": null,
   "ROL3": "Par",
   "PESOS_ROL": {
    "jefe": 100.0
   },
   "COMP_ESCALA": 3.07,
   "POT_ESCALA": 3.2,
   "PUNTAJE_DESEMPENO": 76.7,
   "PUNTAJE_POTENCIAL": 80.0,
   "NOTA_FINAL": 77.4,
   "NOTA_ESCALA": 3.09,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.33
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.0
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.0
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Aneider Tovar Quimbaya",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "1082803615",
   "NOMBRE": "Milton Andres Perdomo Trujillo",
   "CARGO": "COORDINADOR DE MANTENIMIENTO LIQUIDOS",
   "AREA": "Estaciones",
   "JEFE": "Pena Hernan Dario Camargo",
   "COMP_AUTO": 3.2,
   "COMP_JEFE": 3.4,
   "COMP_COLAB": null,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA": 3.32,
   "POT_ESCALA": 3.2,
   "PUNTAJE_DESEMPENO": 83.0,
   "PUNTAJE_POTENCIAL": 80.0,
   "NOTA_FINAL": 82.4,
   "NOTA_ESCALA": 3.3,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.47
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.4
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.4
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.2
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.13
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 4.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Pena Hernan Dario Camargo",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "1092912030",
   "NOMBRE": "Ramirez Diana Yuliet Agudelo",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Jairo Gilberto Fino",
   "COMP_AUTO": 3.0,
   "COMP_JEFE": 3.2,
   "COMP_COLAB": 3.73,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.32,
   "POT_ESCALA": 3.0,
   "PUNTAJE_DESEMPENO": 83.0,
   "PUNTAJE_POTENCIAL": 75.0,
   "NOTA_FINAL": 81.4,
   "NOTA_ESCALA": 3.26,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.43
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.4
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.3
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.3
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.17
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Jairo Gilberto Fino",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Jairo Gilberto Fino",
     "cc_evaluador": "7317617",
     "rol": "Jefe",
     "aspectos": "SE DESTACA POR SU LIDERAZGO EN EL EQUIPO DE TRABAJO Y APORTA DE LA MEJOR MANERA CUANDO HAY DIFICULTADES EN EL DESARROLLO DE ACTIVIDADES ACARGO",
     "recomendaciones": "PERFECCIONAR PROTOCOLO DE SERVICIO Y MEJORAR VENTA DE LUBRICANTES",
     "fecha": "2026-09-10",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1094883322",
   "NOMBRE": "Diana Patricia Sandoval Calderon",
   "CARGO": "ASISTENTE DE TRAFICO Y SEGURIDAD",
   "AREA": "Unitrans",
   "JEFE": "Jose Guillermo Palacios Vanegas",
   "COMP_AUTO": 3.93,
   "COMP_JEFE": 3.13,
   "COMP_COLAB": 2.4,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.07,
   "POT_ESCALA": 2.6,
   "PUNTAJE_DESEMPENO": 76.8,
   "PUNTAJE_POTENCIAL": 65.0,
   "NOTA_FINAL": 74.4,
   "NOTA_ESCALA": 2.98,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.3
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.27
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.03
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.97
    },
    {
     "nombre": "Resilencia",
     "puntaje": 2.8
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Jose Guillermo Palacios Vanegas",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Jose Guillermo Palacios Vanegas",
     "cc_evaluador": "19328337",
     "rol": "Jefe",
     "aspectos": "Es una persona responsable con su trabajo, honesta, mantiene buenas relaciones con los compañeros",
     "recomendaciones": "Capacitación en herramientas de ofimática y análisis de datos",
     "fecha": "2026-09-08",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1095818782",
   "NOMBRE": "Jose Andres Sierra Puertas",
   "CARGO": "ASISTENTE DE MANTENIMIENTO",
   "AREA": "Estaciones",
   "JEFE": "",
   "COMP_AUTO": null,
   "COMP_JEFE": null,
   "COMP_COLAB": 2.5,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "colab": 100.0
   },
   "COMP_ESCALA": 2.5,
   "POT_ESCALA": null,
   "PUNTAJE_DESEMPENO": 62.5,
   "PUNTAJE_POTENCIAL": null,
   "NOTA_FINAL": null,
   "NOTA_ESCALA": null,
   "COMPETENCIAS": [
    {
     "nombre": "Resilencia",
     "puntaje": 3.17
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.67
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.5
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.33
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 1.83
    }
   ],
   "POTENCIAL_DETALLE": [],
   "FOTO": "",
   "REPORTA_A": "",
   "COMPLETO": false,
   "FEEDBACK": []
  },
  {
   "CC": "1098688024",
   "NOMBRE": "Deicy Carolina Boada Castillo",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Martha Vianet Avila León",
   "COMP_AUTO": 3.2,
   "COMP_JEFE": 3.07,
   "COMP_COLAB": 3.4,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.19,
   "POT_ESCALA": 2.8,
   "PUNTAJE_DESEMPENO": 79.8,
   "PUNTAJE_POTENCIAL": 70.0,
   "NOTA_FINAL": 77.8,
   "NOTA_ESCALA": 3.11,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.33
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.27
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.27
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.1
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.0
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Martha Vianet Avila León",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "1099203043",
   "NOMBRE": "Manuel Vargas Quiroga",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Martha Vianet Avila León",
   "COMP_AUTO": null,
   "COMP_JEFE": 2.33,
   "COMP_COLAB": 3.0,
   "ROL3": "Par",
   "PESOS_ROL": {
    "jefe": 62.5,
    "colab": 37.5
   },
   "COMP_ESCALA": 2.58,
   "POT_ESCALA": 1.6,
   "PUNTAJE_DESEMPENO": 64.6,
   "PUNTAJE_POTENCIAL": 40.0,
   "NOTA_FINAL": 59.7,
   "NOTA_ESCALA": 2.39,
   "COMPETENCIAS": [
    {
     "nombre": "Resilencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.58
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.58
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.38
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.38
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 2.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 1.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 1.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Martha Vianet Avila León",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "1099210397",
   "NOMBRE": "Erika Viviana Salgado Suarez",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Martha Vianet Avila León",
   "COMP_AUTO": 3.0,
   "COMP_JEFE": 2.6,
   "COMP_COLAB": null,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA": 2.76,
   "POT_ESCALA": 2.2,
   "PUNTAJE_DESEMPENO": 69.0,
   "PUNTAJE_POTENCIAL": 55.0,
   "NOTA_FINAL": 66.2,
   "NOTA_ESCALA": 2.65,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.0
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.8
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.6
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.4
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 2.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Martha Vianet Avila León",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "1099213825",
   "NOMBRE": "Laura Jimena Cubides López",
   "CARGO": "JEFE DE PATIOS",
   "AREA": "Pista",
   "JEFE": "Martha Vianet Avila León",
   "COMP_AUTO": null,
   "COMP_JEFE": 2.93,
   "COMP_COLAB": 3.0,
   "ROL3": "Par",
   "PESOS_ROL": {
    "jefe": 62.5,
    "colab": 37.5
   },
   "COMP_ESCALA": 2.96,
   "POT_ESCALA": 2.8,
   "PUNTAJE_DESEMPENO": 74.0,
   "PUNTAJE_POTENCIAL": 70.0,
   "NOTA_FINAL": 73.2,
   "NOTA_ESCALA": 2.93,
   "COMPETENCIAS": [
    {
     "nombre": "Resilencia",
     "puntaje": 3.25
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.0
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.88
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.88
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.79
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Martha Vianet Avila León",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "1099213863",
   "NOMBRE": "Luz Marina Gonzalez Romero",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Martha Vianet Avila León",
   "COMP_AUTO": null,
   "COMP_JEFE": null,
   "COMP_COLAB": null,
   "ROL3": "Par",
   "PESOS_ROL": {},
   "COMP_ESCALA": null,
   "POT_ESCALA": null,
   "PUNTAJE_DESEMPENO": null,
   "PUNTAJE_POTENCIAL": null,
   "NOTA_FINAL": null,
   "NOTA_ESCALA": null,
   "COMPETENCIAS": [],
   "POTENCIAL_DETALLE": [],
   "FOTO": "",
   "REPORTA_A": "Martha Vianet Avila León",
   "COMPLETO": false,
   "FEEDBACK": []
  },
  {
   "CC": "1099216768",
   "NOMBRE": "Camilo Andres Tellez Rojas",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Martha Vianet Avila León",
   "COMP_AUTO": 3.47,
   "COMP_JEFE": 2.87,
   "COMP_COLAB": null,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA": 3.11,
   "POT_ESCALA": 3.0,
   "PUNTAJE_DESEMPENO": 77.7,
   "PUNTAJE_POTENCIAL": 75.0,
   "NOTA_FINAL": 77.2,
   "NOTA_ESCALA": 3.09,
   "COMPETENCIAS": [
    {
     "nombre": "Resilencia",
     "puntaje": 3.4
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.27
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.13
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.0
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.73
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Martha Vianet Avila León",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "1104124557",
   "NOMBRE": "Soraida Zetuain Ayala",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Aneider Tovar Quimbaya",
   "COMP_AUTO": null,
   "COMP_JEFE": 2.87,
   "COMP_COLAB": null,
   "ROL3": "Par",
   "PESOS_ROL": {
    "jefe": 100.0
   },
   "COMP_ESCALA": 2.87,
   "POT_ESCALA": 2.2,
   "PUNTAJE_DESEMPENO": 71.7,
   "PUNTAJE_POTENCIAL": 55.0,
   "NOTA_FINAL": 68.4,
   "NOTA_ESCALA": 2.73,
   "COMPETENCIAS": [
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.67
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.67
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 2.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Aneider Tovar Quimbaya",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "1111788678",
   "NOMBRE": "Josie Alejandra Angulo Garcia",
   "CARGO": "DIRECTOR JURIDICO",
   "AREA": "Jurídico",
   "JEFE": "Adriana Castro, Lucero Andrea Bernal Chacon",
   "COMP_AUTO": 3.67,
   "COMP_JEFE": 3.53,
   "COMP_COLAB": null,
   "ROL3": "Colab./Par",
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA": 3.59,
   "POT_ESCALA": 3.6,
   "PUNTAJE_DESEMPENO": 89.7,
   "PUNTAJE_POTENCIAL": 90.0,
   "NOTA_FINAL": 89.8,
   "NOTA_ESCALA": 3.59,
   "COMPETENCIAS": [
    {
     "nombre": "Sentido de Urgencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.8
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.67
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.27
    },
    {
     "nombre": "Proactividad",
     "puntaje": 3.2
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 4.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 4.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Adriana Castro, Lucero Andrea Bernal Chacon",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Lucero Andrea Bernal Chacon",
     "cc_evaluador": "52662402",
     "rol": "Jefe",
     "aspectos": "El liderazgo de su área permite tener la tranquilidad de procesos realizados de manera correcta, ha generado una organización documental valiosa para la organización, participa de manera activa en diferentes procesos proporcionando conceptos valiosos.",
     "recomendaciones": "Debe generar una mejor comunicación que le permita influir en los demás lideres de área para que vean en ella un aliado y no un trámite complicado.",
     "fecha": "2026-09-17",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1116547806",
   "NOMBRE": "Yeidy Lisseth Vasquez Morales",
   "CARGO": "ADMINISTRADOR EDS NIVEL II",
   "AREA": "Estaciones",
   "JEFE": "Pena Hernan Dario Camargo",
   "COMP_AUTO": 3.4,
   "COMP_JEFE": 1.8,
   "COMP_COLAB": 3.67,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.68,
   "POT_ESCALA": 2.4,
   "PUNTAJE_DESEMPENO": 67.0,
   "PUNTAJE_POTENCIAL": 60.0,
   "NOTA_FINAL": 65.6,
   "NOTA_ESCALA": 2.62,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.1
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.87
    },
    {
     "nombre": "Resilencia",
     "puntaje": 2.6
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.5
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.33
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 1.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 4.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Pena Hernan Dario Camargo",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Pena Hernan Dario Camargo",
     "cc_evaluador": "80198812",
     "rol": "Jefe",
     "aspectos": "Compromiso en situaciones que requieren mayor atención",
     "recomendaciones": "Comunicación asertiva, seguir instrucciones en tareas básicas, actitud positiva, cumplimiento de gestión del tiempo",
     "fecha": "2026-09-28",
     "acciones": [
      {
       "competencia": "Comunicación Efectiva",
       "objetivo": "Liderazgo",
       "accion": "Formación en liderazgo",
       "fecha": "2026-12-31"
      }
     ]
    }
   ]
  },
  {
   "CC": "11233615",
   "NOMBRE": "German Hernando Aldana Leon",
   "CARGO": "DIRECTOR DE TRANSPORTES",
   "AREA": "Unitrans",
   "JEFE": "Lucero Andrea Bernal Chacon",
   "COMP_AUTO": 3.8,
   "COMP_JEFE": 3.47,
   "COMP_COLAB": 3.53,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.55,
   "POT_ESCALA": 3.6,
   "PUNTAJE_DESEMPENO": 88.8,
   "PUNTAJE_POTENCIAL": 90.0,
   "NOTA_FINAL": 89.0,
   "NOTA_ESCALA": 3.56,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.73
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.72
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.52
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.52
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.28
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 4.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Lucero Andrea Bernal Chacon",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Lucero Andrea Bernal Chacon",
     "cc_evaluador": "52662402",
     "rol": "Jefe",
     "aspectos": "Su mayor fortaleza es el conocimiento especifico que tiene de las diferentes operaciones que realizamos, lo que le permite tomar decisiones. Su relacionamiento comercial viene presentando un buen desarrollo.",
     "recomendaciones": "Me preocupa el desgaste al que se enfrenta German por las situaciones que no logra resolver con el equipo que lo apoya, en especial desde la parte administrativa. Es importante reforzar su liderazgo en el hacer hacer para todos gestiones sus responsabilidades.",
     "fecha": "2026-09-03",
     "acciones": [
      {
       "competencia": "Comunicación Efectiva",
       "objetivo": "Fortalecer las habilidades de comunicación efectiva y retroalimentación, promoviendo conversaciones oportunas, claras y constructivas que faciliten la gestión de situaciones difíciles, la delegación de responsabilidades y el desarrollo de la autonomía del equipo.",
       "accion": "capacitación en manejo de conversaciones difíciles.",
       "fecha": "2027-01-31"
      }
     ]
    }
   ]
  },
  {
   "CC": "11344459",
   "NOMBRE": "Jose Vicente Murcia Carrillo",
   "CARGO": "COORDINADOR DE MANTENIMIENTO GAS E INFRAESTRUCTURA",
   "AREA": "Estaciones",
   "JEFE": "Pena Hernan Dario Camargo",
   "COMP_AUTO": 3.8,
   "COMP_JEFE": 2.8,
   "COMP_COLAB": 2.93,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.04,
   "POT_ESCALA": 2.2,
   "PUNTAJE_DESEMPENO": 76.0,
   "PUNTAJE_POTENCIAL": 55.0,
   "NOTA_FINAL": 71.8,
   "NOTA_ESCALA": 2.87,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.7
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.2
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.97
    },
    {
     "nombre": "Resilencia",
     "puntaje": 2.7
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.63
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 1.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Pena Hernan Dario Camargo",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "11518061",
   "NOMBRE": "Jose Flaminio Fernandez Fernandez",
   "CARGO": "VENDEDOR DE SERVICIOS III",
   "AREA": "Pista",
   "JEFE": "Manuel Crisanto Aguilera Hernandez",
   "COMP_AUTO": null,
   "COMP_JEFE": 3.27,
   "COMP_COLAB": null,
   "ROL3": "Par",
   "PESOS_ROL": {
    "jefe": 100.0
   },
   "COMP_ESCALA": 3.27,
   "POT_ESCALA": 3.6,
   "PUNTAJE_DESEMPENO": 81.7,
   "PUNTAJE_POTENCIAL": 90.0,
   "NOTA_FINAL": 83.4,
   "NOTA_ESCALA": 3.33,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.67
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.33
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.33
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.0
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 4.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 4.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 4.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Manuel Crisanto Aguilera Hernandez",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Manuel Crisanto Aguilera Hernandez",
     "cc_evaluador": "79767944",
     "rol": "Jefe",
     "aspectos": "excelente trabajador y complido de normas",
     "recomendaciones": "ninguna",
     "fecha": "2026-08-27",
     "acciones": []
    }
   ]
  },
  {
   "CC": "12130789",
   "NOMBRE": "Aneider Tovar Quimbaya",
   "CARGO": "ADMINISTRADOR EDS NIVEL I",
   "AREA": "Estaciones",
   "JEFE": "Pena Hernan Dario Camargo",
   "COMP_AUTO": 3.0,
   "COMP_JEFE": 2.87,
   "COMP_COLAB": 3.0,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.93,
   "POT_ESCALA": 3.8,
   "PUNTAJE_DESEMPENO": 73.3,
   "PUNTAJE_POTENCIAL": 95.0,
   "NOTA_FINAL": 77.6,
   "NOTA_ESCALA": 3.11,
   "COMPETENCIAS": [
    {
     "nombre": "Resilencia",
     "puntaje": 3.53
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.23
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.97
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.5
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.43
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 4.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 4.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 4.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Pena Hernan Dario Camargo",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Pena Hernan Dario Camargo",
     "cc_evaluador": "80198812",
     "rol": "Jefe",
     "aspectos": "Responsable, comprometido, orientado al logro",
     "recomendaciones": "Manejo de herramientas tecnológicas, ofimática",
     "fecha": "2026-09-29",
     "acciones": []
    }
   ]
  },
  {
   "CC": "12206541",
   "NOMBRE": "Yesid Triviño Trujilo",
   "CARGO": "CONDUCTOR",
   "AREA": "Unitrans",
   "JEFE": "German Hernando Aldana Leon",
   "COMP_AUTO": null,
   "COMP_JEFE": 3.53,
   "COMP_COLAB": 3.0,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "jefe": 62.5,
    "colab": 37.5
   },
   "COMP_ESCALA": 3.33,
   "POT_ESCALA": 4.0,
   "PUNTAJE_DESEMPENO": 83.3,
   "PUNTAJE_POTENCIAL": 100.0,
   "NOTA_FINAL": 86.6,
   "NOTA_ESCALA": 3.47,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.62
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.62
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.21
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.21
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.0
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 4.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 4.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 4.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "German Hernando Aldana Leon",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "German Hernando Aldana Leon",
     "cc_evaluador": "11233615",
     "rol": "Jefe",
     "aspectos": "compromiso y dedicacion",
     "recomendaciones": "comunicacion",
     "fecha": "2026-10-22",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1233493003",
   "NOMBRE": "Aldemar Duarte Ortiz",
   "CARGO": "COONTROLADOR LOGISTICO",
   "AREA": "Unitrans",
   "JEFE": "German Hernando Aldana Leon",
   "COMP_AUTO": 3.6,
   "COMP_JEFE": 3.6,
   "COMP_COLAB": 3.0,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.42,
   "POT_ESCALA": 4.0,
   "PUNTAJE_DESEMPENO": 85.5,
   "PUNTAJE_POTENCIAL": 100.0,
   "NOTA_FINAL": 88.4,
   "NOTA_ESCALA": 3.54,
   "COMPETENCIAS": [
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.7
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.57
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.5
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.2
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.13
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 4.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 4.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 4.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "German Hernando Aldana Leon",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "German Hernando Aldana Leon",
     "cc_evaluador": "11233615",
     "rol": "Jefe",
     "aspectos": "alto sentido de pertenecia y capacidad para desarrolar las tareas asignadas",
     "recomendaciones": "menos sentimiento mas accion",
     "fecha": "2026-10-22",
     "acciones": []
    }
   ]
  },
  {
   "CC": "17654173",
   "NOMBRE": "Javier de Jesus Cardona Soler",
   "CARGO": "CONDUCTOR",
   "AREA": "Unitrans",
   "JEFE": "German Hernando Aldana Leon",
   "COMP_AUTO": null,
   "COMP_JEFE": 2.53,
   "COMP_COLAB": 2.93,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "jefe": 62.5,
    "colab": 37.5
   },
   "COMP_ESCALA": 2.68,
   "POT_ESCALA": 2.8,
   "PUNTAJE_DESEMPENO": 67.1,
   "PUNTAJE_POTENCIAL": 70.0,
   "NOTA_FINAL": 67.7,
   "NOTA_ESCALA": 2.71,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.88
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.38
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.17
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 2.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "German Hernando Aldana Leon",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "German Hernando Aldana Leon",
     "cc_evaluador": "11233615",
     "rol": "Jefe",
     "aspectos": "cuidado de las unidades",
     "recomendaciones": "en formacion",
     "fecha": "2026-10-22",
     "acciones": []
    }
   ]
  },
  {
   "CC": "19328337",
   "NOMBRE": "Jose Guillermo Palacios Vanegas",
   "CARGO": "JEFE CONTROL INTERNO",
   "AREA": "Control Interno",
   "JEFE": "Adriana Castro",
   "COMP_AUTO": 2.93,
   "COMP_JEFE": null,
   "COMP_COLAB": 2.4,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 40.0,
    "colab": 60.0
   },
   "COMP_ESCALA": 2.61,
   "POT_ESCALA": null,
   "PUNTAJE_DESEMPENO": 65.3,
   "PUNTAJE_POTENCIAL": null,
   "NOTA_FINAL": null,
   "NOTA_ESCALA": null,
   "COMPETENCIAS": [
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.7
    },
    {
     "nombre": "Sentido de Urgencia",
     "puntaje": 2.7
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.6
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.57
    },
    {
     "nombre": "Proactividad",
     "puntaje": 2.5
    }
   ],
   "POTENCIAL_DETALLE": [],
   "FOTO": "",
   "REPORTA_A": "Adriana Castro",
   "COMPLETO": false,
   "FEEDBACK": []
  },
  {
   "CC": "30205841",
   "NOMBRE": "Martha Vianet Avila León",
   "CARGO": "ADMINISTRADOR EDS NIVEL II",
   "AREA": "Estaciones",
   "JEFE": "Pena Hernan Dario Camargo",
   "COMP_AUTO": 3.0,
   "COMP_JEFE": 2.8,
   "COMP_COLAB": 3.53,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.06,
   "POT_ESCALA": 2.6,
   "PUNTAJE_DESEMPENO": 76.5,
   "PUNTAJE_POTENCIAL": 65.0,
   "NOTA_FINAL": 74.2,
   "NOTA_ESCALA": 2.97,
   "COMPETENCIAS": [
    {
     "nombre": "Resilencia",
     "puntaje": 3.43
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.2
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.03
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.93
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.7
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Pena Hernan Dario Camargo",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Pena Hernan Dario Camargo",
     "cc_evaluador": "80198812",
     "rol": "Jefe",
     "aspectos": "Comunicación efectiva y asertiva, compromiso, responsabilidad",
     "recomendaciones": "Liderazgo",
     "fecha": "2026-09-28",
     "acciones": []
    }
   ]
  },
  {
   "CC": "3167179",
   "NOMBRE": "Fernando Pena Solano",
   "CARGO": "COORDINADOR AMBIENTAL Y GESTION DEL RIESGO DE DESASTRES",
   "AREA": "Jurídico",
   "JEFE": "Josie Alejandra Angulo Garcia",
   "COMP_AUTO": 2.73,
   "COMP_JEFE": 3.2,
   "COMP_COLAB": 3.3,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.14,
   "POT_ESCALA": 3.4,
   "PUNTAJE_DESEMPENO": 78.4,
   "PUNTAJE_POTENCIAL": 85.0,
   "NOTA_FINAL": 79.7,
   "NOTA_ESCALA": 3.19,
   "COMPETENCIAS": [
    {
     "nombre": "Sentido de Urgencia",
     "puntaje": 3.58
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.25
    },
    {
     "nombre": "Proactividad",
     "puntaje": 3.1
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.03
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.72
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 4.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 4.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Josie Alejandra Angulo Garcia",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "33700749",
   "NOMBRE": "Luz Amanda Cruz Varela",
   "CARGO": "ADMINISTRADOR NIVEL II",
   "AREA": "Estaciones",
   "JEFE": "Pena Hernan Dario Camargo",
   "COMP_AUTO": 2.87,
   "COMP_JEFE": 3.47,
   "COMP_COLAB": null,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA": 3.23,
   "POT_ESCALA": 2.6,
   "PUNTAJE_DESEMPENO": 80.7,
   "PUNTAJE_POTENCIAL": 65.0,
   "NOTA_FINAL": 77.6,
   "NOTA_ESCALA": 3.1,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.6
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.27
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.2
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.07
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.0
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 2.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Pena Hernan Dario Camargo",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Pena Hernan Dario Camargo",
     "cc_evaluador": "80198812",
     "rol": "Jefe",
     "aspectos": "Comprometida, responsable, hace un seguimiento oportuno a su competencia",
     "recomendaciones": "Manejo de herramientas tecnológicas",
     "fecha": "2026-09-29",
     "acciones": []
    }
   ]
  },
  {
   "CC": "37671407",
   "NOMBRE": "Diana Marcela Rios Blanco",
   "CARGO": "ASISTENTE ADMINISTRATIVO EDS",
   "AREA": "Estaciones",
   "JEFE": "Martha Vianet Avila León",
   "COMP_AUTO": 2.73,
   "COMP_JEFE": 2.6,
   "COMP_COLAB": 2.07,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.47,
   "POT_ESCALA": 2.6,
   "PUNTAJE_DESEMPENO": 61.7,
   "PUNTAJE_POTENCIAL": 65.0,
   "NOTA_FINAL": 62.4,
   "NOTA_ESCALA": 2.49,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.73
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.53
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.47
    },
    {
     "nombre": "Resilencia",
     "puntaje": 2.4
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.2
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Martha Vianet Avila León",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Martha Vianet Avila León",
     "cc_evaluador": "30205841",
     "rol": "Jefe",
     "aspectos": "Compromiso con la empresa, siempre dispuesta a dar mas en los momentos mas dificiles de la organización y con sus compañeros. sin importar horarios, siempre queriendo ayudar y solucionar inconvenientes.",
     "recomendaciones": "Un poco de planeación y organización y asi seria mucho mas efectiva y mejoraria tiempo.",
     "fecha": "2026-09-10",
     "acciones": []
    }
   ]
  },
  {
   "CC": "46371028",
   "NOMBRE": "Liliana Vargas",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Aneider Tovar Quimbaya",
   "COMP_AUTO": 3.0,
   "COMP_JEFE": 2.87,
   "COMP_COLAB": null,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA": 2.92,
   "POT_ESCALA": 3.2,
   "PUNTAJE_DESEMPENO": 73.0,
   "PUNTAJE_POTENCIAL": 80.0,
   "NOTA_FINAL": 74.4,
   "NOTA_ESCALA": 2.98,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.0
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.8
    },
    {
     "nombre": "Resilencia",
     "puntaje": 2.8
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Aneider Tovar Quimbaya",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "46675695",
   "NOMBRE": "Rosa Herminda Lopez",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Luz Amanda Cruz Varela",
   "COMP_AUTO": 3.67,
   "COMP_JEFE": 3.07,
   "COMP_COLAB": null,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA": 3.31,
   "POT_ESCALA": 3.0,
   "PUNTAJE_DESEMPENO": 82.7,
   "PUNTAJE_POTENCIAL": 75.0,
   "NOTA_FINAL": 81.2,
   "NOTA_ESCALA": 3.25,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.6
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.4
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.4
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.13
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.0
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Luz Amanda Cruz Varela",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Luz Amanda Cruz Varela",
     "cc_evaluador": "33700749",
     "rol": "Jefe",
     "aspectos": "Honestidad, Puntualidad, Agilidad, colaboración",
     "recomendaciones": "Comunicación efectiva",
     "fecha": "2026-09-08",
     "acciones": []
    }
   ]
  },
  {
   "CC": "51605731",
   "NOMBRE": "Luz Stella Oviedo Mendoza",
   "CARGO": "DIRECTOR DE TESORERIA",
   "AREA": "Financiero",
   "JEFE": "Lucero Andrea Bernal Chacon",
   "COMP_AUTO": 3.6,
   "COMP_JEFE": 2.47,
   "COMP_COLAB": 3.93,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.13,
   "POT_ESCALA": 2.6,
   "PUNTAJE_DESEMPENO": 78.3,
   "PUNTAJE_POTENCIAL": 65.0,
   "NOTA_FINAL": 75.6,
   "NOTA_ESCALA": 3.03,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.5
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.33
    },
    {
     "nombre": "Proactividad",
     "puntaje": 3.1
    },
    {
     "nombre": "Sentido de Urgencia",
     "puntaje": 3.1
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.63
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 2.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Lucero Andrea Bernal Chacon",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Lucero Andrea Bernal Chacon",
     "cc_evaluador": "52662402",
     "rol": "Jefe",
     "aspectos": "Genera plena confianza en la administración y custodia de los recursos financieros de la organización, demostrando integridad, responsabilidad y rigor en la ejecución de los procesos de tesorería.",
     "recomendaciones": "Fortalecer la gestión estratégica de tesorería mediante la optimización y automatización de procesos críticos, así como el fortalecimiento de mecanismos de prevención y monitoreo de riesgos operativos y de pagos, con el fin de incrementar la eficiencia, reducir la dependencia de controles manuales y anticipar oportunamente posibles contingencias financieras.",
     "fecha": "2026-09-03",
     "acciones": []
    }
   ]
  },
  {
   "CC": "51674142",
   "NOMBRE": "Ligia Ines Urbina",
   "CARGO": "COORDINADORA DE CALIDAD",
   "AREA": "Calidad",
   "JEFE": "Lucero Andrea Bernal Chacon",
   "COMP_AUTO": 3.13,
   "COMP_JEFE": 2.73,
   "COMP_COLAB": 3.13,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.93,
   "POT_ESCALA": 2.4,
   "PUNTAJE_DESEMPENO": 73.3,
   "PUNTAJE_POTENCIAL": 60.0,
   "NOTA_FINAL": 70.6,
   "NOTA_ESCALA": 2.83,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.12
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.0
    },
    {
     "nombre": "Sentido de Urgencia",
     "puntaje": 2.95
    },
    {
     "nombre": "Proactividad",
     "puntaje": 2.83
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.77
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 2.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Lucero Andrea Bernal Chacon",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Lucero Andrea Bernal Chacon",
     "cc_evaluador": "52662402",
     "rol": "Jefe",
     "aspectos": "el aspecto mas positivo esta en su contribución al fortalecimiento de los procesos de la organización.",
     "recomendaciones": "Fortalecer una visión más integral de la organización para anticiparse a las necesidades de los procesos e intervenir desde etapas tempranas, generando soluciones de mayor impacto. Asimismo, mantener la perseverancia en el acompañamiento a los líderes, incluso cuando los resultados o el compromiso esperado no se evidencien de forma inmediata.",
     "fecha": "2026-09-04",
     "acciones": []
    }
   ]
  },
  {
   "CC": "52129182",
   "NOMBRE": "Ramirez Mariluz Guaqueta",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Jairo Gilberto Fino",
   "COMP_AUTO": 3.33,
   "COMP_JEFE": 2.73,
   "COMP_COLAB": 2.8,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.87,
   "POT_ESCALA": 2.8,
   "PUNTAJE_DESEMPENO": 71.8,
   "PUNTAJE_POTENCIAL": 70.0,
   "NOTA_FINAL": 71.4,
   "NOTA_ESCALA": 2.86,
   "COMPETENCIAS": [
    {
     "nombre": "Resilencia",
     "puntaje": 3.07
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.9
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.87
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.83
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.7
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Jairo Gilberto Fino",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Jairo Gilberto Fino",
     "cc_evaluador": "7317617",
     "rol": "Jefe",
     "aspectos": "Es ordenada , cumple con horario asignado e informa novedades pronto presentan.",
     "recomendaciones": "Mejorar trabajo en Equipo y perfeccionar protocolo de atención al cliente.",
     "fecha": "2026-09-09",
     "acciones": [
      {
       "competencia": "Orientación al logro",
       "objetivo": "Trabajo en equipo",
       "accion": "Mayor compromiso con algunos de los compañeros",
       "fecha": "2026-10-08"
      },
      {
       "competencia": "Comunicación Efectiva",
       "objetivo": "Perfeccionar protocolo de servicio",
       "accion": "Mejorar atención al cliente",
       "fecha": "2027-10-08"
      }
     ]
    }
   ]
  },
  {
   "CC": "52182709",
   "NOMBRE": "Gloria Alcira Lara",
   "CARGO": "CAJERO",
   "AREA": "Tienda",
   "JEFE": "Fredy Albey Hernandez Amaya",
   "COMP_AUTO": 3.2,
   "COMP_JEFE": 2.27,
   "COMP_COLAB": 3.27,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.75,
   "POT_ESCALA": 2.6,
   "PUNTAJE_DESEMPENO": 68.8,
   "PUNTAJE_POTENCIAL": 65.0,
   "NOTA_FINAL": 68.0,
   "NOTA_ESCALA": 2.72,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.13
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.1
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.77
    },
    {
     "nombre": "Resilencia",
     "puntaje": 2.5
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.27
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 2.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 1.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Fredy Albey Hernandez Amaya",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Fredy Albey Hernandez Amaya",
     "cc_evaluador": "80139376",
     "rol": "Jefe",
     "aspectos": "ES UNA SRA MUY ORGANIZADA Y PUNTUAL",
     "recomendaciones": "LIDERAZGO",
     "fecha": "2026-09-30",
     "acciones": []
    }
   ]
  },
  {
   "CC": "52257983",
   "NOMBRE": "Olga Lucia Mateus Gil",
   "CARGO": "CAJERO",
   "AREA": "Tienda",
   "JEFE": "Fredy Albey Hernandez Amaya",
   "COMP_AUTO": 3.6,
   "COMP_JEFE": 2.53,
   "COMP_COLAB": 2.87,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.85,
   "POT_ESCALA": 2.6,
   "PUNTAJE_DESEMPENO": 71.2,
   "PUNTAJE_POTENCIAL": 65.0,
   "NOTA_FINAL": 70.0,
   "NOTA_ESCALA": 2.8,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.13
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.9
    },
    {
     "nombre": "Resilencia",
     "puntaje": 2.77
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.73
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.7
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 2.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 2.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Fredy Albey Hernandez Amaya",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Fredy Albey Hernandez Amaya",
     "cc_evaluador": "80139376",
     "rol": "Jefe",
     "aspectos": "ES UNA SRA MUY DEDICADA A SU TRABAJO",
     "recomendaciones": "LIDERAZGO",
     "fecha": "2026-09-30",
     "acciones": []
    }
   ]
  },
  {
   "CC": "52277826",
   "NOMBRE": "Jazmin Jisela Roa Guerrero",
   "CARGO": "JEFE DE PATIOS",
   "AREA": "Pista",
   "JEFE": "Manuel Crisanto Aguilera Hernandez",
   "COMP_AUTO": 3.27,
   "COMP_JEFE": 2.93,
   "COMP_COLAB": null,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA": 3.07,
   "POT_ESCALA": 3.6,
   "PUNTAJE_DESEMPENO": 76.7,
   "PUNTAJE_POTENCIAL": 90.0,
   "NOTA_FINAL": 79.4,
   "NOTA_ESCALA": 3.17,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.33
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.27
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.07
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.87
    },
    {
     "nombre": "Resilencia",
     "puntaje": 2.8
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 4.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 4.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Manuel Crisanto Aguilera Hernandez",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Manuel Crisanto Aguilera Hernandez",
     "cc_evaluador": "79767944",
     "rol": "Jefe",
     "aspectos": "organiza y ayuda, al moneto de presentarse algun incoveniente",
     "recomendaciones": "debe estar mas pendiente del personl de pista",
     "fecha": "2026-09-04",
     "acciones": []
    }
   ]
  },
  {
   "CC": "52341958",
   "NOMBRE": "Adriana Barrera Mojica",
   "CARGO": "PREPARADOR DE ALIMENTOS",
   "AREA": "Tienda",
   "JEFE": "Fredy Albey Hernandez Amaya",
   "COMP_AUTO": 3.07,
   "COMP_JEFE": 2.67,
   "COMP_COLAB": 3.0,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.85,
   "POT_ESCALA": 2.6,
   "PUNTAJE_DESEMPENO": 71.2,
   "PUNTAJE_POTENCIAL": 65.0,
   "NOTA_FINAL": 70.0,
   "NOTA_ESCALA": 2.8,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.9
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.83
    },
    {
     "nombre": "Resilencia",
     "puntaje": 2.83
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.67
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 1.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Fredy Albey Hernandez Amaya",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Fredy Albey Hernandez Amaya",
     "cc_evaluador": "80139376",
     "rol": "Jefe",
     "aspectos": "ES UNA SRA MUY AMABLE , MUY DINAMICA",
     "recomendaciones": "LIDERAZGO",
     "fecha": "2026-09-30",
     "acciones": []
    }
   ]
  },
  {
   "CC": "52342923",
   "NOMBRE": "Adriana Maria Calderon Diaz",
   "CARGO": "COORDINADOR ADMINISTRATIVO",
   "AREA": "Unitrans",
   "JEFE": "German Hernando Aldana Leon",
   "COMP_AUTO": 3.0,
   "COMP_JEFE": 3.27,
   "COMP_COLAB": 3.13,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.17,
   "POT_ESCALA": 3.2,
   "PUNTAJE_DESEMPENO": 79.3,
   "PUNTAJE_POTENCIAL": 80.0,
   "NOTA_FINAL": 79.4,
   "NOTA_ESCALA": 3.18,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.43
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.43
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.27
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.17
    },
    {
     "nombre": "Resilencia",
     "puntaje": 2.57
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 2.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 4.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "German Hernando Aldana Leon",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "German Hernando Aldana Leon",
     "cc_evaluador": "11233615",
     "rol": "Jefe",
     "aspectos": "Alto sentido se organizacion  compromiso y apoyo incondicional  para la organizacion.",
     "recomendaciones": "aumentar la disposicion para  adoptar los cambios en la organizacion",
     "fecha": "2026-10-22",
     "acciones": []
    }
   ]
  },
  {
   "CC": "52468956",
   "NOMBRE": "Maribel Rodriguez Prieto",
   "CARGO": "ASISTENTE ADMINISTRATIVO EDS",
   "AREA": "Estaciones",
   "JEFE": "Aneider Tovar Quimbaya",
   "COMP_AUTO": 3.0,
   "COMP_JEFE": 3.4,
   "COMP_COLAB": 3.67,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.4,
   "POT_ESCALA": 3.6,
   "PUNTAJE_DESEMPENO": 85.0,
   "PUNTAJE_POTENCIAL": 90.0,
   "NOTA_FINAL": 86.0,
   "NOTA_ESCALA": 3.44,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.8
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.63
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.3
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.27
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.0
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 4.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Aneider Tovar Quimbaya",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "52662402",
   "NOMBRE": "Lucero Andrea Bernal Chacon",
   "CARGO": "GERENTE GENERAL",
   "AREA": "Gerencia General",
   "JEFE": "Adriana Castro",
   "COMP_AUTO": 3.67,
   "COMP_JEFE": 2.87,
   "COMP_COLAB": 2.89,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.03,
   "POT_ESCALA": 3.0,
   "PUNTAJE_DESEMPENO": 75.8,
   "PUNTAJE_POTENCIAL": 75.0,
   "NOTA_FINAL": 75.6,
   "NOTA_ESCALA": 3.03,
   "COMPETENCIAS": [
    {
     "nombre": "Sentido de Urgencia",
     "puntaje": 3.32
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.14
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.13
    },
    {
     "nombre": "Proactividad",
     "puntaje": 2.86
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.71
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Adriana Castro",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Adriana Castro",
     "cc_evaluador": "39694966",
     "rol": "Jefe",
     "aspectos": "Realmente con nuestro modelo administrativo ella no puede tomar decisiones, no se arriesga precisamente por eso y así se dilatan muchas decisiones. Puede tener la voluntad, pero deja todo en manos del comité. Su fortaleza es que hace caso a lo que le indica el comité, pero no propone nada adicional. Debería estar más pendiente de la operación de los distintos negocios.",
     "recomendaciones": "Debe encaminarse a lograr una mayor empatía entre sus subalternos para así generar un clima favorable que lleve a mejorar resultados dentro de un ambiente amable sin ningún stress.",
     "fecha": "2026-09-16",
     "acciones": []
    }
   ]
  },
  {
   "CC": "52705483",
   "NOMBRE": "María Mercedes Huertas Lara",
   "CARGO": "VENDEDOR DE SERVICIOS III",
   "AREA": "Pista",
   "JEFE": "Yeidy Lisseth Vasquez Morales",
   "COMP_AUTO": 3.07,
   "COMP_JEFE": 2.87,
   "COMP_COLAB": null,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA": 2.95,
   "POT_ESCALA": 2.4,
   "PUNTAJE_DESEMPENO": 73.7,
   "PUNTAJE_POTENCIAL": 60.0,
   "NOTA_FINAL": 71.0,
   "NOTA_ESCALA": 2.84,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.13
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.8
    },
    {
     "nombre": "Resilencia",
     "puntaje": 2.8
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 1.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Yeidy Lisseth Vasquez Morales",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "5290159",
   "NOMBRE": "Alvaro Armando Angulo Quiñonez",
   "CARGO": "CONDUCTOR",
   "AREA": "Unitrans",
   "JEFE": "German Hernando Aldana Leon",
   "COMP_AUTO": null,
   "COMP_JEFE": 3.67,
   "COMP_COLAB": 3.87,
   "ROL3": "Par",
   "PESOS_ROL": {
    "jefe": 62.5,
    "colab": 37.5
   },
   "COMP_ESCALA": 3.74,
   "POT_ESCALA": 3.0,
   "PUNTAJE_DESEMPENO": 93.5,
   "PUNTAJE_POTENCIAL": 75.0,
   "NOTA_FINAL": 89.8,
   "NOTA_ESCALA": 3.59,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 4.0
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 4.0
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 4.0
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.58
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.12
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 2.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 4.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "German Hernando Aldana Leon",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "German Hernando Aldana Leon",
     "cc_evaluador": "11233615",
     "rol": "Jefe",
     "aspectos": "exelente desempeño buena actitud y coloboracion se resalta compromiso",
     "recomendaciones": "mayor participacion en actividades",
     "fecha": "2026-10-22",
     "acciones": []
    }
   ]
  },
  {
   "CC": "53000527",
   "NOMBRE": "Andrea del Pilar Sanchez Escobar",
   "CARGO": "PREPARADOR DE ALIMENTOS",
   "AREA": "Tienda",
   "JEFE": "Fredy Albey Hernandez Amaya",
   "COMP_AUTO": 3.13,
   "COMP_JEFE": 2.53,
   "COMP_COLAB": 2.87,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.75,
   "POT_ESCALA": 2.2,
   "PUNTAJE_DESEMPENO": 68.8,
   "PUNTAJE_POTENCIAL": 55.0,
   "NOTA_FINAL": 66.0,
   "NOTA_ESCALA": 2.64,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.97
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.67
    },
    {
     "nombre": "Resilencia",
     "puntaje": 2.67
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.47
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 1.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Fredy Albey Hernandez Amaya",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Fredy Albey Hernandez Amaya",
     "cc_evaluador": "80139376",
     "rol": "Jefe",
     "aspectos": "ES UNA SRA MUY ORGANIZADA",
     "recomendaciones": "FALTA UN POCO DE CONCENTRACION EN SUS FUNCIONES",
     "fecha": "2026-09-30",
     "acciones": []
    }
   ]
  },
  {
   "CC": "53064171",
   "NOMBRE": "Astrid Julieth Rojas Piracun",
   "CARGO": "PREPARADOR DE ALIMENTOS",
   "AREA": "Tienda",
   "JEFE": "Fredy Albey Hernandez Amaya",
   "COMP_AUTO": 2.73,
   "COMP_JEFE": 2.53,
   "COMP_COLAB": 3.0,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.71,
   "POT_ESCALA": 3.0,
   "PUNTAJE_DESEMPENO": 67.8,
   "PUNTAJE_POTENCIAL": 75.0,
   "NOTA_FINAL": 69.2,
   "NOTA_ESCALA": 2.77,
   "COMPETENCIAS": [
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.93
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.77
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.77
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.73
    },
    {
     "nombre": "Resilencia",
     "puntaje": 2.37
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Fredy Albey Hernandez Amaya",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Fredy Albey Hernandez Amaya",
     "cc_evaluador": "80139376",
     "rol": "Jefe",
     "aspectos": "ES UNA SRA MUY CORDIAL Y AMABLE",
     "recomendaciones": "LE FALTA UN POCO MAS DE CONCENTRACION EN SUS FUNCIONES",
     "fecha": "2026-09-30",
     "acciones": []
    }
   ]
  },
  {
   "CC": "7185458",
   "NOMBRE": "Alejandro Cely Avila",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Cesar Fernando Lopez Lopez",
   "COMP_AUTO": null,
   "COMP_JEFE": 3.0,
   "COMP_COLAB": null,
   "ROL3": "Par",
   "PESOS_ROL": {
    "jefe": 100.0
   },
   "COMP_ESCALA": 3.0,
   "POT_ESCALA": 2.8,
   "PUNTAJE_DESEMPENO": 75.0,
   "PUNTAJE_POTENCIAL": 70.0,
   "NOTA_FINAL": 74.0,
   "NOTA_ESCALA": 2.96,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.0
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.0
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Cesar Fernando Lopez Lopez",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "7317617",
   "NOMBRE": "Jairo Gilberto Fino",
   "CARGO": "ADMINISTRADOR EDS NIVEL I",
   "AREA": "Estaciones",
   "JEFE": "Pena Hernan Dario Camargo",
   "COMP_AUTO": 3.07,
   "COMP_JEFE": 3.47,
   "COMP_COLAB": 4.0,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.55,
   "POT_ESCALA": 3.0,
   "PUNTAJE_DESEMPENO": 88.7,
   "PUNTAJE_POTENCIAL": 75.0,
   "NOTA_FINAL": 86.0,
   "NOTA_ESCALA": 3.44,
   "COMPETENCIAS": [
    {
     "nombre": "Resilencia",
     "puntaje": 3.87
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.7
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.57
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.47
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.13
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Pena Hernan Dario Camargo",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Pena Hernan Dario Camargo",
     "cc_evaluador": "80198812",
     "rol": "Jefe",
     "aspectos": "Compromiso, orientado al logro",
     "recomendaciones": "Debe ser mas estricto con el equipo de trabajo, a veces es muy lapso y el equipo abusa de ello",
     "fecha": "2026-09-28",
     "acciones": []
    }
   ]
  },
  {
   "CC": "7320804",
   "NOMBRE": "Dumar Albino Gonzalez",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Luz Amanda Cruz Varela",
   "COMP_AUTO": 3.0,
   "COMP_JEFE": 2.67,
   "COMP_COLAB": 2.93,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.81,
   "POT_ESCALA": 2.2,
   "PUNTAJE_DESEMPENO": 70.3,
   "PUNTAJE_POTENCIAL": 55.0,
   "NOTA_FINAL": 67.2,
   "NOTA_ESCALA": 2.69,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.83
    },
    {
     "nombre": "Resilencia",
     "puntaje": 2.67
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.57
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 2.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 2.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Luz Amanda Cruz Varela",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Luz Amanda Cruz Varela",
     "cc_evaluador": "33700749",
     "rol": "Jefe",
     "aspectos": "Responsabilidad, Agilidad , Puntualidad .",
     "recomendaciones": "Ser mas abierto a los cambios en aspectos personales y laborales .",
     "fecha": "2026-09-08",
     "acciones": []
    }
   ]
  },
  {
   "CC": "79042476",
   "NOMBRE": "Juan de Jesus Correa Leguizamon",
   "CARGO": "VENDEDOR DE SERVICIOS II",
   "AREA": "Pista",
   "JEFE": "Jairo Gilberto Fino",
   "COMP_AUTO": 2.87,
   "COMP_JEFE": 3.07,
   "COMP_COLAB": 2.93,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.99,
   "POT_ESCALA": 2.8,
   "PUNTAJE_DESEMPENO": 74.7,
   "PUNTAJE_POTENCIAL": 70.0,
   "NOTA_FINAL": 73.8,
   "NOTA_ESCALA": 2.95,
   "COMPETENCIAS": [
    {
     "nombre": "Resilencia",
     "puntaje": 3.33
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.93
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.93
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.73
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Jairo Gilberto Fino",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Jairo Gilberto Fino",
     "cc_evaluador": "7317617",
     "rol": "Jefe",
     "aspectos": "Trabajo en equipo y apoya cuando hay dificultades",
     "recomendaciones": "Mejorar exactitud  en la entrega de planilla de venta",
     "fecha": "2026-09-09",
     "acciones": []
    }
   ]
  },
  {
   "CC": "79048493",
   "NOMBRE": "Cesar Augusto Cardenas",
   "CARGO": "AUXILIAR DE MENSAJERIA",
   "AREA": "Gestión Humana",
   "JEFE": "Brandon David Pulido Rios",
   "COMP_AUTO": null,
   "COMP_JEFE": 3.13,
   "COMP_COLAB": 4.0,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "jefe": 62.5,
    "colab": 37.5
   },
   "COMP_ESCALA": 3.46,
   "POT_ESCALA": 3.2,
   "PUNTAJE_DESEMPENO": 86.5,
   "PUNTAJE_POTENCIAL": 80.0,
   "NOTA_FINAL": 85.2,
   "NOTA_ESCALA": 3.41,
   "COMPETENCIAS": [
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.58
    },
    {
     "nombre": "Proactividad",
     "puntaje": 3.58
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.38
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.38
    },
    {
     "nombre": "Sentido de Urgencia",
     "puntaje": 3.38
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Brandon David Pulido Rios",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "79205022",
   "NOMBRE": "Jairo Alberto Nunez",
   "CARGO": "CONDUCTOR",
   "AREA": "Unitrans",
   "JEFE": "German Hernando Aldana Leon",
   "COMP_AUTO": 3.0,
   "COMP_JEFE": 3.67,
   "COMP_COLAB": 3.0,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.33,
   "POT_ESCALA": 3.4,
   "PUNTAJE_DESEMPENO": 83.3,
   "PUNTAJE_POTENCIAL": 85.0,
   "NOTA_FINAL": 83.6,
   "NOTA_ESCALA": 3.35,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.5
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.5
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.33
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.33
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.0
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 4.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "German Hernando Aldana Leon",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "German Hernando Aldana Leon",
     "cc_evaluador": "11233615",
     "rol": "Jefe",
     "aspectos": "exelente desempeño y profesionalismo",
     "recomendaciones": "mayor participacion en actividades hse",
     "fecha": "2026-10-22",
     "acciones": []
    }
   ]
  },
  {
   "CC": "79222287",
   "NOMBRE": "Rodriguez Jimmy Alejandro Nieto",
   "CARGO": "CISO TIC",
   "AREA": "TIC",
   "JEFE": "Juan Pablo Cabezas Galindo",
   "COMP_AUTO": 3.0,
   "COMP_JEFE": 3.0,
   "COMP_COLAB": 4.0,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.3,
   "POT_ESCALA": 2.8,
   "PUNTAJE_DESEMPENO": 82.5,
   "PUNTAJE_POTENCIAL": 70.0,
   "NOTA_FINAL": 80.0,
   "NOTA_ESCALA": 3.2,
   "COMPETENCIAS": [
    {
     "nombre": "Sentido de Urgencia",
     "puntaje": 3.53
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.3
    },
    {
     "nombre": "Proactividad",
     "puntaje": 3.3
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.23
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.13
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Juan Pablo Cabezas Galindo",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "79269769",
   "NOMBRE": "Italo Antonio Real Linares",
   "CARGO": "VENDEDOR DE SERVICIOS III",
   "AREA": "Pista",
   "JEFE": "Manuel Crisanto Aguilera Hernandez",
   "COMP_AUTO": null,
   "COMP_JEFE": 3.87,
   "COMP_COLAB": null,
   "ROL3": "Par",
   "PESOS_ROL": {
    "jefe": 100.0
   },
   "COMP_ESCALA": 3.87,
   "POT_ESCALA": 3.6,
   "PUNTAJE_DESEMPENO": 96.7,
   "PUNTAJE_POTENCIAL": 90.0,
   "NOTA_FINAL": 95.4,
   "NOTA_ESCALA": 3.81,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 4.0
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 4.0
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 4.0
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 4.0
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.33
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 4.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 4.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Manuel Crisanto Aguilera Hernandez",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "79287867",
   "NOMBRE": "Jairo Baquero Milque",
   "CARGO": "CONDUCTOR",
   "AREA": "Unitrans",
   "JEFE": "German Hernando Aldana Leon",
   "COMP_AUTO": null,
   "COMP_JEFE": 3.2,
   "COMP_COLAB": 2.93,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "jefe": 62.5,
    "colab": 37.5
   },
   "COMP_ESCALA": 3.1,
   "POT_ESCALA": 3.0,
   "PUNTAJE_DESEMPENO": 77.5,
   "PUNTAJE_POTENCIAL": 75.0,
   "NOTA_FINAL": 77.0,
   "NOTA_ESCALA": 3.08,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.62
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.42
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.0
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.46
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "German Hernando Aldana Leon",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "German Hernando Aldana Leon",
     "cc_evaluador": "11233615",
     "rol": "Jefe",
     "aspectos": "cuidado con el equipo asignado",
     "recomendaciones": "mayor participacion en actividades de la compañia",
     "fecha": "2026-10-22",
     "acciones": []
    }
   ]
  },
  {
   "CC": "79431309",
   "NOMBRE": "Luis Enrique Tinjaca Romero",
   "CARGO": "CONDUCTOR",
   "AREA": "Unitrans",
   "JEFE": "German Hernando Aldana Leon",
   "COMP_AUTO": 3.07,
   "COMP_JEFE": 3.53,
   "COMP_COLAB": 3.0,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.28,
   "POT_ESCALA": 4.0,
   "PUNTAJE_DESEMPENO": 82.0,
   "PUNTAJE_POTENCIAL": 100.0,
   "NOTA_FINAL": 85.6,
   "NOTA_ESCALA": 3.42,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.5
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.5
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.23
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.17
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.0
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 4.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 4.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 4.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "German Hernando Aldana Leon",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "German Hernando Aldana Leon",
     "cc_evaluador": "11233615",
     "rol": "Jefe",
     "aspectos": "Capacidad de aprendizaje y superacion, cuidado con equipo",
     "recomendaciones": "comunicacion selectiva",
     "fecha": "2026-10-22",
     "acciones": []
    }
   ]
  },
  {
   "CC": "79544387",
   "NOMBRE": "Wilson Frey Garzon Vargas",
   "CARGO": "CONDUCTOR",
   "AREA": "Unitrans",
   "JEFE": "German Hernando Aldana Leon",
   "COMP_AUTO": null,
   "COMP_JEFE": 3.8,
   "COMP_COLAB": 3.0,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "jefe": 62.5,
    "colab": 37.5
   },
   "COMP_ESCALA": 3.5,
   "POT_ESCALA": 3.6,
   "PUNTAJE_DESEMPENO": 87.5,
   "PUNTAJE_POTENCIAL": 90.0,
   "NOTA_FINAL": 88.0,
   "NOTA_ESCALA": 3.52,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.62
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.62
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.42
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.42
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.42
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 4.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 4.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "German Hernando Aldana Leon",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "German Hernando Aldana Leon",
     "cc_evaluador": "11233615",
     "rol": "Jefe",
     "aspectos": "buena actitud y disposicion a instrucciones",
     "recomendaciones": "mejorar seguimiento de manteniminiento y cuidado de la unidad asignada",
     "fecha": "2026-10-22",
     "acciones": []
    }
   ]
  },
  {
   "CC": "79598946",
   "NOMBRE": "Juan Pablo Cabezas Galindo",
   "CARGO": "DIRECTOR TIC",
   "AREA": "TIC",
   "JEFE": "Lucero Andrea Bernal Chacon",
   "COMP_AUTO": 3.4,
   "COMP_JEFE": 3.07,
   "COMP_COLAB": 3.6,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.29,
   "POT_ESCALA": 3.2,
   "PUNTAJE_DESEMPENO": 82.3,
   "PUNTAJE_POTENCIAL": 80.0,
   "NOTA_FINAL": 81.8,
   "NOTA_ESCALA": 3.27,
   "COMPETENCIAS": [
    {
     "nombre": "Proactividad",
     "puntaje": 3.72
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.6
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.1
    },
    {
     "nombre": "Sentido de Urgencia",
     "puntaje": 3.05
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.0
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 2.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 4.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Lucero Andrea Bernal Chacon",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "79618830",
   "NOMBRE": "Carlos Alberto Amaya Acevedo",
   "CARGO": "CONDUCTOR",
   "AREA": "Unitrans",
   "JEFE": "German Hernando Aldana Leon",
   "COMP_AUTO": null,
   "COMP_JEFE": 3.6,
   "COMP_COLAB": 3.2,
   "ROL3": "Par",
   "PESOS_ROL": {
    "jefe": 62.5,
    "colab": 37.5
   },
   "COMP_ESCALA": 3.45,
   "POT_ESCALA": 3.4,
   "PUNTAJE_DESEMPENO": 86.2,
   "PUNTAJE_POTENCIAL": 85.0,
   "NOTA_FINAL": 86.0,
   "NOTA_ESCALA": 3.44,
   "COMPETENCIAS": [
    {
     "nombre": "Resilencia",
     "puntaje": 3.88
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.75
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.42
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.21
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.0
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 4.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "German Hernando Aldana Leon",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "German Hernando Aldana Leon",
     "cc_evaluador": "11233615",
     "rol": "Jefe",
     "aspectos": "actitud de escucha efectiva",
     "recomendaciones": "mayor partcipacion en actividades  de la compañia",
     "fecha": "2026-10-22",
     "acciones": []
    }
   ]
  },
  {
   "CC": "79648729",
   "NOMBRE": "Yesid Moreno Sanchez",
   "CARGO": "CONDUCTOR",
   "AREA": "Unitrans",
   "JEFE": "German Hernando Aldana Leon",
   "COMP_AUTO": null,
   "COMP_JEFE": 3.0,
   "COMP_COLAB": 2.87,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "jefe": 62.5,
    "colab": 37.5
   },
   "COMP_ESCALA": 2.95,
   "POT_ESCALA": 3.0,
   "PUNTAJE_DESEMPENO": 73.8,
   "PUNTAJE_POTENCIAL": 75.0,
   "NOTA_FINAL": 74.0,
   "NOTA_ESCALA": 2.96,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.21
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.21
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.21
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.88
    },
    {
     "nombre": "Resilencia",
     "puntaje": 2.25
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "German Hernando Aldana Leon",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "79650307",
   "NOMBRE": "Juan Carlos Lozano Gonzalez",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Jairo Gilberto Fino",
   "COMP_AUTO": 3.0,
   "COMP_JEFE": 3.13,
   "COMP_COLAB": null,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA": 3.08,
   "POT_ESCALA": 3.2,
   "PUNTAJE_DESEMPENO": 77.0,
   "PUNTAJE_POTENCIAL": 80.0,
   "NOTA_FINAL": 77.6,
   "NOTA_ESCALA": 3.1,
   "COMPETENCIAS": [
    {
     "nombre": "Resilencia",
     "puntaje": 3.4
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.0
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.0
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 4.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Jairo Gilberto Fino",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "79747167",
   "NOMBRE": "Jose Arcesio Useche Bañol",
   "CARGO": "CONDUCTOR",
   "AREA": "Unitrans",
   "JEFE": "German Hernando Aldana Leon",
   "COMP_AUTO": 3.0,
   "COMP_JEFE": 4.0,
   "COMP_COLAB": 3.0,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.5,
   "POT_ESCALA": 3.2,
   "PUNTAJE_DESEMPENO": 87.5,
   "PUNTAJE_POTENCIAL": 80.0,
   "NOTA_FINAL": 86.0,
   "NOTA_ESCALA": 3.44,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.5
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.5
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.5
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.5
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.5
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 4.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "German Hernando Aldana Leon",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "German Hernando Aldana Leon",
     "cc_evaluador": "11233615",
     "rol": "Jefe",
     "aspectos": "compromiso y dedicacion",
     "recomendaciones": null,
     "fecha": "2026-10-22",
     "acciones": []
    }
   ]
  },
  {
   "CC": "79749081",
   "NOMBRE": "Jaime Alonso Rojas Jimenez",
   "CARGO": "CONDUCTOR",
   "AREA": "Unitrans",
   "JEFE": "German Hernando Aldana Leon",
   "COMP_AUTO": null,
   "COMP_JEFE": 2.8,
   "COMP_COLAB": 2.73,
   "ROL3": "Par",
   "PESOS_ROL": {
    "jefe": 62.5,
    "colab": 37.5
   },
   "COMP_ESCALA": 2.78,
   "POT_ESCALA": 3.6,
   "PUNTAJE_DESEMPENO": 69.4,
   "PUNTAJE_POTENCIAL": 90.0,
   "NOTA_FINAL": 73.5,
   "NOTA_ESCALA": 2.94,
   "COMPETENCIAS": [
    {
     "nombre": "Resilencia",
     "puntaje": 3.25
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.04
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.33
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.25
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 4.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 4.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "German Hernando Aldana Leon",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "German Hernando Aldana Leon",
     "cc_evaluador": "11233615",
     "rol": "Jefe",
     "aspectos": "exelente habilidad en conduccion",
     "recomendaciones": "mayo participacion en las actividades de la compañia",
     "fecha": "2026-10-22",
     "acciones": []
    }
   ]
  },
  {
   "CC": "79767944",
   "NOMBRE": "Manuel Crisanto Aguilera Hernandez",
   "CARGO": "ADMINISTRADOR EDS NIVEL II",
   "AREA": "Estaciones",
   "JEFE": "Pena Hernan Dario Camargo",
   "COMP_AUTO": 3.47,
   "COMP_JEFE": 2.33,
   "COMP_COLAB": 3.53,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.92,
   "POT_ESCALA": 2.0,
   "PUNTAJE_DESEMPENO": 73.0,
   "PUNTAJE_POTENCIAL": 50.0,
   "NOTA_FINAL": 68.4,
   "NOTA_ESCALA": 2.74,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.5
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.23
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.83
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.53
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.5
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 2.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 1.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 1.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Pena Hernan Dario Camargo",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Pena Hernan Dario Camargo",
     "cc_evaluador": "80198812",
     "rol": "Jefe",
     "aspectos": "Compromiso, responsabilidad, entrega",
     "recomendaciones": "Liderazgo, exceso de empatía, es muy lapso con el equipo",
     "fecha": "2026-09-28",
     "acciones": []
    }
   ]
  },
  {
   "CC": "79906208",
   "NOMBRE": "William Yovanni Achury Cruz",
   "CARGO": "CONDUCTOR",
   "AREA": "Unitrans",
   "JEFE": "German Hernando Aldana Leon",
   "COMP_AUTO": null,
   "COMP_JEFE": 3.0,
   "COMP_COLAB": null,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "jefe": 100.0
   },
   "COMP_ESCALA": 3.0,
   "POT_ESCALA": null,
   "PUNTAJE_DESEMPENO": 75.0,
   "PUNTAJE_POTENCIAL": null,
   "NOTA_FINAL": null,
   "NOTA_ESCALA": null,
   "COMPETENCIAS": [
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.0
    }
   ],
   "POTENCIAL_DETALLE": [],
   "FOTO": "",
   "REPORTA_A": "German Hernando Aldana Leon",
   "COMPLETO": false,
   "FEEDBACK": []
  },
  {
   "CC": "80082705",
   "NOMBRE": "Willson Santos Ortiz",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Yeidy Lisseth Vasquez Morales",
   "COMP_AUTO": 3.0,
   "COMP_JEFE": 2.6,
   "COMP_COLAB": 3.0,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.8,
   "POT_ESCALA": 2.2,
   "PUNTAJE_DESEMPENO": 70.0,
   "PUNTAJE_POTENCIAL": 55.0,
   "NOTA_FINAL": 67.0,
   "NOTA_ESCALA": 2.68,
   "COMPETENCIAS": [
    {
     "nombre": "Resilencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.83
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.83
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.67
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.67
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 1.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Yeidy Lisseth Vasquez Morales",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "80089838",
   "NOMBRE": "Wilson Javier Garcia Garzon",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Yeidy Lisseth Vasquez Morales",
   "COMP_AUTO": null,
   "COMP_JEFE": 2.93,
   "COMP_COLAB": 3.67,
   "ROL3": "Par",
   "PESOS_ROL": {
    "jefe": 62.5,
    "colab": 37.5
   },
   "COMP_ESCALA": 3.21,
   "POT_ESCALA": 2.6,
   "PUNTAJE_DESEMPENO": 80.2,
   "PUNTAJE_POTENCIAL": 65.0,
   "NOTA_FINAL": 77.2,
   "NOTA_ESCALA": 3.09,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.38
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.25
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.25
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.12
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.04
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Yeidy Lisseth Vasquez Morales",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "80139376",
   "NOMBRE": "Fredy Albey Hernandez Amaya",
   "CARGO": "COORDINADOR DE TIENDAS",
   "AREA": "Tienda",
   "JEFE": "Lucero Andrea Bernal Chacon",
   "COMP_AUTO": 4.0,
   "COMP_JEFE": 3.07,
   "COMP_COLAB": 3.08,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.26,
   "POT_ESCALA": 2.6,
   "PUNTAJE_DESEMPENO": 81.4,
   "PUNTAJE_POTENCIAL": 65.0,
   "NOTA_FINAL": 78.1,
   "NOTA_ESCALA": 3.12,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.59
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.24
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.23
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.21
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.0
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 1.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Lucero Andrea Bernal Chacon",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Lucero Andrea Bernal Chacon",
     "cc_evaluador": "52662402",
     "rol": "Jefe",
     "aspectos": "Ha logrado conformar un equipo de trabajo sólido, ejerciendo un liderazgo efectivo que se refleja en resultados positivos y en la consolidación de una línea de negocio sostenible para la organización.",
     "recomendaciones": "Fortalecer su capacidad de influencia e impacto en los espacios de discusión y toma de decisiones, participando con mayor contundencia y visibilidad en las reuniones para potenciar su aporte estratégico y generar una mayor conexión con sus pares y líderes.",
     "fecha": "2026-09-04",
     "acciones": []
    }
   ]
  },
  {
   "CC": "80146018",
   "NOMBRE": "Yeizon Fernando Parra Vanegas",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Jairo Gilberto Fino",
   "COMP_AUTO": 2.0,
   "COMP_JEFE": 2.8,
   "COMP_COLAB": 3.93,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.98,
   "POT_ESCALA": 2.8,
   "PUNTAJE_DESEMPENO": 74.5,
   "PUNTAJE_POTENCIAL": 70.0,
   "NOTA_FINAL": 73.6,
   "NOTA_ESCALA": 2.94,
   "COMPETENCIAS": [
    {
     "nombre": "Resilencia",
     "puntaje": 3.3
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.17
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.93
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.77
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.73
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Jairo Gilberto Fino",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "80198812",
   "NOMBRE": "Pena Hernan Dario Camargo",
   "CARGO": "DIRECTOR DE ESTACIONES",
   "AREA": "Estaciones",
   "JEFE": "Lucero Andrea Bernal Chacon",
   "COMP_AUTO": 3.2,
   "COMP_JEFE": 3.33,
   "COMP_COLAB": 3.33,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.3,
   "POT_ESCALA": 3.6,
   "PUNTAJE_DESEMPENO": 82.6,
   "PUNTAJE_POTENCIAL": 90.0,
   "NOTA_FINAL": 84.1,
   "NOTA_ESCALA": 3.36,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.82
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.5
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.27
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.04
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.89
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 4.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 4.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Lucero Andrea Bernal Chacon",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Lucero Andrea Bernal Chacon",
     "cc_evaluador": "52662402",
     "rol": "Jefe",
     "aspectos": "Orientado al logro, con gran capacidad para movilizar a su equipo hacia el cumplimiento de objetivos. Se destaca por su visión de negocio, fortaleza comercial y profundo conocimiento del sector y sus necesidades.",
     "recomendaciones": "Así como logra movilizar a su equipo hacia el cumplimiento de los objetivos, puede fortalecer la colaboración con sus pares y líderes de proceso mediante la construcción de acuerdos de servicio, una comunicación más cercana y relaciones de trabajo que faciliten el logro de resultados comunes.",
     "fecha": "2026-09-04",
     "acciones": []
    }
   ]
  },
  {
   "CC": "80267588",
   "NOMBRE": "Manuel Antonio Moyano Arcos",
   "CARGO": "CONDUCTOR",
   "AREA": "Unitrans",
   "JEFE": "German Hernando Aldana Leon",
   "COMP_AUTO": null,
   "COMP_JEFE": 3.27,
   "COMP_COLAB": 3.0,
   "ROL3": "Par",
   "PESOS_ROL": {
    "jefe": 62.5,
    "colab": 37.5
   },
   "COMP_ESCALA": 3.17,
   "POT_ESCALA": 3.2,
   "PUNTAJE_DESEMPENO": 79.2,
   "PUNTAJE_POTENCIAL": 80.0,
   "NOTA_FINAL": 79.4,
   "NOTA_ESCALA": 3.17,
   "COMPETENCIAS": [
    {
     "nombre": "Resilencia",
     "puntaje": 3.62
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.42
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.0
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.79
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 4.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "German Hernando Aldana Leon",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "German Hernando Aldana Leon",
     "cc_evaluador": "11233615",
     "rol": "Jefe",
     "aspectos": "alto compromiso y experiencia en la tarea",
     "recomendaciones": "mayor  claridad en  comunicacion hacia terceros",
     "fecha": "2026-10-22",
     "acciones": []
    }
   ]
  },
  {
   "CC": "80440174",
   "NOMBRE": "William Lopez Calderon",
   "CARGO": "CONDUCTOR",
   "AREA": "Unitrans",
   "JEFE": "German Hernando Aldana Leon",
   "COMP_AUTO": null,
   "COMP_JEFE": 3.27,
   "COMP_COLAB": 3.33,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "jefe": 62.5,
    "colab": 37.5
   },
   "COMP_ESCALA": 3.29,
   "POT_ESCALA": 2.8,
   "PUNTAJE_DESEMPENO": 82.3,
   "PUNTAJE_POTENCIAL": 70.0,
   "NOTA_FINAL": 79.8,
   "NOTA_ESCALA": 3.19,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 4.0
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 4.0
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.12
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.79
    },
    {
     "nombre": "Resilencia",
     "puntaje": 2.54
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 2.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "German Hernando Aldana Leon",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "German Hernando Aldana Leon",
     "cc_evaluador": "11233615",
     "rol": "Jefe",
     "aspectos": "alto capacidad de atencion al detalle",
     "recomendaciones": "evitar estar en comentarios sueltos",
     "fecha": "2026-10-22",
     "acciones": []
    }
   ]
  },
  {
   "CC": "80470047",
   "NOMBRE": "Elkim Castaneda Ardila",
   "CARGO": "ASISTENTE ADMINISTRATIVO EDS",
   "AREA": "Estaciones",
   "JEFE": "Yeidy Lisseth Vasquez Morales",
   "COMP_AUTO": 3.67,
   "COMP_JEFE": 2.8,
   "COMP_COLAB": 1.4,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.55,
   "POT_ESCALA": 2.8,
   "PUNTAJE_DESEMPENO": 63.8,
   "PUNTAJE_POTENCIAL": 70.0,
   "NOTA_FINAL": 65.0,
   "NOTA_ESCALA": 2.6,
   "COMPETENCIAS": [
    {
     "nombre": "Resilencia",
     "puntaje": 2.8
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.73
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.47
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.47
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.3
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Yeidy Lisseth Vasquez Morales",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "80500823",
   "NOMBRE": "William Doctor Castañeda",
   "CARGO": "CONDUCTOR",
   "AREA": "Unitrans",
   "JEFE": "German Hernando Aldana Leon",
   "COMP_AUTO": 3.13,
   "COMP_JEFE": 3.47,
   "COMP_COLAB": 3.0,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.26,
   "POT_ESCALA": 3.2,
   "PUNTAJE_DESEMPENO": 81.5,
   "PUNTAJE_POTENCIAL": 80.0,
   "NOTA_FINAL": 81.2,
   "NOTA_ESCALA": 3.25,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.5
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.4
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.33
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.07
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.0
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 4.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "German Hernando Aldana Leon",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "German Hernando Aldana Leon",
     "cc_evaluador": "11233615",
     "rol": "Jefe",
     "aspectos": "profecionalismo",
     "recomendaciones": "mayor participacion en actividades de la compañia",
     "fecha": "2026-10-22",
     "acciones": []
    }
   ]
  },
  {
   "CC": "80807553",
   "NOMBRE": "Jorge Elberto Puentes Rojas",
   "CARGO": "CONDUCTOR",
   "AREA": "Unitrans",
   "JEFE": "German Hernando Aldana Leon",
   "COMP_AUTO": null,
   "COMP_JEFE": 3.73,
   "COMP_COLAB": 3.73,
   "ROL3": "Colab.",
   "PESOS_ROL": {
    "jefe": 62.5,
    "colab": 37.5
   },
   "COMP_ESCALA": 3.73,
   "POT_ESCALA": 4.0,
   "PUNTAJE_DESEMPENO": 93.3,
   "PUNTAJE_POTENCIAL": 100.0,
   "NOTA_FINAL": 94.6,
   "NOTA_ESCALA": 3.79,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 4.0
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.88
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.75
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.58
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.46
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 4.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 4.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 4.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 4.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "German Hernando Aldana Leon",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "German Hernando Aldana Leon",
     "cc_evaluador": "11233615",
     "rol": "Jefe",
     "aspectos": "exelente actitud y profecionalismo",
     "recomendaciones": "mas participacion en hse",
     "fecha": "2026-10-22",
     "acciones": []
    }
   ]
  },
  {
   "CC": "80871427",
   "NOMBRE": "Jose Dario Rodriguez Mendivelso",
   "CARGO": "VENDEDOR DE SERVICIOS",
   "AREA": "Pista",
   "JEFE": "Yeidy Lisseth Vasquez Morales",
   "COMP_AUTO": 3.0,
   "COMP_JEFE": 2.93,
   "COMP_COLAB": 3.07,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.99,
   "POT_ESCALA": 2.6,
   "PUNTAJE_DESEMPENO": 74.7,
   "PUNTAJE_POTENCIAL": 65.0,
   "NOTA_FINAL": 72.8,
   "NOTA_ESCALA": 2.91,
   "COMPETENCIAS": [
    {
     "nombre": "Resilencia",
     "puntaje": 3.1
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.0
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.83
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 2.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 2.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Yeidy Lisseth Vasquez Morales",
   "COMPLETO": true,
   "FEEDBACK": []
  },
  {
   "CC": "80921263",
   "NOMBRE": "Frankiyeiner Giraldo Sanchez",
   "CARGO": "AUXILIAR DE MANTENIMIENTO",
   "AREA": "Compras",
   "JEFE": "Erika Tatiana Guerrero Castillo",
   "COMP_AUTO": null,
   "COMP_JEFE": 3.67,
   "COMP_COLAB": 3.0,
   "ROL3": "Par",
   "PESOS_ROL": {
    "jefe": 62.5,
    "colab": 37.5
   },
   "COMP_ESCALA": 3.42,
   "POT_ESCALA": 3.2,
   "PUNTAJE_DESEMPENO": 85.4,
   "PUNTAJE_POTENCIAL": 80.0,
   "NOTA_FINAL": 84.3,
   "NOTA_ESCALA": 3.37,
   "COMPETENCIAS": [
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 3.62
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.62
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.42
    },
    {
     "nombre": "Proactividad",
     "puntaje": 3.21
    },
    {
     "nombre": "Sentido de Urgencia",
     "puntaje": 3.21
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 4.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 3.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Erika Tatiana Guerrero Castillo",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Erika Tatiana Guerrero Castillo",
     "cc_evaluador": "1023948329",
     "rol": "Jefe",
     "aspectos": "su forma de colaboración, la actitud que toma positivamente en cuanto indicaciones o mejoras que deba realizar",
     "recomendaciones": null,
     "fecha": "2026-08-27",
     "acciones": []
    }
   ]
  },
  {
   "CC": "86068498",
   "NOMBRE": "Alexander Ibarra Romero",
   "CARGO": "COONTROLADOR LOGISTICO",
   "AREA": "Unitrans",
   "JEFE": "German Hernando Aldana Leon",
   "COMP_AUTO": 3.0,
   "COMP_JEFE": 3.13,
   "COMP_COLAB": 3.13,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 3.11,
   "POT_ESCALA": 3.2,
   "PUNTAJE_DESEMPENO": 77.7,
   "PUNTAJE_POTENCIAL": 80.0,
   "NOTA_FINAL": 78.2,
   "NOTA_ESCALA": 3.13,
   "COMPETENCIAS": [
    {
     "nombre": "Orientación al logro",
     "puntaje": 3.37
    },
    {
     "nombre": "Resilencia",
     "puntaje": 3.33
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 3.2
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.93
    },
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 2.7
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 2.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 4.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 4.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "German Hernando Aldana Leon",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "German Hernando Aldana Leon",
     "cc_evaluador": "11233615",
     "rol": "Jefe",
     "aspectos": "alto sentido de respeto y compromiso",
     "recomendaciones": "desarrollar habilidades de interlocucion en reuniones",
     "fecha": "2026-10-22",
     "acciones": []
    }
   ]
  },
  {
   "CC": "93085550",
   "NOMBRE": "Juan Bautista Meneses Otavo",
   "CARGO": "JEFE DE PATIOS",
   "AREA": "Pista",
   "JEFE": "Jairo Gilberto Fino",
   "COMP_AUTO": 2.6,
   "COMP_JEFE": 3.0,
   "COMP_COLAB": 3.0,
   "ROL3": "Par",
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA": 2.92,
   "POT_ESCALA": 2.8,
   "PUNTAJE_DESEMPENO": 73.0,
   "PUNTAJE_POTENCIAL": 70.0,
   "NOTA_FINAL": 72.4,
   "NOTA_ESCALA": 2.9,
   "COMPETENCIAS": [
    {
     "nombre": "Innovación y Mejora continua",
     "puntaje": 3.17
    },
    {
     "nombre": "Comunicación Efectiva",
     "puntaje": 2.93
    },
    {
     "nombre": "Orientación a los procesos",
     "puntaje": 2.87
    },
    {
     "nombre": "Orientación al logro",
     "puntaje": 2.87
    },
    {
     "nombre": "Resilencia",
     "puntaje": 2.77
    }
   ],
   "POTENCIAL_DETALLE": [
    {
     "nombre": "Adaptabilidad y Resiliencia",
     "puntaje": 3.0
    },
    {
     "nombre": "Agilidad de Aprendizaje",
     "puntaje": 3.0
    },
    {
     "nombre": "Impulso y Ambición de Logro",
     "puntaje": 3.0
    },
    {
     "nombre": "Influencia e Impacto Interpersonal",
     "puntaje": 2.0
    },
    {
     "nombre": "Pensamiento Complejo",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "REPORTA_A": "Jairo Gilberto Fino",
   "COMPLETO": true,
   "FEEDBACK": [
    {
     "evaluador": "Jairo Gilberto Fino",
     "cc_evaluador": "7317617",
     "rol": "Jefe",
     "aspectos": "Colaborador Proactivo, Puntual y Apoyo fundamental para el cumplimiento de objetivos Propuestos",
     "recomendaciones": "Mejorar en el apoyo con la exigencia del protocolo de servicio",
     "fecha": "2026-09-10",
     "acciones": []
    }
   ]
  }
 ]
};
