// if, 특정 조건을 만족하면 실행
let a = 1;
if (a === 1) {
  console.log("a는 1입니다.");
}

// if-else, 특정 조건을 만족할 때와 아닐 때를 구분해서 실행
let b = 5;
if (b > 10) {
  console.log("b는 10보다 큽니다.");
} else {
  console.log("b는 10보다 작습니다.");
}

// if-else if, 여러 조건을 검사하여 실행
let c = 7;
if (c === 5) {
  console.log("c는 5입니다.");
} else if (c === 10) {
  console.log("c는 10입니다.");
} else {
  console.log("c는 5도 10도 아닙니다.");
}

// switch/case, 특정 값이 무엇이냐에 따라 실행
let device = "iphone";

switch (device) {
  case "iphone":
    console.log("아이폰 입니다!");
    break; // break문을 사용하지 않으면 그 다음 코드까지 실행되버림
  case "ipad":
    console.log("아이패드 입니다!");
    break;
  case "galaxy note":
    console.log("갤럭시 노트입니다!");
    break;
  default:
    // case에 없는 값일 경우 실행됨
    console.log("잘 모르겠네요..");
}
