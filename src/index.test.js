/* eslint-disable no-undef */
import { Ship } from "./index";

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
