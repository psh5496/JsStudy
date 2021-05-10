// 배열, 여러개의 항목들이 들어있는 리스트
// 배열을 선언 할 때 대괄호([])를 이용함
const array = [1, 2, 3, 4, 5];

// 객체 배열
const objects = [{ name: "홍길동" }, { name: "유관순" }];

// 배열의 n번째 값을 조회하고 싶으면 배열명[n-1];
// 배열은 0부터 시작함
console.log(objects[0]);
console.log(objects[1]);

// push, 배열에 새 항목을 추가하는 내장 함수
objects.push({
  name: "이순신",
});

console.log(objects);

// length, 배열의 크기를 알 수 있음
console.log(objects.length);

objects.push({
  name: "박혁거세",
});

console.log(objects.length);
