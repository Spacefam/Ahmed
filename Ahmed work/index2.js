$(document).ready(function () {
    $('btn_reg').click(function () {
        var number1 = $('#btn_sub').val();




        if(number1 % 2===0){
        console.log("even");
        
        }
        else{
            console.log("odd")
        }
    })
})