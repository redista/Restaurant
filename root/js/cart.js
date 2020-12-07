var cart = {};

$(document).ready(function () {
    if (localStorage.getItem("cart") == null) {
        localStorage.setItem("cart", "{}" );
    }
    else
    {
        cart = JSON.parse(localStorage.getItem("cart"));
    }
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

    UpdateCheckoutFooter(cart[item].amount, "add");

    localStorage.setItem("cart", JSON.stringify(cart));
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
}

// TODO
function UpdateCheckoutFooter(amount, op="none") {
    let container = document.getElementById("price-display");
    if(op=="none") {
        container.innerHTML = `&euro; ${amount}`;
    }
    else if (op=="add")
    {
        let temp = Number(container.textContent);
        temp += amount;
        container.innerHTML = temp;
    }
}

// TEST FUNCTIONS

function PrintCart() {
    console.log(localStorage.getItem("cart"));
}

function EmptyCart() {
    localStorage.setItem("cart", "{}" );
}
