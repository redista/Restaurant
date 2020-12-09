var cart = {};

$(document).ready(function () {

    if (localStorage.getItem("cart") == null) {
        localStorage.setItem("cart", "{}" );
        localStorage.setItem("total", 0);
    }
    else if (localStorage.getItem("total") == null) {
        localStorage.setItem("total", 0);
    }
    else
    {
        cart = JSON.parse(localStorage.getItem("cart"));
        localStorage.setItem("total", SetTotal());
    };
});

function AddToCart(item) {
    cart = JSON.parse(localStorage.getItem("cart"));


    if (cart[item] == null) {
        let itemObj = {
            amount : 1,
            price : menu_info[item].price
        }
        cart[item] = itemObj;
    }
    else {
        cart[item].amount++;
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    SetTotal();

    if ($("body").is(".checkout-main")) {
        UpdateCheckout();
    }
}

function RemoveFromCart(item) {
    cart = JSON.parse(localStorage.getItem("cart"));

    if (cart[item] != null) {
        if (cart[item].amount > 1) {
            cart[item].amount--;
        }
        else {
            delete cart[item];
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    SetTotal(); 
    
    if ($("body").is(".checkout-main")) {
        UpdateCheckout();
    }
}

function SetTotal() {

    let temp = JSON.parse(localStorage.getItem("cart"));

    let total = 0;
    for (let item in temp)
    {
        total += temp[item].price * temp[item].amount;
    }
    console.log(localStorage.getItem("total"));
    localStorage.setItem("total", total);

    $("#price-display").html(`&euro; ${total.toFixed(2)}`);
}
// TEST FUNCTIONS


function PrintCart() {
    console.log(localStorage.getItem("cart"));
}

function EmptyCart() {
    localStorage.setItem("cart", "{}" );
}