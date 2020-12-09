
function UpdateCheckout() {
    // If the orders are already shown, delete them and redo it (otheriwse they stack)
    if ($("#order-list").length > 0) {
        $("#order-list").html("");
    };

    // get the container
    let container = document.getElementById("order-list");

    // parse cart
    let temp = JSON.parse(localStorage.getItem("cart"));
    let total = 0;

    // for each item in the cart, append to the container
    for (let item in temp) {
        
        // just making a temp var for this as it's easier to manage
        let price = temp[item].price * temp[item].amount;

        let itemContainer = document.createElement("li");
        itemContainer.classList.add("list-group-item", "d-flex", "justify-content-between");
        
        // append the info (and buttons with events)
        let title = `<h6 class="checkout-item">${item} x ${temp[item].amount}</h6>`;
        let rmvbtn = `<input type="button" value="-" class="itembtn rmvbtn checkout-btn" id="${item}" onclick="RemoveFromCart(this.id)" />`;
        let addbtn = `<input type="button" value="+" class="itembtn addbtn checkout-btn" id="${item}" onclick="AddToCart(this.id)" />`;
        let btnDiv = `<div class="checkout-btn-container">${rmvbtn}${addbtn}</div>`;

        // append the above vars to the item container
        itemContainer.innerHTML = `<div>${title}${btnDiv}<span style="display:block;">&euro; ${price.toFixed(2)}</span></div>`;
        container.appendChild(itemContainer);
    
        // append price (the item * amount)
        total += price;
    }

    // Display the total
    let itemContainer = document.createElement("li");
    itemContainer.classList.add("list-group-item", "d-flex", "justify-content-between");
    itemContainer.innerHTML = `<div><h6>Total</h6><span>&euro; ${total.toFixed(2)}</span></div>`;
    container.appendChild(itemContainer);
}
