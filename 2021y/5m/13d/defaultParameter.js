// ES5 버전에선 기본 값을 주려면 아래와 같이 하는 것이 최선이였다.
function calculateCircleArea(r) {
    const radius = r || 1;
    return Math.PI * radius * radius;
}
console.log(calculateCircleArea());

// ES6에 추가된 새로운 문법
function _calculateCircleArea(r = 1) {
    return Math.PI * r * r;
}
console.log(_calculateCircleArea());
// 기본 파라미터 문법이라고 하며, 화살표 함수에서도 사용할 수 있다.
