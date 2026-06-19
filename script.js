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

/* =============================================
   CART
   ============================================= */
function normalizeCart(cart) {
  if (!Array.isArray(cart)) return [];

  if (cart.length > 0 && typeof cart[0] === "string") {
    const counts = {};
    cart.forEach((id) => { counts[id] = (counts[id] || 0) + 1; });
    return Object.entries(counts).map(([id, quantity]) => ({
      id,
      quantity,
      boxKit: false
    }));
  }

  return cart
    .filter(item => item && typeof item.id === "string")
    .map(item => ({
      id: item.id,
      quantity: Number(item.quantity) > 0 ? Number(item.quantity) : 1,
      boxKit: Boolean(item.boxKit)
    }));
}

function getCart() {
  const raw = JSON.parse(localStorage.getItem("eliteTimeCart")) || [];
  const normalized = normalizeCart(raw);
  localStorage.setItem("eliteTimeCart", JSON.stringify(normalized));
  return normalized;
}

function saveCart(cart) {
  localStorage.setItem("eliteTimeCart", JSON.stringify(cart));
}

function updateCartCount() {
  const cart = getCart();
  const totalCount = cart.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0);

  document.querySelectorAll(".cart-count").forEach((el) => {
    const previous = Number(el.textContent) || 0;
    if (totalCount <= 0) {
      el.textContent = "";
      el.style.display = "none";
      return;
    }
    el.textContent = totalCount;
    el.style.display = "flex";
    if (totalCount > previous) {
      el.classList.remove("cart-pop");
      void el.offsetWidth;
      el.classList.add("cart-pop");
    }
  });

  document.querySelectorAll(".cart-btn").forEach((btn) => {
    const current = totalCount;
    const previous = Number(btn.dataset.prevCount || 0);
    if (current > previous) {
      btn.classList.remove("cart-icon-bounce");
      void btn.offsetWidth;
      btn.classList.add("cart-icon-bounce");
    }
    btn.dataset.prevCount = current;
  });
}

function addToCart(productId) {
  const cart = getCart();
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1, boxKit: false });
  }
  saveCart(cart);
  updateCartCount();
  animateAddToCartButton(document.getElementById("addToCartBtn"));
  playAddToCartSound();
  showUpsellPopup(productId);
}

function removeFromCart(productId) {
  let cart = getCart().filter(item => item.id !== productId);
  saveCart(cart);
  updateCartCount();
  renderCartPage();
  renderCheckoutSummary();
}

function increaseQuantity(productId) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.quantity += 1;
  saveCart(cart);
  updateCartCount();
  renderCartPage();
  renderCheckoutSummary();
}

function decreaseQuantity(productId) {
  let cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.quantity -= 1;
  if (item.quantity <= 0) cart = cart.filter(i => i.id !== productId);
  saveCart(cart);
  updateCartCount();
  renderCartPage();
  renderCheckoutSummary();
}

function toggleBoxKit(productId) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.boxKit = !item.boxKit;

  saveCart(cart);
  renderCartPage();
  renderCheckoutSummary();
}

/* =============================================
   THEME
   ============================================= */
function getTheme() {
  return localStorage.getItem("eliteTimeTheme") || "light";
}

function saveTheme(theme) {
  localStorage.setItem("eliteTimeTheme", theme);
}

function initTheme() {
  const body = document.body;
  if (getTheme() === "dark") body.classList.add("dark-mode");

  const themeToggle = document.getElementById("themeToggle");
  if (!themeToggle) return;

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    saveTheme(body.classList.contains("dark-mode") ? "dark" : "light");
  });
}

/* =============================================
   SOUNDS
   ============================================= */
function playAddToCartSound() {
  try {
    const sound = new Audio("add.mp3");
    sound.volume = 0.28;
    sound.currentTime = 0;
    setTimeout(() => sound.play().catch(() => {}), 70);
  } catch (e) {}
}

/* =============================================
   ANIMATIONS
   ============================================= */
function animateAddToCartButton(button) {
  if (!button) return;
  button.classList.remove("cart-burst");
  void button.offsetWidth;
  button.classList.add("cart-burst");

  for (let i = 0; i < 6; i++) {
    const sparkle = document.createElement("span");
    sparkle.className = "sparkle";
    sparkle.textContent = "✦";
    const angle = (Math.PI * 2 * i) / 6;
    const x = Math.cos(angle) * 55;
    const y = Math.sin(angle) * 55;
    sparkle.style.setProperty("--x", `${x}px`);
    sparkle.style.setProperty("--y", `${y}px`);
    button.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 700);
  }
}

/* =============================================
   UPSELL POPUP
   ============================================= */
function showUpsellPopup(currentProductId) {
  const popup = document.getElementById("upsellPopup");
  const grid = document.getElementById("upsellPopupGrid");
  const closeBtn = document.getElementById("upsellClose");
  if (!popup || !grid) return;

  grid.innerHTML = "";
  Object.values(products)
    .filter(product => product.id !== currentProductId)
    .slice(0, 2)
    .forEach(product => {
      const card = document.createElement("a");
      card.href = `product.html?id=${product.id}`;
      card.className = "upsell-mini-card";
      card.innerHTML = `
        <img src="${product.images[0]}" alt="${product.name}">
        <div class="upsell-mini-info">
          <h4>${product.name}</h4>
          <p>$${product.price}</p>
        </div>
      `;
      grid.appendChild(card);
    });

  popup.classList.add("show");

  if (closeBtn && !closeBtn.dataset.bound) {
    closeBtn.addEventListener("click", () => popup.classList.remove("show"));
    closeBtn.dataset.bound = "true";
  }
  popup.addEventListener("click", (e) => {
    if (e.target === popup) popup.classList.remove("show");
  });
}

/* =============================================
   PRODUCT PAGE
   ============================================= */
function renderProductPage() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  if (!productId || !products[productId]) return;

  const product = products[productId];

  const setEl = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setEl("productName", product.name);
  setEl("productDescription", product.description);
  setEl("productPrice", `$${product.price}`);
  setEl("stockBadge", `Only ${product.stock} left in stock`);
  setEl("reviewCount", `(${product.reviews} reviews)`);

  const mainImg = document.getElementById("mainProductImage");
  if (mainImg) { mainImg.src = product.images[0]; mainImg.alt = product.name; }

  const thumbs = document.getElementById("productThumbs");
  if (thumbs) {
    thumbs.innerHTML = "";
    product.images.forEach((imgSrc, index) => {
      const thumb = document.createElement("img");
      thumb.src = imgSrc;
      thumb.alt = product.name;
      thumb.className = "product-thumb" + (index === 0 ? " active-thumb" : "");
      thumb.onerror = function() { this.remove(); };
      thumb.addEventListener("click", () => {
        if (mainImg) mainImg.src = imgSrc;
        document.querySelectorAll(".product-thumb").forEach(t => t.classList.remove("active-thumb"));
        thumb.classList.add("active-thumb");
      });
      thumbs.appendChild(thumb);
    });
  }

  const addBtn = document.getElementById("addToCartBtn");
  if (addBtn) addBtn.onclick = () => addToCart(product.id);

  document.title = `${product.name} — Elite Time`;
  renderUpsells(product.id);
}

/* =============================================
   UPSELL GRID — FIX: includes img-wrap + overlay
   ============================================= */
function renderUpsells(currentProductId) {
  const upsellGrid = document.getElementById("upsellGrid");
  if (!upsellGrid) return;
  upsellGrid.innerHTML = "";
  Object.values(products)
    .filter(p => p.id !== currentProductId)
    .slice(0, 3)
    .forEach(product => {
      const card = document.createElement("a");
      card.href = `product.html?id=${product.id}`;
      card.className = "watch-card";
      card.innerHTML = `
        <div class="watch-card-img-wrap">
          <img src="${product.images[0]}" alt="${product.name}" class="watch-card-img">
          <div class="watch-card-overlay">
            <span class="watch-card-cta">Shop Now</span>
          </div>
        </div>
        <div class="watch-card-body">
          <div class="watch-card-name">${product.name}</div>
          <div class="watch-card-price">$${product.price}</div>
        </div>
      `;
      upsellGrid.appendChild(card);
    });
}

/* =============================================
   CART PAGE
   ============================================= */
function renderCartPage() {
  const container = document.getElementById("cartItems");
  const checkoutWrap = document.getElementById("checkoutWrap");
  if (!container) return;

  const cart = getCart();
  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = `<p style="font-size:18px; color:var(--text-muted); font-weight:300; margin-top:10px;">Your cart is empty.</p>`;
    if (checkoutWrap) checkoutWrap.style.display = "none";
    return;
  }

  let total = 0;
  cart.forEach((item) => {
    const product = products[item.id];
    if (!product) return;
    const boxKitTotal = item.boxKit ? 35 * item.quantity : 0;
const lineTotal = (product.price * item.quantity) + boxKitTotal;
    total += lineTotal;

    const el = document.createElement("div");
    el.className = "cart-item";
    el.innerHTML = `
  <img src="${product.images[0]}" alt="${product.name}" class="cart-item-image">

  <div class="cart-item-details">
    <h3>${product.name}</h3>
    <p>$${product.price} each</p>

    <div class="qty-row">
      <button class="qty-btn minus-btn" data-id="${product.id}">−</button>
      <span class="qty-value">${item.quantity}</span>
      <button class="qty-btn plus-btn" data-id="${product.id}">+</button>
    </div>

    ${product.category !== "moissanite" ? `
  <label class="box-kit-row">
    <input type="checkbox" class="box-kit-toggle" data-id="${product.id}" ${item.boxKit ? "checked" : ""}>
    <span>Add Watch Box Kit +$35</span>
  </label>
` : `
  <div class="box-kit-included">
    <span>Box & Papers Included</span>
  </div>
`}

    <div class="line-total">Subtotal: $${lineTotal}</div>
  </div>

  <button class="remove-btn" data-id="${product.id}" aria-label="Remove">
    <i class="fa-solid fa-xmark"></i>
  </button>
`;
    container.appendChild(el);
  });

  const totalEl = document.createElement("div");
  totalEl.className = "cart-total";
  totalEl.textContent = `Total: $${total}`;
  container.appendChild(totalEl);

  if (checkoutWrap) checkoutWrap.style.display = "block";

  container.querySelectorAll(".plus-btn").forEach(btn => btn.addEventListener("click", () => increaseQuantity(btn.dataset.id)));
  container.querySelectorAll(".minus-btn").forEach(btn => btn.addEventListener("click", () => decreaseQuantity(btn.dataset.id)));
  container.querySelectorAll(".remove-btn").forEach(btn => btn.addEventListener("click", () => removeFromCart(btn.dataset.id)));
  container.querySelectorAll(".box-kit-toggle").forEach(toggle => toggle.addEventListener("change", () => toggleBoxKit(toggle.dataset.id)));
}

/* =============================================
   CHECKOUT SUMMARY
   ============================================= */
function renderCheckoutSummary() {
  const el = document.getElementById("checkoutSummary");
  if (!el) return;

  const cart = getCart();

  if (cart.length === 0) {
    el.innerHTML = `<p style="color:var(--text-muted)">Your cart is empty.</p>`;
    return;
  }

  let total = 0;
  let html = `<div class="checkout-summary-list">`;

  cart.forEach(item => {
    const p = products[item.id];
    if (!p) return;

    const boxKitTotal = item.boxKit ? 35 * item.quantity : 0;
    const lineTotal = (p.price * item.quantity) + boxKitTotal;
    total += lineTotal;

    html += `
      <div class="checkout-summary-item">
        <span>
          ${p.name} × ${item.quantity}
          ${item.boxKit ? `<br><small class="checkout-addon">Watch Box Kit × ${item.quantity}</small>` : ""}
        </span>
        <span>$${lineTotal}</span>
      </div>
    `;
  });

  html += `</div><div class="checkout-grand-total">Total: $${total}</div>`;
  el.innerHTML = html;
}

/* =============================================
   PAYMENT OPTIONS
   ============================================= */
function initPaymentOptions() {
  const options = document.querySelectorAll(".payment-option");
  if (!options.length) return;
  options.forEach(option => {
    option.addEventListener("click", () => {
      options.forEach(o => o.classList.remove("selected"));
      option.classList.add("selected");
    });
  });
}

/* =============================================
   PLACE ORDER
   ============================================= */
function placeOrder() {
  const get = id => document.getElementById(id)?.value.trim();
  const fullName = get("fullName"), email = get("email"), phone = get("phone");
  const address = get("address"), city = get("city"), state = get("state"), zip = get("zip");
  const selectedPayment = document.querySelector(".payment-option.selected");
  const paymentMethod = selectedPayment ? selectedPayment.innerText.trim() : "Not selected";

  if (!fullName || !email || !phone || !address || !city || !state || !zip) {
    alert("Please fill out all checkout fields.");
    return;
  }

  const cart = getCart();
  if (!cart.length) { alert("Your cart is empty."); return; }

  let orderSummary = "", total = 0;
  let receiptHtml = `<div class="confirmation-receipt-list">`;

  cart.forEach(item => {
    const p = products[item.id];
    if (!p) return;
    const boxKitTotal = item.boxKit ? 35 * item.quantity : 0;
const lineTotal = (p.price * item.quantity) + boxKitTotal;
    total += lineTotal;
    orderSummary += `${p.name} x${item.quantity}${item.boxKit ? " + Watch Box Kit" : ""} - $${lineTotal}\n`;
    receiptHtml += `
  <div class="confirmation-receipt-item">
    <span>
      ${p.name} × ${item.quantity}
      ${item.boxKit ? `<br><small class="checkout-addon">Watch Box Kit × ${item.quantity}</small>` : ""}
    </span>
    <span>$${lineTotal}</span>
  </div>
`;
  });

  receiptHtml += `</div><div class="confirmation-receipt-total">Total: $${total}</div>`;

  const templateParams = {
    full_name: fullName, customer_email: email, customer_phone: phone,
    address, city, state, zip, payment_method: paymentMethod,
    order_summary: orderSummary, order_total: `$${total}`
  };

  emailjs.send("service_3whl1kl", "template_j170iq5", templateParams)
    .then(() => {
      const checkoutPage = document.getElementById("checkoutPage");
      const confirmationPage = document.getElementById("confirmationPage");
      const confirmationReceipt = document.getElementById("confirmationReceipt");
      const confirmationIcon = document.getElementById("confirmationIcon");
      const steps = {
        cart: document.getElementById("stepCart"),
        info: document.getElementById("stepInfo"),
        payment: document.getElementById("stepPayment"),
        done: document.getElementById("stepDone")
      };
      const checkoutSteps = document.getElementById("checkoutSteps");

      if (confirmationReceipt) confirmationReceipt.innerHTML = receiptHtml;
      if (confirmationIcon) confirmationIcon.classList.remove("animate-check");

      [steps.cart, steps.info, steps.payment, steps.done].forEach(s => s && s.classList.remove("glow-step", "pop-in"));
      if (checkoutSteps) checkoutSteps.className = "checkout-steps";

      setTimeout(() => { steps.cart && steps.cart.classList.add("active", "completed", "glow-step"); }, 100);
      setTimeout(() => { steps.info && steps.info.classList.add("active", "completed", "glow-step"); }, 250);
      setTimeout(() => { steps.payment && steps.payment.classList.add("active", "completed", "glow-step"); }, 400);
      setTimeout(() => {
        steps.done && steps.done.classList.add("active", "completed", "pop-in", "glow-step");
        confirmationIcon && confirmationIcon.classList.add("animate-check");
      }, 650);

      setTimeout(() => {
        if (checkoutPage) checkoutPage.style.display = "none";
        if (confirmationPage) confirmationPage.style.display = "flex";
        document.body.style.overflow = "hidden";
      }, 850);

      localStorage.removeItem("eliteTimeCart");
      updateCartCount();
    })
.catch(err => {
  console.error("EmailJS full error:", err);
  alert("Failed to send order: " + (err?.text || err?.message || JSON.stringify(err)));
});
}

/* =============================================
   ALL PRODUCTS PAGE
   FIX: buildProductCard now has watch-card-img-wrap
   + overlay so hover effect works on products.html
   ============================================= */
function buildProductCard(product) {
  const badgeMap = {
    "Best Seller": "badge-best",
    "Hot":         "badge-hot",
    "Only 2 Left": "badge-low",
    "Only 3 Left": "badge-low",
    "Popular":     "badge-popular"
  };
  const badgeClass = badgeMap[product.badge] || "badge-popular";
  const isHot = product.badge === "Hot";

  return `
    <a href="product.html?id=${product.id}" class="watch-card${isHot ? " hot-pick" : ""}">
      <div class="watch-card-img-wrap">
        <img src="${product.images[0]}" alt="${product.name}" class="watch-card-img">
        <div class="watch-card-overlay">
          <span class="watch-card-cta">Shop Now</span>
        </div>
      </div>
      <div class="watch-card-body">
        ${product.badge ? `<div class="watch-card-badge ${badgeClass}">${isHot ? "🔥 Hot Pick" : product.badge}</div>` : ""}
        <div class="watch-card-name">${product.name}</div>
        <div class="watch-card-price">$${product.price}</div>
        <div class="watch-card-meta">
          <div class="watch-card-stars">★★★★★ (${product.reviews})</div>
          <div class="watch-card-sold">+${product.sold} sold</div>
        </div>
      </div>
    </a>
  `;
}

function renderAllProducts(filter = "all") {
  const grid = document.getElementById("allProductsGrid");
  if (!grid) return;
  const items = Object.values(products);
  const filtered = filter === "all" ? items : items.filter(p => p.category === filter);
  grid.innerHTML = filtered.map(buildProductCard).join("");
  refreshCursorTargets();
}

function initProductFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const grid = document.getElementById("allProductsGrid");
  if (!filterButtons.length || !grid) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      grid.classList.add("fade-out");
      setTimeout(() => {
        renderAllProducts(btn.dataset.filter);
        grid.classList.remove("fade-out");
        grid.classList.add("fade-in");
        setTimeout(() => grid.classList.remove("fade-in"), 300);
      }, 180);
    });
  });
}

/* =============================================
   NAVBAR SCROLL SHRINK
   ============================================= */
function initNavbarShrink() {
  const navbar = document.getElementById("navbar") || document.querySelector(".navbar");
  if (!navbar) return;
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 60);
  });
}

/* =============================================
   MOBILE HAMBURGER MENU
   ============================================= */
function initMobileMenu() {
  const toggle  = document.getElementById("mobileMenuToggle");
  const drawer  = document.getElementById("mobileMenuDrawer");
  const overlay = document.getElementById("mobileMenuOverlay");
  const closeBtn = document.getElementById("mobileMenuClose");
  if (!toggle || !drawer) return;

  function openMenu() {
    drawer.classList.add("open");
    if (overlay) overlay.classList.add("open");
    document.body.style.overflow = "hidden";
    toggle.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    drawer.classList.remove("open");
    if (overlay) overlay.classList.remove("open");
    document.body.style.overflow = "";
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", () => {
    drawer.classList.contains("open") ? closeMenu() : openMenu();
  });

  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  if (overlay)  overlay.addEventListener("click", closeMenu);

  drawer.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", closeMenu);
  });
}

/* =============================================
   CURSOR
   ============================================= */
function initCursor() {
  const dot  = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + "px";
    dot.style.top  = mouseY + "px";
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + "px";
    ring.style.top  = ringY + "px";
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.addEventListener("mouseleave", () => {
    dot.style.opacity  = "0";
    ring.style.opacity = "0";
  });
  document.addEventListener("mouseenter", () => {
    dot.style.opacity  = "1";
    ring.style.opacity = "1";
  });
}

/* =============================================
   CURSOR HOVER TARGETS
   ============================================= */
function refreshCursorTargets() {
  const ring = document.getElementById("cursorRing");
  if (!ring) return;
  const selector = "a, button, .watch-card, .trust-card, .filter-btn, .payment-option, .product-thumb, .nav-icon-btn, .step-item, .info-list-item, .mini-review";
  document.querySelectorAll(selector).forEach(el => {
    if (!el.dataset.cursorBound) {
      el.addEventListener("mouseenter", () => ring.classList.add("hover"));
      el.addEventListener("mouseleave", () => ring.classList.remove("hover"));
      el.dataset.cursorBound = "1";
    }
  });
}

/* =============================================
   SCROLL REVEAL
   ============================================= */
function initScrollReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  els.forEach(el => observer.observe(el));
}

/* =============================================
   SINGLE DOMContentLoaded — all inits in one place
   FIX: was firing twice (two separate listeners merged here)
   ============================================= */
document.addEventListener("DOMContentLoaded", () => {
  // Core
  initTheme();
  updateCartCount();
  initNavbarShrink();
  initMobileMenu();

  // Page-specific (each checks for its own DOM nodes — safe to call on every page)
  renderProductPage();
  renderCartPage();
  renderCheckoutSummary();
  initPaymentOptions();
  renderAllProducts("all");
  initProductFilters();

  // Visual enhancements
  initCursor();
  initScrollReveal();

  // Hero elements above fold — reveal immediately without waiting for scroll
  document.querySelectorAll(".hero .reveal").forEach((el, i) => {
    setTimeout(() => el.classList.add("visible"), 100 + i * 120);
  });

  // Refresh cursor targets after dynamic content has rendered
  setTimeout(() => {
    refreshCursorTargets();
    initScrollReveal();
  }, 500);
});
