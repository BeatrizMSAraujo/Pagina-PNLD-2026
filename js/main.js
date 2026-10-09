// PNLD 2026 · Educação Infantil — animações de entrada
(function(){
  var targets = document.querySelectorAll('.sticker, .frames > div, .cast img, .obra h2, .obra .pos, .obra .stickers li, .obra .cta');
  targets.forEach(function(el){ el.classList.add('reveal'); });
  if (!('IntersectionObserver' in window)) { targets.forEach(function(el){ el.classList.add('in'); }); return; }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  targets.forEach(function(el){ io.observe(el); });
})();

(function(){
  document.querySelectorAll('[data-modal]').forEach(function(btn){
    var d = document.getElementById(btn.getAttribute('data-modal'));
    if (!d) return;
    btn.addEventListener('click', function(){
      if (typeof d.showModal === 'function') d.showModal(); else d.setAttribute('open', '');
    });
    d.querySelector('[data-close]').addEventListener('click', function(){ d.close(); });
    d.addEventListener('click', function(e){ if (e.target === d) d.close(); });
  });
  document.querySelectorAll('[data-copy]').forEach(function(btn){
    var url = btn.getAttribute('data-copy');
    var fb = document.getElementById(btn.getAttribute('data-feedback'));
    function ok(){ fb.textContent = 'Código copiado: ' + url; }
    function fallback(){
      var t = document.createElement('textarea');
      t.value = url; t.setAttribute('readonly', ''); t.style.position = 'fixed'; t.style.opacity = '0';
      document.body.appendChild(t); t.select();
      try { document.execCommand('copy'); ok(); } catch (e) { fb.textContent = 'Selecione e copie: ' + url; }
      t.remove();
    }
    btn.addEventListener('click', function(){
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(ok, fallback);
      } else { fallback(); }
    });
  });
})();
