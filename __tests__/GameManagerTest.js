import GameManager from "../src/GameManager.js";

describe("GameManager Test", () => {
  let gameManager;

  beforeEach(() => {
    gameManager = new GameManager();
  });

  test("0~9 사이의 랜덤 숫자 생성", () => {
    const randomNumber = gameManager.makeRandomNumber();
    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThanOrEqual(9);
  });

  test("랜덤 숫자가 4 이상일 경우 GoOrNot 메서드는 true를 반환", () => {
    jest.spyOn(gameManager, "makeRandomNumber").mockReturnValue(4);
    expect(gameManager.GoOrNot()).toBe(true);

    jest.spyOn(gameManager, "makeRandomNumber").mockReturnValue(3);
    expect(gameManager.GoOrNot()).toBe(false);
  });

  test("getWinner 메서드는 최대 위치에 있는 자동차를 반환", () => {
    const cars = [
      { position: 1 },
      { position: 3 },
      { position: 2 },
      { position: 3 },
    ];
    const winners = gameManager.getWinner(cars);
    expect(winners).toEqual([{ position: 3 }, { position: 3 }]);
  });
});
