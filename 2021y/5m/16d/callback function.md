# callback function

* ### 콜백 함수란?

  * 함수 내부에서 **파라미터로 전달되어 특정 시점에 호출되는 함수**를 의미한다.

  * 자바스크립트는 **싱글 스레드로 동작**하기 때문에 비동기 처리를 해주어야 하는데, 이 **비동기 처리를 위해 사용**되는 것이 콜백 함수이다.

    

* ### 콜백 함수를 이용한 비동기 처리

  * 1부터 시작해서 3까지 1초마다 출력하는 작업

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
    
    increaseAndPrint(0, (n) => {
        increaseAndPrint(n, (n) => {
            increaseAndPrint(n, (n) => {
                console.log('끝!');
            });
        });
    });
    
    // 콜백을 남용하면 코드의 깊이가 계속 깊어지는 콜백 지옥이 발생할 수도 있다.
    ```

    

* ### 콜백 지옥을 피하는 방법

  * **Promise**

    ```javascript
    const myPromise = new Promise((resolve, reject) => {
      // 구현..
    })
    
    // 성공할 때는 resolve를 호출, 실패할 때는 reject를 호출해준다.
    ```

    ```javascript
    function increaseAndPrint(n) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const value = n + 1;
                if (value === 3) {
                    const error = new Error();
                    error.name = 'ValueIsFiveError';
                    reject(error);
                    return;
                }
                console.log(value);
                resolve(value);
            }, 1000);
        });
    }
    
    increaseAndPrint(0)
        .then(increaseAndPrint)
        .then(increaseAndPrint)
        .then(increaseAndPrint)
        .catch((e) => {
            console.error(e);
        });
    ```

    