let product = [];
function fetchingData() {
    fetch("https://dummyjson.com/products")
    .then((res) => {
        return res.json();
    })
    .then((val) => {
        console.log(val.products);
        product = val.products;
        localStorage.setItem("allproducts", JSON.stringify(product));
        displayProducts(product);
    });
}
fetchingData();
function displayProducts(prod) {
    let output = "";
    prod.map((val) => {
        output += `
        <div class="product-card">
    <img src="${val.thumbnail}" alt="${val.title}">
    <h1>${val.title}</h1>
    <div class="product-info">
        <span class="rating">Rating: ${val.rating}</span>
        <span class="price">₹${val.price}</span>
    </div>
    <div class="product-bottom">
        <span class="stock">InStock: ${val.stock}</span>
        <button onclick="viewDetails(${val.id})">Details</button>
    </div>
</div>
`;
    });
    document.getElementById("productContainer").innerHTML = output;
}
// document.getElementById("searchInput").addEventListener("input", function() {
//     let searchValue = this.value.toLowerCase();

//     let filteredProducts = product.filter((val) => {
//         return val.title.toLowerCase().includes(searchValue);
//     });
//     displayProducts(filteredProducts);
// });
document.getElementById("searchproduct").addEventListener("input",(e) => {
    let searchTerm=e.target.value.toLowerCase();
    let filteredProduct=product.filter((val)=>{
        return val.title.toLowerCase().includes(searchTerm) ||
        val.category.toLowerCase().includes(searchTerm);
    });
    displayProducts(filteredProduct)
});
function viewDetails(id) {

    localStorage.setItem("productid", id);

    window.location.href = "../ProductDetails/details.html";

}