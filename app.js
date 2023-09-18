const parallax_el =document.querySelectorAll(".parallax");

const main= document.querySelector(".main");
let xValue =0, yValue=0;
window.addEventListener("mousemove", (e)=>{
    xValue = e.clientX - window.innerWidth/2;
    yValue = e.clientY - window.innerHeight/2;
    
    parallax_el.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        
       
        let isInleft = xValue>0 ? 1 : -1;
        
    
       
        el.style.transform = ` translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))`;
            });
});

let timeline = gsap.timeline();

timeline.from(".bgz-img",{
    top:`${+document.querySelector(".bg-img").offsetHeight/2 -200}px`,
    duration:1,
});

if(window.innerWidth >= 725){
    main.style.maxHeight =`${window.innerWidth*0.8}px`;
}
