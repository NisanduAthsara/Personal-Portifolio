$("#toggle-btn").click(function(){
    $(".toggle-show").show(300)
    $(".toggle-show1").show(300)
    $(".toggle-show2").show(300)
    $(".toggle-show3").show(300)
    $(this).hide();
    $("#toggle-btn2").show()
    document.getElementById("toggle-btn2").style.display = "block";
})

$("#toggle-btn2").click(function(){
    $(".toggle-show").hide(300)
    $(".toggle-show1").hide(300)
    $(".toggle-show2").hide(300)
    $(".toggle-show3").hide(300)
    $(this).hide();
    $("#toggle-btn").show()
})