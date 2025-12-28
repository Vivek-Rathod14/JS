    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let products = [];

    const cartBox = document.querySelector("#cartBox");
    const totalBox = document.querySelector("#total");
    const moreProductsBox = document.querySelector("#result");


    function renderCart() {
        cartBox.innerHTML = "";
        let grandTotal = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            grandTotal += itemTotal;

            cartBox.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}">
                <div class="cart-info">
                    <h4>${item.title}</h4>
                    <p>Price: $${item.price}</p>
                    <p><b>Amount:</b> $${itemTotal.toFixed(2)}</p>
                </div>

                <div class="qty-box">
                    <button onclick="changeQty(${item.id}, -1) " min="0" max="10">−</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQty(${item.id}, 1)">+</button>
                </div>
            </div>
            `;
        });

        totalBox.innerText = `Grand Total: $${grandTotal.toFixed(2)}`;
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    function changeQty(id, value) {
        const item = cart.find(p => p.id === id);
        item.quantity += value;

        if (item.quantity <= 0) {
            cart = cart.filter(p => p.id !== id);
        }
        renderCart();
    }

    async function loadMoreProducts() {
        const res = await fetch("https://fakestoreapi.com/products");
        products = await res.json();

        moreProductsBox.innerHTML = "";

        products.forEach(p => {
            moreProductsBox.innerHTML += `
            <div class="card">
                <img src="${p.image}">
                <h4>${p.title.slice(0, 40)}...</h4>
                <p>$${p.price}</p>
                <button class="AddToCart" onclick="addFromBottom(${p.id})">Add to Cart</button>
            </div>
            `;
        });
    }

    function addFromBottom(id) {
        const product = products.find(p => p.id === id);
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
        renderCart(); 
    }

    renderCart();
    loadMoreProducts();
