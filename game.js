let arrColor = ["rgb(22,167,229)", "rgb(23,159,23)"];

let allSquares = document.querySelectorAll(".squaresStyle");
console.log(allSquares);
let click = document.getElementById("start");

click.onclick = function () {
  for (let i = 0; i < allSquares.length; i++) {
    allSquares[i].style.backgroundColor =
      arrColor[Math.floor(Math.random() * arrColor.length)];
  }
  countdown("timeGo", 3, 0);
};

allSquares[0].onclick = function () {
  changeColor(allSquares[0], allSquares[1], allSquares[3]);
};

allSquares[1].onclick = function () {
  changeColor(allSquares[0], allSquares[1], allSquares[2], allSquares[4]);
};

allSquares[2].onclick = function () {
  changeColor(allSquares[1], allSquares[2], allSquares[5]);
};

allSquares[3].onclick = function () {
  changeColor(allSquares[0], allSquares[3], allSquares[4], allSquares[6]);
};

allSquares[4].onclick = function () {
  changeColor(
    allSquares[1],
    allSquares[3],
    allSquares[4],
    allSquares[5],
    allSquares[7]
  );
};

allSquares[5].onclick = function () {
  changeColor(allSquares[2], allSquares[4], allSquares[5], allSquares[8]);
};

allSquares[6].onclick = function () {
  changeColor(allSquares[3], allSquares[7], allSquares[6]);
};

allSquares[7].onclick = function () {
  changeColor(allSquares[4], allSquares[6], allSquares[7], allSquares[8]);
};

allSquares[8].onclick = function () {
  changeColor(allSquares[5], allSquares[7], allSquares[8]);
};

function changeColor(...ids) {
  for (let i = 0; i < ids.length; i++) {
    if (ids[i].style.backgroundColor == "rgb(22, 167, 229)") {
      ids[i].style.backgroundColor = "rgb(23, 159, 23)";
    } else {
      ids[i].style.backgroundColor = "rgb(22, 167, 229)";
    }
  }
  if (winCheck(allSquares)) {
    allSquares.readOnly = true;
  }
}

function winCheck(allSquares) {
  let count = 0;
  for (let i = 0; i < allSquares.length; i++) {
    if (allSquares[i].style.backgroundColor == "rgb(23, 159, 23)") {
      break;
    }
    count++;
  }
  if (count == 8) {
    return true;
  } else {
    count = 0;
    for (let i = 0; i < allSquares.length; i++) {
      if (allSquares[i].style.backgroundColor == "rgb(22, 167, 229)") {
        break;
      }
      count++;
    }
    if (count == 8) {
      return true;
    }
  }
}

function countdown(element, minutes, seconds) {
  let time = minutes * 60 + seconds;
  let interval = setInterval(function () {
    let el = document.getElementById(element);
    if (time <= 0) {
      setTimeout(function () {
        countdown("clock", 0, 5);
      }, 2000);
      clearInterval(interval);
      return;
    }
    let minutes = Math.floor(time / 60);
    if (minutes < 10) minutes = "0" + minutes;
    let seconds = time % 60;
    if (seconds < 10) seconds = "0" + seconds;
    let text = minutes + ":" + seconds;
    el.innerText = text;
    time--;
    if (time == 0) {
      return true;
    }
  }, 1000);
}
