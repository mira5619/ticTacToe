var sells = document.querySelectorAll("td");

var player1 = document.querySelector(".player-1");
var player2 = document.querySelector(".player-2");
var rows = document.querySelectorAll("tr");
var p = document.querySelector("p");

var activePlayer = "";
for (var i = 0; i < sells.length; i++) {
  sells[i].textContent = "";
  sells[i].addEventListener("click", e => {
    if (activePlayer === player1 && e.target.textContent === "") {
      e.target.textContent = "0";
      e.target.style.background = "orange";

      activePlayer = player2;
    } else if (activePlayer === player2 && e.target.textContent === "") {
      e.target.textContent = "x";
      e.target.style.background = "black";
      activePlayer = player1;
    }

    for (var i = 0; i < rows.length; i++) {
      var cont = [];
      var col1 = [];
      var col2 = [];
      var col3 = [];
      var diag1 = [];
      var diag2 = [];

      for (var s = 0; s < rows[i].children.length; s++) {
        cont.push(rows[i].children[s].textContent);
        col1.push(rows[s].children[0].textContent);
        col2.push(rows[s].children[1].textContent);
        col3.push(rows[s].children[2].textContent);
        diag1.push(rows[s].children[s].textContent);
        diag2.push(rows[s].children[rows.length - 1 - s].textContent);
      }

      winnerAlgor(col1);
      winnerAlgor(col2);
      winnerAlgor(col3);
      winnerAlgor(cont);

      winnerAlgor(diag1);
      winnerAlgor(diag2);
    }
  });
}

function winnerAlgor(arr) {
  if (arr[0] !== "" && arr[1] !== "" && arr[3] !== "") {
    if (arr[0] === arr[1] && arr[0] === arr[2]) {
      if (arr[0] === "0") {
        return (
          (p.innerHTML = "winner is player1"),
          (p.style.color = "red"),
          (p.style.fontWeight = 900)
        );
      } else {
        return (
          (p.innerHTML = "winner is player2"),
          (p.style.color = "red"),
          (p.style.fontWeight = 900)
        );
      }
    }
  }
}

player1.addEventListener("click", function(e) {
  activePlayer = player1;
  resetBoard();
});
player2.addEventListener("click", function(e) {
  activePlayer = player2;
  resetBoard();
});

function resetBoard() {
  for (var i = 0; i < sells.length; i++) {
    sells[i].textContent = "";
    sells[i].style.background = "white";
  }
  fullSells = [];
}

var resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", reset);

function reset() {
  location.reload();
}
