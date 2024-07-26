import { Ship, Gameboard, Player, GameController } from "./index";
import "./style.css";

const gameStartBtn = document.querySelector(".game-start-btn");
const gameDiv = document.querySelector(".game");
const game = new GameController();
let availableCoordinates = [];

// need to make sure the button can only get clicked once
gameStartBtn.addEventListener("click", () => {
  console.log(game);

  gameStartBtn.remove();
  // gameStartBtn.setAttribute("style", "display: none;");

  // computer guess pool
  intializePossibleCoordinates();

  // initialize display
  setupDOM();
});

function setupDOM() {
  // set initial human turn flag:
  game.playTurn();

  // set up player variables
  const p1 = game.players[0];
  const p2 = game.players[1];

  // set ships on boards
  p1.board.placeShip(new Ship(2), 2, 3);
  // p1.board.placeShip(new Ship(10), 0, 0);
  // p1.board.placeShip(new Ship(10), 1, 0);
  // p1.board.placeShip(new Ship(10), 2, 0);
  // p1.board.placeShip(new Ship(10), 3, 0);
  // p1.board.placeShip(new Ship(10), 4, 0);
  // p1.board.placeShip(new Ship(10), 5, 0);
  // p1.board.placeShip(new Ship(10), 6, 0);
  // p1.board.placeShip(new Ship(10), 7, 0);
  // p1.board.placeShip(new Ship(10), 8, 0);
  // p1.board.placeShip(new Ship(10), 9, 0);

  p2.board.placeShip(new Ship(2), 5, 5, "vertical");

  // create boards
  createPlayerBoards();
}

function createPlayerBoards() {
  gameDiv.textContent = "";

  game.players.forEach((player) => {
    // create html gameboard
    let table = document.createElement("table");
    table.setAttribute("id", `${player.type}-board`);
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
        cell.classList.add(`${player.type}-cell`);

        cell.dataset.x = i;
        cell.dataset.y = j;

        if (player.type === "computer") {
          // make clickable if player is opponent
          cell.style.cursor = "pointer";
          cell.addEventListener("click", () => cellClick(cell));
        }

        row.appendChild(cell);
      }
      table.appendChild(row);
    }

    let boardName = document.createElement("p");
    boardName.textContent = `${player.type}'s grid`;

    gameDiv.append(table, boardName);
  });
}

// add class to guessed cells using isShip to differentiate between hit and miss
function updateDOM() {
  const humanBoardCells = document.querySelectorAll(".human-cell");
  const computerBoardCells = document.querySelectorAll(".computer-cell");

  computerBoardCells.forEach((cell) => {
    // console.log("guessedCells:", game.players[0].board.guessedCells);

    // console.log("cellinfo:", `${[cell.dataset.x, cell.dataset.y]}`);

    if (
      game.players[1].board.guessedCells.some(
        (guessedCell) =>
          guessedCell[0] === cell.dataset.y && guessedCell[1] === cell.dataset.x
      )
    ) {
      // check if cell is ship
      if (game.players[1].board.isShip(cell.dataset.y, cell.dataset.x)) {
        cell.classList.add("hit");
      } else {
        cell.classList.add("miss");
      }
    }
  });

  humanBoardCells.forEach((cell) => {
    // console.log("guessedCells:", game.players[0].board.guessedCells);

    // console.log("cellinfo:", `${[cell.dataset.x, cell.dataset.y]}`);

    if (
      game.players[0].board.guessedCells.some(
        (guessedCell) =>
          guessedCell[0] === cell.dataset.y && guessedCell[1] === cell.dataset.x
      )
    ) {
      // check if cell is ship
      if (game.players[0].board.isShip(cell.dataset.y, cell.dataset.x)) {
        cell.classList.add("hit");
      } else {
        cell.classList.add("miss");
      }
    }
  });
}

function cellClick(cell) {
  if (game.currentIsHuman) {
    // console.log("y, x:", cell.dataset.y, cell.dataset.x);
    // console.log("ship at:", game.players[1].board.board[5][5]);

    // disallow clicking the same cell twice
    cell.setAttribute("style", "pointer-events: none");

    let hit = game
      .getOpposingPlayer()
      .board.receiveAttack(cell.dataset.y, cell.dataset.x);
    if (hit) {
      updateDOM();
    } else {
      updateDOM();

      game.nextTurn();
      computerTurn();
    }

    if (game.winCheck()) {
      gameOver();
    } else {
      return;
    }
  }
}

function intializePossibleCoordinates() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      availableCoordinates.push([i, j]);
    }
  }

  return availableCoordinates;
}

function computerTurn() {
  if (availableCoordinates.length === 0) {
    updateDOM();
    game.nextTurn();
    return;
  }

  let index = Math.floor(Math.random() * availableCoordinates.length);
  let [x, y] = availableCoordinates[index];

  // remove the chosen coordinate from availableCoordinates
  availableCoordinates.splice(index, 1);

  // convert to strings for conformity
  let hit = game.getOpposingPlayer().board.receiveAttack(String(y), String(x));

  updateDOM();

  if (game.winCheck()) {
    gameOver();

    return;
  }

  if (hit) {
    setTimeout(computerTurn, 0);
  } else {
    game.nextTurn();
  }
}

function gameOver() {
  const gameWrapper = document.querySelector(".game-wrapper");
  const gameOverMessage = document.createElement("div");

  gameDiv.setAttribute("style", "pointer-events: none");

  gameWrapper.classList.add("end-screen");
  gameOverMessage.classList.add("game-over-message");
  gameOverMessage.textContent = `Game over, ${
    game.getCurrentPlayer().type
  } wins!\r\n\r\nRefresh the page to play again.`;

  gameWrapper.appendChild(gameOverMessage);
}
