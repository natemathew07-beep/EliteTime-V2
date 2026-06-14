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

const routes = ["home","products","product","cart","checkout","premium","shipping","secure","support"];
const app = document.getElementById("app");
const money = n => `$${Number(n || 0).toLocaleString()}`;
const productList = () => Object.values(products);
const byCategory = cat => productList().filter(p => p.category === cat);

function routeParts(){
  const raw = location.hash.replace(/^#/, "") || "home";
  const [page, id] = raw.split("/");
  return { page: routes.includes(page) ? page : "home", id };
}
function go(hash){ location.hash = hash; }
function setTitle(title){ document.title = `${title} — Elite Time`; }
function scrollTop(){ window.scrollTo({top:0,behavior:"instant"}); }

function getCart(){
  try { return JSON.parse(localStorage.getItem("eliteTimeCart")) || []; } catch { return []; }
}
function saveCart(cart){ localStorage.setItem("eliteTimeCart", JSON.stringify(cart)); updateCartCount(); }
function updateCartCount(){
  const count = getCart().reduce((a,i)=>a+(Number(i.quantity)||1),0);
  document.querySelectorAll(".cart-count").forEach(el=>{el.textContent=count||"";el.style.display=count?"flex":"none";});
}
function addToCart(id){
  const cart=getCart(); const item=cart.find(i=>i.id===id);
  if(item) item.quantity += 1; else cart.push({id,quantity:1,boxKit:false});
  saveCart(cart); toast(`${products[id]?.name || "Watch"} added to cart`); openUpsell(id);
}
function changeQty(id,delta){
  let cart=getCart(); const item=cart.find(i=>i.id===id); if(!item) return;
  item.quantity += delta; if(item.quantity<=0) cart=cart.filter(i=>i.id!==id);
  saveCart(cart); render();
}
function removeItem(id){ saveCart(getCart().filter(i=>i.id!==id)); render(); }
function toggleBox(id){ const cart=getCart(); const item=cart.find(i=>i.id===id); if(item){ item.boxKit=!item.boxKit; saveCart(cart); render(); } }
function cartTotals(){
  let total=0, lines=[];
  getCart().forEach(item=>{ const p=products[item.id]; if(!p) return; const box=item.boxKit ? 35*(item.quantity||1) : 0; const line=(p.price*(item.quantity||1))+box; total+=line; lines.push({item,p,line,box}); });
  return {total,lines};
}
function toast(msg){ const el=document.getElementById("toast"); el.textContent=msg; el.classList.add("show"); clearTimeout(window.__toast); window.__toast=setTimeout(()=>el.classList.remove("show"),1900); }

function card(p){
  return `<a href="#product/${p.id}" data-link class="watch-card" data-category="${p.category}">
    <div class="watch-img"><img src="${p.images[0]}" alt="${p.name}" loading="lazy" onerror="this.closest('.watch-card').classList.add('missing-image')"></div>
    <div class="watch-body">
      ${p.badge?`<span class="badge">${p.badge}</span>`:""}
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <div class="watch-meta"><span class="stars">★★★★★ ${p.reviews}</span><span class="price">${money(p.price)}</span></div>
    </div>
  </a>`;
}
function footer(){return `<footer class="footer"><div class="container"><span>© ${new Date().getFullYear()} Elite Time. All rights reserved.</span><span>Secure checkout · Direct support · Fast dispatch</span></div></footer>`}
function home(){
  const featured=productList()[0]; const best=productList().slice(0,6); const premium=productList().filter(p=>p.category==="moissanite" || p.price>=600).slice(0,3);
  setTitle("Luxury Timepieces");
  app.innerHTML = `<section class="hero container">
    <div class="hero-copy"><p class="eyebrow">The Elite Time Collection</p><h1>Luxury feel. <em>Everyday flex.</em></h1><p>Modern luxury-inspired watches curated for presence, weight, shine, and clean everyday style. Shop fast, navigate easy, and find your signature piece.</p><div class="hero-actions"><a class="btn primary" href="#products" data-link>Shop Collection <i class="fa-solid fa-arrow-right"></i></a><a class="btn" href="#premium" data-link>View Premium</a></div></div>
    <div class="hero-visual"><div class="hero-frame"><img src="${featured.images[0]}" alt="${featured.name}"></div><div class="float-card"><span>Featured Piece</span><strong>${featured.name}</strong></div></div>
  </section>
  <div class="container trust-strip"><div class="trust-pill"><i class="fa-solid fa-truck-fast"></i> Fast dispatch</div><div class="trust-pill"><i class="fa-solid fa-shield-halved"></i> Secure orders</div><div class="trust-pill"><i class="fa-solid fa-headset"></i> Direct support</div><div class="trust-pill"><i class="fa-solid fa-gem"></i> Premium feel</div></div>
  <section class="section container"><div class="section-head"><div><p class="eyebrow">Best Sellers</p><h2 class="section-title">Most <em>Wanted</em></h2><p class="section-sub">Clean, bold, easy-to-wear watches that get picked first.</p></div><a class="btn" href="#products" data-link>View all</a></div><div class="products-grid">${best.map(card).join("")}</div></section>
  <section class="section container"><div class="banner"><div><p class="eyebrow">Premium Collection</p><h2 class="section-title">Moissanite shine, <em>maximum presence.</em></h2><p class="section-sub">Fully iced pieces with serious light play and standout energy.</p></div><a class="btn primary" href="#premium" data-link>Explore Premium</a></div></section>
  <section class="section container"><div class="feature-grid"><div class="feature-card"><i class="fa-solid fa-circle-check"></i><h3>Simple Shopping</h3><p>One clean site, easy filters, fast product pages, and a smooth cart.</p></div><div class="feature-card"><i class="fa-solid fa-box"></i><h3>Careful Packing</h3><p>Orders are confirmed, packed, and handled with care from start to finish.</p></div><div class="feature-card"><i class="fa-solid fa-comments"></i><h3>Human Support</h3><p>Questions before or after purchase? Reach us directly without the runaround.</p></div></div></section>${footer()}`;
}
function productsPage(filter="all"){
  setTitle("All Watches");
  const cats=["all",...new Set(productList().map(p=>p.category))];
  const items = filter==="all" ? productList() : byCategory(filter);
  app.innerHTML = `<section class="page-hero container"><p class="eyebrow">The Collection</p><h1 class="page-title">All <em>Timepieces</em></h1><p class="page-sub">Browse every Elite Time piece without jumping across a bunch of pages.</p><div class="filter-row">${cats.map(c=>`<button class="filter-btn ${c===filter?'active':''}" data-filter="${c}">${label(c)}</button>`).join("")}</div></section><section class="container"><div class="products-grid" id="productsGrid">${items.map(card).join("")}</div></section>${footer()}`;
  document.querySelectorAll(".filter-btn").forEach(b=>b.onclick=()=>productsPage(b.dataset.filter));
}
function productPage(id){
  const p=products[id] || productList()[0]; setTitle(p.name);
  const related=productList().filter(x=>x.id!==p.id && x.category===p.category).slice(0,3);
  app.innerHTML = `<section class="product-layout container"><div><div class="gallery-main"><img id="mainImg" src="${p.images[0]}" alt="${p.name}"></div><div class="thumbs">${p.images.map((img,i)=>`<img class="${i===0?'active':''}" src="${img}" alt="${p.name}" data-img="${img}" onerror="this.remove()">`).join("")}</div></div><aside class="product-panel"><p class="eyebrow">Elite Time Collection</p><h1>${p.name}</h1><div><span class="stars">★★★★★</span> <span class="muted">${p.reviews} reviews · ${p.sold} sold</span></div><p class="page-sub">${p.description}</p><span class="stock">Only ${p.stock} left in stock</span><div class="product-price">${money(p.price)}</div><div class="specs"><div class="spec"><strong>Category</strong>${label(p.category)}</div><div class="spec"><strong>Finish</strong>Premium feel</div><div class="spec"><strong>Support</strong>Direct help</div><div class="spec"><strong>Shipping</strong>Fast dispatch</div></div><button class="btn primary full" id="addBtn"><i class="fa-solid fa-bag-shopping"></i>Add to Cart</button><a class="btn full" href="#cart" data-link style="margin-top:10px">View Cart</a></aside></section><section class="section container"><div class="section-head"><div><p class="eyebrow">You May Also Like</p><h2 class="section-title">Similar <em>Pieces</em></h2></div></div><div class="products-grid">${related.map(card).join("")}</div></section>${footer()}`;
  document.getElementById("addBtn").onclick=()=>addToCart(p.id);
  document.querySelectorAll(".thumbs img").forEach(t=>t.onclick=()=>{document.getElementById("mainImg").src=t.dataset.img;document.querySelectorAll('.thumbs img').forEach(x=>x.classList.remove('active'));t.classList.add('active')});
}
function cartPage(){
  setTitle("Cart"); const {total,lines}=cartTotals();
  app.innerHTML = `<section class="page-hero container"><p class="eyebrow">Your Cart</p><h1 class="page-title">Review <em>Your Pieces</em></h1><p class="page-sub">Adjust quantity, add a watch box kit, or head to checkout.</p></section><section class="container">${!lines.length?`<div class="empty"><h2>Your cart is empty.</h2><p>Find a piece that fits your wrist.</p><a href="#products" data-link class="btn primary">Shop Watches</a></div>`:`<div class="cart-list">${lines.map(({item,p,line})=>`<div class="cart-item"><img src="${p.images[0]}" alt="${p.name}"><div><h3>${p.name}</h3><p class="muted">${money(p.price)} each</p><div class="qty-row"><button class="qty-btn" data-minus="${p.id}">−</button><strong>${item.quantity}</strong><button class="qty-btn" data-plus="${p.id}">+</button></div>${p.category!=="moissanite"?`<label class="box-row"><input type="checkbox" ${item.boxKit?'checked':''} data-box="${p.id}"> Add Watch Box Kit +$35</label>`:`<div class="box-row">Box & papers included</div>`}</div><div><strong>${money(line)}</strong><br><button class="remove-btn" data-remove="${p.id}"><i class="fa-solid fa-xmark"></i></button></div></div>`).join("")}</div><div class="cart-total"><div><p class="eyebrow">Total</p><h2>${money(total)}</h2></div><a class="btn primary" href="#checkout" data-link>Secure Checkout</a></div>`}</section>${footer()}`;
  document.querySelectorAll('[data-plus]').forEach(b=>b.onclick=()=>changeQty(b.dataset.plus,1)); document.querySelectorAll('[data-minus]').forEach(b=>b.onclick=()=>changeQty(b.dataset.minus,-1)); document.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>removeItem(b.dataset.remove)); document.querySelectorAll('[data-box]').forEach(b=>b.onchange=()=>toggleBox(b.dataset.box));
}
function checkoutPage(){
  setTitle("Checkout"); const {total,lines}=cartTotals();
  app.innerHTML = `<section class="page-hero container"><p class="eyebrow">Secure Checkout</p><h1 class="page-title">Complete <em>Your Order</em></h1><p class="page-sub">Fill out your shipping details and choose Cash App or Zelle.</p></section><section class="checkout-layout container"><div class="checkout-card"><div class="form-grid"><div><label>Full Name</label><input id="fullName" placeholder="John Doe"></div><div class="field-row"><div><label>Email</label><input id="email" type="email" placeholder="you@example.com"></div><div><label>Phone</label><input id="phone" placeholder="(555) 555-5555"></div></div><div><label>Street Address</label><input id="address" placeholder="123 Main Street"></div><div class="field-row"><div><label>City</label><input id="city" placeholder="Austin"></div><div><label>State</label><input id="state" placeholder="TX"></div></div><div><label>ZIP Code</label><input id="zip" placeholder="78701"></div><div><label>Payment Method</label><div class="payment-options"><div class="payment-option selected">Cash App</div><div class="payment-option">Zelle</div></div></div><button class="btn primary full" id="placeOrder">Place Order</button></div></div><aside class="summary-card"><p class="eyebrow">Order Summary</p>${lines.length?lines.map(({item,p,line})=>`<div class="summary-line"><span>${p.name} × ${item.quantity}${item.boxKit?`<br><small>Watch Box Kit included</small>`:""}</span><strong>${money(line)}</strong></div>`).join("")+`<div class="cart-total"><strong>Total</strong><h2>${money(total)}</h2></div>`:`<p class="muted">Your cart is empty.</p><a class="btn primary full" href="#products" data-link>Shop Watches</a>`}<p class="muted" style="margin-top:18px">After placing your order, your details are sent directly to Elite Time for confirmation.</p></aside></section><section class="confirmation container" id="confirmation" style="display:none"><div><div class="check"><i class="fa-solid fa-check"></i></div><h1 class="page-title">Order <em>Received</em></h1><p class="page-sub">Your order was submitted. Elite Time will reach out with payment and shipping confirmation.</p><a class="btn primary" href="#home" data-link>Back Home</a></div></section>${footer()}`;
  document.querySelectorAll('.payment-option').forEach(o=>o.onclick=()=>{document.querySelectorAll('.payment-option').forEach(x=>x.classList.remove('selected'));o.classList.add('selected')});
  const btn=document.getElementById('placeOrder'); if(btn) btn.onclick=placeOrder;
}
function placeOrder(){
  const ids=["fullName","email","phone","address","city","state","zip"]; const data=Object.fromEntries(ids.map(id=>[id,document.getElementById(id)?.value.trim()]));
  if(Object.values(data).some(v=>!v)){ alert("Please fill out all checkout fields."); return; }
  const {total,lines}=cartTotals(); if(!lines.length){ alert("Your cart is empty."); return; }
  const payment=document.querySelector('.payment-option.selected')?.textContent.trim() || "Not selected";
  const order_summary=lines.map(({item,p,line})=>`${p.name} x${item.quantity}${item.boxKit?" + Watch Box Kit":""} - ${money(line)}`).join("\n");
  const done=()=>{ localStorage.removeItem("eliteTimeCart"); updateCartCount(); document.querySelector('.checkout-layout').style.display='none'; document.getElementById('confirmation').style.display='grid'; scrollTop(); };
  if(window.emailjs){ try{ emailjs.init({publicKey:"aHDDu7LVJLkZQgGCh"}); emailjs.send("service_3whl1kl","template_j170iq5",{...data,payment_method:payment,order_summary,order_total:money(total)}).then(done).catch(()=>done()); }catch(e){ done(); } } else done();
}
function premiumPage(){
  setTitle("Premium"); const items=productList().filter(p=>p.category==="moissanite" || p.price>=600);
  app.innerHTML = `<section class="page-hero container"><p class="eyebrow">Premium Quality</p><h1 class="page-title">Heavy shine. <em>Clean presence.</em></h1><p class="page-sub">Premium picks focused on feel, finish, and standout style.</p></section><section class="container"><div class="products-grid">${items.map(card).join("")}</div></section><section class="section container"><div class="feature-grid"><div class="feature-card"><i class="fa-solid fa-weight-hanging"></i><h3>Substantial Weight</h3><p>A real wrist presence with a premium feel.</p></div><div class="feature-card"><i class="fa-solid fa-gem"></i><h3>High Shine</h3><p>Polished surfaces and iced options built to catch light.</p></div><div class="feature-card"><i class="fa-solid fa-lock"></i><h3>Secure Clasp</h3><p>Smooth, reliable wear for everyday flex.</p></div></div></section>${footer()}`;
}
function infoPage(type){
  const data={shipping:["Shipping","Orders are confirmed within 24 hours, packed carefully, and dispatched promptly after payment confirmation.","fa-truck-fast",["Order confirmation within 24 hours","Fast dispatch after payment confirmation","Tracking updates when available","Direct support for shipping questions"]],secure:["Secure Orders","Your personal details are handled with discretion and every order gets a clear breakdown.","fa-shield-halved",["Private customer details","Cash App and Zelle payment options","Direct order relationship","Clear order confirmation"]],support:["Direct Support","Real answers, fast replies, and help choosing the right watch.","fa-headset",["Text or email for quick help","Order questions handled directly","Pre-purchase help choosing a piece","Instagram support available"]]};
  const d=data[type]; setTitle(d[0]);
  app.innerHTML=`<section class="page-hero container"><p class="eyebrow">Elite Time</p><h1 class="page-title">${d[0].split(' ')[0]} <em>${d[0].split(' ').slice(1).join(' ')}</em></h1><p class="page-sub">${d[1]}</p></section><section class="container info-page-grid"><div class="info-card large"><i class="info-icon fa-solid ${d[2]}"></i><h3>${d[0]}</h3><p>${d[1]}</p><div class="info-list">${d[3].map(x=>`<div><strong>✓</strong> ${x}</div>`).join('')}</div><div class="button-row"><a class="btn primary" href="#products" data-link>Shop Watches</a><a class="btn" href="mailto:Natemathew07@gmail.com?subject=Elite Time Support">Email Support</a><a class="btn" target="_blank" href="https://instagram.com/Skidz7722">Instagram</a></div></div></section>${footer()}`;
}
function label(c){return String(c).replaceAll('_',' ').replace(/\b\w/g,m=>m.toUpperCase())}
function render(){
  const {page,id}=routeParts(); closeMenu(); scrollTop(); updateActiveNav(page);
  if(page==="home") home(); if(page==="products") productsPage(); if(page==="product") productPage(id); if(page==="cart") cartPage(); if(page==="checkout") checkoutPage(); if(page==="premium") premiumPage(); if(["shipping","secure","support"].includes(page)) infoPage(page);
}
function updateActiveNav(page){ document.querySelectorAll('.desktop-nav a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')===`#${page}`)); }
function initTheme(){ if(localStorage.eliteTimeTheme==='light') document.body.classList.add('light-mode'); document.getElementById('themeToggle').onclick=()=>{document.body.classList.toggle('light-mode'); localStorage.eliteTimeTheme=document.body.classList.contains('light-mode')?'light':'dark';}; }
function openMenu(){document.getElementById('mobileDrawer').classList.add('open');document.getElementById('drawerBackdrop').classList.add('open')}function closeMenu(){document.getElementById('mobileDrawer').classList.remove('open');document.getElementById('drawerBackdrop').classList.remove('open')}
function initShell(){ document.getElementById('menuToggle').onclick=openMenu; document.getElementById('menuClose').onclick=closeMenu; document.getElementById('drawerBackdrop').onclick=closeMenu; window.addEventListener('scroll',()=>document.getElementById('siteHeader').classList.toggle('scrolled',scrollY>20)); document.addEventListener('click',e=>{const a=e.target.closest('[data-link]'); if(a) closeMenu();}); }
function openUpsell(current){ const modal=document.getElementById('upsellModal'), grid=document.getElementById('upsellGrid'); grid.innerHTML=productList().filter(p=>p.id!==current).slice(0,2).map(p=>`<a class="mini-card" href="#product/${p.id}" data-link><img src="${p.images[0]}" alt="${p.name}"><div><h4>${p.name}</h4><p>${money(p.price)}</p></div></a>`).join(''); modal.classList.add('show'); }
function closeModal(){document.getElementById('upsellModal').classList.remove('show')}
document.getElementById('modalClose').onclick=closeModal; document.getElementById('upsellModal').onclick=e=>{if(e.target.id==='upsellModal') closeModal()};
window.addEventListener('hashchange',render);
document.addEventListener('DOMContentLoaded',()=>{initTheme();initShell();updateCartCount();render();});
