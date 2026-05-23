// ═══════════════════════════════════════
// DATA
// ═══════════════════════════════════════
const STUDENTS = [
  { name:"Aditya Kambale", url:"https://adityakamblevk18-ai.github.io/virat-kohli-website/" },
  { name:"Atharv Shinde", url:"https://atharvshinde9119.github.io/Portfolio/" },
  { name:"Aayan Mulla", url:"https://aayanmulla7828.github.io/Aayan/" },
  { name:"Atharv Kashid", url:"https://rohit-sharma-portfolio-gules.vercel.app" },
  { name:"Varad Gaikwad", url:"https://mc-laren-supercar.vercel.app/" },
  { name:"Rohan Handifod", url:"https://rohan18h.github.io/-void-streetwear/#shop" },
  { name:"Gaoslazam Toufik Sandarwale", url:"https://my-portfolio-theta-ten-55.vercel.app/" },
  { name:"Saniya Kamble", url:"https://sanika841.github.io/Coffee.website/" },
  { name:"Vaishnavi Anil Shinde", url:"https://vaishnavi-shinde244.github.io/Skincare.website/" },
  { name:"Vaishnavi Jaysing Lokhande", url:"https://vaishnavilokhande-alt.github.io/Shopping.website/" },
  { name:"Rutuja Vaibhav Patil", url:"https://rutuja8956-design.github.io/Jewellery.website/" },
  { name:"Sakshi Sanjay Patil", url:"https://sakshi772-bypatil.github.io/Pizza.website/" },
  { name:"Sumit Narhari Bondre", url:"https://sumitbondre011-sketch.github.io/PORTFOLIO/" },
  { name:"Samira Shafik Sayyad", url:"https://sayyadsamira15.github.io/GYM/" },
  { name:"Prajwal Aurwade", url:"https://aurwadeprajwal-cmd.github.io/athletix/" },
  { name:"Pranav Shinde", url:"https://pranav-8206.github.io/bmw-website/" },
  { name:"Avadhut Kamble", url:"https://avadhutkamble2206.github.io/iqoo-pro/" },
  { name:"Pravin Nilappa Muchandi", url:"https://pravinmuchandi.github.io/Pravin/" },
  { name:"Abhilash Ashok Jabgond", url:"https://abhi007aj.github.io/Abhilash/" },
  { name:"Pratiksha Satish Mahajan", url:"https://pratikshmahajan.github.io/Pratiksha19-mahajan11" },
  { name:"Jyoti Baliram Madane", url:"https://jyotimadane.netlify.app/" },
  { name:"Aditya Biru Mane", url:"https://adyamane7986-ship-it.github.io/adii/" },
  { name:"Komal Pravin Turture", url:"https://komalturture.github.io/komal/" },
  { name:"Sumaiya Nadaf", url:"https://student-sumaiyya.github.io/Flight-Booking/" },
  { name:"Sanket Sanjay Khandekar", url:"https://sanketkhandekar739-code.github.io/Outdoors-Game-/" },
  { name:"Rajnandini Santosh Sonawale", url:"https://sonawalerajnandini-sys.github.io/Rajnandini-123/" },
  { name:"Sakshi Sachin Karande", url:"https://karandesakshi32233-sketch.github.io/Sakshi-123/" },
  { name:"Sachi Niranjan Mane", url:"https://sachiselearn.netlify.app/" },
  { name:"Pratik Nitin Ghorpade", url:"https://pratikghorpade29.github.io/solestyle/" },
  { name:"Kiran Todalabagi", url:"https://travel-sphere-pearl.vercel.app" },
  { name:"Mayuresh Vishnu Madyapgol", url:"https://mayuresh8137-source.github.io/Elite-GYM/" },
  { name:"Ankita Sanjay Dhole", url:"https://cyber-nexus-bice.vercel.app/" },
  { name:"Arati Potdar", url:"https://aratitraveld.netlify.app/" },
  { name:"Navnath Ingole", url:"https://navnath-ashy.vercel.app/" },
  { name:"Vikram Mane", url:"https://vikrammane.netlify.app" },
  { name:"Sakshi Shashikant Patil", url:"https://sakshipatil3092006-design.github.io/Patil-hotel-/" },
  { name:"Arbaz Sadik Bargir", url:"https://arbazbargir860-coder.github.io/Thunder-Motors/" },
  { name:"Aryan Rade", url:"https://AryanRade.github.io/My_first_website/" },
  { name:"Dhanashri Kolekar", url:"https://dhanshirkolekar.netlify.app/" },
  { name:"Aryan Sutar", url:"https://aryansutar-07.github.io/myhtml_website/" },
  { name:"Nilisha Kharade", url:"https://nilishabote2805-source.github.io/digital-college-notice-board/" },
  { name:"Anzalna Landur", url:"https://landuranzalna-cyber.github.io/PORTFOLIO/" },
  { name:"Piyush Dipak Sarode", url:"https://voyago-dream-destinations.netlify.app/" },
  { name:"Sanika Savanta Wavare", url:"https://sanikawavare72-cmd.github.io/My-first-web/" },
  { name:"Kartik Patil", url:"https://sadashivpatil748-eng.github.io/Defender/" },
  { name:"Trupti Mane", url:"https://manetrupti2226-ux.github.io/Fationhub/" },
  { name:"Vijaya Narute", url:"https://vijayanarute.netlify.app/" },
  { name:"Sanika Dilip Dhobale", url:"https://manetrupti2226-ux.github.io/online-food-order/" },
  { name:"Ruturaj Suresh Kharade", url:"https://ruturaj2127.github.io/Ruturaj-k/" },
  { name:"Shruti Ranjit Jadhav", url:"https://patilshruti8548-spec.github.io/Jadav/" },
  { name:"Aditya Kumbhar", url:"https://adityakumbhar47.github.io/LUXE-TIME/" },
  { name:"Subhan Makandar", url:"https://netflix-dark-series-web.vercel.app/" },
  { name:"Shubham Vishwambhar Tidke", url:"https://shubhamtidke110-create.github.io/Food-shop/" },
  { name:"Rehan Kandekari", url:"https://stark-tech-industries2.netlify.app/" },
  { name:"Parth Parit", url:"https://parthparit.netlify.app" },
  { name:"Priyanka Ghugare", url:"https://manetrupti2226-ux.github.io/DreamBits/" },
  { name:"Arpita Padale", url:"https://manetrupti2226-ux.github.io/Student-Life-Finance/" },
  { name:"Soham Dhumal", url:"https://sohamdhumal1015.github.io/One8/" },
  { name:"Neha Bhorawat", url:"https://nehamooncafe.netlify.app/#menu" },
  { name:"Saloni Dhurve", url:"https://salonidhurvecakes.netlify.app/" },
  { name:"Kore Amasiddha", url:"https://student-sumaiyya.github.io/Health-fitness/" },
  { name:"Mohite Ajit Babasaheb", url:"https://mohite09062005-bot.github.io/Car-modifications-/" },
  { name:"Piyush Hegade", url:"https://piyushh41.github.io/Car-showroom/" },
  { name:"Samidha Santosh Patyan", url:"https://samidha3011.github.io/Flim-Industry-website-/" },
  { name:"Digambar Babar", url:"https://digambarbabar987.github.io/uber-clone/" },
    { name:" Suhani Damakale", url:"https://k-drama-universe.netlify.app/" },
  { name:"Saujanya Patil", url:"https://ephemeral-salamander-9b6e24.netlify.app/" }
];

// ═══════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════
function getPlatform(url) {
  if (url.includes('github.io')) return 'github';
  if (url.includes('netlify')) return 'netlify';
  if (url.includes('vercel')) return 'vercel';
  return 'github';
}

function getContext(url) {
  const u = url.toLowerCase();
  if (u.includes('kohli')||u.includes('one8')||u.includes('sharma')) return { tag:'Cricket Dev Hub', icon:'fa-cricket-bat-ball', img:'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=500&auto=format&fit=crop&q=70' };
  if (u.includes('coffee')||u.includes('cafe')||u.includes('moon')) return { tag:'Café Interface', icon:'fa-mug-hot', img:'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&auto=format&fit=crop&q=70' };
  if (u.includes('pizza')||u.includes('food')||u.includes('hotel')||u.includes('cake')||u.includes('shop')) return { tag:'Food & Restaurant App', icon:'fa-utensils', img:'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=70' };
  if (u.includes('car')||u.includes('mclaren')||u.includes('bmw')||u.includes('motor')||u.includes('uber')||u.includes('defender')) return { tag:'Automotive Landing', icon:'fa-car-side', img:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=70' };
  if (u.includes('gym')||u.includes('athletix')||u.includes('fitness')||u.includes('health')) return { tag:'Fitness Dashboard', icon:'fa-dumbbell', img:'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&auto=format&fit=crop&q=70' };
  if (u.includes('jewellery')||u.includes('skincare')||u.includes('shopping')||u.includes('fation')||u.includes('style')||u.includes('wear')||u.includes('luxe')) return { tag:'E-Commerce Solution', icon:'fa-bag-shopping', img:'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&auto=format&fit=crop&q=70' };
  if (u.includes('travel')||u.includes('flight')||u.includes('voyago')||u.includes('outdoor')) return { tag:'Travel Exploration', icon:'fa-compass', img:'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=70' };
  if (u.includes('netflix')||u.includes('film')||u.includes('movie')||u.includes('stream')||u.includes('dream')) return { tag:'Media Portal', icon:'fa-play', img:'https://images.unsplash.com/photo-1574375927938-d5a98e8edd86?w=500&auto=format&fit=crop&q=70' };
  if (u.includes('finance')||u.includes('wallet')||u.includes('student-life')) return { tag:'Fintech Dashboard', icon:'fa-wallet', img:'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&auto=format&fit=crop&q=70' };
  if (u.includes('iqoo')||u.includes('tech')||u.includes('cyber')||u.includes('nexus')) return { tag:'Tech Product Page', icon:'fa-microchip', img:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=70' };
  return { tag:'Portfolio Architecture', icon:'fa-laptop-code', img:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=70' };
}

// ═══════════════════════════════════════
// STATE
// ═══════════════════════════════════════
let dataset = [];
let activeFilter = 'all';
let activeSearch = '';

function buildDataset() {
  dataset = STUDENTS.map((s,i) => ({
    id: i,
    name: s.name,
    url: s.url,
    platform: getPlatform(s.url),
    ...getContext(s.url)
  }));
}

// ═══════════════════════════════════════
// STATS
// ═══════════════════════════════════════
function animCount(el, target, duration=1500) {
  let start = 0, step = target/60;
  let t = setInterval(() => {
    start = Math.min(start+step, target);
    el.textContent = Math.round(start);
    if (start >= target) clearInterval(t);
  }, duration/60);
}

function renderStats() {
  const total = dataset.length;
  const gh = dataset.filter(d=>d.platform==='github').length;
  const nt = dataset.filter(d=>d.platform==='netlify').length;
  const vc = dataset.filter(d=>d.platform==='vercel').length;
  animCount(document.getElementById('totalProj'), total);
  animCount(document.getElementById('ghProj'), gh);
  animCount(document.getElementById('ntProj'), nt);
  animCount(document.getElementById('vcProj'), vc);
  const pGh = Math.round(gh/total*100)||0;
  const pNt = Math.round(nt/total*100)||0;
  const pVc = Math.round(vc/total*100)||0;
  setTimeout(()=>{
    document.getElementById('barGh').style.width = pGh+'%';
    document.getElementById('barNt').style.width = pNt+'%';
    document.getElementById('barVc').style.width = pVc+'%';
    document.getElementById('pGh').textContent = pGh;
    document.getElementById('pNt').textContent = pNt;
    document.getElementById('pVc').textContent = pVc;
    document.getElementById('totalLabel').textContent = total+' deployments tracked';
  }, 400);
}

// ═══════════════════════════════════════
// TICKER
// ═══════════════════════════════════════
function renderTicker() {
  const items = dataset.map(d =>
    `<div class="ticker-item"><i class="fas fa-circle" style="font-size:5px;color:var(--green)"></i><span class="t-name">${d.name}</span><span class="t-platform" style="opacity:0.4">[${d.platform.toUpperCase()}]</span></div>`
  ).join('');
  const track = document.getElementById('tickerTrack');
  track.innerHTML = items + items; // duplicate for seamless loop
}

// ═══════════════════════════════════════
// CARDS
// ═══════════════════════════════════════
function renderCards() {
  const filtered = dataset.filter(d => {
    const nameMatch = d.name.toLowerCase().includes(activeSearch.toLowerCase());
    const platMatch = activeFilter==='all' || d.platform===activeFilter;
    return nameMatch && platMatch;
  });
  const grid = document.getElementById('projectsGrid');
  if (!filtered.length) {
    grid.innerHTML = '<div class="no-results"><i class="fas fa-satellite-dish" style="font-size:2rem;margin-bottom:1rem;display:block;opacity:0.3"></i>NO SUBMISSIONS MATCH QUERY PARAMETERS</div>';
    return;
  }
  grid.innerHTML = filtered.map(p => {
    const enc = encodeURIComponent;
    const waUrl = `https://chat.whatsapp.com/KHzrbpVw0JX3Ltuq47hKtE?text=${enc(p.name+"'s portfolio: "+p.url)}`;
    const twUrl = `https://twitter.com/intent/tweet?text=${enc("Check out "+p.name+"'s portfolio!")}&url=${enc(p.url)}`;
    const liUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${enc(p.url)}`;
    return `
    <div class="project-card">
      <div class="card-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        <span class="card-platform ${p.platform}">${p.platform.toUpperCase()}</span>
      </div>
      <div class="card-body">
        <div>
          <h2>${p.name}</h2>
          <div class="card-type"><i class="fas ${p.icon}"></i> ${p.tag}</div>
        </div>
        <div class="card-actions">
          <a href="${p.url}" target="_blank" rel="noopener" class="visit-btn">
            LAUNCH<i class="fas fa-arrow-up-right-from-square"></i>
          </a>
          <button class="share-btn" onclick="toggleDock(event,${p.id})"><i class="fas fa-share-nodes"></i></button>
          <div class="share-dock" id="dock-${p.id}">
            <a href="${waUrl}" target="_blank" class="sdock-link wa" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
            <a href="${twUrl}" target="_blank" class="sdock-link tw" title="Twitter/X"><i class="fab fa-twitter"></i></a>
            <a href="${liUrl}" target="_blank" class="sdock-link li" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');
}

window.toggleDock = function(e, id) {
  e.stopPropagation();
  const dock = document.getElementById(`dock-${id}`);
  const wasOpen = dock.classList.contains('open');
  document.querySelectorAll('.share-dock').forEach(d => d.classList.remove('open'));
  if (!wasOpen) dock.classList.add('open');
};
document.addEventListener('click', () => document.querySelectorAll('.share-dock').forEach(d=>d.classList.remove('open')));

// ═══════════════════════════════════════
// FILTERS
// ═══════════════════════════════════════
function bindFilters() {
  document.getElementById('searchInput').addEventListener('input', e => {
    activeSearch = e.target.value;
    renderCards();
  });
  document.querySelectorAll('.fpill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.fpill').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.f;
      renderCards();
    });
  });
}

// ═══════════════════════════════════════
// SURPRISE
// ═══════════════════════════════════════
document.getElementById('surpriseBtn').addEventListener('click', () => {
  const pick = dataset[Math.floor(Math.random()*dataset.length)];
  document.getElementById('modalName').textContent = pick.name;
  document.getElementById('modalDesc').textContent = pick.tag + ' · ' + pick.platform.toUpperCase();
  document.getElementById('modalLink').href = pick.url;
  document.getElementById('modal').classList.add('open');
});

// ═══════════════════════════════════════
// NAV LOGO RESET
// ═══════════════════════════════════════
document.getElementById('navLogo').addEventListener('click', e => {
  e.preventDefault();
  activeSearch = ''; activeFilter = 'all';
  document.getElementById('searchInput').value = '';
  document.querySelectorAll('.fpill').forEach(b=>b.classList.remove('active'));
  document.querySelector('.fpill[data-f="all"]').classList.add('active');
  renderCards();
  window.scrollTo({top:0,behavior:'smooth'});
});

// ═══════════════════════════════════════
// THEME
// ═══════════════════════════════════════
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  themeBtn.innerHTML = document.body.classList.contains('light')
    ? '<i class="fas fa-moon"></i>'
    : '<i class="fas fa-sun"></i>';
});

// ═══════════════════════════════════════
// MOBILE MENU
// ═══════════════════════════════════════
function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
}

// ═══════════════════════════════════════
// SCROLL TOP
// ═══════════════════════════════════════
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('show', window.scrollY > 400);
});
scrollTopBtn.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));

// ═══════════════════════════════════════
// SCROLL TO HELPER
// ═══════════════════════════════════════
function scrollTo(id) {
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

// ═══════════════════════════════════════
// REVEAL ON SCROLL
// ═══════════════════════════════════════
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ═══════════════════════════════════════
   GLOW CURSOR
═══════════════════════════════════════ */
(function () {
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

  document.body.style.cursor = 'none';

  const cursor = document.getElementById('glowCursor');
  let mx = window.innerWidth / 2;
  let my = window.innerHeight / 2;
  let cx = mx, cy = my;
  let raf;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  document.addEventListener('mousedown', () => cursor.classList.add('clicking'));
  document.addEventListener('mouseup',   () => cursor.classList.remove('clicking'));

  const hoverTargets = 'a, button, input, textarea, select, .project-card, .motive-card, .tech-card, .blog-card, .stat-card, .fpill, .visit-btn, .share-btn, .modal-close, .rm-card, .scroll-top, .theme-btn, .hamburger, [onclick]';

  document.addEventListener('mouseover', e => {
    if (e.target.closest(hoverTargets)) cursor.classList.add('hovering');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(hoverTargets)) cursor.classList.remove('hovering');
  });

  document.addEventListener('mouseleave', () => { cursor.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { cursor.style.opacity = '1'; });

  const ease = 0.10;

  function loop() {
    cx += (mx - cx) * ease;
    cy += (my - cy) * ease;
    cursor.style.left = cx + 'px';
    cursor.style.top  = cy + 'px';
    raf = requestAnimationFrame(loop);
  }

  loop();
})();

// ═══════════════════════════════════════
// BOOT
// ═══════════════════════════════════════
window.addEventListener('DOMContentLoaded', () => {
  buildDataset();
  renderCards();
  renderStats();
  renderTicker();
  bindFilters();
  setTimeout(initReveal, 100);
  setTimeout(() => {
    const loader = document.getElementById('loader');
    loader.classList.add('hide');
  }, 1200);
});
