// 객체 생성자
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

const dog = new Animal("개", "멍멍이", "멍멍");
const cat = new Animal("고양이", "야옹이", "야옹");

// 프로토타입, 같은 객체 생성자 함수를 사용하는 경우에 특정 함수 또는 값을 재사용 하는 것
Animal.prototype.say = function () {
  console.log(this.sound);
};

Animal.prototype.sharedValue = 1;

dog.say();
cat.say();
console.log(dog.sharedValue);
console.log(cat.sharedValue);

// 객체 생성자 상속받기
function Dog(name, sound) {
  Animal.call(this, "개", name, sound); // 첫 번째 인자에는 this를 넣어주고 그 이후에는 Animal 객체 생성자에서 요구하는 파라미터를 넣는다.
}
Dog.prototype = Animal.prototype; // 프로토타입을 공유해야 하므로 Animal 객체 생성자의 프로토타입을 상속받은 객체 생성자 함수의 프로토타입을 넣어준다.

function Cat(name, sound) {
  Animal.call(this, "개", name, sound);
}
Cat.prototype = Animal.prototype;

const _dog = new Dog("멍멍이", "멍멍");
const _cat = new Cat("야옹이", "야옹");

_dog.say();
_cat.say();
