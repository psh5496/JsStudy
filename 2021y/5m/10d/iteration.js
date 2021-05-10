// 반복문, 특정 작업을 반복적으로 할 때 사용하는 구문

// for문, 특정 값에 변화를 주어가면서 조건을 만족하면 계속해서 반복
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// while문, 특정 조건이 참이라면 계속해서 반복
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// 조건식이 언젠가 false가 되지 않는다면 반복문이 끝나지 않음

// for of문, 배열에 관한 반복문
let array = [1, 2, 3, 4, 5];
for (let value of array) {
  console.log(value);
}

// 객체의 정보를 배열 형태로 받아올 수 있는 함수들
const dog = {
  name: "멍멍이",
  sound: "멍멍",
  age: 2,
};

console.log(Object.entries(dog)); // [[키, 값], [키, 값]] 형태의 2차원 배열로 반환
console.log(Object.keys(dog)); // [키, 키, 키] 형태의 배열로 변환
console.log(Object.values(dog)); // [값, 값, 값] 형태의 배열로 변환

// for in문, 객체에 관한 반복문
for (let key in dog) {
  console.log(`${key}: ${dog[key]}`);
}

// break, countinue를 통해 반복문을 벗어나거나 그 다음 루프를 돌게 할 수 있다.
for (let i = 0; i < 10; i++) {
  if (i === 2) continue;
  console.log(i);
  if (i === 5) break;
}
// i가 2일 때 countinue를 통해 2를 출력하지 않고 그 다음 루프로 감
// i가 5일 때 break를 통해 반복문을 빠져나옴

// 배열을 파라미터로 받아 3보다 큰 수만 출력하는 함수
function biggerThanThree(numbers) {
  const array = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= 3) continue;
    array.push(numbers[i]);
  }
  return array;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers));
