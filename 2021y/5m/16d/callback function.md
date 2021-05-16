# callback function

* ### 콜백 함수란?

  * 함수 내부에서 **파라미터로 전달되어 특정 시점에 호출되는 함수**를 의미한다.

  * 자바스크립트는 **싱글 스레드로 동작**하기 때문에 비동기 처리를 해주어야 하는데, 이 **비동기 처리를 위해 사용**되는 것이 콜백 함수이다.

    

* ### 콜백 함수를 이용한 비동기 처리

  * 1, 2, 3 순서대로 출력하기

    ```javascript
    function increaseAndPrint(n, callback) {
        setTimeout(() => {
    		const increased = n + 1;
            console.log(increased);
            if (callback) {
               callback(increased); 
            }
        }, 1000);
    }
    
    increaseAndPrint(0, n => {
        increaseAndPrint(n, n => {
            increaseAndPrint(n, n => {
                console.log('끝!');
            })
        })
    })
    
    // 콜백 함수를 남용하면 이른바 '콜백 지옥'이라는 지저분한 코드가 된다.
    ```

    

* ### 콜백 지옥을 피하는 방법

  * 