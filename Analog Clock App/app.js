const handHours  = document.querySelector('.hand-hours');
const handMinutes  = document.querySelector('.hand-minutes');
const handSeconds  = document.querySelector('.hand-seconds');


window.addEventListener('DOMContentLoaded', () => setInterval(() => updateClock(), 1000));


const updateClock = () => {
    const now = new Date();
    const hours = now.getHours()
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const secondsDegree = (seconds / 60) * 360 + 90;
    const hoursDegree = ((hours / 12) * 360) + (minutes / 60 )  + 90;
    const minutesDegree = (minutes / 60) * 360 + 90;

    handHours.style.transform = `rotate(${hoursDegree}deg)`;
    handMinutes.style.transform = `rotate(${minutesDegree}deg)`; 
    handSeconds.style.transform = `rotate(${secondsDegree}deg)`;
};