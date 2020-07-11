


$(document).ready(function(){

    $("#name").blur(function(){


        var formData = {
            'name'              : $('input[name=name]').val(),
        };
;

        $.ajax({type: "GET", url: "submit.php", data: formData, success: function(result){

            if (result == "success") {
                $('#name').addClass("is-valid");
                $('#name').removeClass("is-invalid");
            } else {
                $('#name').addClass("is-invalid");
                $('#name').removeClass("is-valid");
            }
        }});
    });



    /*

$.ajax({
    type: "GET",
    url: 'test.php',
    data: {name: 'Wayne'},
    success: function(data){
        alert(data);
    }
});

*/




})