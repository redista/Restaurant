$(document).ready(function () {

    // User cart
    var cart = {};
    // 1 = logged in, 0 (or everything else) = not logged in
    var loggedin = localStorage.getItem("loggedIn");

    // Onload, if cart is null, assign object to it, make total 0
    if (localStorage.getItem("cart") === null) {
        localStorage.setItem("cart", "{}");
        localStorage.setItem("total", 0);
        localStorage.setItem("items", 0);
    }
    // If only the total is null, make it 0
    else if (localStorage.getItem("total") === null) {
        localStorage.setItem("items", 0);
        localStorage.setItem("total", 0);
    }
    else {
        // If data exists, try to parse it into the cart
        cart = JSON.parse(localStorage.getItem("cart"));
        SetTotal();
    };

    // Change nav name depending on whether logged in
    if (loggedin == 1) {
        $("#loginlogout").html("Logout");
    }
    else {
        $("#loginlogout").html("Login");
    };

    //localStorage.setItem("total", 0);
    $("#loginlogout").click(function () {
        if (loggedin == 1) {
            localStorage.setItem("loggedIn", 0);
            window.location.replace("login.html");
        }
        else {
            window.location.replace("login.html");
        }

    });

    // Display the cart total in the footer
    $("#items-display").html(`${parseInt(localStorage.getItem("items"))}`);
    $("#price-display").html(`&euro; ${parseInt(localStorage.getItem("total")).toFixed(2)}`);


    // Bunch of checks that execute if we're on a certain page
    // told by the class of the body

    // If the user is logged out and tries to go to user details 
    // (user.html) redirect to the login page
    if ($("body").is(".userdetails")) {
        if (loggedin != 1) {
            window.location.replace("login.html");
        }
    }
    // If the user is at the checkout, update the checkout
    if ($("body").is(".checkout-main")) {
        UpdateCheckout();
    }

    // Attempt to log in using the form, (obviously not secure)
    $('form[name="login"]').submit(function (e) {
        e.preventDefault();
        var email = $('input[name="email"]').val();
        var password = $('input[name="password"]').val();
        if (email == "example@email.com" && password == "pass123") {
            // successful login, user redirected to shop.html
            localStorage.setItem('loggedIn', 1);
            window.location.href = "menu.html";
        }
        else {
            // login unsuccessful, error message appears
            localStorage.setItem('loggedIn', 0);
            $("#loginerror").addClass("d-block");
        }
        return false;
    });

    // If the user has no details, assign empty strings to it
    if (localStorage.getItem('userdetails') == null) {
        console.log(1);
        var userDetails = { firstName: "", lastName: "", dob: "", address1: "", address2: "", address3: "" };
        localStorage.setItem('userdetails', JSON.stringify(userDetails));
    } else {
        userDetails = JSON.parse(localStorage.getItem('userdetails'));
    };

    // If on the checkout page (udetails form) or 
    // user page (also udetails form) then add the saved info
    // from the localStorage to the form
    if ($('#udetails').length > 0) {
        $('input[name="firstname"]').val(userDetails.firstName);
        $('input[name="lastname"]').val(userDetails.lastName);
        $('input[name="dob"]').val(userDetails.dob);
        $('input[name="address1"]').val(userDetails.address1);
        $('input[name="address2"]').val(userDetails.address2);
        $('input[name="address3"]').val(userDetails.address3);
        $('input[name="cardname"]').val(userDetails.cardName);
        $('input[name="cardnumber"]').val(userDetails.cardNo);
        $('input[name="cardcvc"]').val(userDetails.cardCVC);
    };

    // wait for submit button to be clicked on userdetails update form
    $('form[name="userdetails"]').submit(function (event) {
        // if the user updates the user details - we update the userDetails javascript object
        userDetails.firstName = $('input[name="firstname"]').val();
        userDetails.lastName = $('input[name="lastname"]').val();
        userDetails.dob = $('input[name="dob"]').val().toString();
        userDetails.address1 = $('input[name="address1"]').val();
        userDetails.address2 = $('input[name="address2"]').val();
        userDetails.address3 = $('input[name="address3"]').val();
        userDetails.cardName = $('input[name="cardname"]').val();
        userDetails.cardNo = $('input[name="cardnumber"]').val();
        userDetails.cardCVC = $('input[name="cardcvc"]').val();
        // finally we convert the javascript object to a string with JSON.stringify and save it to localstorage
        localStorage.setItem('userdetails', JSON.stringify(userDetails));
        return false;
    });

    // Get payment result depending on card number
    $('form[name="paymentdetails"]').submit(function (event) {
        var cardnumber = $('input[name="cardnumber"]').val();
        if (cardnumber == "1234567890123456") {
            $("#payment-failure").addClass("d-none");
            $("#payment-success").removeClass("d-none");
            $("#buy-button").addClass("d-none");
            $("#checkout").html("0");

        } else {
            $("#payment-failure").removeClass("d-none");
        }
        return false;
    });
});


function UpdateCheckout() {
    if ($("#order-list").length > 0) {
        $("#order-list").html("");
    };

    let container = document.getElementById("order-list");

    let temp = JSON.parse(localStorage.getItem("cart"));
    let total = 0;

    for (let item in temp) {
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

        total += price;
    }

    let itemContainer = document.createElement("li");
    itemContainer.classList.add("list-group-item", "d-flex", "justify-content-between");
    itemContainer.innerHTML = `<div><h6>Total</h6><span>&euro; ${total.toFixed(2)}</span></div>`;
    container.appendChild(itemContainer);
}

function AddToCart(item) {
    cart = JSON.parse(localStorage.getItem("cart"));

    // If the cart item doesn't exist, make it, then append
    if (cart[item] == null) {
        let itemObj = {
            amount: 1,
            // get the price from the menu_info obj
            price: menu_info[item].price
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

function SetTotal() {
    // not incredibly efficient, but works very simply

    let temp = JSON.parse(localStorage.getItem("cart"));

    // get total from temp cart obj
    let total = 0;
    let items = 0;
    for (let item in temp) {
        total += temp[item].price * temp[item].amount;
        items += temp[item].amount;
    }
    // set total
    localStorage.setItem("items", items);
    localStorage.setItem("total", total);

    // update the basket total display
    if ($("#checkout-footer").length > 0) {
        $("#items-display").html(items);
        $("#price-display").html(`&euro; ${total.toFixed(2)}`);
    }
}