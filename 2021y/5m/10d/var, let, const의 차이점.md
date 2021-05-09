# var, let, const의 차이점

1. var는 **변수 재선언이 가능**하지만, let과 const는 **변수 재선언이 불가능**하다.

   ```javascript
   var a = 1;
   var a = 2; // 가능
   
   let b = 1;
   let b = 2; // 불가능
   
   const c = 1;
   const c = 2; // 불가능
   ```

   

2. var와 let은 **변수 재할당이 가능**하지만, const는 **변수 재할당이 불가능**하다.

   ```javascript
   var a = 1;
   a = 2; // 가능
   
   let b = 1;
   b = 2; // 가능
   
   const c = 1;
   c = 2; // 불가능
   ```

   

3. var는 **함수 레벨 스코프(function-level scope)**이고 let과 const는 **블록 레벨 스코프(block-level scope)**이다.

   * var는 함수 내부에 선언된 변수는 **함수 내부에서만 참조가 가능**하고 외부에서는 참조할 수 없다. 즉, **함수 내부에 선언된 변수만 지역변수로 취급**한다.

     ```javascript
     function hello() {
         var a = 10;
         console.log(a)
     }
     
     hello() // 10
     console.log(a) // 오류
     ```

   * 함수를 제외한 영역에서 var로 선언한 변수는 **전역변수로 취급**된다.

     ```javascript
     if(true) {
         var a = 10;
         console.log(a); // 10
     }
     
     console.log(a); // 10
     ```

   * let과 const는 **함수 내부는 물론, if문이나 for문 등의 코드 블럭{ ... } 에서 선언된 변수도 지역변수로 취급**한다.

     ```javascript
     function hello() {
         let a = 10;
         console.log(a); // 10
     }
     
     console.log(a); // 오류
     ```

     ```javascript
     if(true) {
         const a = 10;
         console.log(a); // 10
     }
     
     console.log(a); // 오류
     ```

     

4. var와 let, const는 **호이스팅 방식이 다르다.**

   * 호이스팅이란 함수 안에 있는 선언들을 **모두 끌어올려서 해당 함수 유효 범위의 최상단에 선언하는 것**을 말한다.

     ```javascript
     // var는 선언 단계와 초기화 단계가 동시에 일어나므로 다음과 같은 결과를 출력함
     console.log(name) // undefined
     var name = '홍길동';
     ```

     

     ```javascript
     // let은 선언 단계와 초기화 단계가 분리되어 있으므로 다음과 같은 결과를 출력함
     console.log(name) // 오류
     let name = '홍길동';
     
     // 호이스팅이 일어나지 않는 것 같지만 분리되어 있어서 그렇게 보이는 것 뿐 호이스팅은 일어난다.
     ```

     

