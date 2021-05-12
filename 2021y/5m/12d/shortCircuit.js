// && 연산자로 코드 단축시키기
const dog = {
    name: '멍멍이',
};

function getName(animal) {
    return animal && animal.name;
}
// A && B 연산자를 사용할 때 A가 Truthy 한 값이면 B가, Falsy 한 값이면 A가 결과값이 된다.

const name = getName(dog);
console.log(name); // 멍멍이

// && 사용 예시
console.log(true && 'hello'); // hello
console.log(false && 'hello'); // false
console.log('hello' && 'bye'); // bye
console.log(null && 'hello'); // null
console.log(undefined && 'hello'); // undefiend
console.log('' && 'hello'); // ''
console.log(0 && 'hello'); // 0
console.log(1 && 'hello'); // hello
console.log(1 && 1); // 1

// || 연산자로 코드 단축시키기
const namelessDog = {
    name: '',
};

function getName(animal) {
    const name = animal && animal.name;
    return name || '이름이 없는 동물입니다.';
}
// A || B 연산자를 사용할 때 A가 Truthy 한 값이면 A가, Falsy 한 값이면 B가 결과값이 된다.

const _name = getName(namelessDog);
console.log(_name); // 이름이 없는 동물입니다.
