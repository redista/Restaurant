
$(document).ready(function () {
    UpdateCheckout();
});

function UpdateCheckout() {
    let container = document.getElementById("order-list");
    
    let temp = JSON.parse(localStorage.getItem("cart"));
    let total = 0;

    for (let item in temp) {
        console.log(item);
        let price = temp[item].price * temp[item].amount;

        let itemContainer = document.createElement("li");
        itemContainer.classList.add("list-group-item", "d-flex", "justify-content-between");
        itemContainer.innerHTML = `<div><h6>${item} x ${temp[item].amount}</h6><span>&euro; ${price.toFixed(2)}</span></div>`;
        container.appendChild(itemContainer);

        total += price;
    }

    let itemContainer = document.createElement("li");
    itemContainer.classList.add("list-group-item", "d-flex", "justify-content-between");
    itemContainer.innerHTML = `<div><h6>Total</h6><span>&euro; ${total.toFixed(2)}</span></div>`;
    container.appendChild(itemContainer);
}
