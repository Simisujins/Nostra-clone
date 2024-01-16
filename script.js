var offerBar = document.querySelector(".offer-bar")

var offer=document.getElementById("offer-close")
offer.addEventListener("click",function(){
    offerBar.style.display="none"
})

var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton =document.getElementById("slider-right-activate")
var sliderimage= document.querySelector(".slider-image-container")
var slidermargin=0



sliderrightbutton.addEventListener("click",function(){
    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
})

sliderleftbutton.addEventListener("click",

function(){

    if(slidermargin==0)
    {
       slidermargin=200
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    else{

        slidermargin=slidermargin-100
    sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
})

var sideNav=document.getElementById("side-navbar-activate")
var sidenavbar = document.querySelector(".side-navbar")
sideNav.addEventListener("click",function(){
    sidenavbar.style.marginLeft="0px"
})

document.getElementById("side-navbar-close").addEventListener("click",()=>{
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})
