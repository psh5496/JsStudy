# Feedback1

1. dataType.js에서 number, string, boolean, null, undefined 만을 다뤘는데 이게 끝인가?
   - 자바스크립트의 타입은 **기본 타입과 참조 타입**으로 나뉜다. 기본 타입은 **값을 그대로 할당**하고, 참조 타입은 **값이 저장된 주소값을 할당**한다.
   - **기본형**
     * **Number** : 말 그대로 **숫자**, 자바스크립트는 다른 언어와는 달리 **정수와 실수를 따로 구분하지 않음.**
     * **String** : 문자열, 큰 따옴표("")나 작은 따옴표('')로 둘러싸인 **문자들의 집합**.
     * **Boolean** : **참(true)과 거짓(false)**을 표현.
     * **null** : 의도적으로 **값이 없음**을 의미함.
     * **undefined** : 아직 **값이 정해지지 않았음**을 의미함.
     * **symbol** : ES6부터 추가된 타입으로 **유일하고 변경할 수 없는** 타입.
   - **참조형**
     * **Object** : 객체, 여러 프로퍼티나 메소드를 묶어놓은 **일종의 집합체.**
     * array나 function도 모두 객체임.
2. dataType.js에서 var, let, const 중 굳이 let을 사용한 이유는?
   * var는 **현재는 사용되지 않기 때문**에 사용하지 않았고, const의 경우 **값이 바뀌면 오류가 발생**할수 있기 때문에 코드 작성의 편의를 위해 **비교적 유연한 let을 사용**했다.
3. operator.js에서 57번째 줄에서  "==은 타입 검사를 하지 않으므로" 라고 되어 있는데, 그러면 0과 ""(빈 문자열)은 다른 값인데 어떻게 true인가?
   * 오직 타입 검사를 하지 않는다고 하면 설명이 미흡하다. ==은 **피연산자가 서로 다른 타입이면 타입을 강제로 변환해서 비교**하기 때문에 0과 빈 문자열을 비교했을 때 true가 출력되는 것이다.