var cart = {};

$(document).ready(function () {
    // Onload, if cart is null, assign object to it, make total 0
    if (localStorage.getItem("cart") === null) {
        localStorage.setItem("cart", "{}" );
        localStorage.setItem("total", 0);
    }
    // If only the total is null, make it 0
    else if (localStorage.getItem("total") === null) {
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

    // If the cart item doesn't exist, make it, then append
    if (cart[item] == null) {
        let itemObj = {
            amount : 1,
            // get the price from the menu_info obj
            price : menu_info[item].price
        }
        cart[item] = itemObj;
    }
    // if it does exist, increase the amount
    else {
        cart[item].amount++;
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // set th localstorage total price
    SetTotal();

    if ($("body").is(".checkout-main")) {
        UpdateCheckout();
    }
}

function RemoveFromCart(item) {
    cart = JSON.parse(localStorage.getItem("cart"));

    // If the object exists, 
    if (cart[item] != null) {
        if (cart[item].amount > 1) {
            cart[item].amount--;
        }
        else {
            delete cart[item];
        }
    }
    else {
        console.log("no item exists in basket");
        return;
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    SetTotal(); 
    
    if ($("body").is(".checkout-main")) {
        UpdateCheckout();
    }
}

function AddToCart(item) {
    cart = JSON.parse(localStorage.getItem("cart"));

    // If the cart item doesn't exist, make it, then append
    if (cart[item] == null) {
        let itemObj = {
            amount : 1,
            // get the price from the menu_info obj
            price : menu_info[item].price
        }
        cart[item] = itemObj;
    }
    // if it does exist, increase the amount
    else {
        cart[item].amount++;
    }
    localStorage.setItem("cart", JSON.stringify(cart));

    // set th localstorage total price
    SetTotal();

    if ($("body").is(".checkout-main")) {
        UpdateCheckout();
    }
}

// TEST FUNCTIONS


function PrintCart() {
    console.log(localStorage.getItem("cart"));
}

function EmptyCart() {
    localStorage.setItem("cart", "{}" );
}