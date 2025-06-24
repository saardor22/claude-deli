const fishProducts = [
  {id:1, name:"דג מקרל מעושן – קטן", price:20, img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"},
  {id:2, name:"דג מקרל מעושן – גדול", price:40, img:"https://images.unsplash.com/photo-1562967916-eb82221dfb34?auto=format&fit=crop&w=400&q=80"},
  {id:3, name:"הרינג אדום (פילה)", price:6, img:"https://images.unsplash.com/photo-1546554137-f86b9593a5e4?auto=format&fit=crop&w=400&q=80"},
  {id:4, name:"הרינג לבן (פילה)", price:6, img:"https://images.unsplash.com/photo-1549604949-3bc2257d9720?auto=format&fit=crop&w=400&q=80"},
  {id:5, name:"מטיאס אמיתי (פילה)", price:10, img:"https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=400&q=80"},
  {id:6, name:"סלמון מעושן", price:34, img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"},
  {id:7, name:"טונה מעושנת", price:15, img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"},
  {id:8, name:"מקרוסקה מעושנת", price:30, img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"}
];

const oliveProducts = [
  {id:101, name:"טאסוס יווני", price:15, img:"https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=400&q=80"},
  {id:102, name:"טאסוס מרוקאי", price:15, img:"https://images.unsplash.com/photo-1524594157368-b24554b8b441?auto=format&fit=crop&w=400&q=80"},
  {id:103, name:"מזולינו", price:15, img:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80"},
  {id:104, name:"זית סורי (פחות מר)", price:15, img:"https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=400&q=80"},
  {id:105, name:"זית סורי שבור (יותר מר)", price:15, img:"https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=400&q=80"},
  {id:106, name:"קלמטה", price:15, img:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=400&q=80"},
  {id:107, name:"קלמטה מגולען", price:15, img:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=400&q=80"},
  {id:108, name:"זיתים בגריל", price:15, img:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80"},
  {id:109, name:"זית טבעי ביין", price:15, img:"https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=400&q=80"},
  {id:110, name:"זית יווני ענק מגולען", price:15, img:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=400&q=80"},
  {id:111, name:"מיקס הבית – זיתים מטובלים", price:15, img:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80"},
  {id:112, name:"זית שחור ענק מגולען", price:15, img:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=400&q=80"},
  {id:113, name:"זית שחור קטן מגולען", price:15, img:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80"},
  {id:114, name:"זית ירוק קטן מגולען", price:15, img:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80"},
  {id:115, name:"זית סורי מטובל (שמן זית, שום, שמיר ולימון)", price:15, img:"https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=400&q=80"},
  {id:116, name:"זית סנטה ענק", price:15, img:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=400&q=80"},
  {id:117, name:"זית סנטה ענק מטובל (פלפל חריף ולימון)", price:15, img:"https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=400&q=80"},
  {id:118, name:"זית שחור קטן שלם", price:15, img:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80"}
];

const cart = {};

function renderProducts() {
  const fishContainer = document.getElementById("fish-products");
  const oliveContainer = document.getElementById("olive-products");

  fishContainer.classList.add("products");
  oliveContainer.classList.add("products");

  fishProducts.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <div class="product-name">${p.name}</div>
      <div class="product-price">${p.price} ₪</div>
      <button class="add-btn" data-id="${p.id}" data-type="fish">הוסף לעגלה</button>
    `;
    fishContainer.appendChild(div);
  });

  oliveProducts.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <div class="product-name">${p.name}</div>
      <div class="product-price">${p.price} ₪</div>
      <button class="add-btn" data-id="${p.id}" data-type="olive">הוסף לעגלה</button>
    `;
    oliveContainer.appendChild(div);
  });
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  let total = 0;
  Object.values(cart).forEach(item => {
    total += item.price * item.qty;
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span>${item.name}</span>
      <span class="qty">x${item.qty}</span>
      <span>${item.price * item.qty} ₪</span>
      <button data-id="${item.id}">×</button>
    `;
    cartItems.appendChild(div);

    div.querySelector("button").onclick = () => {
      removeFromCart(item.id);
    };
  });

  document.getElementById("total").textContent = "סה״כ: " + total + " ₪";

  document.getElementById("cart").style.display = total > 0 ? "block" : "none";
}

function addToCart(id, type) {
  const products = type === "fish" ? fishProducts : oliveProducts;
  const product = products.find(p => p.id === id);
  if (!product) return;

  if (cart[id]) {
    cart[id].qty++;
  } else {
    cart[id] = { ...product, qty: 1 };
  }
  updateCart();
}

function removeFromCart(id) {
  if (cart[id]) {
    cart[id].qty--;
    if (cart[id].qty <= 0) delete cart[id];
    updateCart();
  }
}

function sendWhatsApp() {
  let message = "שלום, אני רוצה להזמין מהתפריט:\n";
  Object.values(cart).forEach(item => {
    message += `- ${item.name} x${item.qty} במחיר ${item.price * item.qty} ₪\n`;
  });
  const phone = "972505675681";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();

  document.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.getAttribute("data-id"));
      const type = btn.getAttribute("data-type");
      addToCart(id, type);
    });
  });

  document.getElementById("send-whatsapp").addEventListener("click", sendWhatsApp);
});
