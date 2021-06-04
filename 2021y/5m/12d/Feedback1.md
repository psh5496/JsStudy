# Feedback1

1. ?. 연산자는 무엇일까?

   - ?. 연산자는 **optional chaining 연산자**라고 부른다.

   - null이나 undefined와 같은 **빈 값에 대한 예외처리**를 해준다.

   - 객체가 **undefined** 또는 **null**일 때 **undefined를 반환**한다.

     ```javascript
     const objects = {
         apple: {
             number: 3
         }
     };
     
     const numberOfBanana = objects.banana?.number;
     console.log(numberOfBanana); // undefined
     ```

2.  ?? 연산자는 무엇일까?

   * ?? 연산자는 **nullish coalescing 연산자**라고 부른다.

   * 값이 **null** 또는 **undefined**인 경우에 **기본값을 정해준다.**

   * null이나 undefined가 아닌 **다른 falsy값은 적용되지 않는다.**

     ```javascript
     const objects = {
         apple: {
             number: 3
         }
     };
     
     const numberOfBanana = objects.banana?.number ?? 0;
     console.log(numberOfBanana); // 0
     ```

3. parameter가 객체인 경우에는 default parameter를 어떻게 사용해야 할까?

   * 다음과 같이 사용할 수 있다.

     ```javascript
     function makePizza({ count = 1, toppings = ['cheese'] }) {
         console.log(`${toppings.join('와(과) ')}이(가) 올라간 피자 ${count}개를 주문했습니다.`);
     }
     
     makePizza({}); // cheese이(가) 올라간 피자 1개를 주문했습니다.
     makePizza({ count: 2 }); // cheese이(가) 올라간 피자 1개를 주문했습니다.
     makePizza({ count: 2, toppings: ['bacon'] }); // bacon이(가) 올라간 피자 2개를 주문했습니다.
     makePizza({ toppings: ['bacon', 'potato'] }); // bacon와(과) potato이(가) 올라간 피자 1개를 주문했습니다.
     makePizza() // 에러
     ```

   * 객체를 포함하지 않고 함수를 호출하면 에러가 발생하는데.이는 파라미터 객체 옆에 = {}를 붙여주면 해결할 수 있다.

     ```javascript
     function makePizza({ count = 1, toppings = ['cheese'] } = {}) {
         console.log(`${toppings.join('와(과) ')}이(가) 올라간 피자 ${count}개를 주문했습니다.`);
     }
     
     makePizza() // cheese이(가) 올라간 피자 1개를 주문했습니다.
     ```

     

