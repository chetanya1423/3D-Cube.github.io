let x=0,bool=false,intervel;
const rotate=()=>{
    const cubes = document.querySelectorAll(".cube");
    Array.from(cubes).forEach(cube=>cube.style.transform=`rotateY(${x}deg)`);
}
const play=()=>{
    if(!bool){
       intervel= setInterval(()=>{
            x+=90;
            rotate();
        },1000);
        bool=true;
        document.querySelector(".bi-play-fill").style.display="none";
        document.querySelector(".bi-pause-fill").style.display="block";

    }
    else{
        clearInterval(intervel);
        bool=false;
    }
}
const pause=()=>{
    if(!bool){
       intervel= setInterval(()=>{
            x+=90;
            rotate();
        },1000);
        
        document.querySelector(".bi-play-fill").style.display="none";
        document.querySelector(".bi-pause-fill").style.display="block";
        bool=true;
    }
    else{
        clearInterval(intervel);
        
        document.querySelector(".bi-play-fill").style.display="block";
        document.querySelector(".bi-pause-fill").style.display="none";
        bool=false;
    }
}
document.querySelector(".bi-arrow-left-short").addEventListener("click",function(){
    x+=90;
    rotate();
    if(bool){
        pause();
    }
})
document.querySelector(".bi-arrow-left-short").addEventListener("mouseover",function(){
    x+=25;
    rotate();
})
document.querySelector(".bi-arrow-left-short").addEventListener("mouseout",function(){
    x-=25;
    rotate();
})
document.querySelector(".bi-arrow-right-short").addEventListener("mouseover",function(){
    x-=25;
    rotate();
})
document.querySelector(".bi-arrow-right-short").addEventListener("mouseout",function(){
    x+=25;
    rotate();
})
document.querySelector(".bi-arrow-right-short").addEventListener("click",function(){
    x-=90;
    rotate();
    if(bool){
        pause();
    }
})
document.querySelector(".bi-play-fill").addEventListener("click",function(){
play();
})
document.querySelector(".bi-pause-fill").addEventListener("click",function(){
    pause();
    })