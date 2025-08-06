$(document).ready(function(){
    let body = $(".body")
    $("#parent").css({"display":"flex","justify-content":"space-evenly"})
    const nav = $(".nav")
    nav.css({"border":"1px solid black",
        "width" : "45%",
        "padding":"10px"
    })
    $("#nav-button").on("click",function(){
        nav.toggle()
    })
    //toggle


     //detach
    let h2 = $("h2")
      h2.css({"font-size":"18px",
            "color":"red"
        })
    const detachBtn = $("<button>detach</button>")
    detachBtn.on("click",function(){
        h2.detach()
    })

    const attach = $("<button>Attach</button>")
    attach.on("click",function(){
        h2.appendTo(".body")
    })

    body.append(detachBtn,attach)
})