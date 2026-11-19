
document.addEventListener("DOMContentLoaded", () => {
    displayCart();
});

function displayCart() {

    let cartContent = document.getElementById("cartContent");
    let totalPrice = document.getElementById("totalPrice");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let allproducts = JSON.parse(localStorage.getItem("allproducts")) || [];

    let totalBill = 0;

    cartContent.innerHTML = "";

    if (cart.length === 0) {

        cartContent.innerHTML = "Your cart is Empty... Start Shopping";
        totalPrice.innerHTML = "";

    } else {

        cart.map((id, index) => {

            // Finding complete product using ID
            let selectedProduct = allproducts.find((v) => {
                return v.id === Number(id);
            });

            if (selectedProduct) {

                let price = selectedProduct.price * 90;

                totalBill += price;

                let newElement = document.createElement("div");

                newElement.className = "cart-card";

                newElement.innerHTML = `
                    <div class="cart-image">
                        <img src="${selectedProduct.thumbnail}"
                             alt="${selectedProduct.title}">
                    </div>

                    <div class="cart-info">

                        <h1>${selectedProduct.title}</h1>

                        <p>Availability: ${selectedProduct.availabilityStatus}</p>

                        <p>Category: ${selectedProduct.category}</p>

                        <p>Return Policy: ${selectedProduct.returnPolicy}</p>

                        <p>Shipping Information: ${selectedProduct.shippingInformation}</p>

                        <p>Stock: ${selectedProduct.stock}</p>

                        <p>Warranty Information: ${selectedProduct.warrantyInformation}</p>

                        <p>Price: ₹ ${price.toFixed(2)}</p>

                    </div>

                    <div class="remove-btn">
                        <button onclick="removeProduct(${index})">
                            Remove
                        </button>
                    </div>
                `;

                cartContent.append(newElement);
            }

        });

        totalPrice.innerHTML = `
            <h1>Total Price: ₹ ${totalBill.toFixed(2)}</h1>
        `;

    }
}


// Remove product from cart
function removeProduct(index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}
function backToHome() {
    window.location.href = "../Home/index.html";
}