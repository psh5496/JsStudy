// spread 문법, 기본 객체를 건드리지 않고 프로퍼티를 추가해서 새로운 객체를 만든다.
const slime = {
    name: '슬라임',
    texture: '말랑말랑',
};

const purpleSlime = {
    ...slime,
    color: 'purple',
};

console.log(slime);
console.log(purpleSlime);

const animals = ['개', '고양이', '참새'];
const anotherAnimals = [...animals, '비둘기'];
console.log(animals);
console.log(anotherAnimals);
// spread 문법은 배열에도 사용할 수 있음.

// rest 문법, 원하는 값을 꺼내고 나머지 값을 넣어 새로운 객체를 만든다.
const happyBoy = {
    feeling: 'happy',
    type: 'boy',
};

const { feeling, ...boy } = happyBoy;
console.log(feeling);
console.log(boy);

const numbers = [0, 1, 2, 3, 4, 5, 6];
const [one, ...rest] = numbers;
console.log(one);
console.log(rest);
// 배열에서도 사용할 수 있음.

function sum(...rest) {
    return rest.reduce((acc, current) => acc + current, 0);
}

const values = [1, 2, 3, 4, 5, 6];
const result = sum(...values);
console.log(result);
// 함수의 파라미터가 몇 개가 될 지 모르는 상황에서 쓰면 유용함.
