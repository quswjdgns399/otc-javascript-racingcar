import View from "../src/View";
import Car from "../src/Car";
import { Console } from "@woowacourse/mission-utils";

jest.mock("@woowacourse/mission-utils");

describe("View 테스트", () => {
  test("getInput 메서드는 사용자로부터 입력을 받음", async () => {
    const mockInput = "Test Input";
    Console.readLineAsync.mockResolvedValue(mockInput);
    const input = await View.getInput("Prompt Message");
    expect(input).toBe(mockInput);
  });

  test("printPosition 메서드는 자동차의 위치를 출력", () => {
    const car = new Car("Test");
    const tryCount = 3;
    for (let i = 0; i < tryCount; i++) {
      car.move();
    }
    View.printPosition(car);
    expect(Console.print).toHaveBeenCalledWith("Test : ---");
  });

  test("printWinner 메서드는 우승자를 출력", () => {
    const winners = [new Car("Test1", 3), new Car("Test2", 3)];
    View.printWinner(winners);
    expect(Console.print).toHaveBeenCalledWith("최종 우승자 : Test1, Test2");
  });
});
