$(document).ready(function() {
    $("form#questions").submit(function(event) {
        var fur = $("input:radio[name=fur]:checked").val();
        var inhabit = $("select#location").val();

        debugger;
        if (fur === "1" && inhabit === "3") {
            $(".dog").show();
        } else if (fur === "1" && inhabit === "4") {
            $(".hamster").show();
        } else if (fur === "2" && inhabit === "3") {
            $(".hairless").show();
        } else {
            $(".fish").show();
        }

        event.preventDefault();
    })
})