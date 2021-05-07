let value = 1; // 변수 선언
value = 2; // 대입 연산자

// 산술 연산자 (+, -, *, /)
let plus = 1 + 2;
console.log(plus);

let minus = 5 - 1;
console.log(minus);

let multipl = 2 * 5;
console.log(multipl);

let division = 9 / 3;
console.log(division);

let increase = 1;
console.log(increase++); // 출력한 뒤 1을 더함 (후위 연산)
console.log(++increase); // 1을 더하고 출력함 (전위 연산)

let n = 1;
n = n + 3;
n += 3; // 위 코드와 똑같은 연산을 수행함 (복합 대입 연산자)

// 논리 연산자 (NOT, AND, OR)
const good = !false; // NOT 연산. true는 false로 false는 true로 바꿈
console.log(good);

const and = true && true; // AND 연산, 양쪽의 값이 둘 다 true 일 때만 결과값이 true
console.log(and);

const or = true || false; // OR 연산, 양쪽의 값 중 하나라도 true면 결과값이 true
console.log(or);

const sequence = !((true && false) || (true && false) || !false);
console.log(sequence); // NOT -> AND -> OR 순으로 연산

// 비교 연산자
const a = 1;
const b = 1;
console.log(a === b); // 두 값이 같으므로 결과값이 true

const x = 1;
const y = 1;
console.log(x !== y); // 두 값이 같으므로 결과값이 false

const big = 20;
const midium = 10;
const small = 1;
console.log(big > small); // 20이 10보다 크므로 true 출력
console.log(midium <= small); // 1은 10보다 작으므로 false 출력

// ===, == 차이점
const value1 = 1;
const value2 = "1";
console.log(value1 === value2); // === 은 타입 검사를 하므로 false 출력
console.log(value1 == value2); // == 은 타입 검사를 하지 않으므로 true 출력

// 문자열 붙이기
const text1 = "안녕";
const text2 = "하세요!";
console.log(text1 + text2);
