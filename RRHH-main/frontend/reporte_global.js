/**
 * ══════════════════════════════════════════════════════════════
 *  Affine · Informe global de talento (PDF de compañía)
 *  Usa jsPDF (CDN), window.REGLAS (archivo de datos del cliente),
 *  window.LOGOS_CLIENTES / window.CLIENTE_ACTUAL (logos_data.js).
 *
 *  Uso:  ReporteGlobal.generar(lista, { empresa, medicion, pendientes, filtro })
 * ══════════════════════════════════════════════════════════════
 */
const ReporteGlobal = (() => {

  /* ── Paleta (tema claro, igual que la aplicación) ── */
  const C = {
    bg:[255,255,255], surface:[246,248,251], surf2:[238,242,247], border:[222,228,236],
    text:[42,55,75], ink:[27,42,65], muted:[106,117,135], accent:[31,111,139],
    green:[15,143,99], yellow:[176,122,0], red:[201,69,69], white:[255,255,255],
  };

  /* ── Cuadrantes: mismos nombres y colores del 9-Box en pantalla ── */
  const QM = [
    { nombre:"Enigma",         color:[162,60,191], tint:[246,239,250], r:0, c:0 },
    { nombre:"Potencial Alto", color:[15,143,99],  tint:[236,247,242], r:0, c:1 },
    { nombre:"Estrella",       color:[63,79,216],  tint:[238,240,253], r:0, c:2 },
    { nombre:"Dilema",         color:[201,69,69],  tint:[251,240,240], r:1, c:0 },
    { nombre:"Core",           color:[91,107,128], tint:[244,246,249], r:1, c:1 },
    { nombre:"Pilar",          color:[176,122,0],  tint:[251,246,232], r:1, c:2 },
    { nombre:"En Riesgo",      color:[180,35,35],  tint:[251,236,236], r:2, c:0 },
    { nombre:"Bajo Desempeño", color:[204,90,18],  tint:[252,241,233], r:2, c:1 },
    { nombre:"Experto",        color:[194,106,26], tint:[252,243,234], r:2, c:2 },
  ];
  /* Orden de presentación en el listado (de mayor a menor valor) */
  const ORDEN = ["Estrella","Potencial Alto","Pilar","Enigma","Core","Experto","Dilema","Bajo Desempeño","En Riesgo"];

  /* ── Cortes del 9-Box (en %): bajo 0–16 · medio 16,1–84 · alto 84,1–100 ── */
  const CORTE_BAJO = 16, CORTE_ALTO = 84;
  const nivel3 = v => v > CORTE_ALTO ? 2 : v > CORTE_BAJO ? 1 : 0;
  const cuadrante = e => QM.find(q => q.c === nivel3(e.PUNTAJE_DESEMPENO) && q.r === 2 - nivel3(e.PUNTAJE_POTENCIAL));

  const W = 210, H = 297, PX = 12;
  const avg = a => a.length ? a.reduce((x,y)=>x+y,0) / a.length : 0;

  /* ── Reglas del cliente y formatos ── */
  function reglas() { return (typeof window !== "undefined" && window.REGLAS) || null; }
  function enPct() { const r = reglas(); return !r || !!r.dashboard_pct; }
  function escalaComp() { return (typeof window !== "undefined" && window.COMP_ESCALA_MAX) || 4; }
  function nombreEje(cual) {
    const r = reglas();
    if (!r) return cual === "x" ? "Desempeño" : "Potencial";
    return cual === "x" ? r.eje_x.nombre : r.eje_y.nombre;
  }
  /* Rótulo de un eje sin repetir palabras ("Potencial · Potencial" → "Potencial") */
  function rotulo(cual) {
    const base = cual === "x" ? "Desempeño" : "Potencial", nom = nombreEje(cual);
    return nom.toLowerCase() === base.toLowerCase() ? base : `${base} · ${nom}`;
  }
  /* Valor de un eje: en % (Kaika) o en la escala del cliente (Unigas 1–4) */
  function fmtEje(pct, cual) {
    if (pct == null || isNaN(pct)) return "—";
    const r = reglas(), eje = r && (cual === "x" ? r.eje_x : r.eje_y);
    if (enPct() || !eje || !eje.escala) return pct.toFixed(1) + "%";
    return (pct / 100 * eje.escala).toFixed(2) + " / " + eje.escala;
  }
  function fmtNota(pct) {
    if (pct == null || isNaN(pct)) return "—";
    const r = reglas();
    if (enPct() || !r || !r.nota_campo_escala) return pct.toFixed(1) + "%";
    return (pct / 100 * escalaComp()).toFixed(2) + " / " + escalaComp();
  }
  function fmtComp(valor) {
    return enPct() ? (valor / escalaComp() * 100).toFixed(1) + "%" : valor.toFixed(2) + " / " + escalaComp();
  }

  /* ── Dibujo básico ── */
  const fill = (d,c) => d.setFillColor(...c);
  const tcol = (d,c) => d.setTextColor(...c);
  function rr(d, x,y,w,h,r, f, s, lw=0.3) {
    if (f) fill(d,f);
    if (s) { d.setDrawColor(...s); d.setLineWidth(lw); }
    d.roundedRect(x,y,w,h,r,r, f && s ? "FD" : f ? "F" : "D");
  }
  function bar(d, x,y,w,h, pct, color) {
    rr(d, x,y,w,h, h/2, C.surf2, null);
    const fw = Math.max(0, Math.min(1, pct)) * w;
    if (fw > 0.5) rr(d, x,y,fw,h, h/2, color, null);
  }
  /* Recorta un texto para que quepa en maxW (añade "...") */
  function fit(d, t, maxW) {
    t = String(t == null ? "" : t);
    if (d.getTextWidth(t) <= maxW) return t;
    while (t.length > 1 && d.getTextWidth(t + "...") > maxW) t = t.slice(0, -1);
    return t.trim() + "...";
  }
  function hoy() {
    return new Date().toLocaleDateString("es-CO", { day:"numeric", month:"long", year:"numeric" });
  }
  function logoCliente(d, x, y, maxW, maxH) {
    const id = window.CLIENTE_ACTUAL, L = id && window.LOGOS_CLIENTES && window.LOGOS_CLIENTES[id];
    if (!L) return 0;
    let w = maxW, h = w * L.ratio;
    if (h > maxH) { h = maxH; w = h / L.ratio; }
    try { d.addImage(L.src, "PNG", x, y, w, h); } catch(e) { return 0; }
    return w;
  }
  function seccion(d, titulo, y) {
    d.setFont("helvetica","bold"); d.setFontSize(8); tcol(d, C.accent);
    d.text(titulo.toUpperCase(), PX, y);
    d.setDrawColor(...C.border); d.setLineWidth(0.3);
    d.line(PX + d.getTextWidth(titulo.toUpperCase()) + 3, y - 1, W - PX, y - 1);
    return y + 5;
  }

  /* ── Encabezado y pie ── */
  function encabezado(d, empresa, medicion, filtro, compacto) {
    const HH = compacto ? 22 : 34;
    fill(d, C.bg); d.rect(0,0,W,H,"F");
    fill(d, C.surface); d.rect(0,0,W,HH,"F");
    d.setDrawColor(...C.border); d.setLineWidth(0.4); d.line(0,HH,W,HH);
    const lw = logoCliente(d, PX, compacto ? 5 : 8, compacto ? 30 : 42, compacto ? 11 : 17);
    const tx = PX + (lw ? lw + 7 : 0);
    d.setFont("helvetica","bold"); d.setFontSize(compacto ? 11 : 15); tcol(d, C.ink);
    d.text("INFORME GLOBAL DE TALENTO", tx, compacto ? 11 : 15);
    d.setFont("helvetica","normal"); d.setFontSize(7.5); tcol(d, C.muted);
    d.text(`${empresa} · ${medicion}`, tx, compacto ? 16 : 21);
    if (!compacto && filtro) { d.setFontSize(7); d.text(`Filtro: ${filtro}`, tx, 26); }
    d.setFontSize(7); d.text(hoy(), W - PX, compacto ? 11 : 13, { align:"right" });
    d.setFont("helvetica","bold"); tcol(d, C.accent);
    d.text("USO INTERNO Y CONFIDENCIAL", W - PX, compacto ? 16 : 18, { align:"right" });
    return HH + 7;
  }
  function pie(d, empresa, pag, total) {
    const FY = H - 8;
    fill(d, C.surface); d.rect(0,FY,W,8,"F");
    d.setDrawColor(...C.border); d.setLineWidth(0.4); d.line(0,FY,W,FY);
    d.setFont("helvetica","bold"); d.setFontSize(6.5); tcol(d, C.muted);
    d.text("Affine · Informe global de talento", PX, FY+5);
    d.setFont("helvetica","normal");
    d.text(empresa, W/2, FY+5, { align:"center" });
    d.text(`Página ${pag} de ${total}`, W - PX, FY+5, { align:"right" });
  }

  /* ── Tarjeta KPI ── */
  function kpi(d, x, y, w, h, titulo, valor, sub, pct, color) {
    rr(d, x,y,w,h, 3, C.surface, C.border);
    d.setFont("helvetica","bold"); d.setFontSize(6); tcol(d, C.muted);
    d.text(fit(d, titulo.toUpperCase(), w-8), x+4, y+6);
    d.setFont("helvetica","bold"); d.setFontSize(15); tcol(d, color || C.ink);
    d.text(valor, x+4, y+15);
    d.setFont("helvetica","normal"); d.setFontSize(6); tcol(d, C.muted);
    d.text(fit(d, sub, w-8), x+4, y+20);
    if (pct != null) bar(d, x+4, y+h-5, w-8, 1.8, pct, color || C.accent);
  }

  /* ══ PÁGINA 1: resumen y matriz 9-Box ══ */
  function pagina1(d, lista, opts) {
    let y = encabezado(d, opts.empresa, opts.medicion, opts.filtro, false);
    const n = lista.length, pend = (opts.pendientes || []).length;
    const aD = avg(lista.map(e=>e.PUNTAJE_DESEMPENO)), aP = avg(lista.map(e=>e.PUNTAJE_POTENCIAL));
    const notas = lista.map(e=>e.NOTA_FINAL).filter(v=>v!=null), aN = avg(notas);
    const r = reglas();

    /* KPIs */
    const gap = 4, kw = (W - 2*PX - 3*gap) / 4, kh = 27;
    kpi(d, PX, y, kw, kh, "Personas evaluadas", String(n), pend ? `${pend} con evaluación incompleta` : "evaluación completa", null, C.ink);
    kpi(d, PX+(kw+gap), y, kw, kh, rotulo("x"), fmtEje(aD,"x"), "promedio de la compañía", aD/100, C.green);
    kpi(d, PX+2*(kw+gap), y, kw, kh, rotulo("y"), fmtEje(aP,"y"), "promedio de la compañía", aP/100, C.accent);
    kpi(d, PX+3*(kw+gap), y, kw, kh, "Nota final", fmtNota(aN), r && r.nota_texto ? r.nota_texto : "promedio", aN/100, C.ink);
    y += kh + 9;

    /* Matriz 9-Box */
    y = seccion(d, "Distribución 9-Box", y);
    const conteo = {}; QM.forEach(q => conteo[q.nombre] = 0);
    lista.forEach(e => { const q = cuadrante(e); if (q) conteo[q.nombre]++; });
    const GX = PX + 9, GY = y + 1, G = 112, cs = G / 3;
    QM.forEach(q => {
      const x = GX + q.c*cs, yy = GY + q.r*cs;
      fill(d, q.tint); d.rect(x, yy, cs, cs, "F");
      d.setDrawColor(...C.white); d.setLineWidth(0.8); d.rect(x, yy, cs, cs, "S");
      const k = conteo[q.nombre], pct = n ? k/n*100 : 0;
      d.setFont("helvetica","bold"); d.setFontSize(7); tcol(d, q.color);
      d.text(q.nombre.toUpperCase(), x + cs/2, yy + 7, { align:"center" });
      d.setFontSize(20); tcol(d, k ? q.color : C.muted);
      d.text(String(k), x + cs/2, yy + cs/2 + 5, { align:"center" });
      d.setFont("helvetica","normal"); d.setFontSize(7); tcol(d, C.muted);
      d.text(`${pct.toFixed(1)}% del total`, x + cs/2, yy + cs - 5, { align:"center" });
    });
    /* Ejes */
    d.setFont("helvetica","bold"); d.setFontSize(6.5); tcol(d, C.muted);
    d.text(rotulo("x").toUpperCase(), GX + G/2, GY + G + 6, { align:"center" });
    const ty = rotulo("y").toUpperCase();
    d.text(ty, PX + 1.5, GY + G/2 + d.getTextWidth(ty)/2, { angle:90 });
    d.setFont("helvetica","normal"); d.setFontSize(5.5);
    ["Bajo","Medio","Alto"].forEach((t,i) => {
      d.text(t, GX + cs*i + cs/2, GY + G + 2.5, { align:"center" });
      d.text(t, GX - 1.5, GY + G - cs*i - cs/2 + 1, { align:"right" });
    });

    /* Columna derecha: distribución por eje + lectura ejecutiva */
    const RX = GX + G + 8, RW = W - PX - RX;
    let ry = GY;
    const bloque = (titulo, campo, color) => {
      d.setFont("helvetica","bold"); d.setFontSize(7); tcol(d, C.ink);
      d.text(fit(d, titulo, RW), RX, ry + 3); ry += 7;
      [["Alto (84,1–100%)",2],["Medio (16,1–84%)",1],["Bajo (0–16%)",0]].forEach(([lbl, nv]) => {
        const k = lista.filter(e => nivel3(e[campo]) === nv).length;
        d.setFont("helvetica","normal"); d.setFontSize(6.3); tcol(d, C.muted);
        d.text(lbl, RX, ry + 2);
        d.text(`${k} · ${n ? (k/n*100).toFixed(0) : 0}%`, RX + RW, ry + 2, { align:"right" });
        bar(d, RX, ry + 3.5, RW, 1.8, n ? k/n : 0, nv===2 ? C.green : nv===1 ? C.yellow : C.red);
        ry += 8;
      });
      ry += 3;
    };
    bloque(rotulo("x"), "PUNTAJE_DESEMPENO");
    bloque(rotulo("y"), "PUNTAJE_POTENCIAL");

    /* Lectura ejecutiva generada a partir de los datos */
    d.setFont("helvetica","bold"); d.setFontSize(7); tcol(d, C.ink);
    d.text("Lectura ejecutiva", RX, ry + 3); ry += 7;
    const fila = rr_ => QM.filter(q => q.r === rr_).reduce((t,q)=>t+conteo[q.nombre],0);
    const mayor = QM.slice().sort((a,b)=>conteo[b.nombre]-conteo[a.nombre])[0];
    const pctT = k => n ? (k/n*100).toFixed(0) + "%" : "0%";
    const puntos = [
      `${pctT(conteo[mayor.nombre])} se concentra en ${mayor.nombre}.`,
      `${pctT(fila(0))} tiene potencial alto (fila superior).`,
      `${pctT(conteo["Estrella"] + conteo["Pilar"] + conteo["Potencial Alto"])} está en cuadrantes de talento clave (Estrella, Pilar, Potencial Alto).`,
      `${pctT(fila(2) + conteo["Dilema"])} requiere atención (fila inferior y Dilema).`,
    ];
    d.setFont("helvetica","normal"); d.setFontSize(6.3); tcol(d, C.text);
    puntos.forEach(p => {
      const ls = d.splitTextToSize(p, RW - 3);
      d.text("•", RX, ry + 1); d.text(ls, RX + 3, ry + 1);
      ry += ls.length * 3 + 1.8;
    });

    /* Áreas: personas por área (barra) */
    let ay = Math.max(GY + G + 14, ry + 4);
    ay = seccion(d, "Personas evaluadas por área", ay);
    const areas = {};
    lista.forEach(e => { const a = e.AREA || "Sin área"; areas[a] = (areas[a]||0) + 1; });
    const ents = Object.entries(areas).sort((a,b)=>b[1]-a[1]);
    const colW = (W - 2*PX - 8) / 2, maxA = Math.max(1, ...ents.map(x=>x[1]));
    ents.forEach(([a,k], i) => {
      const cx = PX + (i % 2) * (colW + 8), cy = ay + Math.floor(i/2) * 6.2;
      if (cy > H - 18) return;
      d.setFont("helvetica","normal"); d.setFontSize(6.5); tcol(d, C.text);
      d.text(fit(d, a, 38), cx, cy + 2);
      bar(d, cx + 40, cy, colW - 52, 2.2, k/maxA, C.accent);
      tcol(d, C.muted); d.text(String(k), cx + colW, cy + 2, { align:"right" });
    });
  }

  /* ══ PÁGINA 2: competencias, áreas y campana ══ */
  function competencias(lista) {
    const acc = {};
    lista.forEach(e => (e.COMPETENCIAS||[]).forEach(c => (acc[c.nombre] = acc[c.nombre] || []).push(c.puntaje)));
    return Object.entries(acc).map(([nombre, v]) => ({
      nombre: nombre.charAt(0) + nombre.slice(1).toLowerCase(), valor: avg(v), n: v.length
    })).sort((a,b) => b.n - a.n);
  }
  function agrupar(comps) {
    const r = reglas(), grupos = r && r.grupos_competencias;
    if (!grupos) return [{ nombre: "Competencias evaluadas", items: comps }];
    const norm = t => t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase().trim();
    const usados = new Set(grupos.filter(g=>!g.resto).flatMap(g=>g.items.map(norm)));
    return grupos.map(g => ({
      nombre: g.nombre,
      items: g.resto ? comps.filter(c => !usados.has(norm(c.nombre)))
                     : g.items.map(x => comps.find(c => norm(c.nombre) === norm(x))).filter(Boolean)
    })).filter(g => g.items.length);
  }

  function pagina2(d, lista, opts) {
    let y = encabezado(d, opts.empresa, opts.medicion, opts.filtro, true);

    /* Competencias agrupadas en dos columnas */
    y = seccion(d, "Competencias de la compañía", y);
    const grupos = agrupar(competencias(lista));
    const colW = (W - 2*PX - 10) / 2;
    const col = [y, y];
    grupos.forEach(g => {
      const alto = 6 + g.items.length * 8;
      const ci = col[0] <= col[1] ? 0 : 1;
      const x = PX + ci * (colW + 10);
      let cy = col[ci];
      d.setFont("helvetica","bold"); d.setFontSize(6.5); tcol(d, C.accent);
      d.text(g.nombre.toUpperCase(), x, cy + 2);
      d.setDrawColor(...C.border); d.line(x, cy + 3.5, x + colW, cy + 3.5);
      cy += 7.5;
      g.items.forEach(c => {
        const pct = c.valor / escalaComp();
        d.setFont("helvetica","normal"); d.setFontSize(6.8); tcol(d, C.text);
        d.text(fit(d, c.nombre, colW - 24), x, cy);
        d.setFont("helvetica","bold"); tcol(d, C.ink);
        d.text(fmtComp(c.valor), x + colW, cy, { align:"right" });
        bar(d, x, cy + 1.6, colW, 2, pct, nivel3(pct*100)===2 ? C.green : C.accent);
        cy += 8;
      });
      col[ci] = cy + 3;
      void alto;
    });
    y = Math.max(col[0], col[1]) + 4;

    /* Resultados por área */
    y = seccion(d, "Resultados por área", y);
    const areas = {};
    lista.forEach(e => (areas[e.AREA || "Sin área"] = areas[e.AREA || "Sin área"] || []).push(e));
    const cols = [
      { t:"Área", w:46, a:"left" }, { t:"Personas", w:18, a:"right" },
      { t:"Desempeño", w:34, a:"right" }, { t:"Potencial", w:34, a:"right" },
      { t:"Nota final", w:24, a:"right" }, { t:"Talento clave", w:30, a:"right" },
    ];
    const fila = (vals, yy, bold, bg) => {
      if (bg) { fill(d, bg); d.rect(PX, yy - 3.6, W - 2*PX, 5.4, "F"); }
      let x = PX + 2;
      d.setFont("helvetica", bold ? "bold" : "normal"); d.setFontSize(bold ? 6 : 6.6);
      tcol(d, bold ? C.muted : C.text);
      cols.forEach((c,i) => {
        const v = fit(d, vals[i], c.w - 3);
        if (c.a === "right") d.text(v, x + c.w - 3, yy, { align:"right" }); else d.text(v, x, yy);
        x += c.w;
      });
    };
    fila(cols.map(c=>c.t.toUpperCase()), y, true, C.surf2); y += 5.6;
    Object.entries(areas).sort((a,b)=>b[1].length-a[1].length).forEach(([a, es], i) => {
      const clave = es.filter(e => { const q = cuadrante(e); return q && ["Estrella","Pilar","Potencial Alto"].includes(q.nombre); }).length;
      fila([a, String(es.length), fmtEje(avg(es.map(e=>e.PUNTAJE_DESEMPENO)),"x"), fmtEje(avg(es.map(e=>e.PUNTAJE_POTENCIAL)),"y"),
            fmtNota(avg(es.map(e=>e.NOTA_FINAL).filter(v=>v!=null))), `${clave} (${(clave/es.length*100).toFixed(0)}%)`],
           y, false, i % 2 ? C.surface : null);
      y += 5.4;
    });
    y += 6;

    /* Campana de competencias con las zonas bajo / medio / alto */
    if (y < H - 70) {
      y = seccion(d, "Distribución de competencias (%)", y);
      const scores = [];
      lista.forEach(e => (e.COMPETENCIAS||[]).forEach(c => scores.push(c.puntaje / escalaComp() * 100)));
      if (scores.length > 1) {
        const m = avg(scores), sd = Math.sqrt(avg(scores.map(v => (v-m)**2))) || 1;
        const pdf = x => Math.exp(-0.5*((x-m)/sd)**2);
        const bx = PX, bw = W - 2*PX, bh = 36, by = y;
        const X = v => bx + v/100*bw;
        [[0,CORTE_BAJO,[251,236,236]],[CORTE_BAJO,CORTE_ALTO,[251,246,232]],[CORTE_ALTO,100,[236,247,242]]].forEach(([a,b,c]) => {
          fill(d, c); d.rect(X(a), by, X(b)-X(a), bh, "F");
        });
        d.setDrawColor(...C.accent); d.setLineWidth(0.6);
        let prev = null;
        for (let v = 0; v <= 100; v += 1) {
          const p = [X(v), by + bh - pdf(v) * (bh - 4)];
          if (prev) d.line(prev[0], prev[1], p[0], p[1]);
          prev = p;
        }
        d.setFont("helvetica","normal"); d.setFontSize(5.8); tcol(d, C.muted);
        [0,CORTE_BAJO,50,CORTE_ALTO,100].forEach(v => d.text(v + "%", X(v), by + bh + 3.5, { align: v===0 ? "left" : v===100 ? "right" : "center" }));
        const nB = scores.filter(v=>nivel3(v)===0).length, nM = scores.filter(v=>nivel3(v)===1).length, nA = scores.filter(v=>nivel3(v)===2).length;
        const p = k => (k/scores.length*100).toFixed(1) + "%";
        d.setFontSize(6.5); tcol(d, C.text);
        d.text(`Media ${m.toFixed(1)}% · Desviación ${sd.toFixed(1)} pts · ${scores.length} evaluaciones · Bajo ${nB} (${p(nB)}) · Medio ${nM} (${p(nM)}) · Alto ${nA} (${p(nA)})`,
               W/2, by + bh + 9, { align:"center" });
      }
    }
  }

  /* ══ ANÁLISIS CONSOLIDADO (texto del informe del cliente, analisis_data.js) ══ */
  function analisisCliente() {
    const id = window.CLIENTE_ACTUAL;
    return id && window.ANALISIS_CLIENTES && window.ANALISIS_CLIENTES[id];
  }
  const PLAZO_COLOR = { "Corto plazo":[201,69,69], "Mediano plazo":[176,122,0], "Largo plazo":[15,143,99] };

  function paginasAnalisis(d, A, opts, nuevaPagina) {
    let y = encabezado(d, opts.empresa, opts.medicion, opts.filtro, true);
    const LIM = H - 14, TW = W - 2*PX, LH = 3.7;
    const salto = need => {
      if (y + need > LIM) { nuevaPagina(); y = encabezado(d, opts.empresa, opts.medicion, opts.filtro, true); return true; }
      return false;
    };
    /* Párrafo que puede continuar en la página siguiente */
    const parrafo = (texto, size=7.6, color=C.text, estilo="normal", sangria=0) => {
      d.setFont("helvetica", estilo); d.setFontSize(size); tcol(d, color);
      const ls = d.splitTextToSize(texto, TW - sangria);
      ls.forEach(l => {
        if (salto(LH)) { d.setFont("helvetica", estilo); d.setFontSize(size); tcol(d, color); }
        d.text(l, PX + sangria, y); y += LH;
      });
      y += 2.2;
    };

    /* Portada de la sección */
    d.setFont("helvetica","bold"); d.setFontSize(13); tcol(d, C.ink);
    d.text("Análisis consolidado de la evaluación", PX, y + 2); y += 8;
    (A.intro || []).forEach((t,i) => parrafo(t, i === 0 ? 8.2 : 7.4, i === 0 ? C.ink : C.muted, i === 0 ? "bold" : "italic"));
    y += 2;

    (A.secciones || []).forEach(sec => {
      salto(16);
      y = seccion(d, sec.titulo, y + 2);
      sec.bloques.forEach(b => {
        if (b.tipo === "sub") {
          salto(10);
          d.setFont("helvetica","bold"); d.setFontSize(8.4); tcol(d, C.ink);
          d.text(b.texto, PX, y + 1); y += 5.5;
        } else if (b.tipo === "p") {
          parrafo(b.texto);
        } else if (b.tipo === "accion") {
          /* Tarjeta de acción: plazo, título, acción y evidencia/meta */
          d.setFontSize(7.2); d.setFont("helvetica","normal");
          const accL = d.splitTextToSize(b.accion || "", TW - 12);
          const evL  = b.evidencia ? d.splitTextToSize(b.evidencia, TW - 12) : [];
          const h = 12 + (accL.length + 1) * 3.4 + (evL.length ? (evL.length + 1) * 3.4 + 1 : 0) + 2;
          salto(h + 3);
          const col = PLAZO_COLOR[b.plazo] || C.accent;
          rr(d, PX, y, TW, h, 2.5, C.surface, C.border);
          fill(d, col); d.rect(PX, y + 2, 1.3, h - 4, "F");
          /* etiqueta de plazo */
          d.setFont("helvetica","bold"); d.setFontSize(6.2);
          const et = `${b.plazo.toUpperCase()} · ${b.tiempo}`;
          const ew = d.getTextWidth(et) + 5;
          rr(d, PX + 5, y + 3, ew, 4.6, 2, col.map(v => Math.round(v + (255 - v) * 0.85)), null);
          tcol(d, col); d.text(et, PX + 7.5, y + 6.2);
          d.setFontSize(8.2); tcol(d, C.ink);
          d.text(fit(d, b.titulo, TW - ew - 14), PX + ew + 8, y + 6.6);
          let cy = y + 12;
          d.setFont("helvetica","bold"); d.setFontSize(6.4); tcol(d, C.muted);
          d.text("ACCIÓN", PX + 5, cy); cy += 3.4;
          d.setFont("helvetica","normal"); d.setFontSize(7.2); tcol(d, C.text);
          accL.forEach(l => { d.text(l, PX + 5, cy); cy += 3.4; });
          if (evL.length) {
            cy += 1;
            d.setFont("helvetica","bold"); d.setFontSize(6.4); tcol(d, C.muted);
            d.text("EVIDENCIA Y META PROPUESTA", PX + 5, cy); cy += 3.4;
            d.setFont("helvetica","normal"); d.setFontSize(7.2); tcol(d, C.text);
            evL.forEach(l => { d.text(l, PX + 5, cy); cy += 3.4; });
          }
          y += h + 3;
        }
      });
      y += 3;
    });
  }

  /* ══ PÁGINAS 3+: personas por cuadrante e incompletas ══ */
  function paginasListado(d, lista, opts, nuevaPagina) {
    let y = encabezado(d, opts.empresa, opts.medicion, opts.filtro, true);
    const LIM = H - 14;
    const cols = [
      { t:"Nombre", w:52 }, { t:"Cargo", w:52 }, { t:"Área", w:28 },
      { t:nombreEje("x"), w:20, a:"right" }, { t:nombreEje("y"), w:20, a:"right" }, { t:"Nota", w:14, a:"right" },
    ];
    const salto = need => {
      if (y + need > LIM) { nuevaPagina(); y = encabezado(d, opts.empresa, opts.medicion, opts.filtro, true); return true; }
      return false;
    };
    const cabecera = () => {
      fill(d, C.surf2); d.rect(PX, y - 3.6, W - 2*PX, 5.2, "F");
      let x = PX + 2;
      d.setFont("helvetica","bold"); d.setFontSize(5.8); tcol(d, C.muted);
      cols.forEach(c => { const t = fit(d, c.t.toUpperCase(), c.w - 2); c.a ? d.text(t, x + c.w - 2, y, { align:"right" }) : d.text(t, x, y); x += c.w; });
      y += 5.4;
    };

    y = seccion(d, "Personas por cuadrante", y);
    ORDEN.forEach(nombre => {
      const q = QM.find(x => x.nombre === nombre);
      const gente = lista.filter(e => cuadrante(e) === q).sort((a,b) => (b.NOTA_FINAL||0) - (a.NOTA_FINAL||0));
      if (!gente.length) return;
      salto(18);
      fill(d, q.color); d.rect(PX, y - 3.5, 1.4, 5, "F");
      d.setFont("helvetica","bold"); d.setFontSize(8); tcol(d, q.color);
      d.text(`${q.nombre}  ·  ${gente.length} persona${gente.length>1?"s":""}`, PX + 4, y);
      y += 5;
      cabecera();
      gente.forEach((e, i) => {
        if (salto(5.2)) { d.setFont("helvetica","bold"); d.setFontSize(7); tcol(d, q.color); d.text(`${q.nombre} (cont.)`, PX, y); y += 5; cabecera(); }
        if (i % 2) { fill(d, C.surface); d.rect(PX, y - 3.6, W - 2*PX, 5.2, "F"); }
        let x = PX + 2;
        d.setFont("helvetica","normal"); d.setFontSize(6.4); tcol(d, C.text);
        const vals = [e.NOMBRE, e.CARGO, e.AREA, fmtEje(e.PUNTAJE_DESEMPENO,"x"), fmtEje(e.PUNTAJE_POTENCIAL,"y"), fmtNota(e.NOTA_FINAL)];
        cols.forEach((c, k) => { const t = fit(d, vals[k], c.w - 2.5); c.a ? d.text(t, x + c.w - 2, y, { align:"right" }) : d.text(t, x, y); x += c.w; });
        y += 5.2;
      });
      y += 4;
    });

    /* Evaluaciones incompletas */
    const pend = opts.pendientes || [];
    if (pend.length) {
      salto(22);
      y = seccion(d, `Evaluaciones incompletas (${pend.length}) — no se ubican en el 9-Box`, y + 2);
      const r = reglas();
      const motivo = e => [
        e.PUNTAJE_DESEMPENO == null ? ((r && r.eje_x.falta) || "sin desempeño") : null,
        e.PUNTAJE_POTENCIAL == null ? ((r && r.eje_y.falta) || "sin potencial") : null,
      ].filter(Boolean).join(" · ");
      pend.forEach((e, i) => {
        salto(5.2);
        if (i % 2) { fill(d, C.surface); d.rect(PX, y - 3.6, W - 2*PX, 5.2, "F"); }
        d.setFont("helvetica","normal"); d.setFontSize(6.4); tcol(d, C.text);
        d.text(fit(d, e.NOMBRE, 50), PX + 2, y);
        d.text(fit(d, e.CARGO, 50), PX + 54, y);
        tcol(d, C.muted); d.text(fit(d, motivo(e), 78), PX + 106, y);
        y += 5.2;
      });
    }
  }

  /* ══ API ══ */
  function generar(lista, opts = {}) {
    if (!lista || !lista.length) { alert("No hay personas en el filtro actual."); return; }
    if (!window.jspdf) { alert("Error: jsPDF no está cargado."); return; }
    const { jsPDF } = window.jspdf;
    const d = new jsPDF({ unit:"mm", format:"a4", orientation:"portrait" });
    opts = { empresa:"Empresa", medicion:"", pendientes:[], filtro:"", ...opts };

    pagina1(d, lista, opts);
    d.addPage(); pagina2(d, lista, opts);
    const A = analisisCliente();
    if (A && opts.incluirAnalisis !== false) { d.addPage(); paginasAnalisis(d, A, opts, () => d.addPage()); }
    d.addPage(); paginasListado(d, lista, opts, () => d.addPage());

    const total = d.getNumberOfPages();
    for (let i = 1; i <= total; i++) { d.setPage(i); pie(d, opts.empresa, i, total); }

    const fecha = new Date().toLocaleDateString("es-CO",{day:"2-digit",month:"2-digit",year:"numeric"}).replace(/\//g,"-");
    d.save(`Informe_Global_${opts.empresa.replace(/\s+/g,"_")}_${fecha}.pdf`);
  }

  return { generar };
})();
