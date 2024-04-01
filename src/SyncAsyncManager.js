class SyncAsyncManager {
  constructor(gameManager) {
    this.gameManager = gameManager;
    this.sleep = (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };

    this.playTurn = async (car) => {
      await this.sleep(Math.random() * 1000);
      if (this.gameManager.GoOrNot()) {
        car.move();
      }
      return car;
    };

    this.playRound = async (cars) => {
      const results = [];
      for (const car of cars) {
        const result = await this.playTurn(car);
        results.push(result);
      }
      return results;
    };
  }
}

export default SyncAsyncManager;
