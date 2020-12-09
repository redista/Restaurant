
$(document).ready(function () {
    UpdateCheckout();
});

function UpdateCheckout() {
    if ($("#order-list").length > 0) {
        $("#order-list").html("");
    };
    
    let container = document.getElementById("order-list");

    let temp = JSON.parse(localStorage.getItem("cart"));
    let total = 0;

    for (let item in temp) {
        console.log(item);
        let price = temp[item].price * temp[item].amount;

        let itemContainer = document.createElement("li");
        itemContainer.classList.add("list-group-item", "d-flex", "justify-content-between");

        console.log(item);
        let title = `<h6 class="checkout-item">${item} x ${temp[item].amount}</h6>`;
        let rmvbtn = `<input type="button" value="-" class="itembtn rmvbtn checkout-btn" id="${item}" onclick="RemoveFromCart(this.id)" />`;
        let addbtn = `<input type="button" value="+" class="itembtn addbtn checkout-btn" id="${item}" onclick="AddToCart(this.id)" />`;
        let btnDiv = `<div class="checkout-btn-container">${rmvbtn}${addbtn}</div>`;

        itemContainer.innerHTML = `<div>${title}${btnDiv}<span style="display:block;">&euro; ${price.toFixed(2)}</span></div>`;
        container.appendChild(itemContainer);

        $(`#${item}`).click((e) => {

        });

        total += price;
    }

    let itemContainer = document.createElement("li");
    itemContainer.classList.add("list-group-item", "d-flex", "justify-content-between");
    itemContainer.innerHTML = `<div><h6>Total</h6><span>&euro; ${total.toFixed(2)}</span></div>`;
    container.appendChild(itemContainer);
}
