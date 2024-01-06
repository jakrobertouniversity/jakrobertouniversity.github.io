import products from './products_list.json' assert { type: 'json' };

const searchParams = new URLSearchParams(window.location.search);

const product_id = searchParams.has("id") ? searchParams.get("id") : "default"
const product_data = products[product_id] ? products[product_id] : products["default"]

// set title
document.getElementsByTagName("title")[0].textContent = product_data.title

document.getElementById("product-title").textContent = product_data.title
document.getElementById("product-description").textContent = product_data.description
document.getElementById("product-price").textContent = product_data.currency + " " + product_data.price
document.getElementById("product-billing").textContent = product_data.billing

document.getElementById("product-media").style.backgroundImage = `url('${product_data.image}')`

document.getElementById("buy-button").addEventListener('click', function () {
    alert(`You requested to buy product ${product_data.title} for ${product_data.currency} ${product_data.price}`);
});