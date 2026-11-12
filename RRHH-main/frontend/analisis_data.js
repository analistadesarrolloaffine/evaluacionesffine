/**
 * Análisis consolidado de cada cliente (texto del consultor) que se agrega
 * al Informe global en PDF. Fuente: Informe_consolidado_de_evaluación_de_desempeño_<CLIENTE>.docx
 * Estructura: titulo, intro[], secciones[{ titulo, bloques[{tipo:"p"|"sub"|"accion", ...}] }]
 */
window.ANALISIS_CLIENTES = {
 "kaika": {
  "titulo": "Informe consolidado de evaluación de desempeño",
  "intro": [
   "Competencias organizacionales, de liderazgo y técnicas e indicadores de resultados",
   "Análisis para Gerencia y Talento Humano de su Primera medición de desempeño. Integra resultados cuantitativos, interpretación cualitativa, asociaciones entre variables, alertas metodológicas y recomendaciones de corto, mediano y largo plazo."
  ],
  "secciones": [
   {
    "titulo": "Resumen ejecutivo",
    "bloques": [
     {
      "tipo": "p",
      "texto": "KAIKA cuenta con una primera línea base aprovechable. El promedio de competencias es 4,20/6, el de indicadores 77,43% y la nota final promedio 72,21%. La principal oportunidad es consolidar comportamientos de trabajo mientras se sostienen los resultados, no implementar una capacitación general e indiferenciada."
     },
     {
      "tipo": "p",
      "texto": "Las prioridades son innovación y mejora continua, alineación estratégica, coordinación de Soporte Técnico y seguimiento de resultados comerciales."
     },
     {
      "tipo": "p",
      "texto": "Concepto general: medición útil como diagnóstico inicial, pero esta misma debe ser aplicada de manera continua para contar con información complementaria que permita arraigar la cultura de medición e ir calibrando las calificaciones y con esto poder concluir potencial futuro, preparación para ascensos o causas del desempeño. Se recomienda depurar y calibrar antes de utilizar las etiquetas automáticas para decisiones de alto impacto dado que no existe una serie histórica que permita afirmar estos criterios."
     },
     {
      "tipo": "p",
      "texto": "Los promedios por grupo se calcularon primero para cada persona y luego entre personas, asignando igual peso a cada colaborador. El promedio técnico por registro se distingue de ese promedio por persona, dado que no todos tienen la misma cantidad de competencias."
     },
     {
      "tipo": "p",
      "texto": "Se aplicaron correlaciones de Pearson y Spearman sobre puntuaciones redondeadas. Son asociaciones exploratorias, no causales."
     },
     {
      "tipo": "p",
      "texto": "El 68,4% se ubica en desarrollo al aplicar al global los rangos de competencias. La necesidad predominante es consolidar comportamientos de forma sostenida; los tres casos bajo 3 requieren revisión individual y acompañamiento focalizado. Una categoría no sustituye la evidencia del trabajo ni autoriza una decisión automática."
     },
     {
      "tipo": "p",
      "texto": "Comercial reúne 40 personas (42,1%) y Soporte Técnico 29 (30,5%): juntas representan el 72,6% del grupo analizado. Son los principales focos para intervenciones de mayor alcance. Almacén presenta el mayor resultado de indicadores (96,72%), pero la comparación no demuestra superioridad de talento: las metas, la dificultad y la exposición a factores externos difieren entre áreas."
     },
     {
      "tipo": "p",
      "texto": "Soporte Técnico tiene el menor promedio global de competencias (4,05) con indicadores de 82,06%. La señal es desarrollar la forma de coordinar y ejecutar sin perder respuesta operativa. Comercial registra 70,43% de indicadores: se deben revisar tanto conductas como embudo comercial, metas y dependencias. Las medias de Talento Humano (n=4), Almacén y Contabilidad (n=6 cada una) son sensibles a pocos casos."
     },
     {
      "tipo": "p",
      "texto": "Los seis coordinadores de Soporte Técnico promedian 3,49/6 y todos tienen indicadores exactamente de 80%. Sus medias por grupo son 3,46 organizacionales, 3,60 liderazgo y 3,44 técnicas. Se recomienda intervenir coordinación, delegación y priorización y, en paralelo, auditar la capacidad diferenciadora de ese KPI uniforme. No prueba incapacidad del rol: las exigencias y las conductas asignadas difieren frente a otros cargos."
     },
     {
      "tipo": "p",
      "texto": "Los 17 asesores comerciales promedian 4,11/6 y 67,54% en indicadores. Se recomienda revisar oportunidades estancadas, conversión, seguimiento y condiciones de cumplimiento por rol antes de asumir que el resultado se debe exclusivamente a competencias."
     }
    ]
   },
   {
    "titulo": "Análisis de los tres grupos de competencias",
    "bloques": [
     {
      "tipo": "sub",
      "texto": "Competencias Organizacionales"
     },
     {
      "tipo": "p",
      "texto": "Orientación al cliente es una fortaleza relativa (4,30), pero 61 personas todavía no llegan al umbral de fortaleza. Aprendizaje continuo alcanza 4,19: conviene medir aplicación y transferencia, no solo participación en cursos. Innovación y mejora continua tiene el menor promedio organizacional (4,12) y 70 personas fuera de fortaleza: la intervención debe facilitar pruebas de mejora, implementación y medición de beneficios."
     },
     {
      "tipo": "sub",
      "texto": "Competencias de liderazgo"
     },
     {
      "tipo": "p",
      "texto": "La mayor media en resultado y rentabilidad frente a enfoque estratégico (diferencia 0,307 puntos) sugiere una orientación más marcada a ejecución que a conexión corporativa; es una hipótesis para validar con evidencia. Ninguna media personal de liderazgo está bajo 3, pero existen dos registros prioritarios de liderazgo transformacional: el promedio no debe ocultarlos. Entre los mismos 33 evaluados, organizacionales promedia 4,268 y técnicas 4,102; liderazgo no representa una ventaja amplia sobre el resto de sus conductas."
     },
     {
      "tipo": "sub",
      "texto": "Competencias técnicas"
     },
     {
      "tipo": "p",
      "texto": "Visión estratégica y pensamiento organizacional (3,85; n=22) es la oportunidad técnica más clara entre las competencias con varios evaluados: tres prioritarios y tres fortalezas. Gestión de relaciones (4,09; n=28) y planeación operativa (4,22; n=64) complementan la necesidad de mejor coordinación y seguimiento. Adaptabilidad (4,41; n=18) ofrece una base relativa para impulsar cambios. Las competencias con n=1 no permiten inferencias empresariales."
     },
     {
      "tipo": "p",
      "texto": "En Soporte Técnico, liderazgo promedia 3,91 entre nueve personas, por debajo de las demás áreas. En Contabilidad solo una persona tiene ese grupo: su media no representa un patrón colectivo de liderazgo. Estas diferencias deben revisarse junto con el cargo, el evaluador y la pertinencia de los ítems."
     }
    ]
   },
   {
    "titulo": "Concepto final",
    "bloques": [
     {
      "tipo": "p",
      "texto": "La evaluación revela una base funcional de resultados y un conjunto amplio de comportamientos todavía en consolidación. Los hallazgos orientan a intervenir innovación aplicada, alineación estratégica y coordinación, con foco en Soporte Técnico y Comercial por su peso poblacional y patrones observados. La oportunidad no es solo individual: la pertinencia de ítems, la definición de KPI y la calidad del seguimiento también requieren intervención."
     },
     {
      "tipo": "p",
      "texto": "Los comentarios describen fortalezas de disposición al cambio, respuesta técnica, apoyo entre compañeros y atención al cliente. Las oportunidades más recurrentes se relacionan con priorización, oportunidad de entregas, comunicación entre áreas, delegación y ejecución de mejoras. La interpretación conjunta sugiere un reto de coordinación y gestión de compromisos, además del conocimiento técnico; no constituye una causa demostrada estadísticamente."
     }
    ]
   },
   {
    "titulo": "Recomendaciones",
    "bloques": [
     {
      "tipo": "sub",
      "texto": "Plan de cierre de brechas: corto, mediano y largo plazo"
     },
     {
      "tipo": "p",
      "texto": "Se proponen acciones ejecutables con herramientas existentes: calendario, hojas de cálculo, repositorios y reuniones de equipo. No se requiere inicialmente adquirir una plataforma ni contratar capacitación masiva. Los horizontes se cuentan desde la aprobación del plan. Las metas numéricas son propuestas de gestión, sujetas a validación de capacidad y línea base."
     },
     {
      "tipo": "accion",
      "plazo": "Corto plazo",
      "tiempo": "0–30 días",
      "titulo": "Calibrar y depurar la medición",
      "accion": "Dos sesiones de 90 minutos para revisar las cuatro fichas señaladas, el cero, los seis KPI uniformes de coordinación y las reglas de agregación. Conservar original y documentar correcciones.",
      "evidencia": "100% de las alertas identificadas resueltas o justificadas; diccionario de cálculo y matriz cargo–ítem actualizados."
     },
     {
      "tipo": "accion",
      "plazo": "Corto plazo",
      "tiempo": "0–90 días",
      "titulo": "Retroalimentación y planes individuales",
      "accion": "Conversación de 30–45 minutos por persona. Seleccionar máximo dos conductas, una práctica por conducta y revisión mensual de 15 minutos. Atender primero los registros prioritarios y riesgos del rol.",
      "evidencia": "95 conversaciones con plan o excepción justificada. Evidencia concreta, responsable y fecha; no confundir asistencia con desarrollo."
     },
     {
      "tipo": "accion",
      "plazo": "Corto plazo",
      "tiempo": "0–90 días",
      "titulo": "Mejorar compromisos y servicio entre áreas",
      "accion": "Tablero de solicitudes con responsable, fecha y ruta de escalamiento; reunión semanal de 15 minutos; revisión quincenal de cinco casos por equipo.",
      "evidencia": "Tras 30 días de línea base, proponer reducción relativa de 15% en compromisos vencidos al día 90, sin deteriorar calidad."
     },
     {
      "tipo": "accion",
      "plazo": "Mediano plazo",
      "tiempo": "3–6 meses",
      "titulo": "Fortalecer coordinación de Soporte Técnico",
      "accion": "Cuatro talleres internos de 90 minutos para seis coordinadores: delegación, priorización, feedback y alineación. Aplicar un caso real por taller y observación mensual del jefe.",
      "evidencia": "Cada coordinador utiliza un tablero semanal y realiza dos retroalimentaciones mensuales; registrar calidad de aplicación y cambios en entregas."
     },
     {
      "tipo": "accion",
      "plazo": "Mediano plazo",
      "tiempo": "3–6 meses",
      "titulo": "Activar innovación y mejora aplicada",
      "accion": "Un problema por área: establecer línea base, probar un ajuste durante cuatro semanas y comparar tiempos, errores o reprocesos. Máximo una hora semanal de equipo.",
      "evidencia": "Seis pilotos documentados; meta propuesta: al menos cuatro con beneficio verificable y sin deterioro del servicio."
     },
     {
      "tipo": "accion",
      "plazo": "Mediano plazo",
      "tiempo": "3–6 meses",
      "titulo": "Desarrollar aprendizaje y resultados por rol",
      "accion": "Asesores: revisión quincenal del embudo y casos estancados. Soporte: parejas de aprendizaje y dos casos documentados al mes. Verificar qué factores están bajo control del rol.",
      "evidencia": "Usar conversión, ciclo, entrega oportuna de reportes o calidad diagnóstica según cargo. Fijar metas tras validar los KPI, no aumentarlas automáticamente."
     },
     {
      "tipo": "accion",
      "plazo": "Largo plazo",
      "tiempo": "6–12 meses",
      "titulo": "Realizar un segundo ciclo comparable",
      "accion": "Definir perfiles, conductas, metas y fórmulas antes del periodo. Entrenar evaluadores con casos; mantener equivalencias de los ajustes. Añadir una fuente de observación pertinente donde sea viable.",
      "evidencia": "100% de roles con ítems aplicables y ficha técnica de KPI. Comparar cambios emparejados solo sobre conductas y periodos equivalentes."
     },
     {
      "tipo": "accion",
      "plazo": "Largo plazo",
      "tiempo": "6–12 meses",
      "titulo": "Desarrollar continuidad de talento",
      "accion": "Formalizar mentores y aprendizaje entre áreas. Evaluar nuevas responsabilidades con evidencia de proyectos, requisitos del rol e interés de la persona, no por etiqueta automática.",
      "evidencia": "Asignaciones documentadas y seguimiento de comportamientos y resultados en el nuevo alcance."
     }
    ]
   }
  ]
 },
 "unigas": {
  "titulo": "Informe consolidado de evaluación de desempeño",
  "intro": [
   "Documento de análisis para Gerencia y Gestión Humana de su primera medición de competencias y potencial. Integra resultados cuantitativos, relaciones entre variables, lectura cualitativa, comportamiento de los tres grupos de competencias del diccionario."
  ],
  "secciones": [
   {
    "titulo": "Resumen ejecutivo",
    "bloques": [
     {
      "tipo": "p",
      "texto": "La primera medición de UNIGAS cubre 133 colaboradores de 13 áreas. El promedio de competencias (reportado como desempeño) es 3,09/4, el de potencial 2,91/4 y la nota final promedio 76,33%. El 65,3% de las puntuaciones por competencia queda en el rango de fortaleza (434 de 665), solo el 1,5% es prioritario (10 registros, 7 personas) y el 60,9% de las personas tiene al menos una competencia por debajo de 3,0."
     },
     {
      "tipo": "p",
      "texto": "la medición es una línea base útil para abrir la conversación de desarrollo, pero su resultado debe leerse con cautela. Presenta señales de benevolencia (91% con desempeño \"alto\" y 67% con potencial \"alto\" según el mapa del reporte), baja diferenciación entre competencias y un efecto evaluador marcado: las diferencias entre quienes evalúan se asocian con el 37% de la variación de las calificaciones de competencias en los evaluadores con al menos cinco personas a cargo. Ese efecto no puede separarse de las diferencias reales de área y cargo."
     },
     {
      "tipo": "p",
      "texto": "Las prioridades de desarrollo son: Innovación y mejora continua (la competencia con menor promedio y la más baja en 46 personas), Comunicación efectiva (la más baja en 38) y la consistencia de Pista y Tienda, que concentran los promedios más bajos entre las áreas con más de cinco personas. Antes de usar las etiquetas de potencial o de \"aceleración\" para decisiones de promoción o sucesión, se recomienda calibrar evaluadores, revisar umbrales y validar el potencial con evidencia complementaria."
     }
    ]
   },
   {
    "titulo": "Resultados generales",
    "bloques": [
     {
      "tipo": "p",
      "texto": "La distribución se concentra entre 70% y 90% (97 personas, 72,9%). El potencial es más disperso (desviación estándar 0,52) que las competencias (0,37). Con el corte analítico de 3,0 en ambos componentes, 55 personas tienen competencias y potencial desde 3,0; 26 tienen competencias desde 3,0 y potencial menor; 9 tienen potencial desde 3,0 y competencias menores; y 43 están por debajo en ambos. Estos cortes son analíticos y no coinciden con los del mapa de talento del reporte."
     },
     {
      "tipo": "p",
      "texto": "Mapa de talento del reporte: 121 personas (91,0%) quedan en desempeño \"alto\" y 12 en \"medio\"; 89 (66,9%) quedan en potencial \"alto\" y 44 en \"medio\". En consecuencia, 87 personas (65,4%) quedan en la combinación alto–alto con recomendación de aceleración. Los datos sugieren que el desempeño alto comienza alrededor de 2,65 y el potencial alto alrededor de 2,7, valores cercanos a dos tercios de la escala y bastante inferiores al umbral de fortaleza de 3,0 usado para las competencias. Esa diferencia de criterios debe resolverse antes de utilizar el mapa para decisiones."
     }
    ]
   },
   {
    "titulo": "Resultados por área y por cargo",
    "bloques": [
     {
      "tipo": "p",
      "texto": "Pista (52 personas, 39,1%) y Unitrans (27, 20,3%) concentran el 59,4% de los evaluados; con Estaciones y Tienda, las cuatro unidades operativas suman 104 personas (78,2%). Pista promedia 3,00 en competencias y 2,74 en potencial; Unitrans, 3,24 y 3,34, la mayor brecha entre ambas unidades. Tienda (n=8) muestra los menores promedios entre las áreas con más de cinco personas. Obra Civil (n=2), Jurídico (n=2), Calidad (n=2) y Financiero (n=1) son demasiado pequeñas para interpretar tendencias."
     },
     {
      "tipo": "p",
      "texto": "Conductores (n=19) y vendedores de servicios (n=42) muestran una diferencia relevante: 3,23 frente a 2,96 en competencias (Mann-Whitney p=0,007) y 3,34 frente a 2,66 en potencial (p<0,001). Entre los tres niveles de vendedor, los de nivel III (n=3) promedian 3,36 en competencias y 3,20 en potencial, mientras que los del cargo base promedian 2,96 y 2,66. La comparación sugiere coherencia con una trayectoria de nivel, pero n=3 impide generalizar."
     },
     {
      "tipo": "p",
      "texto": "Cargos con muestras de 3 a 5 personas, como Administrador EDS nivel II, Cajero y Preparador de alimentos, deben leerse como señales preliminares y no como diagnóstico del cargo. Las diferencias entre áreas y cargos están además mezcladas con quién evalúa, como se explica en la sección 6."
     }
    ]
   },
   {
    "titulo": "Comportamiento de los tres grupos de competencias",
    "bloques": [
     {
      "tipo": "p",
      "texto": "Los tres grupos tienen promedios casi idénticos (3,08; 3,18; 3,08). En las personas que tienen ambos grupos, la diferencia entre organizacionales y administrativas (3,14 frente a 3,18) no es significativa (Wilcoxon p=0,30), ni la diferencia entre organizacionales y de negocio (3,07 frente a 3,08; p=0,48)."
     },
     {
      "tipo": "sub",
      "texto": "Competencias organizacionales"
     },
     {
      "tipo": "p",
      "texto": "Orientación al logro (3,17) tiene el mayor promedio del grupo y 95 de 133 personas en fortaleza; Comunicación efectiva (3,08) y Innovación y mejora continua (3,00) siguen. Las diferencias son estadísticamente detectables (Friedman p<0,001) pero pequeñas: 0,17 puntos entre la mayor y la menor. Innovación es la competencia más baja de la persona en 46 casos (34,6%) y Comunicación en 38 (28,6%); ambas, junto con 4 y 0 registros prioritarios respectivamente, orientan el foco de desarrollo transversal."
     },
     {
      "tipo": "p",
      "texto": "La ejecución orientada a metas aparece más consolidada que la capacidad de proponer mejoras y comunicar con claridad. Esto es coherente con las recomendaciones escritas, que mencionan con más frecuencia iniciativa y mejora, comunicación y seguimiento de procedimientos (sección 7). Es una hipótesis para confirmar con ejemplos de conducta, no un diagnóstico cerrado."
     },
     {
      "tipo": "sub",
      "texto": "Competencias de áreas administrativas"
     },
     {
      "tipo": "p",
      "texto": "Sentido de urgencia (3,23; n=26) y Proactividad (3,13; n=26) tienen los promedios más altos y la menor dispersión del diccionario. Ninguna de las 52 puntuaciones es prioritaria y 36 están en fortaleza. El grupo es pequeño y sus 26 personas pertenecen a Calidad, Compras, Contabilidad, Financiero, Gerencia General, Gestión Humana, Jurídico y TIC; no permite generalizar a toda la parte administrativa de UNIGAS."
     },
     {
      "tipo": "p",
      "texto": "Una advertencia de aplicabilidad: personas con cargos administrativos de Unitrans y Estaciones (por ejemplo, analista contable, analista de tesorería, coordinador administrativo y asistente administrativo EDS) recibieron el conjunto de competencias de negocio, mientras que el conjunto administrativo se asignó a áreas corporativas. Parece que la asignación se hizo por área y no por cargo; conviene validar si responde al diseño o a una limitación de la plataforma."
     },
     {
      "tipo": "sub",
      "texto": "Competencias de áreas de negocio"
     },
     {
      "tipo": "p",
      "texto": "Orientación a los procesos (3,07) y Resilencia (3,09) registran 107 evaluaciones cada una; entre ellas hay 4 registros prioritarios y 68 en desarrollo. Siete de las diez puntuaciones prioritarias de toda la medición son de vendedores de servicios de Pista; dos corresponden a un asistente administrativo EDS y una a Tienda. Los registros prioritarios son pocos, pero se concentran en Pista y Tienda, donde conviene un acompañamiento de campo y no solo formación en aula."
     },
     {
      "tipo": "p",
      "texto": "Dos descriptores de Orientación a los procesos incluyen términos propios de un entorno de salud (\"pacientes\" en el nivel profesional y \"modelo de atención\" en el táctico). Conviene ajustarlos al lenguaje de UNIGAS antes de entrenar a los evaluadores."
     }
    ]
   },
   {
    "titulo": "Concepto final",
    "bloques": [
     {
      "tipo": "p",
      "texto": "UNIGAS cuenta con una línea base inicial de 133 personas que muestra una organización con desempeño en general favorable y una oportunidad concreta en innovación, comunicación y consistencia de la primera línea en Pista y Tienda."
     },
     {
      "tipo": "p",
      "texto": "La ruta recomendada es calibrar primero, conversar con evidencia, trabajar dos conductas por persona desde el turno y repetir una medición comparable con perfiles de nivel definidos. El éxito del primer ciclo no es elevar las calificaciones, sino lograr una medición más confiable y comportamientos que cambien en el trabajo diario."
     },
     {
      "tipo": "p",
      "texto": "Hay retroalimentación escrita para 83 de 133 personas. Cobertura por área: Unitrans 24 de 27, Estaciones 12 de 17, Tienda 8 de 8, Contabilidad 7 de 7, Compras 4 de 4 y Pista solo 17 de 52 (32,7%); TIC no registra comentarios. El área con más personas y más puntuaciones prioritarias es, por tanto, la menos respaldada con observaciones escritas. En 82 fichas hay un solo evaluador y en una hay dos; no se trata de una evaluación 360°."
     },
     {
      "tipo": "p",
      "texto": "Los comentarios son breves (mediana de unos 55 caracteres en las oportunidades de mejora) y 17 son vacíos, muy cortos o \"No registrado\". Los aspectos a resaltar destacan compromiso, responsabilidad, amabilidad y trabajo en equipo (27 menciones de equipo, colaboración o compañerismo). Las oportunidades se refieren a iniciativa y mejora (17 fichas), comunicación (15), procedimientos y protocolos (14), trabajo en equipo (14), planeación, organización o tiempo (12), servicio al cliente (11) y conocimiento o capacitación (10)."
     },
     {
      "tipo": "p",
      "texto": "Los temas provienen de una búsqueda léxica exploratoria: una ficha puede contar en varios, y la mención no equivale a una brecha confirmada. Aun así, la coincidencia entre los comentarios y las competencias más bajas (Innovación y Comunicación) fortalece la prioridad transversal. Ejemplos de oportunidades mencionadas por los jefes: perfeccionar el protocolo de servicio, mejorar la claridad de la comunicación con terceros, planear nuevas actividades antes de proponerlas y mantener la disposición a aprender."
     },
     {
      "tipo": "p",
      "texto": "Solo 7 fichas tienen un plan de acción con objetivo y fecha. Las plantillas del reporte generan recomendaciones automáticas de seguimiento a 30, 60 y 90 días, pero no son equivalentes a compromisos acordados entre jefe y colaborador."
     }
    ]
   },
   {
    "titulo": "Recomendaciones",
    "bloques": [
     {
      "tipo": "sub",
      "texto": "Plan de cierre de brechas: corto, mediano y largo plazo"
     },
     {
      "tipo": "p",
      "texto": "Las acciones usan recursos existentes: reuniones de inicio de turno, tableros sencillos, hojas de cálculo y la plataforma ya implementada. No se requiere adquirir sistemas nuevos. Los horizontes se cuentan desde la aprobación del plan. Las metas son propuestas de gestión sujetas a validación de capacidad y no resultados observados."
     },
     {
      "tipo": "accion",
      "plazo": "Corto plazo",
      "tiempo": "0–30 días",
      "titulo": "Calibrar la medición y proteger las decisiones",
      "accion": "Dos sesiones de calibración de 90 minutos con los evaluadores: casos reales, escala 1–4 y comportamientos del diccionario. Revisar los cortes del mapa de talento, la regla de asignación de grupos y los términos ajenos a la operación. Hasta cerrar la revisión, no usar las etiquetas \"aceleración\" o \"alto potencial\" para promociones.",
      "evidencia": ""
     },
     {
      "tipo": "accion",
      "plazo": "Corto plazo",
      "tiempo": "0–60 días",
      "titulo": "Conversaciones de retroalimentación priorizadas",
      "accion": "Empezar por las 7 personas con alguna competencia prioritaria, las 8 con promedio menor de 2,5 y los casos con potencial menor de 2,4 (17). Luego completar Pista, donde solo 17 de 52 tienen comentarios escritos. Conversación de 30 a 45 minutos, máximo dos conductas del diccionario, una práctica concreta y revisión mensual de 15 minutos.",
      "evidencia": ""
     },
     {
      "tipo": "accion",
      "plazo": "Corto plazo",
      "tiempo": "0–90 días",
      "titulo": "Rutinas de turno para comunicación y procesos",
      "accion": "Cinco minutos al inicio del turno: un comportamiento operativo del diccionario, un ejemplo real del turno anterior y un compromiso. Alternar Comunicación efectiva y Orientación a los procesos. Registrar en un formato simple.",
      "evidencia": ""
     },
     {
      "tipo": "accion",
      "plazo": "Mediano plazo",
      "tiempo": "3–6 meses",
      "titulo": "Mejora continua desde el puesto",
      "accion": "Cada unidad define una mejora sencilla por trimestre: problema, línea base, cambio probado durante cuatro semanas y resultado. Reconocer públicamente las iniciativas que funcionan y documentar las lecciones de las que no.",
      "evidencia": ""
     },
     {
      "tipo": "accion",
      "plazo": "Mediano plazo",
      "tiempo": "3–6 meses",
      "titulo": "Habilidades de comunicación y servicio",
      "accion": "Talleres de dos horas con casos de atención en pista, tienda y entrega de turno. Entrenar a jefes en retroalimentación específica y breve. Observaciones de campo con lista de chequeo basada en los comportamientos del diccionario.",
      "evidencia": ""
     },
     {
      "tipo": "accion",
      "plazo": "Mediano plazo",
      "tiempo": "3–6 meses",
      "titulo": "Acompañamiento a vendedores de servicios y cajeros",
      "accion": "Dupla de aprendizaje entre vendedores de distintos niveles (I, II y III), observación de práctica y lista de verificación de protocolos. Combinar con revisión de causas organizativas en los casos prioritarios.",
      "evidencia": ""
     },
     {
      "tipo": "accion",
      "plazo": "Mediano plazo",
      "tiempo": "3–6 meses",
      "titulo": "Validar el potencial",
      "accion": "Para quienes aparecen con alto potencial, complementar con entrevista estructurada, caso o proyecto corto y opinión de un segundo observador. Definir qué significa potencial en UNIGAS y qué rol futuro se evalúa.",
      "evidencia": ""
     },
     {
      "tipo": "accion",
      "plazo": "Largo plazo",
      "tiempo": "6–12 meses",
      "titulo": "Segundo ciclo comparable",
      "accion": "Definir antes del periodo el nivel esperado de cada cargo, las conductas observables y la fórmula. Incorporar al menos un segundo observador para cargos críticos y una autoevaluación para fomentar el diálogo. Medir comportamientos del diccionario, no solo la competencia completa.",
      "evidencia": ""
     },
     {
      "tipo": "accion",
      "plazo": "Largo plazo",
      "tiempo": "6–12 meses",
      "titulo": "Carrera y sucesión",
      "accion": "Usar los resultados validados para construir rutas entre niveles de cargo (por ejemplo, vendedor de servicios I a III), planes de relevo para jefaturas operativas y programas de mentoría.",
      "evidencia": ""
     }
    ]
   }
  ]
 }
};
