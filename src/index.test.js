/* eslint-disable no-undef */
import { Ship, Gameboard } from "./index";

describe("Ship methods", () => {
  let newShip;

  beforeEach(() => {
    newShip = new Ship(3);
  });

  test("new Ship object's hitCount is 1 after being hit", () => {
    newShip.hit();
    expect(newShip.hitCount).toBe(1);
  });

  test("Ship object's hitCount is 2 after being hit twice", () => {
    newShip.hit();
    newShip.hit();
    expect(newShip.hitCount).toBe(2);
  });

  test("isSunk is false when hitCount !== length", () => {
    newShip.hit();
    newShip.hit();
    expect(newShip.isSunk()).toBe(false);
  });

  test("isSunk is true when hitCount === length", () => {
    newShip.hit();
    newShip.hit();
    newShip.hit();
    expect(newShip.isSunk()).toBe(true);
  });

  test("isSunk is true when hitCount > length", () => {
    newShip.hit();
    newShip.hit();
    newShip.hit();
    newShip.hit();
    expect(newShip.isSunk()).toBe(true);
  });
});

describe("Gameboard methods", () => {
  let newGameboard;
  let x;
  let y;
  let newShip;

  describe("Gameboard.place method", () => {
    beforeEach(() => {
      newGameboard = new Gameboard();
      x = 3;
      y = 4;
      newShip = new Ship(3);
    });

    test("only coords where ship was placed should be a Ship object", () => {
      newGameboard.placeShip(newShip, x, y);
      expect(newGameboard.board[x][y]).toBeInstanceOf(Ship);
      expect(newGameboard.board[1][1]).not.toBeInstanceOf(Ship);
    });

    describe("when orientation argument is horizontal", () => {
      beforeEach(() => {
        newGameboard.placeShip(newShip, x, y);
      });

      test("Cell horizontally next to first cell should be the same ship object", () => {
        expect(newGameboard.board[x + 1][y]).toBe(newShip);
      });

      test("Cell vertically next to first cell should NOT be the same ship object", () => {
        expect(newGameboard.board[x][y + 1]).not.toBe(newShip);
      });
    });

    describe("when orientation argument is vertical", () => {
      beforeEach(() => {
        newGameboard.placeShip(newShip, x, y, "vertical");
      });
      test("Cell vertically next to first cell should be the same ship object", () => {
        expect(newGameboard.board[x][y + 2]).toBe(newShip);
      });

      test("Cell horizontally next to first cell should NOT be the same ship object", () => {
        expect(newGameboard.board[x + 1][y]).not.toBe(newShip);
      });
    });
  });

  describe("receiveAttack method", () => {
    beforeEach(() => {
      newGameboard = new Gameboard();
      x = 3;
      y = 4;
      newShip = new Ship(3);
      newGameboard.placeShip(newShip, x, y);
    });

    describe("when receiveAttack coordinates are a ship", () => {
      test("returns true", () => {
        expect(newGameboard.receiveAttack(x + 1, y)).toBe(true);
      });

      test("calls hit method", () => {
        const spy = jest.spyOn(newShip, "hit");

        newGameboard.receiveAttack(x + 1, y);

        // calls hit when hit
        expect(spy).toHaveBeenCalled();

        spy.mockRestore();
      });
    });

    describe("when attack misses", () => {
      test("returns false", () => {
        expect(newGameboard.receiveAttack(x, y + 1)).toBe(false);
      });

      test("does not call hit method", () => {
        const spy = jest.spyOn(newShip, "hit");

        newGameboard.receiveAttack(x, y + 1);

        expect(spy).not.toHaveBeenCalled();

        spy.mockRestore();
      });

      test("records the coordinates of the missed shot", () => {
        newGameboard.receiveAttack(x, y + 1);

        expect(newGameboard.missedShots.at(-1)).toEqual([x, y + 1]);
      });
    });
  });

  describe("allSunk method", () => {
    let newX;
    let newY;
    let newShip2;

    beforeEach(() => {
      newGameboard = new Gameboard();
      x = 3;
      y = 4;
      newShip = new Ship(2);
      newGameboard.placeShip(newShip, x, y);
      newX = 2;
      newY = 5;
      newShip2 = new Ship(3);

      newGameboard.placeShip(newShip, x, y);
      newGameboard.placeShip(newShip2, newX, newY, "vertical");

      newGameboard.receiveAttack(x, y);
      newGameboard.receiveAttack(x + 1, y);
    });

    test("returns true when all ships are sunk", () => {
      newGameboard.receiveAttack(newX, newY);
      newGameboard.receiveAttack(newX, newY + 1);
      newGameboard.receiveAttack(newX, newY + 2);

      expect(newGameboard.allSunk()).toBe(true);
    });

    test("returns false when not all ships are sunk", () => {
      newGameboard.receiveAttack(newX, newY);

      expect(newGameboard.allSunk()).toBe(false);
    });
  });
});
