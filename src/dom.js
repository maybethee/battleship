import { Ship, Gameboard, Player } from "./index";
import "./style.css";

const gameStartBtn = document.querySelector(".game-start-btn");
const gameDiv = document.querySelector(".game");

gameStartBtn.addEventListener("click", () => {
  console.log("hi");

  playGame(setupDOM());
});

function playGame(playersArray) {
  let gameOver = false;

  while (gameOver !== true) {
    playTurn(playersArray[0]);
    // nextTurn function will rotate the players array somehow
    nextTurn();
  }
}

function playTurn(player) {
  // console.log(player.type);
}

function nextTurn() {}

function setupDOM() {
  //create payers
  const players = [];
  const p1 = new Player("human");
  const p2 = new Player("computer");
  players.push(p1, p2);

  // create boards
  createPlayerBoard(p1);
  createPlayerBoard(p2);

  // set ships on boards
  p1.board.placeShip(new Ship(2), 2, 3, "horizontal");
  p2.board.placeShip(new Ship(2), 5, 5);

  return players;
}

function createPlayerBoard(player) {
  // create html gameboard
  let table = document.createElement("table");
  // header row for the x-axis labels
  let headerRow = document.createElement("tr");
  // empty top left corner
  let emptyCorner = document.createElement("td");

  headerRow.appendChild(emptyCorner);
  for (let i = 0; i < player.board.board.length; i++) {
    let axisCell = document.createElement("td");
    axisCell.textContent = i; // Set the cell content to the x-coordinate
    headerRow.appendChild(axisCell);
  }
  table.appendChild(headerRow);

  for (let i = 0; i < player.board.board.length; i++) {
    let row = document.createElement("tr");

    // create axis cell
    let axisCell = document.createElement("td");
    axisCell.textContent = i;
    row.appendChild(axisCell);

    for (let j = 0; j < player.board.board[i].length; j++) {
      let cell = document.createElement("td");
      cell.textContent = player.board.board[i][j];
      cell.classList.add("cell");

      // make clickable if player is opponent
      if (player.type === "computer") {
        cell.style.cursor = "pointer";

        cell.addEventListener("click", () => {
          console.log("cell clicked");
          if (player.board.receiveAttack(i, j)) {
            cell.classList.add("hit");
          }
        });
      }
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  let boardName = document.createElement("p");
  boardName.textContent = player.type;

  gameDiv.append(table, boardName);
}
