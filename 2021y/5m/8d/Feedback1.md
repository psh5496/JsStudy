# Feedback1

1. Getter 함수와 Setter 함수는 왜 사용하는가?

   * 일반적으로 객체들의 필드에 접근할 때 필드들을 pivate 접근 제한자로 막아두고 Getter, Setter로 접근하는 방식을 사용한다. 그 이유는 객체의 무결성을 보장하기 위함이다. 만약에 값을 외부에서외부에서 직접적으로 접근할 경우 객체의 무결성이 깨질 수도 있다. 이를 방지하기 위해, Setter 함수를 이용해 값을 내부에서 변경한 뒤 필드에 넣어주는 방식을 사용하고, Getter 함수를 이용해 본 필드의 값을 숨긴 채 값을 꺼낼 수 있다.

2. JS에서 else-if는 실제로 없는데 어떻게 저런 else-if 구문을 사용할 수 있는가?

   * js엔 else if가 없는 대신 if-else 문을 중첩하여 사용함으로 else if 절의 역할을 대신할 수 있다.

3. 함수의 반환 값을 지정하지 않으면 반환하는 값은?

   * 반환할 값을 지정하지 않고 단순히 return; 이라고 코드를 작성한 경우에는 undefined를 반환한다.

4. 템플릿 리터럴이란?

   * 이중 따옴표나 작은 따옴표 대신에 백틱 안에 ${expression}를 사용한다. 플레이스 홀더 안에 있는 텍스트는 함수로 전달되어 해당 부분을 문자열로 연결시켜준다. 문자열을 합칠 때 변수가 많으면 번거로워질 수 있는데 이를 해결할 수 있다.

5. 일반 함수와 화살표 함수의 차이 (this 제외)

   * 화살표 함수는 기본적으로 일반 함수보다 간결하다. 예를 들어 파라미터가 한 개라면 괄호를 생략할 수 있다.
   * 일반 함수에선 argument라는 문법을 사용할 수 있는데 화살표 함수에선 불가능하다.
   * 화살표 함수는 prototype 프로퍼티를 가지고 있지 않기 때문에 생성자 함수로 사용할 수 없다.

6. 객체를 정의하는 여러 방법

   * Object() 객체의 생성자 함수를 이용한다.

     ```javascript
     const member = new Object();
     
     member.id = 'qwe123';
     member.pass = '1234';
     member.name = '홍길동'
     ```

   * 객체 리터럴을 이용한다.

     ```javascript
     const member = {
         id: 'qwe123',
         pass: '1234',
         name: '홍길동'
     }
     ```

   * 생성자 함수를 이용한다.

     ```javascript
     const Member = function(id, pass, name) {
         this.id = id;
         this.pass = pass;
         this.name = name;
     }
     
     const member = new Member('qwe123', '1234', '홍길동');
     ```

     

