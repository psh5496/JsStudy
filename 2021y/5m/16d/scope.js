const value = 'hello!';
// Global Scope로 선언된 값으로 어디서든 사용 가능

function myFunction() {
    console.log(`myFunction: ${value}`);
}

function otherFunction() {
    const value = 'bye!';
    // Function Scope로 선언된 값으로 함수 내에서만 사용 가능 (global scope로 선언된 값에 영향을 주지 않음)
    console.log(`otherFunction: ${value}`);
}

myFunction();
otherFunction();
console.log(`global scope: ${value}`);

function functionInBlock() {
    const value = 'bye!';
    if (true) {
        const value = 'world!';
        // Block Scope로 선언된 값으로 블록 내부에서만 사용 가능 (var는 예외)
        console.log(`block scope: ${value}`);
    }
    console.log(`function scope: ${value}`);
}

functionInBlock();
