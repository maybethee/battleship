/* eslint-disable no-undef */
import { Ship, Gameboard, Player, GameController } from "./index";
jest.mock("./dom.js");

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

  describe("Gameboard place method", () => {
    beforeEach(() => {
      newGameboard = new Gameboard();
      x = 3;
      y = 4;
      newShip = new Ship(3);
    });

    test("only coords where ship was placed should be a Ship object", () => {
      newGameboard.placeShip(newShip, x, y);
      expect(newGameboard.board[y][x]).toBeInstanceOf(Ship);
      expect(newGameboard.board[1][1]).not.toBeInstanceOf(Ship);
    });

    describe("when orientation argument is vertical", () => {
      beforeEach(() => {
        newGameboard.placeShip(newShip, x, y, "vertical");
      });

      test("Cell vertically next to first cell should be the same ship object", () => {
        expect(newGameboard.board[y][x + 1]).toBe(newShip);
      });

      test("Cell horizontally next to first cell should NOT be the same ship object", () => {
        expect(newGameboard.board[y + 1][x]).not.toBe(newShip);
      });
    });

    describe("when orientation argument is horizontal", () => {
      beforeEach(() => {
        newGameboard.placeShip(newShip, x, y, "horizontal");
      });
      test("Cell horizontally next to first cell should be the same ship object", () => {
        expect(newGameboard.board[y + 1][x]).toBe(newShip);
      });

      test("Cell vertically next to first cell should NOT be the same ship object", () => {
        expect(newGameboard.board[y][x + 2]).not.toBe(newShip);
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
        expect(newGameboard.receiveAttack(y + 1, x)).toBe(true);
      });

      test("calls hit method", () => {
        const spy = jest.spyOn(newShip, "hit");

        newGameboard.receiveAttack(y + 1, x);

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

    // to write:
    // describe("when receiveAttack coordinates are duplicated", () => {
    //   test("when attack would hit a ship, does not call hit method the second time", () => {
    //     newGameboard.receiveAttack(y, x)
    //     // expect it to break out of function?
    //     // expect(newGameboard.receiveAttack(y, x)).toBe(true);
    //   });
    //   test("when attack would miss, does not add coordinates to missed shots array twice", () => {
    //     newGameboard.receiveAttack(y, x - 1)
    //     // expect it to break out of function?
    //     // expect(newGameboard.receiveAttack(y, x)).toBe(true);
    //   });
    // });
  });

  describe("allSunk method", () => {
    let newX;
    let newY;
    let newShip2;

    beforeEach(() => {
      newGameboard = new Gameboard();
      x = 2;
      y = 2;
      newShip = new Ship(2);
      newGameboard.placeShip(newShip, x, y);
      newX = 7;
      newY = 6;
      newShip2 = new Ship(3);

      newGameboard.placeShip(newShip, x, y);
      newGameboard.placeShip(newShip2, newX, newY, "vertical");
      newGameboard.printBoard();

      newGameboard.receiveAttack(y, x);
      newGameboard.receiveAttack(y + 1, x);
    });

    test("returns true when all ships are sunk", () => {
      newGameboard.receiveAttack(newY, newX);
      newGameboard.receiveAttack(newY, newX + 1);
      newGameboard.receiveAttack(newY, newX + 2);

      expect(newGameboard.allSunk()).toBe(true);
    });

    test("returns false when not all ships are sunk", () => {
      newGameboard.receiveAttack(newY, newX);

      expect(newGameboard.allSunk()).toBe(false);
    });
  });
});

describe("Player class", () => {
  let newPlayer;
  newPlayer = new Player("human");

  test("should be constructed with a new Gameboard object", () => {
    expect(newPlayer.board).toBeInstanceOf(Gameboard);
  });
});

describe("GameController class", () => {
  let game;
  game = new GameController();

  test("players array should have 2 player objects", () => {
    expect(game.players.length).toBe(2);
    expect(game.players[0]).toBeInstanceOf(Player);
    expect(game.players[1]).toBeInstanceOf(Player);
  });

  test("currentPlayer is set to the first element in the players array", () => {
    expect(game.currentPlayer).toBe(game.players[0]);
  });

  // not sure if gameStart is necessary
  describe("gameStart() method", () => {
    const spy = jest.spyOn(game, "playTurn");
    game.gameStart();

    test("calls playTurn() with currentPlayer", () => {
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(game.getCurrentPlayer());

      spy.mockRestore();
    });
  });

  describe("playTurn method", () => {
    // const spy = jest.spyOn(game, "computerTurn");

    test("currentIsHuman is false when currentPlayer is computer", () => {
      game.currentPlayerIndex = 1;
      game.playTurn();
      expect(game.currentIsHuman).toBe(false);
    });

    test("currentIsHuman is true when currentPlayer is human", () => {
      game.currentPlayerIndex = 0;
      game.playTurn();
      expect(game.currentIsHuman).toBe(true);
    });
  });

  // describe("computerTurn method", () => {
  //   const spy = jest.spyOn(game.getOpposingPlayer().board, "receiveAttack");
  //   test("should call receiveAttack", () => {
  //     game.computerTurn();
  //     expect(spy).toHaveBeenCalled();

  //     spy.mockRestore();
  //   });
  // });

  describe("winCheck method", () => {
    test("should call allSunk", () => {
      const spy = jest.spyOn(game.getOpposingPlayer().board, "allSunk");
      game.winCheck();
      expect(spy).toHaveBeenCalled();

      spy.mockRestore();
    });
  });

  test("nextTurn() sets currentPlayer to players[0] after players[1]'s turn", () => {
    game.currentPlayerIndex = 1;
    game.nextTurn();
    expect(game.getCurrentPlayer()).toBe(game.players[0]);
  });
});
