const menuToggle=document.getElementById('menuToggle');
const mainNav=document.getElementById('mainNav');
menuToggle.addEventListener('click',()=>mainNav.classList.toggle('open'));
document.querySelectorAll('#mainNav a').forEach(a=>a.addEventListener('click',()=>mainNav.classList.remove('open')));

const enBtn=document.getElementById('enBtn');
const esBtn=document.getElementById('esBtn');

function setLanguage(lang){
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-en][data-es]').forEach(el=>{
    el.textContent=el.dataset[lang];
  });
  enBtn.classList.toggle('active',lang==='en');
  esBtn.classList.toggle('active',lang==='es');
  localStorage.setItem('drpayoprLang',lang);
}
enBtn.addEventListener('click',()=>setLanguage('en'));
esBtn.addEventListener('click',()=>setLanguage('es'));
setLanguage(localStorage.getItem('drpayoprLang')||'en');
document.getElementById('year').textContent=new Date().getFullYear();