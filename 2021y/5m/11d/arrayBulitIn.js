// 배열 내장함수

// forEach, for문을 대체할 수 있음.
const superheroes = ["아이언맨", "캡틴 아메리카", "토르", "닥터 스트레인지"];

superheroes.forEach((hero) => {
  console.log(hero);
});
// 함수 형태의 파라미터를 전달하는 것을 콜백함수라고 한다.

// map, 배열 안의 각 원소를 변환하여 새로운 배열을 만든다.
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const squared = array.map((n) => n * n);
console.log(squared);

// indexOf, 원하는 항목이 몇 번째 원소인지 찾아주는 함수
const animal = ["dog", "cat", "cow", "chicken"];
console.log(animal.indexOf("cat"));

// findIndex, 배열에 있는 값이 객체나 배열일 때 몇 번째 원소인지 찾아주는 함수
const greetings = [
  {
    id: 1,
    text: "안녕하세요",
    done: true,
  },
  {
    id: 2,
    text: "감사합니다.",
    done: true,
  },
  {
    id: 3,
    text: "안녕히 가세요",
    done: false,
  },
];
console.log(greetings.findIndex((todo) => todo.id === 3));

// find, findIndex와 비슷하지만 몇 번째 인지 반환하는 것이 아니라 값 자체를 반환한다.
console.log(greetings.find((todo) => todo.id === 3));

// filter, 배열에서 특정 조건을 만족하는 값들만 추출하여 새로운 배열을 반환한다.
console.log(greetings.filter((todo) => todo.done === false));

// splice, 배열에서 특정 항목을 제거하는 함수
const numbers = [1, 2, 3, 4, 5];
const index = numbers.indexOf(4);
numbers.splice(index, 1); // 첫 번째 파라미터는 어떤 인덱스부터 지울 지, 두 번째 파라미터는 몇 개를 지울 지를 의미함
console.log(numbers);

// slice, 베열을 잘라낼 때 사용하며, 기존의 배열은 건드리지 않는다.
const sports = ["축구", "농구", "야구", "배구"];
const sliced = sports.slice(0, 2);
console.log(sliced);
console.log(sports);

// shift와 pop, shift는 배열의 첫 번째 원소를, pop은 배열의 마지막 원소를 추출한다.
const frults = ["grape", "apple", "mango", "melon"];
console.log(frults.shift());
console.log(frults); // shift를 하면 기존 배열에서 해당 원소가 사라짐
console.log(frults.pop());
console.log(frults); // pop을 하면 기존 배열에서 해당 원소가 사라짐

// unshift, shift의 반대로 배열의 맨 앞에 새 원소를 추가한다.
frults.unshift("peach");
console.log(frults);

// concat, 여러 개의 배열을 하나의 배열로 합침.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(arr1.concat(arr2));
// concat 함수는 arr1과 arr2에 변화를 주지 않는다.

// join, 배열 안의 값들을 문자열 형태로 합쳐준다.
const _arr = [1, 2, 3, 4, 5];
console.log(_arr.join());
console.log(_arr.join(" "));
console.log(_arr.join(", "));

// reduce
const _numbers = [1, 2, 3, 4, 5];
let sum = _numbers.reduce((accumulator, current) => {
  console.log({ accumulator, current });
  return accumulator + current;
}, 0);
console.log(sum);
// 첫 번째 파라미터에 콜백함수를 전달하고, 두 번째 파라미터는 초깃값을 전달했다.
