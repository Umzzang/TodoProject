###  1. 왜 변수 context contextcontextcontext는 if else 구문과 동일한 레벨에 작성 되어있는가 ?

> post로 받았지만 타당하지 않은 경우 context를 포함하여 렌더링 해야 하기 때문에 



### 2. 왜 request의 http method  는 POST 먼저 확인하도록 작성하는가 ?

> POST를 먼저 걸러주고 그 외로 설정해야 하기 때문 .
>
> GET을 먼저 걸러주고 else로 하면 post 와 그 외의 전부 걸러지기 때문에 if가 더 길어질 수 있음

