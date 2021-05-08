// function, 특정 코드를 하나의 명령으로 실행할 수 있게 함
function sum(a, b) {
  return a + b; // return문을 통해 값이 전달되며, 함수가 끝남
}

const result = sum(2, 3);
console.log(result);

// 점수를 등급으로 변환하는 함수
function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score === 89) {
    return "B+";
  } else if (score >= 80) {
    return "B";
  } else if (score === 79) {
    return "C+";
  } else if (score >= 70) {
    return "C";
  } else if (score === 69) {
    return "D+";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}
const grade = getGrade(90);
console.log(grade);

// 이름을 받고 인사를 하는 함수
function hello(name) {
  console.log(`Hello, ${name}!`); // ${}, 템플릿 리터럴이라는 문법임
}
hello("JavaScript");

// 화살표 함수
const multiple = (a, b) => {
  return a * b;
};
console.log(multiple(2, 5));

// 일반 함수와 화살표 함수는 가르키는 this가 서로 다르다.
