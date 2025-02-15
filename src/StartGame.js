import View from "./View.js";
import { Console } from "@woowacourse/mission-utils";

class StartGame {
  constructor(carManager, gameManager, syncAsyncManager) {
    this.carManager = carManager;
    this.gameManager = gameManager;
    this.syncAsyncManager = syncAsyncManager;
  }

  async play() {
    const carNames = await View.getCarNames();
    const cars = carNames
      .map((name) => this.carManager.createCar(name))
      .filter(Boolean);
    const tryCount = await View.getTryCount();

    Console.print("\n실행 결과");
    let tries = Array.from({ length: tryCount }, (_, i) => i);
    for (const _ of tries) {
      const results = await this.syncAsyncManager.playRound(cars);
      results.forEach((car) => View.printPosition(car));
      Console.print("");
    }
    const winners = this.gameManager.getWinner(cars);
    View.printWinner(winners);
  }
}

export default StartGame;
