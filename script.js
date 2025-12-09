// Mobile nav toggle (shared across pages)
document.addEventListener('DOMContentLoaded', ()=>{
  function setupToggle(toggleId){
    const btn = document.getElementById(toggleId);
    if(!btn) return;
    btn.addEventListener('click', ()=>{
      const nav = document.querySelector('.nav');
      if(nav.style.display === 'flex') nav.style.display = '';
      else nav.style.display = 'flex';
    });
  }
  setupToggle('mobile-toggle');
  setupToggle('mobile-toggle-2');
  setupToggle('mobile-toggle-3');
  setupToggle('mobile-toggle-4');
  setupToggle('mobile-toggle-5');

  // Active link highlight
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link=>{
    link.addEventListener('click', ()=>{
      links.forEach(l=>l.classList.remove('active'));
      link.classList.add('active');
    })
  });

  // Contact form basic validation + fake submit
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const msg = form.message.value.trim();
      const formMsg = document.getElementById('formMsg');
      if(!name || !email || !msg){
        formMsg.textContent = 'Please fill all fields.';
        return;
      }
      formMsg.textContent = 'Message sent! I will contact you soon.';
      form.reset();
    })
  }

  // Portfolio filter buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  if(filterBtns.length){
    const cards = document.querySelectorAll('.project-card');
    filterBtns.forEach(btn => btn.addEventListener('click', ()=>{
      filterBtns.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      cards.forEach(c=>{
        if(f === 'all' || c.dataset.cat === f) c.style.display = '';
        else c.style.display = 'none';
      })
    }))
  }

});
