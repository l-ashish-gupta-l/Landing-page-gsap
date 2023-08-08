
var tl = gsap.timeline();

function time(){
    var a = 0;
    setInterval(function(){
        a = a + Math.floor(Math.random()*20) 
        if (a<100){
            
            document.querySelector("#loader h1").innerHTML = a + "%"
        }else{
            a = 100
        document.querySelector("#loader h1").innerHTML = a + "%"
        }

    },100)

}



tl.to("#loader h1",{
    duration : 1,
    delay : 1,
    onStart:time,
})


tl.to("#loader" ,{
    y: -1000,
    duration : 1.5,
    delay : 1
    
})


tl.from(".left h1",{
    fontStretch : 700 ,
    delay : 0.5 ,

})
tl.to(".content h1",{
    transform : "translateX(-120%)" ,
    fontWeight : 100,
    scrollTrigger :{
       trigger : ".page1",
       scroller : "body",
       pin : true ,
    //    markers : true,
       start : " top 0",
       scrub : 3
    }
})

