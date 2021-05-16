# call by value VS call by reference in JS

* ### call by value

  * argument로 **value(값)**가 넘어온다.

  * 이 때 넘어올 때는 **'복사된 값'**이 넘어온다.

  * caller가 인자를 복사해서 넘겨주었기 때문에 **callee에서 받은 인자를 수정해도 caller의 값에는 영향을 주지 않는다.**

  * 인자를 넘겨줄 때마다 **메모리 공간을 할당**하기 때문에 **공간을 잡아먹는 단점**이 존재한다.

    

* ### call by reference

  * argument로 **reference(값에 대한 참조 주소)**가 넘어온다.
  * reference를 넘기기 때문에 **reference가 가리키는 값을 복사하지는 않는다.**
  * caller가 인자를 복사해서 넘긴 것이 아니고 참조 값을 넘겼기 때문에 **callee가 받은 인자를 수정하면 caller도 영향을 받는다.**



* ### 자바스크립트의 평가 전략

  * 자바스크립트는 **항상 값에 의한 전달(call by value)**이다.

    ```javascript
    const me = {
    	name: '박성현'
    };
    
    function changeName(person) {
        person = { name: '안은결'};
    }
    
    console.log(me); // { name: '박성현' }
    changeName(me);
    console.log(me); // { name: '박성현' }
    ```

  * me를 인수로 넘겼지만 참조값이 그냥 넘어가는 것이 아니라, 참조값이 **복사되어 넘어간다.** 그렇기 때문에 changeName의 매개변수는 **me의 복사된 참조값**을 가지므로 같은 객체를 가르키고 있다. 여기서 객체( { name: '안은결' } )의 **참조값이 person에 재할당** 되므로 복사된 참조값을 가지던 person은 **객체( { name: '안은결' } )**를 가르키게 되고, me는 여전히 **객체( { name: '박성현' } )**을 가리키고 있으므로 **me에 영향을 주지 않는다.**