const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate(){
    let date = new Date();

    const second = date.getSeconds();
    const secondDegree = (second / 60)* 360 + 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;

    const min = date.getMinutes();
    const minDegree = (min / 60)* 360 + 90;
    minHand.style.transform = `rotate(${minDegree}deg)`;

    const hour = date.getHours();
    const hourDegree = (hour / 60)* 360 + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);

setDate();