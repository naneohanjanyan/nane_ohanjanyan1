let random = Math.floor(Math.random() * 101);
alert(random);
let num = document.getElementById("input");
let count = document.getElementById("countValue");
let score = document.getElementById("scoreValue");

// sessionStorage.setItem("highScoore", `${score.innerText}`);

let check = () => {
  num = Number(num.value);
  if (num === random) {
    document.getElementById("text").innerHTML = "You win";
    calcScore();
  } else {
    count = Number(count.innerText) - 1;
    document.getElementById("countValue").innerHTML = count;
    if (count === 0) {
      document.getElementById("text").innerHTML = "You loss";
      return;
    }
    let sub = Math.abs(random - num);
    let check;
    if (num < random) {
      check = `${num} < mindedNum`;
    } else {
      check = `${num} > mindedNum`;
    }
    if (sub <= 10 && sub > 5) {
      document.getElementById("help").innerHTML = "superlow  " + check;
    }
    if (sub <= 5) {
      document.getElementById("help").innerHTML = "low  " + check;
    }
    if (sub > 10 && sub <= 15) {
      document.getElementById("help").innerHTML = "superhigh  " + check;
    }
    if (sub > 15) {
      document.getElementById("help").innerHTML = "high  " + check;
    }
  }
};

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    check();
  }
});

function calcScore() {
  let arrScore = [6, 12, 15, 20, 25, 35, 40];
  let countindex = Number(count.innerText);

  for (let i = 0; i < arrScore.length; i++) {
    if (i + 1 === countindex) {
      document.getElementById("scoreValue").innerHTML = arrScore[i];
      arrScore[i] > Number(sessionStorage.getItem("highScoore"))
        ? sessionStorage.setItem("highScoore", `${arrScore[i]}`)
        : sessionStorage.getItem("highScoore");
      return;
    }
  }
}
