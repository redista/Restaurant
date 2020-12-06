var cart = {};

$(document).ready(function () {
    if (localStorage.getItem("cart") == null) {
        localStorage.setItem("cart", 0);
    }


function AddToCart(item) {
    console.log(item);
    if (cart.item == null) {
        cart.item = item;
    }
    else {
        cart.item.amount++;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
}

function RemoveFromCart(item) {
    if (cart.item != null) {
        if (cart.item.amount > 1) {
            cart.item.amount--;
        }
        else {
            delete cart.item;
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
}
});
