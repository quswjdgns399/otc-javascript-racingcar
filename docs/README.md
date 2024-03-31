# 미션 - 자동차 경주

### 사용 라이브러리

    @woowacourse/mission-utils

## 기능 목록

### 자동차 이름 입력

- (,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
  - (,)를 기준으로 입력값(자동차 이름) 나누기
  - 앞 뒤 공백 자르기(trim)
  - 5자 이하 여부 확인
  - 이름이 공백인 경우 확인
  - 같은 이름이 있는지 확인
  - 예외 처리 : 사용자가 잘못된 값을 입력한 경우 throw문을 사용해 "[ERROR]"로 시작하는 메시지를 가지는 예외를 발생시킨 후, 애플리케이션은 종료되어야 한다.

### 시도 횟수 입력

- 시도 횟수를 입력받아 전역변수로 선언
  - 앞 뒤 공백 자르기(trim)
  - 입력값이 number인지 확인
  - 입력값이 0보다 큰 수 인지 확인
  - 입력값이 log값인지 확인
  - 예외 처리 : 사용자가 잘못된 값을 입력한 경우 throw문을 사용해 "[ERROR]"로 시작하는 메시지를 가지는 예외를 발생시킨 후, 애플리케이션은 종료되어야 한다.

### 자동차 전진

- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.

  - 랜덤값 생성
  - 전진여부 판단 (0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다)

- 전진 현황 출력

### 우승자 출력

- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.

  - 입력받은 시도 횟수만큼의 실행이 끝나면 각각의 자동차(instance)의 득점현황(Property)를 확인하여 우승자를 판별
  - 우승자가 1명인 경우 -> 출력
  - 우승자가 2명 이상인 경우 -> (,)와 공백을 사용하여 구분 출력

### 게임 시작

- 자동차의 이름 입력
- 시도할 횟수 입력
- 시도 횟수만큼 자동차 전진

### 게임 종료

- 우승자 출력

## 설계

## Controller

### App class

- consturctor() : CarManager, GameManager, SyncAsyncManager 객체를 초기화.

- play() : 게임을 실행하는 메서드. 사용자로부터 자동차 이름과 시도 횟수를 입력받아 게임을 실행하고, 우승자를 출력.

## Model

### Car Class

- constructor(name) :
  - 자동차 이름을 입력받아 초기화.
  - position은 항상 0으로 초기화.
- move() :
  - position을 +1.

### CarManager Class

- constructor() :
  - 입력받은 carName을 배열에 저장.
- createCar(name) :
  - 입력받은 이름으로 자동차를 생성하는 메서드. 이름이 중복되거나, 5자를 초과하거나, 비어있는 경우 Error를 발생.

### GameManager Class

- makeRandomNumber() :
  - 0에서 9 사이의 랜덤한 숫자를 생성하는 메서드.
- GoOrNot() :
  - 자동차가 전진할지 말지를 결정하는 메서드. 랜덤한 숫자가 4 이상일 경우 전진.
- getWinner(cars) :
  - 우승자를 전달하는 메서드. 가장 멀리 이동한 자동차를 반환.

### SyncAsyncManager Class

- constructor(gameManager) :
  - gameManager 객체를 입력받아 초기화.
- sleep(ms) :
  - 주어진 시간 동안 대기하는 메서드.
- playTurn(car) :
  - 한 차례의 턴을 실행하는 메서드. 자동차가 전진할지 말지를 결정하고, 전진할 경우 car.move()호출.
- playRound(cars) :
  - 한 라운드를 실행하는 메서드. 모든 자동차에 대해 playTurn을 실행하고, 각 자동차의 위치를 반환.

## View

### View Class

- static async getInput(promptMessage) :
  - 사용자로부터 입력을 비동기적으로 받는 메서드. 입력 프롬프트 메시지를 인자로 받음.
- static printPosition(car) :
  - 자동차의 현재 위치를 출력하는 메서드. Car 객체를 인자로 받음.
- static printWinner(winners) :
  - 최종 우승자를 출력하는 메서드. 우승자 배열을 인자로 받음.
