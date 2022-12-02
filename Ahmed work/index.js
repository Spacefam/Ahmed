$(document).click(function () {
    $('#btn_sumb').click(function () {
        var number1=$('#btn_val').val();


        for(let i=1;i<10;i++){
          let table= i*number1



          console.log(table)
        }
    })
})