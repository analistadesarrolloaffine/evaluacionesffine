/**
 * Datos de evaluación KAIKA — generado desde kaika_final_con_pesos.xlsx
 *
 * PUNTAJE_POTENCIAL  = competencias (0-100). Promedio por rol ponderado:
 *     Auto 20% · Jefe 50% · Colaborador 30%
 *     sin colaborador → Auto 40% · Jefe 60%
 *     sin jefe        → Auto 40% · Colaborador 60%
 *     Escala original 1 a 6 → % = nota / 6 × 100
 * PUNTAJE_DESEMPENO  = indicadores (0-100). Calificación del jefe ponderada
 *     por el PESO de cada indicador. Calificaciones de 1 a 10 se leen sobre 10;
 *     el resto como % de cumplimiento (tope 100).
 * NOTA_FINAL         = 70% competencias + 30% indicadores.
 * COMPLETO = false   → le falta la calificación de indicadores o de competencias;
 *                      no se ubica en el 9box.
 */
window.EVAL_KAIKA = {
 "empresa": "KAIKA",
 "medicion": "Evaluación de Desempeño KAIKA 2026",
 "fuente": "kaika_final_con_pesos.xlsx",
 "reglas": {
  "comp_escala_max": 6,
  "pesos_rol": "Auto 20% · Jefe 50% · Colaborador 30% (sin colaborador: Auto 40% · Jefe 60%; sin jefe: Auto 40% · Colaborador 60%)",
  "pesos_variables": {
   "competencias": 70,
   "indicadores": 30
  },
  "eje_x": {
   "nombre": "Indicadores",
   "corto": "Ind.",
   "campo_escala": null,
   "escala": null,
   "falta": "sin calificación de indicadores del jefe"
  },
  "eje_y": {
   "nombre": "Competencias",
   "corto": "Comp.",
   "campo_escala": "COMP_ESCALA6",
   "escala": 6,
   "falta": "sin calificación de competencias"
  },
  "nota_texto": "70% comp. + 30% ind.",
  "nota_campo_escala": null,
  "dashboard_pct": true,
  "grupos_competencias": [
   {
    "nombre": "Competencias organizacionales",
    "items": [
     "APRENDIZAJE CONTINUO",
     "INNOVACION Y MEJORA CONTINUA",
     "ORIENTACION AL CLIENTE INTERNO / EXTERNO"
    ]
   },
   {
    "nombre": "Competencias de liderazgo",
    "items": [
     "LIDERAZGO TRANSFORMACIONAL",
     "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD"
    ]
   },
   {
    "nombre": "Competencias técnicas",
    "resto": true
   }
  ]
 },
 "empleados": [
  {
   "CC": "1000730837",
   "NOMBRE": "Laura Daniela Aguazaco Orjuela",
   "CARGO": "PROFESIONAL DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Camila Andrea Vargas Pulido",
   "COMP_AUTO": null,
   "COMP_JEFE": 4.08,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "jefe": 100.0
   },
   "COMP_ESCALA6": 4.08,
   "PUNTAJE_POTENCIAL": 68.1,
   "PUNTAJE_DESEMPENO": 94.5,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Brindar atención técnica y posventa de alto nivel, generando confianza, fidelización y satisfacción en los clientes atendidos, fortaleciendo la imagen de KAIKA como aliado técnico confiable.",
     "peso": 30.0,
     "calificacion": 95.0,
     "pct": 95.0
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar el correcto diligenciamiento, archivo y control de los reportes técnicos, formatos de servicio, registros en sistemas internos y documentación asociada a repuestos, garantías y certificaciones.",
     "peso": 30.0,
     "calificacion": 100.0,
     "pct": 100.0
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar que las actividades de instalación, mantenimiento, diagnóstico y reparación de equipos se ejecuten bajo los más altos estándares técnicos, de calidad y seguridad, cumpliendo con los tiempos, normativas y procedimientos establecidos por KAIKA y los fabricantes.",
     "peso": 40.0,
     "calificacion": 90.0,
     "pct": 90.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ADAPTABILIDAD",
     "puntaje": 4.67
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.0
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.0
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 3.67
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 76.0,
   "COMPLETO": true,
   "REPORTA_A": "Camila Andrea Vargas Pulido",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Camila Andrea Vargas Pulido",
     "cc_evaluador": "1075684206",
     "rol": "Jefe",
     "aspectos": "Laura se caracteriza por ser una persona responsable, comprometida y orientada a la solución de problemas. Tiene una actitud positiva frente al cambio, demuestra interés por asumir nuevos retos y busca constantemente oportunidades para aprender, crecer y alcanzar nuevos objetivos. Se destaca por su agilidad de respuesta, capacidad resolutiva y disposición para brindar apoyo en el área de soporte técnico, donde demuestra interés y compromiso. Es una muy buena persona",
     "recomendaciones": "Se recomienda continuar fortaleciendo la puntualidad y la atención al cliente interno y externo, procurando mantener una comunicación oportuna, amable y orientada a brindar soluciones efectivas. Es importante resaltar que durante este año ha demostrado avances significativos en estos aspectos, evidenciando disposición para mejorar y compromiso con su desarrollo profesional. La invitación es a mantener esta evolución de manera constante, consolidando estos hábitos como parte de su desempeño y contribuyendo a una mejor experiencia para los clientes.",
     "fecha": "2026-10-22",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1000938233",
   "NOMBRE": "Jhojan Estiven Ortiz Diaz",
   "CARGO": "AUXILIAR DE ALMACEN",
   "AREA": "Almacén",
   "JEFE": "Hugo Enrique Garcia Bautista",
   "COMP_AUTO": 4.8,
   "COMP_JEFE": 3.6,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.08,
   "PUNTAJE_POTENCIAL": 68.0,
   "PUNTAJE_DESEMPENO": 98.7,
   "INDICADORES": [
    {
     "grupo": "AUXILIAR DE ALMACEN",
     "objetivo": "Cumplir con la preparación y entrega de pedidos en tiempo, forma y condiciones adecuadas, garantizando la satisfacción del cliente interno y externo y la integridad de los productos biomédicos.",
     "peso": 40.0,
     "calificacion": 99.65,
     "pct": 99.7
    },
    {
     "grupo": "AUXILIAR DE ALMACEN",
     "objetivo": "Garantizar la correcta organización, actualización y conciliación de los inventarios, evitando pérdidas, deterioros o diferencias que afecten la confiabilidad de la información contable y logística.",
     "peso": 60.0,
     "calificacion": 98.13,
     "pct": 98.1
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "GESTION ESTRATEGICA DE LA INFORMACION Y TOMA DE DECISIONES",
     "puntaje": 4.53
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.27
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.07
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 3.87
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 3.67
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 77.2,
   "COMPLETO": true,
   "REPORTA_A": "Hugo Enrique Garcia Bautista",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Operativo",
   "FEEDBACK": [
    {
     "evaluador": "Hugo Enrique Garcia Bautista",
     "cc_evaluador": "80065681",
     "rol": "Jefe",
     "aspectos": "Buena disposición en la mayoría de las tareas asignadas, buena aceptación a los cambios. cumplido en los horarios y colaborador al momento de requerir tiempo extra de parte de la organización. compañerista. apoya las tareas de las otras líneas. dispuesto a aprender.",
     "recomendaciones": "mejor enfoque, concentrase en una tarea a la vez, realizar los procesos de acuerdo a los procedimientos, en el orden que se deben desarrollar, aprender a definir prioridades. aprovechar mejor el tiempo. diligenciar a tiempo las planillas a su cargo y enviar los correos solicitados al área de mercadeo. ser autónomo en la toma de sus decisiones y no dejarse mal influenciar por otros miembros del equipo. revisar dos veces los despachos a realizar.",
     "fecha": "2026-09-10",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1001091118",
   "NOMBRE": "Mariaelena Bustos Trujillo",
   "CARGO": "ANALISTA DE CALIDAD Y TECNOVIGILANCIA",
   "AREA": "Administrativo",
   "JEFE": "Yenny Faneth Sanchez Charry",
   "COMP_AUTO": 3.56,
   "COMP_JEFE": 3.22,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 3.36,
   "PUNTAJE_POTENCIAL": 55.9,
   "PUNTAJE_DESEMPENO": 64.4,
   "INDICADORES": [
    {
     "grupo": "ANALISTA DE CALIDAD",
     "objetivo": "Acompañar la implementación, mantenimiento y mejora continua del SIG, promoviendo el cumplimiento de los procesos y la satisfacción de las partes interesadas.",
     "peso": 33.0,
     "calificacion": 80.0,
     "pct": 80.0
    },
    {
     "grupo": "ANALISTA DE CALIDAD",
     "objetivo": "Controlar no conformidades y riesgos asociados a  CCAA y tecnovigilancia",
     "peso": 33.0,
     "calificacion": 100.0,
     "pct": 100.0
    },
    {
     "grupo": "ANALISTA DE CALIDAD",
     "objetivo": "Garantizar el consolidado y registro de las tarjetas implantables para los dispositivos médicos implantables",
     "peso": 34.0,
     "calificacion": 27.0,
     "pct": 27.0
    },
    {
     "grupo": "ANALISTA DE CALIDAD Y TECNOVIGILANCIA",
     "objetivo": "Garantizar el cierre de los RISARH dentro de los tiempos definidos",
     "peso": 30.0,
     "calificacion": 96.0,
     "pct": 96.0
    },
    {
     "grupo": "ANALISTA DE CALIDAD Y TECNOVIGILANCIA",
     "objetivo": "Garantizar la consolidación de la trazabilidad de los dispositivos medicos",
     "peso": 20.0,
     "calificacion": 81.0,
     "pct": 81.0
    },
    {
     "grupo": "ANALISTA DE CALIDAD Y TECNOVIGILANCIA",
     "objetivo": "Garantizar la consolidación de las tarjetas implantables comercializadas mes a mes",
     "peso": 20.0,
     "calificacion": 27.0,
     "pct": 27.0
    },
    {
     "grupo": "ANALISTA DE CALIDAD Y TECNOVIGILANCIA",
     "objetivo": "Garantizar la gestión oportuna de las PQRs",
     "peso": 30.0,
     "calificacion": 33.0,
     "pct": 33.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 3.5
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.4
    },
    {
     "nombre": "ORIENTACION A LA CALIDAD Y PRECISION",
     "puntaje": 3.33
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 58.5,
   "COMPLETO": true,
   "REPORTA_A": "Yenny Faneth Sanchez Charry",
   "FEEDBACK": [
    {
     "evaluador": "Yenny Faneth Sanchez Charry",
     "cc_evaluador": "1016076311",
     "rol": "Jefe",
     "aspectos": "ES UNA PROFESIONAL DISPUESTA A LA EJECUCIÓN DE LA META, DILIGENCIA EN LA EJECUCIÓN, ACTITUD PROACTIVA.",
     "recomendaciones": "SE SOLICITA MEJORAR LA FORMA DE ORGANIZARSE EN LA EJECUCIÓN DE SUS ACTIVIDADES, PRIORIZAR; SI ES POSIBLE REVISAR CURSOS DE MANEJO DE TIEMPO Y ORGANIZACIÓN. SE SOLICITO TAMBIEN REVISAR EL DETALLE DE LAS ACTIVIDADES QUE EJECUTAN ANTES DE ENVIO PARA MINIMIZAR ERRORES. REPORTE DE LOS INFORMES, INDICADORES Y ACTIVIDADES DENTRO DE LOS TIEMPOS ESTABLECIDOS.",
     "fecha": "2026-09-30",
     "acciones": [
      {
       "competencia": "ORIENTACION A LA CALIDAD Y PRECISION",
       "objetivo": "Manejo del tiempo y priorizacion de actividades",
       "accion": "Estrategia de Tiempos y priorización de actividades",
       "fecha": "2026-10-30"
      },
      {
       "competencia": "INNOVACION Y MEJORA CONTINUA",
       "objetivo": "Comunicación asertiva",
       "accion": "Estrategia de comunicación asertiva con los demas",
       "fecha": "2026-10-30"
      }
     ]
    }
   ]
  },
  {
   "CC": "1001094378",
   "NOMBRE": "Maria Fernanda Diaz Montiel",
   "CARGO": "PROFESIONAL DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Camila Andrea Vargas Pulido",
   "COMP_AUTO": 5.67,
   "COMP_JEFE": 5.08,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 5.32,
   "PUNTAJE_POTENCIAL": 88.6,
   "PUNTAJE_DESEMPENO": 98.0,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Brindar atención técnica y posventa de alto nivel, generando confianza, fidelización y satisfacción en los clientes atendidos, fortaleciendo la imagen de KAIKA como aliado técnico confiable.",
     "peso": 30.0,
     "calificacion": 100.0,
     "pct": 100.0
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar el correcto diligenciamiento, archivo y control de los reportes técnicos, formatos de servicio, registros en sistemas internos y documentación asociada a repuestos, garantías y certificaciones.",
     "peso": 30.0,
     "calificacion": 100.0,
     "pct": 100.0
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar que las actividades de instalación, mantenimiento, diagnóstico y reparación de equipos se ejecuten bajo los más altos estándares técnicos, de calidad y seguridad, cumpliendo con los tiempos, normativas y procedimientos establecidos por KAIKA y los fabricantes.",
     "peso": 40.0,
     "calificacion": 95.0,
     "pct": 95.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 6.0
    },
    {
     "nombre": "ADAPTABILIDAD",
     "puntaje": 5.4
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 5.07
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.8
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 91.4,
   "COMPLETO": true,
   "REPORTA_A": "Camila Andrea Vargas Pulido",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Camila Andrea Vargas Pulido",
     "cc_evaluador": "1075684206",
     "rol": "Jefe",
     "aspectos": "María Fernanda se destaca por ser una persona comprometida, proactiva y abierta al cambio. Se caracteriza por su iniciativa para impulsar mejoras, optimizar procesos y generar un impacto positivo en el equipo y en la organización. Es una persona inteligente y estratégica, con capacidad para identificar oportunidades, proponer soluciones y aportar ideas que contribuyen al crecimiento y al fortalecimiento de los procesos. Su disposición para asumir nuevos retos y liderar cambios demuestra su compromiso con la mejora continua y el logro de los objetivos.",
     "recomendaciones": "Se recomienda fortalecer la confianza en el equipo y aprender a delegar con mayor tranquilidad, entendiendo que no todas las situaciones requieren el mismo nivel de control o supervisión. Su interés por garantizar que las cosas se hagan de la mejor manera es una fortaleza; sin embargo, es importante encontrar un equilibrio entre la excelencia y la flexibilidad, permitiendo que otros aporten, aprendan y desarrollen sus propias habilidades. Esto le permitirá optimizar su tiempo, fortalecer el trabajo en equipo y enfocarse en las prioridades estratégicas sin perder de vista la calidad de los resultados.",
     "fecha": "2026-10-22",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1001294811",
   "NOMBRE": "Marisela Carrillo Cely",
   "CARGO": "COTACT CENTER",
   "AREA": "Comercial",
   "JEFE": "Claudia Marcela Osorio Borda",
   "COMP_AUTO": 3.78,
   "COMP_JEFE": 4.44,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.18,
   "PUNTAJE_POTENCIAL": 69.6,
   "PUNTAJE_DESEMPENO": 74.0,
   "INDICADORES": [
    {
     "grupo": "CONTAC CENTER",
     "objetivo": "Asegurar el cumplimiento de las metas de ventas asignada, garantizando la  sostenibilidad del negocio y crecimiento del canal",
     "peso": 40.0,
     "calificacion": 8.0,
     "pct": 80.0
    },
    {
     "grupo": "CONTAC CENTER",
     "objetivo": "Brindar soporte oportuno y preciso para optimizar la efectividad en los procesos licitatorios, elevando el porcentaje de adjudicaciones exitosas y asegurando la rentabilidad mínima esperada en cada proceso.",
     "peso": 30.0,
     "calificacion": 7.0,
     "pct": 70.0
    },
    {
     "grupo": "CONTAC CENTER",
     "objetivo": "Brindar soporte ágil, preciso y empático en la atención a los clientes para fortalecer la presencia y compra de la los productos de la línea.",
     "peso": 30.0,
     "calificacion": 7.0,
     "pct": 70.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.47
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.2
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 3.87
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 70.9,
   "COMPLETO": true,
   "REPORTA_A": "Claudia Marcela Osorio Borda",
   "CIUDAD": "Bogotá",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": []
  },
  {
   "CC": "1001945529",
   "NOMBRE": "Jesus Davi Barraza Guerrero",
   "CARGO": "PROFESIONAL DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Angelly Del Rebolledo Ortega, Miguel Angel Bujato Bernal",
   "COMP_AUTO": null,
   "COMP_JEFE": 4.33,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "jefe": 100.0
   },
   "COMP_ESCALA6": 4.33,
   "PUNTAJE_POTENCIAL": 72.2,
   "PUNTAJE_DESEMPENO": 87.0,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Brindar atención técnica y posventa de alto nivel, generando confianza, fidelización y satisfacción en los clientes atendidos, fortaleciendo la imagen de KAIKA como aliado técnico confiable.",
     "peso": 30.0,
     "calificacion": 90.0,
     "pct": 90.0
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar el correcto diligenciamiento, archivo y control de los reportes técnicos, formatos de servicio, registros en sistemas internos y documentación asociada a repuestos, garantías y certificaciones.",
     "peso": 30.0,
     "calificacion": 80.0,
     "pct": 80.0
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar que las actividades de instalación, mantenimiento, diagnóstico y reparación de equipos se ejecuten bajo los más altos estándares técnicos, de calidad y seguridad, cumpliendo con los tiempos, normativas y procedimientos establecidos por KAIKA y los fabricantes.",
     "peso": 40.0,
     "calificacion": 90.0,
     "pct": 90.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ADAPTABILIDAD",
     "puntaje": 4.67
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.67
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.17
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.83
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 76.7,
   "COMPLETO": true,
   "REPORTA_A": "Angelly Del Rebolledo Ortega, Miguel Angel Bujato Bernal",
   "CIUDAD": "Barranquilla",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Angelly Del Rebolledo Ortega",
     "cc_evaluador": "1143447513",
     "rol": "Jefe",
     "aspectos": "Se destaca por su creatividad y capacidad para plantear soluciones ante las diferentes situaciones técnicas que se presentan en campo, demostrando iniciativa y orientación a la resolución de problemas. Asimismo, muestra una actitud positiva hacia el trabajo en equipo y el compañerismo, manteniendo una buena disposición para apoyar a los compañeros y contribuir al cumplimiento de los objetivos del área. Se resalta también su orientación al cliente, brindando una atención cordial y procurando dar respuesta a sus necesidades de manera oportuna y efectiva.",
     "recomendaciones": "Fortalecer la gestión de tiempos y priorización de actividades relacionadas con la elaboración y entrega de reportes técnicos, buscando mayor oportunidad y cumplimiento en los tiempos establecidos. De igual manera, sería importante promover una mayor participación en actividades y responsabilidades de carácter administrativo, fortaleciendo habilidades asociadas al seguimiento documental, gestión de información y demás procesos que complementan su rol técnico. Esto le permitirá desarrollar una visión más integral del proceso de soporte y ampliar su aporte al equipo.",
     "fecha": "2026-09-09",
     "acciones": [
      {
       "competencia": "INNOVACION Y MEJORA CONTINUA",
       "objetivo": "Fortalecer la gestión y seguimiento de las actividades administrativas asociadas al soporte técnico, especialmente la elaboración y entrega oportuna de reportes, aprovechando su capacidad de análisis y resolución de problemas para aportar mejoras al proceso.",
       "accion": "Implementar una herramienta de seguimiento de reportes y compromisos administrativos, realizando una revisión semanal de pendientes. Alcanzar una mejora progresiva en la oportunidad de entrega de reportes durante el periodo de seguimiento y participar en actividades administrativas del proceso. Presentar, antes del cierre del plan, una propuesta de mejora aplicable al proceso de soporte técnico.",
       "fecha": "2026-12-09"
      }
     ]
    },
    {
     "evaluador": "Miguel Angel Bujato Bernal",
     "cc_evaluador": "1129578858",
     "rol": "Jefe",
     "aspectos": "Resalto el compromiso por realizar los servicios técnicos de la mejor manera, atendiendo recomendaciones dadas por sus superiores para finalizar de la mejor manera",
     "recomendaciones": "Como oportunidad de mejora, enfocarse mas en los servicios de la linea Matachana para generar mejores diagnosticos.",
     "fecha": "2026-09-28",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1005136662",
   "NOMBRE": "Angie Alejandra Camacho Muñoz",
   "CARGO": "ASISTENTE REGIONAL",
   "AREA": "Comercial",
   "JEFE": "Alejandro Donado Rojas",
   "COMP_AUTO": 3.53,
   "COMP_JEFE": 3.73,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 3.65,
   "PUNTAJE_POTENCIAL": 60.9,
   "PUNTAJE_DESEMPENO": 71.5,
   "INDICADORES": [
    {
     "grupo": "ASISTENTE REGIONAL",
     "objetivo": "Asegurar el adecuado manejo de la documentación contable, facturación, caja menor, gastos y soporte financiero regional, talento humano,  garantizando trazabilidad, cumplimiento normativo y eficiencia en el flujo de información hacia la sede principal.",
     "peso": 35.0,
     "calificacion": 90.0,
     "pct": 90.0
    },
    {
     "grupo": "ASISTENTE REGIONAL",
     "objetivo": "Garantizar la adecuada planeación, disponibilidad y control de los recursos logísticos y operativos de la regional, optimizando costos y tiempos en coordinación con las áreas centrales.",
     "peso": 35.0,
     "calificacion": 80.0,
     "pct": 80.0
    },
    {
     "grupo": "ASISTENTE REGIONAL",
     "objetivo": "Respaldar la labor comercial regional mediante la gestión oportuna y organizada de cotizaciones, propuestas y procesos de licitación o subasta, garantizando la trazabilidad, cumplimiento de requisitos y tiempos de respuesta.",
     "peso": 30.0,
     "calificacion": 40.0,
     "pct": 40.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "GESTION ESTRATEGICA DE LA INFORMACION Y TOMA DE DECISIONES",
     "puntaje": 4.0
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.73
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 3.73
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.67
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 3.13
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 64.1,
   "COMPLETO": true,
   "REPORTA_A": "Alejandro Donado Rojas",
   "CIUDAD": "Bucaramanga",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Alejandro Donado Rojas",
     "cc_evaluador": "1032411655",
     "rol": "Jefe",
     "aspectos": "ESTA MUY PENDIENTE DE LAS LABORES ASIGNADAS",
     "recomendaciones": "MAYOR CONFIANZA EN LA TOMA DE DESICIONES Y ENVIO DE INFORMACION, EN OCASIONES DUDA MUCHO DE SUS FORTALEZAS Y ESTO HACE QUE LA REGIONAL BAJE PRODUCTIVIDAD POR REPROCESOS",
     "fecha": "2026-09-29",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1006003861",
   "NOMBRE": "Yeferson Jose Caicedo Mejia",
   "CARGO": "PROFESIONAL DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Diego Fernando Rosas Jara",
   "COMP_AUTO": 4.33,
   "COMP_JEFE": null,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 100.0
   },
   "COMP_ESCALA6": 4.33,
   "PUNTAJE_POTENCIAL": 72.2,
   "PUNTAJE_DESEMPENO": null,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Brindar atención técnica y posventa de alto nivel, generando confianza, fidelización y satisfacción en los clientes atendidos, fortaleciendo la imagen de KAIKA como aliado técnico confiable.",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar el correcto diligenciamiento, archivo y control de los reportes técnicos, formatos de servicio, registros en sistemas internos y documentación asociada a repuestos, garantías y certificaciones.",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar que las actividades de instalación, mantenimiento, diagnóstico y reparación de equipos se ejecuten bajo los más altos estándares técnicos, de calidad y seguridad, cumpliendo con los tiempos, normativas y procedimientos establecidos por KAIKA y los fabricantes.",
     "peso": 40.0,
     "calificacion": null,
     "pct": null
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 5.0
    },
    {
     "nombre": "ADAPTABILIDAD",
     "puntaje": 4.33
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.33
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.67
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": null,
   "COMPLETO": false,
   "REPORTA_A": "Diego Fernando Rosas Jara",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": []
  },
  {
   "CC": "1006086446",
   "NOMBRE": "Jeraldyne Ximena Devia Leon",
   "CARGO": "PROFESIONAL DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Julian Nicolas Bernal Hernandez",
   "COMP_AUTO": 4.5,
   "COMP_JEFE": 3.58,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 3.95,
   "PUNTAJE_POTENCIAL": 65.8,
   "PUNTAJE_DESEMPENO": null,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Brindar atención técnica y posventa de alto nivel, generando confianza, fidelización y satisfacción en los clientes atendidos, fortaleciendo la imagen de KAIKA como aliado técnico confiable.",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar el correcto diligenciamiento, archivo y control de los reportes técnicos, formatos de servicio, registros en sistemas internos y documentación asociada a repuestos, garantías y certificaciones.",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar que las actividades de instalación, mantenimiento, diagnóstico y reparación de equipos se ejecuten bajo los más altos estándares técnicos, de calidad y seguridad, cumpliendo con los tiempos, normativas y procedimientos establecidos por KAIKA y los fabricantes.",
     "peso": 40.0,
     "calificacion": null,
     "pct": null
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.2
    },
    {
     "nombre": "ADAPTABILIDAD",
     "puntaje": 4.07
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.93
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.6
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": null,
   "COMPLETO": false,
   "REPORTA_A": "Julian Nicolas Bernal Hernandez",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": []
  },
  {
   "CC": "1006535057",
   "NOMBRE": "Angie Mabel Zubieta Martinez",
   "CARGO": "ANALISTA DE COMPRAS Y MARKETING",
   "AREA": "Comercial",
   "JEFE": "Sandra Patricia Rodriguez Cortes",
   "COMP_AUTO": 4.11,
   "COMP_JEFE": 3.56,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 3.78,
   "PUNTAJE_POTENCIAL": 63.0,
   "PUNTAJE_DESEMPENO": 80.5,
   "INDICADORES": [
    {
     "grupo": "ANALISTA DE COMPRAS",
     "objetivo": "Contribuir al seguimiento, control y registro correcto de los costos asociados a compras asegurando la correcta imputación presupuestal y la generación de ahorros operativos.",
     "peso": 40.0,
     "calificacion": 60.0,
     "pct": 60.0
    },
    {
     "grupo": "ANALISTA DE COMPRAS",
     "objetivo": "Contribuir con el proceso de registro, evaluación y seguimiento de proveedores, contribuyendo al aseguramiento de relaciones comerciales confiables, éticas y eficientes.",
     "peso": 25.0,
     "calificacion": 100.0,
     "pct": 100.0
    },
    {
     "grupo": "ANALISTA DE COMPRAS",
     "objetivo": "Ejecutar de forma eficiente y oportuna el proceso de compras, asegurando la entrega puntual de bienes y servicios requeridos por las áreas solicitantes.",
     "peso": 35.0,
     "calificacion": 90.0,
     "pct": 90.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.13
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.73
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 3.47
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 68.2,
   "COMPLETO": true,
   "REPORTA_A": "Sandra Patricia Rodriguez Cortes",
   "CIUDAD": "Bogotá",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Sandra Patricia Rodriguez Cortes",
     "cc_evaluador": "52249658",
     "rol": "Jefe",
     "aspectos": "Ha hecho aportes importantes al proceso de compras, organizando el formato, la información del periodo que ella no lo manejó y uniéndola con la que si, lo que facilita la comparación y evaluación del servicio al cliente interno en tiempos de respuesta, mostrando una mejora. Hizo un dash board que facilita la visualización de la información, hizo un análisis que permite ver la generalidad de los movimientos de compras del año hasta agosto y esto es algo que antes no se hacía y no existía por parte del responsable, lo que demuestra un aporte muy importante al área.",
     "recomendaciones": "Hay una oportunidad de mejora en mostrar los avances del trabajo sin que le sea solicitado.  Debe enfocar su esfuerzo en evidenciar con sus KPI las mejoras del proceso y sugerir de forma constante mejoras, eficiencias, disminución de gastos, comparación con proveedores.  hay una oportunidad de mejora en los KPI de compras por categoria, usuario que lo solicita, si la compra se facturó y en que tiempo.  A futuro, presupuesto de compras frecuentes como las administrativas. Hay un a oportunidad de mejora en el proceso, no en el responsable frente al presupuesto, poque no se le ha asignado.",
     "fecha": "2026-09-18",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1007401141",
   "NOMBRE": "Leidy Paola Rueda Zambrano",
   "CARGO": "ASISTENTE DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Adalberto Fabre Parada",
   "COMP_AUTO": null,
   "COMP_JEFE": 2.93,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "jefe": 100.0
   },
   "COMP_ESCALA6": 2.93,
   "PUNTAJE_POTENCIAL": 48.9,
   "PUNTAJE_DESEMPENO": 80.0,
   "INDICADORES": [
    {
     "grupo": "ASISTENTE DE SOPORTE TÉCNICO",
     "objetivo": "Asegurar que contratos adjudicados sean formalizados en los tiempos establecidos y cumplan con todos los requisitos en todo momento.",
     "peso": 30.0,
     "calificacion": 80.0,
     "pct": 80.0
    },
    {
     "grupo": "ASISTENTE DE SOPORTE TÉCNICO",
     "objetivo": "Asegurar que las cotizaciones, licitaciones y propuestas comerciales, relacionadas con los servicios técnicos, sean elaboradas con precisión, completitud y dentro de los plazos establecidos, fortaleciendo la capacidad de respuesta y la competitividad comercial de KAIKA.",
     "peso": 30.0,
     "calificacion": 80.0,
     "pct": 80.0
    },
    {
     "grupo": "ASISTENTE DE SOPORTE TÉCNICO",
     "objetivo": "Respaldar la labor comercial de la Gerencia de Soporte Técnico mediante la gestión oportuna y organizada de cotizaciones unificadas y procesos de licitación o subasta, garantizando la trazabilidad, cumplimiento de requisitos y tiempos de respuesta.",
     "peso": 40.0,
     "calificacion": 80.0,
     "pct": 80.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "GESTION DE RELACIONES Y EXPERIENCIA ORGANIZACIONAL",
     "puntaje": 3.33
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.0
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 3.0
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 2.67
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 2.67
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 58.2,
   "COMPLETO": true,
   "REPORTA_A": "Adalberto Fabre Parada",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Adalberto Fabre Parada",
     "cc_evaluador": "91283555",
     "rol": "Jefe",
     "aspectos": "Compromiso con la compañia, adaptacion al cambio y nuevas responsabilidades, orden, responsable con la gestion de actividades, puntualidad.",
     "recomendaciones": "Fortalecer: comunicacion oportuna sobre actividades adicionales asegurando la priorizacion de tareas, proposicon de actividades que permitan optimizar los tiempos de ejecucion de actividades.",
     "fecha": "2026-10-22",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1007695225",
   "NOMBRE": "Jeisson Daniel Bernal Fuentes",
   "CARGO": "PROFESIONAL DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Libardo Barreto Valencia",
   "COMP_AUTO": 4.0,
   "COMP_JEFE": 4.25,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.15,
   "PUNTAJE_POTENCIAL": 69.2,
   "PUNTAJE_DESEMPENO": 100.0,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Brindar atención técnica y posventa de alto nivel, generando confianza, fidelización y satisfacción en los clientes atendidos, fortaleciendo la imagen de KAIKA como aliado técnico confiable.",
     "peso": 30.0,
     "calificacion": 100.0,
     "pct": 100.0
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar el correcto diligenciamiento, archivo y control de los reportes técnicos, formatos de servicio, registros en sistemas internos y documentación asociada a repuestos, garantías y certificaciones.",
     "peso": 30.0,
     "calificacion": 100.0,
     "pct": 100.0
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar que las actividades de instalación, mantenimiento, diagnóstico y reparación de equipos se ejecuten bajo los más altos estándares técnicos, de calidad y seguridad, cumpliendo con los tiempos, normativas y procedimientos establecidos por KAIKA y los fabricantes.",
     "peso": 40.0,
     "calificacion": 100.0,
     "pct": 100.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ADAPTABILIDAD",
     "puntaje": 4.2
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.2
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.2
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.0
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 78.4,
   "COMPLETO": true,
   "REPORTA_A": "Libardo Barreto Valencia",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": []
  },
  {
   "CC": "1012324482",
   "NOMBRE": "Diana Marcela Camargo Jaramillo",
   "CARGO": "LIDER DE CARTERA",
   "AREA": "Contabilidad",
   "JEFE": "Alexandra Bogoya Puentes",
   "COMP_AUTO": 3.73,
   "COMP_JEFE": 3.8,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 3.77,
   "PUNTAJE_POTENCIAL": 62.9,
   "PUNTAJE_DESEMPENO": 48.7,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL DE CARTERA",
     "objetivo": "Evaluar de forma técnica y oportuna la capacidad de pago de los clientes, estableciendo límites de crédito seguros y acordes al perfil financiero de cada uno.",
     "peso": 30.0,
     "calificacion": 3.0,
     "pct": 30.0
    },
    {
     "grupo": "PROFESIONAL DE CARTERA",
     "objetivo": "Garantizar la gestión eficiente del cobro de las cuentas por cobrar, reduciendo los índices de morosidad para mantener un flujo de caja saludable.",
     "peso": 45.0,
     "calificacion": 36.0,
     "pct": 36.0
    },
    {
     "grupo": "PROFESIONAL DE CARTERA",
     "objetivo": "Optimizar el flujo de caja mediante una gestión eficiente del recaudo, asegurando la disponibilidad de recursos para la operación y las inversiones de KAIKA.",
     "peso": 25.0,
     "calificacion": 94.0,
     "pct": 94.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.07
    },
    {
     "nombre": "GESTION ESTRATEGICA DE LA INFORMACION Y TOMA DE DECISIONES",
     "puntaje": 4.0
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.0
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.6
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.2
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 58.6,
   "COMPLETO": true,
   "REPORTA_A": "Alexandra Bogoya Puentes",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Alexandra Bogoya Puentes",
     "cc_evaluador": "52552836",
     "rol": "Jefe",
     "aspectos": "se caracteriza por cumplir con sus responsabilidades y funciones asignadas, demostrando compromiso con las tareas de su cargo y manteniendo un desempeño estable en la ejecución de sus actividades, responde a los requerimientos establecidos y procura dar cumplimiento a los objetivos definidos,  se destaca su capacidad para seguir los procesos y lineamientos establecidos, así como su disposición para atender las responsabilidades propias de su rol.",
     "recomendaciones": "Se recomienda fortalecer su iniciativa y proactividad frente a los procesos que tiene a su cargo. Si bien cumple con las responsabilidades asignadas, sería importante que avance hacia una participación más activa en la identificación de oportunidades de mejora, proponiendo alternativas que permitan optimizar tiempos, recursos y formas de trabajo. Se espera que pueda asumir un rol más participativo, no solo ejecutando las actividades establecidas, sino también cuestionando constructivamente los procesos, identificando posibles oportunidades de mejora y planteando propuestas que generen valor para el equipo y la organización.",
     "fecha": "2026-10-07",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1012462497",
   "NOMBRE": "Nicol Tatiana Arias Nino",
   "CARGO": "ASISTENTE ADMINISTRATIVO",
   "AREA": "Comercial",
   "JEFE": "Diego Harley Gutierrez Laverde, Sandra Patricia Rodriguez Cortes",
   "COMP_AUTO": 4.33,
   "COMP_JEFE": 3.93,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.09,
   "PUNTAJE_POTENCIAL": 68.2,
   "PUNTAJE_DESEMPENO": 72.2,
   "INDICADORES": [
    {
     "grupo": "ASISTENTE ADMINISTRATIVO",
     "objetivo": "Asegurar que las oficinas y puntos operativos cuenten con las condiciones adecuadas de funcionamiento, infraestructura, aseo, seguridad y suministros básicos, sin interrupciones que afecten la operación.",
     "peso": 35.0,
     "calificacion": 0.0,
     "pct": 45.0
    },
    {
     "grupo": "ASISTENTE ADMINISTRATIVO",
     "objetivo": "Brindar soporte administrativo oportuno y eficiente a las áreas de la empresa, fortaleciendo la gestión interna y la satisfacción del cliente interno.",
     "peso": 30.0,
     "calificacion": 10.0,
     "pct": 95.0
    },
    {
     "grupo": "ASISTENTE ADMINISTRATIVO",
     "objetivo": "Contribuir a la gestión de cumplimiento de requisitos de Sagrilaft por parte de los proveedores para prevenir riesgos legales y reputacionales",
     "peso": 35.0,
     "calificacion": 7.0,
     "pct": 80.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.17
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.13
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.1
    },
    {
     "nombre": "GESTION DE RELACIONES Y EXPERIENCIA ORGANIZACIONAL",
     "puntaje": 4.03
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.03
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 69.4,
   "COMPLETO": true,
   "REPORTA_A": "Diego Harley Gutierrez Laverde, Sandra Patricia Rodriguez Cortes",
   "CIUDAD": "Bogotá",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Sandra Patricia Rodriguez Cortes",
     "cc_evaluador": "52249658",
     "rol": "Jefe",
     "aspectos": "Se esfuerza por aportar lo que sabe, se preocupa por hacer llegar sus inquietudes y sugerencias para el mejoramiento de los procesos a su cargo.  Ha avanzado en la base de datos de sagrilaft, pero esta muy atrasado aun.  Sin embargo, organiza y comprende la importancia de la actualización de la información.",
     "recomendaciones": "Hay un oportunidad de mejora en el seguimiento y en la comunicación con las otras áreas. si encuentra una actitud de desinterés en un compañero, alguien no responde o atiende su solicitud, puede dirigirse personalmente y hablarlo o hablar con su jefe directo para que de solución al tema tratado, no quedarse allí, porque entonces, no hay avance. Es importante que mejore la comunicación conmigo cuando le hagan solicitudes que afecten su trabajo.  siempre debe comunicarlo, para que estemos de acuerdo y de esa forma, que no se afecte su trabajo, pero que yo esté enterada de lo que estamos haciendo en aras de apoyar otras áreas o de solicitar apoyo para la suya y que los procesos fluyan.",
     "fecha": "2026-09-09",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1013599658",
   "NOMBRE": "Javier Vanegas Mora",
   "CARGO": "PROFESIONAL CONTABLE",
   "AREA": "Contabilidad",
   "JEFE": "Alexandra Bogoya Puentes",
   "COMP_AUTO": 4.13,
   "COMP_JEFE": 4.44,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.32,
   "PUNTAJE_POTENCIAL": 71.9,
   "PUNTAJE_DESEMPENO": 95.0,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL CONTABLE",
     "objetivo": "Asegurar que todas las operaciones económicas y financieras se registren de forma correcta, completa y dentro de los plazos establecidos, cumpliendo las normas contables y políticas internas de KAIKA.",
     "peso": 40.0,
     "calificacion": 100.0,
     "pct": 100.0
    },
    {
     "grupo": "PROFESIONAL CONTABLE",
     "objetivo": "Elaborar y presentar estados financieros claros, precisos y auditables, que reflejen la situación real de la empresa y faciliten la toma de decisiones gerenciales.",
     "peso": 35.0,
     "calificacion": 100.0,
     "pct": 100.0
    },
    {
     "grupo": "PROFESIONAL CONTABLE",
     "objetivo": "Mejorar la eficiencia y trazabilidad de los procesos contables mediante la automatización, estandarización y control de actividades clave.",
     "peso": 25.0,
     "calificacion": 80.0,
     "pct": 80.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 5.0
    },
    {
     "nombre": "ORIENTACION A LA CALIDAD Y PRECISION",
     "puntaje": 4.73
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.2
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.0
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.9
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 78.9,
   "COMPLETO": true,
   "REPORTA_A": "Alexandra Bogoya Puentes",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Alexandra Bogoya Puentes",
     "cc_evaluador": "52552836",
     "rol": "Jefe",
     "aspectos": "Se caracteriza por ser un colaborador responsable y comprometido con sus funciones, cumpliendo de manera oportuna con las tareas y responsabilidades asignadas, demuestra interés por alcanzar los resultados esperados y mantiene una actitud constante frente a los retos y responsabilidades que se presentan, es un colaborador en quien se puede confiar para asumir responsabilidades y dar seguimiento a los compromisos adquiridos.",
     "recomendaciones": "Desarrollar una mirada más integral de los procesos, buscando comprender cómo sus actividades y propuestas impactan los objetivos generales del equipo y de la organización, optimizar la planificación de sus actividades para mantener un adecuado equilibrio entre las tareas operativas, los nuevos requerimientos y las iniciativas de mejora, fortalecer el aporte de  iniciativas y propuestas, procurando llevarlas hasta su implementación y medición de resultados.",
     "fecha": "2026-10-06",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1013643822",
   "NOMBRE": "Kelly Geraldin Guzman Carvajal",
   "CARGO": "ASISTENTE REGIONAL",
   "AREA": "Comercial",
   "JEFE": "Maria Del Pilar Restrepo Botero",
   "COMP_AUTO": 5.2,
   "COMP_JEFE": 5.47,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 5.36,
   "PUNTAJE_POTENCIAL": 89.3,
   "PUNTAJE_DESEMPENO": 43.0,
   "INDICADORES": [
    {
     "grupo": "ASISTENTE REGIONAL",
     "objetivo": "Asegurar el adecuado manejo de la documentación contable, facturación, caja menor, gastos y soporte financiero regional, talento humano,  garantizando trazabilidad, cumplimiento normativo y eficiencia en el flujo de información hacia la sede principal.",
     "peso": 35.0,
     "calificacion": 4.0,
     "pct": 40.0
    },
    {
     "grupo": "ASISTENTE REGIONAL",
     "objetivo": "Garantizar la adecuada planeación, disponibilidad y control de los recursos logísticos y operativos de la regional, optimizando costos y tiempos en coordinación con las áreas centrales.",
     "peso": 35.0,
     "calificacion": 4.0,
     "pct": 40.0
    },
    {
     "grupo": "ASISTENTE REGIONAL",
     "objetivo": "Respaldar la labor comercial regional mediante la gestión oportuna y organizada de cotizaciones, propuestas y procesos de licitación o subasta, garantizando la trazabilidad, cumplimiento de requisitos y tiempos de respuesta.",
     "peso": 30.0,
     "calificacion": 5.0,
     "pct": 50.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "GESTION ESTRATEGICA DE LA INFORMACION Y TOMA DE DECISIONES",
     "puntaje": 5.53
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 5.53
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 5.4
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 5.4
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.93
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 75.4,
   "COMPLETO": true,
   "REPORTA_A": "Maria Del Pilar Restrepo Botero",
   "CIUDAD": "Manizales",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Maria Del Pilar Restrepo Botero",
     "cc_evaluador": "42147274",
     "rol": "Jefe",
     "aspectos": "Se destaca por su compromiso, responsabilidad, trabajo en equipo, orientación a resultados, organización y eficiencia. Mantiene una actitud positiva y colaborativa, brindando una excelente atención al cliente y favoreciendo un adecuado relacionamiento con sus compañeros.",
     "recomendaciones": "Presenta un desempeño satisfactorio, destacándose por su compromiso, eficiencia, organización, trabajo en equipo y excelente atención al cliente.",
     "fecha": "2026-09-15",
     "acciones": [
      {
       "competencia": "GESTION ESTRATEGICA DE LA INFORMACION Y TOMA DE DECISIONES",
       "objetivo": "Establecer y estructurar un sistema de planificación semanal de actividades mediante la centralización y priorización de la información operativa, para optimizar los tiempos de entrega y garantizar la trazabilidad de los compromisos del área.",
       "accion": "1. Diseñar y mantener un cronograma semanal consolidado (en calendario digital o herramienta de gestión) que organice las tareas prioritarias, rutinarias y contingentes.\n\n2. Clasificar y priorizar la información de los requerimientos entrantes al inicio de cada semana para asignar tiempos realistas de ejecución.\n\n3. Revisar y actualizar diariamente el avance de la programación semanal para reajustar prioridades ante eventualidades e imprevistos.",
       "fecha": "2026-11-30"
      },
      {
       "competencia": "APRENDIZAJE CONTINUO",
       "objetivo": "Fortalecer la actualización y consulta permanente de información en SECOP, Bionexo y páginas institucionales relacionadas con las funciones del cargo",
       "accion": "Realizar consultas periódicas en estas plataformas, identificar información relevante para la gestión, mantenerse actualizado sobre procesos, oportunidades y cambios institucionales, y aplicar los conocimientos adquiridos para mejorar la eficiencia y oportunidad en el desarrollo de las actividades. SECOP y Bionexo facilita la gestión de compras y abastecimiento en instituciones de salud.",
       "fecha": "2026-11-30"
      },
      {
       "competencia": "INNOVACION Y MEJORA CONTINUA",
       "objetivo": "Fortalecer la actitud colaborativa y la iniciativa, procurando participar y apoyar de manera más activa las diferentes actividades de la regional, sin limitarse exclusivamente a las responsabilidades administrativas asignadas al cargo, contribuyendo al logro de los objetivos comunes.",
       "accion": "Participar activamente en las actividades de la regional, apoyar a los compañeros en tareas y requerimientos que contribuyan al cumplimiento de los objetivos, compartir información y oportunidades comerciales, mantener una comunicación efectiva y mostrar mayor iniciativa y disposición para colaborar en las diferentes actividades del equipo.",
       "fecha": "2026-11-30"
      }
     ]
    }
   ]
  },
  {
   "CC": "1013670278",
   "NOMBRE": "Paula Camila Quintero Silva",
   "CARGO": "PROFESIONAL DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Julian Nicolas Bernal Hernandez",
   "COMP_AUTO": null,
   "COMP_JEFE": 3.5,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "jefe": 100.0
   },
   "COMP_ESCALA6": 3.5,
   "PUNTAJE_POTENCIAL": 58.3,
   "PUNTAJE_DESEMPENO": null,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Brindar atención técnica y posventa de alto nivel, generando confianza, fidelización y satisfacción en los clientes atendidos, fortaleciendo la imagen de KAIKA como aliado técnico confiable.",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar el correcto diligenciamiento, archivo y control de los reportes técnicos, formatos de servicio, registros en sistemas internos y documentación asociada a repuestos, garantías y certificaciones.",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar que las actividades de instalación, mantenimiento, diagnóstico y reparación de equipos se ejecuten bajo los más altos estándares técnicos, de calidad y seguridad, cumpliendo con los tiempos, normativas y procedimientos establecidos por KAIKA y los fabricantes.",
     "peso": 40.0,
     "calificacion": null,
     "pct": null
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ADAPTABILIDAD",
     "puntaje": 3.67
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.67
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.33
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 3.33
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": null,
   "COMPLETO": false,
   "REPORTA_A": "Julian Nicolas Bernal Hernandez",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": []
  },
  {
   "CC": "1013676073",
   "NOMBRE": "Leydy Rocio Bolivar Paez",
   "CARGO": "ASISTENTE TALENTO HUMANO",
   "AREA": "Talento Humano",
   "JEFE": "Deisy Julieth Montanez Zuniga",
   "COMP_AUTO": 4.0,
   "COMP_JEFE": 4.16,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.09,
   "PUNTAJE_POTENCIAL": 68.2,
   "PUNTAJE_DESEMPENO": 44.0,
   "INDICADORES": [
    {
     "grupo": "ASISTENTE DE TALENTO HUMANO",
     "objetivo": "Apoyar la ejecución eficiente y oportuna de los procesos de selección, contratación e inducción del personal, cumpliendo con los plazos, la documentación y los estándares definidos por la empresa.",
     "peso": 50.0,
     "calificacion": 4.0,
     "pct": 40.0
    },
    {
     "grupo": "ASISTENTE DE TALENTO HUMANO",
     "objetivo": "Fortalecer la comunicación interna y el acompañamiento al colaborador, brindando atención oportuna, clara y empática ante solicitudes, requerimientos o trámites internos.",
     "peso": 10.0,
     "calificacion": 4.0,
     "pct": 40.0
    },
    {
     "grupo": "ASISTENTE DE TALENTO HUMANO",
     "objetivo": "Presentar información confiable para el seguimiento de indicadores de gestión de talento humano, contribuyendo a la toma de decisiones y mejora continua.",
     "peso": 40.0,
     "calificacion": 5.0,
     "pct": 50.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.4
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.2
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.0
    },
    {
     "nombre": "GESTION ESTRATEGICA DE LA INFORMACION Y TOMA DE DECISIONES",
     "puntaje": 4.0
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.0
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 61.0,
   "COMPLETO": true,
   "REPORTA_A": "Deisy Julieth Montanez Zuniga",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Deisy Julieth Montanez Zuniga",
     "cc_evaluador": "1024483719",
     "rol": "Jefe",
     "aspectos": "Atención al cliente interno, -Propone alternativas constante para la mejora de los procesos internos del área, -Trabajo en equipo, Va mas allá de su rol como Asistente.",
     "recomendaciones": "Fortalecer el proceso de selección de los candidatos, evaluar mas al detalle y e identificar pros y contras de cada uno.  - Identificar la urgencia a lo importante - Aprender a decir no.",
     "fecha": "2026-09-16",
     "acciones": [
      {
       "competencia": "INNOVACION Y MEJORA CONTINUA",
       "objetivo": "Fortalecer los procesos de selección",
       "accion": "1. Entrevistas por competencias, identificar en que momento se debe evaluar mas al detalle al colaborador, analizar las pruebas psicotécnicas versus la información recolectada durante el proceso de selección, participar en los assesment para aprender el conocimiento técnico de las diferentes áreas y competencias que se requieren por rol, con el objetivo de tener herramientas para evaluar y toma de decisiones mas asertivas de los candidatos.\nAntes de dar inicio a la búsqueda de candidatos indagar con jefe inmediato necesidades y objetivos de la persona solicitada.",
       "fecha": "2026-12-31"
      },
      {
       "competencia": "APRENDIZAJE CONTINUO",
       "objetivo": "Aprender a decir no",
       "accion": "Identificar lo que es urgente a lo que es importante, teniendo en cuenta que hay funciones que no están dentro su proceso y funciones del día a día, con el objetivo de lograr disminuir la carga laboral y mejorar la orientación de su rol como Talento Humano.",
       "fecha": "2026-12-31"
      }
     ]
    }
   ]
  },
  {
   "CC": "1014222723",
   "NOMBRE": "Leidy Viviana Ramirez Suarez",
   "CARGO": "COORDINADOR (A) DE SOPORTE TÉCNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Adalberto Fabre Parada",
   "COMP_AUTO": 3.81,
   "COMP_JEFE": 2.86,
   "COMP_COLAB": null,
   "N_COLAB": 1,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 3.24,
   "PUNTAJE_POTENCIAL": 54.0,
   "PUNTAJE_DESEMPENO": 80.0,
   "INDICADORES": [
    {
     "grupo": "COORDINADOR DE SOPORTE TECNICO",
     "objetivo": "Asegurar la correcta ejecución de los servicios técnicos (instalaciones, mantenimientos,  reparaciones y garantías), cumpliendo con los estándares técnicos y de calidad definidos por KAIKA y las marcas representadas.",
     "peso": 50.0,
     "calificacion": 80.0,
     "pct": 80.0
    },
    {
     "grupo": "COORDINADOR DE SOPORTE TECNICO",
     "objetivo": "Fortalecer las capacidades técnicas del equipo asignado mediante la transferencia de conocimiento, acompañamiento y seguimiento a capacitaciones impartidas por fábrica o KAIKA a nivel nacional.",
     "peso": 25.0,
     "calificacion": 80.0,
     "pct": 80.0
    },
    {
     "grupo": "COORDINADOR DE SOPORTE TECNICO",
     "objetivo": "Garantizar la correcta gestión y ejecución de garantías técnicas, asegurando una atención oportuna, rentable y conforme a los estándares del fabricante.",
     "peso": 25.0,
     "calificacion": 80.0,
     "pct": 80.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 4.0
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 3.8
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 3.67
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.2
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 3.2
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.0
    },
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 2.8
    },
    {
     "nombre": "VISION ESTRATEGICA Y PENSAMIENTO ORGANIZACIONAL",
     "puntaje": 2.53
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 61.8,
   "COMPLETO": true,
   "REPORTA_A": "Adalberto Fabre Parada",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Táctico",
   "FEEDBACK": []
  },
  {
   "CC": "1014288827",
   "NOMBRE": "Maria Paula Velandia Diaz",
   "CARGO": "PROFESIONAL DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Julian Nicolas Bernal Hernandez",
   "COMP_AUTO": 4.5,
   "COMP_JEFE": 3.83,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.1,
   "PUNTAJE_POTENCIAL": 68.3,
   "PUNTAJE_DESEMPENO": null,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Brindar atención técnica y posventa de alto nivel, generando confianza, fidelización y satisfacción en los clientes atendidos, fortaleciendo la imagen de KAIKA como aliado técnico confiable.",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar el correcto diligenciamiento, archivo y control de los reportes técnicos, formatos de servicio, registros en sistemas internos y documentación asociada a repuestos, garantías y certificaciones.",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar que las actividades de instalación, mantenimiento, diagnóstico y reparación de equipos se ejecuten bajo los más altos estándares técnicos, de calidad y seguridad, cumpliendo con los tiempos, normativas y procedimientos establecidos por KAIKA y los fabricantes.",
     "peso": 40.0,
     "calificacion": null,
     "pct": null
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.27
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.13
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.07
    },
    {
     "nombre": "ADAPTABILIDAD",
     "puntaje": 3.93
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": null,
   "COMPLETO": false,
   "REPORTA_A": "Julian Nicolas Bernal Hernandez",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": []
  },
  {
   "CC": "1016076311",
   "NOMBRE": "Yenny Faneth Sanchez Charry",
   "CARGO": "COORDINADORA DE CALIDAD Y DIRECTORA TECNICA",
   "AREA": "Administrativo",
   "JEFE": "Sandra Patricia Rodriguez Cortes",
   "COMP_AUTO": 4.25,
   "COMP_JEFE": 4.58,
   "COMP_COLAB": 5.12,
   "N_COLAB": 1,
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA6": 4.68,
   "PUNTAJE_POTENCIAL": 78.0,
   "PUNTAJE_DESEMPENO": 73.0,
   "INDICADORES": [
    {
     "grupo": "COORDINADOR DE SISTEMAS DE GESTION DE CALIDAD",
     "objetivo": "Alinear la gestión del SIG con la estrategia de KAIKA, garantizando que las políticas, metas y planes operativos reflejen las prioridades corporativas.",
     "peso": 33.0,
     "calificacion": 90.0,
     "pct": 90.0
    },
    {
     "grupo": "COORDINADOR DE SISTEMAS DE GESTION DE CALIDAD",
     "objetivo": "Asegurar la implementación, mantenimiento y mejora continua del SIG, promoviendo el cumplimiento de los procesos y la satisfacción de las partes interesadas.",
     "peso": 34.0,
     "calificacion": 40.0,
     "pct": 40.0
    },
    {
     "grupo": "COORDINADOR DE SISTEMAS DE GESTION DE CALIDAD",
     "objetivo": "Fomentar la apropiación del SIG entre los colaboradores, con el fin de incrementar el compromiso organizacional y la adherencia a los procesos.",
     "peso": 33.0,
     "calificacion": 90.0,
     "pct": 90.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.97
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.9
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.83
    },
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 4.73
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.63
    },
    {
     "nombre": "VISION ESTRATEGICA Y PENSAMIENTO ORGANIZACIONAL",
     "puntaje": 4.57
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 4.53
    },
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 4.27
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 76.5,
   "COMPLETO": true,
   "REPORTA_A": "Sandra Patricia Rodriguez Cortes",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Táctico",
   "FEEDBACK": [
    {
     "evaluador": "Sandra Patricia Rodriguez Cortes",
     "cc_evaluador": "52249658",
     "rol": "Jefe",
     "aspectos": "Hace aportes importantes a su proceso, pero al mismo tiempo , por su tipo de rol a todos los procesos de la compañía.  Sugiere cuestiona  y reporta los hallazgos y procedimientos que lleven a un incumplimiento normativo interno, externo o legal, lo que garantiza que la empresa no tenga inconvenientes sancionatorios, legales o normativos frente a las entidades que lo certifican como INVIMA, Bureau veritas o externas como secretaria de salud, DIAN, etc.  Aporta, ideas para el control y seguimiento de KPI garantizando que la información tenga una utilidad para el lider de área y la gerencia para toma de decisiones.",
     "recomendaciones": "PERFIL CALIFICADO CON REVISION PENDIENTE DE KPI-  NO COINCIDEN- En el área de servicio al cliente hay una oportunidad de mejora frente a la asignación de responsabilidades a Calidad y Soporte técnico que eviten que invierta tiempo en esas tareas y pueda dedicarse a sus procesos mas importantes como directora técnica. Hay una oportunidad de mejora en la forma de transmitir la información a la gerencia general.  Puede ser mas concreta, con graficas, cuadros o tendencias visibles y medibles con conclusiones cortas y concretas, puede ser en el informe de KPI, en los comités de gerencia o en reuniones individuales.  Hay oportunidad de mejora en el KPI liberaciones de producto, adicionando el promedio de dias de liberación por mes y posteriormente en los que se pasen del tiempo normal, analizar los motivos e identificar las casusas para solicitar planes de acción a los lideres de cada área.  Además revisar los gastos del área para generar un presupuesto para 2027 para tecnovigilancia y calidad.   OJO  ESTO NO CORRESPONDE AL CARGO: Define metas estratégicas desafiantes y medibles para todas las áreas (Comercial, Financiera, Soporte). Busca el crecimiento sostenible y la maximización del retorno de la inversión mediante una gestión enfocada en resultados de alto impacto. SU ENFOQUE VA A LA RECOPILACION DE LA MEDICION, ANALISIS DE KPI DE LOS DEMAS PROCESOS Y LA VERIFICACION DE SU APORTE A LA GERENCIA.- CUMPPLE PARA NOA FECTAR MEDICION. OJO NO APLICA: Prioriza la validación de datos contables críticos antes de los cierres tributarios. Garantiza que el reporte final sea exacto, verificable y cumpla con la normativa vigente de manera oportuna. NO APLICA: administra el seguimiento a los calendarios de medios magnéticos y otros reportes periódicos. Garantiza la presentación de información exógena sin extemporaneidad ni inconsistencias.",
     "fecha": "2026-09-17",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1019021830",
   "NOMBRE": "Nazzira Villate Pineda",
   "CARGO": "ASESOR COMERCIAL",
   "AREA": "Comercial",
   "JEFE": "Adriana Yuled Parra Marin, Claudia Marcela Osorio Borda, Melissa Grossich Alfaro",
   "COMP_AUTO": 5.0,
   "COMP_JEFE": 4.23,
   "COMP_COLAB": null,
   "N_COLAB": 1,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.54,
   "PUNTAJE_POTENCIAL": 75.6,
   "PUNTAJE_DESEMPENO": null,
   "INDICADORES": [
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de promoción y  seguimiento a clientes clave, asegurando la alineación de las soluciones ofrecidas con sus necesidades técnicas y de servicio y sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 25.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de ventas asignada, garantizando la  sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 50.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Monitorear el comportamiento del mercado, la competencia, los precios y las tendencias, entregando información útil para la toma de decisiones estratégicas.",
     "peso": 25.0,
     "calificacion": null,
     "pct": null
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 5.0
    },
    {
     "nombre": "GESTION DE RELACIONES Y EXPERIENCIA ORGANIZACIONAL",
     "puntaje": 4.7
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.67
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.0
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.0
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": null,
   "COMPLETO": false,
   "REPORTA_A": "Adriana Yuled Parra Marin, Claudia Marcela Osorio Borda, Melissa Grossich Alfaro",
   "CIUDAD": "Bogotá",
   "NIVEL_CARGO": "Directivo",
   "FEEDBACK": []
  },
  {
   "CC": "1019098876",
   "NOMBRE": "Yessica Abella Rodriguez",
   "CARGO": "PROFESIONAL CONTABLE",
   "AREA": "Contabilidad",
   "JEFE": "Alexandra Bogoya Puentes",
   "COMP_AUTO": 4.13,
   "COMP_JEFE": 4.88,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.58,
   "PUNTAJE_POTENCIAL": 76.3,
   "PUNTAJE_DESEMPENO": 99.8,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL CONTABLE",
     "objetivo": "Asegurar que todas las operaciones económicas y financieras se registren de forma correcta, completa y dentro de los plazos establecidos, cumpliendo las normas contables y políticas internas de KAIKA.",
     "peso": 40.0,
     "calificacion": 100.0,
     "pct": 100.0
    },
    {
     "grupo": "PROFESIONAL CONTABLE",
     "objetivo": "Elaborar y presentar estados financieros claros, precisos y auditables, que reflejen la situación real de la empresa y faciliten la toma de decisiones gerenciales.",
     "peso": 35.0,
     "calificacion": 100.0,
     "pct": 100.0
    },
    {
     "grupo": "PROFESIONAL CONTABLE",
     "objetivo": "Mejorar la eficiencia y trazabilidad de los procesos contables mediante la automatización, estandarización y control de actividades clave.",
     "peso": 25.0,
     "calificacion": 99.0,
     "pct": 99.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION A LA CALIDAD Y PRECISION",
     "puntaje": 4.73
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.67
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.6
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.5
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.4
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 83.3,
   "COMPLETO": true,
   "REPORTA_A": "Alexandra Bogoya Puentes",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Alexandra Bogoya Puentes",
     "cc_evaluador": "52552836",
     "rol": "Jefe",
     "aspectos": "Se caracteriza por ser responsable y comprometida con sus funciones, cumpliendo oportunamente con sus tareas y  responsabilidades asignadas, es colaborativa y respetuosa con sus compañeros,  Demuestra interés por alcanzar los resultados esperados y mantiene una actitud constante frente a los retos y responsabilidades que se presentan, busca mejorar continuamente su desempeño, Participa activamente con sugerencias y propuestas, mostrando interés por optimizar procesos y encontrar soluciones prácticas a las situaciones que se presentan.",
     "recomendaciones": "fortalecer la capacidad de delegar o distribuir algunas actividades, contribuyendo al desarrollo de otros integrantes del equipo y evitando concentrar responsabilidades,  fortalecer habilidades de liderazgo e influencia, aprovechando su iniciativa y disposición para aportar al equipo y asumir progresivamente nuevos retos,  Continuar desarrollando la capacidad de identificar y priorizar las actividades asumiendo responsabilidades de su rol y no de otras áreas..",
     "fecha": "2026-10-06",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1020401566",
   "NOMBRE": "Edison Alberto Castrillon Bedoya",
   "CARGO": "LIDER DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Diego Leon Castano Rios",
   "COMP_AUTO": 4.53,
   "COMP_JEFE": 4.79,
   "COMP_COLAB": 4.27,
   "N_COLAB": 3,
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA6": 4.58,
   "PUNTAJE_POTENCIAL": 76.4,
   "PUNTAJE_DESEMPENO": 97.5,
   "INDICADORES": [
    {
     "grupo": "LIDER DE SOPORTE TECNICO",
     "objetivo": "Asegurar la correcta ejecución de los servicios técnicos (instalaciones, mantenimientos,  reparaciones y garantías), cumpliendo con los estándares técnicos y de calidad definidos por KAIKA y las marcas representadas.",
     "peso": 50.0,
     "calificacion": 10.0,
     "pct": 100.0
    },
    {
     "grupo": "LIDER DE SOPORTE TECNICO",
     "objetivo": "Fortalecer las capacidades técnicas del equipo asignado mediante la transferencia de conocimiento, acompañamiento y seguimiento a capacitaciones impartidas por fábrica o KAIKA en la regional.",
     "peso": 25.0,
     "calificacion": 9.0,
     "pct": 90.0
    },
    {
     "grupo": "LIDER DE SOPORTE TECNICO",
     "objetivo": "Garantizar la correcta gestión y ejecución de garantías técnicas, asegurando una atención oportuna, rentable y conforme a los estándares del fabricante.",
     "peso": 25.0,
     "calificacion": 10.0,
     "pct": 100.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.82
    },
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 4.63
    },
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 4.6
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.5
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.43
    },
    {
     "nombre": "VISION ESTRATEGICA Y PENSAMIENTO ORGANIZACIONAL",
     "puntaje": 4.4
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 4.2
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.17
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 82.7,
   "COMPLETO": true,
   "REPORTA_A": "Diego Leon Castano Rios",
   "CIUDAD": "Medellin",
   "NIVEL_CARGO": "Táctico",
   "FEEDBACK": [
    {
     "evaluador": "Diego Leon Castano Rios",
     "cc_evaluador": "3391824",
     "rol": "Jefe",
     "aspectos": "Edison lidera con éxito el grupo de Profesionales de Servicio Técnico en nuestra regional, promoviendo una cultura de responsabilidad, orden y eficiencia operativa. Entiende el servicio técnico como un habilitador clave para las negociaciones. Brinda un respaldo impecable al equipo de ventas mediante acompañamiento en campo. Apoya a la resolución de objeciones complejas con los clientes a nivel técnico, lo que facilita la consolidación de oportunidades de negocio.",
     "recomendaciones": "Invito a Edison a fortalecer aún más la autonomía de sus colaboradores con mayor experiencia. Al delegar la toma de decisiones técnicas secundarias sin necesidad de supervisión constante, logrará liberar tiempo estratégico para enfocarse en la planeación a largo plazo y fortalecimiento del relacionamiento comercial comercial con nuestros clientes.",
     "fecha": "2026-09-24",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1020718610",
   "NOMBRE": "Diego Alejandro Duran Cortes",
   "CARGO": "DIRECTOR DE MARKETING Y TECNOLOGIAS",
   "AREA": "Comercial",
   "JEFE": "Humberto Javier Duran Cortes",
   "COMP_AUTO": 5.89,
   "COMP_JEFE": 5.17,
   "COMP_COLAB": 4.06,
   "N_COLAB": 1,
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA6": 4.98,
   "PUNTAJE_POTENCIAL": 83.0,
   "PUNTAJE_DESEMPENO": 80.0,
   "INDICADORES": [
    {
     "grupo": "DIRECTOR DE MARKETING Y TECNOLOGIA",
     "objetivo": "Consolidar la estrategia de marketing digital mediante la gestión efectiva de canales digitales, contenidos técnicos y automatización de procesos. (Incrementar el tráfico digital en XX% y el engagement en XX% respecto al año anterior.)",
     "peso": 25.0,
     "calificacion": 55.0,
     "pct": 55.0
    },
    {
     "grupo": "DIRECTOR DE MARKETING Y TECNOLOGIA",
     "objetivo": "Desarrollar estrategias efectivas de atracción y conversión de clientes potenciales para aumentar el flujo de oportunidades al área comercial.",
     "peso": 25.0,
     "calificacion": 75.0,
     "pct": 75.0
    },
    {
     "grupo": "DIRECTOR DE MARKETING Y TECNOLOGIA",
     "objetivo": "Fortalecer el posicionamiento institucional de KAIKA en los segmentos de equipos médicos, de laboratorio y diagnóstico, consolidando su imagen como aliado estratégico y proveedor de soluciones tecnológicas confiables.",
     "peso": 25.0,
     "calificacion": 90.0,
     "pct": 90.0
    },
    {
     "grupo": "DIRECTOR DE MARKETING Y TECNOLOGIA",
     "objetivo": "Garantizar el uso eficiente y rentable del presupuesto de mercadeo mediante una adecuada planeación, control y evaluación de resultados.",
     "peso": 25.0,
     "calificacion": 100.0,
     "pct": 100.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 5.23
    },
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 5.07
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.93
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.9
    },
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 4.9
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.83
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 82.1,
   "COMPLETO": true,
   "REPORTA_A": "Humberto Javier Duran Cortes",
   "FEEDBACK": []
  },
  {
   "CC": "1022329051",
   "NOMBRE": "Libardo Barreto Valencia",
   "CARGO": "COORDINADOR (A) DE SOPORTE TÉCNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Adalberto Fabre Parada",
   "COMP_AUTO": 4.42,
   "COMP_JEFE": 2.97,
   "COMP_COLAB": 3.92,
   "N_COLAB": 3,
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA6": 3.54,
   "PUNTAJE_POTENCIAL": 59.1,
   "PUNTAJE_DESEMPENO": 80.0,
   "INDICADORES": [
    {
     "grupo": "COORDINADOR DE SOPORTE TECNICO",
     "objetivo": "Asegurar la correcta ejecución de los servicios técnicos (instalaciones, mantenimientos,  reparaciones y garantías), cumpliendo con los estándares técnicos y de calidad definidos por KAIKA y las marcas representadas.",
     "peso": 50.0,
     "calificacion": 80.0,
     "pct": 80.0
    },
    {
     "grupo": "COORDINADOR DE SOPORTE TECNICO",
     "objetivo": "Fortalecer las capacidades técnicas del equipo asignado mediante la transferencia de conocimiento, acompañamiento y seguimiento a capacitaciones impartidas por fábrica o KAIKA a nivel nacional.",
     "peso": 25.0,
     "calificacion": 80.0,
     "pct": 80.0
    },
    {
     "grupo": "COORDINADOR DE SOPORTE TECNICO",
     "objetivo": "Garantizar la correcta gestión y ejecución de garantías técnicas, asegurando una atención oportuna, rentable y conforme a los estándares del fabricante.",
     "peso": 25.0,
     "calificacion": 80.0,
     "pct": 80.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.23
    },
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 4.2
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 3.87
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.83
    },
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 3.43
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 3.13
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.1
    },
    {
     "nombre": "VISION ESTRATEGICA Y PENSAMIENTO ORGANIZACIONAL",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 65.4,
   "COMPLETO": true,
   "REPORTA_A": "Adalberto Fabre Parada",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Táctico",
   "FEEDBACK": [
    {
     "evaluador": "Adalberto Fabre Parada",
     "cc_evaluador": "91283555",
     "rol": "Jefe",
     "aspectos": "Compromiso con la compañia, adaptacion al cambio y nuevas responsabilidades, orden , fomenta al integracio y trabajo en equipo contribuyendo al cumplimiento de actividades con sus compañeros.",
     "recomendaciones": "Fortalecer: actividades propias del cargo, planificacion de actividades del equipo de trabajo, comunicacion y servicio al cliente, trabajo bajo presion.",
     "fecha": "2026-10-22",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1022925128",
   "NOMBRE": "Edison Fabian Garzon Gonzalez",
   "CARGO": "PROFESIONAL DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Diego Fernando Rosas Jara",
   "COMP_AUTO": 3.75,
   "COMP_JEFE": null,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 100.0
   },
   "COMP_ESCALA6": 3.75,
   "PUNTAJE_POTENCIAL": 62.5,
   "PUNTAJE_DESEMPENO": null,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Brindar atención técnica y posventa de alto nivel, generando confianza, fidelización y satisfacción en los clientes atendidos, fortaleciendo la imagen de KAIKA como aliado técnico confiable.",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar el correcto diligenciamiento, archivo y control de los reportes técnicos, formatos de servicio, registros en sistemas internos y documentación asociada a repuestos, garantías y certificaciones.",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar que las actividades de instalación, mantenimiento, diagnóstico y reparación de equipos se ejecuten bajo los más altos estándares técnicos, de calidad y seguridad, cumpliendo con los tiempos, normativas y procedimientos establecidos por KAIKA y los fabricantes.",
     "peso": 40.0,
     "calificacion": null,
     "pct": null
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ADAPTABILIDAD",
     "puntaje": 4.0
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.0
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.0
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": null,
   "COMPLETO": false,
   "REPORTA_A": "Diego Fernando Rosas Jara",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": []
  },
  {
   "CC": "1023014515",
   "NOMBRE": "Juan Jose Garcia Bolivar",
   "CARGO": "AUXILIAR DE ALMACEN",
   "AREA": "Almacén",
   "JEFE": "Hugo Enrique Garcia Bautista",
   "COMP_AUTO": 4.13,
   "COMP_JEFE": 4.6,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.41,
   "PUNTAJE_POTENCIAL": 73.6,
   "PUNTAJE_DESEMPENO": 100.0,
   "INDICADORES": [
    {
     "grupo": "AUXILIAR DE ALMACEN",
     "objetivo": "Cumplir con la preparación y entrega de pedidos en tiempo, forma y condiciones adecuadas, garantizando la satisfacción del cliente interno y externo y la integridad de los productos biomédicos.",
     "peso": 40.0,
     "calificacion": 99.94,
     "pct": 99.9
    },
    {
     "grupo": "AUXILIAR DE ALMACEN",
     "objetivo": "Garantizar la correcta organización, actualización y conciliación de los inventarios, evitando pérdidas, deterioros o diferencias que afecten la confiabilidad de la información contable y logística.",
     "peso": 60.0,
     "calificacion": 100.0,
     "pct": 100.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.87
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.6
    },
    {
     "nombre": "GESTION ESTRATEGICA DE LA INFORMACION Y TOMA DE DECISIONES",
     "puntaje": 4.2
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.2
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.2
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 81.5,
   "COMPLETO": true,
   "REPORTA_A": "Hugo Enrique Garcia Bautista",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Operativo",
   "FEEDBACK": [
    {
     "evaluador": "Hugo Enrique Garcia Bautista",
     "cc_evaluador": "80065681",
     "rol": "Jefe",
     "aspectos": "Colaborador responsable, organizado y cumplido con el horario laboral, que se destaca por su espíritu compañerista y disposición constante a apoyar al equipo de trabajo.",
     "recomendaciones": "Fortalecer la organización en el desarrollo de sus labores diarias, aplicando mayor orden y planificación que contribuyan a optimizar los tiempos y resultados de su trabajo.",
     "fecha": "2026-09-14",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1023969369",
   "NOMBRE": "Ingrid Julieth Varon Rosero",
   "CARGO": "RECEPCIONISTA",
   "AREA": "Administrativo",
   "JEFE": "Sandra Patricia Rodriguez Cortes",
   "COMP_AUTO": 5.07,
   "COMP_JEFE": 3.8,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.31,
   "PUNTAJE_POTENCIAL": 71.8,
   "PUNTAJE_DESEMPENO": 100.0,
   "INDICADORES": [
    {
     "grupo": "RECEPCIONISTA",
     "objetivo": "Asegurar una atención al cliente y visitante de excelencia, alineada con la imagen corporativa de KAIKA y que proyecte los valores institucionales de servicio, profesionalismo y confianza.",
     "peso": 50.0,
     "calificacion": 100.0,
     "pct": 100.0
    },
    {
     "grupo": "RECEPCIONISTA",
     "objetivo": "Brindar soporte administrativo, operativo y logístico eficiente a las diferentes áreas de la empresa",
     "peso": 50.0,
     "calificacion": 100.0,
     "pct": 100.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.53
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.53
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.47
    },
    {
     "nombre": "GESTION ESTRATEGICA DE LA INFORMACION Y TOMA DE DECISIONES",
     "puntaje": 4.4
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.6
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 80.2,
   "COMPLETO": true,
   "REPORTA_A": "Sandra Patricia Rodriguez Cortes",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Operativo",
   "FEEDBACK": [
    {
     "evaluador": "Sandra Patricia Rodriguez Cortes",
     "cc_evaluador": "52249658",
     "rol": "Jefe",
     "aspectos": "No hemos recibido pqr internas o externas sobre la comunicación con recepción, sus tramites con mensajería o trabajo en general.  Muestra un constante interés en aprender y colaborar a las áreas que lo requieren, apoyar en reemplazos y atender las solicitudes en general en los tiempos requeridos.  Muestra siempre una buena actitud que se refleja en la atención al cliente cuando se ingresa a la empresa, dando una buena imagen.",
     "recomendaciones": "Hay una oportunidad de mejora en proponer cambios para su proceso de recepción o manejo de mensajería,  ELIMINAR:  ESTO NO APLICA \"Garantiza que los procesos de liquidación se ejecuten de manera secuencial y eficiente para evitar cuellos de botella.\"Garantiza que las respuestas se entreguen en los términos legales, protegiendo la trazabilidad de la gestión \"Administra las cargas de trabajo y los flujos de información interdepartamental para la preparación de impuestos. Garantiza que los insumos contables estén disponibles con la antelación necesaria para su revisión técnica. Recopila y organiza la información primaria con rigor técnico, asegurando que el ingreso de datos en los sistemas sea exacto y oportuno.\nIdentifica y reporta anomalías evidentes en los reportes de operación diaria, siguiendo los protocolos de escalamiento de información técnica.PONGO CUMPLE PARA NO AFECTAR CALIFICACION\"",
     "fecha": "2026-09-10",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1024483719",
   "NOMBRE": "Deisy Julieth Montanez Zuniga",
   "CARGO": "DIRECTORA DE TALENTO HUMANO",
   "AREA": "Talento Humano",
   "JEFE": "Humberto Javier Duran Cortes",
   "COMP_AUTO": 3.92,
   "COMP_JEFE": 3.97,
   "COMP_COLAB": 4.6,
   "N_COLAB": 3,
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA6": 4.15,
   "PUNTAJE_POTENCIAL": 69.2,
   "PUNTAJE_DESEMPENO": 79.1,
   "INDICADORES": [
    {
     "grupo": "DIRECTOR DE TALENTO HUMANO",
     "objetivo": "Cobertura de formación: Garantizar el porcentaje mínimo esperado de colaboradores que ejecuta los planes de formación.",
     "peso": 33.0,
     "calificacion": 70.0,
     "pct": 70.0
    },
    {
     "grupo": "DIRECTOR DE TALENTO HUMANO",
     "objetivo": "Eficacia de la formación: Promedio de calificación obtenida en los procesos de formación",
     "peso": 33.0,
     "calificacion": 77.0,
     "pct": 77.0
    },
    {
     "grupo": "DIRECTOR DE TALENTO HUMANO",
     "objetivo": "Rotación de personal: Reducir la salida voluntaria de empleados clave para mantener la estabilidad del equipo y disminuir los costos de reemplazo.",
     "peso": 34.0,
     "calificacion": 90.0,
     "pct": 90.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.43
    },
    {
     "nombre": "GESTION DE RELACIONES Y EXPERIENCIA ORGANIZACIONAL",
     "puntaje": 4.37
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.33
    },
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 4.23
    },
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 4.13
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.13
    },
    {
     "nombre": "VISION ESTRATEGICA Y PENSAMIENTO ORGANIZACIONAL",
     "puntaje": 3.93
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 3.63
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 72.1,
   "COMPLETO": true,
   "REPORTA_A": "Humberto Javier Duran Cortes",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Directivo",
   "FEEDBACK": []
  },
  {
   "CC": "1030522772",
   "NOMBRE": "Jose Albeiro Guzman Benavidez",
   "CARGO": "PROFESIONAL DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Diego Fernando Rosas Jara",
   "COMP_AUTO": 4.0,
   "COMP_JEFE": null,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 100.0
   },
   "COMP_ESCALA6": 4.0,
   "PUNTAJE_POTENCIAL": 66.7,
   "PUNTAJE_DESEMPENO": null,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Brindar atención técnica y posventa de alto nivel, generando confianza, fidelización y satisfacción en los clientes atendidos, fortaleciendo la imagen de KAIKA como aliado técnico confiable.",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar el correcto diligenciamiento, archivo y control de los reportes técnicos, formatos de servicio, registros en sistemas internos y documentación asociada a repuestos, garantías y certificaciones.",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar que las actividades de instalación, mantenimiento, diagnóstico y reparación de equipos se ejecuten bajo los más altos estándares técnicos, de calidad y seguridad, cumpliendo con los tiempos, normativas y procedimientos establecidos por KAIKA y los fabricantes.",
     "peso": 40.0,
     "calificacion": null,
     "pct": null
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.0
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.0
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": null,
   "COMPLETO": false,
   "REPORTA_A": "Diego Fernando Rosas Jara",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": []
  },
  {
   "CC": "1030553041",
   "NOMBRE": "Cesar Augusto Prado Hernández",
   "CARGO": "PROFESIONAL DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Diego Fernando Rosas Jara",
   "COMP_AUTO": 3.92,
   "COMP_JEFE": null,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 100.0
   },
   "COMP_ESCALA6": 3.92,
   "PUNTAJE_POTENCIAL": 65.3,
   "PUNTAJE_DESEMPENO": null,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Brindar atención técnica y posventa de alto nivel, generando confianza, fidelización y satisfacción en los clientes atendidos, fortaleciendo la imagen de KAIKA como aliado técnico confiable.",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar el correcto diligenciamiento, archivo y control de los reportes técnicos, formatos de servicio, registros en sistemas internos y documentación asociada a repuestos, garantías y certificaciones.",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar que las actividades de instalación, mantenimiento, diagnóstico y reparación de equipos se ejecuten bajo los más altos estándares técnicos, de calidad y seguridad, cumpliendo con los tiempos, normativas y procedimientos establecidos por KAIKA y los fabricantes.",
     "peso": 40.0,
     "calificacion": null,
     "pct": null
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ADAPTABILIDAD",
     "puntaje": 4.0
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.0
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.0
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.67
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": null,
   "COMPLETO": false,
   "REPORTA_A": "Diego Fernando Rosas Jara",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": []
  },
  {
   "CC": "1031169773",
   "NOMBRE": "Jhon Jairo Morales Roldan",
   "CARGO": "PROFESIONAL DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Diego Fernando Rosas Jara",
   "COMP_AUTO": 3.5,
   "COMP_JEFE": null,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 100.0
   },
   "COMP_ESCALA6": 3.5,
   "PUNTAJE_POTENCIAL": 58.3,
   "PUNTAJE_DESEMPENO": null,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Brindar atención técnica y posventa de alto nivel, generando confianza, fidelización y satisfacción en los clientes atendidos, fortaleciendo la imagen de KAIKA como aliado técnico confiable.",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar el correcto diligenciamiento, archivo y control de los reportes técnicos, formatos de servicio, registros en sistemas internos y documentación asociada a repuestos, garantías y certificaciones.",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar que las actividades de instalación, mantenimiento, diagnóstico y reparación de equipos se ejecuten bajo los más altos estándares técnicos, de calidad y seguridad, cumpliendo con los tiempos, normativas y procedimientos establecidos por KAIKA y los fabricantes.",
     "peso": 40.0,
     "calificacion": null,
     "pct": null
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ADAPTABILIDAD",
     "puntaje": 3.67
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.67
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.67
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": null,
   "COMPLETO": false,
   "REPORTA_A": "Diego Fernando Rosas Jara",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": []
  },
  {
   "CC": "1032373666",
   "NOMBRE": "Ivonnette Rodriguez Acevedo",
   "CARGO": "LIDER DE TESORERIA",
   "AREA": "Administrativo",
   "JEFE": "Sandra Patricia Rodriguez Cortes",
   "COMP_AUTO": 4.48,
   "COMP_JEFE": 3.86,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.1,
   "PUNTAJE_POTENCIAL": 68.4,
   "PUNTAJE_DESEMPENO": 76.0,
   "INDICADORES": [
    {
     "grupo": "LIDER DE TESORERIA",
     "objetivo": "Asegurar la correcta planeación, ejecución y control del flujo de efectivo, garantizando la disponibilidad de fondos para cumplir con las obligaciones operativas, comerciales y financieras de KAIKA.",
     "peso": 45.0,
     "calificacion": 60.0,
     "pct": 60.0
    },
    {
     "grupo": "LIDER DE TESORERIA",
     "objetivo": "Asegurar la ejecución oportuna y ordenada de pagos a proveedores, entidades bancarias, contratistas y obligaciones fiscales, minimizando riesgos financieros, intereses moratorios y reprocesos.",
     "peso": 40.0,
     "calificacion": 100.0,
     "pct": 100.0
    },
    {
     "grupo": "LIDER DE TESORERIA",
     "objetivo": "Contribuir a la gestión de cumplimiento de requisitos de Sagrilaft por parte de los proveedores, clientes y socios para prevenir riesgos legales y reputacionales",
     "peso": 15.0,
     "calificacion": 60.0,
     "pct": 60.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.73
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.4
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.0
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 4.0
    },
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 3.93
    },
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 3.87
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.8
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 70.7,
   "COMPLETO": true,
   "REPORTA_A": "Sandra Patricia Rodriguez Cortes",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Táctico",
   "FEEDBACK": [
    {
     "evaluador": "Sandra Patricia Rodriguez Cortes",
     "cc_evaluador": "52249658",
     "rol": "Jefe",
     "aspectos": "Cumple cabalmente con todas las asignaciones y esta pendiente mas allá de sus horarios laborales, cuando se requiere, para colaborar y terminar operaciones, pagos o solicitudes de los colaboradores en aras de no trabar ningún proceso. Esta pendiente de actualizar la información compartida en sharepoint, para control de pagos, dividendos etc lo que facilita la comunicación entre nosotros y con las demás áreas.  Creo una presentación para medir el cumplimiento de la proyección sdel cash flow pero es general, lo que ayuda, pero puede mejorar .OJO NO APLICA PARA EL PERFIL: Motiva e involucra a su equipo, clarificando roles, responsabilidades y metas concretas. Promueve un clima de confianza y compromiso, reconociendo logros y motivando la participación activa de los líderes de área  NO APLICA PARA PERFIL. Comunica la visión estratégica y alinea los objetivos de las áreas y equipos con la estrategia corporativa. NO APLICA::Establece alianzas o decisiones de inversión/desinversión basadas en el impacto a largo plazo para la organización. NO APLICA: Analiza información del mercado y de la competencia para definir prioridades estratégicas y oportunidades de crecimiento.",
     "recomendaciones": "Hay oportunidad de mejora en la innovación, sugerencias de mejoras en sus formatos, tareas o proyectos. Puede sugerir  o proponer y será tenido en cuenta, así no sea posible implementarlo. hay una oportunidad de mejora en la programación de tareas y ´presentación de reportes en el calendario para que todos podamos verlo. Hay oportunidad de mejora en la comunicación interna, para ser mas asertivos en las respuestas, pues hay colaboradores que son muy sensibles en el trato.  Hay una oportunidad de mejora en la búsqueda de mejorar las  tasas transaccionales con los bancos y en búsqueda de eficiencias en el proceso. Hay una oportunidad de mejora en el análisis del flujo de caja , mensualmente revisar los rubros que más impactaron por su desface, la frecuencia durante el año y si requerimos ajustes en los meses proyectados. Hay oportunidad de mejora en el Kpi de sagrilaft conjuntamente con caterine y Nicol, para que lleven el porcentaje de cubrimiento a los clientes facturados en 2026 e informen a los lideres de área cuando no lo tengan y sean ellos quienes autoricen factura, de esa forma, los comprometemos.",
     "fecha": "2026-09-18",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1032380962",
   "NOMBRE": "Juan Guillermo Mahecha Perilla",
   "CARGO": "PROFESIONAL DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Freddy Camilo Alberto Garcia",
   "COMP_AUTO": 4.0,
   "COMP_JEFE": 3.42,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 3.65,
   "PUNTAJE_POTENCIAL": 60.8,
   "PUNTAJE_DESEMPENO": null,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Brindar atención técnica y posventa de alto nivel, generando confianza, fidelización y satisfacción en los clientes atendidos, fortaleciendo la imagen de KAIKA como aliado técnico confiable.",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar el correcto diligenciamiento, archivo y control de los reportes técnicos, formatos de servicio, registros en sistemas internos y documentación asociada a repuestos, garantías y certificaciones.",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar que las actividades de instalación, mantenimiento, diagnóstico y reparación de equipos se ejecuten bajo los más altos estándares técnicos, de calidad y seguridad, cumpliendo con los tiempos, normativas y procedimientos establecidos por KAIKA y los fabricantes.",
     "peso": 40.0,
     "calificacion": null,
     "pct": null
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.8
    },
    {
     "nombre": "ADAPTABILIDAD",
     "puntaje": 3.6
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.6
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 3.6
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": null,
   "COMPLETO": false,
   "REPORTA_A": "Freddy Camilo Alberto Garcia",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Freddy Camilo Alberto Garcia",
     "cc_evaluador": "79968060",
     "rol": "Jefe",
     "aspectos": "Como principal fortaleza el profesional brinda apoyo técnico a los compañeros de las sucursales de manera efectiva",
     "recomendaciones": "Como recomedacion u oportunidad de mejora se sugiere que el profesional siga las recomendaciones médicas en cuanto a su salud y bienestar",
     "fecha": "2026-10-23",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1032409184",
   "NOMBRE": "Dayron Guillermo Casas Buitrago",
   "CARGO": "ASESOR COMERCIAL",
   "AREA": "Comercial",
   "JEFE": "Melissa Grossich Alfaro",
   "COMP_AUTO": 4.77,
   "COMP_JEFE": 4.4,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.55,
   "PUNTAJE_POTENCIAL": 75.8,
   "PUNTAJE_DESEMPENO": 82.5,
   "INDICADORES": [
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de promoción y  seguimiento a clientes clave, asegurando la alineación de las soluciones ofrecidas con sus necesidades técnicas y de servicio y sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 25.0,
     "calificacion": 9.0,
     "pct": 90.0
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de ventas asignada, garantizando la  sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 50.0,
     "calificacion": 8.0,
     "pct": 80.0
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Monitorear el comportamiento del mercado, la competencia, los precios y las tendencias, entregando información útil para la toma de decisiones estratégicas.",
     "peso": 25.0,
     "calificacion": 8.0,
     "pct": 80.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "GESTION DE RELACIONES Y EXPERIENCIA ORGANIZACIONAL",
     "puntaje": 4.87
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.8
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.6
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.47
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.4
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 77.8,
   "COMPLETO": true,
   "REPORTA_A": "Melissa Grossich Alfaro",
   "CIUDAD": "Bogotá",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Melissa Grossich Alfaro",
     "cc_evaluador": "52702269",
     "rol": "Jefe",
     "aspectos": "Se destaca por ser una persona enfocada, disciplinada y comprometida con su trabajo. Su constancia en las visitas a clientes y su presencia permanente en campo reflejan una gran responsabilidad y dedicación, lo que le permite construir relaciones cercanas y mantener activa la cartera. Es importante que conserve esta actitud de trabajo, su perseverancia y su disposición, ya que son la base para seguir creciendo y aportando al equipo.",
     "recomendaciones": "Como oportunidad de desarrollo, se recomienda fortalecer la capacidad de convertir las visitas en cierres concretos de negocio. Para lograrlo, puede planear cada visita con un objetivo comercial claro, hacer un seguimiento más estructurado a las oportunidades abiertas y trabajar en sus habilidades de negociación",
     "fecha": "2026-10-01",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1032411655",
   "NOMBRE": "Alejandro Donado Rojas",
   "CARGO": "GERENTE REGIONAL",
   "AREA": "Comercial",
   "JEFE": "Claudia Marcela Osorio Borda",
   "COMP_AUTO": 4.76,
   "COMP_JEFE": 4.29,
   "COMP_COLAB": 4.27,
   "N_COLAB": 3,
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA6": 4.38,
   "PUNTAJE_POTENCIAL": 73.0,
   "PUNTAJE_DESEMPENO": 78.0,
   "INDICADORES": [
    {
     "grupo": "GERENTE REGIONAL",
     "objetivo": "Asegurar el cumplimiento de los objetivos comerciales y de crecimiento regional",
     "peso": 40.0,
     "calificacion": 8.0,
     "pct": 80.0
    },
    {
     "grupo": "GERENTE REGIONAL",
     "objetivo": "Fortalecer la gestión de cotizaciones y propuestas comerciales",
     "peso": 30.0,
     "calificacion": 8.0,
     "pct": 80.0
    },
    {
     "grupo": "GERENTE REGIONAL",
     "objetivo": "Garantizar la eficiencia y rentabilidad de las operaciones regionales",
     "peso": 20.0,
     "calificacion": 8.0,
     "pct": 80.0
    },
    {
     "grupo": "GERENTE REGIONAL",
     "objetivo": "Supervisar y controlar la gestión de licitaciones y subastas regionales",
     "peso": 10.0,
     "calificacion": 6.0,
     "pct": 60.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 4.77
    },
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 4.67
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 4.53
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.47
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.37
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.33
    },
    {
     "nombre": "VISION ESTRATEGICA Y PENSAMIENTO ORGANIZACIONAL",
     "puntaje": 4.3
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.17
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 74.5,
   "COMPLETO": true,
   "REPORTA_A": "Claudia Marcela Osorio Borda",
   "CIUDAD": "Bucaramanga",
   "NIVEL_CARGO": "Directivo",
   "FEEDBACK": []
  },
  {
   "CC": "1033806116",
   "NOMBRE": "Carlos Andres Sierra Rodriguez",
   "CARGO": "PROFESIONAL DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Diego Fernando Rosas Jara",
   "COMP_AUTO": 4.58,
   "COMP_JEFE": null,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 100.0
   },
   "COMP_ESCALA6": 4.58,
   "PUNTAJE_POTENCIAL": 76.4,
   "PUNTAJE_DESEMPENO": null,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Brindar atención técnica y posventa de alto nivel, generando confianza, fidelización y satisfacción en los clientes atendidos, fortaleciendo la imagen de KAIKA como aliado técnico confiable.",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar el correcto diligenciamiento, archivo y control de los reportes técnicos, formatos de servicio, registros en sistemas internos y documentación asociada a repuestos, garantías y certificaciones.",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar que las actividades de instalación, mantenimiento, diagnóstico y reparación de equipos se ejecuten bajo los más altos estándares técnicos, de calidad y seguridad, cumpliendo con los tiempos, normativas y procedimientos establecidos por KAIKA y los fabricantes.",
     "peso": 40.0,
     "calificacion": null,
     "pct": null
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ADAPTABILIDAD",
     "puntaje": 5.0
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.67
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.67
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.0
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": null,
   "COMPLETO": false,
   "REPORTA_A": "Diego Fernando Rosas Jara",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": []
  },
  {
   "CC": "1033810090",
   "NOMBRE": "Johan Andres Claros Bernate",
   "CARGO": "AUXILIAR DE ALMACEN",
   "AREA": "Almacén",
   "JEFE": "Hugo Enrique Garcia Bautista",
   "COMP_AUTO": 5.13,
   "COMP_JEFE": 4.73,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.89,
   "PUNTAJE_POTENCIAL": 81.6,
   "PUNTAJE_DESEMPENO": 99.9,
   "INDICADORES": [
    {
     "grupo": "AUXILIAR DE ALMACEN",
     "objetivo": "Cumplir con la preparación y entrega de pedidos en tiempo, forma y condiciones adecuadas, garantizando la satisfacción del cliente interno y externo y la integridad de los productos biomédicos.",
     "peso": 40.0,
     "calificacion": 100.0,
     "pct": 100.0
    },
    {
     "grupo": "AUXILIAR DE ALMACEN",
     "objetivo": "Garantizar la correcta organización, actualización y conciliación de los inventarios, evitando pérdidas, deterioros o diferencias que afecten la confiabilidad de la información contable y logística.",
     "peso": 60.0,
     "calificacion": 99.9,
     "pct": 99.9
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 5.0
    },
    {
     "nombre": "GESTION ESTRATEGICA DE LA INFORMACION Y TOMA DE DECISIONES",
     "puntaje": 5.0
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 5.0
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 5.0
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.47
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 87.1,
   "COMPLETO": true,
   "REPORTA_A": "Hugo Enrique Garcia Bautista",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Operativo",
   "FEEDBACK": [
    {
     "evaluador": "Hugo Enrique Garcia Bautista",
     "cc_evaluador": "80065681",
     "rol": "Jefe",
     "aspectos": "Disposición al cambio: Se adapta con facilidad a nuevos procesos y cambios operativos, mostrando siempre una actitud positiva y proactiva ante ajustes en sus funciones.\nApoyo a sus compañeros: Brinda acompañamiento constante a su equipo, compartiendo conocimiento y colaborando activamente en momentos de alta carga laboral.Apoya las tareas administrativas.",
     "recomendaciones": "Se sugiere fortalecer el trabajo en equipo, mejorando la comunicación y colaboración con sus compañeros para lograr una mayor articulación en las labores diarias del área.",
     "fecha": "2026-09-11",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1035863108",
   "NOMBRE": "Johan Sebastian Pineda Carmona",
   "CARGO": "ASESOR COMERCIAL",
   "AREA": "Comercial",
   "JEFE": "Diego Harley Gutierrez Laverde, Diego Leon Castano Rios, Edwin Andres Abril Lucero, Rosemary Cortes Gonzalez",
   "COMP_AUTO": 4.93,
   "COMP_JEFE": 4.22,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.5,
   "PUNTAJE_POTENCIAL": 75.1,
   "PUNTAJE_DESEMPENO": 66.9,
   "INDICADORES": [
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de promoción y  seguimiento a clientes clave, asegurando la alineación de las soluciones ofrecidas con sus necesidades técnicas y de servicio y sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 25.0,
     "calificacion": 30.0,
     "pct": 70.0
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de ventas asignada, garantizando la  sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 50.0,
     "calificacion": 30.0,
     "pct": 67.5
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Monitorear el comportamiento del mercado, la competencia, los precios y las tendencias, entregando información útil para la toma de decisiones estratégicas.",
     "peso": 25.0,
     "calificacion": 30.0,
     "pct": 62.5
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.83
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.57
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.52
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.45
    },
    {
     "nombre": "GESTION DE RELACIONES Y EXPERIENCIA ORGANIZACIONAL",
     "puntaje": 4.42
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 72.6,
   "COMPLETO": true,
   "REPORTA_A": "Diego Harley Gutierrez Laverde, Diego Leon Castano Rios, Edwin Andres Abril Lucero, Rosemary Cortes Gonzalez",
   "CIUDAD": "Medellín",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Diego Leon Castano Rios",
     "cc_evaluador": "3391824",
     "rol": "Jefe",
     "aspectos": "Destaco y reconozco de manera muy especial el desempeño de Sebastián como un asesor comercial integral y de alto impacto para las líneas de laboratorio. Su capacidad para brindar soluciones interdisciplinarias, sumada a su firme vocación de servicio y satisfacción al cliente, han elevado el estándar de la atención comercial en nuestra regional Antioquia. Es un profesional que no solo logra cierres de altas cifras y buena rentabilidad para la compañía, sino que también construye relaciones sólidas y a largo plazo con los clientes. Lo invito a mantener esta actitud proactiva, este nivel de excelencia y el compromiso con los resultados que tanto le aportan a nivel personal y al equipo de trabajo.",
     "recomendaciones": "Si bien su criterio técnico y comunicación comercial es sumamente valioso, invito a Sebastián a seguir fortaleciendo la apertura y receptividad para transmitir una imagen ejecutiva, de alto nivel de expresión corporal y comunicacional para seguir creciendo en su liderazgo comercial y porque no, en el futuro, liderar equipos de trabajo comercial.",
     "fecha": "2026-09-27",
     "acciones": []
    },
    {
     "evaluador": "Edwin Andres Abril Lucero",
     "cc_evaluador": "80039672",
     "rol": "Jefe",
     "aspectos": "Se destaca por su compromiso y responsabilidad en el cumplimiento de sus funciones, manteniendo una actitud positiva y disposición para apoyar al equipo",
     "recomendaciones": "Continuar desarrollando sus habilidades de comunicación y liderazgo, buscando expresar sus ideas con mayor claridad y seguridad, así como compartir conocimientos",
     "fecha": "2026-09-27",
     "acciones": [
      {
       "competencia": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
       "objetivo": "Fortalecer la capacidad de planificación, organización y seguimiento de las actividades, estableciendo prioridades y tiempos claros que permitan alcanzar los objetivos y compromisos definidos",
       "accion": "cumplir al menos el 95 % de las actividades y compromisos establecidos dentro de los tiempos definidos, realizando seguimiento periódico al plan de trabajo",
       "fecha": "2026-11-30"
      }
     ]
    }
   ]
  },
  {
   "CC": "1037635703",
   "NOMBRE": "Sergio Andres Quiroz Caicedo",
   "CARGO": "ASESOR COMERCIAL",
   "AREA": "Comercial",
   "JEFE": "Adriana Yuled Parra Marin, Andres David Rueda Acevedo, Diego Leon Castano Rios",
   "COMP_AUTO": 5.6,
   "COMP_JEFE": 4.4,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.88,
   "PUNTAJE_POTENCIAL": 81.3,
   "PUNTAJE_DESEMPENO": 88.3,
   "INDICADORES": [
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de promoción y  seguimiento a clientes clave, asegurando la alineación de las soluciones ofrecidas con sus necesidades técnicas y de servicio y sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 25.0,
     "calificacion": 90.0,
     "pct": 90.0
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de ventas asignada, garantizando la  sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 50.0,
     "calificacion": 90.0,
     "pct": 90.0
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Monitorear el comportamiento del mercado, la competencia, los precios y las tendencias, entregando información útil para la toma de decisiones estratégicas.",
     "peso": 25.0,
     "calificacion": 90.0,
     "pct": 83.3
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "GESTION DE RELACIONES Y EXPERIENCIA ORGANIZACIONAL",
     "puntaje": 5.2
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.93
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.93
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.87
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.53
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 83.4,
   "COMPLETO": true,
   "REPORTA_A": "Adriana Yuled Parra Marin, Andres David Rueda Acevedo, Diego Leon Castano Rios",
   "CIUDAD": "Medellín",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Andres David Rueda Acevedo",
     "cc_evaluador": "13741223",
     "rol": "Jefe",
     "aspectos": "Andres, es una persona que tiene una muy buena relación con los clientes tanto los actuales como los nuevos, con los cuales logra tener una relación de confianza y abierta. Se esfuerza para que las necesidades o requerimientos de los clientes se cumplan.",
     "recomendaciones": "Considero necesario que de la línea de esterilización pueda darle un mejor trabajo a los consumibles de monitorización.",
     "fecha": "2026-09-17",
     "acciones": []
    },
    {
     "evaluador": "Diego Leon Castano Rios",
     "cc_evaluador": "3391824",
     "rol": "Jefe",
     "aspectos": "Andrés tiene una alta vocación de servicio al cliente y la capacidad de generar relaciones comerciales de confianza duraderas en el tiempo. Es capaz de gestionar autónomamente sus funciones a cargo y buscar resultados comerciales de gana/gana.",
     "recomendaciones": "A Andrés, como oportunidad de desarrollo para seguir fortaleciendo el trabajo en equipo, lo invito a profundizar en la escucha activa y la flexibilidad frente a puntos de vista diferentes. Reconozco y valoro profundamente la convicción y seguridad con la que defiende sus ideas; sin embargo, mantener una postura más abierta y receptiva ante las opiniones o metodologías de los demás compañeros de trabajo o superiores, le facilitará la gestión constructiva de diferencias y potenciará la sinergia y el trabajo colaborativo en nuestra regional.",
     "fecha": "2026-09-27",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1053811815",
   "NOMBRE": "Body Alexander Osorio Ramirez",
   "CARGO": "PROFESIONAL DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Maria Del Pilar Restrepo Botero",
   "COMP_AUTO": 4.0,
   "COMP_JEFE": 3.33,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 3.6,
   "PUNTAJE_POTENCIAL": 60.0,
   "PUNTAJE_DESEMPENO": 24.0,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Brindar atención técnica y posventa de alto nivel, generando confianza, fidelización y satisfacción en los clientes atendidos, fortaleciendo la imagen de KAIKA como aliado técnico confiable.",
     "peso": 30.0,
     "calificacion": 2.0,
     "pct": 20.0
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar el correcto diligenciamiento, archivo y control de los reportes técnicos, formatos de servicio, registros en sistemas internos y documentación asociada a repuestos, garantías y certificaciones.",
     "peso": 30.0,
     "calificacion": 2.0,
     "pct": 20.0
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar que las actividades de instalación, mantenimiento, diagnóstico y reparación de equipos se ejecuten bajo los más altos estándares técnicos, de calidad y seguridad, cumpliendo con los tiempos, normativas y procedimientos establecidos por KAIKA y los fabricantes.",
     "peso": 40.0,
     "calificacion": 3.0,
     "pct": 30.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 3.93
    },
    {
     "nombre": "ADAPTABILIDAD",
     "puntaje": 3.6
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.47
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.4
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 49.2,
   "COMPLETO": true,
   "REPORTA_A": "Maria Del Pilar Restrepo Botero",
   "CIUDAD": "Eje Cafetero",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Maria Del Pilar Restrepo Botero",
     "cc_evaluador": "42147274",
     "rol": "Jefe",
     "aspectos": "Se resalta en el colaborador su actitud profundamente respetuosa y su calidad como buen compañero, destacándose por su constante disposición a colaborar. Muestra un sólido compromiso con el trabajo en equipo, facilitando un ambiente laboral armonioso, de apoyo mutuo y un relacionamiento interpersonal altamente positivo",
     "recomendaciones": "Se sugiere enfocar su desarrollo en fortalecer la proactividad para anticiparse a las necesidades y proponer soluciones oportunas. Asimismo, se recomienda desarrollar la asertividad para una mejor gestión de prioridades, mantener un seguimiento ordenado de las tareas administrativas y cumplir rigurosamente con los tiempos de envío de la programación diaria de actividades, así como de los reportes solicitados por la Gerencia Regional y demás áreas de la compañía.",
     "fecha": "2026-09-15",
     "acciones": [
      {
       "competencia": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
       "objetivo": "Garantizar una atención y respuesta oportuna a los requerimientos de los clientes internos y externos, para reducir los tiempos de espera y elevar los niveles de satisfacción y efectividad del servicio.",
       "accion": "1.Establecer un canal de priorización diaria para responder las consultas, solicitudes y correos de los clientes dentro de los tiempos estipulados.\n\n2. Implementar respuestas rápidas o plantillas estandarizadas para agilizar la atención de solicitudes frecuentes.\n\n3. Realizar seguimiento continuo al estado de los requerimientos pendientes para mantener informado al cliente sobre el avance de su caso.\n\n4. Monitorear semanalmente los tiempos de respuesta para identificar cuellos de botella y ajustar la gestión de atención.",
       "fecha": "2026-11-30"
      },
      {
       "competencia": "ADAPTABILIDAD",
       "objetivo": "Ajustar y optimizar la gestión diaria ante cambios en los procedimientos, prioridades operativas o nuevas herramientas corporativas, para mantener la continuidad del servicio y la efectividad en las entregas.",
       "accion": "1. Adoptar de manera ágil los nuevos flujos de trabajo y normativas definidas por la compañía para mantener la alineación operativa.\n\n2. Reorganizar la planificación diaria con flexibilidad ante cambios de prioridad o solicitudes urgentes de la gerencia.\n\n3. Participar de forma abierta en los procesos de transición o actualización tecnológica para reducir la curva de aprendizaje.\n\n4. Retroalimentar al equipo sobre los ajustes implementados para asegurar un desempeño coordinado frente a las modificaciones.",
       "fecha": "2026-11-30"
      },
      {
       "competencia": "APRENDIZAJE CONTINUO",
       "objetivo": "Ampliar y diversificar el conocimiento técnico y comercial en otras líneas de negocio de la compañía mediante el autoestudio constante, para ofrecer un soporte integral y detectar nuevas oportunidades de solución/venta.",
       "accion": "1. Establecer un plan de autoestudio semanal dedicado a revisar manuales, fichas técnicas y catálogos de las otras líneas de productos de la compañía.\n\n2. Realizar los cursos e itinerarios de capacitación disponibles en las plataformas internas sobre las diferentes líneas del portafolio.\n\n3. Acompañar o consultar con especialistas de otras áreas para comprender el flujo de atención y las consultas más frecuentes de dichos productos.\n\n4. Aplicar de forma proactiva el conocimiento adquirido en la atención diaria, identificando oportunidades para promocionar o dar soporte en otras líneas.",
       "fecha": "2026-11-30"
      },
      {
       "competencia": "INNOVACION Y MEJORA CONTINUA",
       "objetivo": "Diseñar e implementar un sistema de gestión del tiempo y estandarización de procesos para equilibrar las labores operativas y administrativas, asegurando la entrega oportuna de cotizaciones,  programación semanal y  los reportes e información requerida por otras áreas.",
       "accion": "1. Estructurar un esquema de timeblocking diario para separar de forma eficiente la atención operativa del trabajo administrativo (cotizaciones y reportes).\n\n2. Establecer una rutina de programación semanal para anticipar la consolidación de información y evitar entregas extemporáneas.\n\n3. Agilizar el flujo de envío de cotizaciones y respuestas a solicitudes de otras áreas mediante el uso de plantillas y formatos estandarizados.\n\n4. Monitorear semanalmente el cumplimiento de las entregas de reportes e información clave para ajustar tiempos de respuesta y mantener la trazabilidad.",
       "fecha": "2026-11-30"
      }
     ]
    }
   ]
  },
  {
   "CC": "1053866898",
   "NOMBRE": "Edison Yamir Cordoba Figueroa",
   "CARGO": "PROFESIONAL DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Maria Del Pilar Restrepo Botero",
   "COMP_AUTO": 4.42,
   "COMP_JEFE": 5.83,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 5.27,
   "PUNTAJE_POTENCIAL": 87.8,
   "PUNTAJE_DESEMPENO": 50.0,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Brindar atención técnica y posventa de alto nivel, generando confianza, fidelización y satisfacción en los clientes atendidos, fortaleciendo la imagen de KAIKA como aliado técnico confiable.",
     "peso": 30.0,
     "calificacion": 5.0,
     "pct": 50.0
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar el correcto diligenciamiento, archivo y control de los reportes técnicos, formatos de servicio, registros en sistemas internos y documentación asociada a repuestos, garantías y certificaciones.",
     "peso": 30.0,
     "calificacion": 5.0,
     "pct": 50.0
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar que las actividades de instalación, mantenimiento, diagnóstico y reparación de equipos se ejecuten bajo los más altos estándares técnicos, de calidad y seguridad, cumpliendo con los tiempos, normativas y procedimientos establecidos por KAIKA y los fabricantes.",
     "peso": 40.0,
     "calificacion": 5.0,
     "pct": 50.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ADAPTABILIDAD",
     "puntaje": 5.47
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 5.33
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 5.13
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 5.13
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 76.4,
   "COMPLETO": true,
   "REPORTA_A": "Maria Del Pilar Restrepo Botero",
   "CIUDAD": "Eje Cafetero",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Maria Del Pilar Restrepo Botero",
     "cc_evaluador": "42147274",
     "rol": "Jefe",
     "aspectos": "Profesional  comprometido, organizado y orientado al cumplimiento de resultados. Se destaca por su trabajo en equipo, eficiencia y excelente atención al cliente.",
     "recomendaciones": "El funcionario presenta un desempeño satisfactorio, destacándose por su compromiso, eficiencia, organización, trabajo en equipo y excelente atención al cliente.",
     "fecha": "2026-09-15",
     "acciones": [
      {
       "competencia": "APRENDIZAJE CONTINUO",
       "objetivo": "Desarrollar y fortalecer las capacidades técnicas y de resolución de problemas mediante la actualización constante en herramientas del área, para optimizar los tiempos de respuesta e incrementar la satisfacción del usuario.",
       "accion": "Completar la capacitación o certificación técnica en herramientas facilitadas por la compañía  para profundizar en el diagnóstico y la solución de fallas. Participar en sesiones de transferencia de conocimiento y retroalimentación para identificar brechas operativas recurrentes.",
       "fecha": "2026-11-30"
      },
      {
       "competencia": "INNOVACION Y MEJORA CONTINUA",
       "objetivo": "Diseñar e implementar un sistema personal de gestión del tiempo y del entorno de trabajo que minimice las interrupciones, para optimizar la concentración y mejorar la eficiencia en la ejecución de tareas operativas.",
       "accion": "1. Estandarizar un protocolo de gestión de notificaciones e interrupciones (agrupar la revisión de correos/chats en horarios específicos).\n\n2. Evaluar semanalmente el nivel de cumplimiento del tiempo enfocado e identificar oportunidades de mejora en la rutina laboral.\n\n3.Monitorear semanalmente el cumplimiento de la agenda para ajustar y mejorar la distribución del tiempo.",
       "fecha": "2026-11-30"
      }
     ]
    }
   ]
  },
  {
   "CC": "1061435481",
   "NOMBRE": "Larry Fernando Gutierrez Viveros",
   "CARGO": "PROFESIONAL DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Gustavo Adolfo Galindo Gordillo, Jhon Jairo Preciado Ortiz",
   "COMP_AUTO": 4.75,
   "COMP_JEFE": 4.33,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.5,
   "PUNTAJE_POTENCIAL": 75.0,
   "PUNTAJE_DESEMPENO": 87.5,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Brindar atención técnica y posventa de alto nivel, generando confianza, fidelización y satisfacción en los clientes atendidos, fortaleciendo la imagen de KAIKA como aliado técnico confiable.",
     "peso": 30.0,
     "calificacion": 90.0,
     "pct": 90.0
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar el correcto diligenciamiento, archivo y control de los reportes técnicos, formatos de servicio, registros en sistemas internos y documentación asociada a repuestos, garantías y certificaciones.",
     "peso": 30.0,
     "calificacion": 95.0,
     "pct": 95.0
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar que las actividades de instalación, mantenimiento, diagnóstico y reparación de equipos se ejecuten bajo los más altos estándares técnicos, de calidad y seguridad, cumpliendo con los tiempos, normativas y procedimientos establecidos por KAIKA y los fabricantes.",
     "peso": 40.0,
     "calificacion": 80.0,
     "pct": 80.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.93
    },
    {
     "nombre": "ADAPTABILIDAD",
     "puntaje": 4.67
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.27
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.13
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 78.8,
   "COMPLETO": true,
   "REPORTA_A": "Gustavo Adolfo Galindo Gordillo, Jhon Jairo Preciado Ortiz",
   "CIUDAD": "Cali",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": []
  },
  {
   "CC": "1063294191",
   "NOMBRE": "Jacob David Caballero Contreras",
   "CARGO": "PROFESIONAL DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Diego Leon Castano Rios, Edison Alberto Castrillon Bedoya",
   "COMP_AUTO": 3.75,
   "COMP_JEFE": 3.67,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 3.7,
   "PUNTAJE_POTENCIAL": 61.7,
   "PUNTAJE_DESEMPENO": 82.0,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Brindar atención técnica y posventa de alto nivel, generando confianza, fidelización y satisfacción en los clientes atendidos, fortaleciendo la imagen de KAIKA como aliado técnico confiable.",
     "peso": 30.0,
     "calificacion": 7.0,
     "pct": 80.0
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar el correcto diligenciamiento, archivo y control de los reportes técnicos, formatos de servicio, registros en sistemas internos y documentación asociada a repuestos, garantías y certificaciones.",
     "peso": 30.0,
     "calificacion": 8.0,
     "pct": 80.0
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar que las actividades de instalación, mantenimiento, diagnóstico y reparación de equipos se ejecuten bajo los más altos estándares técnicos, de calidad y seguridad, cumpliendo con los tiempos, normativas y procedimientos establecidos por KAIKA y los fabricantes.",
     "peso": 40.0,
     "calificacion": 8.0,
     "pct": 85.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.03
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 3.77
    },
    {
     "nombre": "ADAPTABILIDAD",
     "puntaje": 3.67
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.33
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 67.8,
   "COMPLETO": true,
   "REPORTA_A": "Diego Leon Castano Rios, Edison Alberto Castrillon Bedoya",
   "CIUDAD": "Medellin",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Edison Alberto Castrillon Bedoya",
     "cc_evaluador": "1020401566",
     "rol": "Jefe",
     "aspectos": "Se resalta el compromiso desarrollado durante el último año en la ejecución de las actividades, ha mostrado evolución en la toma de decisiones e iniciativa que ayuda a la mejora de soporte técnico.",
     "recomendaciones": "Se tiene oportunidad de mejorar en el orden de las tareas administrativas, dando seguimiento a pendientes y ejecutando estas actividades en tiempos acordes.\nMejorar en la comunicación asertiva con los clientes internos y externos. \nDesarrollar el idioma ingles para optar por crecimiento profesional dentro de la compañía.",
     "fecha": "2026-09-18",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1065584731",
   "NOMBRE": "Maira Alejandra Valle Rodriguez",
   "CARGO": "ASISTENTE REGIONAL",
   "AREA": "Comercial",
   "JEFE": "Miguel Angel Bujato Bernal",
   "COMP_AUTO": 5.13,
   "COMP_JEFE": 4.67,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.85,
   "PUNTAJE_POTENCIAL": 80.9,
   "PUNTAJE_DESEMPENO": 97.0,
   "INDICADORES": [
    {
     "grupo": "ASISTENTE REGIONAL",
     "objetivo": "Asegurar el adecuado manejo de la documentación contable, facturación, caja menor, gastos y soporte financiero regional, talento humano,  garantizando trazabilidad, cumplimiento normativo y eficiencia en el flujo de información hacia la sede principal.",
     "peso": 35.0,
     "calificacion": 100.0,
     "pct": 100.0
    },
    {
     "grupo": "ASISTENTE REGIONAL",
     "objetivo": "Garantizar la adecuada planeación, disponibilidad y control de los recursos logísticos y operativos de la regional, optimizando costos y tiempos en coordinación con las áreas centrales.",
     "peso": 35.0,
     "calificacion": 100.0,
     "pct": 100.0
    },
    {
     "grupo": "ASISTENTE REGIONAL",
     "objetivo": "Respaldar la labor comercial regional mediante la gestión oportuna y organizada de cotizaciones, propuestas y procesos de licitación o subasta, garantizando la trazabilidad, cumplimiento de requisitos y tiempos de respuesta.",
     "peso": 30.0,
     "calificacion": 90.0,
     "pct": 90.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 5.13
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 5.0
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.87
    },
    {
     "nombre": "GESTION ESTRATEGICA DE LA INFORMACION Y TOMA DE DECISIONES",
     "puntaje": 4.8
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.47
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 85.7,
   "COMPLETO": true,
   "REPORTA_A": "Miguel Angel Bujato Bernal",
   "CIUDAD": "Barranquilla",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Miguel Angel Bujato Bernal",
     "cc_evaluador": "1129578858",
     "rol": "Jefe",
     "aspectos": "Resaltó el compromiso y la actitud con la que realiza sus labores diarias, lo que conlleva a cumplir con tiempo sus labores. Tambien resalto las ganas de aprender mas de los procesos que no se hacen en la sucursal y que requieren de su apoyo.",
     "recomendaciones": "Para mejorar, la redacción de los correos, revisar antes de enviar para detectar errores de ortografía y redacción.",
     "fecha": "2026-09-14",
     "acciones": [
      {
       "competencia": "INNOVACION Y MEJORA CONTINUA",
       "objetivo": "Mejora en la redacción de correos.",
       "accion": "Revisión de los mails antes de enviar, Detección de errores para corregir.",
       "fecha": "2026-10-14"
      }
     ]
    }
   ]
  },
  {
   "CC": "1069054793",
   "NOMBRE": "Johan Alberto Mahecha Sierra",
   "CARGO": "PROFESIONAL DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Libardo Barreto Valencia",
   "COMP_AUTO": null,
   "COMP_JEFE": 3.58,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "jefe": 100.0
   },
   "COMP_ESCALA6": 3.58,
   "PUNTAJE_POTENCIAL": 59.7,
   "PUNTAJE_DESEMPENO": 73.0,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Brindar atención técnica y posventa de alto nivel, generando confianza, fidelización y satisfacción en los clientes atendidos, fortaleciendo la imagen de KAIKA como aliado técnico confiable.",
     "peso": 30.0,
     "calificacion": 70.0,
     "pct": 70.0
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar el correcto diligenciamiento, archivo y control de los reportes técnicos, formatos de servicio, registros en sistemas internos y documentación asociada a repuestos, garantías y certificaciones.",
     "peso": 30.0,
     "calificacion": 80.0,
     "pct": 80.0
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar que las actividades de instalación, mantenimiento, diagnóstico y reparación de equipos se ejecuten bajo los más altos estándares técnicos, de calidad y seguridad, cumpliendo con los tiempos, normativas y procedimientos establecidos por KAIKA y los fabricantes.",
     "peso": 40.0,
     "calificacion": 70.0,
     "pct": 70.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.0
    },
    {
     "nombre": "ADAPTABILIDAD",
     "puntaje": 3.67
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.67
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 63.7,
   "COMPLETO": true,
   "REPORTA_A": "Libardo Barreto Valencia",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": []
  },
  {
   "CC": "1070954965",
   "NOMBRE": "Ivonne Alexandra Londono Monroy",
   "CARGO": "COORDINADOR CONTABLE E IMPUESTOS",
   "AREA": "Contabilidad",
   "JEFE": "Alexandra Bogoya Puentes",
   "COMP_AUTO": 4.65,
   "COMP_JEFE": 3.52,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 3.97,
   "PUNTAJE_POTENCIAL": 66.2,
   "PUNTAJE_DESEMPENO": 100.0,
   "INDICADORES": [
    {
     "grupo": "COORDINADORA CONTABLE E IMPUESTOS",
     "objetivo": "Asegurar la exactitud, integridad y oportunidad de la información contable y financiera de KAIKA, garantizando decisiones gerenciales basadas en datos confiables.",
     "peso": 60.0,
     "calificacion": 100.0,
     "pct": 100.0
    },
    {
     "grupo": "COORDINADORA CONTABLE E IMPUESTOS",
     "objetivo": "Garantizar la presentación y pago de todas las obligaciones tributarias nacionales, departamentales y municipales de forma oportuna, precisa y conforme a la normatividad vigente, evitando sanciones o intereses.",
     "peso": 40.0,
     "calificacion": 100.0,
     "pct": 100.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.24
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.0
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.93
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 3.8
    },
    {
     "nombre": "ORIENTACION A LA CALIDAD Y PRECISION",
     "puntaje": 3.0
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 76.3,
   "COMPLETO": true,
   "REPORTA_A": "Alexandra Bogoya Puentes",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Alexandra Bogoya Puentes",
     "cc_evaluador": "52552836",
     "rol": "Jefe",
     "aspectos": "Cumple con las actividades y responsabilidades asignadas dentro de su rol, demostrando compromiso con la ejecución de las tareas requeridas, tiene disposición para atender los requerimientos del área y dar continuidad a las actividades bajo su responsabilidad, responde a las necesidades operativas del área. Trabaja  muy bien en equipo, contribuyendo a un buen ambiente laboral,  es muy colaboradora con sus compañeros, se comunica de manera respetuosa, facilitando la coordinación con sus compañeros y demás áreas con las que interactúa.",
     "recomendaciones": "Aunque cumple con las actividades asignadas, requiere fortalecer la calidad y precisión de la información que entrega. Se han identificado errores recurrentes en cifras y datos que evidencian la necesidad de realizar una revisión y validación más rigurosa antes de presentar los informes. Esta situación genera devoluciones y reprocesos que impactan la eficiencia del equipo.\n\nComo oportunidad de mejora, se espera que incorpore mayores controles de revisión y validación de la información, fortaleciendo su atención al detalle y responsabilidad sobre la calidad del resultado final. El objetivo es disminuir progresivamente las inconsistencias y lograr que los informes sean entregados completos, confiables y con un mínimo de correcciones posteriores.",
     "fecha": "2026-10-07",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1070972583",
   "NOMBRE": "Angie Milena Bohorquez Chitiva",
   "CARGO": "COORDINADORA SEGURIDAD Y SALUD EN EL TRABAJO",
   "AREA": "Talento Humano",
   "JEFE": "Deisy Julieth Montanez Zuniga",
   "COMP_AUTO": 4.75,
   "COMP_JEFE": 4.31,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.48,
   "PUNTAJE_POTENCIAL": 74.7,
   "PUNTAJE_DESEMPENO": 90.0,
   "INDICADORES": [
    {
     "grupo": "COORDINADOR DE SST",
     "objetivo": "Asegurar la generación, análisis y reporte oportuno de información e indicadores del SG-SST para la toma de decisiones gerenciales.",
     "peso": 25.0,
     "calificacion": 100.0,
     "pct": 100.0
    },
    {
     "grupo": "COORDINADOR DE SST",
     "objetivo": "Asegurar la implementación, mantenimiento y mejora continua del SG-SST, cumpliendo con los estándares mínimos legales y con los requisitos del Sistema Integrado de Gestión de KAIKA.",
     "peso": 50.0,
     "calificacion": 85.0,
     "pct": 85.0
    },
    {
     "grupo": "COORDINADOR DE SST",
     "objetivo": "Implementar y mantener actualizada la identificación de peligros, evaluación y control de riesgos (IPER), priorizando la prevención de accidentes, incidentes y enfermedades laborales, para garantizar ambientes seguros en todas las operaciones de la compañía.",
     "peso": 25.0,
     "calificacion": 90.0,
     "pct": 90.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.8
    },
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 4.6
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.53
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 4.47
    },
    {
     "nombre": "GESTION DE RIESGO, CONTROL Y CUMPLIMIENTO",
     "puntaje": 4.4
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.4
    },
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 4.4
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.33
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 79.3,
   "COMPLETO": true,
   "REPORTA_A": "Deisy Julieth Montanez Zuniga",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Táctico",
   "FEEDBACK": [
    {
     "evaluador": "Deisy Julieth Montanez Zuniga",
     "cc_evaluador": "1024483719",
     "rol": "Jefe",
     "aspectos": "Proactividad - Capacidad de trabajar en equipo - El buen uso del manejo del tiempo - Expresas sus ideas con sencillez y escuchas a los demás para evitar confusiones - La facilidad para inventar soluciones originales o generar ideas novedosas (creatividad) - Ponerse en el lugar ajeno y sintonizar con su dolor o alegría - Responsabilidad.",
     "recomendaciones": "Analizar incapacidades, accidentes y ausencias recurrentes para identificar tendencias (entregar un análisis trimestral) - Implementar seguimiento a riesgos de desplazamiento, conducción para el personal de ventas y soporte técnico - Control con el manejo de contratistas y proveedores: Verificar requisitos SST, documentación, afiliaciones y cumplimiento de normas de seguridad. - \nCrear campañas para fortalecer el reporte de condiciones inseguras, autocuidado y participación de los colaboradores - Implementar estrategias que conlleven a la participación de los miembros de los comités.",
     "fecha": "2026-09-29",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1075667227",
   "NOMBRE": "Jenny Carolina Osorio Suarez",
   "CARGO": "PROFESIONAL DE CONTROL DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "",
   "COMP_AUTO": null,
   "COMP_JEFE": null,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {},
   "COMP_ESCALA6": null,
   "PUNTAJE_POTENCIAL": null,
   "PUNTAJE_DESEMPENO": null,
   "INDICADORES": [],
   "COMPETENCIAS": [],
   "FOTO": "",
   "NOTA_FINAL": null,
   "COMPLETO": false,
   "REPORTA_A": "",
   "FEEDBACK": []
  },
  {
   "CC": "1075684206",
   "NOMBRE": "Camila Andrea Vargas Pulido",
   "CARGO": "COORDINADOR (A) DE SOPORTE TÉCNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Adalberto Fabre Parada",
   "COMP_AUTO": 4.42,
   "COMP_JEFE": 3.22,
   "COMP_COLAB": 5.06,
   "N_COLAB": 2,
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA6": 4.01,
   "PUNTAJE_POTENCIAL": 66.9,
   "PUNTAJE_DESEMPENO": 80.0,
   "INDICADORES": [
    {
     "grupo": "COORDINADOR DE SOPORTE TECNICO",
     "objetivo": "Asegurar la correcta ejecución de los servicios técnicos (instalaciones, mantenimientos,  reparaciones y garantías), cumpliendo con los estándares técnicos y de calidad definidos por KAIKA y las marcas representadas.",
     "peso": 50.0,
     "calificacion": 80.0,
     "pct": 80.0
    },
    {
     "grupo": "COORDINADOR DE SOPORTE TECNICO",
     "objetivo": "Fortalecer las capacidades técnicas del equipo asignado mediante la transferencia de conocimiento, acompañamiento y seguimiento a capacitaciones impartidas por fábrica o KAIKA a nivel nacional.",
     "peso": 25.0,
     "calificacion": 80.0,
     "pct": 80.0
    },
    {
     "grupo": "COORDINADOR DE SOPORTE TECNICO",
     "objetivo": "Garantizar la correcta gestión y ejecución de garantías técnicas, asegurando una atención oportuna, rentable y conforme a los estándares del fabricante.",
     "peso": 25.0,
     "calificacion": 80.0,
     "pct": 80.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 4.7
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.7
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.3
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.03
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.83
    },
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 3.83
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 3.73
    },
    {
     "nombre": "VISION ESTRATEGICA Y PENSAMIENTO ORGANIZACIONAL",
     "puntaje": 3.2
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 70.8,
   "COMPLETO": true,
   "REPORTA_A": "Adalberto Fabre Parada",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Táctico",
   "FEEDBACK": [
    {
     "evaluador": "Adalberto Fabre Parada",
     "cc_evaluador": "91283555",
     "rol": "Jefe",
     "aspectos": "Cumplimiento oportuno de actividades, Compromiso con la compañia, adaptacion al cambio y nuevas resonsabilidades, orden, gestion de actividades, puntualidad. Capacidad de trabajar de manera conjunta con sus compañeras contribuyendo asi a la integracion del equipo y el desarrrollo efectivo de actividades.",
     "recomendaciones": "Fortalecer: las actividades propias del cargo, planificacion de actividades del equipo de trabajo, comunicacion y servicio al cliente, trabajo bajo presion.",
     "fecha": "2026-10-22",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1094902746",
   "NOMBRE": "Carol Daihana Yusti Romero",
   "CARGO": "ASESOR COMERCIAL",
   "AREA": "Comercial",
   "JEFE": "Alejandro Donado Rojas, Diego Harley Gutierrez Laverde, Edwin Andres Abril Lucero, Rosemary Cortes Gonzalez",
   "COMP_AUTO": 3.33,
   "COMP_JEFE": 3.78,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 3.6,
   "PUNTAJE_POTENCIAL": 60.0,
   "PUNTAJE_DESEMPENO": 50.2,
   "INDICADORES": [
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de promoción y  seguimiento a clientes clave, asegurando la alineación de las soluciones ofrecidas con sus necesidades técnicas y de servicio y sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 25.0,
     "calificacion": 25.0,
     "pct": 56.2
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de ventas asignada, garantizando la  sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 50.0,
     "calificacion": 25.0,
     "pct": 46.8
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Monitorear el comportamiento del mercado, la competencia, los precios y las tendencias, entregando información útil para la toma de decisiones estratégicas.",
     "peso": 25.0,
     "calificacion": 25.0,
     "pct": 51.2
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "GESTION DE RELACIONES Y EXPERIENCIA ORGANIZACIONAL",
     "puntaje": 4.03
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.0
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.77
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.48
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 3.45
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 57.1,
   "COMPLETO": true,
   "REPORTA_A": "Alejandro Donado Rojas, Diego Harley Gutierrez Laverde, Edwin Andres Abril Lucero, Rosemary Cortes Gonzalez",
   "CIUDAD": "Bucaramanga",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Edwin Andres Abril Lucero",
     "cc_evaluador": "80039672",
     "rol": "Jefe",
     "aspectos": "Se destaca por su compromiso y responsabilidad en el cumplimiento de sus funciones, manteniendo una actitud positiva",
     "recomendaciones": "Mantener una actitud de servicio y disposición frente a clientes internos y externos,",
     "fecha": "2026-09-28",
     "acciones": [
      {
       "competencia": "APRENDIZAJE CONTINUO",
       "objetivo": "Promover el aprendizaje y desarrollo permanente del colaborador mediante la actualización de conocimientos y el fortalecimiento de habilidades que contribuyan a mejorar su desempeño y afrontar nuevos retos profesionales.",
       "accion": "Participar en al menos 2 actividades de formación y aplicar los conocimientos adquiridos en mínimo una mejora concreta relacionada con sus funciones.",
       "fecha": "2026-11-30"
      }
     ]
    }
   ]
  },
  {
   "CC": "1094913575",
   "NOMBRE": "Leidy Caterine Yusti Romero",
   "CARGO": "RESPONSABLE DE FACTURACION",
   "AREA": "Administrativo",
   "JEFE": "Sandra Patricia Rodriguez Cortes",
   "COMP_AUTO": 3.87,
   "COMP_JEFE": 3.93,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 3.91,
   "PUNTAJE_POTENCIAL": 65.1,
   "PUNTAJE_DESEMPENO": 90.5,
   "INDICADORES": [
    {
     "grupo": "RESPONSABLE DE FACTURACION",
     "objetivo": "Asegurar la correcta validación, integración y carga de la información de facturación, contribuyendo a la exactitud contable y confiabilidad en los reportes financieros.",
     "peso": 25.0,
     "calificacion": 90.0,
     "pct": 90.0
    },
    {
     "grupo": "RESPONSABLE DE FACTURACION",
     "objetivo": "Garantizar la facturación correcta, completa y oportuna de todos los servicios y productos, contribuyendo al flujo de caja, ventas y satisfacción de los clientes.",
     "peso": 40.0,
     "calificacion": 100.0,
     "pct": 100.0
    },
    {
     "grupo": "RESPONSABLE DE FACTURACION",
     "objetivo": "Garantizar la satisfacción del cliente interno y externo en los procesos de facturación",
     "peso": 35.0,
     "calificacion": 80.0,
     "pct": 80.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.6
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.0
    },
    {
     "nombre": "VISION ESTRATEGICA Y PENSAMIENTO ORGANIZACIONAL",
     "puntaje": 4.0
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.8
    },
    {
     "nombre": "GESTION DE RELACIONES Y EXPERIENCIA ORGANIZACIONAL",
     "puntaje": 3.13
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 72.7,
   "COMPLETO": true,
   "REPORTA_A": "Sandra Patricia Rodriguez Cortes",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Sandra Patricia Rodriguez Cortes",
     "cc_evaluador": "52249658",
     "rol": "Jefe",
     "aspectos": "Reacciona muy bien a los llamados de atención u observaciones haciéndolo de forma positiva y aportando. Ha cumplido cabalmente con las solicitudes de la directora nacional de ventas, mientras se daban los cambios del cargo de Business inteligence y ha hecho aportes importantes a la mejora del proceso de facturación y recibos de caja haciendo cuadros de control y verificaciones de información.  En el control de sagrilaft aun hay todavía oportunidad de mejora, pero este año hemos tenido un filtro importante desde facturación para cumplir este requisito.    Creo un dash board para visualizar la información de sus KPI, genero la base de datos y actualmente reporta las fallas con el fin de determinar dónde y quien afecta el proceso para buscar implementaciones de cambio que los eviten y así disminuir el tiempo invertido en correcciones, notas crédito, retrasos en pagos.  Creo una comunicación informativa para el área comercial y de soporte con el fin de recordar algunos criterios y códigos que deben tener en cuenta al momento de facturar para evitar reprocesos, revisada conjuntamente con contabilidad y será enviada a mas tardar mañana 18 de septiembre.",
     "recomendaciones": "En sagrilaft hay una oportunidad de mejora en las comunicaciones de los incumplimientos al requisito por parte de ventas y soporte, para que los Líderes de área estén informados y ayuden a presionar.  Falta llevar un indicador sobre las facturas que sí cumplen y las que no para tener certeza de que estemos siempre al 100%. Tenemos un compromiso con la junta de cumplir este requisito, por lo cual deben generar este control con Nicol e Ivonnette y garantizarlo para diciembre 31, todas los clientes a los que se han facturado deben tenerlo. Hay una oportunidad de mejora en los análisis de los KPI, aun no hay nada frente a la información reportada.  En estos KPI es importante separar el motivo de \" error en radicación\" de los demás porque hemos detectado que es muy frecuente. Hay que poner mas detallada la información en siesa sobre el motivo de la nota crédito y el numero de factura que se anulo, podemos identificar que UN genera mas notas y cual fue el valor de cada uno para mostrar el impacto en el flujo de caja.  En las notas crédito de enero y febrero de cada año, debemos identificar cuales facturas fueron generadas por solicitud de el empresa(facturación metas, entregas, espacio bodega) y cuales el empleado incluye solo para cumplir meta sabiendo que no será recibida por el cliente. Identificar los motivos con (i) de interno o (c) de cliente.  Hay una oportunidad de mejora en recibos de caja en KPI medir semanalmente numero de RC / numero de pagos reportados e identificados para llevar un control interno del proceso y mensual para que la cartera al corte este actualizada.  Los KPI de facturación están en desarrollo con el área de business inteligence de ventas, ellos, los manejaran a partir del 1 de octubre.( definir con Claudia).  Es importante que trabaje en la revisión al detalle en los informes que pasa a la Gerencia, DNV, o en general que deba compartir. La automatización va a ayudar de forma importante a que esto no pase, pero los reportes que aun se manejan manualmente deben garantizar una información confiable.",
     "fecha": "2026-09-17",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1096241425",
   "NOMBRE": "Dairo Florez Zapata",
   "CARGO": "PROFESIONAL DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Leidy Viviana Ramirez Suarez",
   "COMP_AUTO": 4.17,
   "COMP_JEFE": 3.33,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 3.67,
   "PUNTAJE_POTENCIAL": 61.1,
   "PUNTAJE_DESEMPENO": null,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Brindar atención técnica y posventa de alto nivel, generando confianza, fidelización y satisfacción en los clientes atendidos, fortaleciendo la imagen de KAIKA como aliado técnico confiable.",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar el correcto diligenciamiento, archivo y control de los reportes técnicos, formatos de servicio, registros en sistemas internos y documentación asociada a repuestos, garantías y certificaciones.",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar que las actividades de instalación, mantenimiento, diagnóstico y reparación de equipos se ejecuten bajo los más altos estándares técnicos, de calidad y seguridad, cumpliendo con los tiempos, normativas y procedimientos establecidos por KAIKA y los fabricantes.",
     "peso": 40.0,
     "calificacion": null,
     "pct": null
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.0
    },
    {
     "nombre": "ADAPTABILIDAD",
     "puntaje": 3.73
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.6
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.33
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": null,
   "COMPLETO": false,
   "REPORTA_A": "Leidy Viviana Ramirez Suarez",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Leidy Viviana Ramirez Suarez",
     "cc_evaluador": "1014222723",
     "rol": "Jefe",
     "aspectos": "Fortalezas: Ha demostrado compromiso, responsabilidad y disposición en las actividades designadas. Se adapta a las necesidades de los servicios y se dispone de buena actitud para adquirir nuevos conocimientos.",
     "recomendaciones": "Se recomienda hacer un uso adecuado de las herramientas informáticas con el fin de facilitar y agilizar las tareas diarias. Asimismo, se invita al colaborador a participar activamente en la implementación de los nuevos procedimientos y herramientas dentro de Kaika, y se le motiva a dar continuidad a sus estudios de nivel profesional.",
     "fecha": "2026-10-23",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1098721553",
   "NOMBRE": "Juan Jairo Londono Vargas",
   "CARGO": "PROFESIONAL DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Libardo Barreto Valencia",
   "COMP_AUTO": 4.17,
   "COMP_JEFE": 4.0,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.07,
   "PUNTAJE_POTENCIAL": 67.8,
   "PUNTAJE_DESEMPENO": 90.0,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Brindar atención técnica y posventa de alto nivel, generando confianza, fidelización y satisfacción en los clientes atendidos, fortaleciendo la imagen de KAIKA como aliado técnico confiable.",
     "peso": 30.0,
     "calificacion": 90.0,
     "pct": 90.0
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar el correcto diligenciamiento, archivo y control de los reportes técnicos, formatos de servicio, registros en sistemas internos y documentación asociada a repuestos, garantías y certificaciones.",
     "peso": 30.0,
     "calificacion": 90.0,
     "pct": 90.0
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar que las actividades de instalación, mantenimiento, diagnóstico y reparación de equipos se ejecuten bajo los más altos estándares técnicos, de calidad y seguridad, cumpliendo con los tiempos, normativas y procedimientos establecidos por KAIKA y los fabricantes.",
     "peso": 40.0,
     "calificacion": 90.0,
     "pct": 90.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.27
    },
    {
     "nombre": "ADAPTABILIDAD",
     "puntaje": 4.13
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.0
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.87
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 74.4,
   "COMPLETO": true,
   "REPORTA_A": "Libardo Barreto Valencia",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": []
  },
  {
   "CC": "1098735091",
   "NOMBRE": "Yeferson Leonardo Calderon Rodriguez",
   "CARGO": "PROFESIONAL DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Alejandro Donado Rojas",
   "COMP_AUTO": 4.42,
   "COMP_JEFE": 2.92,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 3.52,
   "PUNTAJE_POTENCIAL": 58.6,
   "PUNTAJE_DESEMPENO": 75.0,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Brindar atención técnica y posventa de alto nivel, generando confianza, fidelización y satisfacción en los clientes atendidos, fortaleciendo la imagen de KAIKA como aliado técnico confiable.",
     "peso": 30.0,
     "calificacion": 70.0,
     "pct": 70.0
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar el correcto diligenciamiento, archivo y control de los reportes técnicos, formatos de servicio, registros en sistemas internos y documentación asociada a repuestos, garantías y certificaciones.",
     "peso": 30.0,
     "calificacion": 60.0,
     "pct": 60.0
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar que las actividades de instalación, mantenimiento, diagnóstico y reparación de equipos se ejecuten bajo los más altos estándares técnicos, de calidad y seguridad, cumpliendo con los tiempos, normativas y procedimientos establecidos por KAIKA y los fabricantes.",
     "peso": 40.0,
     "calificacion": 90.0,
     "pct": 90.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ADAPTABILIDAD",
     "puntaje": 4.2
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.73
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.53
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 2.6
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 63.5,
   "COMPLETO": true,
   "REPORTA_A": "Alejandro Donado Rojas",
   "CIUDAD": "Bucaramanga",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": []
  },
  {
   "CC": "1098746903",
   "NOMBRE": "Diego Miguel Vesga Gomez",
   "CARGO": "ASESOR COMERCIAL",
   "AREA": "Comercial",
   "JEFE": "Diego Harley Gutierrez Laverde, Edwin Andres Abril Lucero, Rosemary Cortes Gonzalez",
   "COMP_AUTO": 5.17,
   "COMP_JEFE": 3.33,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.07,
   "PUNTAJE_POTENCIAL": 67.8,
   "PUNTAJE_DESEMPENO": 57.0,
   "INDICADORES": [
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de promoción y  seguimiento a clientes clave, asegurando la alineación de las soluciones ofrecidas con sus necesidades técnicas y de servicio y sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 25.0,
     "calificacion": 25.0,
     "pct": 58.3
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de ventas asignada, garantizando la  sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 50.0,
     "calificacion": 25.0,
     "pct": 59.0
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Monitorear el comportamiento del mercado, la competencia, los precios y las tendencias, entregando información útil para la toma de decisiones estratégicas.",
     "peso": 25.0,
     "calificacion": 25.0,
     "pct": 51.7
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.13
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.13
    },
    {
     "nombre": "GESTION DE RELACIONES Y EXPERIENCIA ORGANIZACIONAL",
     "puntaje": 4.0
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.93
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.8
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 64.5,
   "COMPLETO": true,
   "REPORTA_A": "Diego Harley Gutierrez Laverde, Edwin Andres Abril Lucero, Rosemary Cortes Gonzalez",
   "CIUDAD": "Bogotá",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Edwin Andres Abril Lucero",
     "cc_evaluador": "80039672",
     "rol": "Jefe",
     "aspectos": "Se destaca por su compromiso en el cumplimiento de sus funciones, manteniendo una actitud positiva. Demuestra buen relacionamiento con sus compañeros y una comunicación respetuosa y efectiva. Es importante que continúe fortaleciendo estas cualidades, así como su iniciativa y disposición para asumir nuevos retos.",
     "recomendaciones": "Fortalecer la planificación y organización de sus actividades, priorizando oportunamente las tareas y realizando seguimiento a los compromisos, con el fin de mejorar aún más la eficiencia y el cumplimiento de los objetivos.",
     "fecha": "2026-09-27",
     "acciones": [
      {
       "competencia": "INNOVACION Y MEJORA CONTINUA",
       "objetivo": "Promover una cultura de innovación y mejora continua mediante la identificación e implementación de oportunidades que permitan optimizar procesos y generar mayor valor para la organización.",
       "accion": "Identificar oportunidades de mejora, proponer soluciones innovadoras, participar en la implementación de iniciativas, hacer seguimiento a los resultados.",
       "fecha": "2026-11-30"
      }
     ]
    }
   ]
  },
  {
   "CC": "1113642303",
   "NOMBRE": "Juan Fernando Daza Fernandez",
   "CARGO": "PROFESIONAL DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Gustavo Adolfo Galindo Gordillo, Jhon Jairo Preciado Ortiz",
   "COMP_AUTO": 4.25,
   "COMP_JEFE": 4.75,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.55,
   "PUNTAJE_POTENCIAL": 75.8,
   "PUNTAJE_DESEMPENO": 95.5,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Brindar atención técnica y posventa de alto nivel, generando confianza, fidelización y satisfacción en los clientes atendidos, fortaleciendo la imagen de KAIKA como aliado técnico confiable.",
     "peso": 30.0,
     "calificacion": 90.0,
     "pct": 90.0
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar el correcto diligenciamiento, archivo y control de los reportes técnicos, formatos de servicio, registros en sistemas internos y documentación asociada a repuestos, garantías y certificaciones.",
     "peso": 30.0,
     "calificacion": 95.0,
     "pct": 95.0
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar que las actividades de instalación, mantenimiento, diagnóstico y reparación de equipos se ejecuten bajo los más altos estándares técnicos, de calidad y seguridad, cumpliendo con los tiempos, normativas y procedimientos establecidos por KAIKA y los fabricantes.",
     "peso": 40.0,
     "calificacion": 100.0,
     "pct": 100.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.87
    },
    {
     "nombre": "ADAPTABILIDAD",
     "puntaje": 4.6
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.6
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.13
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 81.7,
   "COMPLETO": true,
   "REPORTA_A": "Gustavo Adolfo Galindo Gordillo, Jhon Jairo Preciado Ortiz",
   "CIUDAD": "Cali",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Gustavo Adolfo Galindo Gordillo",
     "cc_evaluador": "1144139127",
     "rol": "Jefe",
     "aspectos": "- Compañerismo. \n- Trabajo en equipo.\n- Puntualidad.\n- Respeto. \n- Resolucion de Problemas",
     "recomendaciones": "Estar mas atento del cliente despues de una revision.",
     "fecha": "2026-09-11",
     "acciones": [
      {
       "competencia": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
       "objetivo": "REALIZAR SEGUIMIENTO A TODOS LOS CLIENTES",
       "accion": "REALIZAR LLAMADAS O ENVIO DE MENSAJES DESPUES DEL SERVICIO.",
       "fecha": "2026-12-11"
      }
     ]
    }
   ]
  },
  {
   "CC": "1128449796",
   "NOMBRE": "Boris Adolfo Guerra Chalarca",
   "CARGO": "PROFESIONAL DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Diego Leon Castano Rios, Edison Alberto Castrillon Bedoya",
   "COMP_AUTO": 4.92,
   "COMP_JEFE": 4.29,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.54,
   "PUNTAJE_POTENCIAL": 75.7,
   "PUNTAJE_DESEMPENO": 93.5,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Brindar atención técnica y posventa de alto nivel, generando confianza, fidelización y satisfacción en los clientes atendidos, fortaleciendo la imagen de KAIKA como aliado técnico confiable.",
     "peso": 30.0,
     "calificacion": 100.0,
     "pct": 95.0
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar el correcto diligenciamiento, archivo y control de los reportes técnicos, formatos de servicio, registros en sistemas internos y documentación asociada a repuestos, garantías y certificaciones.",
     "peso": 30.0,
     "calificacion": 90.0,
     "pct": 90.0
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar que las actividades de instalación, mantenimiento, diagnóstico y reparación de equipos se ejecuten bajo los más altos estándares técnicos, de calidad y seguridad, cumpliendo con los tiempos, normativas y procedimientos establecidos por KAIKA y los fabricantes.",
     "peso": 40.0,
     "calificacion": 100.0,
     "pct": 95.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ADAPTABILIDAD",
     "puntaje": 4.7
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.7
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.5
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.27
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 81.0,
   "COMPLETO": true,
   "REPORTA_A": "Diego Leon Castano Rios, Edison Alberto Castrillon Bedoya",
   "CIUDAD": "Medellin",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Edison Alberto Castrillon Bedoya",
     "cc_evaluador": "1020401566",
     "rol": "Jefe",
     "aspectos": "Se resalta el compromiso, empeño y dedicación que tiene para la ejecución de las tareas de campo. \nSiempre muestra capacidad comunicativa con los clientes y transmite confianza a los mismos en las labores ejecutadas.",
     "recomendaciones": "Se recomienda el aprendizaje del idioma ingles para optar a nuevas oportunidades de capacitación en la compañía. \nDesarrollar actitudes que le permitan perfilarse como un líder dentro de la compañía.",
     "fecha": "2026-09-18",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1129578858",
   "NOMBRE": "Miguel Angel Bujato Bernal",
   "CARGO": "GERENTE REGIONAL",
   "AREA": "Comercial",
   "JEFE": "Claudia Marcela Osorio Borda",
   "COMP_AUTO": 4.5,
   "COMP_JEFE": 3.82,
   "COMP_COLAB": 4.82,
   "N_COLAB": 4,
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA6": 4.26,
   "PUNTAJE_POTENCIAL": 71.0,
   "PUNTAJE_DESEMPENO": 63.0,
   "INDICADORES": [
    {
     "grupo": "GERENTE REGIONAL",
     "objetivo": "Asegurar el cumplimiento de los objetivos comerciales y de crecimiento regional",
     "peso": 40.0,
     "calificacion": 6.0,
     "pct": 60.0
    },
    {
     "grupo": "GERENTE REGIONAL",
     "objetivo": "Fortalecer la gestión de cotizaciones y propuestas comerciales",
     "peso": 30.0,
     "calificacion": 7.0,
     "pct": 70.0
    },
    {
     "grupo": "GERENTE REGIONAL",
     "objetivo": "Garantizar la eficiencia y rentabilidad de las operaciones regionales",
     "peso": 20.0,
     "calificacion": 6.0,
     "pct": 60.0
    },
    {
     "grupo": "GERENTE REGIONAL",
     "objetivo": "Supervisar y controlar la gestión de licitaciones y subastas regionales",
     "peso": 10.0,
     "calificacion": 6.0,
     "pct": 60.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.67
    },
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 4.47
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.43
    },
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 4.28
    },
    {
     "nombre": "VISION ESTRATEGICA Y PENSAMIENTO ORGANIZACIONAL",
     "puntaje": 4.21
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.12
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 4.1
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.1
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 68.6,
   "COMPLETO": true,
   "REPORTA_A": "Claudia Marcela Osorio Borda",
   "CIUDAD": "Barranquilla",
   "NIVEL_CARGO": "Directivo",
   "FEEDBACK": []
  },
  {
   "CC": "1130630994",
   "NOMBRE": "Kelly Stephany Rodriguez Acosta",
   "CARGO": "ASISTENTE COMERCIAL",
   "AREA": "Comercial",
   "JEFE": "Jhon Jairo Preciado Ortiz",
   "COMP_AUTO": 4.0,
   "COMP_JEFE": 3.9,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 3.94,
   "PUNTAJE_POTENCIAL": 65.7,
   "PUNTAJE_DESEMPENO": 0.0,
   "INDICADORES": [
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de promoción y  seguimiento a clientes clave, asegurando la alineación de las soluciones ofrecidas con sus necesidades técnicas y de servicio y sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 25.0,
     "calificacion": 0.0,
     "pct": 0.0
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de ventas asignada, garantizando la  sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 50.0,
     "calificacion": 0.0,
     "pct": 0.0
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Monitorear el comportamiento del mercado, la competencia, los precios y las tendencias, entregando información útil para la toma de decisiones estratégicas.",
     "peso": 25.0,
     "calificacion": 0.0,
     "pct": 0.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.2
    },
    {
     "nombre": "GESTION ESTRATEGICA DE LA INFORMACION Y TOMA DE DECISIONES",
     "puntaje": 4.0
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.0
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 3.93
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.47
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 46.0,
   "COMPLETO": true,
   "REPORTA_A": "Jhon Jairo Preciado Ortiz",
   "CIUDAD": "Cali",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": []
  },
  {
   "CC": "1130666207",
   "NOMBRE": "Juan David Sanz Franco",
   "CARGO": "ASESOR COMERCIAL",
   "AREA": "Comercial",
   "JEFE": "Diego Harley Gutierrez Laverde, Edwin Andres Abril Lucero, Jhon Jairo Preciado Ortiz, Rosemary Cortes Gonzalez",
   "COMP_AUTO": 4.7,
   "COMP_JEFE": 3.61,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.04,
   "PUNTAJE_POTENCIAL": 67.4,
   "PUNTAJE_DESEMPENO": 65.4,
   "INDICADORES": [
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de promoción y  seguimiento a clientes clave, asegurando la alineación de las soluciones ofrecidas con sus necesidades técnicas y de servicio y sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 25.0,
     "calificacion": 80.0,
     "pct": 63.8
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de ventas asignada, garantizando la  sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 50.0,
     "calificacion": 80.0,
     "pct": 65.8
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Monitorear el comportamiento del mercado, la competencia, los precios y las tendencias, entregando información útil para la toma de decisiones estratégicas.",
     "peso": 25.0,
     "calificacion": 100.0,
     "pct": 66.2
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.43
    },
    {
     "nombre": "GESTION DE RELACIONES Y EXPERIENCIA ORGANIZACIONAL",
     "puntaje": 4.3
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.02
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.88
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.73
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 66.8,
   "COMPLETO": true,
   "REPORTA_A": "Diego Harley Gutierrez Laverde, Edwin Andres Abril Lucero, Jhon Jairo Preciado Ortiz, Rosemary Cortes Gonzalez",
   "CIUDAD": "Cali",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Jhon Jairo Preciado Ortiz",
     "cc_evaluador": "94510530",
     "rol": "Jefe",
     "aspectos": "la invitación esa seguir con el acompañamiento continua a los clientes, con el mismo compromiso, entrega, atención y colaboración que te ha destacado frente a los clientes de laboratorio e industria",
     "recomendaciones": "te recomiendo comunicar a todo el personal que tiene relación con los clientes los problemas, fallas, recomendaciones o sugerencias que se tengan o se presenten con los equipos para poder dar una solución integral y asertiva al cliente, programar y coordinar mejor las entregas de los equipos de manera que no se presenten inconveniente o inconformidades con los clientes, en general mejorar la comunicación.",
     "fecha": "2026-09-09",
     "acciones": [
      {
       "competencia": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
       "objetivo": "elevar los resultados en las ventas",
       "accion": "incrementar el numero de visitas semanales a las ciudades intermedias y ha entidades no afectadas por el terremoto",
       "fecha": "2026-10-15"
      }
     ]
    },
    {
     "evaluador": "Edwin Andres Abril Lucero",
     "cc_evaluador": "80039672",
     "rol": "Jefe",
     "aspectos": "Se destaca por su compromiso y responsabilidad en el cumplimiento de sus funciones, manteniendo una actitud positiva",
     "recomendaciones": "Fortalecer la planificación y organización de sus actividades, priorizando oportunamente las tareas y realizando seguimiento a los compromisos adquiridos",
     "fecha": "2026-09-27",
     "acciones": [
      {
       "competencia": "INNOVACION Y MEJORA CONTINUA",
       "objetivo": "Promover una cultura de innovación y mejora continua mediante la identificación e implementación de oportunidades que permitan optimizar procesos",
       "accion": "Identificar oportunidades de mejora, proponer soluciones innovadoras, participar en la implementación de iniciativas, hacer seguimiento a los resultados",
       "fecha": "2026-11-30"
      }
     ]
    }
   ]
  },
  {
   "CC": "1140854444",
   "NOMBRE": "Greys Margarita Rueda Fernandez",
   "CARGO": "ASESOR COMERCIAL",
   "AREA": "Comercial",
   "JEFE": "Melissa Grossich Alfaro, Miguel Angel Bujato Bernal",
   "COMP_AUTO": 4.0,
   "COMP_JEFE": 4.27,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.16,
   "PUNTAJE_POTENCIAL": 69.3,
   "PUNTAJE_DESEMPENO": 76.2,
   "INDICADORES": [
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de promoción y  seguimiento a clientes clave, asegurando la alineación de las soluciones ofrecidas con sus necesidades técnicas y de servicio y sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 25.0,
     "calificacion": 80.0,
     "pct": 80.0
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de ventas asignada, garantizando la  sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 50.0,
     "calificacion": 80.0,
     "pct": 75.0
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Monitorear el comportamiento del mercado, la competencia, los precios y las tendencias, entregando información útil para la toma de decisiones estratégicas.",
     "peso": 25.0,
     "calificacion": 80.0,
     "pct": 75.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.3
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.2
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.2
    },
    {
     "nombre": "GESTION DE RELACIONES Y EXPERIENCIA ORGANIZACIONAL",
     "puntaje": 4.0
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.9
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 71.4,
   "COMPLETO": true,
   "REPORTA_A": "Melissa Grossich Alfaro, Miguel Angel Bujato Bernal",
   "CIUDAD": "Barranquilla",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Miguel Angel Bujato Bernal",
     "cc_evaluador": "1129578858",
     "rol": "Jefe",
     "aspectos": "Resaltó su gran labor en trabajo de campo, influyendo en los clientes para que adquieran nuestros productos, Resalto también el compromiso para lograr los objetivos y metas propuestos",
     "recomendaciones": "Como oportunidad de mejora, fortalecer la organización del trabajo administrativo y el seguimiento a las oportunidades de negocio.",
     "fecha": "2026-09-14",
     "acciones": []
    },
    {
     "evaluador": "Melissa Grossich Alfaro",
     "cc_evaluador": "52702269",
     "rol": "Jefe",
     "aspectos": "Valoro su esfuerzo, constancia y buena actitud frente a los retos. Es receptivo, comprometido y mantiene buenas relaciones con clientes y equipo, una base sólida para seguir avanzando hacia sus metas.",
     "recomendaciones": "Recomiendo enfocar su esfuerzo en las oportunidades de mayor impacto, priorizando clientes y cirujanos con mayor potencial. Es importante fortalecer la planeación de su gestión comercial, el seguimiento a sus cifras y el cierre de negociaciones, para que su dedicación se traduzca en el cumplimiento de sus metas.\"",
     "fecha": "2026-10-02",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1143134259",
   "NOMBRE": "Luis Miguel Ferrer Santana",
   "CARGO": "PROFESIONAL DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Angelly Del Rebolledo Ortega, Miguel Angel Bujato Bernal",
   "COMP_AUTO": 4.75,
   "COMP_JEFE": 4.42,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.55,
   "PUNTAJE_POTENCIAL": 75.8,
   "PUNTAJE_DESEMPENO": 91.5,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Brindar atención técnica y posventa de alto nivel, generando confianza, fidelización y satisfacción en los clientes atendidos, fortaleciendo la imagen de KAIKA como aliado técnico confiable.",
     "peso": 30.0,
     "calificacion": 90.0,
     "pct": 95.0
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar el correcto diligenciamiento, archivo y control de los reportes técnicos, formatos de servicio, registros en sistemas internos y documentación asociada a repuestos, garantías y certificaciones.",
     "peso": 30.0,
     "calificacion": 90.0,
     "pct": 90.0
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar que las actividades de instalación, mantenimiento, diagnóstico y reparación de equipos se ejecuten bajo los más altos estándares técnicos, de calidad y seguridad, cumpliendo con los tiempos, normativas y procedimientos establecidos por KAIKA y los fabricantes.",
     "peso": 40.0,
     "calificacion": 90.0,
     "pct": 90.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ADAPTABILIDAD",
     "puntaje": 4.93
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.7
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.43
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.13
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 80.5,
   "COMPLETO": true,
   "REPORTA_A": "Angelly Del Rebolledo Ortega, Miguel Angel Bujato Bernal",
   "CIUDAD": "Barranquilla",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Angelly Del Rebolledo Ortega",
     "cc_evaluador": "1143447513",
     "rol": "Jefe",
     "aspectos": "Disposición para el trabajo en equipo y el apoyo a los compañeros, contribuyendo al cumplimiento de las actividades del área. Resalto su puntualidad y compromiso con las responsabilidades asignadas, así como su participación en diferentes roles y actividades administrativas, demostrando disposición para asumir responsabilidades adicionales a las propias de su función técnica. En determinadas situaciones evidencia proactividad e iniciativa para atender las necesidades del proceso.",
     "recomendaciones": "Fortalecer su motivación e iniciativa frente a las actividades del día a día, buscando una participación más constante y propositiva. Asimismo, es importante trabajar en la forma de abordar y comunicarse con los clientes, procurando generar interacciones más empáticas, asertivas y orientadas a la solución. De igual manera, se identifica la oportunidad de desarrollar una visión más analítica y preventiva frente a las situaciones presentadas. No limitarse únicamente a resolver o documentar lo ocurrido, sino procurar identificar las causas, posibles recurrencias y oportunidades de mejora.",
     "fecha": "2026-09-10",
     "acciones": [
      {
       "competencia": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
       "objetivo": "Fortalecer las habilidades de comunicación y orientación al cliente, desarrollando un enfoque más proactivo que permita no solo atender las situaciones presentadas, sino también identificar oportunidades de mejora y acciones preventivas.",
       "accion": "Fortalecer las habilidades de comunicación asertiva y manejo de situaciones con clientes, procurando comprender sus necesidades antes de plantear una solución. Ante las novedades técnicas presentadas, realizar un análisis básico de causa y posibles acciones preventivas, evitando limitar la gestión al cierre de la situación puntual. Realizar seguimiento a los casos que requieran acciones posteriores y compartir con el equipo oportunidades de mejora identificadas durante la atención.",
       "fecha": "2026-12-09"
      }
     ]
    },
    {
     "evaluador": "Miguel Angel Bujato Bernal",
     "cc_evaluador": "1129578858",
     "rol": "Jefe",
     "aspectos": "Resalto el gran compromiso que tiene en la atención de los clientes, la resolución en la mejor manera de los servicios técnicos y el cumplimiento de las politicas de la empresa.",
     "recomendaciones": "Como oportunidad de mejora: Tener mas comunicación asertiva con los clientes, es decir, ser puntual en la información que quieres transmitir.",
     "fecha": "2026-09-11",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1143447513",
   "NOMBRE": "Angelly Del Rebolledo Ortega",
   "CARGO": "LIDER DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Miguel Angel Bujato Bernal",
   "COMP_AUTO": 4.49,
   "COMP_JEFE": 4.91,
   "COMP_COLAB": 4.37,
   "N_COLAB": 3,
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA6": 4.66,
   "PUNTAJE_POTENCIAL": 77.7,
   "PUNTAJE_DESEMPENO": 100.0,
   "INDICADORES": [
    {
     "grupo": "LIDER DE SOPORTE TECNICO",
     "objetivo": "Asegurar la correcta ejecución de los servicios técnicos (instalaciones, mantenimientos,  reparaciones y garantías), cumpliendo con los estándares técnicos y de calidad definidos por KAIKA y las marcas representadas.",
     "peso": 50.0,
     "calificacion": 100.0,
     "pct": 100.0
    },
    {
     "grupo": "LIDER DE SOPORTE TECNICO",
     "objetivo": "Fortalecer las capacidades técnicas del equipo asignado mediante la transferencia de conocimiento, acompañamiento y seguimiento a capacitaciones impartidas por fábrica o KAIKA en la regional.",
     "peso": 25.0,
     "calificacion": 100.0,
     "pct": 100.0
    },
    {
     "grupo": "LIDER DE SOPORTE TECNICO",
     "objetivo": "Garantizar la correcta gestión y ejecución de garantías técnicas, asegurando una atención oportuna, rentable y conforme a los estándares del fabricante.",
     "peso": 25.0,
     "calificacion": 100.0,
     "pct": 100.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 4.85
    },
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 4.85
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.72
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.67
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 4.67
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.64
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.62
    },
    {
     "nombre": "VISION ESTRATEGICA Y PENSAMIENTO ORGANIZACIONAL",
     "puntaje": 4.55
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 84.4,
   "COMPLETO": true,
   "REPORTA_A": "Miguel Angel Bujato Bernal",
   "CIUDAD": "Barranquilla",
   "NIVEL_CARGO": "Táctico",
   "FEEDBACK": [
    {
     "evaluador": "Miguel Angel Bujato Bernal",
     "cc_evaluador": "1129578858",
     "rol": "Jefe",
     "aspectos": "Resalto la labor como Lider de Soporte Tecnico y la organización que ha hecho con esta área de la sucursal, logrando mejorar los tiempos de respuesta tanto a clientes externos e internos.",
     "recomendaciones": "Como oportunidad de mejora, lograr el autocontrol ante situaciones de estres con clientes externos e internos.",
     "fecha": "2026-09-14",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1144093752",
   "NOMBRE": "Sebastian Orozco Meza",
   "CARGO": "PROFESIONAL DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Gustavo Adolfo Galindo Gordillo, Jhon Jairo Preciado Ortiz",
   "COMP_AUTO": 5.08,
   "COMP_JEFE": 3.58,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.18,
   "PUNTAJE_POTENCIAL": 69.7,
   "PUNTAJE_DESEMPENO": 75.5,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Brindar atención técnica y posventa de alto nivel, generando confianza, fidelización y satisfacción en los clientes atendidos, fortaleciendo la imagen de KAIKA como aliado técnico confiable.",
     "peso": 30.0,
     "calificacion": 75.0,
     "pct": 75.0
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar el correcto diligenciamiento, archivo y control de los reportes técnicos, formatos de servicio, registros en sistemas internos y documentación asociada a repuestos, garantías y certificaciones.",
     "peso": 30.0,
     "calificacion": 70.0,
     "pct": 70.0
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar que las actividades de instalación, mantenimiento, diagnóstico y reparación de equipos se ejecuten bajo los más altos estándares técnicos, de calidad y seguridad, cumpliendo con los tiempos, normativas y procedimientos establecidos por KAIKA y los fabricantes.",
     "peso": 40.0,
     "calificacion": 80.0,
     "pct": 80.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ADAPTABILIDAD",
     "puntaje": 4.4
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.33
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.0
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.0
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 71.5,
   "COMPLETO": true,
   "REPORTA_A": "Gustavo Adolfo Galindo Gordillo, Jhon Jairo Preciado Ortiz",
   "CIUDAD": "Cali",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Gustavo Adolfo Galindo Gordillo",
     "cc_evaluador": "1144139127",
     "rol": "Jefe",
     "aspectos": "Trabajo en equipo.\nRespeto\nEmpatia",
     "recomendaciones": "Gestion del tiempo\nProactividad",
     "fecha": "2026-09-11",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1144139127",
   "NOMBRE": "Gustavo Adolfo Galindo Gordillo",
   "CARGO": "LIDER DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Jhon Jairo Preciado Ortiz",
   "COMP_AUTO": 5.84,
   "COMP_JEFE": 3.53,
   "COMP_COLAB": 4.42,
   "N_COLAB": 4,
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA6": 4.26,
   "PUNTAJE_POTENCIAL": 71.0,
   "PUNTAJE_DESEMPENO": 80.0,
   "INDICADORES": [
    {
     "grupo": "LIDER DE SOPORTE TECNICO",
     "objetivo": "Asegurar la correcta ejecución de los servicios técnicos (instalaciones, mantenimientos,  reparaciones y garantías), cumpliendo con los estándares técnicos y de calidad definidos por KAIKA y las marcas representadas.",
     "peso": 50.0,
     "calificacion": 90.0,
     "pct": 90.0
    },
    {
     "grupo": "LIDER DE SOPORTE TECNICO",
     "objetivo": "Fortalecer las capacidades técnicas del equipo asignado mediante la transferencia de conocimiento, acompañamiento y seguimiento a capacitaciones impartidas por fábrica o KAIKA en la regional.",
     "peso": 25.0,
     "calificacion": 70.0,
     "pct": 70.0
    },
    {
     "grupo": "LIDER DE SOPORTE TECNICO",
     "objetivo": "Garantizar la correcta gestión y ejecución de garantías técnicas, asegurando una atención oportuna, rentable y conforme a los estándares del fabricante.",
     "peso": 25.0,
     "calificacion": 70.0,
     "pct": 70.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.48
    },
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 4.45
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 4.32
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.29
    },
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 4.25
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.25
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.22
    },
    {
     "nombre": "VISION ESTRATEGICA Y PENSAMIENTO ORGANIZACIONAL",
     "puntaje": 4.09
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 73.7,
   "COMPLETO": true,
   "REPORTA_A": "Jhon Jairo Preciado Ortiz",
   "CIUDAD": "Cali",
   "NIVEL_CARGO": "Táctico",
   "FEEDBACK": [
    {
     "evaluador": "Jhon Jairo Preciado Ortiz",
     "cc_evaluador": "94510530",
     "rol": "Jefe",
     "aspectos": "resalto compromiso, responsabilidad, compañerismo",
     "recomendaciones": "tener mas carácter de jefe ante sus equipo de trabajo, escribir y revisar las actividades, pendientes, casos, atenciones, etc en una agenda para evitar olvido",
     "fecha": "2026-09-10",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1144165176",
   "NOMBRE": "Jhojan Steven Osorio Ordonez",
   "CARGO": "PROFESIONAL DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Gustavo Adolfo Galindo Gordillo, Jhon Jairo Preciado Ortiz",
   "COMP_AUTO": 4.33,
   "COMP_JEFE": 3.5,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 3.83,
   "PUNTAJE_POTENCIAL": 63.9,
   "PUNTAJE_DESEMPENO": 69.5,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Brindar atención técnica y posventa de alto nivel, generando confianza, fidelización y satisfacción en los clientes atendidos, fortaleciendo la imagen de KAIKA como aliado técnico confiable.",
     "peso": 30.0,
     "calificacion": 75.0,
     "pct": 75.0
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar el correcto diligenciamiento, archivo y control de los reportes técnicos, formatos de servicio, registros en sistemas internos y documentación asociada a repuestos, garantías y certificaciones.",
     "peso": 30.0,
     "calificacion": 70.0,
     "pct": 70.0
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar que las actividades de instalación, mantenimiento, diagnóstico y reparación de equipos se ejecuten bajo los más altos estándares técnicos, de calidad y seguridad, cumpliendo con los tiempos, normativas y procedimientos establecidos por KAIKA y los fabricantes.",
     "peso": 40.0,
     "calificacion": 65.0,
     "pct": 65.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.93
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 3.87
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.8
    },
    {
     "nombre": "ADAPTABILIDAD",
     "puntaje": 3.73
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 65.6,
   "COMPLETO": true,
   "REPORTA_A": "Gustavo Adolfo Galindo Gordillo, Jhon Jairo Preciado Ortiz",
   "CIUDAD": "Cali",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": []
  },
  {
   "CC": "1152187790",
   "NOMBRE": "Catalina Ceballos Monsalve",
   "CARGO": "ASESOR COMERCIAL",
   "AREA": "Comercial",
   "JEFE": "Diego Leon Castano Rios, Melissa Grossich Alfaro",
   "COMP_AUTO": 4.63,
   "COMP_JEFE": 4.2,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.37,
   "PUNTAJE_POTENCIAL": 72.9,
   "PUNTAJE_DESEMPENO": 87.5,
   "INDICADORES": [
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de promoción y  seguimiento a clientes clave, asegurando la alineación de las soluciones ofrecidas con sus necesidades técnicas y de servicio y sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 25.0,
     "calificacion": 9.0,
     "pct": 85.0
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de ventas asignada, garantizando la  sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 50.0,
     "calificacion": 9.0,
     "pct": 90.0
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Monitorear el comportamiento del mercado, la competencia, los precios y las tendencias, entregando información útil para la toma de decisiones estratégicas.",
     "peso": 25.0,
     "calificacion": 8.0,
     "pct": 85.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.67
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.37
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.37
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.33
    },
    {
     "nombre": "GESTION DE RELACIONES Y EXPERIENCIA ORGANIZACIONAL",
     "puntaje": 4.17
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 77.3,
   "COMPLETO": true,
   "REPORTA_A": "Diego Leon Castano Rios, Melissa Grossich Alfaro",
   "CIUDAD": "Medellín",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Diego Leon Castano Rios",
     "cc_evaluador": "3391824",
     "rol": "Jefe",
     "aspectos": "Catalina demuestra un nivel de compromiso excepcional para acompañar a los oftalmólogos en cada una de sus necesidades, brindando opiniones profesionales en los cálculos de poderles en los lentes a implantar en los pacientes,  garantizando estándares muy altos de satisfacción y construyendo un vínculo de gran valor con la ZEISS en lentes intraoculares. Tiene la capacidad de interactuar de manera fácil con los diferentes.",
     "recomendaciones": "Como oportunidad de desarrollo para seguir potenciando la madurez profesional y liderazgo estratégico de Catalina, la invito a profundizar en la comprensión de las dinámicas y limitantes operativas de la compañía (como la capacidad de gestión de stocks y la asignación eficiente de presupuestos para promoción y patrocinios). Mantener una visión integral del negocio le permitirá gestionar de forma más ágil las expectativas de los clientes dentro del marco real de recursos disponibles, convirtiendo las limitaciones internas en oportunidades para construir soluciones creativas junto con el equipo.",
     "fecha": "2026-09-27",
     "acciones": []
    },
    {
     "evaluador": "Melissa Grossich Alfaro",
     "cc_evaluador": "52702269",
     "rol": "Jefe",
     "aspectos": "Destaco su cumplimiento consistente de metas y su excelente relacionamiento con los médicos, quienes confían en su gestión. Conoce bien su mercado, tiene criterio comercial y una visión clara de lo que necesita el cliente, lo que lo convierte en un aporte valioso para el equipo.",
     "recomendaciones": "Su experiencia y conocimiento del mercado le dan una visión muy valiosa sobre los procesos y las condiciones comerciales. Recomiendo aprovechar esa visión compartiendo sus observaciones como propuestas de mejora, en los espacios adecuados y con un enfoque constructivo. De esta manera, su aporte tendrá un mayor impacto en el equipo y en la compañía",
     "fecha": "2026-10-02",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1152214040",
   "NOMBRE": "Jeronimo Garcia Zapata",
   "CARGO": "PROFESIONAL DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Diego Leon Castano Rios, Edison Alberto Castrillon Bedoya",
   "COMP_AUTO": 4.5,
   "COMP_JEFE": 3.88,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.12,
   "PUNTAJE_POTENCIAL": 68.8,
   "PUNTAJE_DESEMPENO": 85.2,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Brindar atención técnica y posventa de alto nivel, generando confianza, fidelización y satisfacción en los clientes atendidos, fortaleciendo la imagen de KAIKA como aliado técnico confiable.",
     "peso": 30.0,
     "calificacion": 7.0,
     "pct": 80.0
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar el correcto diligenciamiento, archivo y control de los reportes técnicos, formatos de servicio, registros en sistemas internos y documentación asociada a repuestos, garantías y certificaciones.",
     "peso": 30.0,
     "calificacion": 8.0,
     "pct": 87.5
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar que las actividades de instalación, mantenimiento, diagnóstico y reparación de equipos se ejecuten bajo los más altos estándares técnicos, de calidad y seguridad, cumpliendo con los tiempos, normativas y procedimientos establecidos por KAIKA y los fabricantes.",
     "peso": 40.0,
     "calificacion": 8.0,
     "pct": 87.5
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ADAPTABILIDAD",
     "puntaje": 4.4
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.17
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.03
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 3.9
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 73.7,
   "COMPLETO": true,
   "REPORTA_A": "Diego Leon Castano Rios, Edison Alberto Castrillon Bedoya",
   "CIUDAD": "Medellin",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Edison Alberto Castrillon Bedoya",
     "cc_evaluador": "1020401566",
     "rol": "Jefe",
     "aspectos": "Continuar con el proceso de aprendizaje y evolución en sus conocimientos",
     "recomendaciones": "Mejorar la comunicación asertiva y clara con los clientes internos y externos.",
     "fecha": "2026-09-18",
     "acciones": []
    }
   ]
  },
  {
   "CC": "1192801500",
   "NOMBRE": "Ana Sofia Escarria Molina",
   "CARGO": "PROFESIONAL DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Freddy Camilo Alberto Garcia",
   "COMP_AUTO": 4.0,
   "COMP_JEFE": 3.5,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 3.7,
   "PUNTAJE_POTENCIAL": 61.7,
   "PUNTAJE_DESEMPENO": null,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Brindar atención técnica y posventa de alto nivel, generando confianza, fidelización y satisfacción en los clientes atendidos, fortaleciendo la imagen de KAIKA como aliado técnico confiable.",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar el correcto diligenciamiento, archivo y control de los reportes técnicos, formatos de servicio, registros en sistemas internos y documentación asociada a repuestos, garantías y certificaciones.",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar que las actividades de instalación, mantenimiento, diagnóstico y reparación de equipos se ejecuten bajo los más altos estándares técnicos, de calidad y seguridad, cumpliendo con los tiempos, normativas y procedimientos establecidos por KAIKA y los fabricantes.",
     "peso": 40.0,
     "calificacion": null,
     "pct": null
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ADAPTABILIDAD",
     "puntaje": 3.8
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 3.8
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.6
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.6
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": null,
   "COMPLETO": false,
   "REPORTA_A": "Freddy Camilo Alberto Garcia",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Freddy Camilo Alberto Garcia",
     "cc_evaluador": "79968060",
     "rol": "Jefe",
     "aspectos": "Como fortaleza  la profesional de Soporte se destaca la facilidad  con que puede asimilar los cambios y aplicarlos a los  procesos propios del taller",
     "recomendaciones": "La recomendacion para la profesional es que no límite sus capacidades y conocimientos adquiridos y que los ponga en practica ante situaciones de dificultad en el desarollo de sus labores",
     "fecha": "2026-10-23",
     "acciones": []
    }
   ]
  },
  {
   "CC": "13741223",
   "NOMBRE": "Andres David Rueda Acevedo",
   "CARGO": "DIRECTOR COMERCIAL",
   "AREA": "Comercial",
   "JEFE": "Claudia Marcela Osorio Borda",
   "COMP_AUTO": 3.57,
   "COMP_JEFE": 4.07,
   "COMP_COLAB": 4.48,
   "N_COLAB": 4,
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA6": 4.09,
   "PUNTAJE_POTENCIAL": 68.2,
   "PUNTAJE_DESEMPENO": 75.0,
   "INDICADORES": [
    {
     "grupo": "DIRECTOR COMERCIAL",
     "objetivo": "Diseñar y ejecutar el plan estratégico anual de la línea, garantizando el cumplimiento de metas de ventas, rentabilidad, crecimiento y posicionamiento en el mercado.",
     "peso": 50.0,
     "calificacion": 7.0,
     "pct": 70.0
    },
    {
     "grupo": "DIRECTOR COMERCIAL",
     "objetivo": "Fortalecer las relaciones con las marcas representadas y fabricantes internacionales en las regionales, garantizando soporte comercial y de capacitación oportuno.",
     "peso": 25.0,
     "calificacion": 8.0,
     "pct": 80.0
    },
    {
     "grupo": "DIRECTOR COMERCIAL",
     "objetivo": "Optimizar los márgenes, precios y costos operativos de la línea, garantizando una rentabilidad sostenida y una adecuada rotación de cartera y stock comercial (fechas de vencimiento).",
     "peso": 25.0,
     "calificacion": 8.0,
     "pct": 80.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.51
    },
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 4.28
    },
    {
     "nombre": "GESTION DE RELACIONES Y EXPERIENCIA ORGANIZACIONAL",
     "puntaje": 4.22
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.2
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 4.08
    },
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 4.03
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.97
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 3.88
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 70.2,
   "COMPLETO": true,
   "REPORTA_A": "Claudia Marcela Osorio Borda",
   "CIUDAD": "Bogotá",
   "NIVEL_CARGO": "Directivo",
   "FEEDBACK": []
  },
  {
   "CC": "1449407",
   "NOMBRE": "Liseth Coromoto Espinoza Chacon",
   "CARGO": "COORDINADOR (A) DE LICITACIONES",
   "AREA": "Administrativo",
   "JEFE": "Claudia Marcela Osorio Borda",
   "COMP_AUTO": 5.54,
   "COMP_JEFE": 4.25,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.77,
   "PUNTAJE_POTENCIAL": 79.4,
   "PUNTAJE_DESEMPENO": 77.5,
   "INDICADORES": [
    {
     "grupo": "COORDINADOR DE LICITACIONES",
     "objetivo": "Alinear la gestión licitatoria con las metas de crecimiento establecidas por la empresa",
     "peso": 25.0,
     "calificacion": 7.0,
     "pct": 70.0
    },
    {
     "grupo": "COORDINADOR DE LICITACIONES",
     "objetivo": "Asegurar la elaboración integral, competitiva y oportuna de las propuestas técnico-económicas, dentro de los plazos establecidos.",
     "peso": 45.0,
     "calificacion": 8.0,
     "pct": 80.0
    },
    {
     "grupo": "COORDINADOR DE LICITACIONES",
     "objetivo": "Optimizar la efectividad en los procesos licitatorios, elevando el porcentaje de adjudicaciones exitosas y asegurando la rentabilidad mínima esperada en cada proceso.",
     "peso": 30.0,
     "calificacion": 8.0,
     "pct": 80.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 5.4
    },
    {
     "nombre": "GESTION DE RIESGO, CONTROL Y CUMPLIMIENTO",
     "puntaje": 5.27
    },
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 4.8
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.67
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.53
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 4.53
    },
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 4.53
    },
    {
     "nombre": "VISION ESTRATEGICA Y PENSAMIENTO ORGANIZACIONAL",
     "puntaje": 4.4
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 78.9,
   "COMPLETO": true,
   "REPORTA_A": "Claudia Marcela Osorio Borda",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Táctico",
   "FEEDBACK": []
  },
  {
   "CC": "3391824",
   "NOMBRE": "Diego Leon Castano Rios",
   "CARGO": "GERENTE REGIONAL",
   "AREA": "Comercial",
   "JEFE": "Claudia Marcela Osorio Borda",
   "COMP_AUTO": 3.74,
   "COMP_JEFE": 4.56,
   "COMP_COLAB": 4.5,
   "N_COLAB": 6,
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA6": 4.38,
   "PUNTAJE_POTENCIAL": 73.0,
   "PUNTAJE_DESEMPENO": 79.0,
   "INDICADORES": [
    {
     "grupo": "GERENTE REGIONAL",
     "objetivo": "Asegurar el cumplimiento de los objetivos comerciales y de crecimiento regional",
     "peso": 40.0,
     "calificacion": 8.0,
     "pct": 80.0
    },
    {
     "grupo": "GERENTE REGIONAL",
     "objetivo": "Fortalecer la gestión de cotizaciones y propuestas comerciales",
     "peso": 30.0,
     "calificacion": 8.0,
     "pct": 80.0
    },
    {
     "grupo": "GERENTE REGIONAL",
     "objetivo": "Garantizar la eficiencia y rentabilidad de las operaciones regionales",
     "peso": 20.0,
     "calificacion": 8.0,
     "pct": 80.0
    },
    {
     "grupo": "GERENTE REGIONAL",
     "objetivo": "Supervisar y controlar la gestión de licitaciones y subastas regionales",
     "peso": 10.0,
     "calificacion": 7.0,
     "pct": 70.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 4.97
    },
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 4.88
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.67
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.63
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.6
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.3
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 4.22
    },
    {
     "nombre": "VISION ESTRATEGICA Y PENSAMIENTO ORGANIZACIONAL",
     "puntaje": 3.75
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 74.8,
   "COMPLETO": true,
   "REPORTA_A": "Claudia Marcela Osorio Borda",
   "CIUDAD": "Medellín",
   "NIVEL_CARGO": "Directivo",
   "FEEDBACK": []
  },
  {
   "CC": "39789716",
   "NOMBRE": "Rosemary Cortes Gonzalez",
   "CARGO": "DIRECTOR COMERCIAL",
   "AREA": "Comercial",
   "JEFE": "Claudia Marcela Osorio Borda",
   "COMP_AUTO": 4.23,
   "COMP_JEFE": 4.0,
   "COMP_COLAB": 3.88,
   "N_COLAB": 12,
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA6": 4.01,
   "PUNTAJE_POTENCIAL": 66.8,
   "PUNTAJE_DESEMPENO": 75.0,
   "INDICADORES": [
    {
     "grupo": "DIRECTOR COMERCIAL",
     "objetivo": "Diseñar y ejecutar el plan estratégico anual de la línea, garantizando el cumplimiento de metas de ventas, rentabilidad, crecimiento y posicionamiento en el mercado.",
     "peso": 50.0,
     "calificacion": 7.0,
     "pct": 70.0
    },
    {
     "grupo": "DIRECTOR COMERCIAL",
     "objetivo": "Fortalecer las relaciones con las marcas representadas y fabricantes internacionales en las regionales, garantizando soporte comercial y de capacitación oportuno.",
     "peso": 25.0,
     "calificacion": 8.0,
     "pct": 80.0
    },
    {
     "grupo": "DIRECTOR COMERCIAL",
     "objetivo": "Optimizar los márgenes, precios y costos operativos de la línea, garantizando una rentabilidad sostenida y una adecuada rotación de cartera y stock comercial (fechas de vencimiento).",
     "peso": 25.0,
     "calificacion": 8.0,
     "pct": 80.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 4.71
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.2
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.08
    },
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 4.05
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 3.99
    },
    {
     "nombre": "GESTION DE RELACIONES Y EXPERIENCIA ORGANIZACIONAL",
     "puntaje": 3.92
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.64
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 3.52
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 69.3,
   "COMPLETO": true,
   "REPORTA_A": "Claudia Marcela Osorio Borda",
   "CIUDAD": "Bogotá",
   "NIVEL_CARGO": "Directivo",
   "FEEDBACK": []
  },
  {
   "CC": "42147274",
   "NOMBRE": "Maria Del Pilar Restrepo Botero",
   "CARGO": "GERENTE REGIONAL",
   "AREA": "Comercial",
   "JEFE": "Claudia Marcela Osorio Borda",
   "COMP_AUTO": 4.85,
   "COMP_JEFE": 3.24,
   "COMP_COLAB": 4.03,
   "N_COLAB": 4,
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA6": 3.8,
   "PUNTAJE_POTENCIAL": 63.3,
   "PUNTAJE_DESEMPENO": 63.0,
   "INDICADORES": [
    {
     "grupo": "GERENTE REGIONAL",
     "objetivo": "Asegurar el cumplimiento de los objetivos comerciales y de crecimiento regional",
     "peso": 40.0,
     "calificacion": 6.0,
     "pct": 60.0
    },
    {
     "grupo": "GERENTE REGIONAL",
     "objetivo": "Fortalecer la gestión de cotizaciones y propuestas comerciales",
     "peso": 30.0,
     "calificacion": 7.0,
     "pct": 70.0
    },
    {
     "grupo": "GERENTE REGIONAL",
     "objetivo": "Garantizar la eficiencia y rentabilidad de las operaciones regionales",
     "peso": 20.0,
     "calificacion": 6.0,
     "pct": 60.0
    },
    {
     "grupo": "GERENTE REGIONAL",
     "objetivo": "Supervisar y controlar la gestión de licitaciones y subastas regionales",
     "peso": 10.0,
     "calificacion": 6.0,
     "pct": 60.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 4.22
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.06
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.94
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.75
    },
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 3.75
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 3.72
    },
    {
     "nombre": "VISION ESTRATEGICA Y PENSAMIENTO ORGANIZACIONAL",
     "puntaje": 3.65
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 3.61
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 63.2,
   "COMPLETO": true,
   "REPORTA_A": "Claudia Marcela Osorio Borda",
   "CIUDAD": "Manizales",
   "NIVEL_CARGO": "Directivo",
   "FEEDBACK": []
  },
  {
   "CC": "43100493",
   "NOMBRE": "Liliana Machado Lopez",
   "CARGO": "ASISTENTE REGIONAL",
   "AREA": "Comercial",
   "JEFE": "Diego Leon Castano Rios",
   "COMP_AUTO": 4.07,
   "COMP_JEFE": 4.8,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.51,
   "PUNTAJE_POTENCIAL": 75.1,
   "PUNTAJE_DESEMPENO": 100.0,
   "INDICADORES": [
    {
     "grupo": "ASISTENTE REGIONAL",
     "objetivo": "Asegurar el adecuado manejo de la documentación contable, facturación, caja menor, gastos y soporte financiero regional, talento humano,  garantizando trazabilidad, cumplimiento normativo y eficiencia en el flujo de información hacia la sede principal.",
     "peso": 35.0,
     "calificacion": 10.0,
     "pct": 100.0
    },
    {
     "grupo": "ASISTENTE REGIONAL",
     "objetivo": "Garantizar la adecuada planeación, disponibilidad y control de los recursos logísticos y operativos de la regional, optimizando costos y tiempos en coordinación con las áreas centrales.",
     "peso": 35.0,
     "calificacion": 10.0,
     "pct": 100.0
    },
    {
     "grupo": "ASISTENTE REGIONAL",
     "objetivo": "Respaldar la labor comercial regional mediante la gestión oportuna y organizada de cotizaciones, propuestas y procesos de licitación o subasta, garantizando la trazabilidad, cumplimiento de requisitos y tiempos de respuesta.",
     "peso": 30.0,
     "calificacion": 10.0,
     "pct": 100.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.73
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.6
    },
    {
     "nombre": "GESTION ESTRATEGICA DE LA INFORMACION Y TOMA DE DECISIONES",
     "puntaje": 4.4
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.4
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.4
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 82.6,
   "COMPLETO": true,
   "REPORTA_A": "Diego Leon Castano Rios",
   "CIUDAD": "Medellín",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Diego Leon Castano Rios",
     "cc_evaluador": "3391824",
     "rol": "Jefe",
     "aspectos": "Liliana destaca por su capacidad para gerenciar administrativamente nuestra regional con alto criterio, iniciativa y total independencia. Su capacidad de resolución libera de cargas operativas tanto a nosotros los comerciales como el personal deservicio técnico, permitiendo que la gestión en campo con los clientes fluya sin interrupciones. Exalto su disciplina, puntualidad, orden e incondicional apoyo con actitud de servicio.  Liliana es es un apoyo transversal en nuestra regional y en nuestra compañía.",
     "recomendaciones": "Continuar trabajando de una manera más consciente en el manejo del estrés y de cómo influye en nuestro estado de ánimo.",
     "fecha": "2026-09-24",
     "acciones": []
    }
   ]
  },
  {
   "CC": "43150805",
   "NOMBRE": "Hilda Marcela Marin Delgado",
   "CARGO": "ESPECIALISTA DE PRODUCTO",
   "AREA": "Comercial",
   "JEFE": "Diego Harley Gutierrez Laverde, Diego Leon Castano Rios, Edwin Andres Abril Lucero, Rosemary Cortes Gonzalez",
   "COMP_AUTO": 3.83,
   "COMP_JEFE": 4.0,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 3.93,
   "PUNTAJE_POTENCIAL": 65.6,
   "PUNTAJE_DESEMPENO": null,
   "INDICADORES": [],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.43
    },
    {
     "nombre": "GESTION DE APLICACIONES Y VALIDACION TECNICA",
     "puntaje": 4.23
    },
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 4.05
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.9
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.87
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 3.8
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 3.7
    },
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 3.48
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": null,
   "COMPLETO": false,
   "REPORTA_A": "Diego Harley Gutierrez Laverde, Diego Leon Castano Rios, Edwin Andres Abril Lucero, Rosemary Cortes Gonzalez",
   "CIUDAD": "Medellín",
   "NIVEL_CARGO": "Táctico",
   "FEEDBACK": [
    {
     "evaluador": "Diego Leon Castano Rios",
     "cc_evaluador": "3391824",
     "rol": "Jefe",
     "aspectos": "Marcela tiene mucha capacidad investigativa y de análisis. Profundiza en las especificaciones técnicas y aplicaciones de nuestro portafolio de equipos e insumos de laboratorio. Tiene muy buena capacidad comunicativa y conexión con los clientes y siempre está enfocada como asesora a hacer esa venta consultiva llegando con soluciones reales a las necesidades de los clientes. Gestiona muy bien los recursos de la empresa, Comprende con claridad los objetivos del negocio y posiciona a la empresa como un aliado estratégico ante el cliente final.",
     "recomendaciones": "Hablando especialmente con el cliente interno, la invito a tener un poco más de flexibilidad frente a opiniones, direccionamientos o metodologías distintas. Resalto su capacidad de análisis con fundamentos pero es importante tener la apertura a otros puntos de vista.",
     "fecha": "2026-09-24",
     "acciones": []
    },
    {
     "evaluador": "Edwin Andres Abril Lucero",
     "cc_evaluador": "80039672",
     "rol": "Jefe",
     "aspectos": "Se destaca por su compromiso y responsabilidad en el cumplimiento de sus funciones, manteniendo una actitud positiva y disposición para apoyar al equipo.",
     "recomendaciones": "Continuar desarrollando sus habilidades de comunicación y liderazgo, buscando expresar sus ideas con mayor claridad y seguridad, así como compartir conocimientos y buenas prácticas con el equipo.",
     "fecha": "2026-09-27",
     "acciones": [
      {
       "competencia": "LIDERAZGO TRANSFORMACIONAL",
       "objetivo": "Fortalecer las habilidades de liderazgo, iniciativa y comunicación del colaborador, promoviendo una influencia positiva en el equipo y una mayor participación en iniciativas orientadas al desarrollo de las personas y al logro de resultado",
       "accion": "Liderar o participar activamente en al menos 2 iniciativas de mejora o trabajo colaborativo, realizando seguimiento a sus resultados y compartiendo los aprendizajes con el equipo.",
       "fecha": "2026-11-30"
      }
     ]
    }
   ]
  },
  {
   "CC": "52006293",
   "NOMBRE": "Claudia Marcela Osorio Borda",
   "CARGO": "DIRECTORA NACIONAL DE VENTAS",
   "AREA": "Comercial",
   "JEFE": "Humberto Javier Duran Cortes",
   "COMP_AUTO": 4.84,
   "COMP_JEFE": 4.84,
   "COMP_COLAB": 4.75,
   "N_COLAB": 16,
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA6": 4.82,
   "PUNTAJE_POTENCIAL": 80.3,
   "PUNTAJE_DESEMPENO": 88.8,
   "INDICADORES": [
    {
     "grupo": "DIRECTOR NACIONAL DE VENTAS",
     "objetivo": "Asegurar estrategias comerciales diferenciadas por unidad de negocio., garantizando una rentabilidad sostenida y una adecuada rotación de cartera y stock comercial (fechas de vencimiento).",
     "peso": 25.0,
     "calificacion": 100.0,
     "pct": 100.0
    },
    {
     "grupo": "DIRECTOR NACIONAL DE VENTAS",
     "objetivo": "Garantizar el crecimiento sostenible del negocio a través de la dirección integral de las estrategias comerciales y de mercadeo.",
     "peso": 25.0,
     "calificacion": 86.0,
     "pct": 86.0
    },
    {
     "grupo": "DIRECTOR NACIONAL DE VENTAS",
     "objetivo": "Incrementar la productividad del equipo comercial y asegurar ejecución disciplinada del proceso comercial, fortaleciendo las capacidades técnicas, clínicas y comerciales del equipo.",
     "peso": 15.0,
     "calificacion": 75.0,
     "pct": 75.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 5.05
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 5.0
    },
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 4.97
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 4.92
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.55
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.5
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 82.8,
   "COMPLETO": true,
   "REPORTA_A": "Humberto Javier Duran Cortes",
   "FEEDBACK": []
  },
  {
   "CC": "52249658",
   "NOMBRE": "Sandra Patricia Rodriguez Cortes",
   "CARGO": "GERENTE ADMINISTRATIVO",
   "AREA": "Administrativo",
   "JEFE": "Humberto Javier Duran Cortes",
   "COMP_AUTO": 4.21,
   "COMP_JEFE": 4.67,
   "COMP_COLAB": 5.08,
   "N_COLAB": 11,
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA6": 4.7,
   "PUNTAJE_POTENCIAL": 78.3,
   "PUNTAJE_DESEMPENO": null,
   "INDICADORES": [
    {
     "grupo": "GERENTE ADMINISTRATIVO",
     "objetivo": "Asegurar la liquidez y el flujo de caja corporativo para garantizar la disponibilidad oportuna de recursos.",
     "peso": 25.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "GERENTE ADMINISTRATIVO",
     "objetivo": "Asegurar una gestión financiera sólida, que respalde la operación y el crecimiento sostenido de la compañía.",
     "peso": 35.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "GERENTE ADMINISTRATIVO",
     "objetivo": "Implementar estrategias para mantener y/o optimizar costos sin afectar la calidad operativa ni el nivel de servicio.",
     "peso": 40.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "GERENTE FINANCIERO Y ADMINISTRATIVO",
     "objetivo": "Asegurar la liquidez y el flujo de caja corporativo para garantizar la disponibilidad oportuna de recursos.",
     "peso": 25.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "GERENTE FINANCIERO Y ADMINISTRATIVO",
     "objetivo": "Asegurar una gestión financiera sólida, que respalde la operación y el crecimiento sostenido de la compañía.",
     "peso": 35.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "GERENTE FINANCIERO Y ADMINISTRATIVO",
     "objetivo": "Implementar estrategias para mantener y/o optimizar costos sin afectar la calidad operativa ni el nivel de servicio.",
     "peso": 40.0,
     "calificacion": null,
     "pct": null
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 4.98
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.96
    },
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 4.76
    },
    {
     "nombre": "VISION ESTRATEGICA Y PENSAMIENTO ORGANIZACIONAL",
     "puntaje": 4.73
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.7
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.55
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.51
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 4.47
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": null,
   "COMPLETO": false,
   "REPORTA_A": "Humberto Javier Duran Cortes",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Directivo",
   "FEEDBACK": []
  },
  {
   "CC": "52350006",
   "NOMBRE": "Sandra Patricia Rodriguez Romero",
   "CARGO": "ASISTENTE DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Adalberto Fabre Parada",
   "COMP_AUTO": 4.2,
   "COMP_JEFE": 3.33,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 3.68,
   "PUNTAJE_POTENCIAL": 61.3,
   "PUNTAJE_DESEMPENO": 80.0,
   "INDICADORES": [
    {
     "grupo": "ASISTENTE DE SOPORTE TÉCNICO",
     "objetivo": "Asegurar que contratos adjudicados sean formalizados en los tiempos establecidos y cumplan con todos los requisitos en todo momento.",
     "peso": 30.0,
     "calificacion": 80.0,
     "pct": 80.0
    },
    {
     "grupo": "ASISTENTE DE SOPORTE TÉCNICO",
     "objetivo": "Asegurar que las cotizaciones, licitaciones y propuestas comerciales, relacionadas con los servicios técnicos, sean elaboradas con precisión, completitud y dentro de los plazos establecidos, fortaleciendo la capacidad de respuesta y la competitividad comercial de KAIKA.",
     "peso": 30.0,
     "calificacion": 80.0,
     "pct": 80.0
    },
    {
     "grupo": "ASISTENTE DE SOPORTE TÉCNICO",
     "objetivo": "Respaldar la labor comercial de la Gerencia de Soporte Técnico mediante la gestión oportuna y organizada de cotizaciones unificadas y procesos de licitación o subasta, garantizando la trazabilidad, cumplimiento de requisitos y tiempos de respuesta.",
     "peso": 40.0,
     "calificacion": 80.0,
     "pct": 80.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.13
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 3.93
    },
    {
     "nombre": "GESTION DE RELACIONES Y EXPERIENCIA ORGANIZACIONAL",
     "puntaje": 3.6
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.4
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 3.33
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 66.9,
   "COMPLETO": true,
   "REPORTA_A": "Adalberto Fabre Parada",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Adalberto Fabre Parada",
     "cc_evaluador": "91283555",
     "rol": "Jefe",
     "aspectos": "Compromiso con la compañia, adaptacion al cambio y nuevas responsabilidades, disposicion para trabajar en equipo y colaborar activamente en el desarrollo de actvidades, capacidad para analizar situaciones y encontrar soluciones.",
     "recomendaciones": "Fortalecer: trabajo bajo presion, comunicacion y servicio al cliente. Mejorar el tipo de colaboracion prestada a los demas departamentos procurando un equilibrio con las actividades y responsabilidades propias del cargo.",
     "fecha": "2026-10-22",
     "acciones": []
    }
   ]
  },
  {
   "CC": "52552836",
   "NOMBRE": "Alexandra Bogoya Puentes",
   "CARGO": "DIRECTORA DEL DEPARTAMENTO CONTABLE",
   "AREA": "Contabilidad",
   "JEFE": "Humberto Javier Duran Cortes",
   "COMP_AUTO": 5.91,
   "COMP_JEFE": 3.48,
   "COMP_COLAB": 4.82,
   "N_COLAB": 5,
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA6": 4.37,
   "PUNTAJE_POTENCIAL": 72.8,
   "PUNTAJE_DESEMPENO": 85.9,
   "INDICADORES": [
    {
     "grupo": "DIRECTOR DE CONTABILIDAD",
     "objetivo": "Asegurar la exactitud, integridad y oportunidad de la información contable y financiera de KAIKA, garantizando decisiones gerenciales basadas en datos confiables.",
     "peso": 30.0,
     "calificacion": 100.0,
     "pct": 100.0
    },
    {
     "grupo": "DIRECTOR DE CONTABILIDAD",
     "objetivo": "Dirigir la gestión integral de crédito y cartera, asegurando un adecuado balance entre rentabilidad, liquidez y riesgo de incobrabilidad.",
     "peso": 15.0,
     "calificacion": 2.0,
     "pct": 20.0
    },
    {
     "grupo": "DIRECTOR DE CONTABILIDAD",
     "objetivo": "Garantizar la presentación y pago de todas las obligaciones tributarias nacionales, departamentales y municipales de forma oportuna, precisa y conforme a la normatividad vigente, evitando sanciones o intereses.",
     "peso": 40.0,
     "calificacion": 100.0,
     "pct": 100.0
    },
    {
     "grupo": "DIRECTORA DEPARTAMENTO CONTABLE",
     "objetivo": "Asegurar la exactitud, integridad y oportunidad de la información contable y financiera de KAIKA, garantizando decisiones gerenciales basadas en datos confiables.",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "DIRECTORA DEPARTAMENTO CONTABLE",
     "objetivo": "Dirigir la gestión integral de crédito y cartera, asegurando un adecuado balance entre rentabilidad, liquidez y riesgo de incobrabilidad.",
     "peso": 15.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "DIRECTORA DEPARTAMENTO CONTABLE",
     "objetivo": "Garantizar la presentación y pago de todas las obligaciones tributarias nacionales, departamentales y municipales de forma oportuna, precisa y conforme a la normatividad vigente, evitando sanciones o intereses.",
     "peso": 40.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "DIRECTORA DEPARTAMENTO CONTABLE",
     "objetivo": "Optimizar el flujo de caja mediante una gestión eficiente del recaudo, asegurando la disponibilidad de recursos para la operación y las inversiones de KAIKA.",
     "peso": 15.0,
     "calificacion": null,
     "pct": null
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 5.03
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.85
    },
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 4.41
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 4.38
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.37
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.19
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.83
    },
    {
     "nombre": "GESTIÓN ESTRATÉGICA CONTABLE",
     "puntaje": 3.72
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 76.7,
   "COMPLETO": true,
   "REPORTA_A": "Humberto Javier Duran Cortes",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Directivo",
   "FEEDBACK": []
  },
  {
   "CC": "52584040",
   "NOMBRE": "Adriana Mesa Ortiz",
   "CARGO": "ASESOR COMERCIAL",
   "AREA": "Comercial",
   "JEFE": "Diego Harley Gutierrez Laverde, Edwin Andres Abril Lucero, Rosemary Cortes Gonzalez",
   "COMP_AUTO": 3.83,
   "COMP_JEFE": 3.73,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 3.77,
   "PUNTAJE_POTENCIAL": 62.9,
   "PUNTAJE_DESEMPENO": 40.4,
   "INDICADORES": [
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de promoción y  seguimiento a clientes clave, asegurando la alineación de las soluciones ofrecidas con sus necesidades técnicas y de servicio y sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 25.0,
     "calificacion": 25.0,
     "pct": 45.0
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de ventas asignada, garantizando la  sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 50.0,
     "calificacion": 25.0,
     "pct": 36.7
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Monitorear el comportamiento del mercado, la competencia, los precios y las tendencias, entregando información útil para la toma de decisiones estratégicas.",
     "peso": 25.0,
     "calificacion": 25.0,
     "pct": 43.3
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "GESTION DE RELACIONES Y EXPERIENCIA ORGANIZACIONAL",
     "puntaje": 4.2
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.0
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 3.73
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.67
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.47
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 56.1,
   "COMPLETO": true,
   "REPORTA_A": "Diego Harley Gutierrez Laverde, Edwin Andres Abril Lucero, Rosemary Cortes Gonzalez",
   "CIUDAD": "Bogotá",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Edwin Andres Abril Lucero",
     "cc_evaluador": "80039672",
     "rol": "Jefe",
     "aspectos": "Se destaca por su compromiso y responsabilidad en el cumplimiento de sus funciones, manteniendo una actitud positiva y disposición",
     "recomendaciones": "Continuar desarrollando sus habilidades de comunicación, buscando expresar sus ideas con mayor claridad y seguridad, así como compartir conocimientos",
     "fecha": "2026-09-27",
     "acciones": [
      {
       "competencia": "GESTION DE RELACIONES Y EXPERIENCIA ORGANIZACIONAL",
       "objetivo": "fortalecer las habilidades de comunicación, y relacionamiento del colaborador, promoviendo relaciones basadas en el respeto, la confianza y el trabajo en equipo",
       "accion": "Mejorar la comunicación con el equipo, practicar la escucha activa, participar en actividades colaborativas, compartir conocimientos, gestionar las diferencias de manera constructiva y mantener una actitud de servicio y disposición frente a clientes internos y externos.",
       "fecha": "2026-11-30"
      }
     ]
    }
   ]
  },
  {
   "CC": "52702269",
   "NOMBRE": "Melissa Grossich Alfaro",
   "CARGO": "DIRECTOR COMERCIAL",
   "AREA": "Comercial",
   "JEFE": "Claudia Marcela Osorio Borda",
   "COMP_AUTO": 3.87,
   "COMP_JEFE": 4.2,
   "COMP_COLAB": 4.11,
   "N_COLAB": 5,
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA6": 4.11,
   "PUNTAJE_POTENCIAL": 68.4,
   "PUNTAJE_DESEMPENO": 80.0,
   "INDICADORES": [
    {
     "grupo": "DIRECTOR COMERCIAL",
     "objetivo": "Diseñar y ejecutar el plan estratégico anual de la línea, garantizando el cumplimiento de metas de ventas, rentabilidad, crecimiento y posicionamiento en el mercado.",
     "peso": 50.0,
     "calificacion": 8.0,
     "pct": 80.0
    },
    {
     "grupo": "DIRECTOR COMERCIAL",
     "objetivo": "Fortalecer las relaciones con las marcas representadas y fabricantes internacionales en las regionales, garantizando soporte comercial y de capacitación oportuno.",
     "peso": 25.0,
     "calificacion": 8.0,
     "pct": 80.0
    },
    {
     "grupo": "DIRECTOR COMERCIAL",
     "objetivo": "Optimizar los márgenes, precios y costos operativos de la línea, garantizando una rentabilidad sostenida y una adecuada rotación de cartera y stock comercial (fechas de vencimiento).",
     "peso": 25.0,
     "calificacion": 8.0,
     "pct": 80.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 4.48
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 4.46
    },
    {
     "nombre": "GESTION DE RELACIONES Y EXPERIENCIA ORGANIZACIONAL",
     "puntaje": 4.09
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.07
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.06
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.95
    },
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 3.95
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 3.88
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 71.9,
   "COMPLETO": true,
   "REPORTA_A": "Claudia Marcela Osorio Borda",
   "CIUDAD": "Bogotá",
   "NIVEL_CARGO": "Directivo",
   "FEEDBACK": []
  },
  {
   "CC": "52711901",
   "NOMBRE": "Gloria Andrea Hernandez Baquero",
   "CARGO": "ASESOR COMERCIAL",
   "AREA": "Comercial",
   "JEFE": "Adriana Yuled Parra Marin, Andres David Rueda Acevedo",
   "COMP_AUTO": 3.03,
   "COMP_JEFE": 4.62,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 3.98,
   "PUNTAJE_POTENCIAL": 66.4,
   "PUNTAJE_DESEMPENO": 90.5,
   "INDICADORES": [
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de promoción y  seguimiento a clientes clave, asegurando la alineación de las soluciones ofrecidas con sus necesidades técnicas y de servicio y sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 25.0,
     "calificacion": 100.0,
     "pct": 95.0
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de ventas asignada, garantizando la  sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 50.0,
     "calificacion": 80.0,
     "pct": 88.5
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Monitorear el comportamiento del mercado, la competencia, los precios y las tendencias, entregando información útil para la toma de decisiones estratégicas.",
     "peso": 25.0,
     "calificacion": 90.0,
     "pct": 90.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.37
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.27
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.0
    },
    {
     "nombre": "GESTION DE RELACIONES Y EXPERIENCIA ORGANIZACIONAL",
     "puntaje": 3.63
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.57
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 73.6,
   "COMPLETO": true,
   "REPORTA_A": "Adriana Yuled Parra Marin, Andres David Rueda Acevedo",
   "CIUDAD": "Bogotá",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Andres David Rueda Acevedo",
     "cc_evaluador": "13741223",
     "rol": "Jefe",
     "aspectos": "Gloria, es una persona muy diligente con todas sus obligaciones. Considero que si este trabajo no se ve reflejado directamente en las ventas se debe a una saturación de los clientes que tiene asignados.",
     "recomendaciones": "Estudiar con ella nuevas fuentes de ventas como: comodatos, monitorización, nuevos clientes o darle una región como los Llanos (para estudio)",
     "fecha": "2026-09-17",
     "acciones": []
    }
   ]
  },
  {
   "CC": "52818751",
   "NOMBRE": "Yamile Aljure Portilla",
   "CARGO": "ASESOR COMERCIAL",
   "AREA": "Comercial",
   "JEFE": "Melissa Grossich Alfaro",
   "COMP_AUTO": 4.37,
   "COMP_JEFE": 4.93,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.71,
   "PUNTAJE_POTENCIAL": 78.4,
   "PUNTAJE_DESEMPENO": 77.5,
   "INDICADORES": [
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de promoción y  seguimiento a clientes clave, asegurando la alineación de las soluciones ofrecidas con sus necesidades técnicas y de servicio y sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 25.0,
     "calificacion": 8.0,
     "pct": 80.0
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de ventas asignada, garantizando la  sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 50.0,
     "calificacion": 7.0,
     "pct": 70.0
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Monitorear el comportamiento del mercado, la competencia, los precios y las tendencias, entregando información útil para la toma de decisiones estratégicas.",
     "peso": 25.0,
     "calificacion": 9.0,
     "pct": 90.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.87
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.73
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.67
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.6
    },
    {
     "nombre": "GESTION DE RELACIONES Y EXPERIENCIA ORGANIZACIONAL",
     "puntaje": 4.53
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 78.2,
   "COMPLETO": true,
   "REPORTA_A": "Melissa Grossich Alfaro",
   "CIUDAD": "Bogotá",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Melissa Grossich Alfaro",
     "cc_evaluador": "52702269",
     "rol": "Jefe",
     "aspectos": "Destaco u compromiso constante con la compañía y la dedicación que imprime en cada una de sus actividades. Es una persona que no se rinde ante los retos: aun cuando los resultados no han alcanzado el 100% de las metas establecidas, su esfuerzo, disciplina y actitud de trabajo se mantienen firmes, lo cual es un valor fundamental para el equipo.\n\nResalto especialmente su sentido de pertenencia y la manera en que vela por los intereses de la compañía en su relación con los clientes, actuando con responsabilidad, criterio y lealtad. Esta actitud genera confianza tanto interna como externamente y fortalece la imagen de la organización en el mercado.\n\nLo invito a mantener esa perseverancia, disposición y compromiso, pues son la base sobre la cual se construyen los buenos resultados",
     "recomendaciones": "Como principal oportunidad de mejora, lo invito a enfocar su esfuerzo y dedicación en el cumplimiento de las metas comerciales establecidas. Su compromiso es evidente, y el siguiente paso es traducirlo en resultados concretos y medibles.\n\nPara lograrlo, le recomiendo fortalecer la planeación de su gestión comercial: organizar su agenda de visitas priorizando los clientes y oportunidades con mayor potencial, y definir objetivos claros para cada semana. También es importante hacer un seguimiento más riguroso y oportuno a las oportunidades abiertas, de manera que no se pierdan negocios por falta de continuidad.",
     "fecha": "2026-09-29",
     "acciones": []
    }
   ]
  },
  {
   "CC": "52837745",
   "NOMBRE": "Nidia Andrea Herrera Rodriguez",
   "CARGO": "ESPECIALISTA DE APLICACIONES",
   "AREA": "Comercial",
   "JEFE": "Adriana Yuled Parra Marin",
   "COMP_AUTO": 4.98,
   "COMP_JEFE": 4.58,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.74,
   "PUNTAJE_POTENCIAL": 79.0,
   "PUNTAJE_DESEMPENO": 92.0,
   "INDICADORES": [
    {
     "grupo": "ESPECIALISTA EN APLICACIONES",
     "objetivo": "Asegurar el cumplimiento de las metas de promoción y  seguimiento a clientes clave, asegurando la alineación de las soluciones ofrecidas con sus necesidades técnicas y de servicio y sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 50.0,
     "calificacion": 90.0,
     "pct": 90.0
    },
    {
     "grupo": "ESPECIALISTA EN APLICACIONES",
     "objetivo": "Contribuir al cierre de oportunidades comerciales mediante el acompañamiento en demostraciones, pruebas, configuraciones y asesorías a clientes.",
     "peso": 30.0,
     "calificacion": 90.0,
     "pct": 90.0
    },
    {
     "grupo": "ESPECIALISTA EN APLICACIONES",
     "objetivo": "Evaluar la efectividad y retorno de las actividades de promoción, demostración y capacitación, ajustando estrategias para maximizar resultados.",
     "peso": 20.0,
     "calificacion": 100.0,
     "pct": 100.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 5.2
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.79
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.6
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 4.6
    },
    {
     "nombre": "GESTION DE RIESGO, CONTROL Y CUMPLIMIENTO",
     "puntaje": 4.6
    },
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 4.6
    },
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 4.6
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.47
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 82.9,
   "COMPLETO": true,
   "REPORTA_A": "Adriana Yuled Parra Marin",
   "CIUDAD": "Bogotá",
   "NIVEL_CARGO": "Táctico",
   "FEEDBACK": [
    {
     "evaluador": "Adriana Yuled Parra Marin",
     "cc_evaluador": "52933821",
     "rol": "Jefe",
     "aspectos": "Invitacion a seguir desarrollando las actividades con la mismo profesionalismo que la ha caracterizado desde su entrada en la compañia",
     "recomendaciones": "Como opción de mejora se sugiere en el feedback que realiza de los procesos de demostración incluir los tips clínicos que pueden servir para ganar el negocio, es decir que el asesor debe tener presente en su conversación frente al cliente.",
     "fecha": "2026-09-08",
     "acciones": []
    }
   ]
  },
  {
   "CC": "52933821",
   "NOMBRE": "Adriana Yuled Parra Marin",
   "CARGO": "DIRECTOR COMERCIAL",
   "AREA": "Comercial",
   "JEFE": "Claudia Marcela Osorio Borda",
   "COMP_AUTO": 5.03,
   "COMP_JEFE": 4.67,
   "COMP_COLAB": 4.2,
   "N_COLAB": 2,
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA6": 4.6,
   "PUNTAJE_POTENCIAL": 76.7,
   "PUNTAJE_DESEMPENO": 82.5,
   "INDICADORES": [
    {
     "grupo": "DIRECTOR COMERCIAL",
     "objetivo": "Diseñar y ejecutar el plan estratégico anual de la línea, garantizando el cumplimiento de metas de ventas, rentabilidad, crecimiento y posicionamiento en el mercado.",
     "peso": 50.0,
     "calificacion": 8.0,
     "pct": 80.0
    },
    {
     "grupo": "DIRECTOR COMERCIAL",
     "objetivo": "Fortalecer las relaciones con las marcas representadas y fabricantes internacionales en las regionales, garantizando soporte comercial y de capacitación oportuno.",
     "peso": 25.0,
     "calificacion": 9.0,
     "pct": 90.0
    },
    {
     "grupo": "DIRECTOR COMERCIAL",
     "objetivo": "Optimizar los márgenes, precios y costos operativos de la línea, garantizando una rentabilidad sostenida y una adecuada rotación de cartera y stock comercial (fechas de vencimiento).",
     "peso": 25.0,
     "calificacion": 8.0,
     "pct": 80.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.7
    },
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 4.68
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 4.63
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.63
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.55
    },
    {
     "nombre": "GESTION DE RELACIONES Y EXPERIENCIA ORGANIZACIONAL",
     "puntaje": 4.53
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.53
    },
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 4.47
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 78.4,
   "COMPLETO": true,
   "REPORTA_A": "Claudia Marcela Osorio Borda",
   "CIUDAD": "Bogotá",
   "NIVEL_CARGO": "Directivo",
   "FEEDBACK": []
  },
  {
   "CC": "52953671",
   "NOMBRE": "Rossi Yahira Lucumi Bolivar",
   "CARGO": "COORDINADOR CONTABLE E IMPUESTOS",
   "AREA": "Contabilidad",
   "JEFE": "Alexandra Bogoya Puentes",
   "COMP_AUTO": 4.65,
   "COMP_JEFE": 5.13,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.94,
   "PUNTAJE_POTENCIAL": 82.3,
   "PUNTAJE_DESEMPENO": 100.0,
   "INDICADORES": [
    {
     "grupo": "COORDINADORA CONTABLE E IMPUESTOS",
     "objetivo": "Asegurar la exactitud, integridad y oportunidad de la información contable y financiera de KAIKA, garantizando decisiones gerenciales basadas en datos confiables.",
     "peso": 60.0,
     "calificacion": 100.0,
     "pct": 100.0
    },
    {
     "grupo": "COORDINADORA CONTABLE E IMPUESTOS",
     "objetivo": "Garantizar la presentación y pago de todas las obligaciones tributarias nacionales, departamentales y municipales de forma oportuna, precisa y conforme a la normatividad vigente, evitando sanciones o intereses.",
     "peso": 40.0,
     "calificacion": 100.0,
     "pct": 100.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 5.44
    },
    {
     "nombre": "ORIENTACION A LA CALIDAD Y PRECISION",
     "puntaje": 5.0
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 5.0
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.87
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.67
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 87.6,
   "COMPLETO": true,
   "REPORTA_A": "Alexandra Bogoya Puentes",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Alexandra Bogoya Puentes",
     "cc_evaluador": "52552836",
     "rol": "Jefe",
     "aspectos": "Es colaboradora  responsable y comprometida  con sus funciones, cumpliendo de manera oportuna con las tareas y responsabilidades asignadas,  es colaborativa y tiene una actitud de respeto hacia sus compañeros, contribuyendo a un buen ambiente laboral y mostrando disposición para apoyar cuando es necesario, mantiene una actitud positiva frente al trabajo, demuestra sentido de pertenencia y aporta desde su rol al cumplimiento de los objetivos organizacionales, es un colaboradora en quien se puede confiar para asumir responsabilidades y dar seguimiento a los compromisos adquiridos.",
     "recomendaciones": "Continuar fortaleciendo habilidades de liderazgo e influencia, aprovechando la iniciativa y disposición para aportar al equipo y asumir progresivamente nuevos retos, Fortalecer el seguimiento de las iniciativas y propuestas realizadas, procurando llevarlas hasta su implementación y medición de resultados, continuar desarrollando la capacidad de identificar y priorizar las actividades de mayor impacto, especialmente cuando se presentan múltiples requerimientos simultáneamente.",
     "fecha": "2026-10-06",
     "acciones": []
    }
   ]
  },
  {
   "CC": "53027907",
   "NOMBRE": "Mayerni Espejo Rodriguez",
   "CARGO": "ASESOR COMERCIAL",
   "AREA": "Comercial",
   "JEFE": "Diego Harley Gutierrez Laverde, Edwin Andres Abril Lucero, Rosemary Cortes Gonzalez",
   "COMP_AUTO": 3.63,
   "COMP_JEFE": 3.74,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 3.7,
   "PUNTAJE_POTENCIAL": 61.7,
   "PUNTAJE_DESEMPENO": 54.6,
   "INDICADORES": [
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de promoción y  seguimiento a clientes clave, asegurando la alineación de las soluciones ofrecidas con sus necesidades técnicas y de servicio y sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 25.0,
     "calificacion": 25.0,
     "pct": 41.7
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de ventas asignada, garantizando la  sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 50.0,
     "calificacion": 25.0,
     "pct": 61.7
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Monitorear el comportamiento del mercado, la competencia, los precios y las tendencias, entregando información útil para la toma de decisiones estratégicas.",
     "peso": 25.0,
     "calificacion": 25.0,
     "pct": 53.3
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.33
    },
    {
     "nombre": "GESTION DE RELACIONES Y EXPERIENCIA ORGANIZACIONAL",
     "puntaje": 3.93
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.8
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 3.73
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 3.53
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 59.5,
   "COMPLETO": true,
   "REPORTA_A": "Diego Harley Gutierrez Laverde, Edwin Andres Abril Lucero, Rosemary Cortes Gonzalez",
   "CIUDAD": "Bogotá",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Edwin Andres Abril Lucero",
     "cc_evaluador": "80039672",
     "rol": "Jefe",
     "aspectos": "Se destaca por su compromiso y responsabilidad en el cumplimiento de sus funciones, manteniendo una actitud positiva y disposición para apoyar al equipo",
     "recomendaciones": "Fortalecer la planificación y organización de sus actividades, priorizando oportunamente las tareas y realizando seguimiento a los compromisos adquiridos, con el fin de mejorar aún más la eficiencia y el cumplimiento de los objetivos.",
     "fecha": "2026-09-27",
     "acciones": [
      {
       "competencia": "APRENDIZAJE CONTINUO",
       "objetivo": "Promover el aprendizaje y desarrollo permanente del colaborador mediante la actualización de conocimientos y el fortalecimiento de habilidades que contribuyan a mejorar su desempeño",
       "accion": "Participar en capacitaciones, identificar oportunidades de aprendizaje, mantenerse actualizado en temas relacionados con su cargo, aplicar los conocimientos adquiridos en sus actividades",
       "fecha": "2026-11-30"
      }
     ]
    },
    {
     "evaluador": "Rosemary Cortes Gonzalez",
     "cc_evaluador": "39789716",
     "rol": "Jefe",
     "aspectos": "Persona proactiva que aporta ideas de mejora constantemente y demuestra interés en optimizar su trabajo y mejora continua.",
     "recomendaciones": "Fortalecer la seguridad y confianza en sus conocimientos y forma de trabajo, optimizar la planificación de sus visitas comerciales, estableciendo objetivos específicos por sectores o nichos de mercado que le permitan enfocar mejor sus esfuerzos.",
     "fecha": "2026-09-30",
     "acciones": []
    }
   ]
  },
  {
   "CC": "65766927",
   "NOMBRE": "Carol Alexandra Romero Diaz",
   "CARGO": "ASESOR COMERCIAL",
   "AREA": "Comercial",
   "JEFE": "Diego Harley Gutierrez Laverde, Edwin Andres Abril Lucero, Maria Del Pilar Restrepo Botero, Rosemary Cortes Gonzalez",
   "COMP_AUTO": 4.3,
   "COMP_JEFE": 3.88,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.05,
   "PUNTAJE_POTENCIAL": 67.5,
   "PUNTAJE_DESEMPENO": 37.4,
   "INDICADORES": [
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de promoción y  seguimiento a clientes clave, asegurando la alineación de las soluciones ofrecidas con sus necesidades técnicas y de servicio y sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 25.0,
     "calificacion": 2.0,
     "pct": 37.5
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de ventas asignada, garantizando la  sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 50.0,
     "calificacion": 2.0,
     "pct": 34.2
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Monitorear el comportamiento del mercado, la competencia, los precios y las tendencias, entregando información útil para la toma de decisiones estratégicas.",
     "peso": 25.0,
     "calificacion": 4.0,
     "pct": 43.8
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "GESTION DE RELACIONES Y EXPERIENCIA ORGANIZACIONAL",
     "puntaje": 4.55
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.45
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.12
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.98
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 3.9
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 58.5,
   "COMPLETO": true,
   "REPORTA_A": "Diego Harley Gutierrez Laverde, Edwin Andres Abril Lucero, Maria Del Pilar Restrepo Botero, Rosemary Cortes Gonzalez",
   "CIUDAD": "Manizales",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Maria Del Pilar Restrepo Botero",
     "cc_evaluador": "42147274",
     "rol": "Jefe",
     "aspectos": "Se destaca por su alto sentido de responsabilidad y actitud respetuosa. Muestra una disposición permanente al trabajo en equipo, sabe escuchar activamente y transmite sus ideas con respeto, aportando positivamente al clima laboral y al desempeño del área",
     "recomendaciones": "Se sugiere enfocar su desarrollo en fortalecer la proactividad para proponer soluciones antes de que se presenten las necesidades, desarrollar la asertividad para gestionar prioridades y cumplimiento de presupuesto anual asignado.",
     "fecha": "2026-09-15",
     "acciones": [
      {
       "competencia": "INNOVACION Y MEJORA CONTINUA",
       "objetivo": "Generar e implementar iniciativas de innovación y mejora continua que fortalezcan la propuesta de valor, la satisfacción de clientes y la competitividad del negocio.",
       "accion": "Identificar necesidades de clientes y oportunidades frente a la competencia, proponer soluciones innovadoras, implementar mejoras y realizar seguimiento a los resultados para asegurar su impacto y sostenibilidad.",
       "fecha": "2026-11-30"
      },
      {
       "competencia": "INNOVACION Y MEJORA CONTINUA",
       "objetivo": "Diseñar e implementar estrategias de optimización comercial para asegurar el cumplimiento de las metas de ventas y la ejecución efectiva del presupuesto asignado.",
       "accion": "1. Implementar un sistema de seguimiento continuo al embudo de ventas para identificar cuellos de botella y priorizar las oportunidades con mayor impacto presupuestal.\n\n2. Optimizar las tácticas de prospección y cierre comercial incorporando buenas prácticas para reducir el ciclo de venta.\n\n3. Realizar una revisión semanal del porcentaje de avance frente a la meta de presupuesto para aplicar ajustes estratégicos de manera oportuna.",
       "fecha": "2026-11-30"
      },
      {
       "competencia": "APRENDIZAJE CONTINUO",
       "objetivo": "Fortalecer el perfil técnico mediante el autoestudio continuo de la documentación y plataformas de las casas matrices, para optimizar la calidad en la resolución de incidentes y mantener actualizado el conocimiento operativo del área.",
       "accion": "1. Establecer una rutina semanal de autoestudio enfocada en los portales técnicos, manuales y novedades de las casas matrices.\n\n\n2. Realizar las capacitaciones y certificaciones virtuales disponibles en las plataformas oficiales de los fabricantes.\n\n\n3. Aplicar y socializar con el equipo los nuevos conocimientos y buenas prácticas aprendidas de las casas matrices para estandarizar procesos.",
       "fecha": "2026-11-30"
      }
     ]
    },
    {
     "evaluador": "Edwin Andres Abril Lucero",
     "cc_evaluador": "80039672",
     "rol": "Jefe",
     "aspectos": "destaca por su compromiso y responsabilidad en el cumplimiento de sus funciones, demuestra buen relacionamiento con sus compañeros y una comunicación respetuosa y efectiva",
     "recomendaciones": "Seguir desarrollando sus habilidades de comunicación, aprovechando su experiencia para asumir retos y contribuir cada vez más al crecimiento.",
     "fecha": "2026-09-27",
     "acciones": [
      {
       "competencia": "INNOVACION Y MEJORA CONTINUA",
       "objetivo": "Fortalecer la capacidad para identificar oportunidades de mejora, proponer soluciones y optimizar procesos, tiempos y recursos.",
       "accion": "implementar al menos 2 propuestas de mejora durante los 2 próximos meses, realizando seguimiento a los resultados y documentando los beneficios obtenidos.",
       "fecha": "2026-11-30"
      }
     ]
    }
   ]
  },
  {
   "CC": "66818306",
   "NOMBRE": "Monica Hidalgo Potes",
   "CARGO": "OFICIOS VARIOS",
   "AREA": "Administrativo",
   "JEFE": "Jhon Jairo Preciado Ortiz",
   "COMP_AUTO": 4.56,
   "COMP_JEFE": 3.67,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.02,
   "PUNTAJE_POTENCIAL": 67.0,
   "PUNTAJE_DESEMPENO": 100.0,
   "INDICADORES": [
    {
     "grupo": "AUXILIAR SERVICIOS GENERALES",
     "objetivo": "Asegurar la administración adecuada de los insumos de uso interno, evitando desabastecimientos, pérdidas o excesos, mediante controles regulares y comunicación oportuna con el área administrativa o de compras.",
     "peso": 30.0,
     "calificacion": 100.0,
     "pct": 100.0
    },
    {
     "grupo": "AUXILIAR SERVICIOS GENERALES",
     "objetivo": "Asegurar que todas las áreas físicas de KAIKA (oficinas, baños, salas, pasillos, cafetería, bodega y exteriores) se mantengan limpias, ordenadas y en condiciones higiénicas adecuadas para garantizar un entorno laboral seguro, saludable y representativo de la imagen institucional.",
     "peso": 70.0,
     "calificacion": 100.0,
     "pct": 100.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.4
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.87
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.8
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 76.9,
   "COMPLETO": true,
   "REPORTA_A": "Jhon Jairo Preciado Ortiz",
   "CIUDAD": "Cali",
   "NIVEL_CARGO": "Operativo",
   "FEEDBACK": [
    {
     "evaluador": "Jhon Jairo Preciado Ortiz",
     "cc_evaluador": "94510530",
     "rol": "Jefe",
     "aspectos": "se resalta su compañerismo, su compromiso con la labor, su responsabilidad",
     "recomendaciones": "se debe tener en cuenta que debe solicitar en lo posible sus permisos en horas no hábiles",
     "fecha": "2026-09-10",
     "acciones": []
    }
   ]
  },
  {
   "CC": "72276636",
   "NOMBRE": "Jonatan Enrique Bonett Tovar",
   "CARGO": "ESPECIALISTA DE APLICACIONES",
   "AREA": "Comercial",
   "JEFE": "Claudia Marcela Osorio Borda",
   "COMP_AUTO": 4.44,
   "COMP_JEFE": 4.3,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.36,
   "PUNTAJE_POTENCIAL": 72.6,
   "PUNTAJE_DESEMPENO": 73.0,
   "INDICADORES": [
    {
     "grupo": "ESPECIALISTA EN APLICACIONES",
     "objetivo": "Asegurar el cumplimiento de las metas de promoción y  seguimiento a clientes clave, asegurando la alineación de las soluciones ofrecidas con sus necesidades técnicas y de servicio y sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 50.0,
     "calificacion": 7.0,
     "pct": 70.0
    },
    {
     "grupo": "ESPECIALISTA EN APLICACIONES",
     "objetivo": "Contribuir al cierre de oportunidades comerciales mediante el acompañamiento en demostraciones, pruebas, configuraciones y asesorías a clientes.",
     "peso": 30.0,
     "calificacion": 8.0,
     "pct": 80.0
    },
    {
     "grupo": "ESPECIALISTA EN APLICACIONES",
     "objetivo": "Evaluar la efectividad y retorno de las actividades de promoción, demostración y capacitación, ajustando estrategias para maximizar resultados.",
     "peso": 20.0,
     "calificacion": 7.0,
     "pct": 70.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 5.0
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.87
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 4.87
    },
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 4.47
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.33
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.31
    },
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 3.8
    },
    {
     "nombre": "GESTION DE RIESGO, CONTROL Y CUMPLIMIENTO",
     "puntaje": 3.6
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 72.7,
   "COMPLETO": true,
   "REPORTA_A": "Claudia Marcela Osorio Borda",
   "CIUDAD": "Bogotá",
   "NIVEL_CARGO": "Táctico",
   "FEEDBACK": []
  },
  {
   "CC": "72281716",
   "NOMBRE": "Jaime Antonio Vitola Camargo",
   "CARGO": "PROFESIONAL DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Angelly Del Rebolledo Ortega, Miguel Angel Bujato Bernal",
   "COMP_AUTO": 4.25,
   "COMP_JEFE": 4.5,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.4,
   "PUNTAJE_POTENCIAL": 73.3,
   "PUNTAJE_DESEMPENO": 90.5,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Brindar atención técnica y posventa de alto nivel, generando confianza, fidelización y satisfacción en los clientes atendidos, fortaleciendo la imagen de KAIKA como aliado técnico confiable.",
     "peso": 30.0,
     "calificacion": 100.0,
     "pct": 95.0
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar el correcto diligenciamiento, archivo y control de los reportes técnicos, formatos de servicio, registros en sistemas internos y documentación asociada a repuestos, garantías y certificaciones.",
     "peso": 30.0,
     "calificacion": 80.0,
     "pct": 80.0
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar que las actividades de instalación, mantenimiento, diagnóstico y reparación de equipos se ejecuten bajo los más altos estándares técnicos, de calidad y seguridad, cumpliendo con los tiempos, normativas y procedimientos establecidos por KAIKA y los fabricantes.",
     "peso": 40.0,
     "calificacion": 100.0,
     "pct": 95.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.47
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.43
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.4
    },
    {
     "nombre": "ADAPTABILIDAD",
     "puntaje": 4.3
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 78.5,
   "COMPLETO": true,
   "REPORTA_A": "Angelly Del Rebolledo Ortega, Miguel Angel Bujato Bernal",
   "CIUDAD": "Barranquilla",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Angelly Del Rebolledo Ortega",
     "cc_evaluador": "1143447513",
     "rol": "Jefe",
     "aspectos": "Su conocimiento técnico y experiencia en el desarrollo de sus funciones, demostrando capacidad para atender y resolver las situaciones propias del proceso de soporte. Se resalta igualmente su proactividad y disposición para dar respuesta a las necesidades que se presentan, así como su capacidad para trabajar de manera colaborativa con el equipo. Mantiene una adecuada orientación al cliente, procurando brindar una atención oportuna y soluciones acordes con sus requerimientos.",
     "recomendaciones": "Cumplimiento de los horarios y la puntualidad, entendiendo su impacto en la planificación de las actividades, la atención oportuna de los servicios y la dinámica del equipo. Asimismo, incrementar su participación en roles y actividades de carácter administrativo, aprovechando su conocimiento y experiencia para aportar no solo desde la ejecución técnica, sino también desde el seguimiento, gestión documental y fortalecimiento de los procesos del área.",
     "fecha": "2026-09-10",
     "acciones": [
      {
       "competencia": "ADAPTABILIDAD",
       "objetivo": "Fortalecer la gestión integral de sus responsabilidades, mejorando el cumplimiento de los horarios establecidos e incrementando su participación en actividades administrativas y de seguimiento asociadas al proceso de soporte técnico.",
       "accion": "Cumplir de manera consistente con los horarios establecidos para el inicio de la jornada y la atención de los servicios programados. Participar activamente en actividades administrativas relacionadas con el proceso de soporte, tales como seguimiento de servicios, actualización documental, gestión de reportes y demás responsabilidades que le sean asignadas.",
       "fecha": "2026-12-09"
      }
     ]
    },
    {
     "evaluador": "Miguel Angel Bujato Bernal",
     "cc_evaluador": "1129578858",
     "rol": "Jefe",
     "aspectos": "Resalto el compromiso por seguir en su desarrollo profesional y tambien con transmitir los  conocimientos adquiridos en sus viajes a fabrica (Sartorius y Matachana)",
     "recomendaciones": "Enviar a tiempo las legalizaciones de gastos y demas temas administrativos que le corresponden",
     "fecha": "2026-09-14",
     "acciones": [
      {
       "competencia": "INNOVACION Y MEJORA CONTINUA",
       "objetivo": "Cumplir con el tiempo adecuado para la legalización de gastos.",
       "accion": "Enviar las legalizaciones 3 días habiles despues de finalizado el viaje.",
       "fecha": "2026-10-31"
      }
     ]
    }
   ]
  },
  {
   "CC": "77191928",
   "NOMBRE": "Camilo Alberto Torres Obregon",
   "CARGO": "ESPECIALISTA BIOPROCESOS",
   "AREA": "Comercial",
   "JEFE": "Rosemary Cortes Gonzalez",
   "COMP_AUTO": 4.47,
   "COMP_JEFE": 4.17,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.29,
   "PUNTAJE_POTENCIAL": 71.4,
   "PUNTAJE_DESEMPENO": null,
   "INDICADORES": [],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 5.2
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.67
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.6
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 4.47
    },
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 4.0
    },
    {
     "nombre": "GESTION DE APLICACIONES Y VALIDACION TECNICA",
     "puntaje": 3.73
    },
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 3.6
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.4
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": null,
   "COMPLETO": false,
   "REPORTA_A": "Rosemary Cortes Gonzalez",
   "CIUDAD": "Bogotá",
   "NIVEL_CARGO": "Táctico",
   "FEEDBACK": []
  },
  {
   "CC": "79407442",
   "NOMBRE": "Jose Alberto Rozo Solorzano",
   "CARGO": "ANALISTA DE NOMINA Y ADMINISTRATIVO",
   "AREA": "Talento Humano",
   "JEFE": "Deisy Julieth Montanez Zuniga, Sandra Patricia Rodriguez Cortes",
   "COMP_AUTO": 4.57,
   "COMP_JEFE": 3.92,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.18,
   "PUNTAJE_POTENCIAL": 69.7,
   "PUNTAJE_DESEMPENO": 66.2,
   "INDICADORES": [
    {
     "grupo": "ANALISTA DE NOMINA Y ADMINISTRATIVO",
     "objetivo": "Asegurar que las oficinas y puntos operativos cuenten con las condiciones adecuadas de funcionamiento, infraestructura, aseo, seguridad y suministros básicos, sin interrupciones que afecten la operación.",
     "peso": 35.0,
     "calificacion": 80.0,
     "pct": 80.0
    },
    {
     "grupo": "ANALISTA DE NOMINA Y ADMINISTRATIVO",
     "objetivo": "Brindar soporte administrativo oportuno y eficiente a las áreas de la empresa, fortaleciendo la gestión interna y la satisfacción del cliente interno.",
     "peso": 30.0,
     "calificacion": 85.0,
     "pct": 92.5
    },
    {
     "grupo": "ANALISTA DE NOMINA Y ADMINISTRATIVO",
     "objetivo": "Gestionar y vigilar los contratos de vigilancia y aseo, garantizando el cumplimiento de los niveles de servicio.",
     "peso": 35.0,
     "calificacion": 30.0,
     "pct": 30.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "VISION ESTRATEGICA Y PENSAMIENTO ORGANIZACIONAL",
     "puntaje": 4.23
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.2
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.2
    },
    {
     "nombre": "GESTIÓN DE DATOS ESTRATÉGICOS Y ANALÍTICA DE PERSONAS (PEOPLE ANALYTICS)",
     "puntaje": 4.13
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.97
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 68.7,
   "COMPLETO": true,
   "REPORTA_A": "Deisy Julieth Montanez Zuniga, Sandra Patricia Rodriguez Cortes",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Deisy Julieth Montanez Zuniga",
     "cc_evaluador": "1024483719",
     "rol": "Jefe",
     "aspectos": "Honestidad - Comprometido con los resultados de la compañía - Puntualidad - Confiable la información",
     "recomendaciones": "Trabajo en equipo: Colaborar con menor fricción y aceptar la retroalimentación de los compañeros de forma constructiva - Creatividad: La habilidad de proponer ideas originales y soluciones nuevas - Empatía: El poder de entender los sentimientos de los demás.",
     "fecha": "2026-09-21",
     "acciones": [
      {
       "competencia": "APRENDIZAJE CONTINUO",
       "objetivo": "Lograr trabajo en equipo",
       "accion": "Crea un espacio seguro donde los colaboradores puedan expresar sus ideas y opiniones sin miedo.",
       "fecha": "2027-02-26"
      },
      {
       "competencia": "INNOVACION Y MEJORA CONTINUA",
       "objetivo": "Tener una medición clara en las solicitudes de nomina por parte de los colaboradores (solicitudes de aclaración de pagos e información solicitada por el área contable.",
       "accion": "Implementación, alimentar y realizar seguimiento a los KPI",
       "fecha": "2027-03-31"
      }
     ]
    },
    {
     "evaluador": "Sandra Patricia Rodriguez Cortes",
     "cc_evaluador": "52249658",
     "rol": "Jefe",
     "aspectos": "Tiene una alta disposición para colaborar en las tareas que se le asignan, verifica los trabajos de mantenimiento que solicita el personal o la empresa, hace seguimiento con el personal pero de forma verbal, lo que va a mejorar con los próximos KPI. Atiende rápidamente a las solicitudes extraordinarias de revisoría, DIAN, clientes, empleados retirados que requieren información.  Es puntual, se resalta que trabaja días sábados cuando se requiere sin que haya que solicitarlo, con el fin de cumplir con fechas esperadas para cualquier trabajo a su cargo y se encarga de hacer verificaciones de las fallas presentadas en reportes para comisiones, DIAN, fondos y se asegura de que queden solucionados.",
     "recomendaciones": "Debe mejorar el proceso de compra de computadores, tenemos dos proveedores que usualmente cumplen con las condiciones, garantizando el cumplimiento de las licencias.  Hay que actualizar el procedimiento con Fabio, las 3 cotizaciones deben mantenerse al igual que las mismas especificaciones técnicas y aclarar allí los estándares por cargo para facilitar las compras.    incluir la comparación  una vez al año (enero de cada año- solo con ánimo de conocer como estamos frente a los precios) de cotizaciones de proveedores frecuentes, vigilancia, aseo, cafetería, elementos de aseo. Hay una oportunidad de mejora en la programación de mantenimientos, tenerlo compartido con calidad, tecnovigilancia  y conmigo en sharepoint.  Puede sugerir mejoras en el proceso, eficiencias( en tiempos, materiales, personas). Hay una oportunidad de mejora en el seguimiento a los arreglos locativos en oficinas de sucursales y las verificación de necesidades en cambio de muebles, sillas, elementos en genera.  Hay que implementar una encuesta semestral para el personal donde se identifiquen las necesidades y se garantice el cambio, cumpliendo los requisitos y lineamientos de la compañía y que las solicitudes no queden en el aire. Esta encuesta, puede estar alineada con SST e incluir el servicio de vigilancia y aseo para medir el KPI3 que no se esta midiendo actualmente. (TODO EN ENERO). EN EL KPI de programación de mantenimientos correctivos hay una oportunidad de mejora porque se esta midiendo de forma general y debemos medir los tiempos cotizados para confirmar su cumplimiento, si no se cumplen, se debe poner la justificación y una vez justificado, poner una segunda fecha de compromiso y verificarlo nuevamente. De esa forma, sí tendremos una información cierta de lo que sucede en cada caso. También, de acuerdo con el análisis, se pueden disminuir los tiempos máximos de ejecución para cada nivel de impacto, pues están muy altos. Puede mejorar la comunicación con otras áreas, respondiendo los correos o solicitudes de forma escrita, con compras puede mejorar el envió de cotizaciones mientras el nuevo cargo recibe todas las responsabilidades. Existe otra oportunidad de mejor pues puede mejorar la presentación de sus reportes a gerencia y en general, haciendo un dash board con colaboración de sus compañeros si fuese necesario, por ahora no se requiere. ESTO APLICA PARCIALMENTE PARA EL CARGO, DISEÑAR NO ES UNA NECESIDAD, PERO PUEDE SER UNA PORTUNIDAD DE MEJROA EN LA MEDICION. Diseña tableros de control (dashboards) que permiten a los líderes de área monitorear la productividad y el cumplimiento de metas administrativas en tiempo real. NO PLICA PARA EL AREA ADMINISTRATIVA (ES DE TALENTO HUMANO):Monitorea los indicadores de rotación, clima y desempeño por departamentos. Garantiza la implementación de acciones tácticas oportunas para corregir desviaciones que afecten el cumplimiento de los objetivos estratégicos. Supervisa la ejecución de los planes de desarrollo y capacitación en las diferentes áreas. Garantiza que las competencias del personal evolucionen al ritmo de las necesidades técnicas y comerciales de la empresa. Coordina el despliegue de políticas de talento humano en los equipos de trabajo. Garantiza una comunicación efectiva de la visión organizacional para fortalecer el compromiso y la alineación operativa. Supervisa la consolidación de indicadores mensuales de gestión humana, identificando desviaciones en costos de nómina o picos de rotación para proponer ajustes tácticos. CALIFICADO CON CUMPLE PARA NO AFECTAR LA CALIFICACION.",
     "fecha": "2026-09-21",
     "acciones": []
    }
   ]
  },
  {
   "CC": "79845527",
   "NOMBRE": "German Dario Monroy Ortiz",
   "CARGO": "COORDINADOR DE INFORMARTICA BIOMEDICA",
   "AREA": "Comercial",
   "JEFE": "Claudia Marcela Osorio Borda",
   "COMP_AUTO": 4.32,
   "COMP_JEFE": 4.32,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.32,
   "PUNTAJE_POTENCIAL": 71.9,
   "PUNTAJE_DESEMPENO": null,
   "INDICADORES": [],
   "COMPETENCIAS": [
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.95
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 4.4
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.27
    },
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 4.27
    },
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 4.07
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.73
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": null,
   "COMPLETO": false,
   "REPORTA_A": "Claudia Marcela Osorio Borda",
   "FEEDBACK": []
  },
  {
   "CC": "79866342",
   "NOMBRE": "Oscar David Rivera Vergara",
   "CARGO": "ASESOR COMERCIAL",
   "AREA": "Comercial",
   "JEFE": "Adriana Yuled Parra Marin, Andres David Rueda Acevedo",
   "COMP_AUTO": 4.47,
   "COMP_JEFE": 4.3,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.37,
   "PUNTAJE_POTENCIAL": 72.8,
   "PUNTAJE_DESEMPENO": 86.2,
   "INDICADORES": [
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de promoción y  seguimiento a clientes clave, asegurando la alineación de las soluciones ofrecidas con sus necesidades técnicas y de servicio y sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 25.0,
     "calificacion": 80.0,
     "pct": 90.0
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de ventas asignada, garantizando la  sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 50.0,
     "calificacion": 70.0,
     "pct": 85.0
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Monitorear el comportamiento del mercado, la competencia, los precios y las tendencias, entregando información útil para la toma de decisiones estratégicas.",
     "peso": 25.0,
     "calificacion": 80.0,
     "pct": 85.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.7
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.47
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.33
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.27
    },
    {
     "nombre": "GESTION DE RELACIONES Y EXPERIENCIA ORGANIZACIONAL",
     "puntaje": 4.23
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 76.8,
   "COMPLETO": true,
   "REPORTA_A": "Adriana Yuled Parra Marin, Andres David Rueda Acevedo",
   "CIUDAD": "Bogotá",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Andres David Rueda Acevedo",
     "cc_evaluador": "13741223",
     "rol": "Jefe",
     "aspectos": "Resalto de Oscar que es un apersona que tiene una excelente relación con sus clientes a toco nivel (desde ingeniería hasta el usuario final). Se esfuerza porque el producto sea el adecuado para el cliente. Maneja muy bien las reclamaciones de los clientes y está siempre disponible para ayudar a que el cliente este satisfecho.",
     "recomendaciones": "Programar el seguimiento de los clientes en total, ya que en algunas ocasiones se concentra mucho en uno o dos donde los procesos están avanzados (más calientes) y puede descuidar las nuevas oportunidades que puedan surgir en los otros clientes.",
     "fecha": "2026-09-17",
     "acciones": []
    }
   ]
  },
  {
   "CC": "79883501",
   "NOMBRE": "Jairo Humberto Nieto Fonseca",
   "CARGO": "AUXILIAR DE ALMACEN",
   "AREA": "Almacén",
   "JEFE": "Hugo Enrique Garcia Bautista",
   "COMP_AUTO": 4.53,
   "COMP_JEFE": 4.2,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.33,
   "PUNTAJE_POTENCIAL": 72.2,
   "PUNTAJE_DESEMPENO": 99.5,
   "INDICADORES": [
    {
     "grupo": "AUXILIAR DE ALMACEN",
     "objetivo": "Cumplir con la preparación y entrega de pedidos en tiempo, forma y condiciones adecuadas, garantizando la satisfacción del cliente interno y externo y la integridad de los productos biomédicos.",
     "peso": 40.0,
     "calificacion": 99.69,
     "pct": 99.7
    },
    {
     "grupo": "AUXILIAR DE ALMACEN",
     "objetivo": "Garantizar la correcta organización, actualización y conciliación de los inventarios, evitando pérdidas, deterioros o diferencias que afecten la confiabilidad de la información contable y logística.",
     "peso": 60.0,
     "calificacion": 99.39,
     "pct": 99.4
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.67
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.47
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.4
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.13
    },
    {
     "nombre": "GESTION ESTRATEGICA DE LA INFORMACION Y TOMA DE DECISIONES",
     "puntaje": 4.0
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 80.4,
   "COMPLETO": true,
   "REPORTA_A": "Hugo Enrique Garcia Bautista",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Operativo",
   "FEEDBACK": [
    {
     "evaluador": "Hugo Enrique Garcia Bautista",
     "cc_evaluador": "80065681",
     "rol": "Jefe",
     "aspectos": "olaborador cumplido y responsable con los tiempos de despacho, contribuyendo de manera oportuna al cumplimiento de las entregas del área.",
     "recomendaciones": "Fortalecer el espíritu colaborador y compañerista, mostrando mayor disposición para apoyar a sus compañeros en las labores diarias del equipo.",
     "fecha": "2026-09-14",
     "acciones": []
    }
   ]
  },
  {
   "CC": "79968060",
   "NOMBRE": "Freddy Camilo Alberto Garcia",
   "CARGO": "COORDINADOR (A) DE SOPORTE TÉCNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Adalberto Fabre Parada",
   "COMP_AUTO": 3.28,
   "COMP_JEFE": 2.83,
   "COMP_COLAB": 4.71,
   "N_COLAB": 3,
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA6": 3.48,
   "PUNTAJE_POTENCIAL": 58.1,
   "PUNTAJE_DESEMPENO": 80.0,
   "INDICADORES": [
    {
     "grupo": "COORDINADOR DE SOPORTE TECNICO",
     "objetivo": "Asegurar la correcta ejecución de los servicios técnicos (instalaciones, mantenimientos,  reparaciones y garantías), cumpliendo con los estándares técnicos y de calidad definidos por KAIKA y las marcas representadas.",
     "peso": 50.0,
     "calificacion": 80.0,
     "pct": 80.0
    },
    {
     "grupo": "COORDINADOR DE SOPORTE TECNICO",
     "objetivo": "Fortalecer las capacidades técnicas del equipo asignado mediante la transferencia de conocimiento, acompañamiento y seguimiento a capacitaciones impartidas por fábrica o KAIKA a nivel nacional.",
     "peso": 25.0,
     "calificacion": 80.0,
     "pct": 80.0
    },
    {
     "grupo": "COORDINADOR DE SOPORTE TECNICO",
     "objetivo": "Garantizar la correcta gestión y ejecución de garantías técnicas, asegurando una atención oportuna, rentable y conforme a los estándares del fabricante.",
     "peso": 25.0,
     "calificacion": 80.0,
     "pct": 80.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 4.05
    },
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 4.02
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 3.85
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 3.73
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.45
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 3.22
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.18
    },
    {
     "nombre": "VISION ESTRATEGICA Y PENSAMIENTO ORGANIZACIONAL",
     "puntaje": 2.95
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 64.7,
   "COMPLETO": true,
   "REPORTA_A": "Adalberto Fabre Parada",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Táctico",
   "FEEDBACK": [
    {
     "evaluador": "Adalberto Fabre Parada",
     "cc_evaluador": "91283555",
     "rol": "Jefe",
     "aspectos": "Compromiso con la compañia, adaptacion al cambio y nuevas responsabilidades, conocimiento tecnico,",
     "recomendaciones": "Fortalecer: actividades propias del cargo, planificacion de actividades del equipo de trabajo, comunicacion y servicio al cliente, trabajo bajo presion, segumiento a las actividades del equipo de trabajo, puntualidad y cumplimiento en los horarios acordados. Mejorar la materializacion de las ideas propuestas.",
     "fecha": "2026-10-22",
     "acciones": []
    }
   ]
  },
  {
   "CC": "79998720",
   "NOMBRE": "Yerson Hernandez Berdugo",
   "CARGO": "ASESOR COMERCIAL",
   "AREA": "Comercial",
   "JEFE": "Diego Harley Gutierrez Laverde, Edwin Andres Abril Lucero, Rosemary Cortes Gonzalez",
   "COMP_AUTO": 1.9,
   "COMP_JEFE": 3.14,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 2.65,
   "PUNTAJE_POTENCIAL": 44.1,
   "PUNTAJE_DESEMPENO": 50.4,
   "INDICADORES": [
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de promoción y  seguimiento a clientes clave, asegurando la alineación de las soluciones ofrecidas con sus necesidades técnicas y de servicio y sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 25.0,
     "calificacion": 30.0,
     "pct": 48.3
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de ventas asignada, garantizando la  sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 50.0,
     "calificacion": 25.0,
     "pct": 55.0
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Monitorear el comportamiento del mercado, la competencia, los precios y las tendencias, entregando información útil para la toma de decisiones estratégicas.",
     "peso": 25.0,
     "calificacion": 30.0,
     "pct": 43.3
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 3.33
    },
    {
     "nombre": "GESTION DE RELACIONES Y EXPERIENCIA ORGANIZACIONAL",
     "puntaje": 2.93
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 2.53
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 2.53
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 2.47
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 46.0,
   "COMPLETO": true,
   "REPORTA_A": "Diego Harley Gutierrez Laverde, Edwin Andres Abril Lucero, Rosemary Cortes Gonzalez",
   "CIUDAD": "Bogotá",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Edwin Andres Abril Lucero",
     "cc_evaluador": "80039672",
     "rol": "Jefe",
     "aspectos": "Mantiene una actitud positiva, demuestra respeto en sus relaciones interpersonales y tiene buena disposición para apoyar",
     "recomendaciones": "Fortalecer la planificación y organización de sus actividades, priorizando oportunamente las tareas y realizando seguimiento a los compromisos adquirido",
     "fecha": "2026-09-27",
     "acciones": [
      {
       "competencia": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
       "objetivo": "Fortalecer la capacidad de planificación, organización y seguimiento de las actividades, estableciendo prioridades y tiempos claros que permitan alcanzar los objetivos y compromisos, garantizando resultados.",
       "accion": "Cumplir al menos el 95 % de las actividades y compromisos establecidos dentro de los tiempos definidos, realizando seguimiento periódico al plan de trabajo.",
       "fecha": "2026-10-30"
      }
     ]
    }
   ]
  },
  {
   "CC": "80025031",
   "NOMBRE": "Diego Fernando Rosas Jara",
   "CARGO": "COORDINADOR (A) DE SOPORTE TÉCNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Adalberto Fabre Parada",
   "COMP_AUTO": 4.03,
   "COMP_JEFE": 2.72,
   "COMP_COLAB": 2.7,
   "N_COLAB": 9,
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA6": 2.98,
   "PUNTAJE_POTENCIAL": 49.6,
   "PUNTAJE_DESEMPENO": 80.0,
   "INDICADORES": [
    {
     "grupo": "COORDINADOR DE SOPORTE TECNICO",
     "objetivo": "Asegurar la correcta ejecución de los servicios técnicos (instalaciones, mantenimientos,  reparaciones y garantías), cumpliendo con los estándares técnicos y de calidad definidos por KAIKA y las marcas representadas.",
     "peso": 50.0,
     "calificacion": 80.0,
     "pct": 80.0
    },
    {
     "grupo": "COORDINADOR DE SOPORTE TECNICO",
     "objetivo": "Fortalecer las capacidades técnicas del equipo asignado mediante la transferencia de conocimiento, acompañamiento y seguimiento a capacitaciones impartidas por fábrica o KAIKA a nivel nacional.",
     "peso": 25.0,
     "calificacion": 80.0,
     "pct": 80.0
    },
    {
     "grupo": "COORDINADOR DE SOPORTE TECNICO",
     "objetivo": "Garantizar la correcta gestión y ejecución de garantías técnicas, asegurando una atención oportuna, rentable y conforme a los estándares del fabricante.",
     "peso": 25.0,
     "calificacion": 80.0,
     "pct": 80.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 3.59
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 3.44
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 3.01
    },
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 2.88
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 2.76
    },
    {
     "nombre": "VISION ESTRATEGICA Y PENSAMIENTO ORGANIZACIONAL",
     "puntaje": 2.64
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 2.62
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 2.59
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 58.7,
   "COMPLETO": true,
   "REPORTA_A": "Adalberto Fabre Parada",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Táctico",
   "FEEDBACK": [
    {
     "evaluador": "Adalberto Fabre Parada",
     "cc_evaluador": "91283555",
     "rol": "Jefe",
     "aspectos": "Compromiso con la compañia, adaptacion al cambio y nuevas responsabilidades, conocimiento tecnico.",
     "recomendaciones": "Fortalecer: actividades propias del cargo, planificacion y segumiento de actividades del equipo de trabajo, comunicacion y servicio al cliente, trabajo bajo presion, Puntualidad y cumplimiento en los horarios acordados. Mejorar la materializacion de las ideas propuestas, Promover un ambiemte laboral positivo, fomentando el respeto, la colaboracion y las buenas relaciones entre compañeros.",
     "fecha": "2026-10-22",
     "acciones": []
    }
   ]
  },
  {
   "CC": "80028308",
   "NOMBRE": "Oscar Ivan Valencia Morales",
   "CARGO": "COORDINADOR DE IMPORTACIONES",
   "AREA": "Administrativo",
   "JEFE": "Sandra Patricia Rodriguez Cortes",
   "COMP_AUTO": 5.93,
   "COMP_JEFE": 4.2,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.89,
   "PUNTAJE_POTENCIAL": 81.6,
   "PUNTAJE_DESEMPENO": 72.0,
   "INDICADORES": [
    {
     "grupo": "COORDINADOR DE IMPORTACION",
     "objetivo": "Asegurar que los productos nacionales e importados requeridos por las áreas comercial, técnica y de servicio estén disponibles conforme a los cronogramas de ventas, mantenimiento y compromisos contractuales.",
     "peso": 35.0,
     "calificacion": 40.0,
     "pct": 40.0
    },
    {
     "grupo": "COORDINADOR DE IMPORTACION",
     "objetivo": "Controlar y reducir los costos asociados a las compras e importaciones (fletes, seguros, aranceles, transporte, almacenaje y tributos), manteniendo la eficiencia financiera y la calidad de los productos adquiridos.",
     "peso": 35.0,
     "calificacion": 80.0,
     "pct": 80.0
    },
    {
     "grupo": "COORDINADOR DE IMPORTACION",
     "objetivo": "Fomentar la eficiencia operativa, impulsando la excelencia operativa en los procesos de compras e importaciones",
     "peso": 30.0,
     "calificacion": 100.0,
     "pct": 100.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 5.4
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 5.2
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 5.0
    },
    {
     "nombre": "ORIENTACION A LA CALIDAD Y PRECISION",
     "puntaje": 5.0
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 5.0
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 4.87
    },
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 4.67
    },
    {
     "nombre": "VISION ESTRATEGICA Y PENSAMIENTO ORGANIZACIONAL",
     "puntaje": 4.6
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 78.7,
   "COMPLETO": true,
   "REPORTA_A": "Sandra Patricia Rodriguez Cortes",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Táctico",
   "FEEDBACK": [
    {
     "evaluador": "Sandra Patricia Rodriguez Cortes",
     "cc_evaluador": "52249658",
     "rol": "Jefe",
     "aspectos": "Cumple a cabalidad con todas las solicitudes de importaciones dentro de los tiempos establecidos para cada unidad de negocio.  Apoya la implementación de nuevas ideas con su equipo, ahora con su nueva asistente y se espera que apoye la implementación de uso de plástico y la consecución de información ante la DIAN para clientes con equipos antiguos. Ha implementado cuadros de control que esta automatizando y que con el tiempo serán de gran utilidad para la asistente de importaciones porque facilitará el control y seguimiento, pero también el análisis del coordinador y dará información a la dirección para la toma de decisiones. Hace frecuentemente negociaciones con los proveedores buscando mejorar condiciones, tarifas y tiempos.",
     "recomendaciones": "Hay una oportunidad de mejora en el análisis de la información y en los reportes que entregará a Dirección de ventas, gerencia  general, administrativa. OJO NOAPLICA AL PERFIL: Promueve un clima de confianza y compromiso, reconociendo logros y motivando la participación activa de los líderes de área,EL PEFIRL NO MIDE LOGROS DE OTRAS AREAS.OJO NO SON INVERSIONES SINO NEGOCIACION. Establece alianzas o decisiones de inversión/desinversión basadas en el impacto a largo plazo para la organización. NO AP'LICA:Analiza información del mercado y de la competencia para definir prioridades estratégicas y oportunidades de crecimiento.",
     "fecha": "2026-09-18",
     "acciones": []
    }
   ]
  },
  {
   "CC": "80039672",
   "NOMBRE": "Edwin Andres Abril Lucero",
   "CARGO": "DIRECTOR COMERCIAL",
   "AREA": "Comercial",
   "JEFE": "Claudia Marcela Osorio Borda",
   "COMP_AUTO": 4.27,
   "COMP_JEFE": 4.03,
   "COMP_COLAB": 4.21,
   "N_COLAB": 11,
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA6": 4.13,
   "PUNTAJE_POTENCIAL": 68.9,
   "PUNTAJE_DESEMPENO": 77.5,
   "INDICADORES": [
    {
     "grupo": "DIRECTOR COMERCIAL",
     "objetivo": "Diseñar y ejecutar el plan estratégico anual de la línea, garantizando el cumplimiento de metas de ventas, rentabilidad, crecimiento y posicionamiento en el mercado.",
     "peso": 50.0,
     "calificacion": 8.0,
     "pct": 80.0
    },
    {
     "grupo": "DIRECTOR COMERCIAL",
     "objetivo": "Fortalecer las relaciones con las marcas representadas y fabricantes internacionales en las regionales, garantizando soporte comercial y de capacitación oportuno.",
     "peso": 25.0,
     "calificacion": 7.0,
     "pct": 70.0
    },
    {
     "grupo": "DIRECTOR COMERCIAL",
     "objetivo": "Optimizar los márgenes, precios y costos operativos de la línea, garantizando una rentabilidad sostenida y una adecuada rotación de cartera y stock comercial (fechas de vencimiento).",
     "peso": 25.0,
     "calificacion": 8.0,
     "pct": 80.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.41
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.34
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.23
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.11
    },
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 4.1
    },
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 4.08
    },
    {
     "nombre": "GESTION DE RELACIONES Y EXPERIENCIA ORGANIZACIONAL",
     "puntaje": 3.97
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 3.85
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 71.5,
   "COMPLETO": true,
   "REPORTA_A": "Claudia Marcela Osorio Borda",
   "CIUDAD": "Bogotá",
   "NIVEL_CARGO": "Directivo",
   "FEEDBACK": []
  },
  {
   "CC": "80040800",
   "NOMBRE": "Diego Alejandro Ordonez Rodriguez",
   "CARGO": "PROFESIONAL DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Freddy Camilo Alberto Garcia",
   "COMP_AUTO": 4.08,
   "COMP_JEFE": 3.17,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 3.53,
   "PUNTAJE_POTENCIAL": 58.9,
   "PUNTAJE_DESEMPENO": null,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Brindar atención técnica y posventa de alto nivel, generando confianza, fidelización y satisfacción en los clientes atendidos, fortaleciendo la imagen de KAIKA como aliado técnico confiable.",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar el correcto diligenciamiento, archivo y control de los reportes técnicos, formatos de servicio, registros en sistemas internos y documentación asociada a repuestos, garantías y certificaciones.",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar que las actividades de instalación, mantenimiento, diagnóstico y reparación de equipos se ejecuten bajo los más altos estándares técnicos, de calidad y seguridad, cumpliendo con los tiempos, normativas y procedimientos establecidos por KAIKA y los fabricantes.",
     "peso": 40.0,
     "calificacion": null,
     "pct": null
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 3.67
    },
    {
     "nombre": "ADAPTABILIDAD",
     "puntaje": 3.6
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.47
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.4
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": null,
   "COMPLETO": false,
   "REPORTA_A": "Freddy Camilo Alberto Garcia",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Freddy Camilo Alberto Garcia",
     "cc_evaluador": "79968060",
     "rol": "Jefe",
     "aspectos": "una de las fortalezas que tiene el profesional es el conocimiento y experiencia sobre los equipos a los que brinda soporte tecnico",
     "recomendaciones": "como recomendación, se sugiere la capacitación en fabrica de los diferentes equipos a los que le brinda soporte técnico.",
     "fecha": "2026-10-22",
     "acciones": []
    }
   ]
  },
  {
   "CC": "80048551",
   "NOMBRE": "Andres Armando Sosa Villarraga",
   "CARGO": "ESPECIALISTA DE PRODUCTO",
   "AREA": "Comercial",
   "JEFE": "Andres David Rueda Acevedo, Diego Harley Gutierrez Laverde, Edwin Andres Abril Lucero, Rosemary Cortes Gonzalez",
   "COMP_AUTO": 4.0,
   "COMP_JEFE": 3.84,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 3.91,
   "PUNTAJE_POTENCIAL": 65.1,
   "PUNTAJE_DESEMPENO": null,
   "INDICADORES": [],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.4
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.1
    },
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 3.95
    },
    {
     "nombre": "GESTION DE APLICACIONES Y VALIDACION TECNICA",
     "puntaje": 3.85
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.8
    },
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 3.8
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 3.75
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.6
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": null,
   "COMPLETO": false,
   "REPORTA_A": "Andres David Rueda Acevedo, Diego Harley Gutierrez Laverde, Edwin Andres Abril Lucero, Rosemary Cortes Gonzalez",
   "CIUDAD": "Bogotá",
   "NIVEL_CARGO": "Táctico",
   "FEEDBACK": [
    {
     "evaluador": "Andres David Rueda Acevedo",
     "cc_evaluador": "13741223",
     "rol": "Jefe",
     "aspectos": "Andrés, es una persona que aun con sus múltiples obligaciones (asesor y especialista) se esmera por cumplir su rol de asesor (no puedo opinar como especialista ya que no es mi línea), adicionalmente tiene una excelente relación con sus clientes y sabe interpretar sus necesidades.",
     "recomendaciones": "Considero importante que pueda organizar su tiempo (si su rol de especialista lo permite) para que pueda tener una mayor frecuencia de visitas a sus clientes menos importantes y de esta forma poder aumentar sus oportunidades.",
     "fecha": "2026-09-17",
     "acciones": []
    },
    {
     "evaluador": "Edwin Andres Abril Lucero",
     "cc_evaluador": "80039672",
     "rol": "Jefe",
     "aspectos": "Se destaca por su compromiso y responsabilidad en el cumplimiento de sus funciones, manteniendo una actitud positiva y disposición para apoyar al equipo",
     "recomendaciones": "Fortalecer la planificación y organización de sus actividades, priorizando oportunamente las tareas y realizando seguimiento a los compromisos adquiridos",
     "fecha": "2026-09-27",
     "acciones": [
      {
       "competencia": "LIDERAZGO TRANSFORMACIONAL",
       "objetivo": "Fortalecer las habilidades de liderazgo, iniciativa y comunicación del colaborador, promoviendo una influencia positiva en el equipo y una mayor participación en iniciativas orientadas al desarrollo de las personas",
       "accion": "Liderar o participar activamente en al menos 2 iniciativas de mejora o trabajo colaborativo.",
       "fecha": "2026-11-30"
      }
     ]
    }
   ]
  },
  {
   "CC": "80052017",
   "NOMBRE": "Andres Leon Duarte",
   "CARGO": "AUXILIAR DE ALMACEN",
   "AREA": "Almacén",
   "JEFE": "Hugo Enrique Garcia Bautista",
   "COMP_AUTO": 5.0,
   "COMP_JEFE": 4.53,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.72,
   "PUNTAJE_POTENCIAL": 78.7,
   "PUNTAJE_DESEMPENO": 99.4,
   "INDICADORES": [
    {
     "grupo": "AUXILIAR DE ALMACEN",
     "objetivo": "Cumplir con la preparación y entrega de pedidos en tiempo, forma y condiciones adecuadas, garantizando la satisfacción del cliente interno y externo y la integridad de los productos biomédicos.",
     "peso": 40.0,
     "calificacion": 99.8,
     "pct": 99.8
    },
    {
     "grupo": "AUXILIAR DE ALMACEN",
     "objetivo": "Garantizar la correcta organización, actualización y conciliación de los inventarios, evitando pérdidas, deterioros o diferencias que afecten la confiabilidad de la información contable y logística.",
     "peso": 60.0,
     "calificacion": 99.12,
     "pct": 99.1
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 5.0
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.87
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.73
    },
    {
     "nombre": "GESTION ESTRATEGICA DE LA INFORMACION Y TOMA DE DECISIONES",
     "puntaje": 4.6
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.4
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 84.9,
   "COMPLETO": true,
   "REPORTA_A": "Hugo Enrique Garcia Bautista",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Operativo",
   "FEEDBACK": [
    {
     "evaluador": "Hugo Enrique Garcia Bautista",
     "cc_evaluador": "80065681",
     "rol": "Jefe",
     "aspectos": "Se adapta con facilidad a nuevos procesos y cambios operativos, mostrando siempre una actitud positiva y proactiva ante ajustes en sus funciones.rinda acompañamiento constante a su equipo, compartiendo conocimiento y colaborando activamente en momentos de alta carga laboral.",
     "recomendaciones": "Fortalecer sus conocimientos en labores administrativas, mostrando mayor iniciativa para aprender procesos de gestión documental, indicadores y manejo de herramientas ofimáticas que complementen su rol operativo.",
     "fecha": "2026-09-11",
     "acciones": []
    }
   ]
  },
  {
   "CC": "80065681",
   "NOMBRE": "Hugo Enrique Garcia Bautista",
   "CARGO": "COORDINADOR LOGISTICO",
   "AREA": "Almacén",
   "JEFE": "Sandra Patricia Rodriguez Cortes",
   "COMP_AUTO": 4.32,
   "COMP_JEFE": 4.24,
   "COMP_COLAB": 4.62,
   "N_COLAB": 5,
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA6": 4.37,
   "PUNTAJE_POTENCIAL": 72.9,
   "PUNTAJE_DESEMPENO": 82.8,
   "INDICADORES": [
    {
     "grupo": "COORDINADOR LOGISTICO",
     "objetivo": "Garantizar la entrega oportuna, completa y en buenas condiciones de los pedidos, asegurando la satisfacción del cliente y la confiabilidad del proceso logístico.",
     "peso": 20.0,
     "calificacion": 98.0,
     "pct": 98.0
    },
    {
     "grupo": "COORDINADOR LOGISTICO",
     "objetivo": "Identificar, segregar y gestionar materiales que no cumplen con los estándares de calidad o requisitos, impidiendo su uso, despacho o mezcla accidental con productos conformes, garantizando así la satisfacción del cliente y la integridad del inventario",
     "peso": 20.0,
     "calificacion": 98.0,
     "pct": 98.0
    },
    {
     "grupo": "COORDINADOR LOGISTICO",
     "objetivo": "Mantener el control total sobre los inventarios, asegurando su precisión, disponibilidad y trazabilidad, minimizando pérdidas, sobrantes o faltantes.",
     "peso": 40.0,
     "calificacion": 99.0,
     "pct": 99.0
    },
    {
     "grupo": "COORDINADOR LOGISTICO",
     "objetivo": "Optimizar la eficiencia operativa en las actividades de almacenamiento, alistamiento y despacho, garantizando la correcta planeación y ejecución de las operaciones de bodega y despachos.",
     "peso": 20.0,
     "calificacion": 20.0,
     "pct": 20.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.71
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.56
    },
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 4.56
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.53
    },
    {
     "nombre": "VISION ESTRATEGICA Y PENSAMIENTO ORGANIZACIONAL",
     "puntaje": 4.33
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 4.27
    },
    {
     "nombre": "GESTION DE RIESGO, CONTROL Y CUMPLIMIENTO",
     "puntaje": 4.1
    },
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 4.0
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 75.8,
   "COMPLETO": true,
   "REPORTA_A": "Sandra Patricia Rodriguez Cortes",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Táctico",
   "FEEDBACK": [
    {
     "evaluador": "Sandra Patricia Rodriguez Cortes",
     "cc_evaluador": "52249658",
     "rol": "Jefe",
     "aspectos": "Se destaca por cuestionar los procedimientos, revisar si se están cumpliendo o no y hacer sugerencias para mejorarlos.  Tiene en cuenta las ideas y aportes de su equipo y ha hecho implementaciones con ellas.  ESO APLICA PARCIALMENTE- PERFIL NO MANEJA DAOS FINANCIEROS-Analiza datos técnicos, financieros y operativos para proponer mejoras en la planificación y el control, buscando que la información sea precisa y útil para la toma de decisiones.-Ejecuta los controles financieros y tributarios asignados, validando la exactitud de los registros para el cumplimiento legal y la transparencia mediante la aplicación de rigor técnico en su gestión. calificado como cumple. Analiza datos técnicos, financieros y operativos para proponer mejoras en la identificación de riesgos, buscando que la información sea precisa y útil para la toma de decisiones. Ejecuta los controles financieros.",
     "recomendaciones": "Hay una oportunidad de mejora en el control de gastos. Hay que comparar precios, plazos de pagos y beneficios con otros proveedores para garantizar que estén dando las mejores condiciones.  Puede mejorar las mediciones y análisis de los productos a vencer para tener una mejor predicción y toma de decisiones por parte del área comercial. coordinar con la directora nacional de ventas las reuniones de producto no conforme y por vencer ya que los DC y CST no toman acción como responsables y debemos garantizar que haya una.",
     "fecha": "2026-09-10",
     "acciones": []
    }
   ]
  },
  {
   "CC": "80069939",
   "NOMBRE": "John Erwing Gomez Rubio",
   "CARGO": "COORDINADOR DE INVENTARIOS",
   "AREA": "Administrativo",
   "JEFE": "Sandra Patricia Rodriguez Cortes",
   "COMP_AUTO": 5.0,
   "COMP_JEFE": 4.08,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.45,
   "PUNTAJE_POTENCIAL": 74.2,
   "PUNTAJE_DESEMPENO": 77.0,
   "INDICADORES": [
    {
     "grupo": "COORDINADOR DE INVENTARIOS",
     "objetivo": "Garantizar la disponibilidad oportuna y eficiente de productos, equipos y repuestos requeridos por las áreas técnicas, comerciales y de servicio.",
     "peso": 20.0,
     "calificacion": 60.0,
     "pct": 60.0
    },
    {
     "grupo": "COORDINADOR DE INVENTARIOS",
     "objetivo": "Implementar prácticas de planeación basadas en análisis de datos y proyecciones de demanda para mejorar la eficiencia del abastecimiento.",
     "peso": 15.0,
     "calificacion": 0.0,
     "pct": 0.0
    },
    {
     "grupo": "COORDINADOR DE INVENTARIOS",
     "objetivo": "Mantener la exactitud y confiabilidad de la información de inventarios físicos, contables y del sistema ERP.",
     "peso": 40.0,
     "calificacion": 100.0,
     "pct": 100.0
    },
    {
     "grupo": "COORDINADOR DE INVENTARIOS",
     "objetivo": "Optimizar los niveles de inventario para asegurar una gestión rentable, eficiente y alineada con la rotación de productos.",
     "peso": 25.0,
     "calificacion": 100.0,
     "pct": 100.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 5.07
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.93
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.8
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.6
    },
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 4.53
    },
    {
     "nombre": "VISION ESTRATEGICA Y PENSAMIENTO ORGANIZACIONAL",
     "puntaje": 3.93
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 3.87
    },
    {
     "nombre": "GESTION DE RIESGO, CONTROL Y CUMPLIMIENTO",
     "puntaje": 3.87
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 75.0,
   "COMPLETO": true,
   "REPORTA_A": "Sandra Patricia Rodriguez Cortes",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Táctico",
   "FEEDBACK": [
    {
     "evaluador": "Sandra Patricia Rodriguez Cortes",
     "cc_evaluador": "52249658",
     "rol": "Jefe",
     "aspectos": "Es una persona que se preocupa por que las necesidades de facturación se cumplan, se esfuerza por hacer sus tareas de forma eficiente y completa, se comunica de forma eficiente con la demás áreas para garantizar que la operación fluya, verifica, mas allá de sus funciones que los demás procesos hayan terminado, cuando se requiere y apoya otras áreas para garantizar la satisfacción de cliente final. Se preocupa por controlar gastos innecesarios, por reportar el mal manejo de lo recursos o de tareas que se dupliquen o sean reproceso, así no sea de su área, contribuyendo al  control de gastos y por lo tanto al cumplimiento de metas de utilidades de la compañía. Hay una oportunidad de mejora en kpi de rotación para definir la periodicidad si semestral o anual, con el fin de que tengamos información que sirva para toma de decisiones en este momento.  Ha hecho un dash board que facilita el control de edades de inventario para cada unidad de negocio.( Entre los KPI autorizados, no esta este, por favor revisar: Implementar prácticas de planeación basadas en análisis de datos y proyecciones de demanda para mejorar la eficiencia del abastecimiento - calificación = 0 por recomendación de Julieth).)",
     "recomendaciones": "Debe mejorar la entrega de la información a los responsables de área incluyendo los inventarios por edades y enviando el kpi de rotacion de inventario mensualmente o presentarlo en un dash board.  hay una oportunidad de mejora para John y en el proceso como tal que debemos revisar como organización. Puede buscar opciones para mejorar el proceso, sugerir cambios o proponer alternativas que faciliten sus labores diarias, no solo esperar que la empresa lo proponga. Puede mejorar el seguimiento a las tareas y tiempos asignados, proponiendo cambios en los tiempos de entrega o aclarando o justificando los motivos de sus retrasos, pero siempre haciendo un cambio en el cronograma previamente, en lugar de incumplir.",
     "fecha": "2026-09-09",
     "acciones": []
    }
   ]
  },
  {
   "CC": "80074282",
   "NOMBRE": "Diego Harley Gutierrez Laverde",
   "CARGO": "DIRECTOR COMERCIAL",
   "AREA": "Comercial",
   "JEFE": "Claudia Marcela Osorio Borda",
   "COMP_AUTO": 4.67,
   "COMP_JEFE": 3.57,
   "COMP_COLAB": 3.19,
   "N_COLAB": 11,
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA6": 3.67,
   "PUNTAJE_POTENCIAL": 61.2,
   "PUNTAJE_DESEMPENO": 70.0,
   "INDICADORES": [
    {
     "grupo": "DIRECTOR COMERCIAL",
     "objetivo": "Diseñar y ejecutar el plan estratégico anual de la línea, garantizando el cumplimiento de metas de ventas, rentabilidad, crecimiento y posicionamiento en el mercado.",
     "peso": 50.0,
     "calificacion": 7.0,
     "pct": 70.0
    },
    {
     "grupo": "DIRECTOR COMERCIAL",
     "objetivo": "Fortalecer las relaciones con las marcas representadas y fabricantes internacionales en las regionales, garantizando soporte comercial y de capacitación oportuno.",
     "peso": 25.0,
     "calificacion": 6.0,
     "pct": 60.0
    },
    {
     "grupo": "DIRECTOR COMERCIAL",
     "objetivo": "Optimizar los márgenes, precios y costos operativos de la línea, garantizando una rentabilidad sostenida y una adecuada rotación de cartera y stock comercial (fechas de vencimiento).",
     "peso": 25.0,
     "calificacion": 8.0,
     "pct": 80.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 4.22
    },
    {
     "nombre": "GESTION DE RELACIONES Y EXPERIENCIA ORGANIZACIONAL",
     "puntaje": 3.86
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.79
    },
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 3.76
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 3.71
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 3.68
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 3.57
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.01
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 63.9,
   "COMPLETO": true,
   "REPORTA_A": "Claudia Marcela Osorio Borda",
   "CIUDAD": "Bogotá",
   "NIVEL_CARGO": "Directivo",
   "FEEDBACK": []
  },
  {
   "CC": "80093381",
   "NOMBRE": "Jorge Motta Esquivel",
   "CARGO": "PROFESIONAL DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Diego Fernando Rosas Jara",
   "COMP_AUTO": 4.92,
   "COMP_JEFE": null,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 100.0
   },
   "COMP_ESCALA6": 4.92,
   "PUNTAJE_POTENCIAL": 81.9,
   "PUNTAJE_DESEMPENO": null,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Brindar atención técnica y posventa de alto nivel, generando confianza, fidelización y satisfacción en los clientes atendidos, fortaleciendo la imagen de KAIKA como aliado técnico confiable.",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar el correcto diligenciamiento, archivo y control de los reportes técnicos, formatos de servicio, registros en sistemas internos y documentación asociada a repuestos, garantías y certificaciones.",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar que las actividades de instalación, mantenimiento, diagnóstico y reparación de equipos se ejecuten bajo los más altos estándares técnicos, de calidad y seguridad, cumpliendo con los tiempos, normativas y procedimientos establecidos por KAIKA y los fabricantes.",
     "peso": 40.0,
     "calificacion": null,
     "pct": null
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ADAPTABILIDAD",
     "puntaje": 5.0
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 5.0
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 5.0
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.67
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": null,
   "COMPLETO": false,
   "REPORTA_A": "Diego Fernando Rosas Jara",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": []
  },
  {
   "CC": "80192918",
   "NOMBRE": "Wilmer Salcedo Diaz",
   "CARGO": "ASESOR COMERCIAL",
   "AREA": "Comercial",
   "JEFE": "Melissa Grossich Alfaro, Nazzira Villate Pineda",
   "COMP_AUTO": null,
   "COMP_JEFE": 4.6,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "jefe": 100.0
   },
   "COMP_ESCALA6": 4.6,
   "PUNTAJE_POTENCIAL": 76.7,
   "PUNTAJE_DESEMPENO": 77.5,
   "INDICADORES": [
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de promoción y  seguimiento a clientes clave, asegurando la alineación de las soluciones ofrecidas con sus necesidades técnicas y de servicio y sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 25.0,
     "calificacion": 8.0,
     "pct": 80.0
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de ventas asignada, garantizando la  sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 50.0,
     "calificacion": 7.0,
     "pct": 70.0
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Monitorear el comportamiento del mercado, la competencia, los precios y las tendencias, entregando información útil para la toma de decisiones estratégicas.",
     "peso": 25.0,
     "calificacion": 9.0,
     "pct": 90.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "GESTION DE RELACIONES Y EXPERIENCIA ORGANIZACIONAL",
     "puntaje": 5.33
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.67
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.67
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.33
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.67
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 76.9,
   "COMPLETO": true,
   "REPORTA_A": "Melissa Grossich Alfaro, Nazzira Villate Pineda",
   "CIUDAD": "Bogotá",
   "NIVEL_CARGO": "Táctico",
   "FEEDBACK": [
    {
     "evaluador": "Nazzira Villate Pineda",
     "cc_evaluador": "1019021830",
     "rol": "Jefe",
     "aspectos": "Se destaca su excelente desempeño comercial, evidenciado en el cumplimiento de sus objetivos de ventas, el compromiso con los clientes y la capacidad para generar relaciones comerciales de largo plazo. Su actitud proactiva, disciplina y orientación a resultados han contribuido de manera significativa al crecimiento del negocio.",
     "recomendaciones": "Continuar fortaleciendo la planificación y priorización de las actividades comerciales, seguir desarrollando estrategias para ampliar la cobertura de clientes, identificar nuevas oportunidades de negocio y fortalecer el crecimiento de las cuentas actuales, manteniendo el excelente nivel de servicio que lo caracteriza.",
     "fecha": "2026-09-30",
     "acciones": []
    }
   ]
  },
  {
   "CC": "80202650",
   "NOMBRE": "Julian Nicolas Bernal Hernandez",
   "CARGO": "COORDINADOR (A) DE SOPORTE TÉCNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Adalberto Fabre Parada",
   "COMP_AUTO": 4.28,
   "COMP_JEFE": 2.78,
   "COMP_COLAB": 4.71,
   "N_COLAB": 3,
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA6": 3.66,
   "PUNTAJE_POTENCIAL": 60.9,
   "PUNTAJE_DESEMPENO": 80.0,
   "INDICADORES": [
    {
     "grupo": "COORDINADOR DE SOPORTE TECNICO",
     "objetivo": "Asegurar la correcta ejecución de los servicios técnicos (instalaciones, mantenimientos,  reparaciones y garantías), cumpliendo con los estándares técnicos y de calidad definidos por KAIKA y las marcas representadas.",
     "peso": 50.0,
     "calificacion": 80.0,
     "pct": 80.0
    },
    {
     "grupo": "COORDINADOR DE SOPORTE TECNICO",
     "objetivo": "Fortalecer las capacidades técnicas del equipo asignado mediante la transferencia de conocimiento, acompañamiento y seguimiento a capacitaciones impartidas por fábrica o KAIKA a nivel nacional.",
     "peso": 25.0,
     "calificacion": 80.0,
     "pct": 80.0
    },
    {
     "grupo": "COORDINADOR DE SOPORTE TECNICO",
     "objetivo": "Garantizar la correcta gestión y ejecución de garantías técnicas, asegurando una atención oportuna, rentable y conforme a los estándares del fabricante.",
     "peso": 25.0,
     "calificacion": 80.0,
     "pct": 80.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 4.32
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.03
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 3.95
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.5
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 3.4
    },
    {
     "nombre": "VISION ESTRATEGICA Y PENSAMIENTO ORGANIZACIONAL",
     "puntaje": 3.38
    },
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 3.3
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.17
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 66.7,
   "COMPLETO": true,
   "REPORTA_A": "Adalberto Fabre Parada",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Táctico",
   "FEEDBACK": [
    {
     "evaluador": "Adalberto Fabre Parada",
     "cc_evaluador": "91283555",
     "rol": "Jefe",
     "aspectos": "Compromiso con la compañia, cumplimiento y gestion de actividades, puntualidad, adaptacion al cambio, conocimiento tecnico.",
     "recomendaciones": "Fortalecer: actividades propias del cargo, planificacion de actitividades del equipo de trabajo,comunicacion y servicio la cliente, trabajo bajo presion, ejecucion oportuna de actividades para evitar la postergacion de tareas y acumulacion de pendientes..",
     "fecha": "2026-10-22",
     "acciones": []
    }
   ]
  },
  {
   "CC": "80222131",
   "NOMBRE": "Jairo Antonio Mogollon Barbosa",
   "CARGO": "MENSAJERO",
   "AREA": "Administrativo",
   "JEFE": "Sandra Patricia Rodriguez Cortes",
   "COMP_AUTO": 5.47,
   "COMP_JEFE": 3.8,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 4.47,
   "PUNTAJE_POTENCIAL": 74.4,
   "PUNTAJE_DESEMPENO": 40.0,
   "INDICADORES": [
    {
     "grupo": "MENSAJERO",
     "objetivo": "Asegurar que todas las diligencias administrativas, financieras, legales y logísticas asignadas se realicen dentro de los tiempos establecidos, garantizando la correcta entrega, confidencialidad y custodia de documentos, valores y elementos transportados.",
     "peso": 50.0,
     "calificacion": 40.0,
     "pct": 40.0
    },
    {
     "grupo": "MENSAJERO",
     "objetivo": "Brindar soporte administrativo, operativo y logístico eficiente a las diferentes áreas de la empresa",
     "peso": 50.0,
     "calificacion": 40.0,
     "pct": 40.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.67
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.6
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.53
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.4
    },
    {
     "nombre": "GESTION ESTRATEGICA DE LA INFORMACION Y TOMA DE DECISIONES",
     "puntaje": 4.13
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 64.1,
   "COMPLETO": true,
   "REPORTA_A": "Sandra Patricia Rodriguez Cortes",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Operativo",
   "FEEDBACK": [
    {
     "evaluador": "Sandra Patricia Rodriguez Cortes",
     "cc_evaluador": "52249658",
     "rol": "Jefe",
     "aspectos": "Aporta con su conocimiento de rutas para que rinda mas, mejorando tiempos.  Esta pendiente de hacer la revisión de facturas evidenciado falta de lote, serie etc. evitando errores o envíos errados.  Informa sobre cambios en los procesos de entrega de cada cliente, informa cada vez que tiene algún inconveniente para reprogramar o hacer cambios de ruta, así mismo busca solucionar los problemas antes de reportarlos para agilizar los tramites. Tiene buena actitud y colabora con todas las actividades, tiene una buena comunicación y ha mejorado el proceso.",
     "recomendaciones": "Actualmente no pasa las facturas que no tienen factura electrónica, pero la falla no esta en el proceso sino en el no envío por parte del tercero, por lo que debe adjuntar un soporte de reclamación ante el tercero y su correspondiente respuesta, con ello, el reembolso se hará, haciendo un listado o lista negra donde no se vuelva a comprar allí y también enviar comunicaciones donde sea necesario utilizarlos, por ejemplo parqueadero de Tequendama donde queda Servioftalmos y otros, donde tardan más de 15 días o no lo envían.. Hay una oportunidad de mejora en el formato de trazabilidad de ruta incluyendo una casilla con el motivo de incumplimiento por ejemplo: falta de documento, documento errado, dirección incorrecta, contacto errado, falta de coordinación, mala comunicación etc.  Deben medir los indicadores, reportar cada anomalía, falla o reproceso generado.",
     "fecha": "2026-09-22",
     "acciones": []
    }
   ]
  },
  {
   "CC": "80505174",
   "NOMBRE": "Humberto Javier Duran Cortes",
   "CARGO": "GERENTE GENERAL",
   "AREA": "Gerencia",
   "JEFE": "",
   "COMP_AUTO": 4.97,
   "COMP_JEFE": null,
   "COMP_COLAB": 4.14,
   "N_COLAB": 6,
   "PESOS_ROL": {
    "auto": 40.0,
    "colab": 60.0
   },
   "COMP_ESCALA6": 4.47,
   "PUNTAJE_POTENCIAL": 74.5,
   "PUNTAJE_DESEMPENO": null,
   "INDICADORES": [],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 4.99
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.6
    },
    {
     "nombre": "VISION ESTRATEGICA Y PENSAMIENTO ORGANIZACIONAL",
     "puntaje": 4.52
    },
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 4.49
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.39
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.37
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 4.27
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.27
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": null,
   "COMPLETO": false,
   "REPORTA_A": "",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Directivo",
   "FEEDBACK": []
  },
  {
   "CC": "80749326",
   "NOMBRE": "Jaider Enrique Gutierrez Huiguera",
   "CARGO": "PROFESIONAL DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Diego Fernando Rosas Jara",
   "COMP_AUTO": 3.83,
   "COMP_JEFE": null,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 100.0
   },
   "COMP_ESCALA6": 3.83,
   "PUNTAJE_POTENCIAL": 63.9,
   "PUNTAJE_DESEMPENO": null,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Brindar atención técnica y posventa de alto nivel, generando confianza, fidelización y satisfacción en los clientes atendidos, fortaleciendo la imagen de KAIKA como aliado técnico confiable.",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar el correcto diligenciamiento, archivo y control de los reportes técnicos, formatos de servicio, registros en sistemas internos y documentación asociada a repuestos, garantías y certificaciones.",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar que las actividades de instalación, mantenimiento, diagnóstico y reparación de equipos se ejecuten bajo los más altos estándares técnicos, de calidad y seguridad, cumpliendo con los tiempos, normativas y procedimientos establecidos por KAIKA y los fabricantes.",
     "peso": 40.0,
     "calificacion": null,
     "pct": null
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.0
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.0
    },
    {
     "nombre": "ADAPTABILIDAD",
     "puntaje": 3.67
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.67
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": null,
   "COMPLETO": false,
   "REPORTA_A": "Diego Fernando Rosas Jara",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": []
  },
  {
   "CC": "80800383",
   "NOMBRE": "Wilfredo Pulido Sandoval",
   "CARGO": "PROFESIONAL DE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Diego Fernando Rosas Jara",
   "COMP_AUTO": 5.33,
   "COMP_JEFE": null,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 100.0
   },
   "COMP_ESCALA6": 5.33,
   "PUNTAJE_POTENCIAL": 88.9,
   "PUNTAJE_DESEMPENO": null,
   "INDICADORES": [
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Brindar atención técnica y posventa de alto nivel, generando confianza, fidelización y satisfacción en los clientes atendidos, fortaleciendo la imagen de KAIKA como aliado técnico confiable.",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar el correcto diligenciamiento, archivo y control de los reportes técnicos, formatos de servicio, registros en sistemas internos y documentación asociada a repuestos, garantías y certificaciones.",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "PROFESIONAL DE SOPORTE TECNICO",
     "objetivo": "Garantizar que las actividades de instalación, mantenimiento, diagnóstico y reparación de equipos se ejecuten bajo los más altos estándares técnicos, de calidad y seguridad, cumpliendo con los tiempos, normativas y procedimientos establecidos por KAIKA y los fabricantes.",
     "peso": 40.0,
     "calificacion": null,
     "pct": null
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 5.67
    },
    {
     "nombre": "ADAPTABILIDAD",
     "puntaje": 5.33
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 5.33
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 5.0
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": null,
   "COMPLETO": false,
   "REPORTA_A": "Diego Fernando Rosas Jara",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": []
  },
  {
   "CC": "8569520",
   "NOMBRE": "Leonardo Santos Parra Contreras",
   "CARGO": "ASESOR COMERCIAL",
   "AREA": "Comercial",
   "JEFE": "Diego Harley Gutierrez Laverde, Edwin Andres Abril Lucero, Miguel Angel Bujato Bernal, Rosemary Cortes Gonzalez",
   "COMP_AUTO": 4.17,
   "COMP_JEFE": 3.77,
   "COMP_COLAB": null,
   "N_COLAB": 0,
   "PESOS_ROL": {
    "auto": 40.0,
    "jefe": 60.0
   },
   "COMP_ESCALA6": 3.93,
   "PUNTAJE_POTENCIAL": 65.4,
   "PUNTAJE_DESEMPENO": 59.7,
   "INDICADORES": [
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de promoción y  seguimiento a clientes clave, asegurando la alineación de las soluciones ofrecidas con sus necesidades técnicas y de servicio y sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 25.0,
     "calificacion": 80.0,
     "pct": 55.0
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Asegurar el cumplimiento de las metas de ventas asignada, garantizando la  sostenibilidad del negocio en la(s) línea(s), zona o región asignada.",
     "peso": 50.0,
     "calificacion": 100.0,
     "pct": 61.2
    },
    {
     "grupo": "ASESOR COMERCIAL",
     "objetivo": "Monitorear el comportamiento del mercado, la competencia, los precios y las tendencias, entregando información útil para la toma de decisiones estratégicas.",
     "peso": 25.0,
     "calificacion": 100.0,
     "pct": 61.2
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.03
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.03
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 3.98
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.78
    },
    {
     "nombre": "GESTION DE RELACIONES Y EXPERIENCIA ORGANIZACIONAL",
     "puntaje": 3.27
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 63.7,
   "COMPLETO": true,
   "REPORTA_A": "Diego Harley Gutierrez Laverde, Edwin Andres Abril Lucero, Miguel Angel Bujato Bernal, Rosemary Cortes Gonzalez",
   "CIUDAD": "Barranquilla",
   "NIVEL_CARGO": "Analítico",
   "FEEDBACK": [
    {
     "evaluador": "Miguel Angel Bujato Bernal",
     "cc_evaluador": "1129578858",
     "rol": "Jefe",
     "aspectos": "Resaltó el seguimiento continuo a las oportunidades de negocio para lograr el cierre de las mismas. También el compromiso por sobreentregar mas del presupuesto general asignado.",
     "recomendaciones": "Como oportunidad de mejora, debe organizar mas la parte administrativa de su cargo, apoyandose en la asistente regional, para tener carpetas organizadas en su equipo de computo o carpeta de Sharepoint.",
     "fecha": "2026-09-14",
     "acciones": []
    },
    {
     "evaluador": "Edwin Andres Abril Lucero",
     "cc_evaluador": "80039672",
     "rol": "Jefe",
     "aspectos": "Mantiene una actitud positiva, demuestra respeto en sus relaciones interpersonales y tiene buena disposición. Se recomienda mantener y seguir fortaleciendo estas fortalezas, ya que aportan positivamente a su desempeño y al ambiente laboral.",
     "recomendaciones": "Fortalecer la planificación y organización de sus actividades, priorizando oportunamente las tareas y realizando seguimiento a los compromisos adquiridos, con el fin de mejorar aún más la eficiencia y el cumplimiento de los objetivos.",
     "fecha": "2026-09-27",
     "acciones": [
      {
       "competencia": "INNOVACION Y MEJORA CONTINUA",
       "objetivo": "Fortalecer la capacidad para identificar oportunidades de mejora, proponer soluciones innovadoras y optimizar procesos, tiempos y recursos, contribuyendo al cumplimiento de los objetivos del equipo y de la organización.",
       "accion": "Presentar e implementar al menos 2 propuestas de mejora, realizando seguimiento a los resultados y documentando los beneficios obtenidos.",
       "fecha": "2026-11-30"
      }
     ]
    },
    {
     "evaluador": "Rosemary Cortes Gonzalez",
     "cc_evaluador": "39789716",
     "rol": "Jefe",
     "aspectos": "Demuestra compromiso con sus responsabilidades, buena disposición y buen relacionamiento con los clientes,",
     "recomendaciones": "Fortalecer la proactividad y mantener una comunicación más constante y oportuna con tus líderes, para que de esta manera nos podamos anticipar a necesidades y oportunidades.",
     "fecha": "2026-09-30",
     "acciones": []
    },
    {
     "evaluador": "Diego Harley Gutierrez Laverde",
     "cc_evaluador": "80074282",
     "rol": "Jefe",
     "aspectos": "compromiso, responsabilidad y empatia con clientes, son las fortalezas que veo en leonardo en su desempeño",
     "recomendaciones": null,
     "fecha": "2026-10-05",
     "acciones": []
    }
   ]
  },
  {
   "CC": "91283555",
   "NOMBRE": "Adalberto Fabre Parada",
   "CARGO": "GERENTE SOPORTE TECNICO",
   "AREA": "Soporte Técnico",
   "JEFE": "Humberto Javier Duran Cortes",
   "COMP_AUTO": 4.1,
   "COMP_JEFE": 3.27,
   "COMP_COLAB": 4.14,
   "N_COLAB": 8,
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA6": 3.7,
   "PUNTAJE_POTENCIAL": 61.6,
   "PUNTAJE_DESEMPENO": null,
   "INDICADORES": [
    {
     "grupo": "DIRECTORA TECNICA Y DE CALIDAD",
     "objetivo": "Cerrar oportunamente las acciones correctivas",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "DIRECTORA TECNICA Y DE CALIDAD",
     "objetivo": "Garantizar el cumplimiento de los requisitos regulatorios aplicables",
     "peso": 40.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "DIRECTORA TECNICA Y DE CALIDAD",
     "objetivo": "Garantizar las liberaciones de dispositivos medicos conforme a los lineamientos normativos",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "GERENTE DE SOPORTE TECNICO",
     "objetivo": "Asegurar que el personal técnico, coordinadores y asistentes cuenten con las competencias y conocimientos actualizados necesarios para ofrecer servicios especializados, seguros y de alta calidad.",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "GERENTE DE SOPORTE TECNICO",
     "objetivo": "Asegurar que los clientes reciban atención técnica confiable, ágil y efectiva, fortaleciendo su confianza y promoviendo la fidelización mediante una experiencia de servicio diferenciada.",
     "peso": 30.0,
     "calificacion": null,
     "pct": null
    },
    {
     "grupo": "GERENTE DE SOPORTE TECNICO",
     "objetivo": "Garantizar que las operaciones de soporte técnico y posventa a nivel nacional se desarrollen bajo los más altos estándares de calidad, productividad, cumplimiento técnico, seguridad y rentabilidad, optimizando el uso de recursos y la satisfacción del cliente.",
     "peso": 40.0,
     "calificacion": null,
     "pct": null
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.21
    },
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 4.02
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 3.97
    },
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 3.95
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 3.57
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 3.37
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 2.74
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": null,
   "COMPLETO": false,
   "REPORTA_A": "Humberto Javier Duran Cortes",
   "CIUDAD": "Bogota",
   "NIVEL_CARGO": "Directivo",
   "FEEDBACK": []
  },
  {
   "CC": "94510530",
   "NOMBRE": "Jhon Jairo Preciado Ortiz",
   "CARGO": "GERENTE REGIONAL",
   "AREA": "Comercial",
   "JEFE": "Claudia Marcela Osorio Borda",
   "COMP_AUTO": 4.53,
   "COMP_JEFE": 3.91,
   "COMP_COLAB": 4.76,
   "N_COLAB": 3,
   "PESOS_ROL": {
    "auto": 20.0,
    "jefe": 50.0,
    "colab": 30.0
   },
   "COMP_ESCALA6": 4.29,
   "PUNTAJE_POTENCIAL": 71.5,
   "PUNTAJE_DESEMPENO": 54.0,
   "INDICADORES": [
    {
     "grupo": "GERENTE REGIONAL",
     "objetivo": "Asegurar el cumplimiento de los objetivos comerciales y de crecimiento regional",
     "peso": 40.0,
     "calificacion": 40.0,
     "pct": 40.0
    },
    {
     "grupo": "GERENTE REGIONAL",
     "objetivo": "Fortalecer la gestión de cotizaciones y propuestas comerciales",
     "peso": 30.0,
     "calificacion": 60.0,
     "pct": 60.0
    },
    {
     "grupo": "GERENTE REGIONAL",
     "objetivo": "Garantizar la eficiencia y rentabilidad de las operaciones regionales",
     "peso": 20.0,
     "calificacion": 70.0,
     "pct": 70.0
    },
    {
     "grupo": "GERENTE REGIONAL",
     "objetivo": "Supervisar y controlar la gestión de licitaciones y subastas regionales",
     "peso": 10.0,
     "calificacion": 60.0,
     "pct": 60.0
    }
   ],
   "COMPETENCIAS": [
    {
     "nombre": "LIDERAZGO TRANSFORMACIONAL",
     "puntaje": 4.73
    },
    {
     "nombre": "APRENDIZAJE CONTINUO",
     "puntaje": 4.57
    },
    {
     "nombre": "ORIENTACION AL CLIENTE INTERNO / EXTERNO",
     "puntaje": 4.43
    },
    {
     "nombre": "INNOVACION Y MEJORA CONTINUA",
     "puntaje": 4.33
    },
    {
     "nombre": "ORIENTACIÓN AL RESULTADO Y RENTABILIDAD",
     "puntaje": 4.27
    },
    {
     "nombre": "PLANEACION OPERATIVA Y ORIENTACION A RESULTADOS",
     "puntaje": 4.27
    },
    {
     "nombre": "ENFOQUE ESTRATÉGICO Y ALINEACIÓN CORPORATIVA",
     "puntaje": 4.13
    },
    {
     "nombre": "VISION ESTRATEGICA Y PENSAMIENTO ORGANIZACIONAL",
     "puntaje": 4.01
    }
   ],
   "FOTO": "",
   "NOTA_FINAL": 66.3,
   "COMPLETO": true,
   "REPORTA_A": "Claudia Marcela Osorio Borda",
   "CIUDAD": "Cali",
   "NIVEL_CARGO": "Directivo",
   "FEEDBACK": []
  }
 ],
 "fuente_areas": "MATRIZ_DE_RELACION_KAIKA.xlsx (hoja USUARIOS, cruce por cédula)",
 "fuente_feedback": "normalfeedbcka.xlsx (RH_T_FEEDBACK) + actionsfeedkaika.xlsx (RH_T_FEEBACK_ACTIONS)"
};
