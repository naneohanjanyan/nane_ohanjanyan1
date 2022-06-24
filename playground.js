
// let start = document.querySelector("#start");

// start.onclick = () => {
//   countdown("clock", 0, 5);
// };

// function countdown(element, minutes, seconds) {
//   // set time for the particular countdown
//   var time = minutes * 60 + seconds;
//   var interval = setInterval(function () {
//     var el = document.getElementById(element);
//     // if the time is 0 then end the counter
//     if (time <= 0) {
//       var text = "hello";
//       el.innerHTML = text;
//       setTimeout(function () {
//         countdown("clock", 0, 5);
//       }, 2000);
//       clearInterval(interval);
//       return;
//     }
//     var minutes = Math.floor(time / 60);
//     if (minutes < 10) minutes = "0" + minutes;
//     var seconds = time % 60;
//     if (seconds < 10) seconds = "0" + seconds;
//     var text = minutes + ":" + seconds;
//     el.innerHTML = text;
//     time--;
//   }, 1000);
// }
