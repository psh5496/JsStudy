// 비구조화 할당 시 기본값 설정
const object = { a: 1 };

function print({ a, b = 2 }) {
    console.log(a);
    console.log(b);
}

print(object);

// 비구조화 할당 시 이름 바꾸기
const animal = {
    name: '멍멍이',
    type: '개',
};

const { name: nickname } = animal;
console.log(nickname);
// : 를 사용하여 animal 객체 안에 있는 name을 nickname이라는 변수로 선언했다.

// 배열 비구조화 할당
const array = [1];
const [one, two = 2] = array;

console.log(one); // 1
console.log(two); // 2

// 깊은 값 꺼내기
const deepObject = {
    state: {
        information: {
            name: 'velopert',
            languages: ['korean', 'english', 'chinese'],
        },
    },
    value: 5,
};

// 첫 번째 방법, 비구조화 할당 두 번 사용하기
const { name, languages } = deepObject.state.information;
const { value } = deepObject;

const extracted = {
    name,
    languages,
    value,
};
// object-shorthand 문법, key 이름으로 선언된 값이 존재할 경우 바로 매칭 시켜줌.

console.log(extracted);

// 두 번째 방법, 한 번에 모두 추출하기
const {
    state: {
        information: { name2, languages2 },
    },
    value2,
} = deepObject;

const extracted2 = {
    name2,
    languages2,
    value2,
};

console.log(extracted2);
