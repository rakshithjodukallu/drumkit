for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {



        var buttonInnerHTML = this.innerHTML;
        
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

        textClick(buttonInnerHTML);
        

    });

    document.addEventListener("keypress", function(event){
        makeSound(event.key);

        buttonAnimation(event.key);

        textClick(event.key);

    });

    function makeSound(key1){
        switch (key1) {
            case "w":
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            case "a":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
            case "s":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
            case "d":
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;

            case "j":
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
            case "k":
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;
            case "l":
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;
            default:
                console.log(buttonInnerHTML)

        }
        audio.currentTime = 0;
    }
    
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." +currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 200);
}


function textClick(currentColor){
    var activeColor = document.querySelector("." +currentColor);

    activeColor.style.color = "blue";

    setTimeout(function() {
            activeColor.style.color = "#DA0463";

    }, 200);
} 

}


