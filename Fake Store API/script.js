let datas = [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

async function fetchData() {
    const response = await fetch('https://fakestoreapi.com/products');
    datas = await response.json();

    const result = document.querySelector("#result");
    const result1 = document.querySelector("#result1");

    let half = Math.floor(datas.length / 2);

    datas.slice(0, half).forEach(item => render(item, result));
    datas.slice(half).forEach(item => render(item, result1));
}

function render(item, box) {
    box.innerHTML += `
    <div class="card">
        <img src="${item.image}">
        <h3>${item.title}</h3>
        <p>${item.category}</p>
        <p>$${item.price}</p>
        <button  class="AddToCart" onclick="addToCart(${item.id})">Add to Cart</button>
    </div>
    `;
}

function addToCart(id) {
    const product = datas.find(p => p.id === id);
    const existing = cart.find(p => p.id === id);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            image: product.image,
            price: product.price,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart ✅");
    window.location.href = "dataShow.html";

}

fetchData();
