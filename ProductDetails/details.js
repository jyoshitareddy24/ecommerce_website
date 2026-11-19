
document.addEventListener("DOMContentLoaded", () => {

    let productDetails = document.getElementById("productDetails");

    let allproducts = JSON.parse(localStorage.getItem("allproducts")) || [];

    let productid = Number(localStorage.getItem("productid"));

    console.log(productDetails, allproducts, productid);

    if (allproducts.length > 0 && productid) {

        let selectedProduct = allproducts.find((val) => {
            return val.id === productid;
        });

        console.log(selectedProduct);

        if (selectedProduct) {

            let reviews = selectedProduct.reviews || [];

            let output = `
                <div class="details-card">

                    <div class="product-image">
                        <img src="${selectedProduct.thumbnail}"
                             alt="${selectedProduct.title}">
                    </div>

                    <div class="product-info">

                        <h2>${selectedProduct.title}</h2>

                        <p><b>Brand:</b> ${selectedProduct.brand || "Not available"}</p>

                        <p><b>Category:</b> ${selectedProduct.category}</p>

                        <p><b>Description:</b> ${selectedProduct.description}</p>

                        <h3>Price: ₹${selectedProduct.price}</h3>

                        <div class="buttons">

                            <button onclick="addToCart(${selectedProduct.id})">
                                Add To Cart
                            </button>

                            <button id="backToHome">
                                Back To Home
                            </button>

                        </div>

                    </div>
                </div>

                <div class="reviews-section">

                    <h2>Customer Reviews</h2>

                    ${
                        reviews.length > 0
                        ?
                        reviews.map((review) => `
                            <div class="review-card">

                                <h4>By ${review.reviewerName}</h4>

                                <p class="stars">
                                    ${"♥ ".repeat(Math.max(1, Math.min(5, Math.round(review.rating))))}
                                </p>

                                <p>${review.comment}</p>

                                <small>
                                    ${new Date(review.date).toLocaleDateString()}
                                </small>

                            </div>
                        `).join("")
                        :
                        "<p>No customer reviews available.</p>"
                    }

                </div>
            `;

            // Display product details
            productDetails.innerHTML = output;

            // Back to Home button
            document.getElementById("backToHome").addEventListener("click", backToHome);

        } 
        else {

            productDetails.innerHTML = "<p>Product not available</p>";

        }

    } 
    else {

        productDetails.innerHTML = "<p>Product not found!</p>";

    }

});


// Add To Cart Function
function addToCart(id) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(id);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added Successfully");

}


// Back To Home Function
function backToHome() {

    window.location.href = "../Home/index.html";

}
