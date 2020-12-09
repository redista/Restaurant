$(document).ready(function () {
    var loggedin = localStorage.getItem("loggedIn");

    if (loggedin == 1) {
        $("#loginlogout").html("Logout");
    }
    else {
        $("#loginlogout").html("Login");
    };

    //localStorage.setItem("total", 0);
    $("#loginlogout").click(function() {
        if (loggedin==1) {
            localStorage.setItem("loggedIn", 0);
            window.location.replace("login.html");
        }
        else
        {
            window.location.replace("login.html");
        }

    });

    $("#price-display").html(`&euro; ${parseInt(localStorage.getItem("total")).toFixed(2)}`);

    if ($("body").is(".userdetails")) {
        if (loggedin != 1) {
            window.location.replace("login.html");
       }
    }

    $('form[name="login"]' ).submit(function( e ) {
        e.preventDefault();
        var email=$('input[name="email"]').val();
        var password =$('input[name="password"]').val();
        if (email=="example@email.com" && password=="pass123")  {   
            // successful login, user redirected to shop.html
            localStorage.setItem('loggedIn', 1);    
            window.location.href = "menu.html";
        }
        else {
            // login unsuccessful, error message appears
            localStorage.setItem('loggedIn',0);
            $( "#loginerror" ).addClass( "d-block" );
        }
        return false;
    }); 
    
    localStorage.setItem('userdetails', null)
    if (localStorage.getItem('userdetails') === null) {  
        var userDetails = {firstName:"", lastName:"", dob:"",address1:"", address2:"", address3:""};
        localStorage.setItem('userdetails',JSON.stringify(userDetails));
    } else {
        userDetails=JSON.parse(localStorage.getItem('userdetails'));
    }

    if ($('#udetails').length > 0) {
        $('input[name="firstname"]').val(userDetails.firstName);         
        $('input[name="lastname"]').val(userDetails.lastName);
        $('input[name="dob"]').val(userDetails.dob);
        $('input[name="address1"]').val(userDetails.address1);
        $('input[name="address2"]').val(userDetails.address2);
        $('input[name="address3"]').val(userDetails.address3);
    }
    else if ($("#pdetails").length > 0) {
        $('input[name="firstname"]').val(userDetails.firstName);         
        $('input[name="lastname"]').val(userDetails.lastName);
        $('input[name="dob"]').val(userDetails.dob);
        $('input[name="address1"]').val(userDetails.address1);
        $('input[name="address2"]').val(userDetails.address2);
        $('input[name="address3"]').val(userDetails.address3);
    }
      


    // wait for submit button to be clicked on userdetails update form
    $('form[name="userdetails"]' ).submit(function( event ) {
        // if the user updates the user details - we update the userDetails javascript object
        userDetails.firstName=$('input[name="firstname"]').val();
        userDetails.lastName=$('input[name="lastname"]').val();
        $('input[name="dob"]').val(userDetails.dob);
        userDetails.address1=$('input[name="address1"]').val(); 
        userDetails.address2=$('input[name="address2"]').val();   
        userDetails.address3=$('input[name="address3"]').val();    
        // finally we convert the javascript object to a string with JSON.stringify and save it to localstorage
        localStorage.setItem('userdetails',JSON.stringify(userDetails));
        return false;
    }); 

    $('form[name="paymentdetails"]' ).submit(function( event ) {
        var cardnumber=$('input[name="cardnumber"]').val();
        if (cardnumber=="1234 5678 9102 3456") {
            $( "#payment-failure" ).addClass( "d-none" );
            $( "#payment-success" ).removeClass( "d-none" );
            $( "#buy-button" ).addClass( "d-none" );
            $( "#checkout" ).html("0" );
            
        } else {
            $( "#payment-failure" ).removeClass( "d-none" );
        }
        return false;
    }); 
});

