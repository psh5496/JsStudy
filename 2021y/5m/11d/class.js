// 클래스, 객체 생성자로 구현했던 코드를 더 깔끔하게 구현할 수 있음
class Animal {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() {
    console.log(this.sound);
  } // 클래스 내부의 함수를 메소드라고 부르며, 메소드를 만들면 자동으로 프로토타입 등록이 된다.
}
const dog = new Animal("개", "멍멍이", "멍멍");
const cat = new Animal("고양이", "야옹이", "야옹");

dog.say();
cat.say();

// 클래스를 이용한 상속
class Dog extends Animal {
  constructor(name, sound) {
    super("개", name, sound); // super() 함수는 상속받은 클래스의 생성자를 가리킴
  }
}

class Cat extends Animal {
  constructor(name, sound) {
    super("고양이", name, sound);
  }
}

const dog2 = new Dog("멍멍이", "멍멍");
const dog3 = new Dog("왈왈이", "왈왈");
const cat2 = new Cat("야옹이", "야옹");
const cat3 = new Cat("냐옹이", "냐옹");

dog2.say();
dog3.say();
cat2.say();
cat3.say();
