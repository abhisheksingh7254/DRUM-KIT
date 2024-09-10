
var numberOfdrum = document.querySelectorAll(".drum").length;
for(var i = 0; i<numberOfdrum ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}
function handleClick(){
    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}


document.addEventListener("keydown",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
});


function makesound(key){
    switch (key) {
        case "w":
            var crash=new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick=new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare=new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1=new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2=new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3=new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4=new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
    
        default:
            nothing;
            break;
    }

}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." +currentKey);
    //adding new claas
    activeButton.classList.add("pressed");
    //removing claas for animation using setTimeout function
    setTimeout(function() {
    activeButton.classList.remove("pressed");
      }, 100);
    

}
let day=new Date().getFullYear();
const html=`<p>copyright ${"  " +day}</p>
            <h4>@absingh123</h4>`
document.querySelector(".footer").innerHTML=html;