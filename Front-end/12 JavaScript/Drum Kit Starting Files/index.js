//alert("HI");

for (var i =0; i < document.querySelectorAll(".drum").length; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        //this.style.color = "white";
        var buttoninnerHTML = this.innerHTML;
        makeSound(buttoninnerHTML);
        buttonAnimation(buttoninnerHTML);
    });
}

document.addEventListener("keydown", function(event){
    makeSound(event.key)
    buttonAnimation(event.key);
})


function makeSound(key)
{
    switch(key)
    {
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
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
        break;

        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
        break;

        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        break;

        default: console.log(key);
        break;
    }
}

function buttonAnimation(currentKey)
{
    var activeKey = document.querySelector("." + currentKey);
    activeKey.classList.add("pressed");

    setTimeout(function() {
        activeKey.classList.remove("pressed");
    }, 200) //waits 0.1 second
}
