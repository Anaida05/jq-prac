$(document).ready(function(){
    const body = $("body")
    const p1 = $("<p>Hello</p>")
    const p2 = $("<p>World</p>")
    const btn = $("<button>Remove Text</button>")

    //remove
    btn.on("click",function(){
        $("body p").remove()
    })
    body.append(p1,p2,btn)
})