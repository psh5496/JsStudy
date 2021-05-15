# this

### 1. 자바스크립트에서 this란?

 * 자바를 포함한 **대부분의 객체 지향 언어에서 this**는 **클래스로 생성한 인스턴스 객체**를 의미한다.

 * 그러나 **자바스크립트에서 this**는 **함수 호출 방식**에 의해 바인딩 되는 객체가 **동적으로 결정된다.** 다시 말해, this에 바인딩할 객체가 **정적으로 결정되는 것이 아니고,** 함수가 호출할 때 **함수가 어떻게 호출되었는지에 따라** this에 바인딩할 객체가 **동적으로 결정된다.**

   

### 2. this를 어디에 사용하는가?

* **생성자 함수에서의 this**는 **생성된 인스턴스**를 가르키므로 this를 이용하면 생성자 함수를 **쉽게** 사용할 수 있다.

  ```javascript
  function Person(name, age) {
  	this.name = name;
      this.age = age;
  }
  
  const eunGyeol = new Person(eunGyeol, 18);
  console.log(eunGyeol.age) // 18
  ```

* 객체 내부에 메소드를 선언했을 때 **this는 그 객체**를 가르키는데, 그 **객체 안의 프로퍼티 값을 동적으로 참조**함으로써 본인의 객체를 참조한다는 사실을 보다 **명시적으로 표현**할 수 있다.

  ```javascript
  const hello = {
      name: '박성현',
      say: function() {
  		console.log(`안녕하세요 저는 ${this.name}입니다.`)
      }
  }
  
  hello.say();
  ```



### 3. this를 사용하면 안 되는 경우

* 보통 this를 사용하면 자기 자신을 참조한다는 느낌을 명시적으로 표현할 수 있다.

* 예를 들어 **일반 함수에서 this**를 사용하는 경우 **window**를 가르키게 되는데, window는 **전역 객체**이므로 굳이 this로 **window를 참조할 필요도 없고** 코드도 **이해하기 어려워지므로** 굳이 사용하지 않는다.

  ```javascript
  function hello() {
      console.log('This is ' + this);
  }
  
  hello() // This is window.
  ```



### 4. 화살표 함수와 this

* 우선 화살표 함수에는 this가 없다. 그렇기 때문에 외부에서 this를 빌려온다.

* 화살표 함수는 this를 빌려올 때 화살표 함수가 아닌 다른 함수를 만날 때까지 상위 스코프로 올라가서 this를 빌려온다.

  ```javascript
  const kristoff = {
      name: "kristoff",
      married: true,
      printFamilly: function() {
          const pet = "sven";
          let familly = pet;
          
          function metOlaf() {
              if(this.married) {
                  familly += ", elsa, anna, olaf";
              }
              return familly
          }
          console.log(`kristoff's familly: ${metOlaf()}`);
      }
  }
  
  kristoff.printFamilly(); // kristoff's familly: sven
  // metOlaf()는 객체의 메소드 안에 있는 중첩 함수(일반 함수)이므로 this는 window를 가르킨다. 따라서 if문이 걸리지 않고 넘어간다.
  ```

  ```javascript
  const kristoff = {
      name: "kristoff",
      married: true,
      printFamilly: function() {
          const pet = "sven";
          let familly = pet;
          
          let metOlaf = () => {
              if(this.married) {
                  familly += ", elsa, anna, olaf";
              }
              return familly
          }
          console.log(`kristoff's familly: ${metOlaf()}`);
      }
  }
  
  kristoff.printFamilly(); // kristoff's familly: sven, elsa, anna, olaf
  // metOlaf()는 화살표 함수이므로 상위 스코프인 printFamilly의 this를 빌려온다. 따라서 this는 kristoff를 가르킨다.
  ```

  

### 5. this 관련 메소드

* this에 바인딩 되는 객체는 **함수 호출 패턴에 의해 결정**된다. 이러한 암묵적 this 바인딩 이외에 **this를 특정 객체에 명시적으로 바인딩할 수도 있다.**

* **apply() 메소드**

  * 첫 번째 파라미터에 **바인딩 될 객체**를, 두 번째 파라미터에 **argument의 배열**을 전달하며 함수를 호출한다.

    ```javascript
    const Person = function(name, age) {
      this.name = name;
      this.age = age;
    };
    
    var foo = {};
    
    // apply 메소드는 생성자함수 Person을 호출한다. 이때 this에 객체 foo를 바인딩하고, 객체 foo에 'name'과 18의 값을 파라미터로 넘겨준다.
    Person.apply(foo, ['name', 18]);
    
    console.log(foo); // { name: 'name', age: 18 }
    // foo 객체에는 name과 age 프로퍼티가 없기 때문에, name과 age 프로퍼티가 동적으로 추가되고 값이 할당된다.
    ```

* **call() 메소드**

  * apply() 메소드와 기능은 같지만, apply() 메소드의 두 번째 파라미터에서 argument를 배열 형태로 넘겼던 것을 각각 하나의 파라미터로 넘긴다. 

    ```javascript
    const Person = function(name, age) {
      this.name = name;
      this.age = age;
    };
    
    var foo = {};
    
    Person.call(foo, 'name', 18);
    
    console.log(foo); // { name: 'name', age: 18 }
    ```

* **bind() 메소드**

  * apply() 메소드와, call() 메소드와는 달리 **함수를 호출하지 않고 바인딩만 한다.** 따라서 **명시적으로 함수를 호출해야 한다.**

    ```javascript
    function Person(name) {
      this.name = name;
    }
    
    Person.prototype.doSomething = function (callback) {
      if (typeof callback == 'function') {
        // callback.call(this);
        // this가 바인딩된 새로운 함수를 호출
        callback.bind(this)();
      }
    };
    
    function foo() {
      console.log('#', this.name);
    }
    
    var p = new Person('Lee');
    p.doSomething(foo);  // 'Lee'
    ```

    

