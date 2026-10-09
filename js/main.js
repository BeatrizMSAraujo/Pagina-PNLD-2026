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
