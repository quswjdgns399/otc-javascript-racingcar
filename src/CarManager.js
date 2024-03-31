import Car from "../src/Car";

class CarManager {
  constructor() {
    this.carNames = [];
  }

  createCar(name) {
    // 이름 앞뒤 공백 제거
    const trimmedName = name.trim();
    this.carNames.push(trimmedName);

    // 중복된 이름이 있는지 확인
    if (new Set(this.carNames).size !== this.carNames.length) {
      throw new Error("[ERROR] 중복된 자동차 이름이 있습니다.");
    }
    // 이름이 5자를 초과하는지 확인
    if (trimmedName.length > 5) {
      throw new Error("[ERROR] 자동차 이름은 5자를 넘을 수 없습니다.");
    }
    // 이름이 비어있는지 확인
    if (trimmedName === "") {
      throw new Error("[ERROR] 자동차 이름은 비어있을 수 없습니다.");
    }
    // Car 객체 생성
    return new Car(trimmedName);
  }
}

export default CarManager;
