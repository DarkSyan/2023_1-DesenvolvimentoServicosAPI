$(document).ready(function(){

    var valor01 = $("#txtValor01");
    var valor02 = $("#txtValor02");

    $("#btnSomar").click(function(){
        var result = parseFloat(valor01.val()) + parseFloat(valor02.val());
        $("#resultado").html("<b>" + result + "</b>");
        $("#resultado").css("color", "black");

    });
    $("#btnSubtrair").click(function(){
        var result = parseFloat(valor01.val()) - parseFloat(valor02.val());
        $("#resultado").html("<b>" + result + "</b>");
        if( result < 0 ){
            $("#resultado").css("color", "red");
        }else{
            $("#resultado").css("color", "blue");
        }

    });




});