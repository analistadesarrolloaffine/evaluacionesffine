/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║              CONFIGURACIÓN DE CLIENTES / USUARIOS               ║
 * ║                                                                  ║
 * ║  Para agregar un cliente nuevo:                                  ║
 * ║  1. Copia un bloque existente dentro del array CLIENTS           ║
 * ║  2. Cambia los valores (id, nombre, logo, color, usuarios)       ║
 * ║  3. Guarda y sube al repositorio git                             ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

const CLIENTS = [

  /* ─── KAIKA (datos locales de kaika_data.js) ─── */
  {
    id:        "kaika",
    nombre:    "KAIKA",
    logo:      "assets/kaika-logo.png",
    color:     "#1226b5",            // azul del logo Kaika
    apiUrl:    "",
    dataLocal: "EVAL_KAIKA",          // usa window.EVAL_KAIKA en vez de la API
    medicion:  "Evaluación de Desempeño 2026",

    usuarios: [
      { username: "kaika", password: "kaika2026", nombre: "Gestión Humana Kaika", rol: "admin" }
    ]
  },


  /* ─── UNIGAS (datos locales de unigas_data.js) ─── */
  {
    id:        "unigas",
    nombre:    "UNIGAS",
    logo:      "assets/unigas-logo.png",
    color:     "#c95a14",            // naranja del logo Unigas
    apiUrl:    "",
    dataLocal: "EVAL_UNIGAS",         // usa window.EVAL_UNIGAS en vez de la API
    medicion:  "Evaluación de Competencias 2026",

    usuarios: [
      { username: "unigas", password: "unigas2026", nombre: "Gestión Humana Unigas", rol: "admin" }
    ]
  },

  /* ─── CLIENTE NUEVO (copiar este bloque) ─── */
  /*
  {
    id:       "acme",
    nombre:   "Acme Corp Ltda",
    logo:     "",
    color:    "#0ea5e9",
    apiUrl:   "https://api.acme.com/api/9box",
    medicion: "Q1-2025",

    usuarios: [
      { username: "rrhh.acme", password: "Acme2025!", nombre: "Gestión Humana", rol: "admin" }
    ]
  },
  */

];

/* ══════════════════════════════════════════════
   STORAGE — usa localStorage para compatibilidad
   con file:// y servidores locales
   ══════════════════════════════════════════════ */
const SESSION_KEY = "9box_session_v2";

function saveSession(session) {
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  } catch(e) {
    console.error("[9box] No se pudo guardar sesión:", e);
  }
}

function getSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const s = JSON.parse(raw);
    // Validar que tenga los campos mínimos y que el cliente todavía exista
    const client = s && CLIENTS.find(c => c.id === s.clientId);
    if (!s || !s.username || !client) {
      localStorage.removeItem(SESSION_KEY);
      return null;
    }
    // Tomar siempre logo, color y fuente de datos actuales del cliente
    // (así una sesión abierta antes de un cambio queda al día)
    s.logo      = client.logo      || "";
    s.color     = client.color     || s.color;
    s.dataLocal = client.dataLocal || "";
    s.medicion  = client.medicion  || s.medicion;
    return s;
  } catch(e) {
    console.error("[9box] Error leyendo sesión:", e);
    localStorage.removeItem(SESSION_KEY);
    return null;
  }
}

function logout() {
  localStorage.removeItem(SESSION_KEY);
  // Limpiar caché de datos del empleado
  try { sessionStorage.removeItem("9box_empleados"); } catch(e) {}
  window.location.href = "login.html";
}

/**
 * Protege una página.
 * Retorna la sesión si existe, o redirige al login.
 * NO llama a esta función en login.html.
 */
function requireAuth() {
  const session = getSession();
  if (!session) {
    window.location.replace("login.html");
    return null;
  }
  return session;
}

/* ══════════════════════════════════════════════
   AUTENTICACIÓN
   ══════════════════════════════════════════════ */
function authenticate(username, password) {
  const user = (username || "").trim().toLowerCase();
  const pass = password || "";

  for (const client of CLIENTS) {
    const found = client.usuarios.find(
      u => (u.username || "").toLowerCase() === user && u.password === pass
    );
    if (found) {
      return {
        ok: true,
        session: {
          username:  found.username,
          nombre:    found.nombre,
          rol:       found.rol,
          clientId:  client.id,
          empresa:   client.nombre,
          logo:      client.logo   || "",
          color:     client.color  || "#1f6f8b",
          dataLocal: client.dataLocal || "",
          apiUrl:    client.apiUrl || "http://localhost:3000/api/9box",
          medicion:  client.medicion || "",
          loginAt:   Date.now()
        }
      };
    }
  }
  return { ok: false, error: "Usuario o contraseña incorrectos" };
}
