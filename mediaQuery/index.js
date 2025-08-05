$(document).ready(function(){
    const pTag = $("<p></p>")
    pTag.text("Hiii").css({"color":"red",
        fontSize : "4rem"
    })
        $("body").append(pTag)
})