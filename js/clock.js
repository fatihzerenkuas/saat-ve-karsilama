const getName = prompt(`isminizi giriniz`);
document.querySelector("#myName").textContent = getName;

let time = new Date();
let currentTime = `${time.getDate()}.${time.getMonth()}.${time.getFullYear()} tarihi ve saat ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
document.querySelector("#myClock").textContent = currentTime;
