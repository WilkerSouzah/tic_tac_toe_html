const $boardList = document.querySelectorAll(".board-item");

let currentMove = "X";

function toggleMove() {
  if (currentMove == "X") {
    currentMove = "O";
  } else {
    currentMove = "X";
  }
}

function verifyGame() {
  if (
    $boardList[0].innerHTML != "" &&
    $boardList[0].innerHTML == $boardList[1].innerHTML &&
    $boardList[1].innerHTML == $boardList[2].innerHTML
  ) {
    alert("Linha 0");
  }
  if (
    $boardList[3].innerHTML != "" &&
    $boardList[3].innerHTML == $boardList[4].innerHTML &&
    $boardList[4].innerHTML == $boardList[5].innerHTML
  ) {
    alert("Linha 1");
  }
  if (
    $boardList[6].innerHTML != "" &&
    $boardList[6].innerHTML == $boardList[7].innerHTML &&
    $boardList[7].innerHTML == $boardList[8].innerHTML
  ) {
    alert("Linha 2");
  }
  if (
    $boardList[0].innerHTML != "" &&
    $boardList[0].innerHTML == $boardList[3].innerHTML &&
    $boardList[3].innerHTML == $boardList[6].innerHTML
  ) {
    alert("Coluna 1");
  }
   if (
    $boardList[1].innerHTML != "" &&
    $boardList[1].innerHTML == $boardList[4].innerHTML &&
    $boardList[4].innerHTML == $boardList[7].innerHTML
  ) {
    alert("Coluna 2");
  }
  if (
    $boardList[2].innerHTML != "" &&
    $boardList[2].innerHTML == $boardList[5].innerHTML &&
    $boardList[5].innerHTML == $boardList[8].innerHTML
  ) {
    alert("Coluna 3");
  }
  if (
    $boardList[0].innerHTML != "" &&
    $boardList[0].innerHTML == $boardList[4].innerHTML &&
    $boardList[4].innerHTML == $boardList[8].innerHTML
  ) {
    alert("Diagonal 0");
  }
  if (
    $boardList[2].innerHTML != "" &&
    $boardList[2].innerHTML == $boardList[4].innerHTML &&
    $boardList[4].innerHTML == $boardList[6].innerHTML
  ) {
    alert("Diagonal 1");
  }
  if (
    $boardList[0].textContent != "" &&
    $boardList[1].textContent != "" &&
    $boardList[2].textContent != "" &&
    $boardList[3].textContent != "" &&
    $boardList[4].textContent != "" &&
    $boardList[5].textContent != "" &&
    $boardList[6].textContent != "" &&
    $boardList[7].textContent != "" &&
    $boardList[8].textContent != ""
  ) {
    return "draw";
  }
}

function move(boardIndex) {
  const item = $boardList[boardIndex];

  if (item.innerHTML != "") {
    return;
  }
  item.innerHTML = currentMove;
  const gameResult = verifyGame();

  if (gameResult == "X" || gameResult == "O") {
    alert(currentMove);
  }

  if (gameResult == "draw") {
    alert("Empate");
  }
  toggleMove();
}
function addBoardListeners() {
  for (let index = 0; index < $boardList.length; index++) {
    const $boardItem = $boardList[index];

    $boardItem.addEventListener("click", function () {
      move(index);
    });
  }
}

addBoardListeners();
