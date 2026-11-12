# 9-Box Affine — clientes KAIKA y UNIGAS

| Cliente | Usuario | Contraseña | Datos |
|---|---|---|---|
| KAIKA | kaika | kaika2026 | frontend/kaika_data.js |
| UNIGAS | unigas | unigas2026 | frontend/unigas_data.js |

Cada usuario solo ve los datos de su empresa.

## Cortes del 9-Box (ambos clientes)
Sobre el puntaje en %: **bajo 0–16 · medio 16,1–84 · alto 84,1–100**, en ambos ejes.
Se usan igual en el 9-Box, el dashboard, la campana y los PDF.
En el 9-Box las nueve celdas tienen el mismo tamaño: cada rango ocupa un tercio del eje
(0–16 el primero, 16,1–84 el segundo, 84,1–100 el tercero) y los puntos se ubican dentro de su tramo. Para cambiarlos, editar
`CORTE_BAJO` y `CORTE_ALTO` en `index.html`, `dashboard.html` y `reporte_pdf.js`.

## Dashboard
- Se quitó la tarjeta "Áreas críticas" (ambos clientes).
- La campana de Gauss se muestra en % (0–100) con las zonas bajo / medio / alto marcadas
  y cuántas evaluaciones cae en cada una.
- KAIKA: todo en porcentaje y competencias agrupadas en organizacionales, de liderazgo
  y técnicas (el resto).

---

# KAIKA

**Ingreso:** abrir `frontend/login.html` · usuario `kaika` · contraseña `kaika2026`.
Los datos se leen de `frontend/kaika_data.js` (no necesita la base Oracle).

## Cálculo
- **Potencial (eje Y) = competencias**, escala 1 a 6 (en % = nota ÷ 6 × 100).
  Pesos por rol: Auto 20% · Jefe 50% · Colaborador 30%.
  Sin colaborador: Auto 40% · Jefe 60%. Sin jefe: Auto 40% · Colaborador 60%.
- **Desempeño (eje X) = indicadores**: calificación del jefe ponderada por el PESO
  de cada indicador (archivo kaika_final_con_pesos.xlsx). Notas de 1 a 10 se leen
  sobre 10; el resto como % de cumplimiento.
- **Nota final** = 70% competencias + 30% indicadores.
- Las personas sin calificación de indicadores o de competencias no se ubican en
  el 9-Box; aparecen en el botón "sin evaluación completa".

## Archivos tocados
- `frontend/index.html`, `dashboard.html`, `login.html`: tema claro y logo Affine.
- `frontend/reporte_pdf.js`: PDF en tema claro, logo Affine, escala 1-6.
- `frontend/clients.js`: cliente KAIKA con datos locales.
- `frontend/competencias_data.js`: escala configurable por cliente.
- `frontend/kaika_data.js` (nuevo): datos calculados.
- `frontend/assets/affine-logo.png` (azul) y `affine-logo-blanco.png` (original).

## Áreas
Tomadas de MATRIZ_DE_RELACION_KAIKA.xlsx (hoja USUARIOS), cruzando por cédula.
Se unificaron nombres: "Aministrativo" → Administrativo, "Talento Humano/Adm" → Talento Humano,
"Gerente General" → Gerencia. Cinco personas no están en la hoja USUARIOS y se asignaron así:
- Diego Alejandro Duran Cortes → Comercial (hoja MATRIZ DE RELACIÓN)
- Claudia Marcela Osorio Borda → Comercial (por cargo)
- Jenny Carolina Osorio Suarez → Soporte Técnico (por cargo)
- German Dario Monroy Ortiz → Comercial (por cargo, según Libro1)
- Mariaelena Bustos Trujillo → Administrativo (por cargo, según Libro1)

## Limpieza
Se eliminaron los datos, usuarios y ejemplos del cliente anterior (Comestibles).
Si alguien tenía una sesión abierta de ese cliente, el programa la cierra y lo manda al login.

## Retroalimentación en los reportes PDF
Tomada de normalfeedbcka.xlsx (RH_T_FEEDBACK) y actionsfeedkaika.xlsx (RH_T_FEEBACK_ACTIONS).
- FEEDBACK → "Aspectos a resaltar"; ASPECTS → "Recomendaciones / oportunidades de mejora".
- Acciones (cruzadas por ID_FEEDBACK): competencia (ATT3), objetivo (ATT1), acción y fecha límite.
- Se agrega como página 3 del reporte individual y del masivo.


---

# UNIGAS
Fuente: unigasproyecto.xlsx (calificaciones), Matriz_de_Evaluacion_UNIGAS (áreas),
unigasfeecbak.xlsx y unigass_feedbac_actions.xlsx (retroalimentación y plan de acción).

## Cálculo (escala 1 a 4; en % = nota / 4 × 100)
- **Desempeño (eje X) = competencias.** Pesos por rol: Auto 20% · Jefe 50% · Colaborador o Par 30%.
  Sin colaborador ni par: Auto 40% · Jefe 60%. (El Par ocupa el mismo 30% del colaborador.)
- **Potencial (eje Y) = Instrumento de Potencial**, calificado solo por el jefe (5 preguntas).
- **Nota final** = 80% competencias + 20% potencial.
- La columna PESOS de la matriz no se usa; mandan los pesos de arriba.
- 8 personas no tienen calificación completa y no se ubican en el 9-Box.
- David Jose Sierra Ariza no está en la matriz: se le asignó el área de su jefe (Gestión Humana).
