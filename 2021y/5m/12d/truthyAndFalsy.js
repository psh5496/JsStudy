function print(person) {
    if (!person) {
        console.log('person이 없습니다.');
        return;
    }
    console.log(person.name);
}

const person = null;
print(person); // null은 falsy한 값으로 앞 !를 붙이면 true가 된다.

// falsy한 값들, 다음 코드는 모두 true를 출력한다.
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!NaN);

// 그 외에 값은 모두 truthy한 값, 다음 코드는 모두 false를 출력한다.
console.log(!3);
console.log(!'hello');
console.log(!['array?']);
console.log(![]);
console.log(!{ value: 1 });

// value 값의 존재 유무에 따라 true 및 false로 전환
const value = { a: 1 };
const truthy = !!value;
// !value는 false가 되고 !false는 true가 된다.
