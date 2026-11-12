/**
 * Datos reales de evaluacion de competencias individuales.
 * Para KAIKA las competencias vienen calculadas en kaika_data.js.
 * Escala: 1 a 4.
 */
const COMPETENCIAS_DATA = {};  /* las competencias de KAIKA vienen en kaika_data.js */

/* ══════════════════════════════════════════════════════════
   ESCALA Y CLASIFICACIÓN
   Escala de calificación: 1 a 4
   ══════════════════════════════════════════════════════════ */
/* La escala se puede cambiar por cliente con window.COMP_ESCALA_MAX (Kaika usa 1 a 6) */
function compEscalaMax() { return (typeof window !== "undefined" && window.COMP_ESCALA_MAX) || 4; }

function nivelCompetencia(puntaje) {
  const pct = puntaje / compEscalaMax();
  if (pct >= 0.75) return "Fortaleza";
  if (pct >= 0.5)  return "En desarrollo";
  return "Prioritario";
}

/* ══════════════════════════════════════════════════════════
   TIPS DE MEJORA POR COMPETENCIA
   Cada competencia tiene un mensaje según el nivel obtenido:
   Prioritario (<50%), En desarrollo (50-74%), Fortaleza (>=75%)
   ══════════════════════════════════════════════════════════ */
const TIPS_COMPETENCIAS = {
  "LIDERAZGO": {
    Prioritario:   "Requiere fortalecer la capacidad de guiar equipos: practicar delegación, dar retroalimentación frecuente y tomar decisiones con mayor autonomia. Se recomienda mentoria de un lider senior.",
    "En desarrollo": "Reforzar habilidades de influencia y toma de decisiones. Buscar oportunidades de liderar proyectos pequeños o iniciativas transversales para ganar experiencia.",
    Fortaleza:     "Perfil con capacidad de liderazgo consolidada. Es candidato para liderar equipos o mentorear a otros colaboradores."
  },
  "ANÁLISIS Y RESOLUCIÓN DE PROBLEMAS": {
    Prioritario:   "Necesita desarrollar pensamiento analitico: practicar la identificacion de causas raiz antes de proponer soluciones y usar herramientas simples como 5 porques o diagramas de Ishikawa.",
    "En desarrollo": "Fortalecer el analisis de datos antes de decidir. Participar en sesiones de resolucion de problemas en equipo para ganar metodo y velocidad.",
    Fortaleza:     "Buen manejo de analisis y solucion de problemas complejos. Puede apoyar a otros equipos en la resolucion de casos dificiles."
  },
  "IDENTIFICACIÓN CULTURAL": {
    Prioritario:   "Baja conexion con los valores y cultura de la organizacion. Se recomienda participar activamente en actividades institucionales y sesiones de induccion o refuerzo cultural.",
    "En desarrollo": "Buena base de identificacion cultural, se sugiere mayor participacion en iniciativas y comunicacion interna de la empresa.",
    Fortaleza:     "Fuerte sentido de pertenencia y alineacion con la cultura organizacional. Puede ser embajador cultural dentro de su equipo."
  },
  "ADAPTACIÓN AL CAMBIO": {
    Prioritario:   "Presenta resistencia ante los cambios. Se recomienda trabajar la flexibilidad mental y participar en procesos de gestion del cambio con acompañamiento cercano.",
    "En desarrollo": "Maneja el cambio de forma aceptable, puede mejorar anticipandose a nuevos escenarios y proponiendo ideas frente a la incertidumbre.",
    Fortaleza:     "Excelente capacidad de adaptacion. Puede liderar procesos de cambio o transformacion dentro de su area."
  },
  "COMUNICACIÓN": {
    Prioritario:   "Debe fortalecer la claridad y asertividad al comunicar ideas. Se recomienda entrenamiento en comunicacion efectiva y practica de retroalimentacion estructurada.",
    "En desarrollo": "Comunica de forma adecuada, puede mejorar la escucha activa y la adaptacion del mensaje segun la audiencia.",
    Fortaleza:     "Excelente comunicador. Puede apoyar la vocería de su equipo y facilitar espacios de comunicacion interna."
  },
  "DESARROLLO DE OPORTUNIDADES DE NEGOCIO": {
    Prioritario:   "Debe fortalecer la vision comercial y la busqueda proactiva de oportunidades. Se recomienda formacion basica en analisis de mercado y seguimiento a indicadores comerciales.",
    "En desarrollo": "Identifica oportunidades de negocio de forma ocasional, se sugiere mayor proactividad en el analisis de clientes y mercado.",
    Fortaleza:     "Fuerte orientacion comercial. Puede liderar iniciativas de crecimiento o nuevas lineas de negocio."
  },
  "TRABAJO EN EQUIPO": {
    Prioritario:   "Presenta dificultad para colaborar de forma efectiva. Se recomienda participar en dinamicas de equipo y recibir retroalimentacion de pares de forma constante.",
    "En desarrollo": "Colabora adecuadamente, puede mejorar la proactividad al apoyar a otros y compartir informacion relevante con el equipo.",
    Fortaleza:     "Excelente colaborador. Fomenta la cohesion del equipo y puede ser referente en dinamicas colaborativas."
  },
  "PLANEACIÓN Y ORGANIZACIÓN": {
    Prioritario:   "Requiere mejorar la gestion del tiempo y la priorizacion de tareas. Se recomienda el uso de herramientas de planificacion y seguimiento de indicadores personales.",
    "En desarrollo": "Organiza su trabajo de forma aceptable, puede mejorar la anticipacion de riesgos y la planificacion a mediano plazo.",
    Fortaleza:     "Excelente capacidad de planeacion y organizacion. Puede apoyar la estructuracion de procesos en su area."
  },
  "ORIENTACIÓN AL CLIENTE": {
    Prioritario:   "Debe fortalecer la escucha y comprension de las necesidades del cliente. Se recomienda entrenamiento en servicio al cliente y seguimiento cercano a casos reales.",
    "En desarrollo": "Atiende adecuadamente al cliente, puede mejorar la anticipacion de necesidades y el seguimiento postventa.",
    Fortaleza:     "Excelente orientacion al cliente. Puede ser referente en experiencia y satisfaccion del cliente para su equipo."
  },
  "ORIENTACIÓN A RESULTADOS": {
    Prioritario:   "Necesita fortalecer el foco en metas y el cumplimiento de indicadores. Se recomienda establecer metas claras de corto plazo con seguimiento periodico.",
    "En desarrollo": "Cumple con los resultados esperados, puede mejorar la constancia y la busqueda de eficiencia en sus tareas.",
    Fortaleza:     "Fuerte orientacion a resultados. Consistentemente supera las metas propuestas y puede motivar a su equipo hacia el logro."
  }
};

const TIP_GENERICO = {
  Prioritario:     "Competencia por debajo de lo esperado. Definir con el jefe 2 o 3 acciones concretas, con fecha y seguimiento mensual.",
  "En desarrollo": "Nivel aceptable con espacio de mejora. Buscar retroalimentacion periodica y practicar esta competencia en proyectos del area.",
  Fortaleza:       "Competencia consolidada. Puede apoyar a companeros del equipo y servir de referente en esta conducta."
};

function tipCompetencia(nombre, puntaje) {
  const key = (nombre || "").toUpperCase().trim();
  const nivel = nivelCompetencia(puntaje);
  const dict = TIPS_COMPETENCIAS[key];
  if (!dict) return TIP_GENERICO[nivel] || TIP_GENERICO["En desarrollo"];
  return dict[nivel] || dict["En desarrollo"];
}

/**
 * Retorna las competencias reales de un empleado por CC.
 * Si no existen datos reales, retorna null (el llamador debe usar un fallback).
 */
function getCompetenciasReales(cc) {
  const raw = COMPETENCIAS_DATA[String(cc)];
  if (!raw || !raw.length) return null;
  return raw.map(c => ({
    nombre:  c.nombre,
    puntaje: c.puntaje,
    nivel:   nivelCompetencia(c.puntaje),
    tip:     tipCompetencia(c.nombre, c.puntaje)
  }));
}
