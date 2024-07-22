// if (process.env.NODE_ENV !== "test") {
//   require("./dom");
// }

// const gameStartBtn = document.querySelector(".game-start-btn");

// gameStartBtn.addEventListener("click", () => console.log("hi"));

class Ship {
  constructor(length) {
    this.length = length;
    this.hitCount = 0;
  }

  hit() {
    this.hitCount++;
  }

  isSunk() {
    if (this.hitCount >= this.length) {
      return true;
    } else {
      return false;
    }
  }
}

class Gameboard {
  constructor() {
    this.board = this.createBoard();
    this.ships = [];
    this.missedShots = [];
  }

  createBoard() {
    const boardArr = [];
    const size = 10;
    for (let i = 0; i < size; i++) {
      let row = [];
      for (let j = 0; j < size; j++) {
        row.push(" ");
      }
      boardArr.push(row);
    }
    return boardArr;
  }

  printBoard() {
    let boardString = "";
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        if (this.board[i][j] instanceof Ship) {
          boardString += "X ";
        } else {
          boardString += "- ";
        }
      }
      boardString += "\n";
    }
    console.log(boardString);
  }

  placeShip(ship, xCoordinate, yCoordinate, orientation = "vertical") {
    for (let i = 0; i < ship.length; i++) {
      if (orientation === "horizontal") {
        this.board[yCoordinate][xCoordinate + i] = ship;
      } else {
        this.board[yCoordinate + i][xCoordinate] = ship;
      }
    }
    this.ships.push(ship);
  }

  receiveAttack(yCoordinate, xCoordinate) {
    if (this.board[yCoordinate][xCoordinate] instanceof Ship) {
      // currently attacking the current player's board... should it do this or attack the opposing player's?
      this.board[yCoordinate][xCoordinate].hit();
      console.log("hit ship");

      return true;
    } else {
      this.missedShots.push([yCoordinate, xCoordinate]);
      console.log("missed shots", this.missedShots);
      return false;
    }
  }

  allSunk() {
    let sunkCount = 0;
    this.ships.forEach((ship) => {
      if (ship.isSunk()) {
        sunkCount++;
      }
    });
    if (sunkCount === this.ships.length) {
      return true;
    } else {
      return false;
    }
  }

  isShip(xCoordinate, yCoordinate) {
    if (this.board[xCoordinate][yCoordinate] instanceof Ship) {
      return true;
    } else {
      return false;
    }
  }
}

class Player {
  constructor(type) {
    this.type = type;
    this.board = new Gameboard();
  }
}

class GameController {
  constructor() {
    this.players = [new Player("human"), new Player("computer")];
    this.currentPlayer = this.players[0];
    this.currentPlayerIndex = 0;
    this.currentIsHuman = true;
  }

  gameStart() {
    this.playTurn(this.getCurrentPlayer());
  }

  // sets flag for whether current turn is human
  playTurn() {
    if (this.getCurrentPlayer().type === "human") {
      this.currentIsHuman = true;
    } else {
      this.currentIsHuman = false;

      // computerTurn gets called in dom eventlistener
      // this.computerTurn();
    }
    // console.log("current player:", this.getCurrentPlayer().type);
  }

  computerTurn() {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);

    // should attack the human player's board (unless the player's board is the board meant to be attacked)
    this.players[1].board.receiveAttack(y, x);
    this.nextTurn();
  }

  // only gets called in DOM maybe?
  nextTurn() {
    this.currentPlayerIndex =
      (this.currentPlayerIndex + 1) % this.players.length;

    // console.log("current player:", this.getCurrentPlayer().type);
  }

  // should only get called after nextTurn()
  winCheck() {
    // after currentPlayer changes, check for win condition: (since players attack each _other's_ boards)
    if (this.getCurrentPlayer().board.allSunk()) {
      // switch to winner POV
      this.nextTurn();
      return true;
    } else {
      return false;
    }
  }

  getCurrentPlayer() {
    return this.players[this.currentPlayerIndex];
  }
}

export { Ship, Gameboard, Player, GameController };
