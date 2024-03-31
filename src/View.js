import { Console } from "@woowacourse/mission-utils";

const View = {
  getInput: async (promptMessage) => {
    const input = await Console.readLineAsync(promptMessage);
    return input;
  },

  printPosition: (car) => {
    Console.print(`${car.name} : ${"-".repeat(car.position)}`);
  },

  printWinner: (winners) => {
    Console.print(
      `최종 우승자 : ${winners.map((winner) => winner.name).join(", ")}`
    );
  },
  getCarNames: async () => {
    const carNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n"
    );
    return carNames.split(",");
  },

  getTryCount: async () => {
    const tryCount = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    if (
      isNaN(tryCount) ||
      tryCount <= 0 ||
      isNaN(Number(tryCount)) ||
      tryCount % 1 !== 0
    ) {
      throw new Error("[ERROR] 입력된 시도 횟수는 잘못된 값입니다.");
    }
    return tryCount;
  },
};

export default View;
