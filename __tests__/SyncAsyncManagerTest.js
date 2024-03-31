import SyncAsyncManager from "../src/SyncAsyncManager";
import GameManager from "../src/GameManager";
import Car from "../src/Car";

describe("SyncAsyncManager 테스트", () => {
  let syncAsyncManager;
  let gameManager;

  beforeEach(() => {
    gameManager = new GameManager();
    syncAsyncManager = new SyncAsyncManager(gameManager);
  });

  test("sleep 메서드는 주어진 시간 동안 대기", async () => {
    const startTime = Date.now();
    await syncAsyncManager.sleep(1000);
    const endTime = Date.now();
    const elapsedTime = endTime - startTime;
    expect(elapsedTime).toBeGreaterThanOrEqual(1000);
  });

  test("playTurn 메서드는 자동차를 움직이거나 움직이지 않게 함", async () => {
    const car = new Car("Test");
    jest.spyOn(gameManager, "GoOrNot").mockReturnValue(true);
    await syncAsyncManager.playTurn(car);
    expect(car.position).toBe(1);
  });

  test("playRound 메서드는 모든 자동차에 대해 playTurn을 호출", async () => {
    const cars = [new Car("Test1"), new Car("Test2")];
    jest.spyOn(syncAsyncManager, "playTurn").mockResolvedValue();
    await syncAsyncManager.playRound(cars);
    expect(syncAsyncManager.playTurn).toHaveBeenCalledTimes(cars.length);
  });
});
