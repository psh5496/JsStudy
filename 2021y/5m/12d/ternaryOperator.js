const array = [];
let text = '';

if (array.length === 0) {
    text = '배열이 비어있습니다.';
} else {
    text = '배열이 비어있지 않습니다.';
}

console.log(text);

// 다음과 같은 코드를 삼항 연산자를 이용해 표현
const _array = [];
let _text = array.length === 0 ? '배열이 비어있습니다.' : '배열이 비어있지 않습니다';
// (조건 ? true 일 때 : false 일 때) 이런 형식으로 사용

console.log(_text);

// 삼항연산자를 중첩하여 사용할 수 있다.
const condition1 = false;
const condition2 = false;

const value = condition1 ? '와우!' : condition2 ? 'blabla' : 'foo';

console.log(value);
// 이런 경우는 가독성이 좋지 않아서 if문으로 처리하는 게 낫다.
