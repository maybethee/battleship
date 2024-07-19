import { Ship, Gameboard, Player } from "./index";
import "./style.css";

const gameStartBtn = document.querySelector(".game-start-btn");

gameStartBtn.addEventListener("click", () => {
  console.log("hi");

  gameStart();
});

function gameStart() {
  // create payers
  const players = [];
  players.push(new Player("human"));
  players.push(new Player("computer"));

  const p1 = players[0];
  const p2 = players[1];

  for (let player = 0; player < players.length; player++) {
    let table = document.createElement("table");

    for (let i = 0; i < players[player].board.board.length; i++) {
      let row = document.createElement("tr");

      for (let j = 0; j < players[player].board.board[i].length; j++) {
        let cell = document.createElement("td");
        cell.textContent = players[player].board.board[i][j];
        cell.classList.add("cell");

        cell.addEventListener("click", () => {
          console.log("cell clicked");
          if (players[player].board.receiveAttack(i, j)) {
            cell.classList.add("hit");
          }
        });
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
    document.body.appendChild(table);
  }
  p1.board.placeShip(new Ship(2), 2, 3, "horizontal");
  p2.board.placeShip(new Ship(2), 5, 5);
}
