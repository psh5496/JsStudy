# 자바스크립트에서의 함수

* ### 함수와 this

  * this란?

    * **대부분의 경우 this의 값은 함수를 호출한 방법이 결정한다.**
    * 메소드를 호출 할 때 뿐만 아니라 **일반 함수를 호출** 하거나 **이벤트 리스너가 호출** 될 때도 **this 속성이 만들어짐.**
    * this 속성에 저장되는 값은 **상황에 따라 각각 다름**.

  * 다양한 **this**

    * 기본적으로 this는 **window**이다.

      ```javascript
      console.log(this); // window
      ```

      

    * 객체의 메소드에서의 this는 **객체를 가리킨다.**

      ```javascript
      const obj = {
          a: function() {
              console.log(this)
          }
      }
      obj.a() // obj
      
      let a2 = obj.a;
      a2(); // window
      // a2는 단순히 obj.a를 꺼내온 것이지, obj의 메소드가 아니다. 따라서 this를 출력하면 obj가 아니라 window가 나오게 된다.
      ```

      

    * 일반 함수에서 this는 **window**이다. **엄격 모드에서는 undefined**가 된다.

      ```javascript
      function a() {
      	return this;
      }
      console.log(a()); // window
      
      function b() {
          "use strict"
          return this;
      }
      console.log(b()); // undefined
      ```

      

    * 이벤트 리스너에서 this는 **이벤트가 적용된 엘리먼트**를 가르킨다.

      ```javascript
      document.body.onclick = function() {
          console.log(this); // <body></body>
      }
      ```

  * **this를 지정해주는 함수**

    * call 메소드는 this를 특정값으로 지정할 수 있다.

      ```javascript
      const person1 = {
          name: '홍길동'
      };
      const person2 = {
          name: '유관순'
      };
      
      function introuduce() {
          return this.name;
      };
      
      console.log(introuduce());
      console.log(introuduce.call(person1)); // 홍길동
      console.log(introuduce.call(person2)); // 유관순
      ```

    * apply 메소드는 매개변수를 처리하는 방법을 제외하고 call 메소드와 동일하다.

      ```javascript
      function person(name, age) {
          this.name = name;
          this.age = age;
      };
      
      const person1 = {};
      
      person.apply(person1, ['홍길동', 23]);
      console.log(person1.name); // 홍길동
      ```

    * bind 메소드는 this 값을 영구적으로 바꾼다.