/* ==========================================================================
   AMEEN PARTY SHOP - Vanilla JavaScript Logic File
   ========================================================================== */

// Store Data Definitions
const shopData = {
  phone: "9765350350",
  whatsapp: "919765350350",
  address: "C-8, Ashish Shopping Centre, Behind Royal Dairy"
};

// 30 Color Swatches Matrix Data
const swatches30 = [
  { id: 1, code: "#01", name: "Classic Sun Yellow", hex: "#eab308", category: "Yellow & Gold" },
  { id: 2, code: "#02", name: "Deep Marigold Orange", hex: "#f97316", category: "Orange & Red" },
  { id: 3, code: "#03", name: "Bright Festive Red", hex: "#ef4444", category: "Orange & Red" },
  { id: 4, code: "#04", name: "Rani Pink / Magenta", hex: "#ec4899", category: "Pink & Purple" },
  { id: 5, code: "#05", name: "Deep Violet Purple", hex: "#8b5cf6", category: "Pink & Purple" },
  { id: 6, code: "#06", name: "Emerald Mango Green", hex: "#10b981", category: "Green & Blue" },
  { id: 7, code: "#07", name: "Parrot Light Green", hex: "#84cc16", category: "Green & Blue" },
  { id: 8, code: "#08", name: "Ocean Royal Blue", hex: "#3b82f6", category: "Green & Blue" },
  { id: 9, code: "#09", name: "Sky Blue Breeze", hex: "#06b6d4", category: "Green & Blue" },
  { id: 10, code: "#10", name: "Pure White Jasmine", hex: "#f8fafc", category: "White & Cream" },
  { id: 11, code: "#11", name: "Yellow-Red Mix", hex: "linear-gradient(135deg, #eab308, #ef4444)", category: "Dual Tone" },
  { id: 12, code: "#12", name: "Orange-Yellow Garland", hex: "linear-gradient(135deg, #f97316, #eab308)", category: "Dual Tone" },
  { id: 13, code: "#13", name: "Red-White Auspicious", hex: "linear-gradient(135deg, #ef4444, #ffffff)", category: "Dual Tone" },
  { id: 14, code: "#14", name: "Pink-White Blossom", hex: "linear-gradient(135deg, #ec4899, #ffffff)", category: "Dual Tone" },
  { id: 15, code: "#15", name: "Blue-White Royal Mix", hex: "linear-gradient(135deg, #3b82f6, #ffffff)", category: "Dual Tone" },
  { id: 16, code: "#16", name: "Green-Yellow Leaf Mix", hex: "linear-gradient(135deg, #10b981, #eab308)", category: "Dual Tone" },
  { id: 17, code: "#17", name: "Purple-White Lotus Mix", hex: "linear-gradient(135deg, #8b5cf6, #ffffff)", category: "Dual Tone" },
  { id: 18, code: "#18", name: "Maroon & Gold Temple", hex: "linear-gradient(135deg, #881337, #eab308)", category: "Dual Tone" },
  { id: 19, code: "#19", name: "Pastel Peach-Cream", hex: "linear-gradient(135deg, #fb923c, #fef3c7)", category: "Pastels" },
  { id: 20, code: "#20", name: "Baby Pink Delight", hex: "#f472b6", category: "Pink & Purple" },
  { id: 21, code: "#21", name: "Turquoise Gold Twist", hex: "linear-gradient(135deg, #14b8a6, #eab308)", category: "Dual Tone" },
  { id: 22, code: "#22", name: "Sun Orange & White", hex: "linear-gradient(135deg, #f97316, #ffffff)", category: "Dual Tone" },
  { id: 23, code: "#23", name: "Rainbow 5-Color Mix", hex: "linear-gradient(90deg, #ef4444, #f97316, #eab308, #10b981, #3b82f6)", category: "Dual Tone" },
  { id: 24, code: "#24", name: "Rose Pink & Red", hex: "linear-gradient(135deg, #f43f5e, #991b1b)", category: "Dual Tone" },
  { id: 25, code: "#25", name: "Golden Shimmer Yellow", hex: "#ca8a04", category: "Yellow & Gold" },
  { id: 26, code: "#26", name: "Copper Red Garland", hex: "#b91c1c", category: "Orange & Red" },
  { id: 27, code: "#27", name: "Deep Navy Blue", hex: "#1e3a8a", category: "Green & Blue" },
  { id: 28, code: "#28", name: "Fresh Mint Green", hex: "#34d399", category: "Green & Blue" },
  { id: 29, code: "#29", name: "Saffron Gold Festive", hex: "#d97706", category: "Yellow & Gold" },
  { id: 30, code: "#30", name: "Silver White Pearl", hex: "#e2e8f0", category: "White & Cream" }
];

// Product Catalog Data
const catalogProducts = [
  { id: "p1", nameEn: "5ft Plastic Marigold Garland (Yellow & Red Mix)", nameHi: "5 फीट प्लास्टिक गेंदा माला (पीला-लाल)", price: 70, unit: "per strand", badge: "Bestseller", image: "images/packaging.jpg" },
  { id: "p2", nameEn: "5ft Orange & Yellow Plastic Garland Strand", nameHi: "5 फीट नारंगी-पीला प्लास्टिक माला", price: 70, unit: "per strand", badge: "Popular", image: "images/hero_garlands.jpg" },
  { id: "p3", nameEn: "Janmashtami Laddu Gopal Decorative Jhula Set", nameHi: "जन्माष्टमी लड्डू गोपाल झूला सेट", price: 499, unit: "per set", badge: "Festival Special", image: "images/janmashtami.jpg" },
  { id: "p4", nameEn: "Ganesh Chaturthi Floral Arch Makhar Frame", nameHi: "गणेश चतुर्थी फ्लावर मखर बैकड्रॉप", price: 850, unit: "per set", badge: "Top Seller", image: "images/ganesh.jpg" }
];

// Visualizer Combinations
const simCombos = [
  { id: 'yr', name: 'Yellow-Red', c1: '#facc15', c2: '#dc2626' },
  { id: 'oy', name: 'Orange-Yellow', c1: '#f97316', c2: '#facc15' },
  { id: 'rw', name: 'Red-White', c1: '#dc2626', c2: '#ffffff' },
  { id: 'pw', name: 'Pink-White', c1: '#ec4899', c2: '#ffffff' },
  { id: 'bw', name: 'Blue-White', c1: '#2563eb', c2: '#ffffff' },
  { id: 'gy', name: 'Green-Yellow', c1: '#16a34a', c2: '#facc15' }
];

const simBackdrops = [
  { id: 'cream', name: 'Soft Cream', hex: '#fef3c7' },
  { id: 'maroon', name: 'Royal Maroon', hex: '#701a75' },
  { id: 'gold', name: 'Festive Gold', hex: '#fef08a' },
  { id: 'orange', name: 'Saffron Mandap', hex: '#ffedd5' },
  { id: 'green', name: 'Eco Green', hex: '#dcfce7' },
  { id: 'dark', name: 'Temple Night', hex: '#1e1b4b' }
];

// Active State
let currentLang = 'hi';
let selectedCombo = simCombos[0];
let selectedBackdrop = simBackdrops[0];
let currentStrandCount = 5;
let lightsActive = true;
let activeCategoryFilter = 'All';
let cart = [
  { id: "p1", nameEn: "5ft Plastic Marigold Garland (Yellow & Red Mix)", nameHi: "5 फीट प्लास्टिक गेंदा माला (पीला-लाल)", price: 70, quantity: 5, unit: "per strand" }
];

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  renderSimControls();
  renderSimPreview();
  renderSwatches();
  renderCatalog();
  updateCartBadge();
});

/* ==========================================================================
   Bilingual Language Switcher
   ========================================================================== */
function setLanguage(lang) {
  currentLang = lang;
  document.getElementById('btn-lang-hi').classList.toggle('active', lang === 'hi');
  document.getElementById('btn-lang-en').classList.toggle('active', lang === 'en');

  if (lang === 'hi') {
    document.getElementById('txt-top-msg').innerText = "हर पूजा, हर उत्सव, हर सजावट के लिए • 30+ आकर्षक रंग विकल्प";
    document.getElementById('txt-brand-name').innerText = "अमीन पार्टी शॉप";
    document.getElementById('txt-brand-sub').innerText = "Deckoration वाली प्लास्टिक माला";
    document.getElementById('nav-features').innerText = "विशेषताएँ";
    document.getElementById('nav-visualizer').innerText = "डेकोर सिम्युलेटर";
    document.getElementById('nav-colors').innerText = "30+ रंग विकल्प";
    document.getElementById('nav-festivals').innerText = "त्यौहार विशेष";
    document.getElementById('nav-catalog').innerText = "कैटलॉग";
    document.getElementById('nav-location').innerText = "दुकान का पता";
    document.getElementById('txt-cart-btn').innerText = "ऑर्डर लिस्ट";
    
    document.getElementById('txt-hero-title').innerText = "अमीन पार्टी शॉप";
    document.getElementById('txt-hero-subtitle').innerText = "Deckoration वाली प्लास्टिक माला";
    document.getElementById('txt-hero-subtag').innerText = '"खूबसूरती जो रहे हमेशा बरकरार"';
    document.getElementById('b1').innerText = "सुंदर";
    document.getElementById('b2').innerText = "टिकाऊ";
    document.getElementById('b3').innerText = "किफायती";
    document.getElementById('c1').innerText = "वॉटरप्रूफ";
    document.getElementById('c2').innerText = "री-यूजेबल";
    document.getElementById('c3').innerText = "उच्च गुणवत्ता";
    document.getElementById('c4').innerText = "सुरक्षित पैकिंग";
    document.getElementById('txt-featured-colors-title').innerText = "⚡ लोकप्रिय रंग विकल्प (6 मुख्य कॉम्बिनेशन)";
    document.getElementById('txt-hero-wa-btn').innerText = "व्हाट्सएप पर ऑर्डर करें (9765350350)";
    document.getElementById('txt-hero-color-btn').innerText = "30+ रंग देखें";
    document.getElementById('txt-hero-card-tag').innerText = "त्योहारों की सजावट का परफेक्ट चुनाव";
    
    document.getElementById('txt-feat-badge').innerText = "विशेषताएँ एवं लाभ";
    document.getElementById('txt-feat-title').innerText = "अमीन पार्टी शॉप प्लास्टिक माला की खूबी";
    document.getElementById('txt-feat-desc').innerText = "सुंदरता, टिकाऊपन और किफ़ायत का अनोखा संगम — जो आपकी हर पूजा और त्यौहार को बनाए भव्य।";
  } else {
    document.getElementById('txt-top-msg').innerText = "For Every Pooja, Celebration & Festival Decor • 30+ Color Options";
    document.getElementById('txt-brand-name').innerText = "AMEEN PARTY SHOP";
    document.getElementById('txt-brand-sub').innerText = "Plastic Decoration Garlands Store";
    document.getElementById('nav-features').innerText = "Features";
    document.getElementById('nav-visualizer').innerText = "Decor Simulator";
    document.getElementById('nav-colors').innerText = "30+ Colors";
    document.getElementById('nav-festivals').innerText = "Festival Specials";
    document.getElementById('nav-catalog').innerText = "Catalog";
    document.getElementById('nav-location').innerText = "Store Location";
    document.getElementById('txt-cart-btn').innerText = "Inquiry Cart";
    
    document.getElementById('txt-hero-title').innerText = "AMEEN PARTY SHOP";
    document.getElementById('txt-hero-subtitle').innerText = "Plastic Garland Decoration Store";
    document.getElementById('txt-hero-subtag').innerText = '"Beauty that Stays Forever"';
    document.getElementById('b1').innerText = "Beautiful";
    document.getElementById('b2').innerText = "Durable";
    document.getElementById('b3').innerText = "Affordable";
    document.getElementById('c1').innerText = "Waterproof";
    document.getElementById('c2').innerText = "Reusable";
    document.getElementById('c3').innerText = "High Quality";
    document.getElementById('c4').innerText = "Dust-Free Pack";
    document.getElementById('txt-featured-colors-title').innerText = "⚡ Top Available Color Combinations";
    document.getElementById('txt-hero-wa-btn').innerText = "Order on WhatsApp (9765350350)";
    document.getElementById('txt-hero-color-btn').innerText = "View 30+ Colors";
    document.getElementById('txt-hero-card-tag').innerText = "Perfect Choice for Festival Decor";

    document.getElementById('txt-feat-badge').innerText = "Why Choose Our Garlands";
    document.getElementById('txt-feat-title').innerText = "Ameen Party Shop Garland Features";
    document.getElementById('txt-feat-desc').innerText = "Designed for durability, effortless elegance, and multi-year festive celebrations.";
  }

  renderSwatches();
  renderCatalog();
}

/* ==========================================================================
   Simulator Controls & Stage Rendering
   ========================================================================== */
function renderSimControls() {
  const comboContainer = document.getElementById('combo-buttons-container');
  comboContainer.innerHTML = simCombos.map(c => `
    <button class="sim-btn ${selectedCombo.id === c.id ? 'active' : ''}" onclick="selectCombo('${c.id}')">
      <div class="dot-prev" style="background: linear-gradient(135deg, ${c.c1}, ${c.c2})"></div>
      <span>${c.name}</span>
    </button>
  `).join('');

  const backdropContainer = document.getElementById('backdrop-buttons-container');
  backdropContainer.innerHTML = simBackdrops.map(b => `
    <button class="sim-btn ${selectedBackdrop.id === b.id ? 'active' : ''}" onclick="selectBackdrop('${b.id}')">
      <div class="dot-prev" style="background: ${b.hex}"></div>
      <span>${b.name}</span>
    </button>
  `).join('');
}

function selectCombo(id) {
  selectedCombo = simCombos.find(c => c.id === id);
  renderSimControls();
  renderSimPreview();
}

function selectBackdrop(id) {
  selectedBackdrop = simBackdrops.find(b => b.id === id);
  renderSimControls();
  renderSimPreview();
}

function updateStrandCount(val) {
  currentStrandCount = Number(val);
  document.getElementById('strand-val').innerText = `${val} Strands`;
  renderSimPreview();
}

function toggleLights(val) {
  lightsActive = val;
  renderSimPreview();
}

function renderSimPreview() {
  const stage = document.getElementById('preview-stage');
  stage.style.backgroundColor = selectedBackdrop.hex;

  // Toran arch
  const toran = document.getElementById('toran-arch');
  toran.innerHTML = Array.from({ length: 14 }).map((_, i) => `
    <div class="toran-bead" style="background-color: ${i % 2 === 0 ? selectedCombo.c1 : selectedCombo.c2}"></div>
  `).join('');

  // Vertical Strands
  const container = document.getElementById('strands-container');
  container.innerHTML = Array.from({ length: currentStrandCount }).map((_, sIdx) => `
    <div class="sim-strand">
      ${Array.from({ length: 12 }).map((_, bIdx) => `
        <div class="sim-bead" style="
          background-color: ${(sIdx + bIdx) % 2 === 0 ? selectedCombo.c1 : selectedCombo.c2};
          box-shadow: ${lightsActive ? '0 0 6px ' + selectedCombo.c1 : 'none'}
        "></div>
      `).join('')}
    </div>
  `).join('');

  document.getElementById('sim-strand-info').innerText = `${currentStrandCount} Strands of ${selectedCombo.name} Garland`;
  document.getElementById('txt-stage-theme').innerText = `${selectedBackdrop.name} Theme`;
  document.getElementById('sim-glow-tag').style.display = lightsActive ? 'inline-block' : 'none';
}

function orderCustomSimSetup() {
  const msg = `Hi Ameen Party Shop! I tried your Decor Simulator online:
- Garland Pattern: ${selectedCombo.name}
- Quantity: ${currentStrandCount} Strands
- Backdrop Theme: ${selectedBackdrop.name}
Please confirm availability and price quote.`;
  window.open(`https://wa.me/919765350350?text=${encodeURIComponent(msg)}`, '_blank');
}

/* ==========================================================================
   30 Color Swatches Rendering & Filter Logic
   ========================================================================== */
function renderSwatches(filterQuery = '') {
  const grid = document.getElementById('swatches-grid-container');
  
  const filtered = swatches30.filter(item => {
    const matchCat = activeCategoryFilter === 'All' || item.category.includes(activeCategoryFilter);
    const matchSearch = item.name.toLowerCase().includes(filterQuery.toLowerCase()) || item.code.toLowerCase().includes(filterQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  grid.innerHTML = filtered.map(item => `
    <div class="swatch-item">
      <span class="swatch-code">Code ${item.code}</span>
      <div class="swatch-ball" style="background: ${item.hex}"></div>
      <h4 class="swatch-name">${item.name}</h4>
      <button class="add-swatch-btn" onclick="addSwatchToCart(${item.id})">
        + ${currentLang === 'hi' ? 'ऑर्डर में जोड़ें' : 'Add to Order'}
      </button>
    </div>
  `).join('');
}

function filterColors(cat, btn) {
  activeCategoryFilter = cat;
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderSwatches();
}

function searchColors(val) {
  renderSwatches(val);
}

function addSwatchToCart(id) {
  const swatch = swatches30.find(s => s.id === id);
  const cartItem = {
    id: `swatch-${swatch.id}`,
    nameEn: `Garland Shade ${swatch.code} - ${swatch.name}`,
    nameHi: `प्लास्टिक माला रंग ${swatch.code} - ${swatch.name}`,
    price: 70,
    unit: "per strand"
  };
  addToCart(cartItem);
}

/* ==========================================================================
   Catalog & Cart System
   ========================================================================== */
function renderCatalog() {
  const grid = document.getElementById('catalog-grid-container');
  grid.innerHTML = catalogProducts.map(p => `
    <div class="product-card">
      <div class="p-img-box">
        <img src="${p.image}" alt="${p.nameEn}" class="p-img">
        <span class="p-badge">${p.badge}</span>
      </div>
      <div class="p-content">
        <h3 class="p-title">${currentLang === 'hi' ? p.nameHi : p.nameEn}</h3>
        <div class="p-footer">
          <div>
            <span class="p-price">₹${p.price}</span>
            <span class="p-unit">${p.unit}</span>
          </div>
          <button class="btn btn-gold" onclick='addToCart(${JSON.stringify(p)})'>
            + ${currentLang === 'hi' ? 'जोड़ें' : 'Add'}
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function addToCart(product) {
  const existing = cart.find(i => i.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCartBadge();
  toggleCartModal(true);
}

function updateCartBadge() {
  const count = cart.reduce((acc, i) => acc + i.quantity, 0);
  document.getElementById('cart-badge').innerText = count;
  document.getElementById('cart-count-num').innerText = count;
}

function toggleCartModal(forceOpen = false) {
  const modal = document.getElementById('cart-modal');
  if (forceOpen || !modal.classList.contains('open')) {
    modal.classList.add('open');
    renderCartList();
  } else {
    modal.classList.remove('open');
  }
}

function closeCartModal(e) {
  if (e.target.classList.contains('modal-backdrop')) {
    document.getElementById('cart-modal').classList.remove('open');
  }
}

function renderCartList() {
  const container = document.getElementById('cart-items-list');
  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = `<p style="text-align:center; padding: 2rem; color: #64748b;">Order list is empty. Add items from 30+ colors or catalog!</p>`;
    document.getElementById('cart-total-amt').innerText = "₹0";
    return;
  }

  container.innerHTML = cart.map(item => {
    total += item.price * item.quantity;
    return `
      <div class="cart-item-row">
        <div class="cart-item-info">
          <h4>${currentLang === 'hi' ? item.nameHi : item.nameEn}</h4>
          <span>₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}</span>
        </div>
        <div style="display:flex; gap: 0.5rem; align-items:center;">
          <button onclick="changeQty('${item.id}', ${item.quantity - 1})" style="padding:2px 8px;">-</button>
          <span>${item.quantity}</span>
          <button onclick="changeQty('${item.id}', ${item.quantity + 1})" style="padding:2px 8px;">+</button>
          <button onclick="removeItem('${item.id}')" style="color:red; background:none; border:none; margin-left:0.5rem; cursor:pointer;">✕</button>
        </div>
      </div>
    `;
  }).join('');

  document.getElementById('cart-total-amt').innerText = `₹${total}`;
}

function changeQty(id, newQty) {
  if (newQty <= 0) {
    removeItem(id);
    return;
  }
  const item = cart.find(i => i.id === id);
  if (item) item.quantity = newQty;
  updateCartBadge();
  renderCartList();
}

function removeItem(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartBadge();
  renderCartList();
}

function clearCart() {
  cart = [];
  updateCartBadge();
  renderCartList();
}

function sendCartToWhatsApp() {
  if (cart.length === 0) return;
  let total = 0;
  let text = `*New Order Inquiry - Ameen Party Shop*\n------------------------------\n`;
  cart.forEach((item, idx) => {
    const sub = item.price * item.quantity;
    total += sub;
    text += `${idx + 1}. ${item.nameEn} (Qty: ${item.quantity}) - ₹${sub}\n`;
  });
  text += `------------------------------\n*Total Estimate:* ₹${total}\n\nPlease confirm availability and delivery / store pick-up.`;
  window.open(`https://wa.me/919765350350?text=${encodeURIComponent(text)}`, '_blank');
}

/* FAQ Accordion Toggle */
function toggleFaq(el) {
  el.classList.toggle('active');
}
