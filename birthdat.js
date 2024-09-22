var innerBtn = document.getElementById("innerBtn");
innerBtn.addEventListener("click",function(){
    var audio = new Audio("./SendFame - Happy Birthday Areeba (mp3cut.net) (1).mp3")
    audio.play();
    alert("h");

    gsap.fromTo("#ballon",{
        y:300,
        visibility:"visible",
    },{
        y:-550,
        duration:3,
    }
)



})