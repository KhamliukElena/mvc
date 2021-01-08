$(document).ready(function() {
    var isEmail = function(str) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(str).toLowerCase());
    }
    $('#sendRegForm').on('click', function() {
        $('#error-msg').css("display", "none");
        //get info from the form
        let user = {};
        user.firstName = $('#first-name').val();
        user.lastName = $('#last-name').val();
        user.email = $('#email').val();
        user.password = $('#password').val();
        try {
            if (user.firstName === "" || user.lastName === "" || user.email === "" || user.password === "")
                throw new SyntaxError();
            if (!isEmail(user.email)) {
                throw new SyntaxError();
            }
            //create json object
            let json = JSON.stringify(user);
            //send json to server
            $.ajax({
                url: 'src/php/getData.php',
                //    type: "POST",
                dataType: "json",
                data: json,
                success: function(response) {
                    $('#error-msg').css("display", "none");
                    $('#success-msg').css("display", "block");
                    console.log("Success!");
                },
                error: function() {
                    console.log("server error");
                }
            })
        }
        catch {
            $('#error-msg').css("display", "inline");
        }
    });

    $('#checkUser').on('click', function() {
        $('#error-msg').css("display", "none");
        //get info from the form
        let user = {};
        user.password = $('#password2').val();
        user.email = $('#email2').val();
        try {
            if (user.password === "" || user.email === "" )
                throw new SyntaxError();
            if (!isEmail(user.email))
                throw new SyntaxError();
            //create json object
            let json = JSON.stringify(user);
            //send json to server
            $.ajax({
                url: 'src/php/getData.php',
                //    type: "POST",
                dataType: "json",
                data: json,
                success: function(response) {
                    console.log("Success!");
                    $('#error-msg').css("display", "none");
                    $('#success-msg').css("display", "block");
                },
                error: function() {
                    console.log("server error");
                }
            })
        }
        catch {
            $('#error-msg2').css("display", "inline");
        }
    });
})