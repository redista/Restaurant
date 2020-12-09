$(document).ready(function () {
    var loggedin = localStorage.getItem("loggedIn");

    if ($("body").is(".userdetails")) {
        if (loggedin == 1) {
            $("body").html(setUserForm());
        }
       else {
           console.log("log in");
            //window.location.replace("login.html");
       }
    }

    if ($("body").is(".login-main")) {
        $
    }
});

