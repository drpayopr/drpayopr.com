const menuToggle=document.getElementById('menuToggle');
const mainNav=document.getElementById('mainNav');
menuToggle.addEventListener('click',()=>mainNav.classList.toggle('open'));
document.querySelectorAll('#mainNav a').forEach(a=>a.addEventListener('click',()=>mainNav.classList.remove('open')));

const enBtn=document.getElementById('enBtn');
const esBtn=document.getElementById('esBtn');

function setLanguage(lang){
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-en][data-es]').forEach(el=>{ el.textContent=el.dataset[lang]; });
  enBtn.classList.toggle('active',lang==='en');
  esBtn.classList.toggle('active',lang==='es');
  localStorage.setItem('drpayoprLang',lang);
}
enBtn.addEventListener('click',()=>setLanguage('en'));
esBtn.addEventListener('click',()=>setLanguage('es'));
setLanguage(localStorage.getItem('drpayoprLang')||'en');

document.getElementById('year').textContent=new Date().getFullYear();

const pdForm=document.getElementById('pdRequestForm');
const pdSubmitButton=document.getElementById('pdSubmitButton');
const formStatus=document.getElementById('formStatus');

if(pdForm){
  pdForm.addEventListener('submit', async (event)=>{
    event.preventDefault();
    formStatus.className='form-status';
    formStatus.textContent='';
    pdSubmitButton.disabled=true;

    const currentLang=document.documentElement.lang==='es' ? 'es' : 'en';
    const originalText=pdSubmitButton.textContent;
    pdSubmitButton.textContent=currentLang==='es' ? 'Enviando...' : 'Sending...';

    try{
      const response=await fetch(pdForm.action,{
        method:'POST',
        body:new FormData(pdForm),
        headers:{'Accept':'application/json'}
      });

      if(response.ok){
        pdForm.reset();
        formStatus.className='form-status success';
        formStatus.textContent=currentLang==='es'
          ? '¡Gracias! Su solicitud de desarrollo profesional ha sido enviada. Nos comunicaremos con usted próximamente.'
          : 'Thank you! Your professional development request has been submitted. We will contact you soon.';
      } else {
        formStatus.className='form-status error';
        formStatus.textContent=currentLang==='es'
          ? 'No pudimos enviar su solicitud. Por favor, inténtelo nuevamente o escriba a marketing@drpayopr.com.'
          : 'We could not submit your request. Please try again or email marketing@drpayopr.com.';
      }
    } catch(error){
      formStatus.className='form-status error';
      formStatus.textContent=currentLang==='es'
        ? 'No pudimos enviar su solicitud. Por favor, inténtelo nuevamente o escriba a marketing@drpayopr.com.'
        : 'We could not submit your request. Please try again or email marketing@drpayopr.com.';
    } finally {
      pdSubmitButton.disabled=false;
      pdSubmitButton.textContent=originalText;
    }
  });
}