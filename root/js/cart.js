var cart = {};

$(document).ready(function () {
    if (localStorage.getItem("cart") == null) {
        localStorage.setItem("cart", 0);
    }
});

function AddToCart(item) {
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
}

function RemoveFromCart(item) {
    if (cart[item] != null) {
        if (cart[item].amount > 1) {
            cart[item].amount--;
        }
        else {
            delete cart[item];
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
}

// TEST FUNCTIONS

function PrintCart() {
    console.log(localStorage.getItem("cart"));
}

function EmptyCart() {
    localStorage.setItem("cart", 0);
}
