/**
 * ═══════════════════════════════════════════════════════
 *  TALENT · OnePager — Generador de PDF en el navegador
 *  Requiere: jsPDF (cargado antes de este script)
 *  Uso:
 *    ReportePDF.individual(empleado)         → descarga 1 PDF
 *    ReportePDF.masivo(listaEmpleados)       → descarga PDF multipágina
 *    ReportePDF.masivo(lista, "Área Comercial") → filtra por área
 * ═══════════════════════════════════════════════════════
 */

const ReportePDF = (() => {

  /* ── Paleta ── */
  const C = {
    bg:      [255, 255, 255],
    surface: [246, 248, 251],
    surf2:   [238, 242, 247],
    border:  [222, 228, 236],
    text:    [42,  55,  75],
    muted:   [106, 117, 135],
    accent:  [31,  111, 139],
    green:   [15,  143, 99],
    yellow:  [176, 122, 0],
    red:     [201, 69,  69],
    pink:    [162, 60,  191],
    blue:    [63,  79,  216],
    orange:  [204, 90,  18],
    orange2: [194, 106, 26],
    slate:   [91,  107, 128],
    white:   [255, 255, 255],
    ink:     [27,  42,  65],
  };

  const QUADRANTS = [
    {nombre:"Diamante en bruto",       color:C.pink,    r:0, c:0},
    {nombre:"Alto pot. a desarrollar", color:C.green,   r:0, c:1},
    {nombre:"Talento estrategico",     color:C.blue,    r:0, c:2},
    {nombre:"Contribucion inconsist.", color:C.red,     r:1, c:0},
    {nombre:"Empleado clave",          color:C.slate,   r:1, c:1},
    {nombre:"Estrella emergente",      color:C.accent,  r:1, c:2},
    {nombre:"Revision de ajuste",      color:[180,35,35],r:2,c:0},
    {nombre:"Confiable",               color:C.yellow,  r:2, c:1},
    {nombre:"Experto tecnico",         color:C.orange,  r:2, c:2},
  ];

  /* Logo Affine (azul) para el encabezado del PDF */
  const LOGO_AFFINE = "data:image/png;base64,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";
  const LOGO_RATIO  = 0.2900;
  function logo(doc, xRight, y, w) {
    try { doc.addImage(LOGO_AFFINE, "PNG", xRight - w, y, w, w * LOGO_RATIO); } catch(e) {}
  }
  /* Escala de competencias del cliente activo (Kaika = 6, por defecto 4) */
  function ESC() { return (typeof window !== "undefined" && window.COMP_ESCALA_MAX) || 4; }
  function esLocal() { return typeof window !== "undefined" && !!window.COMP_ESCALA_MAX; }

  /* ── Helpers ── */
  function clasificar(des, pot) {
    const col  = nivel3(des);
    const fila = 2 - nivel3(pot);
    return QUADRANTS.find(q => q.r === fila && q.c === col);
  }

  function iniciales(nombre) {
    return (nombre || "?").split(" ").slice(0,2).map(w=>w[0]).join("").toUpperCase();
  }

  /* Cortes del 9-Box (en %): bajo 0–16 · medio 16,1–84 · alto 84,1–100 */
  const CORTE_BAJO = 16, CORTE_ALTO = 84;
  function nivel3(v) { return v > CORTE_ALTO ? 2 : v > CORTE_BAJO ? 1 : 0; }
  function nivelColor(val, max=100) {
    const n = nivel3(val / max * 100);
    return n === 2 ? C.green : n === 1 ? C.yellow : C.red;
  }

  function promComp(emp) {
    const cs = emp.COMPETENCIAS || [];
    return cs.length ? cs.reduce((a,c) => a + c.puntaje, 0) / cs.length : 0;
  }

  function recomendacion(emp) {
    const q = clasificar(emp.PUNTAJE_DESEMPENO, emp.PUNTAJE_POTENCIAL).nombre;
    if (q.includes("Talento") || q.includes("Estrella"))
      return "Aceleracion: asignar proyectos estrategicos y mentoria ejecutiva.";
    if (q.includes("Alto pot") || q.includes("Diamante"))
      return "Desarrollo: potenciar competencias clave y aumentar desempeno.";
    if (q.includes("Confiable") || q.includes("Empleado"))
      return "Consolidacion: reforzar fortalezas y definir 1-2 competencias objetivo.";
    if (q.includes("Revision") || q.includes("Contribucion"))
      return "Intervencion urgente: plan de mejora con metas en 90 dias.";
    if (q.includes("Experto"))
      return "Retencion: reconocer expertise y crear ruta de especializacion.";
    return "Plan formativo y seguimiento cercano.";
  }

  function interpretacion(emp) {
    const des = emp.PUNTAJE_DESEMPENO, pot = emp.PUNTAJE_POTENCIAL;
    const nd = ["bajo","medio","alto"][nivel3(des)];
    const np = ["bajo","medio","alto"][nivel3(pot)];
    const q = clasificar(des,pot).nombre;
    let desc = "";
    if (q.includes("Talento")||q.includes("Estrella")) desc="Perfil de alto impacto. Candidato a roles de mayor responsabilidad.";
    else if (q.includes("Alto pot")||q.includes("Diamante")) desc="Alto potencial identificado. Requiere plan de desarrollo acelerado.";
    else if (q.includes("Confiable")||q.includes("Empleado")) desc="Profesional estable. Cerrar 1-2 competencias clave y aumentar autonomia.";
    else if (q.includes("Revision")||q.includes("Contribucion")) desc="Perfil en alerta. Requiere intervencion y seguimiento cercano.";
    else if (q.includes("Experto")) desc="Experto tecnico consolidado. Valorar como mentor interno.";
    else desc="Perfil en desarrollo: priorizar plan formativo.";
    return { desc, pos: `Desempeno ${nd} · Potencial ${np}` };
  }

  function hoy() {
    return new Date().toLocaleDateString("es-CO", {day:"2-digit",month:"short",year:"numeric"});
  }

  /* ── jsPDF wrappers ── */
  function fill(doc, color)   { doc.setFillColor(...color); }
  function stroke(doc, color) { doc.setDrawColor(...color); }
  function textCol(doc, color){ doc.setTextColor(...color); }

  function rect(doc, x,y,w,h, fColor, sColor, lw=0.3) {
    if(fColor){ fill(doc,fColor); }
    if(sColor){ stroke(doc,sColor); doc.setLineWidth(lw); }
    if(fColor && sColor) doc.rect(x,y,w,h,"FD");
    else if(fColor)      doc.rect(x,y,w,h,"F");
    else if(sColor)      doc.rect(x,y,w,h,"S");
  }

  function roundRect(doc, x,y,w,h,r, fColor, sColor, lw=0.3) {
    if(fColor){ fill(doc,fColor); }
    if(sColor){ stroke(doc,sColor); doc.setLineWidth(lw); }
    const mode = fColor && sColor ? "FD" : fColor ? "F" : "S";
    doc.roundedRect(x,y,w,h,r,r,mode);
  }

  function circle(doc, cx,cy,r, fColor, sColor) {
    if(fColor){ fill(doc,fColor); }
    if(sColor){ stroke(doc,sColor); }
    const mode = fColor && sColor ? "FD" : fColor ? "F" : "S";
    doc.circle(cx,cy,r,mode);
  }

  function bar(doc, x,y,w,h, pct, color) {
    roundRect(doc, x,y,w,h, h/2, C.border, null);
    if(pct > 0){
      const fw = Math.max(h, w*Math.min(pct,1));
      roundRect(doc, x,y,fw,h, h/2, color, null);
    }
  }

  function wrapText(doc, text, maxW, fontSize, font="helvetica") {
    doc.setFont(font,"normal");
    doc.setFontSize(fontSize);
    const words = text.split(" ");
    const lines = [];
    let line = "";
    for (const w of words) {
      const test = line ? line+" "+w : w;
      if (doc.getTextWidth(test) < maxW) { line = test; }
      else { if(line) lines.push(line); line = w; }
    }
    if(line) lines.push(line);
    return lines;
  }

  /**
   * Envuelve un texto reduciendo el tamano de fuente hasta que quepa en maxLines.
   * Si ni con el tamano minimo cabe, trunca la ultima linea con "...".
   * Devuelve { lines, fontSize }.
   */
  function fitTextBlock(doc, text, maxW, maxLines, startSize, minSize=5.5, font="helvetica") {
    let size = startSize;
    let lines = wrapText(doc, text, maxW, size, font);
    while (lines.length > maxLines && size > minSize) {
      size -= 0.5;
      lines = wrapText(doc, text, maxW, size, font);
    }
    if (lines.length > maxLines) {
      lines = lines.slice(0, maxLines);
      let last = lines[maxLines-1];
      doc.setFont(font,"normal"); doc.setFontSize(size);
      while (doc.getTextWidth(last+"...") > maxW && last.length > 3) {
        last = last.slice(0, -1);
      }
      lines[maxLines-1] = last + "...";
    }
    return { lines, fontSize: size };
  }

  function wrapLimited(doc, text, maxW, fontSize, maxLines, font="helvetica") {
    let lines = wrapText(doc, text, maxW, fontSize, font);
    if (lines.length > maxLines) {
      lines = lines.slice(0, maxLines);
      let last = lines[maxLines-1];
      doc.setFont(font,"normal"); doc.setFontSize(fontSize);
      while (doc.getTextWidth(last + "...") > maxW && last.length > 3) {
        last = last.slice(0, -1);
      }
      lines[maxLines-1] = last + "...";
    }
    return lines;
  }

  /* ── MINI 9-BOX ── */
  function draw9Box(doc, x, y, size, emp) {
    const cw = size/3, ch = size/3;
    const CELL_BG = [
      [[246,239,250],[236,247,242],[238,240,253]],
      [[251,240,240],[244,246,249],[251,246,232]],
      [[251,236,236],[252,241,233],[252,243,234]],
    ];
    const qdes = nivel3(emp.PUNTAJE_DESEMPENO);
    const qpot = 2 - nivel3(emp.PUNTAJE_POTENCIAL);

    for(let row=0;row<3;row++){
      for(let col=0;col<3;col++){
        const cx = x + col*cw;
        const cy = y + row*ch;
        const qdata = QUADRANTS.find(q=>q.r===row&&q.c===col);
        const bg = CELL_BG[row][col];

        // Fondo celda
        rect(doc, cx,cy,cw,ch, bg, C.border, 0.2);

        // Highlight celda activa
        if(row===qpot && col===qdes){
          const hc = [...qdata.color, 40];
          doc.setFillColor(qdata.color[0],qdata.color[1],qdata.color[2]);
          doc.setGState(new doc.GState({opacity:0.18}));
          doc.rect(cx,cy,cw,ch,"F");
          doc.setGState(new doc.GState({opacity:1}));
        }

        // Label
        doc.setFont("helvetica","bold");
        doc.setFontSize(4);
        textCol(doc, qdata.color);
        const label = qdata.nombre;
        doc.text(label, cx+1.5, cy+ch-2, {maxWidth: cw-3});

        // Dot del empleado
        if(row===qpot && col===qdes){
          const dcx = cx+cw/2, dcy = cy+ch/2;
          circle(doc, dcx,dcy,3, C.white, null);
          circle(doc, dcx,dcy,2, qdata.color, null);
        }
      }
    }

    // Ejes labels
    doc.setFont("helvetica","normal");
    doc.setFontSize(4.5);
    textCol(doc,C.muted);
    doc.text("Bajo", x, y+size+5);
    doc.text("Alto", x+size-8, y+size+5);
    doc.text("DESEMPENO", x+size/2-12, y+size+5);

    // Eje Y
    doc.saveGraphicsState();
    doc.setFontSize(4.5); textCol(doc,C.muted);
    doc.text("POTENCIAL", x-3, y+size/2, {angle:90});
    doc.restoreGraphicsState();
  }

  /* ══════════════════════════════════════════════════════
     DIBUJAR UNA PÁGINA COMPLETA
     ══════════════════════════════════════════════════════ */
  function dibujarPagina(doc, emp, empresa, medicion) {
    const W=210, H=297;   // A4 mm
    const PX=12, PY=8;    // padding

    const des = emp.PUNTAJE_DESEMPENO || 0;
    const pot = emp.PUNTAJE_POTENCIAL || 0;
    const qm  = clasificar(des, pot);
    const pc  = promComp(emp);
    const rec = recomendacion(emp);
    const {desc: interp, pos} = interpretacion(emp);
    const nivelD = nivelColor(des);
    const nivelP = nivelColor(pot);
    const comps  = emp.COMPETENCIAS || [];
    const forts  = comps.filter(c=>c.nivel==="Fortaleza").sort((a,b)=>b.puntaje-a.puntaje);
    const devs   = comps.filter(c=>c.nivel!=="Fortaleza").sort((a,b)=>a.puntaje-b.puntaje);

    /* ── FONDO ── */
    rect(doc, 0,0,W,H, C.bg, null);

    /* ══ HEADER ══ */
    const HH = 32;
    rect(doc, 0,0,W,HH, C.surface, null);
    doc.setDrawColor(...C.border); doc.setLineWidth(0.4);
    doc.line(0,HH,W,HH);

    // Avatar circle
    const avR=10, avCX=PX+avR, avCY=HH/2;
    circle(doc, avCX,avCY,avR, qm.color, null);
    doc.setFont("helvetica","bold"); doc.setFontSize(9);
    textCol(doc,C.white);
    doc.text(iniciales(emp.NOMBRE), avCX, avCY+3, {align:"center"});

    // Nombre
    const nx = avCX+avR+5;
    doc.setFont("helvetica","bold"); doc.setFontSize(13);
    textCol(doc,C.ink);
    doc.text((emp.NOMBRE||"").toUpperCase(), nx, HH/2-2);

    // Sub datos
    doc.setFont("helvetica","normal"); doc.setFontSize(6.5);
    textCol(doc,C.muted);
    const cargo_str = [emp.CARGO, emp.GRUPO, emp.AREA].filter(Boolean).join(" · ") || "—";
    doc.text(cargo_str, nx, HH/2+4);
    doc.text(`CC ${emp.CC||"—"} · Reporta a ${emp.REPORTA_A||"—"}`, nx, HH/2+9);

    // Badge esquina derecha
    doc.setFont("helvetica","bold"); doc.setFontSize(6.5);
    textCol(doc,qm.color);
    doc.text("EVALUACION COMPLETA", W-PX, 10, {align:"right"});
    doc.setFont("helvetica","normal");
    textCol(doc,C.muted);
    doc.text(hoy(), W-PX, 15, {align:"right"});
    logo(doc, W-PX, 18, 20);

    /* ══ KPI CARDS (2 tarjetas: Competencias y Potencial, escala 1-4) ══ */
    let curY = HH+4;
    const KH=22, gap=6;
    const KW2=(W-2*PX-gap)/2;

    // Card 1: Promedio Competencias
    function kpiCard(x, w, label, valor, max, color, sufijo="/4") {
      roundRect(doc, x,curY,w,KH,2, C.surface, C.border, 0.3);
      doc.setFont("helvetica","bold"); doc.setFontSize(5.5);
      textCol(doc,C.muted);
      doc.text(label, x+3, curY+5);
      // Número grande
      doc.setFont("helvetica","bold"); doc.setFontSize(14);
      textCol(doc,C.ink);
      doc.text(`${valor}`, x+3, curY+14);
      const valW = doc.getTextWidth(`${valor}`); // medir ANTES de cambiar el tamaño de fuente
      doc.setFont("helvetica","normal"); doc.setFontSize(7); textCol(doc,C.muted);
      doc.text(sufijo, x+3+valW+1.5, curY+14);
      // Barra
      bar(doc, x+3, curY+16, w-6, 2.5, (parseFloat(valor)/max), color);
    }

    const potEscala4 = esLocal() && emp.NOTA_FINAL!=null ? emp.NOTA_FINAL.toFixed(1) : (pot/25).toFixed(2);
    const potSufijo  = esLocal() && emp.NOTA_FINAL!=null ? "%" : "/4";
    if (esLocal() && window.REGLAS) {
      /* Tarjeta por eje según las reglas del cliente: en su escala si la tiene, si no en % */
      const tarjeta = (x, eje, pct, rotulo, color) => {
        const v = eje.campo_escala ? emp[eje.campo_escala] : null;
        const tit = eje.nombre.toUpperCase() === rotulo ? rotulo : `${eje.nombre.toUpperCase()} (${rotulo})`;
        if (v != null) kpiCard(x, KW2, tit, v.toFixed(2), eje.escala, color, "/"+eje.escala);
        else kpiCard(x, KW2, tit, pct.toFixed(1), 100, color, "%");
      };
      tarjeta(PX,         window.REGLAS.eje_y, pot, "POTENCIAL", C.accent);
      tarjeta(PX+KW2+gap, window.REGLAS.eje_x, des, "DESEMPENO", nivelD);
    } else {
      kpiCard(PX,        KW2, "PROMEDIO COMPETENCIAS", pc.toFixed(2),  4, C.accent, "/4");
      kpiCard(PX+KW2+gap,KW2, "PUNTAJE POTENCIAL",     potEscala4,     4, nivelP,   "/4");
    }

    /* ── Texto perfil ── */
    curY += KH+3;
    doc.setFont("helvetica","italic"); doc.setFontSize(7);
    textCol(doc,C.muted);
    doc.text(interp, PX, curY, {maxWidth: W-2*PX});
    curY += 5;

    /* ══ RECOMENDACIÓN ══ */
    const RH=18;
    roundRect(doc, PX,curY,W-2*PX,RH,2, [235,244,247], [150,190,205], 0.6);
    doc.setFont("helvetica","bold"); doc.setFontSize(6.5);
    textCol(doc,C.accent);
    doc.text("* RECOMENDACION", PX+3, curY+6);
    doc.setFont("helvetica","bold");
    textCol(doc,C.text);
    const { lines: recLines, fontSize: recSize } = fitTextBlock(doc, rec, W-2*PX-6, 2, 8, 6.5);
    doc.setFontSize(recSize);
    recLines.forEach((ln,i)=> doc.text(ln, PX+3, curY+11+i*4.5));
    curY += RH+4;

    /* ══ FILA MEDIA: Overview + 9Box + Interpretación ══ */
    const BODY_H=62;
    const LW=65, MW=68, RW=W-2*PX-LW-MW-8;

    // Card izquierda
    roundRect(doc, PX,curY,LW,BODY_H,2, C.surface, C.border, 0.3);

    doc.setFont("helvetica","bold"); doc.setFontSize(6);
    textCol(doc,C.accent);
    doc.text("OVERVIEW EJECUTIVO", PX+3, curY+6);

    const { lines: ovLines, fontSize: ovSize } = fitTextBlock(doc, interp, LW-6, 3, 7, 5.5);
    doc.setFont("helvetica","normal"); doc.setFontSize(ovSize);
    textCol(doc,C.text);
    ovLines.forEach((ln,i)=> doc.text(ln, PX+3, curY+12+i*4));

    // Fortalezas
    let ly = curY+28;
    doc.setFont("helvetica","bold"); doc.setFontSize(6);
    textCol(doc,C.green);
    doc.text("FORTALEZAS", PX+3, ly);
    ly+=4;
    const colWL = LW/2 - 6;
    doc.setFont("helvetica","normal"); doc.setFontSize(5.6);
    textCol(doc,C.text);
    if (!forts.length) {
      textCol(doc,C.muted);
      doc.text("Ninguna aún", PX+4, ly);
    }
    forts.slice(0,3).forEach(f=>{
      const lines = wrapLimited(doc, `• ${f.nombre}`, colWL, 5.6, 2);
      doc.setFont("helvetica","normal"); doc.setFontSize(5.6); textCol(doc,C.text);
      lines.forEach(ln=>{ doc.text(ln, PX+4, ly); ly+=2.7; });
      ly += 0.5;
    });

    // Áreas desarrollo
    let ly2=curY+28;
    const col2x = PX+LW/2+2;
    const colWR = LW/2 - 6;
    doc.setFont("helvetica","bold"); doc.setFontSize(6);
    textCol(doc,C.yellow);
    doc.text("AREAS DESARROLLO", col2x, ly2, {maxWidth: colWR+4});
    ly2+=4;
    devs.slice(0,3).forEach(d=>{
      const lines = wrapLimited(doc, `• ${d.nombre}`, colWR, 5.6, 2);
      doc.setFont("helvetica","normal"); doc.setFontSize(5.6); textCol(doc,C.text);
      lines.forEach(ln=>{ doc.text(ln, col2x+1, ly2); ly2+=2.7; });
      ly2 += 0.5;
    });

    // Recomendacion corta
    let ly3=curY+BODY_H-12;
    doc.setFont("helvetica","bold"); doc.setFontSize(6);
    textCol(doc,C.yellow);
    doc.text("REC. EJECUTIVA", PX+3, ly3);
    doc.setFont("helvetica","normal");
    textCol(doc,C.text);
    const { lines: recCortas, fontSize: recCortaSize } = fitTextBlock(doc, rec, LW-6, 2, 6, 5);
    doc.setFontSize(recCortaSize);
    recCortas.forEach((ln,i)=> doc.text(i===0?`01 ${ln}`:ln, PX+3, ly3+4+i*3.2));

    // Card central: 9-Box
    const mx = PX+LW+4;
    roundRect(doc, mx,curY,MW,BODY_H,2, C.surface, C.border, 0.3);
    const boxSize=54, boxX=mx+(MW-boxSize)/2, boxY=curY+(BODY_H-boxSize)/2-2;
    draw9Box(doc, boxX, boxY, boxSize, emp);

    // Card derecha: Interpretación
    const rx = mx+MW+4;
    roundRect(doc, rx,curY,RW,BODY_H,2, C.surface, C.border, 0.3);

    doc.setFont("helvetica","bold"); doc.setFontSize(6);
    textCol(doc,C.accent);
    doc.text("INTERPRETACION EJECUTIVA", rx+3, curY+6);

    const { lines: intLines, fontSize: intSize } = fitTextBlock(doc, interp, RW-6, 4, 7, 5.5);
    doc.setFont("helvetica","normal"); doc.setFontSize(intSize);
    textCol(doc,C.text);
    let iy=curY+12;
    intLines.forEach(ln=>{ doc.text(ln, rx+3, iy); iy+=4; });

    iy+=2;
    doc.setFont("helvetica","normal"); doc.setFontSize(6);
    textCol(doc,C.muted);
    doc.text(pos, rx+3, iy);

    // Mini barra potencial en card derecha
    iy+=6;
    doc.setFont("helvetica","bold"); doc.setFontSize(5.5);
    textCol(doc,C.muted);
    doc.text(esLocal() && window.REGLAS ? `NOTA FINAL (${window.REGLAS.nota_texto.toUpperCase()})` : "RESULTADO FINAL POTENCIAL", rx+3, iy, {maxWidth: RW-6});
    iy+=3;
    const notaPct = esLocal() && emp.NOTA_FINAL!=null ? emp.NOTA_FINAL/100 : pot/100;
    bar(doc, rx+3, iy, RW-6, 3, notaPct, nivelColor(notaPct*100));
    doc.setFont("helvetica","bold"); doc.setFontSize(8);
    textCol(doc,C.ink);
    doc.text(`${potEscala4}`, rx+4, iy+6);
    const potW = doc.getTextWidth(`${potEscala4}`);
    doc.setFont("helvetica","normal"); doc.setFontSize(6); textCol(doc,C.muted);
    doc.text(potSufijo, rx+4+potW+1, iy+6);

    curY += BODY_H+4;

    /* ══ COMPETENCIAS ══ */
    const nCols=2, compW=(W-2*PX-4)/nCols;
    const nRows=Math.ceil(comps.length/nCols);
    const LEGEND_H=6;
    const COMP_H=10+LEGEND_H+nRows*14;
    roundRect(doc, PX,curY,W-2*PX,COMP_H,2, C.surface, C.border, 0.3);

    doc.setFont("helvetica","bold"); doc.setFontSize(6);
    textCol(doc,C.muted);
    doc.text("COMPETENCIAS EVALUADAS", PX+3, curY+5);
    doc.text(`${comps.length} items`, W-PX-3, curY+5, {align:"right"});

    // Leyenda de colores (que significa cada color)
    function legendChip(lx, ly, color, label) {
      circle(doc, lx, ly, 1.3, color, null);
      doc.setFont("helvetica","normal"); doc.setFontSize(5.5);
      textCol(doc, C.muted);
      doc.text(label, lx+2.5, ly+1);
      return lx + 2.5 + doc.getTextWidth(label) + 6;
    }
    let legX = PX+3;
    const legY = curY+9.5;
    legX = legendChip(legX, legY, C.green, "Fortaleza (75% o mas)");
    legX = legendChip(legX, legY, C.yellow, "En desarrollo (50 a 74%)");
    legX = legendChip(legX, legY, C.red, "Prioritario (menos de 50%)");

    comps.forEach((comp,i)=>{
      const col=i%2, row=Math.floor(i/2);
      const cx2=PX+3+col*(compW+4);
      const cy2=curY+10+LEGEND_H+row*14;
      const cColor = colorNivel(comp.nivel);
      const pct = comp.puntaje/ESC();

      // Nombre
      doc.setFont("helvetica","normal"); doc.setFontSize(5.5);
      const maxNomW = compW - (doc.getTextWidth(comp.nivel)+3) - 6;
      doc.setFontSize(7);
      textCol(doc,C.text);
      let nom = comp.nombre;
      if (doc.getTextWidth(nom) > maxNomW) {
        while (nom.length > 4 && doc.getTextWidth(nom + "...") > maxNomW) nom = nom.slice(0, -1);
        nom = nom.trim() + "...";
      }
      doc.text(nom, cx2, cy2);

      // Badge nivel
      const bText=comp.nivel;
      doc.setFontSize(5.5); doc.setFont("helvetica","normal");
      const bW=doc.getTextWidth(bText)+3;
      const tint = cColor.map(v => Math.round(v + (255 - v) * 0.85));
      roundRect(doc, cx2+compW-bW-2, cy2-4, bW, 5, 1, tint, cColor, 0.3);
      textCol(doc,cColor);
      doc.text(bText, cx2+compW-bW, cy2);

      // Barra
      bar(doc, cx2, cy2+2, compW-25, 2.5, pct, cColor);

      // Valor
      doc.setFont("helvetica","bold"); doc.setFontSize(8);
      textCol(doc,C.ink);
      doc.text(`${comp.puntaje.toFixed(2)}`, cx2+compW-20, cy2+5, {align:"right"});
    });

    curY += COMP_H+4;

    /* ══ FOOTER ══ */
    const FY=H-8;
    rect(doc, 0,FY,W,8, C.surface, null);
    doc.setDrawColor(...C.border); doc.setLineWidth(0.4);
    doc.line(0,FY,W,FY);

    doc.setFont("helvetica","bold"); doc.setFontSize(6.5);
    textCol(doc,C.muted);
    doc.text("Affine · OnePager 2026", PX, FY+5);
    doc.setFont("helvetica","normal");
    doc.text(`Generado el ${hoy()} · Uso interno y confidencial`, W-PX, FY+5, {align:"right"});
    doc.text(empresa, W/2, FY+5, {align:"center"});
  }

  /* ══════════════════════════════════════════════════════
     PÁGINA 2 — PLAN DE DESARROLLO INDIVIDUAL
     ══════════════════════════════════════════════════════ */
  function tipDe(comp) {
    if (comp.tip) return comp.tip;
    if (typeof tipCompetencia === "function") return tipCompetencia(comp.nombre, comp.puntaje);
    return "Seguir reforzando esta competencia con retroalimentacion periodica.";
  }
  function nivelDe(comp) {
    if (comp.nivel) return comp.nivel;
    if (typeof nivelCompetencia === "function") return nivelCompetencia(comp.puntaje);
    return comp.puntaje >= 3 ? "Fortaleza" : "En desarrollo";
  }
  function colorNivel(nivel) {
    if (nivel === "Fortaleza") return C.green;
    if (nivel === "Prioritario") return C.red;
    return C.yellow;
  }

  function dibujarPaginaPlan(doc, emp, empresa, medicion) {
    const W=210, H=297;
    const PX=12, PY=8;
    const comps = (emp.COMPETENCIAS || []).map(c => ({
      nombre: c.nombre, puntaje: c.puntaje,
      nivel: nivelDe(c), tip: tipDe(c)
    }));
    const ordenadas = [...comps].sort((a,b)=>a.puntaje-b.puntaje);
    const prioritarias = ordenadas.slice(0,2);
    const fuertes = [...comps].sort((a,b)=>b.puntaje-a.puntaje).slice(0,2);

    /* Fondo */
    rect(doc, 0,0,W,H, C.bg, null);

    /* Header */
    const HH=26;
    rect(doc, 0,0,W,HH, C.surface, null);
    doc.setDrawColor(...C.border); doc.setLineWidth(0.4);
    doc.line(0,HH,W,HH);
    doc.setFont("helvetica","bold"); doc.setFontSize(11);
    textCol(doc,C.ink);
    doc.text("PLAN DE DESARROLLO INDIVIDUAL", PX, HH/2-1);
    doc.setFont("helvetica","normal"); doc.setFontSize(7);
    textCol(doc,C.muted);
    doc.text(`${(emp.NOMBRE||"").toUpperCase()} · ${emp.CARGO||"—"} · CC ${emp.CC||"—"}`, PX, HH/2+6);
    doc.setFont("helvetica","bold"); doc.setFontSize(6.5);
    textCol(doc,C.accent);
    doc.text(`ESCALA 1 - ${ESC()}`, W-PX, 10, {align:"right"});
    doc.setFont("helvetica","normal"); textCol(doc,C.muted);
    doc.text(hoy(), W-PX, 15, {align:"right"});

    let curY = HH+6;

    /* ══ TABLA DE COMPETENCIAS ══ */
    const rowH = 21;
    const tblH = 8 + comps.length*rowH;
    roundRect(doc, PX,curY,W-2*PX,tblH,2, C.surface, C.border, 0.3);
    doc.setFont("helvetica","bold"); doc.setFontSize(6.5);
    textCol(doc,C.muted);
    doc.text("DETALLE POR COMPETENCIA Y RECOMENDACIÓN", PX+3, curY+5.5);

    let ry = curY+9;
    comps.forEach(c => {
      const color = colorNivel(c.nivel);
      const pct = c.puntaje/ESC();
      // Nombre + puntaje + nivel
      doc.setFont("helvetica","bold"); doc.setFontSize(7.5);
      textCol(doc,C.ink);
      doc.text(c.nombre, PX+3, ry);
      doc.setFont("helvetica","bold"); doc.setFontSize(7.5);
      textCol(doc,color);
      doc.text(`${c.puntaje.toFixed(2)} / ${ESC()}.00 · ${c.nivel}`, W-PX-3, ry, {align:"right"});
      // Barra
      bar(doc, PX+3, ry+2, W-2*PX-6, 2.2, pct, color);
      // Tip
      doc.setFont("helvetica","normal"); doc.setFontSize(6.3);
      textCol(doc,C.text);
      const tipLines = wrapText(doc, c.tip, W-2*PX-6, 6.3);
      tipLines.slice(0,2).forEach((ln,i)=> doc.text(ln, PX+3, ry+7+i*3.4));
      ry += rowH;
    });

    curY += tblH+5;

    /* ══ PRIORIDADES DE DESARROLLO ══ */
    const halfW = (W-2*PX-4)/2;
    const boxH = 58;

    roundRect(doc, PX,curY,halfW,boxH,2, [253,240,240], [230,170,170], 0.5);
    doc.setFont("helvetica","bold"); doc.setFontSize(7);
    textCol(doc,C.red);
    doc.text("• PRIORIDADES DE DESARROLLO", PX+3, curY+6);
    let py = curY+11;
    if (prioritarias.length === 0) {
      doc.setFont("helvetica","normal"); doc.setFontSize(6.5); textCol(doc,C.muted);
      doc.text("No se identifican competencias criticas en este momento.", PX+3, py, {maxWidth:halfW-6});
    }
    prioritarias.forEach((c,i)=>{
      doc.setFont("helvetica","bold"); doc.setFontSize(6.8); textCol(doc,C.ink);
      doc.text(`${i+1}. ${c.nombre} (${c.puntaje.toFixed(2)}/${ESC()}.00)`, PX+3, py, {maxWidth:halfW-6});
      py += 4.2;
      doc.setFont("helvetica","normal"); doc.setFontSize(6.2); textCol(doc,C.text);
      const lines = wrapText(doc, c.tip, halfW-6, 6.2);
      lines.slice(0,4).forEach(ln=>{ doc.text(ln, PX+4, py); py+=3.3; });
      py += 2.5;
    });

    /* ══ FORTALEZAS A POTENCIAR ══ */
    const rx = PX+halfW+4;
    roundRect(doc, rx,curY,halfW,boxH,2, [233,246,240], [150,205,180], 0.5);
    doc.setFont("helvetica","bold"); doc.setFontSize(7);
    textCol(doc,C.green);
    doc.text("• FORTALEZAS A POTENCIAR", rx+3, curY+6);
    let fy = curY+11;
    fuertes.forEach((c,i)=>{
      doc.setFont("helvetica","bold"); doc.setFontSize(6.8); textCol(doc,C.ink);
      doc.text(`${i+1}. ${c.nombre} (${c.puntaje.toFixed(2)}/${ESC()}.00)`, rx+3, fy, {maxWidth:halfW-6});
      fy += 4.2;
      doc.setFont("helvetica","normal"); doc.setFontSize(6.2); textCol(doc,C.text);
      const lines = wrapText(doc, c.tip, halfW-6, 6.2);
      lines.slice(0,4).forEach(ln=>{ doc.text(ln, rx+4, fy); fy+=3.3; });
      fy += 2.5;
    });

    curY += boxH+5;

    /* ══ SEGUIMIENTO SUGERIDO ══ */
    const segH = 24;
    roundRect(doc, PX,curY,W-2*PX,segH,2, [235,244,247], [150,190,205], 0.6);
    doc.setFont("helvetica","bold"); doc.setFontSize(6.5);
    textCol(doc,C.accent);
    doc.text("* SEGUIMIENTO SUGERIDO", PX+3, curY+6);
    doc.setFont("helvetica","normal"); doc.setFontSize(6.5);
    textCol(doc,C.text);
    const seguimiento = [
      "30 dias: revisar avances en las 2 competencias prioritarias con el lider directo.",
      "60 dias: retroalimentacion cruzada de pares sobre cambios observados.",
      "90 dias: nueva medicion o autoevaluacion para verificar progreso del plan."
    ];
    seguimiento.forEach((s,i)=> doc.text(`• ${s}`, PX+3, curY+11+i*4.2, {maxWidth:W-2*PX-6}));

    /* Footer */
    const FY=H-8;
    rect(doc, 0,FY,W,8, C.surface, null);
    doc.setDrawColor(...C.border); doc.setLineWidth(0.4);
    doc.line(0,FY,W,FY);
    doc.setFont("helvetica","bold"); doc.setFontSize(6.5);
    textCol(doc,C.muted);
    doc.text("Affine · Plan de Desarrollo", PX, FY+5);
    doc.setFont("helvetica","normal");
    doc.text(`Generado el ${hoy()} · Uso interno y confidencial`, W-PX, FY+5, {align:"right"});
    doc.text(empresa, W/2, FY+5, {align:"center"});
  }

  /* ══════════════════════════════════════════════════════
     PÁGINA(S) — RETROALIMENTACIÓN 360
     Se agrega solo si el empleado tiene feedback registrado.
     Soporta 1 o varios evaluadores y salto automático de página
     si el contenido no cabe en una sola hoja.
     ══════════════════════════════════════════════════════ */
  function dibujarPaginaFeedback(doc, emp, empresa, medicion) {
    const W=210, H=297;
    const PX=12;
    const feedbacks = emp.FEEDBACK || [];
    if (!feedbacks.length) return;

    const HH = 26;
    const MAXY = H - 16; // deja espacio para el footer

    function pintarHeader(continuacion) {
      rect(doc, 0,0,W,H, C.bg, null);
      rect(doc, 0,0,W,HH, C.surface, null);
      doc.setDrawColor(...C.border); doc.setLineWidth(0.4);
      doc.line(0,HH,W,HH);
      doc.setFont("helvetica","bold"); doc.setFontSize(11);
      textCol(doc,C.ink);
      doc.text(continuacion ? "RETROALIMENTACIÓN Y PLAN DE ACCIÓN (cont.)" : "RETROALIMENTACIÓN Y PLAN DE ACCIÓN", PX, HH/2-1);
      doc.setFont("helvetica","normal"); doc.setFontSize(7);
      textCol(doc,C.muted);
      doc.text(`${(emp.NOMBRE||"").toUpperCase()} · ${emp.CARGO||"—"} · CC ${emp.CC||"—"}`, PX, HH/2+6);
      doc.setFont("helvetica","bold"); doc.setFontSize(6.5);
      textCol(doc,C.accent);
      doc.text(`${feedbacks.length} EVALUADOR${feedbacks.length>1?"ES":""}`, W-PX, 10, {align:"right"});
      doc.setFont("helvetica","normal"); textCol(doc,C.muted);
      doc.text(hoy(), W-PX, 15, {align:"right"});
      return HH+8;
    }

    function pintarFooter() {
      const FY=H-8;
      rect(doc, 0,FY,W,8, C.surface, null);
      doc.setDrawColor(...C.border); doc.setLineWidth(0.4);
      doc.line(0,FY,W,FY);
      doc.setFont("helvetica","bold"); doc.setFontSize(6.5);
      textCol(doc,C.muted);
      doc.text("Affine · Retroalimentación y plan de acción", PX, FY+5);
      doc.setFont("helvetica","normal");
      doc.text(`Generado el ${hoy()} · Uso interno y confidencial`, W-PX, FY+5, {align:"right"});
      doc.text(empresa, W/2, FY+5, {align:"center"});
    }

    let curY = pintarHeader(false);
    const showEvaluador = true;

    /* Divide un texto en párrafos por salto de línea (los evaluadores suelen
       escribir listas con "- " o líneas separadas). Cada línea no vacía se
       envuelve por separado para conservar la estructura original. */
    function parrafos(texto, maxW, size) {
      const partes = (texto || "No registrado.").split(/\n+/).map(s=>s.trim()).filter(Boolean);
      const out = [];
      (partes.length ? partes : ["No registrado."]).forEach(p => {
        wrapText(doc, p, maxW, size).forEach(l => out.push(l));
      });
      return out;
    }

    feedbacks.forEach((fb, idx) => {
      const maxW = W-2*PX-6;
      doc.setFont("helvetica","normal"); doc.setFontSize(7);
      const aspLines = parrafos(fb.aspectos, maxW, 7);
      const recLines = parrafos(fb.recomendaciones, maxW, 7);
      const headerH  = showEvaluador ? 6 : 0;
      /* Plan de acción acordado (si existe) */
      const acciones = (fb.acciones || []).map(a => {
        const fecha = a.fecha ? a.fecha.split("-").reverse().join("/") : "sin fecha";
        doc.setFont("helvetica","normal"); doc.setFontSize(6.6);
        return {
          titulo: `${(a.competencia || "Competencia").toUpperCase()} · Fecha límite ${fecha}`,
          obj: a.objetivo ? wrapText(doc, "Objetivo: " + a.objetivo, maxW-4, 6.6) : [],
          acc: parrafos(a.accion, maxW-4, 6.6).map((l,i) => i===0 ? "Acción: " + l : l)
        };
      });
      const accH = acciones.length
        ? 7 + acciones.reduce((t,a) => t + 4 + (a.obj.length + a.acc.length)*3.3 + 2.5, 0)
        : 0;
      const blockH   = 10 + headerH + 5 + aspLines.length*3.6 + 6 + recLines.length*3.6 + 4 + accH;

      if (curY + blockH > MAXY) {
        pintarFooter();
        curY = pintarHeader(true);
      }

      roundRect(doc, PX,curY,W-2*PX,blockH,2, C.surface, C.border, 0.3);
      let iy = curY+6;
      if (showEvaluador) {
        doc.setFont("helvetica","bold"); doc.setFontSize(7);
        textCol(doc,C.accent);
        const quien = `${fb.rol ? fb.rol.toUpperCase() + " · " : ""}${fb.evaluador || "No especificado"}`;
        const etiqueta = feedbacks.length > 1 ? `EVALUADOR ${idx+1} · ${quien}` : `EVALUADOR · ${quien}`;
        doc.text(etiqueta, PX+3, iy);
        iy += 6;
      }
      doc.setFont("helvetica","bold"); doc.setFontSize(6.5);
      textCol(doc,C.green);
      doc.text("• ASPECTOS A RESALTAR", PX+3, iy);
      iy += 4.4;
      doc.setFont("helvetica","normal"); doc.setFontSize(7);
      textCol(doc,C.text);
      aspLines.forEach(ln => { doc.text(ln, PX+3, iy); iy += 3.6; });
      iy += 3;
      doc.setFont("helvetica","bold"); doc.setFontSize(6.5);
      textCol(doc,C.yellow);
      doc.text("• RECOMENDACIONES / OPORTUNIDADES DE MEJORA", PX+3, iy);
      iy += 4.4;
      doc.setFont("helvetica","normal"); doc.setFontSize(7);
      textCol(doc,C.text);
      recLines.forEach(ln => { doc.text(ln, PX+3, iy); iy += 3.6; });

      if (acciones.length) {
        iy += 3;
        doc.setFont("helvetica","bold"); doc.setFontSize(6.5);
        textCol(doc,C.accent);
        doc.text(`• PLAN DE ACCIÓN (${acciones.length})`, PX+3, iy);
        iy += 4.4;
        acciones.forEach(a => {
          doc.setFillColor(...C.accent); doc.rect(PX+3, iy-2.6, 0.8, 3 + (a.obj.length + a.acc.length)*3.3, "F");
          doc.setFont("helvetica","bold"); doc.setFontSize(6.4); textCol(doc,C.ink);
          doc.text(a.titulo, PX+6, iy); iy += 3.8;
          doc.setFont("helvetica","normal"); doc.setFontSize(6.6); textCol(doc,C.muted);
          a.obj.forEach(ln => { doc.text(ln, PX+6, iy); iy += 3.3; });
          textCol(doc,C.text);
          a.acc.forEach(ln => { doc.text(ln, PX+6, iy); iy += 3.3; });
          iy += 2.5;
        });
      }

      curY += blockH + 5;
    });

    pintarFooter();
  }

  function feedbackDe(emp) {
    if (emp.FEEDBACK && emp.FEEDBACK.length) return emp.FEEDBACK;
    if (typeof getFeedbackReal === "function") return getFeedbackReal(emp.CC);
    return null;
  }

  /* ══════════════════════════════════════════════════════
     API PÚBLICA
     ══════════════════════════════════════════════════════ */

  /**
   * Genera y descarga el PDF de un solo empleado.
   * @param {Object} emp       — objeto empleado (NOMBRE, CC, COMPETENCIAS, etc.)
   * @param {string} empresa   — nombre de la empresa para el footer
   * @param {string} medicion  — etiqueta de la medición
   */
  function individual(emp, empresa="Empresa Demo S.A.S", medicion="2026") {
    if (typeof jspdf === "undefined" && typeof window.jspdf === "undefined") {
      alert("Error: jsPDF no está cargado. Verifica que el CDN esté disponible.");
      return;
    }
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit:"mm", format:"a4", orientation:"portrait" });
    dibujarPagina(doc, emp, empresa, medicion);
    doc.addPage();
    dibujarPaginaPlan(doc, emp, empresa, medicion);
    const fb = feedbackDe(emp);
    if (fb && fb.length) {
      doc.addPage();
      dibujarPaginaFeedback(doc, { ...emp, FEEDBACK: fb }, empresa, medicion);
    }
    const fileName = `Reporte_${(emp.NOMBRE||"empleado").replace(/\s+/g,"_")}.pdf`;
    doc.save(fileName);
  }

  /**
   * Genera y descarga un PDF masivo (una página por empleado).
   * @param {Array}  lista      — array de empleados
   * @param {string} empresa
   * @param {string} medicion
   * @param {Function} onProgress — callback(actual, total) opcional
   */
  function masivo(lista, empresa="Empresa Demo S.A.S", medicion="2026", onProgress=null) {
    if (!lista || lista.length === 0) {
      alert("No hay empleados para generar el reporte.");
      return;
    }
    if (typeof jspdf === "undefined" && typeof window.jspdf === "undefined") {
      alert("Error: jsPDF no está cargado.");
      return;
    }
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit:"mm", format:"a4", orientation:"portrait" });

    lista.forEach((emp, i) => {
      if (i > 0) doc.addPage();
      dibujarPagina(doc, emp, empresa, medicion);
      doc.addPage();
      dibujarPaginaPlan(doc, emp, empresa, medicion);
      const fb = feedbackDe(emp);
      if (fb && fb.length) {
        doc.addPage();
        dibujarPaginaFeedback(doc, { ...emp, FEEDBACK: fb }, empresa, medicion);
      }
      if (onProgress) onProgress(i+1, lista.length);
    });

    const fecha = new Date().toLocaleDateString("es-CO",{day:"2-digit",month:"2-digit",year:"numeric"}).replace(/\//g,"-");
    doc.save(`Reporte_Masivo_Talento_${fecha}.pdf`);
  }

  /**
   * Genera el PDF de un empleado y lo retorna como ArrayBuffer.
   * Usado internamente por descargarZIP en dashboard.html.
   * @param {Object} emp
   * @param {string} empresa
   * @param {string} medicion
   * @returns {ArrayBuffer}
   */
  function pdfBytes(emp, empresa="Empresa Demo S.A.S", medicion="2026") {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit:"mm", format:"a4", orientation:"portrait" });
    dibujarPagina(doc, emp, empresa, medicion);
    doc.addPage();
    dibujarPaginaPlan(doc, emp, empresa, medicion);
    const fb = feedbackDe(emp);
    if (fb && fb.length) {
      doc.addPage();
      dibujarPaginaFeedback(doc, { ...emp, FEEDBACK: fb }, empresa, medicion);
    }
    return doc.output("arraybuffer");
  }

  return { individual, masivo, pdfBytes };

})();
