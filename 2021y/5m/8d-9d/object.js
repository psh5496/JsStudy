// 객체, 하나의 이름에 여러 종류의 값을 넣을 수 있게 하는 집합체

const ironMan = {
  name: "토니 스타크",
  actor: "로버트 다우니 주니어",
  alias: "아이언맨",
};
// 값을 집어 넣을 때는 '키: 원하는 값'의 형태로 넣는다.

const captainAmerica = {
  name: "스티븐 로저스",
  actor: "크리스 에반스",
  alias: "캡틴 아메리카",
};

function say(hero) {
  console.log(
    `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`
  );
}

/* 객체 비구조화 할당 
function say({ alias, name, actor }) {
    console.log(`${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`);
}
*/

say(ironMan);
say(captainAmerica);

// 객체 안에 함수 선언
const dog = {
  name: "멍멍이",
  sound: "멍멍!",
  say: function () {
    console.log(this.sound); // 객체 안에서의 함수는 자신이 속한 객체를 가리킴
  },
};

dog.say();

const numbers = {
  a: 1,
  b: 2,
  // Getter 함수
  get sum() {
    console.log("sum 함수가 실행됩니다!");
    return this.a + this.b;
  },
};

console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum);
// 특정 값을 조회하려고 하면 Getter 함수를 호출함

const _numbers = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log("calculate");
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  // Setter 함수
  set a(value) {
    console.log(`a가 ${value}(으)로 바뀝니다.`);
    this._a = value;
    this.calculate();
  },
  set b(value) {
    console.log(`b가 ${value}(으)로 바뀝니다.`);
    this._b = value;
    this.calculate();
  },
};

console.log(_numbers.sum);
_numbers.a = 5;
console.log(_numbers.sum);
_numbers.b = 7;
console.log(_numbers.sum);
_numbers.a = 9;
console.log(_numbers.sum);
// 값이 바뀔 때마다 Setter 함수를 호출함
