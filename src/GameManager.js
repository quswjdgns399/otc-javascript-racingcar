import { MissionUtils } from "@woowacourse/mission-utils";

class GameManager {
  makeRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }

  GoOrNot() {
    if (this.makeRandomNumber() >= 4) {
      return true;
    }
    return false;
  }

  getWinner(cars) {
    const maxPosition = Math.max(...cars.map((car) => car.position));
    const winners = cars.filter((car) => car.position === maxPosition);
    return winners;
  }
}

export default GameManager;
