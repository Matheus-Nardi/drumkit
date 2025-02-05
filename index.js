
document.querySelectorAll(".drum").forEach(b => b.addEventListener("click", function () {
    playDrumSound(this.textContent)
    buttonAnimation(this.textContent);
}))


document.addEventListener("keydown", (event) => {
    playDrumSound(event.key);
    buttonAnimation(event.key);
});

function playDrumSound(key) {
    let audio;
    switch (key) {
        case "w":
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "k":
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "l":
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        default:
            console.log("Nenhum evento foi reconhcido para " + content);
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.toggle("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);

}    
