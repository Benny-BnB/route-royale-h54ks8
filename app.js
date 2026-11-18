// app.js : la logique de l'app "Ma Non". Les textes sont tous dans content.js.
(function () {
  'use strict';

  var C = CONTENT;
  var UI = C.ui;
  var STOPS = C.stops;
  var N = STOPS.length;
  var app = document.getElementById('app');

  // ---------- Utilitaires ----------
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function fmt(s, v) {
    return String(s).replace(/\{(\w+)\}/g, function (_, k) { return v && k in v ? v[k] : ''; });
  }
  function go(h) {
    if (location.hash === h) render();
    else location.hash = h;
  }

  // ---------- Mode test (#debug) ----------
  // Le mode test garde sa propre sauvegarde : la vraie progression n'est jamais touchee.
  var DEBUG = false;
  var wantsDebug = /^#debug/i.test(location.hash);
  try {
    if (wantsDebug) sessionStorage.setItem('manon-debug', '1');
    DEBUG = sessionStorage.getItem('manon-debug') === '1';
  } catch (e) {
    DEBUG = wantsDebug;
  }
  if (wantsDebug) history.replaceState(null, '', location.pathname + location.search + '#/');

  // ---------- Etat sauvegarde (localStorage, cle versionnee) ----------
  var SKEY = 'manon-roadtrip-v1' + (DEBUG ? '-debug' : '');
  function fresh() { return { version: 1, demarre: false, stops: {} }; }
  function load() {
    try {
      var raw = localStorage.getItem(SKEY);
      if (raw) {
        var s = JSON.parse(raw);
        if (s && s.version === 1 && s.stops) return s;
      }
    } catch (e) { /* tant pis : l'app marche sans sauvegarde */ }
    return fresh();
  }
  var state = load();
  function save() {
    try { localStorage.setItem(SKEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
  }
  // S(i) : l'etat du stop i (cree si besoin). statut(i) : lecture seule.
  function S(i) {
    var id = STOPS[i].id;
    if (!state.stops[id]) state.stops[id] = {};
    return state.stops[id];
  }
  function statut(i) {
    var s = state.stops[STOPS[i].id];
    return (s && s.statut) || null;
  }
  function isFinal(i) { var s = statut(i); return s === 'valide' || s === 'passe'; }
  function currentIndex() {
    for (var i = 0; i < N; i++) if (!isFinal(i)) return i;
    return N;
  }
  function stopKind(i) {
    var s = statut(i);
    if (s === 'valide') return 'valide';
    if (s === 'passe') return 'passe';
    if (i === currentIndex()) return s === 'arrive' ? 'enCours' : 'enRoute';
    return 'verrouille';
  }
  var ETAPES = ['histoire', 'morale', 'choix', 'fin'];
  function bump(i, etape) {
    if (statut(i) !== 'arrive') return;
    var s = S(i);
    if (ETAPES.indexOf(etape) > ETAPES.indexOf(s.etape || 'histoire')) { s.etape = etape; save(); }
  }
  function resumeHash() {
    var i = currentIndex();
    if (i >= N) return '#/final';
    var s = state.stops[STOPS[i].id];
    if (!s || s.statut !== 'arrive') return '#/route/' + (i + 1);
    var e = s.etape || 'histoire';
    if (e === 'histoire') return '#/stop/' + (i + 1) + '/histoire/' + (s.carte || 0);
    return '#/stop/' + (i + 1) + '/' + e;
  }

  // ---------- Liens de navigation ----------
  function wazeUrl(s) {
    if (s.lat != null && s.lon != null) return 'https://waze.com/ul?ll=' + s.lat + ',' + s.lon + '&navigate=yes';
    return 'https://waze.com/ul?q=' + encodeURIComponent(s.maps_query) + '&navigate=yes';
  }
  function mapsUrl(s) {
    if (s.lat != null && s.lon != null) return 'https://maps.apple.com/?ll=' + s.lat + ',' + s.lon + '&q=' + encodeURIComponent(s.maps_query);
    return 'https://maps.apple.com/?q=' + encodeURIComponent(s.maps_query);
  }

  // ---------- Confettis (canvas maison) ----------
  var Confetti = (function () {
    var cv = document.getElementById('confetti');
    var cx = cv.getContext('2d');
    var W = 0, H = 0, parts = [], raf = 0;
    var COLORS = ['#ff5d8f', '#ffd23f', '#4dc3ff', '#7ccf6d', '#ff9f43', '#b388ff', '#ffffff'];
    var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    function size() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth; H = window.innerHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      cx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function add(p) { parts.push(p); }
    function burst(n, x, y, power) {
      n = reduce ? Math.round(n / 4) : n;
      power = power || 1;
      for (var i = 0; i < n; i++) {
        var a = Math.random() * Math.PI * 2;
        var v = (4 + Math.random() * 9) * power;
        add({ x: x == null ? W / 2 : x, y: y == null ? H * 0.38 : y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 5 * power, r: Math.random() * 6.28, vr: (Math.random() - 0.5) * 0.4, w: 6 + Math.random() * 7, h: 4 + Math.random() * 5, c: COLORS[i % COLORS.length], life: 0 });
      }
      if (!raf) raf = requestAnimationFrame(loop);
    }
    function rain(n) {
      n = reduce ? Math.round(n / 4) : n;
      for (var i = 0; i < n; i++) {
        add({ x: Math.random() * W, y: -10, vx: (Math.random() - 0.5) * 2, vy: 1 + Math.random() * 3, r: Math.random() * 6.28, vr: (Math.random() - 0.5) * 0.3, w: 6 + Math.random() * 7, h: 4 + Math.random() * 5, c: COLORS[i % COLORS.length], life: 0 });
      }
      if (!raf) raf = requestAnimationFrame(loop);
    }
    function loop() {
      cx.clearRect(0, 0, W, H);
      parts = parts.filter(function (p) { return p.y < H + 30 && p.life < 320; });
      for (var i = 0; i < parts.length; i++) {
        var p = parts[i];
        p.vy += 0.22; p.vx *= 0.992; p.x += p.vx; p.y += p.vy; p.r += p.vr; p.life++;
        cx.save(); cx.translate(p.x, p.y); cx.rotate(p.r); cx.fillStyle = p.c; cx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); cx.restore();
      }
      if (parts.length) raf = requestAnimationFrame(loop);
      else { raf = 0; cx.clearRect(0, 0, W, H); }
    }
    function small() { burst(90); }
    function xxl() {
      burst(170, W * 0.2, H * 0.55, 1.25);
      burst(170, W * 0.8, H * 0.55, 1.25);
      var t = 0;
      var id = setInterval(function () {
        rain(34);
        burst(60, Math.random() * W, H * 0.3, 1);
        if (++t > 8) clearInterval(id);
      }, 600);
    }
    window.addEventListener('resize', size);
    size();
    return { small: small, xxl: xxl };
  })();

  // ---------- Ecran toujours allume (avec repli silencieux) ----------
  var wake = null;
  function requestWake() {
    try {
      if ('wakeLock' in navigator && !wake) {
        navigator.wakeLock.request('screen').then(function (l) {
          wake = l;
          l.addEventListener('release', function () { wake = null; });
        }).catch(function () { /* repli silencieux */ });
      }
    } catch (e) { /* ignore */ }
  }
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible' && state.demarre) requestWake();
  });

  // ---------- Fenetre de confirmation et petit message ----------
  function modal(o) {
    var el = document.createElement('div');
    el.className = 'overlay';
    el.innerHTML = '<div class="modal" role="dialog" aria-modal="true"><h3>' + esc(o.title) + '</h3><p>' + esc(o.text) + '</p>' +
      '<div class="stack"><button class="btn danger" data-m="yes">' + esc(o.yes) + '</button>' +
      '<button class="btn secondary" data-m="no">' + esc(o.no) + '</button></div></div>';
    el.addEventListener('click', function (e) {
      var b = e.target.closest('[data-m]');
      if (!b) { if (e.target === el) el.remove(); return; }
      el.remove();
      if (b.dataset.m === 'yes') o.onYes();
    });
    document.body.appendChild(el);
  }
  function toast(text) {
    var el = document.createElement('div');
    el.className = 'toast';
    el.setAttribute('role', 'status');
    el.textContent = text;
    document.body.appendChild(el);
    setTimeout(function () { el.remove(); }, 3800);
  }

  // ---------- Actions ----------
  function arriver(i) {
    var s = S(i);
    if (!s.statut) { s.statut = 'arrive'; s.etape = 'histoire'; s.carte = 0; }
    save();
    go('#/stop/' + (i + 1) + '/histoire/0');
  }
  function passer(i) {
    var s = S(i);
    s.statut = 'passe';
    s.choixFinal = 'passe';
    s.choixEnCours = null;
    save();
    toast(UI.passer.toast);
    go(i + 1 < N ? '#/route/' + (i + 2) : '#/final');
  }
  function valider(i, type) {
    var s = S(i);
    s.statut = 'valide';
    s.choixFinal = type;
    s.choixEnCours = null;
    s.etape = 'fin';
    save();
    go('#/stop/' + (i + 1) + '/fin');
  }
  function resetAll() {
    try { localStorage.removeItem(SKEY); } catch (e) { /* ignore */ }
    state = fresh();
    go('#/');
  }
  function copyText(t, btn) {
    function done() {
      btn.textContent = UI.route.copie;
      setTimeout(function () { btn.textContent = UI.route.copier; }, 2200);
    }
    function fallback() {
      var ta = document.createElement('textarea');
      ta.value = t; ta.setAttribute('readonly', '');
      ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); } catch (e) { /* ignore */ }
      ta.remove(); done();
    }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(done, fallback);
    else fallback();
  }

  // ---------- Routage par hash ----------
  function parseHash() {
    var parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
    var a = parts[0], b = parts[1], c = parts[2], d = parts[3];
    function idx(x) { var n = parseInt(x, 10); return n >= 1 && n <= N ? n - 1 : -1; }
    if (!a) return { name: 'accueil' };
    if (a === 'carte') return { name: 'carte' };
    if (a === 'final') return { name: 'final' };
    if (a === 'route') { var i = idx(b); return i < 0 ? { name: 'accueil' } : { name: 'route', i: i }; }
    if (a === 'stop') {
      var j = idx(b);
      if (j < 0) return { name: 'accueil' };
      if (!c) return { name: 'hub', i: j };
      if (c === 'histoire') return { name: 'histoire', i: j, k: Math.max(0, parseInt(d || '0', 10) || 0) };
      if (c === 'morale' || c === 'choix' || c === 'fin') return { name: c, i: j };
      return { name: 'hub', i: j };
    }
    return { name: 'accueil' };
  }
  // Renvoie une autre adresse si l'ecran demande n'est pas encore accessible.
  function guard(r) {
    if (DEBUG) return null;
    var cur = currentIndex();
    var s;
    switch (r.name) {
      case 'route':
        if (r.i === cur && statut(r.i) !== 'arrive') return null;
        if (r.i < cur) return '#/stop/' + (r.i + 1);
        return resumeHash();
      case 'hub': case 'histoire': case 'morale':
        return statut(r.i) ? null : resumeHash();
      case 'choix':
        s = statut(r.i);
        if (s === 'arrive' || s === 'valide') return null;
        return s === 'passe' ? '#/stop/' + (r.i + 1) : resumeHash();
      case 'fin':
        return statut(r.i) === 'valide' ? null : resumeHash();
      case 'final':
        return cur >= N ? null : resumeHash();
      default:
        return null;
    }
  }

  // ---------- Ecrans ----------
  var VIEWS = {};

  VIEWS.accueil = function () {
    var A = C.accueil;
    return {
      noCarte: true,
      body: '<div class="center">' +
        '<img class="logo" src="icons/icon-512.png" width="512" height="512" alt="Logo : une couronne avec un coeur">' +
        '<h2 class="big">' + esc(A.titre) + '</h2>' +
        '<p class="lead">' + esc(A.texte) + '</p></div>',
      actions: state.demarre
        ? '<button class="btn big" data-action="resume">' + esc(A.continuer) + '</button><a class="btn secondary" href="#/carte">' + esc(A.voirCarte) + '</a>'
        : '<button class="btn big" data-action="start">' + esc(A.bouton) + '</button>'
    };
  };

  VIEWS.carte = function () {
    var cur = currentIndex();
    var done = 0;
    for (var d = 0; d < N; d++) if (isFinal(d)) done++;
    var items = STOPS.map(function (s, i) {
      var k = stopKind(i);
      var reveal = k === 'valide' || k === 'passe' || k === 'enCours' || DEBUG;
      var title = reveal ? (i + 1) + '. ' + s.titre : fmt(UI.carte.titreMystere, { n: i + 1 });
      var icon = { valide: '✅', passe: '⏭️', enCours: '📍', enRoute: '🚗', verrouille: '🔒' }[k];
      var hint = k === 'enRoute' ? '<div class="hint">🔮 ' + esc(s.indice_avant) + '</div>' : '';
      var href = k === 'enRoute' ? '#/route/' + (i + 1) : (k === 'verrouille' && !DEBUG ? null : '#/stop/' + (i + 1));
      var inner = '<div class="si-num">' + icon + '</div><div class="si-main"><div class="si-title">' + esc(title) + '</div>' +
        '<div class="si-meta">' + esc(UI.carte.statut[k]) + ' · ' + esc(UI.carte.priorite[s.priorite]) + '</div>' + hint + '</div>';
      return href ? '<a class="stop-item ' + k + '" href="' + href + '">' + inner + '</a>' : '<div class="stop-item ' + k + '">' + inner + '</div>';
    }).join('');
    return {
      body: '<h2>' + esc(UI.carte.titre) + '</h2><p class="note">' + esc(fmt(UI.carte.sousTitre, { done: done, total: N })) + '</p><div class="stops">' + items + '</div>',
      actions: '<button class="btn big" data-action="resume">' + esc(cur >= N ? UI.fin.voirHonneur : UI.carte.continuer) + '</button>',
      noCarte: true
    };
  };

  function prioChip(s) {
    return '<span class="chip ' + (s.priorite === 'bonus' ? 'bonus' : '') + '">' + esc(UI.carte.priorite[s.priorite]) + '</span>';
  }

  VIEWS.route = function (r) {
    var i = r.i, s = STOPS[i];
    return {
      progressStop: i,
      body: '<div class="eyebrow">' + prioChip(s) + '</div>' +
        '<h2>' + esc(fmt(UI.route.titre, { n: i + 1 })) + '</h2>' +
        '<div class="card"><div class="card-title">' + esc(UI.route.indiceTitre) + '</div><p class="hint-text">' + esc(s.indice_avant) + '</p></div>' +
        (s.priorite === 'bonus' ? '<p class="note">' + esc(UI.route.bonus) + '</p>' : '') +
        '<div class="grid2">' +
        '<a class="btn waze" href="' + esc(wazeUrl(s)) + '" target="_blank" rel="noopener">' + esc(UI.route.waze) + '</a>' +
        '<a class="btn maps" href="' + esc(mapsUrl(s)) + '" target="_blank" rel="noopener">' + esc(UI.route.maps) + '</a></div>' +
        '<button class="btn secondary" data-action="copy" data-text="' + esc(s.maps_query) + '">' + esc(UI.route.copier) + '</button>' +
        '<button class="btn ghost" data-hold="skip" data-i="' + i + '">' + esc(UI.passer.bouton) + '<small>' + esc(UI.passer.aide) + '</small></button>',
      actions: '<button class="btn big" data-action="arrive" data-i="' + i + '">' + esc(UI.route.arrives) + '</button>'
    };
  };

  VIEWS.histoire = function (r) {
    var i = r.i, s = STOPS[i], n = s.histoire.length;
    var k = Math.min(r.k, n);
    if (statut(i) === 'arrive') { var st = S(i); if (st.carte !== k) { st.carte = k; save(); } bump(i, 'histoire'); }
    var base = '#/stop/' + (i + 1);
    var prev = k > 0 ? base + '/histoire/' + (k - 1) : null;
    var next = k < n ? base + '/histoire/' + (k + 1) : base + '/morale';
    var illu = k === 0
      ? '<img class="illu" src="' + esc(s.illustration) + '" width="400" height="260" alt="' + esc(s.illustration_sujet) + '">'
      : '';
    var mini = '<img class="mini" src="' + esc(s.illustration) + '" width="400" height="260" alt="">';
    var content;
    if (k === 0) {
      content = '<div class="eyebrow">' + prioChip(s) + '</div><h2 class="stop-title">' + esc(s.titre) + '</h2>' +
        (s.adresse ? '<p class="addr">' + UI.histoire.adresseIcone + ' ' + esc(s.adresse) + '</p>' : '') +
        (s.infos_pratiques ? '<p class="info">' + UI.histoire.infosIcone + ' ' + esc(s.infos_pratiques) + '</p>' : '');
    } else {
      content = '<div class="card story"><div class="story-head">' + mini + '<div class="story-n">' + k + ' / ' + n + '</div></div><p class="story-text">' + esc(s.histoire[k - 1].texte) + '</p></div>' +
        (k === n && s.lien_externe
          ? '<a class="btn secondary" href="' + esc(s.lien_externe.url) + '" target="_blank" rel="noopener">🖼️ ' + esc(s.lien_externe.label) + '</a><p class="note">' + esc(UI.divers.lienExterneNote) + '</p>'
          : '');
    }
    var dots = '<div class="dots" aria-label="' + esc(fmt(UI.histoire.cartePosition, { i: k + 1, n: n + 1 })) + '">';
    for (var d = 0; d <= n; d++) dots += '<span class="dot' + (d === k ? ' on' : '') + '"></span>';
    dots += '</div>';
    return {
      progressStop: i,
      swipe: { prev: prev, next: next },
      body: illu + content + dots,
      actions: '<div class="row">' +
        (prev ? '<a class="btn secondary" href="' + prev + '">' + esc(UI.histoire.retour) + '</a>' : '') +
        '<a class="btn big grow" href="' + next + '">' + esc(k === n ? UI.histoire.versMorale : UI.histoire.suivant) + '</a></div>'
    };
  };

  VIEWS.morale = function (r) {
    var i = r.i, s = STOPS[i], n = s.histoire.length;
    bump(i, 'morale');
    var canChoose = DEBUG || statut(i) === 'arrive' || statut(i) === 'valide';
    return {
      progressStop: i,
      confetti: 'small',
      body: '<div class="card"><div class="card-title">' + esc(s.morale.titre) + ' 🎓</div><p class="moral-text">' + esc(s.morale.texte) + '</p></div>' +
        '<details class="card q"><summary>' + esc(UI.morale.questionTitre) + '</summary><p>' + esc(s.morale.question) + '</p></details>',
      actions: '<div class="row"><a class="btn secondary" href="#/stop/' + (i + 1) + '/histoire/' + n + '">' + esc(UI.histoire.retour) + '</a>' +
        (canChoose
          ? '<a class="btn big grow" href="#/stop/' + (i + 1) + '/choix">' + esc(UI.morale.suivant) + '</a>'
          : '<a class="btn big grow" href="#/carte">' + esc(UI.divers.retourCarte) + '</a>') + '</div>'
    };
  };

  function decreeHtml(s) {
    return '<div class="decree"><div class="d-title">' + esc(UI.choix.decretRevele) + '</div><p>' + esc(s.gage.texte) + '</p></div>';
  }
  function skipBtn(i) {
    return '<button class="btn ghost" data-hold="skip" data-i="' + i + '">' + esc(UI.passer.bouton) + '<small>' + esc(UI.passer.aide) + '</small></button>';
  }

  VIEWS.choix = function (r) {
    var i = r.i, s = STOPS[i], st = S(i);
    bump(i, 'choix');
    var v = { progressStop: i };
    if (st.choixFinal) {
      // Recapitulatif en lecture seule : le gage ne change jamais.
      var txt = st.choixFinal === 'jus' ? UI.choix.recapJus : (st.choixFinal === 'gage' ? UI.choix.recapDecret : UI.choix.recapPasse);
      v.body = '<p class="recap">' + esc(txt) + '</p>' + (st.choixFinal === 'gage' ? decreeHtml(s) : '');
      v.actions = '<button class="btn big" data-action="resume">' + esc(UI.carte.continuer) + '</button>';
      return v;
    }
    var mode = st.choixEnCours || null;
    var i1 = '" data-i="' + i + '">';
    if (mode === 'jus') {
      v.body = '<div class="jus-card"><div class="j-emoji">🥃</div><div class="j-title">' + esc(UI.choix.jusTitre) + '</div></div><p class="note">' + esc(UI.choix.avantJus) + '</p>' + skipBtn(i);
      v.actions = '<button class="btn big" data-action="valider-jus' + i1 + esc(UI.choix.validerJus) + '</button>' +
        '<button class="btn secondary" data-action="finalement-decret' + i1 + esc(UI.choix.finalementDecret) + '</button>';
    } else if (mode === 'gage') {
      v.body = decreeHtml(s) + '<p class="note">' + esc(UI.choix.avantExecution) + '</p>' + skipBtn(i);
      v.actions = '<button class="btn big" data-action="valider-decret' + i1 + esc(UI.choix.validerDecret) + '</button>' +
        '<button class="btn secondary" data-action="finalement-jus' + i1 + esc(UI.choix.finalementJus) + '</button>';
    } else if (st.gageRevele) {
      v.body = '<h2>' + esc(UI.choix.titre) + '</h2>' + decreeHtml(s) + skipBtn(i);
      v.actions = '<button class="btn big" data-action="executer' + i1 + esc(UI.choix.executer) + '</button>' +
        '<button class="btn secondary" data-action="finalement-jus' + i1 + esc(UI.choix.finalementJus) + '</button>';
    } else {
      v.body = '<h2>' + esc(UI.choix.titre) + '</h2>' +
        '<button class="choice jus" data-action="jus' + i1 + '<span class="c-title">' + esc(UI.choix.jusTitre) + '</span><span class="c-sub">' + esc(UI.choix.jusSousTitre) + '</span><span class="c-go">' + esc(UI.choix.jusBouton) + '</span></button>' +
        '<button class="choice decret" data-action="voir-decret' + i1 + '<span class="c-title">' + esc(UI.choix.decretTitre) + '</span><span class="c-sub">' + esc(UI.choix.decretSousTitre) + '</span><span class="c-go">' + esc(UI.choix.decretBouton) + '</span></button>' +
        skipBtn(i);
      v.actions = '';
    }
    return v;
  };

  VIEWS.fin = function (r) {
    var i = r.i, s = STOPS[i], st = S(i);
    var list = st.choixFinal === 'jus' ? UI.fin.confirmationJus : UI.fin.confirmationDecret;
    var msg = list[i % list.length];
    var last = i === N - 1;
    return {
      progressStop: i,
      confetti: 'small',
      body: '<div class="party">' + (st.choixFinal === 'jus' ? '🥂' : '🎉') + '</div><p class="confirm">' + esc(msg) + '</p>' +
        (last ? '<div class="card"><div class="card-title">' + esc(UI.fin.indiceSuiteTitre) + '</div><p class="hint-text">' + esc(C.final.indice) + '</p></div>' : ''),
      actions: last
        ? '<a class="btn big" href="#/final">' + esc(UI.fin.voirHonneur) + '</a>'
        : '<a class="btn big" href="#/route/' + (i + 2) + '">' + esc(UI.fin.stopSuivant) + '</a>'
    };
  };

  VIEWS.hub = function (r) {
    var i = r.i, s = STOPS[i], k = stopKind(i);
    var base = '#/stop/' + (i + 1);
    var canChoose = DEBUG || statut(i) === 'arrive' || statut(i) === 'valide';
    var btns = '';
    if (k === 'enCours') btns += '<button class="btn big" data-action="resume">' + esc(UI.hub.continuer) + '</button>';
    btns += '<a class="btn secondary" href="' + base + '/histoire/0">' + esc(UI.hub.histoire) + '</a>';
    btns += '<a class="btn secondary" href="' + base + '/morale">' + esc(UI.hub.morale) + '</a>';
    if (canChoose) btns += '<a class="btn secondary" href="' + base + '/choix">' + esc(UI.hub.choix) + '</a>';
    return {
      progressStop: i,
      body: '<div class="eyebrow">' + prioChip(s) + '<span class="chip">' + esc(UI.carte.statut[k]) + '</span></div>' +
        '<h2 class="stop-title">' + esc(s.titre) + '</h2>' +
        '<img class="illu sm" src="' + esc(s.illustration) + '" width="400" height="260" alt="' + esc(s.illustration_sujet) + '">' +
        (k === 'passe' ? '<p class="note">' + esc(UI.hub.passeNote) + '</p>' : '') +
        '<div class="stack">' + btns + '</div>',
      actions: '<a class="btn secondary" href="#/carte">' + esc(UI.divers.retourCarte) + '</a>'
    };
  };

  VIEWS.final = function () {
    var jus = 0, dec = 0, pas = 0;
    STOPS.forEach(function (s, i) {
      var st = state.stops[s.id] || {};
      if (st.choixFinal === 'jus') jus++;
      else if (st.choixFinal === 'gage') dec++;
      if (st.statut === 'passe') pas++;
    });
    var F = UI.final;
    function row(n, o) {
      return '<div class="h-row"><div class="h-num">' + n + '</div><div><div class="h-label">' + esc(o.label) + '</div><div class="h-com">' + esc(n === 0 ? o.zero : o.autre) + '</div></div></div>';
    }
    var M = C.final;
    return {
      noCarte: false,
      confetti: 'xxl',
      body: '<div class="party">🏆</div><h2>' + esc(F.honneurTitre) + '</h2>' +
        '<div class="card honneur">' + row(jus, F.jus) + row(dec, F.decrets) + row(pas, F.passes) + '</div>' +
        '<div class="card message"><p class="m-title">' + esc(M.titre) + '</p>' +
        M.paragraphes.map(function (p) {
          // un bloc peut etre un paragraphe (texte) ou une liste { liste: [ { nom, texte } ] }
          if (typeof p === 'string') return '<p>' + esc(p) + '</p>';
          return '<ul class="recap-list">' + p.liste.map(function (it) {
            return '<li><strong>' + esc(it.nom) + '</strong>' + esc(it.texte) + '</li>';
          }).join('') + '</ul>';
        }).join('') +
        '<p class="m-sign">' + esc(M.signature) + '</p></div>',
      actions: '<a class="btn secondary" href="#/carte">' + esc(F.revoir) + '</a>'
    };
  };

  // ---------- Rendu ----------
  function header(v) {
    var left = v.progressStop != null
      ? '<span class="chip-h">' + esc(fmt(UI.progression, { n: v.progressStop + 1, total: N })) + '</span>'
      : '<span></span>';
    var right = (v.noCarte && !DEBUG)
      ? '<span></span>'
      : '<a class="hbtn" href="#/carte" aria-label="Carte du parcours">' + UI.histoire.carteBouton + '</a>';
    return '<header class="header"><div class="hwrap">' + left +
      '<div class="htitle" data-hold="reset">' + esc(C.appName) + '</div>' + right + '</div></header>';
  }

  var lastKey = null;
  function render(depth) {
    depth = depth || 0;
    var r = parseHash();
    var g = depth < 4 ? guard(r) : null;
    if (g) {
      history.replaceState(null, '', location.pathname + location.search + g);
      return render(depth + 1);
    }
    hold.reset();
    var v = VIEWS[r.name](r);
    var key = location.hash || '#/';
    app.innerHTML = header(v) +
      (DEBUG ? '<div class="debug-banner"><span>' + esc(UI.debug.banniere) + '</span><button data-action="quit-debug">' + esc(UI.debug.quitter) + '</button></div>' : '') +
      '<main class="wrap fade">' + v.body + '</main>' +
      (v.actions ? '<div class="actions wrap">' + v.actions + '</div>' : '');
    app.dataset.swipePrev = (v.swipe && v.swipe.prev) || '';
    app.dataset.swipeNext = (v.swipe && v.swipe.next) || '';
    if (key !== lastKey) {
      window.scrollTo(0, 0);
      if (v.confetti === 'small') setTimeout(Confetti.small, 150);
      if (v.confetti === 'xxl') setTimeout(Confetti.xxl, 200);
    }
    lastKey = key;
  }

  // ---------- Appui long (Passer ce stop, Recommencer) ----------
  var hold = (function () {
    var el = null, raf = 0, timer = 0, t0 = 0;
    function reset() {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      if (el) { el.style.setProperty('--p', '0'); el.classList.remove('holding'); }
      el = null;
    }
    function onHold(kind, idx) {
      if (kind === 'reset') {
        modal({ title: UI.recommencer.titre, text: UI.recommencer.texte, yes: UI.recommencer.oui, no: UI.recommencer.non, onYes: resetAll });
      } else if (kind === 'skip') {
        var i = parseInt(idx, 10);
        modal({ title: UI.passer.titre, text: UI.passer.texte, yes: UI.passer.oui, no: UI.passer.non, onYes: function () { passer(i); } });
      }
    }
    app.addEventListener('pointerdown', function (e) {
      var h = e.target.closest('[data-hold]');
      if (!h) return;
      reset();
      el = h; t0 = performance.now(); h.classList.add('holding');
      // Le declenchement repose sur un vrai minuteur de 2 secondes ; l'animation ne sert qu'a l'oeil.
      timer = setTimeout(function () {
        if (!el) return;
        var kind = el.dataset.hold, idx = el.dataset.i;
        reset();
        onHold(kind, idx);
      }, 2000);
      (function step() {
        if (!el) return;
        el.style.setProperty('--p', Math.min(1, (performance.now() - t0) / 2000));
        raf = requestAnimationFrame(step);
      })();
    });
    ['pointerup', 'pointercancel'].forEach(function (ev) { document.addEventListener(ev, reset, true); });
    app.addEventListener('contextmenu', function (e) { if (e.target.closest('[data-hold]')) e.preventDefault(); });
    return { reset: reset };
  })();

  // ---------- Clics ----------
  app.addEventListener('click', function (e) {
    if (state.demarre) requestWake();
    var b = e.target.closest('[data-action]');
    if (!b) return;
    var act = b.dataset.action;
    var i = parseInt(b.dataset.i, 10);
    switch (act) {
      case 'start':
        state.demarre = true; save(); requestWake(); Confetti.small(); go('#/route/1'); break;
      case 'resume': go(resumeHash()); break;
      case 'arrive': arriver(i); break;
      case 'copy': copyText(b.dataset.text, b); break;
      case 'jus': S(i).choixEnCours = 'jus'; save(); render(); break;
      case 'voir-decret': S(i).gageRevele = true; save(); render(); break;
      case 'executer': S(i).choixEnCours = 'gage'; save(); render(); break;
      case 'finalement-jus': S(i).choixEnCours = 'jus'; save(); render(); break;
      case 'finalement-decret': S(i).choixEnCours = null; S(i).gageRevele = true; save(); render(); break;
      case 'valider-jus': valider(i, 'jus'); break;
      case 'valider-decret': valider(i, 'gage'); break;
      case 'quit-debug':
        try { sessionStorage.removeItem('manon-debug'); } catch (er) { /* ignore */ }
        location.href = location.pathname + location.search + '#/';
        location.reload();
        break;
    }
  });

  // ---------- Glisser pour changer de carte ----------
  (function () {
    var x0 = 0, y0 = 0, on = false;
    app.addEventListener('touchstart', function (e) {
      on = !!(app.dataset.swipeNext || app.dataset.swipePrev) && !e.target.closest('a,button,summary');
      if (on) { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }
    }, { passive: true });
    app.addEventListener('touchend', function (e) {
      if (!on) return;
      on = false;
      var t = e.changedTouches[0], dx = t.clientX - x0, dy = t.clientY - y0;
      if (Math.abs(dx) < 70 || Math.abs(dy) > 50) return;
      var target = dx < 0 ? app.dataset.swipeNext : app.dataset.swipePrev;
      if (target) go(target);
    }, { passive: true });
  })();

  // ---------- Demarrage ----------
  window.addEventListener('hashchange', function () {
    // #debug ajoute a une page deja ouverte : on active le mode test et on recharge proprement.
    if (/^#debug/i.test(location.hash)) {
      try { sessionStorage.setItem('manon-debug', '1'); } catch (e) { /* ignore */ }
      history.replaceState(null, '', location.pathname + location.search + '#/');
      location.reload();
      return;
    }
    render();
  });
  if ((!location.hash || location.hash === '#' || location.hash === '#/') && state.demarre) {
    history.replaceState(null, '', location.pathname + location.search + resumeHash());
  }
  render();
  if (state.demarre) requestWake();

  // Hors ligne : service worker (uniquement en http/https)
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () { /* ignore */ });
    });
  }
})();
