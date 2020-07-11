
$(document).ready(function(){

    $("#name").blur(function(){

        var formData = {
            'data'              : $('input[name=name]').val(),
            'type'              : 'string',
            'minLength'         : '5',
            'maxLength'         : '10',
            'field'             : 'Name',
        };

        $.ajax({type: "POST", url: "submit.php", data: formData, success: function(result){
            //alert(result)
            if (result == "success") {
                $('#name').addClass("is-valid");
                $('#name').removeClass("is-invalid");
                $('#nameError').text("");
            } else {
                $('#name').addClass("is-invalid");
                $('#name').removeClass("is-valid");

                $('#nameError').text(result);
            }
        }});
    });


    $("#email").blur(function(){

        var formData = {
            'data'              : $('input[name=email]').val(),
            'type'              : 'email',
            'field'             : 'Email',
        };

        $.ajax({type: "POST", url: "submit.php", data: formData, success: function(result){
            //alert(result)
            if (result == "success") {
                $('#email').addClass("is-valid");
                $('#email').removeClass("is-invalid");
                $('#emailError').text("");
            } else {
                $('#email').addClass("is-invalid");
                $('#email').removeClass("is-valid");
                $('#emailError').text(result);

            }
        }});
    });


    $("#age").blur(function(){

        var formData = {
            'data'              : $('input[name=age]').val(),
            'type'              : 'int',
            'min'               : '5',
            'max'               : '100',
            'field'             : 'Age',
        };

        $.ajax({type: "POST", url: "submit.php", data: formData, success: function(result){
            //alert(result)
            if (result == "success") {
                $('#age').addClass("is-valid");
                $('#age').removeClass("is-invalid");
                $('#ageError').text("");
            } else {
                $('#age').addClass("is-invalid");
                $('#age').removeClass("is-valid");
                $('#ageError').text(result);
            }
        }});
    });

})