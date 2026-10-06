
const WA='https://wa.me/555535206174';const CATS={"Fachada vidriada residencial": "Cristales", "Cielorraso con luz perimetral": "Cielorrasos", "Aberturas de piso a techo": "Cristales", "Cerramiento de galería": "Cristales", "Cielorraso con iluminación integrada": "Cielorrasos", "Líneas de luz y acabados": "Cielorrasos"};
const cards=[...document.querySelectorAll('.project-card')];cards.forEach(c=>c.dataset.cat=CATS[c.querySelector('h3').textContent]);
let cat='Todos',all=false;const more=document.querySelector('.project-more');const moreBtn=more&&more.querySelector('button');
function render(){let n=0;cards.forEach(c=>{const ok=cat==='Todos'||c.dataset.cat===cat;const show=ok&&(all||cat!=='Todos'||n<3);if(ok)n++;c.style.display=show?'':'none'});if(more)more.style.display=cat==='Todos'?'':'none';if(moreBtn)moreBtn.firstChild.textContent=all?'Ver menos trabajos ':'Ver todos los trabajos '}
document.querySelectorAll('.project-tabs button').forEach(b=>b.onclick=()=>{cat=b.textContent.trim();document.querySelectorAll('.project-tabs button').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',x===b)});render()});
if(moreBtn)moreBtn.onclick=()=>{all=!all;render()};render();
const dlg=document.querySelector('.lightbox');
document.querySelectorAll('.project-photo').forEach(b=>b.onclick=()=>{const c=b.closest('.project-card');dlg.querySelector('h3').textContent=c.querySelector('h3').textContent;dlg.querySelectorAll('img').forEach(i=>i.remove());const im=document.createElement('img');im.src=b.querySelector('img').src;im.alt=c.querySelector('h3').textContent;dlg.appendChild(im);dlg.showModal()});
dlg.onclick=e=>{if(e.target===dlg)dlg.close()};dlg.querySelector('.lightbox-top button').onclick=()=>dlg.close();
const tg=document.querySelector('.menu-toggle'),hd=document.querySelector('.site-header');let nav=null;
tg.onclick=()=>{if(nav){nav.remove();nav=null;return}nav=document.createElement('nav');nav.className='mobile-nav';nav.innerHTML=document.querySelector('.desktop-nav').innerHTML;nav.querySelectorAll('a').forEach(a=>a.onclick=()=>{nav.remove();nav=null});hd.appendChild(nav)};
const f=document.querySelector('.quote-form');
function msg(){const d=new FormData(f);return `Hola, Vidrios Blindex. Quisiera solicitar un presupuesto.\n\nNombre: ${d.get('nombre')}\nTeléfono: ${d.get('telefono')}\nLocalidad (Misiones): ${d.get('localidad')}\nTipo de proyecto: ${d.get('tipo')}\nDescripción: ${d.get('descripcion')}`}
const wa=f.querySelector('[data-whatsapp-quote]');wa.onclick=e=>{e.preventDefault();if(!f.reportValidity())return;window.open(WA+'?text='+encodeURIComponent(msg()),'_blank')};
f.onsubmit=e=>{e.preventDefault();wa.click()};
[...f.querySelectorAll('button')].find(b=>b.textContent.includes('Email')).onclick=()=>{if(!f.reportValidity())return;location.href='mailto:vidriosblindex@gmail.com?subject='+encodeURIComponent('Solicitud de Presupuesto Web')+'&body='+encodeURIComponent(msg())};
