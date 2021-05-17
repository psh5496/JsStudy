let value = 1; // 바뀔 수 있는 값 (변수) 선언
console.log(value);
value = 2;
console.log(value);
// let value = 2;   한 번 선언하면 똑같은 이름으로 선언할 수 없음

const a = 1; // 바뀌지 않는 값 (상수) 선언
console.log(a);
// a = 2;   한 번 상수로 선언했으면 값을 바꿀 수 없음
// const a = 2; 마찬가지로 한 번 선언하면 똑같은 이름으로 선언할 수 없음

var b = 1; // let과 비슷하나 사용할 수 있는 범위가 다르고 현재는 사용되지 않음
var b = 3; // 똑같은 이름으로 여러 번 선언할 수 있음
console.log(b);
