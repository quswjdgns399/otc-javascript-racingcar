import CarManager from "./CarManager.js";
import GameManager from "./GameManager.js";
import SyncAsyncManager from "./SyncAsyncManager.js";
import StartGame from "./StartGame.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.carManager = new CarManager();
    this.gameManager = new GameManager();
    this.syncAsyncManager = new SyncAsyncManager(this.gameManager);
    this.startGame = new StartGame(
      this.carManager,
      this.gameManager,
      this.syncAsyncManager
    );
  }

  async play() {
    try {
      await this.startGame.play();
    } catch (error) {
      Console.print(error.message);
      if (process.env.NODE_ENV === "test") {
        throw error;
      }
    }
  }
}

export default App;
