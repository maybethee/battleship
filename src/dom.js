import { Ship, Gameboard, Player, GameController } from "./index";
import "./style.css";

const gameStartBtn = document.querySelector(".game-start-btn");
const gameDiv = document.querySelector(".game");
const game = new GameController();

gameStartBtn.addEventListener("click", () => {
  console.log(game);

  setupDOM();
});

function setupDOM() {
  // set initial human turn flag:
  game.playTurn();

  // set up player variables
  const p1 = game.players[0];
  const p2 = game.players[1];

  // set ships on boards
  p1.board.placeShip(new Ship(2), 2, 3, "horizontal");
  p2.board.placeShip(new Ship(2), 5, 5);

  // create boards
  createPlayerBoard(p1);
  createPlayerBoard(p2);
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
    axisCell.textContent = i;
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
      cell.textContent = " ";
      cell.classList.add("cell");

      cell.dataset.x = i;
      cell.dataset.y = j;

      // make clickable if player is opponent
      if (player.type === "computer") {
        cell.style.cursor = "pointer";
        cell.addEventListener("click", () => cellClick(cell));
      }

      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  let boardName = document.createElement("p");
  boardName.textContent = player.type;

  gameDiv.append(table, boardName);
}

function cellClick(cell) {
  if (game.currentIsHuman) {
    // console.log("y, x:", cell.dataset.y, cell.dataset.x);
    // console.log("ship at:", game.players[1].board.board[5][5]);

    // currently receive attack is not working correctly
    // have to figure out whose board is whose? in the Player class, is that player object's board the one they're attacking (belonging to the other "player"?)
    let hit = game
      .getCurrentPlayer()
      .board.receiveAttack(cell.dataset.y, cell.dataset.x);
    if (hit) {
      console.log("ship hit");

      cell.classList.add("hit");
    } else {
      console.log("ship missed");

      game.nextTurn();
      game.computerTurn();
    }
  }

  if (game.winCheck()) {
    console.log("game over");
  } else {
    return;
  }
}
