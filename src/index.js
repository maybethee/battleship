// import "./style.css";

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
        row.push("-");
      }
      boardArr.push(row);
    }
    return boardArr;
  }

  addShips() {
    const shipsArr = [];
    shipsArr.push(new Ship(2));
    shipsArr.push(new Ship(3));
    shipsArr.push(new Ship(3));
    shipsArr.push(new Ship(4));
    shipsArr.push(new Ship(5));
    return shipsArr;
  }

  placeShip(ship, xCoordinate, yCoordinate, orientation = "horizontal") {
    for (let i = 0; i < ship.length; i++) {
      if (orientation === "vertical") {
        this.board[xCoordinate][yCoordinate + i] = ship;
      } else {
        this.board[xCoordinate + i][yCoordinate] = ship;
      }
      this.ships.push(ship);
    }
  }

  receiveAttack(xCoordinate, yCoordinate) {
    if (this.board[xCoordinate][yCoordinate] instanceof Ship) {
      this.board[xCoordinate][yCoordinate].hit();
      return true;
    } else {
      this.missedShots.push([xCoordinate, yCoordinate]);
      return false;
    }
  }

  allSunk() {
    let sunkCount = 0;
    this.ships.forEach((ship) => {
      if (ship.isSunk()) {
        sunkCount++;
      }
      sunkCount;
    });
    if (sunkCount === this.ships.length) {
      return true;
    } else {
      return false;
    }
  }
}

export { Ship, Gameboard };
