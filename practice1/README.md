# (1) 아래의 Q&A 읽어보고 답변 달아보기, 모르거나 헷갈리는 부분이 있다면 조내에서 공유하기 - 개인과제

## Q1. 리액트를 사용하는 이유를 설명해보세요 (2가지 이상)

    - 컴포넌트로 나눠서 구성할 수 있어서 재사용성이 높고 한 파일에서 여러 코드를 작성하는게 아니니까 가독성도 좋고 유지보수가 편하다.
    - 가상돔을 사용해서 상태 변경이 일어날 때 필요한 부분만 업데이트해서 실제 dom 조작을 최소화한다.

## Q2. 리액트가 가상 돔을 사용하는 이유는 무엇일까요?

    - 값이 변할때마다 불필요한 리렌더를 없애고 필요한 부분만 리렌더링 하고 직접적으로 dom에 접근하는 경우가 적어지기 때문에 효율적이고 빠르게 리랜더 할 수 있다.
    - 리액트는 가상 DOM을 사용하여 성능을 최적화하는데, 이는 브라우저에서 DOM 요소를 직접 조작하는 것보다 효율적이기 때문에 사용한다. 가상 DOM은 변경된 부분만 실제 DOM에 적용함으로써 렌더링 성능을 향상시킨다.

## Q3. 리액트가 가상 돔과 돔 트리를 비교하여 바뀐 부분이 있다면 화면을 다시 그리는 행위를 무엇이라 할까요?

    - Rerendering

## Q4. (Q3)의 행위를 통해 얻을 수 있는 이점은 무엇이며 언제 실행될까요?

    - 리액트는 변경된 부분만 다시 그리기 때문에 렌더링 효율이 향상된다.
    - 개발자가 상태변화를 원하는 시점에 어떻게 줄지 정할 수 있어서 동적인 페이지를 만들기 좋다.

## Q5. 리액트는 SPA입니다. 이에 따라 index.html이 하나 뿐인데요, 어떻게 주소마다 다른 화면을 보여줄 수 있을까요? 그리고 그로 인한 장점은 무엇일까요?

    하나의 HTML 파일을 기반으로 다양한 화면을 보여주는 방법:
        - 라우터를 사용해서 URL의 경로에 따라 다른 컴포넌트를 렌더링할 수 있다.
    이로인한 장점:
        - 모든 페이지를 첫 로딩시 한번에 불러올 수 있다.

## Q6. 훅 함수는 왜 만들게 되었을까요?

아래의 각 훅함수의 어떠한 장점이 있는지 정의를 선언하고, 반드시 그에 대한 예시를 한가지 씩 작성해보세요.

    (1) useState
        - 역할: 함수 컴포넌트에서 상태값을 관리할 수 있게 해줍니다.
        - 예시:

    (2) useRef
        - 역할: DOM 요소에 접근하거나 이전 값과 같은 데이터를 저장할 때 유용하며, 렌더링과 관련 없는 작업을 처리한다.
        - 예시:

    (3) useEffect
        - 역할: [데이터 가져오기, 구독 설정, DOM 조작 등] 을 처리할 때 사용하며, 렌더링 후에 작업을 실행하거나 정리 작업을 수행할 수 있다.
        - 예시:

    (4) useCallback
        - 역할: 리렌더링 시, 복잡한 함수(연산, 로직) 을 다시 선언하지 않도록 기억하는 함수이다. 랜더링 성능을 개선한다. (단, 캐싱에도 비용이 많이 소모된다.)
        - 예시:

    (5) useMemo
        - 역할: 특정 로직의 결과값을 저장한다. 의존하는 상태가 변하면, 새로운 결과값을 저장한다. 랜더링 성능을 개선한다. (단, 캐싱에도 비용이 많이 소모된다.)
        - 예시:

## Q7. 팀원들과 리액트로 프로젝트를 만들려고 할 때 고려해야하는 사항들을 아는대로 작성해보세요 (3가지 이상)

    - 커밋, 파일명, 폴더명 등등 컨벤션
    - 역할 분담
    - 환경설정 (create-react-app/vite, yarn/npm, js/ts 등등등)

## Q8. 리액트에서 컴포넌트를 나누는 기준은 어떻게 되어야할까요?

    - UI 기반 컴포넌트 (ex> Header, Footer 등) vs Data 기반 컴포넌트 (데이터 값에 따라 변경이 이뤄지는 컴포넌트, ex> SignIn, SingUp 등)
    - 재사용되는 UI (Button, Input, Header, Footer … 등등)
    - 특정 상태에 대한 의존 여부