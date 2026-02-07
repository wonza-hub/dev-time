# 글자 관련

- `font-family`, `font-size`, `font-weight`, `line-height`는 tailwind의 기본 유틸리티 클래스를 되도록 사용하지 말고, `global.css` 의 typography 부분의 내용을 참고하여 디자인 시스템에 정의된 것만 사용한다.

# 조건부 스타일링 관련

- 스타일링은 삼항 연산자와 같은 연산자 자바스크립트 연산자를 그대로 사용하는 대신 `@/shared/lib/utils.ts` 의 `cn()` 을 활용한다.
