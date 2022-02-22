var n=document.querySelectorAll(".drum").length;

for(var i=0;i<n;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        //var letterClicked=document.querySelectorAll(".drum")[i].innerHTML; we cant use this as i=length now
        var letterClicked=this.innerHTML;
        console.log(letterClicked);
       
        playSound(letterClicked);
        addAnimation(letterClicked);
    });
    document.querySelectorAll(".drum")[i].addEventListener("keydown",function (event){
        // var letterClicked=this.innerHTML;
        // playSound(letterClicked); 
        playSound(event.key);// the event that happened i.e. "click" is attached with a number of properties and one of them is "key"
        addAnimation(event.key);
    });
}

function playSound(letterClicked)
{
    switch(letterClicked)
    {
        case "w":
        var aaudio=new Audio("sounds/tom-1.mp3");   
        aaudio.play();
        break;
        case "a":
        var aaudio=new Audio("sounds/tom-2.mp3");   
        aaudio.play();
        break;
        case "s":
        var aaudio=new Audio("sounds/tom-3.mp3");   
        aaudio.play();
        break;
        case "d":
        var aaudio=new Audio("sounds/tom-4.mp3");   
        aaudio.play();
        break;
        case "j":
        var aaudio=new Audio("sounds/snare.mp3");   
        aaudio.play();
        break;
        case "k":
        var aaudio=new Audio("sounds/crash.mp3");   
        aaudio.play();
        break;
        case "l":
        var aaudio=new Audio("sounds/kick-bass.mp3");   
        aaudio.play();
        break;
        default: 
    }
}

function addAnimation(letterClicked)
{
    var activeBotton=document.querySelector("."+letterClicked);
    activeBotton.classList.add("pressed");
    setTimeout(function(){
        activeBotton.classList.remove("pressed");
    }, 100);
}
