var tl = gsap.timeline();


function time(){
    a=0;
    setInterval(function(){
         a=a+Math.floor(Math.random()*10);
         if(a<100){
            document.querySelector("#loader h1").innerHTML = a+"%";   
         }
         else{
            a=100;
            document.querySelector("#loader h1").innerHTML = a+"%";
         }
         
    },150)
}
time();

tl.to("#loader h1",{
    delay:1,
    duration:0.5,
    onStart:time()
})

tl.to("#loader",{
    top:"-100vh",
    delay:0.5,
    duration:0.5
})

gsap.to("#page1 h1",{
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        start:"top 0",
        end:"top -200%",
        scrub:5,
        pin:true,
    }
})
