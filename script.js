  /* =============================================
   ELITE TIME — MAIN SCRIPT
   ============================================= */

const products = {
  watch2: {
    id: "watch2",
    name: "Black Diamond Classic",
    price: 90,
    description: "A bold luxury-inspired piece with a polished look and standout dial details. The perfect statement watch for any occasion.",
    images: ["watch2.jpeg", "watch2a.jpeg", "watch2b.jpeg", "watch2c.jpeg", "watch2d.jpeg", "watch2e.jpeg", "watch2f.jpeg", "watch2g.jpeg"],
    stock: 4,
    reviews: 124,
    sold: 43,
    category: "classic",
    badge: "Best Seller"
  },
  watch3: {
    id: "watch3",
    name: "Gold Green Traveler",
    price: 90,
    description: "A flashy luxury-inspired traveler style with rich gold and green contrast. Designed for the bold, the confident, the elite.",
    images: ["watch3.jpeg", "watch3a.jpeg", "watch3b.jpeg", "watch3c.jpeg", "watch3d.jpeg", "watch3e.jpeg", "watch3f.jpeg"],
    stock: 2,
    reviews: 89,
    sold: 31,
    category: "traveler",
    badge: "Only 2 Left"
  },
  watch4: {
    id: "watch4",
    name: "Classic Black Diver",
    price: 90,
    description: "Clean and versatile diver-style watch for everyday wear. A timeless silhouette that commands attention without saying a word.",
    images: ["watch4.jpeg", "watch4a.jpeg", "watch4b.jpeg", "watch4c.jpeg", "watch4d.jpeg", "watch4e.jpeg", "watch4f.jpeg"],
    stock: 3,
    reviews: 157,
    sold: 52,
    category: "diver",
    badge: "Hot"
  },
  watch6: {
    id: "watch6",
    name: "Red Blue Traveler",
    price: 90,
    description: "A colorful traveler-style watch with a bold red and blue bezel. Worn by those who refuse to blend in.",
    images: ["watch6.jpeg", "watch6a.jpeg", "watch6b.jpeg", "watch6c.jpeg", "watch6d.jpeg", "watch6f.jpeg", "watch6g.jpeg", "watch6h.jpeg"],
    stock: 3,
    reviews: 133,
    sold: 39,
    category: "traveler",
    badge: "Only 3 Left"
  },
  watch7: {
    id: "watch7",
    name: "Blue Roman Classic",
    price: 90,
    description: "Elegant blue dial design with Roman numeral styling and a polished finish that speaks of heritage and taste.",
    images: ["watch7.jpeg"],
    stock: 2,
    reviews: 74,
    sold: 19,
    category: "classic",
    badge: "Only 2 Left"
  },
  "gmt_twotone_black": {
  id: "gmt_twotone_black",
  name: "Two-Tone GMT Black Dial",
  price: 90,
  description: "Luxury two-tone GMT with a bold black dial and gold accents. Built for presence and everyday wear with a clean premium finish.",
  images: ["gmt_twotone_black-main.jpeg"],
  stock: 3,
  reviews: 142,
  sold: 37,
  category: "traveler",
  badge: "Hot"
},
"gmt_batman": {
  id: "gmt_batman",
  name: "Black Blue GMT",
  price: 90,
  description: "Bold black dial paired with a striking blue and black GMT bezel. A clean, high-contrast statement piece built for everyday wear and presence.",
  images: ["gmt_batman_main.jpeg"],
  stock: 3,
  reviews: 138,
  sold: 34,
  category: "traveler",
  badge: "Hot"
},
"dj_blue_diamond_fluted": {
  id: "dj_blue_diamond_fluted",
  name: "Blue Diamond Datejust",
  price: 90,
  description: "Deep blue dial with diamond hour markers paired with a fluted bezel and jubilee bracelet. A clean luxury look with standout shine.",
  images: ["dj_blue_diamond_fluted_main.jpeg"],
  stock: 3,
  reviews: 88,
  sold: 21,
  category: "classic",
  badge: "Hot"
},
"sub_twotone_black": {
  id: "sub_twotone_black",
  name: "Two-Tone Black Submariner",
  price: 90,
  description: "Bold two-tone Submariner with a deep black dial and gold accents. A heavy luxury diver built for presence and everyday wear.",
  images: ["sub_twotone_black_main.jpeg"],
  stock: 3,
  reviews: 131,
  sold: 36,
  category: "diver",
  badge: "Hot"
},
"sub_green_black": {
  id: "sub_green_black",
  name: "Green Bezel Submariner",
  price: 90,
  description: "Classic black dial paired with a bold green bezel. A clean diver with a standout color pop and everyday wear appeal.",
  images: ["sub_green_black_main.jpeg"],
  stock: 4,
  reviews: 118,
  sold: 29,
  category: "diver",
  badge: "Popular"
},
"dj_blue_fluted": {
  id: "dj_blue_fluted",
  name: "Blue Fluted Datejust",
  price: 90,
  description: "Clean blue dial paired with a fluted bezel and jubilee bracelet. A timeless everyday piece with a sharp, modern look.",
  images: ["dj_blue_fluted_main.jpeg"],
  stock: 4,
  reviews: 104,
  sold: 26,
  category: "classic",
  badge: "Best Seller"
},
"exp2_black_orange": {
  id: "exp2_black_orange",
  name: "Explorer II Black Dial",
  price: 90,
  description: "Clean black dial with a bold orange GMT hand and brushed steel bezel. A rugged everyday traveler built for function and presence.",
  images: ["exp2_black_orange_main.jpeg"],
  stock: 3,
  reviews: 92,
  sold: 18,
  category: "traveler",
  badge: "Popular"
},
"sub_green_full": {
  id: "sub_green_full",
  name: "Green Dial Submariner",
  price: 90,
  description: "Full green Submariner featuring a matching dial and bezel. A bold standout piece with strong presence and premium feel.",
  images: ["sub_green_full_main.jpeg"],
  stock: 3,
  reviews: 147,
  sold: 41,
  category: "diver",
  badge: "Hot"
},
"gmt_rootbeer": {
  id: "gmt_rootbeer",
  name: "Root Beer GMT",
  price: 90,
  description: "Two-tone GMT with a rich brown and rose gold bezel paired with a black dial. A warm luxury look built for everyday flex.",
  images: ["gmt_rootbeer_main.jpeg"],
  stock: 4,
  reviews: 136,
  sold: 34,
  category: "traveler",
  badge: "Popular"
},
"daydate_gold_champagne": {
  id: "daydate_gold_champagne",
  name: "Gold Day-Date Champagne",
  price: 90,
  description: "Full gold Day-Date with champagne dial and diamond hour markers. A bold luxury statement built to stand out.",
  images: ["daydate_gold_champagne_main.jpeg"],
  stock: 3,
  reviews: 118,
  sold: 29,
  category: "classic",
  badge: "Only 3 Left"
},
"datejust_wimbledon_rose": {
  id: "datejust_wimbledon_rose",
  name: "Wimbledon Rose Datejust",
  price: 90,
  description: "Two-tone rose gold Datejust with slate dial and signature green Roman numerals. A unique luxury piece with standout detail.",
  images: ["datejust_wimbledon_rose_main.jpeg"],
  stock: 4,
  reviews: 131,
  sold: 33,
  category: "classic",
  badge: "Hot"
},
"submariner_gold_black": {
  id: "submariner_gold_black",
  name: "Gold Black Submariner",
  price: 90,
  description: "Full gold Submariner with deep black dial and bezel. A bold, high-impact luxury piece built to stand out.",
  images: ["submariner_gold_black_main.jpeg"],
  stock: 3,
  reviews: 147,
  sold: 41,
  category: "diver",
  badge: "Hot"
},
"submariner_blue": {
  id: "submariner_blue",
  name: "Blue Dial Submariner",
  price: 90,
  description: "Stainless steel Submariner with vibrant blue dial and matching bezel. A bold everyday piece with a clean ocean-inspired look.",
  images: ["submariner_blue_main.jpeg"],
  stock: 5,
  reviews: 126,
  sold: 36,
  category: "diver",
  badge: "Best Seller"
},
"datejust_mop_diamond": {
  id: "datejust_mop_diamond",
  name: "Mother of Pearl Diamond Datejust",
  price: 90,
  description: "Elegant Datejust featuring a mother of pearl dial with diamond hour markers. A clean luxury piece with subtle shine and premium presence.",
  images: ["datejust_mop_diamond_main.jpeg"],
  stock: 3,
  reviews: 112,
  sold: 27,
  category: "classic",
  badge: "Only 3 Left"
},
"gmt_pepsi_ice": {
    id: "gmt_pepsi_ice",
    name: "Pepsi Ice Dial Traveler",
    price: 90,
    description: "Premium GMT with rare ice-textured dial and iconic red/blue bezel. Built for standout presence and everyday flex.",
    images: ["gmt_pepsi_ice_main.jpeg"],
    stock: 3,
    reviews: 138,
    sold: 41,
    category: "traveler",
    badge: "HOT"
},
"sub_tt_blue": {
    id: "sub_tt_blue",
    name: "Blue Two-Tone Submariner",
    price: 90,
    description: "Bold two-tone Submariner featuring a deep blue dial and bezel with gold accents. A statement diver built for luxury and everyday wear.",
    images: ["sub_tt_blue_main.jpeg"],
    stock: 4,
    reviews: 121,
    sold: 33,
    category: "diver",
    badge: "HOT"
},
"datejust_silver_fluted": {
    id: "datejust_silver_fluted",
    name: "Silver Fluted Datejust",
    price: 90,
    description: "Clean silver sunburst dial paired with a fluted bezel and jubilee bracelet. A timeless everyday luxury piece with a sharp, refined look.",
    images: ["datejust_silver_fluted_main.jpeg"],
    stock: 5,
    reviews: 96,
    sold: 24,
    category: "classic",
    badge: "POPULAR"
},
"datejust_twotone_pearl_diamond": {
  id: "datejust_twotone_pearl_diamond",
  name: "Two-Tone Diamond Datejust Pearl",
  price: 90,
  description: "Luxury two-tone Datejust featuring a mother of pearl dial with diamond hour markers. A bold yet elegant piece with gold accents and premium shine.",
  images: ["datejust_twotone_pearl_diamond_main.jpeg"],
  stock: 3,
  reviews: 118,
  sold: 29,
  category: "classic",
  badge: "Premium Pick"
},
"datejust_wimbledon_roman": {
  id: "datejust_wimbledon_roman",
  name: "Wimbledon Roman Datejust",
  price: 90,
  description: "Iconic Wimbledon-style Datejust featuring a slate dial with green Roman numerals. A unique blend of sport and elegance with a signature luxury look.",
  images: ["datejust_wimbledon_roman_main.jpeg"],
  stock: 4,
  reviews: 96,
  sold: 24,
  category: "classic",
  badge: "Bestseller"
},
"explorer2_polar": {
    id: "explorer2_polar",
    name: "Explorer II Polar Dial",
    price: 90,
    description: "Clean white polar dial with bold black markers and signature orange GMT hand. A rugged luxury traveler with a sharp everyday look.",
    images: ["explorer2_polar_main.jpeg"],
    stock: 4,
    reviews: 94,
    sold: 22,
    category: "traveler",
    badge: "Popular"
},
"moissanite_arabic_iced_silver": {
    id: "moissanite_arabic_iced_silver",
    name: "Moissanite Arabic Dial Iced Silver",
    price: 600,
    description: "Fully iced luxury timepiece featuring hand-set moissanite stones across the bezel, case, and bracelet. Finished with a unique Arabic numeral dial for a bold and standout look.",
    images: ["moissanite_arabic_iced_silver_main.jpeg"],
    stock: 2,
    reviews: 68,
    sold: 12,
    category: "moissanite",
    badge: "Premium"
},
"moissanite_skeleton_iced_silver": {
    id: "moissanite_skeleton_iced_silver",
    name: "Moissanite Skeleton Iced Silver",
    price: 600,
    description: "Fully iced luxury timepiece featuring a skeleton dial that showcases the inner movement. Hand-set moissanite stones across the entire case and bracelet deliver unmatched shine and a true high-end presence.",
    images: ["moissanite_skeleton_iced_silver_main.jpeg"],
    stock: 1,
    reviews: 52,
    sold: 8,
    category: "moissanite",
    badge: "Premium"
},
"moissanite_roman_iced_silver": {
    id: "moissanite_roman_iced_silver",
    name: "Moissanite Roman Dial Iced Silver",
    price: 600,
    description: "Fully iced luxury timepiece featuring a classic Roman numeral dial with hand-set moissanite stones across the case and bracelet. A perfect balance of timeless elegance and bold shine.",
    images: ["moissanite_roman_iced_silver_main.jpeg", "moissanite_roman_iced_silver_1.jpeg"],
    stock: 1,
    reviews: 61,
    sold: 9,
    category: "moissanite",
    badge: "Premium"
},
"moissanite_skeleton_iced_black": {
    id: "moissanite_skeleton_iced_black",
    name: "Moissanite Skeleton Iced Black Edition",
    price: 600,
    description: "Fully iced skeleton timepiece featuring a deep black dial with visible mechanical movement and hand-set moissanite stones throughout the case and bracelet. Built for maximum presence and luxury.",
    images: ["moissanite_skeleton_iced_black_main.jpeg", "moissanite_skeleton_iced_black_1.jpeg"],
    stock: 1,
    reviews: 47,
    sold: 6,
    category: "moissanite",
    badge: "Elite"
},
"moissanite_arabic_rose_iced": {
    id: "moissanite_arabic_rose_iced",
    name: "Moissanite Arabic Rose Gold Edition",
    price: 600,
    description: "Fully iced rose gold timepiece featuring Arabic numeral dial and hand-set moissanite stones throughout. A perfect blend of elegance and bold luxury with a warm premium finish.",
    images: ["moissanite_arabic_rose_iced_main.jpeg"],
    stock: 2,
    reviews: 58,
    sold: 9,
    category: "moissanite",
    badge: "Trending"
},
"moissanite_bustdown_classic_silver": {
    id: "moissanite_bustdown_classic_silver",
    name: "Moissanite Bustdown Classic Silver",
    price: 600,
    description: "Fully iced classic timepiece featuring a clean dial with hand-set moissanite stones across the entire case and bracelet. A timeless luxury design built for shine and everyday flex.",
    images: ["moissanite_bustdown_classic_silver_main.jpeg", "moissanite_bustdown_classic_silver_1.jpeg"],
    stock: 2,
    reviews: 63,
    sold: 11,
    category: "moissanite",
    badge: "Luxury"
},
"moissanite_crown_thorns_iced": {
    id: "moissanite_crown_thorns_iced",
    name: "Moissanite Crown of Thorns Edition",
    price: 650,
    description: "Extremely detailed iced timepiece featuring a crown of thorns design wrapped around a fully moissanite-set case and bracelet. A bold statement piece built for those who want unmatched presence and unique luxury.",
    images: [
        "moissanite_crown_thorns_iced_main.jpeg",
        "moissanite_crown_thorns_iced_detail1.jpeg",
        "moissanite_crown_thorns_iced_back.jpeg"
    ],
    stock: 1,
    reviews: 21,
    sold: 3,
    category: "moissanite",
    badge: "Top Tier"
},
   "royal_oak_blue_classic": {
  id: "royal_oak_blue_classic",
  name: "Blue Dial Royal Oak",
  price: 110,
  description: "Iconic Royal Oak design featuring a textured blue dial and brushed stainless steel finish. Clean, timeless, and built for everyday luxury.",
  images: ["royal_oak_blue_classic_main.jpeg"],
  stock: 3,
  reviews: 38,
  sold: 16,
  category: "royal_oak",
  badge: "Luxury Classic"
},
   "royal_oak_black_classic": {
  id: "royal_oak_black_classic",
  name: "Black Dial Royal Oak",
  price: 110,
  description: "Clean black textured dial paired with brushed stainless steel Royal Oak design. A sleek, versatile luxury piece built for everyday wear.",
  images: ["royal_oak_black_classic_main.jpeg"],
  stock: 3,
  reviews: 34,
  sold: 14,
  category: "royal_oak",
  badge: "Luxury Classic"
},
   "royal_oak_white_classic": {
  id: "royal_oak_white_classic",
  name: "White Dial Royal Oak",
  price: 110,
  description: "Crisp white textured dial paired with a brushed stainless steel Royal Oak design. Clean, minimal, and effortlessly premium.",
  images: ["royal_oak_white_classic_main.jpeg", "royal_oak_white_classic_1.jpeg", "royal_oak_white_classic_2.jpeg"],
  stock: 3,
  reviews: 31,
  sold: 12,
  category: "royal_oak",
  badge: "Luxury Classic"
},
   "royal_oak_grey_classic": {
  id: "royal_oak_grey_classic",
  name: "Grey Dial Royal Oak",
  price: 110,
  description: "Refined grey textured dial paired with the iconic brushed stainless steel Royal Oak design. A perfect balance between bold and minimal.",
  images: ["royal_oak_grey_classic_main.jpeg", "royal_oak_grey_classic_1.jpeg", "royal_oak_grey_classic_2.jpeg"],
  stock: 3,
  reviews: 29,
  sold: 11,
  category: "royal_oak",
  badge: "Luxury Classic"
},
   "royal_oak_gold_blue": {
  id: "royal_oak_gold_blue",
  name: "Gold Blue Royal Oak",
  price: 110,
  description: "Bold gold finish paired with a deep blue textured dial. A statement Royal Oak built for those who want standout luxury with timeless design.",
  images: ["royal_oak_gold_blue_main.jpeg"],
  stock: 2,
  reviews: 22,
  sold: 9,
  category: "royal_oak",
  badge: "Premium Pick"
},
   "royal_oak_gold_black": {
  id: "royal_oak_gold_black",
  name: "Gold Black Royal Oak",
  price: 110,
  description: "Striking gold finish paired with a deep black textured dial. A bold Royal Oak built for a sleek and powerful luxury look.",
  images: ["royal_oak_gold_black_main.jpeg"],
  stock: 2,
  reviews: 24,
  sold: 10,
  category: "royal_oak",
  badge: "Premium Pick"
},
   "royal_oak_gold_white": {
  id: "royal_oak_gold_white",
  name: "Gold White Royal Oak",
  price: 110,
  description: "Elegant gold finish paired with a crisp white textured dial. A refined Royal Oak designed for a clean and luxurious everyday look.",
  images: ["royal_oak_gold_white_main.jpeg"],
  stock: 2,
  reviews: 20,
  sold: 8,
  category: "royal_oak",
  badge: "Premium Pick"
},
"royal_oak_rose_gold_leather": {
  id: "royal_oak_rose_gold_leather",
  name: "Rose Gold Leather Royal Oak",
  price: 110,
  description: "Elegant rose gold Royal Oak paired with a premium brown leather strap and crisp white textured dial. A refined take on classic luxury.",
  images: ["royal_oak_rose_gold_leather_main.jpeg"],
  stock: 2,
  reviews: 18,
  sold: 7,
  category: "royal_oak",
  badge: "Premium Pick"
},
"royal_oak_two_tone_rose": {
  id: "royal_oak_two_tone_rose",
  name: "Two-Tone Rose Gold Royal Oak",
  price: 110,
  description: "A refined two-tone Royal Oak featuring brushed stainless steel paired with rose gold accents and a clean white textured dial. Perfect balance of bold and classic.",
  images: ["royal_oak_two_tone_rose_main.jpeg"],
  stock: 2,
  reviews: 19,
  sold: 8,
  category: "royal_oak",
  badge: "Premium Pick"
},
   "cartier_santos_silver_white": {
  id: "cartier_santos_silver_white",
  name: "Cartier Santos Silver White Dial",
  price: 120,
  description: "Iconic Cartier Santos design featuring a clean white dial with bold Roman numerals and signature blue hands. Finished with a brushed stainless steel case and screw bracelet for a modern luxury look.",
  images: ["cartier_santos_silver_white_main.jpeg"],
  stock: 3,
  reviews: 32,
  sold: 14,
  category: "cartier",
  badge: "Timeless"
},
   "cartier_santos_silver_blue": {
  id: "cartier_santos_silver_blue",
  name: "Cartier Santos Blue Dial",
  price: 120,
  description: "Iconic Cartier Santos design featuring a deep blue sunburst dial with bold Roman numerals and polished steel finish. A perfect mix of modern luxury and timeless design.",
  images: ["cartier_santos_silver_blue_main.jpeg"],
  stock: 3,
  reviews: 36,
  sold: 15,
  category: "cartier",
  badge: "Hot"
},
   "cartier_santos_gold_white": {
  id: "cartier_santos_gold_white",
  name: "Cartier Santos Gold White Dial",
  price: 120,
  description: "Full gold Cartier Santos featuring a clean white dial with bold Roman numerals and signature blue hands. A high-impact luxury piece built to stand out with timeless elegance.",
  images: ["cartier_santos_gold_white_main.jpeg"],
  stock: 2,
  reviews: 28,
  sold: 11,
  category: "cartier",
  badge: "Premium"
},
   "cartier_santos_silver_green": {
  id: "cartier_santos_silver_green",
  name: "Cartier Santos Green Dial",
  price: 120,
  description: "Modern Cartier Santos design featuring a rich green sunburst dial, bold Roman numerals, and polished stainless steel finish. A sharp luxury piece with standout color and timeless style.",
  images: ["cartier_santos_silver_green_main.jpeg"],
  stock: 3,
  reviews: 30,
  sold: 12,
  category: "cartier",
  badge: "Hot"
},
  "patek_nautilus_tiffany_blue": {
  id: "patek_nautilus_tiffany_blue",
  name: "Patek Nautilus Tiffany Blue 5711",
  price: 90,
  description: "Iconic Nautilus design featuring the rare Tiffany blue dial with horizontal texture, sleek stainless steel case, and integrated bracelet. A bold luxury statement piece known for its exclusivity and clean aesthetic.",
  images: ["patek_nautilus_tiffany_blue_main.jpeg"],
  stock: 2,
  reviews: 18,
  sold: 9,
  category: "patek",
  badge: "Hot"
},
  "patek_nautilus_white_dial": {
  id: "patek_nautilus_white_dial",
  name: "Patek Nautilus White Dial 5711",
  price: 90,
  description: "Clean Nautilus design featuring a crisp white horizontal textured dial, polished stainless steel case, and integrated bracelet. A minimal yet powerful luxury piece known for its timeless look and versatility.",
  images: ["patek_nautilus_white_dial_main.jpeg"],
  stock: 3,
  reviews: 14,
  sold: 7,
  category: "patek",
  badge: "Classic"
},
  "patek_nautilus_black_dial": {
  id: "patek_nautilus_black_dial",
  name: "Patek Nautilus Black Dial 5711",
  price: 90,
  description: "Classic Nautilus design featuring a deep black horizontal textured dial, polished stainless steel case, and integrated bracelet. A timeless luxury piece with a bold and versatile look.",
  images: ["patek_nautilus_black_dial_main.jpeg"],
  stock: 4,
  reviews: 22,
  sold: 11,
  category: "patek",
  badge: "Best Seller"
},
};
const $ = (s, el=document) => el.querySelector(s);
const $$ = (s, el=document) => [...el.querySelectorAll(s)];
const money = n => `$${Number(n).toLocaleString()}`;
const allProducts = Object.values(products);
const featured = allProducts.slice(0, 8);
let currentFilter = 'all';
let currentQty = 1;
let currentImage = 0;

function getCart(){try{return JSON.parse(localStorage.getItem('eliteTimeCart')||'[]')}catch{return []}}
function saveCart(cart){localStorage.setItem('eliteTimeCart',JSON.stringify(cart));updateCartCount()}
function updateCartCount(){const count=getCart().reduce((a,i)=>a+i.qty,0); const el=$('#cartCount'); if(el) el.textContent=count}
function toast(msg){const t=$('#toast'); t.textContent=msg; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),1900)}
function addToCart(id,qty=1){const p=products[id]; if(!p)return; const cart=getCart(); const item=cart.find(i=>i.id===id); if(item)item.qty+=qty; else cart.push({id,qty}); saveCart(cart); toast(`${p.name} added to cart`)}
function setRoute(path){location.hash=path}
function route(){const hash=location.hash.replace('#','')||'/'; window.scrollTo(0,0); if(hash.startsWith('/product/')) return renderProduct(hash.split('/')[2]); if(hash==='/shop')return renderShop(); if(hash==='/cart')return renderCart(); if(hash==='/checkout')return renderCheckout(); if(hash==='/premium')return renderInfo('Premium Quality','fa-gem','Premium feel without the confusing luxury markup. Every piece is selected for wrist presence, finish, and everyday wear.',[['⚖️','Substantial weight','A confident feel on-wrist that does not feel cheap or hollow.'],['✨','Polished finish','Clean case and bracelet finishing with standout shine.'],['🔒','Secure clasp','Smooth locking clasp made for daily wear.'],['🕐','Reliable movement','Simple accurate quartz movement for easy ownership.']]); if(hash==='/shipping')return renderInfo('Shipping','fa-truck-fast','Orders are confirmed, packed, and updated with direct communication from Elite Time.',[['📦','Order confirmation','Every order is confirmed within 24 hours.'],['🚀','Fast dispatch','Orders are prepared after payment confirmation.'],['📬','Tracking updates','You receive tracking as soon as it is available.'],['💬','Direct communication','Questions get handled directly and quickly.']]); if(hash==='/secure')return renderInfo('Secure Orders','fa-shield-halved','Private, direct, and simple ordering with clear checkout steps.',[['🔐','Private information','Your personal details are never shared or sold.'],['💳','Trusted payment','Cash App and Zelle options are available.'],['🧾','Clear invoice','Every order shows a full breakdown before completion.'],['🤝','No confusion','You work directly with Elite Time.']]); if(hash==='/support')return renderSupport(); return renderHome()}
function navActive(){closeDrawer(); updateCartCount()}

function card(p){return `<a class="product-card" href="#/product/${p.id}"><div class="product-image"><img src="${p.images[0]}" alt="${p.name}"></div><span class="badge">${p.badge||'Elite'}</span><div class="product-info-card"><div class="product-title">${p.name}</div><div class="product-meta"><span>${p.category||'watch'} • ${p.stock} left</span><strong class="price">${money(p.price)}</strong></div></div></a>`}

function renderHome(){
  const premium = allProducts.filter(p=>['moissanite','royal_oak','patek'].includes(p.category)).slice(0,4);
  $('#app').innerHTML=`
  <section class="hero">
    <div class="hero-copy">
      <div>
        <div class="kicker">New Elite Time</div>
        <h1>Built for the wrist that <em>gets noticed.</em></h1>
        <p class="lead">A completely cleaner storefront for modern luxury-inspired timepieces — bold watch photos, easier navigation, softer cards, stronger contrast, and a more premium buying flow.</p>
        <div class="hero-buttons"><a class="btn primary" href="#/shop"><i class="fa-solid fa-arrow-right"></i> Shop the Collection</a><a class="btn ghost" href="#/premium">Why Elite Time</a></div>
      </div>
      <div class="stats"><div class="stat"><b>${allProducts.length}</b><span>Styles</span></div><div class="stat"><b>$90+</b><span>Starting price</span></div><div class="stat"><b>Direct</b><span>Support</span></div></div>
    </div>
    <div class="hero-media"><img src="${featured[0].images[0]}" alt="${featured[0].name}"><div class="hero-card"><div><small>Featured Piece</small><strong>${featured[0].name}</strong></div><a class="btn accent" href="#/product/${featured[0].id}">View</a></div></div>
  </section>
  <div class="marquee"><div class="marquee-track"><span>Fast Shipping</span><span>Secure Checkout</span><span>Premium Feel</span><span>Direct Support</span><span>Modern Luxury</span><span>Fast Shipping</span><span>Secure Checkout</span><span>Premium Feel</span><span>Direct Support</span><span>Modern Luxury</span></div></div>
  <section class="section"><div class="split-head"><div><div class="eyebrow">Best Sellers</div><h2>Clean pieces. Big presence.</h2><p class="section-sub">Your customer should instantly understand the watch, the price, and the vibe. No clutter.</p></div><a class="btn ghost" href="#/shop">View All</a></div><div class="product-grid">${featured.map(card).join('')}</div></section>
  <section class="section"><div class="feature-grid"><div class="feature-card dark"><h3>A real new direction.</h3><p>This is not the old dark-gold template. The rebuild uses cream, burgundy, dark teal, soft cards, editorial type, and big product-first layouts.</p><a class="btn accent" href="#/shop">Explore Watches</a></div><div class="feature-card"><h3>Simple buying.</h3><p>Product pages are focused around the image, details, stock, and add-to-cart with less noise.</p></div><div class="feature-card"><h3>Mobile ready.</h3><p>Cards, checkout, menu, and gallery collapse cleanly on phones.</p></div></div></section>
  <section class="section"><div class="split-head"><div><div class="eyebrow">Premium Picks</div><h2>Statement watches.</h2></div></div><div class="product-grid">${premium.map(card).join('')}</div></section>`;
}

function renderShop(){
  const cats=['all',...new Set(allProducts.map(p=>p.category).filter(Boolean))];
  const list=currentFilter==='all'?allProducts:allProducts.filter(p=>p.category===currentFilter);
  $('#app').innerHTML=`<section class="section"><div class="split-head"><div><div class="eyebrow">Shop All</div><h1 class="page-title">Every timepiece.</h1><p class="page-sub">Same exact product titles and image filenames — rebuilt into a cleaner single-page shopping experience.</p></div></div><div class="filter-bar">${cats.map(c=>`<button class="filter ${c===currentFilter?'active':''}" data-filter="${c}">${c.replaceAll('_',' ')}</button>`).join('')}</div><div class="product-grid">${list.map(card).join('')}</div></section>`;
  $$('.filter').forEach(b=>b.onclick=()=>{currentFilter=b.dataset.filter;renderShop()});
}

function renderProduct(id){
  const p=products[id]||allProducts[0]; currentQty=1; currentImage=0;
  $('#app').innerHTML=`<section class="product-page"><div><div class="gallery-main"><img id="mainImg" src="${p.images[0]}" alt="${p.name}"></div><div class="thumbs">${p.images.map((im,i)=>`<button class="thumb ${i===0?'active':''}" data-i="${i}"><img src="${im}" alt="${p.name} image ${i+1}"></button>`).join('')}</div></div><aside class="buy-panel"><div class="eyebrow">${p.category||'Elite Time'}</div><h1>${p.name}</h1><div class="rating">★★★★★ <span style="color:var(--muted)">(${p.reviews||0} reviews)</span></div><p class="lead">${p.description}</p><div class="stock">${p.stock<=2?'Only ':''}${p.stock} left in stock</div><div class="price" style="font-size:42px;margin-top:16px">${money(p.price)}</div><div class="qty-row"><button id="minus">−</button><span id="qty">1</span><button id="plus">+</button></div><div class="actions"><button class="btn primary" id="addBtn"><i class="fa-solid fa-bag-shopping"></i> Add to Cart</button><a class="btn ghost" href="#/cart">View Cart</a></div><div class="info-list"><div class="info-item"><strong>Premium finish</strong><br><span style="color:var(--muted)">Clean case, bracelet, and dial presence.</span></div><div class="info-item"><strong>Direct checkout</strong><br><span style="color:var(--muted)">Cash App / Zelle order flow.</span></div></div></aside></section><section class="section"><div class="eyebrow">You may also like</div><h2>More from the collection.</h2><div class="product-grid">${allProducts.filter(x=>x.id!==p.id).slice(0,4).map(card).join('')}</div></section>`;
  $$('.thumb').forEach(btn=>btn.onclick=()=>{$$('.thumb').forEach(x=>x.classList.remove('active'));btn.classList.add('active');$('#mainImg').src=p.images[+btn.dataset.i]});
  $('#minus').onclick=()=>{currentQty=Math.max(1,currentQty-1);$('#qty').textContent=currentQty};
  $('#plus').onclick=()=>{currentQty=Math.min(p.stock,currentQty+1);$('#qty').textContent=currentQty};
  $('#addBtn').onclick=()=>addToCart(p.id,currentQty);
}

function renderCart(){
  const cart=getCart(); const rows=cart.map(i=>({...i,p:products[i.id]})).filter(i=>i.p); const subtotal=rows.reduce((a,i)=>a+i.p.price*i.qty,0);
  $('#app').innerHTML=`<section class="cart-page"><div class="eyebrow">Your Bag</div><h1 class="page-title">Cart</h1>${rows.length?`<div class="cart-list">${rows.map(i=>`<div class="cart-item"><img src="${i.p.images[0]}" alt="${i.p.name}"><div><h3>${i.p.name}</h3><div style="color:var(--muted)">${money(i.p.price)} × ${i.qty}</div></div><div><strong class="price">${money(i.p.price*i.qty)}</strong><br><button class="remove-btn" data-id="${i.id}">Remove</button></div></div>`).join('')}</div><div class="cart-summary"><div class="summary-row"><span>Subtotal</span><strong>${money(subtotal)}</strong></div><div class="summary-row"><span>Shipping</span><strong>Free</strong></div><div class="summary-row total"><span>Total</span><strong>${money(subtotal)}</strong></div><div class="actions"><a class="btn primary" href="#/checkout">Proceed to Checkout</a><a class="btn ghost" href="#/shop">Keep Shopping</a></div></div>`:`<div class="empty"><h2>Your cart is empty.</h2><p class="page-sub" style="margin:auto">Add a watch to start checkout.</p><a class="btn primary" href="#/shop">Shop Watches</a></div>`}</section>`;
  $$('.remove-btn').forEach(b=>b.onclick=()=>{saveCart(getCart().filter(i=>i.id!==b.dataset.id));renderCart()});
}

function renderCheckout(){
  const cart=getCart().map(i=>({...i,p:products[i.id]})).filter(i=>i.p); const total=cart.reduce((a,i)=>a+i.p.price*i.qty,0);
  $('#app').innerHTML=`<section class="checkout-page"><div class="eyebrow">Secure Checkout</div><h1 class="page-title">Finish your order.</h1><div class="checkout-grid"><div class="checkout-card"><h2>Shipping Info</h2><div class="form-grid"><label>Full Name<input id="name" placeholder="John Doe"></label><label>Email<input id="email" placeholder="you@example.com"></label><label>Phone<input id="phone" placeholder="(555) 555-5555"></label><label>Street Address<input id="address" placeholder="123 Main Street"></label><div class="form-row"><label>City<input id="city" placeholder="Austin"></label><label>State<input id="state" placeholder="TX"></label></div><label>ZIP Code<input id="zip" placeholder="78701"></label></div></div><div class="checkout-card"><h2>Order Summary</h2>${cart.length?cart.map(i=>`<div class="summary-row"><span>${i.p.name} × ${i.qty}</span><strong>${money(i.p.price*i.qty)}</strong></div>`).join(''):'<p>Your cart is empty.</p>'}<div class="summary-row total"><span>Total</span><strong>${money(total)}</strong></div><h3>Payment</h3><div class="payment-option">Cash App</div><div class="payment-option">Zelle</div><button class="btn primary" id="placeOrder" style="width:100%;justify-content:center;margin-top:12px">Complete Order</button></div></div></section>`;
  $('#placeOrder').onclick=()=>{if(!cart.length)return toast('Your cart is empty'); toast('Order info saved — contact Elite Time to confirm payment'); localStorage.removeItem('eliteTimeCart'); updateCartCount(); setTimeout(()=>setRoute('/'),900)};
}

function renderInfo(title,icon,sub,items){
  $('#app').innerHTML=`<section class="info-page"><div class="info-box"><div class="kicker"><i class="fa-solid ${icon}"></i> Elite Time</div><h1>${title}</h1><p class="lead">${sub}</p><div class="info-list">${items.map(i=>`<div class="info-item"><strong>${i[0]} ${i[1]}</strong><br><span style="color:var(--muted)">${i[2]}</span></div>`).join('')}</div><div class="actions"><a class="btn primary" href="#/shop">Shop Watches</a><a class="btn ghost" href="#/support">Contact Support</a></div></div></section>`;
}

function renderSupport(){
  $('#app').innerHTML=`<section class="info-page"><div class="info-box"><div class="kicker"><i class="fa-solid fa-headset"></i> Direct Support</div><h1>Talk to a real person.</h1><p class="lead">Need sizing help, order questions, or want to check availability? Reach out directly.</p><div class="info-list"><div class="info-item"><strong>📧 Email Support</strong><br><span style="color:var(--muted)">Send a message and get a direct response.</span></div><div class="info-item"><strong>📲 Instagram</strong><br><span style="color:var(--muted)">Fast direct messages for product questions.</span></div><div class="info-item"><strong>📦 Order Help</strong><br><span style="color:var(--muted)">Questions about shipping, tracking, and checkout.</span></div></div><div class="actions"><a class="btn primary" href="mailto:Natemathew07@gmail.com?subject=Support Request - Elite Time&body=Hey Elite Time,%0D%0A%0D%0AName:%0D%0AQuestion:%0D%0A%0D%0AThanks."><i class="fa-solid fa-envelope"></i>Email Support</a><a class="btn ghost" href="https://instagram.com/Skidz7722" target="_blank"><i class="fa-brands fa-instagram"></i>Instagram</a></div></div></section>`;
}

function openDrawer(){ $('#drawer').classList.add('open'); $('#drawerBackdrop').classList.add('open'); document.body.classList.add('lock')}
function closeDrawer(){ $('#drawer').classList.remove('open'); $('#drawerBackdrop').classList.remove('open'); document.body.classList.remove('lock')}

window.addEventListener('hashchange',()=>{route();navActive()});
$('#themeBtn').onclick=()=>{document.body.classList.toggle('dark');localStorage.setItem('eliteTheme',document.body.classList.contains('dark')?'dark':'light')};
$('#menuBtn').onclick=openDrawer; $('#closeDrawer').onclick=closeDrawer; $('#drawerBackdrop').onclick=closeDrawer; $$('#drawer a').forEach(a=>a.onclick=closeDrawer);
if(localStorage.getItem('eliteTheme')==='dark')document.body.classList.add('dark');
updateCartCount(); route();
