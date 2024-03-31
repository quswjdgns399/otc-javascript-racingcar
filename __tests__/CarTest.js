import Car from "../src/Car";

describe("Car Test", () => {
  test("Car 객체 생성", () => {
    const car = new Car("Tesla");
    expect(car.name).toBe("Tesla");
    expect(car.position).toBe(0);
  });

  test("move 메서드 호출 시 position이 1 증가", () => {
    const car = new Car("Tesla");
    car.move();
    expect(car.position).toBe(1);
  });
});
