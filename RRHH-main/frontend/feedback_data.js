/**
 * Retroalimentacion 360 (feedback de lideres/pares) por empleado evaluado.
 * Fuente: fedbakpro.xlsx (CC_EVALUADO -> lista de evaluadores).
 * Cuando un empleado tiene 2 o mas evaluadores, se muestra el nombre de cada uno.
 */
const FEEDBACK_DATA = {};  /* sin retroalimentación 360 cargada */

/**
 * Retorna el feedback 360 real de un empleado por CC, o null si no existe.
 */
function getFeedbackReal(cc) {
  const raw = FEEDBACK_DATA[String(cc)];
  if (!raw || !raw.length) return null;
  return raw;
}
