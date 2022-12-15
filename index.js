var n = document.querySelectorAll("button.drum").length;
for(i=0;i<n;i++){
    document.querySelectorAll("button.drum")[i].addEventListener("click",function(){

    var sound = this.textContent;
    makeSound(sound);
    addAnimation(sound);
})};


document.addEventListener("keydown",function(press){
    makeSound(press.key);
    addAnimation(press.key);
});

function addAnimation(input){
    var animation = document.querySelector("."+input).classList;
    animation.add("pressed");
    setTimeout(function(){
        animation.remove("pressed")
    },100);
}

function makeSound(key){
    switch(key){

        case "w":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

        case "a":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

        case "s":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

        case "d":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;


        case "j":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

        case "k":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

        case "l":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

        default:
            console.log(key);
    }
}


 document.querySelector("#test").addEventListener("click",function(){
    var i= Math.floor(Math.random()*3)+1;
    document.querySelector("body").classList.toggle("c"+i)});


 
 
