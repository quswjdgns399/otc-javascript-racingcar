import CarManager from "../src/CarManager";

describe("CarManager Test", () => {
  let carManager;

  beforeEach(() => {
    carManager = new CarManager();
  });

  test("CarManager 객체 생성", () => {
    expect(carManager.carNames).toEqual([]);
  });

  test("createCar 메서드 호출 시 carNames 배열에 이름 추가", () => {
    carManager.createCar("Tesla");
    expect(carManager.carNames).toContain("Tesla");
  });

  test("중복된 이름으로 자동차 생성 시 에러 발생", () => {
    carManager.createCar("Tesla");
    expect(() => carManager.createCar("Tesla")).toThrowError(
      "[ERROR] 중복된 자동차 이름이 있습니다."
    );
  });

  test("5자를 초과하는 이름으로 자동차 생성 시 에러 발생", () => {
    expect(() => carManager.createCar("TooLongName")).toThrowError(
      "[ERROR] 자동차 이름은 5자를 넘을 수 없습니다."
    );
  });

  test("빈 이름으로 자동차 생성 시 에러 발생", () => {
    expect(() => carManager.createCar("")).toThrowError(
      "[ERROR] 자동차 이름은 비어있을 수 없습니다."
    );
  });
});
