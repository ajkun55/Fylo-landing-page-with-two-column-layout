
$("#btn1").click(function(event) {
    event.preventDefault(); 
    if(!$('#email1').val()){
        $('#error1').css('visibility','visible');
        $('#email1').css('border','1.5px solid red');        
        $('#email1').css('outline','1.5px solid red');
        $('#email1').attr('value','johnappleseed#mail.com');
    }else{
        $('#error1').css('visibility','hidden');
        $('#email1').css('border','1.5px solid var(--clr-Desaturated-Blue)');
        $('#email1').css('outline','1.5px solid var(--clr-Desaturated-Blue)');
    }
});

$("#btn2").click(function(event) {
    event.preventDefault(); 
    if(!$('#email2').val()){
        $('#error2').css('visibility','visible');
        $('#email2').css('border','1.5px solid red');        
        $('#email2').css('outline','1.5px solid red');
        $('#email2').attr('value','johnappleseed#mail.com');
    }else{
        $('#error2').css('visibility','hidden');
        $('#email2').css('border','1.5px solid var(--clr-Desaturated-Blue)');
        $('#email2').css('outline','1.5px solid var(--clr-Desaturated-Blue)');
    }
})