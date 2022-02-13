function playsound(evt){
    const audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`);
    const key = document.querySelector(`div.key[data-key="${evt.keyCode}"]`);
    if(!audio)
        return;
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(evt){
    if(evt.propertyName !== "transform")
        return;
    evt.target.classList.remove("playing");
}
for(let key of document.querySelectorAll(".key")){
    key.addEventListener("transitionend", removeTransition);
}

// document.querySelectorAll(".key").forEach((key)=>{
//     key.addEventListener("transitionend", removeTransition);
// });

window.addEventListener("keydown", playsound);